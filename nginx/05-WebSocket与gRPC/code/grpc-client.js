const path = require("path");
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const definition = protoLoader.loadSync(
  path.join(__dirname, "realtime.proto"),
  { keepCase: true, defaults: true },
);
const proto = grpc.loadPackageDefinition(definition).demo;
const target = process.env.GRPC_TARGET || "127.0.0.1:8091";

// 默认连接Nginx的gRPC入口；可用GRPC_TARGET环境变量指定其他地址。
const client = new proto.RealtimeService(
  target,
  grpc.credentials.createInsecure(),
);

client.getStatus({ client_name: "NodeClient" }, (error, response) => {
  if (error) console.error(error);
  else console.log("Unary response:", response);
});

// watchEvents返回可读流，data事件会连续收到服务端推送的数据。
const stream = client.watchEvents({ client_name: "NodeClient" });
stream.on("data", (event) => console.log("Stream event:", event));
stream.on("error", (error) => console.error("Stream error:", error.message));
stream.on("end", () => console.log("Stream ended"));
