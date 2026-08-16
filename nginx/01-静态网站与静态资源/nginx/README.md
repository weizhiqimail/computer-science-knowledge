# nginx

本目录的 [nginx.conf](nginx.conf) 同时启动四个测试 `server`：

- `8081` 使用 `root`、`try_files`、`expires` 提供传统静态站点。
- `8082` 使用 `try_files ... /index.html` 实现 SPA 路由回退。
- `8083` 使用 `proxy_cache` 缓存公开动态响应，并绕过私有响应。
- `8084` 使用 `gzip` 压缩文本资源。

配置按设计放在主 Nginx 配置的 `http` 块内。加载前必须替换 `STATIC_ROOT` 和 `CACHE_ROOT`。每条关键指令的用途都写在同行注释中，可对照响应头和 Node 源站计数观察效果。

