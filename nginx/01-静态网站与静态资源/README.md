# 01-静态网站与静态资源

## 示例目标

本示例用于理解 Nginx 如何在不进入业务应用的情况下直接返回静态文件，以及如何处理单页应用路由、浏览器缓存、代理缓存和文本压缩。

涉及四个测试服务：

- `8081`：传统静态网站和静态资源缓存。
- `8082`：SPA 前端路由回退。
- `8083`：缓存 Node 动态源站的公开响应，同时绕过私有响应。
- `8084`：对文本资源进行 gzip 压缩。

## 目录职责

- [code](code/)：动态源站，专门用于观察 Nginx 代理缓存是否命中。
- [nginx](nginx/)：一份完整配置，通过四个 `server` 隔离四种示例。
- [static](static/)：传统静态站点、SPA、图片、文档和下载文件。

## 核心原理

### 静态文件直接返回

Nginx 根据请求 URI 在 `root` 指定的目录中寻找文件。`try_files` 先验证文件是否存在，存在就直接读取并返回，不需要 Node、Java 或 Python 参与，因此可以减少应用服务器连接数和计算开销。

静态资源使用单独的扩展名匹配规则，并设置 `expires` 与 `Cache-Control`。浏览器在缓存有效期内可以直接使用本地副本，从而减少重复请求。

### SPA 路由回退

React、Vue、Angular 等单页应用的 `/products` 或 `/about/team` 通常不是磁盘上的真实文件。Nginx 先尝试真实文件；找不到页面路径时返回 `index.html`，再由浏览器中的前端路由决定显示内容。

CSS、JavaScript 和图片不存在时仍返回 `404`，不能回退到 HTML，否则浏览器会把 HTML 当作资源解析。入口 HTML 使用 `no-cache`，避免发布后继续引用旧资源。

### 代理缓存

请求先到 Nginx，缓存未命中时才访问端口 `3100` 的 Node 源站。成功响应会写入 `proxy_cache_path` 指定的缓存；后续相同请求可以由 Nginx 直接返回。

`X-Cache-Status` 用来观察 `MISS`、`HIT` 或 `STALE`。私有响应显式绕过缓存，说明登录用户数据、权限数据等内容不能放入共享缓存。

### gzip 压缩

Nginx 在返回 HTML、CSS、JavaScript、JSON、XML、SVG 等文本内容前进行 gzip 压缩，用 CPU 换取更小的传输体积。图片、视频和压缩包已经压缩，通常不应再次处理。

## 启动步骤

1. 进入 [code](code/) 目录执行 `npm install`。
2. 执行 `npm start`，启动 `127.0.0.1:3100` 动态源站。
3. 打开 [nginx/nginx.conf](nginx/nginx.conf)，把所有 `STATIC_ROOT` 替换为本任务 `static` 目录的绝对路径。
4. 把 `CACHE_ROOT` 替换为 Nginx 进程拥有写权限的缓存目录。
5. 在主 Nginx 配置的 `http` 块中加载该文件，先执行配置检查，再平滑加载。

## 验证方法

- 访问 `http://localhost:8081`，确认页面、CSS、SVG 和下载文件可访问。
- 访问 `http://localhost:8082/products` 并刷新，确认仍返回 SPA 页面。
- 连续请求 `http://localhost:8083/public-data`，观察 `X-Cache-Status` 从 `MISS` 变为 `HIT`，且源站计数不再递增。
- 请求 `http://localhost:8083/private-data`，确认它始终绕过共享缓存。
- 请求 `http://localhost:8084` 并检查 `Content-Encoding`，确认满足条件的文本响应经过 gzip。

## 文件入口

- [动态源站代码](code/origin-server.js)
- [Node项目配置](code/package.json)
- [完整Nginx配置](nginx/nginx.conf)
- [传统静态站点](static/site/index.html)
- [SPA测试页](static/spa/index.html)

