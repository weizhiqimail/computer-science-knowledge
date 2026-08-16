const path = require("path");
const http = require("http");
const express = require("express");
const WebSocket = require("ws");
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const app = express();
app.get("/health", (req, res) => res.json({ healthy: true }));

// SSE保持普通HTTP响应不结束，并按固定格式持续写入事件。
app.get("/events", (req, res) => {
  res.set({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });
  res.flushHeaders();
  let sequence = 0;
  const timer = setInterval(
    () =>
      res.write(
        `event: tick\ndata: ${JSON.stringify({ sequence: ++sequence, time: new Date().toISOString() })}\n\n`,
      ),
    1000,
  );
  req.on("close", () => clearInterval(timer));
});

const httpServer = http.createServer(app);

// ws复用Express所在的HTTP服务器，只接管/ws上的协议升级请求。
const wsServer = new WebSocket.Server({ server: httpServer, path: "/ws" });
wsServer.on("connection", (socket) => {
  socket.send(
    JSON.stringify({ type: "welcome", message: "WebSocket连接成功" }),
  );
  socket.on("message", (data) =>
    socket.send(
      JSON.stringify({
        type: "echo",
        message: data.toString(),
        time: new Date().toISOString(),
      }),
    ),
  );
});
httpServer.listen(3500, "127.0.0.1", () =>
  console.log("HTTP/SSE/WebSocket listening on 127.0.0.1:3500"),
);

// proto-loader在运行时读取.proto，因此实验不需要额外运行protoc生成代码。
const definition = protoLoader.loadSync(
  path.join(__dirname, "realtime.proto"),
  { keepCase: true, defaults: true, oneofs: true },
);
const proto = grpc.loadPackageDefinition(definition).demo;
const grpcServer = new grpc.Server();

// 方法名对应.proto中的RPC定义：一个普通调用，一个服务端流式调用。
grpcServer.addService(proto.RealtimeService.service, {
  getStatus(call, callback) {
    callback(null, {
      message: `Hello ${call.request.client_name || "anonymous"}`,
      server_time: new Date().toISOString(),
    });
  },
  watchEvents(call) {
    let sequence = 0;
    const timer = setInterval(
      () =>
        call.write({
          sequence: ++sequence,
          message: "gRPC server stream event",
          server_time: new Date().toISOString(),
        }),
      1000,
    );
    call.on("cancelled", () => clearInterval(timer));
    setTimeout(() => {
      clearInterval(timer);
      call.end();
    }, 10000);
  },
});
grpcServer.bindAsync(
  "127.0.0.1:50051",
  grpc.ServerCredentials.createInsecure(),
  (error) => {
    if (error) throw error;
    grpcServer.start();
    console.log("gRPC listening on 127.0.0.1:50051");
  },
);
