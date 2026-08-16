# code

本目录是代理缓存示例的动态源站。Nginx 第一次请求 `/public-data` 时访问此服务，随后在缓存有效期内直接返回缓存。响应中的 `originRequestCount` 可以证明后端是否真的再次执行。

`/private-data` 返回 `private, no-store`，用于对比不能进入共享缓存的用户私有响应。

## 启动

```bash
npm install
npm start
```

服务监听 `127.0.0.1:3100`。

- [origin-server.js](origin-server.js)：Express 动态源站。
- [package.json](package.json)：依赖和 `npm start` 命令。

