# static

本目录提供两个不依赖构建工具的静态测试站点：

- [site](site/)：验证 Nginx 直接返回 HTML、CSS、SVG、文本说明和下载文件，以及浏览器缓存响应头。
- [spa](spa/)：验证不存在的页面路径回退到 `index.html`，再由浏览器 JavaScript 路由处理。

这两个站点刻意保持简单，便于把响应差异归因于 Nginx 配置，而不是前端框架或构建工具。

