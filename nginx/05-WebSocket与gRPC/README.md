# 05-WebSocket与gRPC

## 示例目标

本示例在一个 Node 项目中启动 WebSocket、SSE 和 gRPC 服务，比较三种实时或长连接通信方式，并观察 Nginx 如何代理协议升级、持续响应和 HTTP/2 RPC。

## 端口与目录

- Node `3500`：Express、SSE 和 WebSocket 源站。
- Node `50051`：gRPC 源站。
- Nginx `8090`：浏览器页面、WebSocket 与 SSE 入口。
- Nginx `8091`：gRPC 入口。
- [code](code/)：服务端、gRPC 客户端和 proto 定义。
- [nginx](nginx/)：一份包含两个 `server` 的完整配置。
- [static](static/)：浏览器 WebSocket 与 SSE 测试页面。

## 核心原理

### WebSocket

WebSocket 从 HTTP 握手开始，然后通过 `Upgrade` 和 `Connection` 请求头切换协议。Nginx 不会自动转发这些逐跳请求头，因此配置必须显式传递。升级成功后，连接保持双向通信，测试服务会回显浏览器发送的消息。

### SSE

SSE 是普通 HTTP 长响应，服务器不断写入文本事件。Nginx 必须关闭代理缓冲和缓存，否则事件可能积累一段时间后才到达浏览器。SSE 是服务器向客户端单向推送，浏览器发送数据仍使用普通 HTTP 请求。

### gRPC

gRPC 使用 HTTP/2 和 Protocol Buffers。`realtime.proto` 定义服务、方法和消息；`proto-loader` 在运行时加载定义，`@grpc/grpc-js` 创建服务端和客户端。

Nginx 使用 `grpc_pass` 而不是普通 `proxy_pass`。配置按完整服务名 `/demo.RealtimeService/` 匹配，因此可以把不同 gRPC 服务路由到不同上游。本示例同时提供普通一元调用和服务端流式调用。

## 启动步骤

1. 进入 [code](code/) 目录执行 `npm install`。
2. 执行 `npm start`，同时启动端口 `3500` 和 `50051`。
3. 将 [nginx/nginx.conf](nginx/nginx.conf) 中的 `STATIC_ROOT` 替换为本任务 `static` 目录绝对路径。
4. 在 Nginx 的 `http` 块中加载配置。
5. 浏览器访问 `http://localhost:8090`；另开终端执行 `npm run grpc-client`。

## 验证方法

- WebSocket 区域显示连接成功，发送文本后收到 JSON 回显。
- SSE 区域每秒出现一条事件，且不会成批延迟显示。
- gRPC 客户端先收到一次状态响应，再连续收到服务端流事件。
- 停止 Node 服务后观察长连接断开和客户端错误，理解上游故障的表现。

## 注意事项

长连接持续占用连接和内存资源，生产系统需要容量规划、心跳、空闲超时、断线重连和优雅关闭。示例 gRPC 使用明文 HTTP/2；互联网入口通常需要 TLS。

## 文件入口

- [实时通信和gRPC服务端](code/server.js)
- [gRPC客户端](code/grpc-client.js)
- [ProtocolBuffers定义](code/realtime.proto)
- [Node项目配置](code/package.json)
- [完整Nginx配置](nginx/nginx.conf)
- [浏览器测试页](static/index.html)

