# code

本目录是实时通信示例的 Node 项目：[server.js](server.js) 同时启动 Express/SSE/WebSocket 服务和 gRPC 服务。

- SSE 每秒写入一条事件。
- WebSocket 在握手后回显客户端消息。
- gRPC 提供一次请求一次响应的 `GetStatus`，以及持续推送的 `WatchEvents`。
- [realtime.proto](realtime.proto) 是客户端和服务端共同遵守的接口契约。
- [grpc-client.js](grpc-client.js) 默认通过 Nginx `8091` 调用服务。

## 启动

```bash
npm install
npm start
```

另开终端测试 gRPC：

```bash
npm run grpc-client
```

[package.json](package.json) 已包含 Express、ws、`@grpc/grpc-js` 和 `@grpc/proto-loader` 依赖及两个启动命令。

