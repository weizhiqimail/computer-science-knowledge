# static

[index.html](index.html) 是 WebSocket 与 SSE 的浏览器测试界面：左侧建立 WebSocket 连接并发送回显消息，右侧通过 `EventSource` 持续显示 SSE 事件。

页面使用当前域名和端口连接 `/ws`、`/events`，因此所有通信都会经过 Nginx，可以直接观察升级请求头、代理缓冲和长连接超时配置的影响。

