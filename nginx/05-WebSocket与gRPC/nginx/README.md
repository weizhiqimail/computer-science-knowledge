# nginx

[nginx.conf](nginx.conf) 使用两个 `server`：

- `8090` 提供浏览器页面，并代理 `/ws` 和 `/events`。
- `8091` 使用 HTTP/2 和 `grpc_pass` 代理 `/demo.RealtimeService/`。

WebSocket 需要显式转发协议升级请求头；SSE 需要关闭缓冲和缓存；gRPC 不能使用普通 `proxy_pass`，而要使用支持 gRPC 语义的 `grpc_pass`。较长的读写超时用于演示长连接，但生产值应结合心跳、容量和故障恢复策略设置。

