# code

本目录是反向代理示例的 Express 项目。一个 [servers.js](servers.js) 进程同时启动三个服务，避免为每个节点创建重复项目：

- Node1 `3201`：主站实例一。
- Node2 `3202`：主站实例二。
- Node3 `3203`：API、管理页、CORS 和慢请求服务。

Node1/Node2 的 HTML 页面会显示当前响应节点，并提供页面间跳转链接，便于观察负载均衡是否切换实例。Node3 返回 HTML 或 JSON，用于确认域名和路径分流结果。

## 启动

```bash
npm install
npm start
```

- [servers.js](servers.js)：三个 Express 服务及路由。
- [package.json](package.json)：Express 依赖和启动命令。

