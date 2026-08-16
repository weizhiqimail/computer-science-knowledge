# 04-上传文件与大请求体

## 示例目标

本示例演示浏览器通过 Nginx 向 Express 上传文件，并理解请求体大小、客户端上传超时、上游超时和请求缓冲之间的关系。

## 目录职责

- [code](code/)：Express 与 Multer 上传服务，监听 `3400`。
- [nginx](nginx/)：上传入口配置，监听 `8089`。
- [static](static/)：使用 `FormData` 提交文件的浏览器页面。

## 核心原理

浏览器先把 `multipart/form-data` 请求发送到 Nginx。`client_max_body_size` 在入口拒绝过大的请求；符合限制的请求再转发给端口 `3400`。Multer 解析表单并把文件保存到 `code/uploads`。

`proxy_request_buffering off` 表示 Nginx 边接收边发送给 Node，可以减少完整请求体在代理临时目录中的占用，但慢速客户端会更早占用后端连接。开启缓冲则能隔离后端与慢客户端，但需要更多代理磁盘空间。实际项目应按文件大小、网络和后端容量选择。

Nginx 和 Multer 都限制为 100 MiB，形成入口层和应用层的双重保护。生产环境还应增加登录认证、文件类型验证、病毒扫描、用户配额、对象存储和过期清理。

## 启动步骤

1. 进入 [code](code/) 目录执行 `npm install`。
2. 执行 `npm start`，启动 `127.0.0.1:3400`。
3. 将 [nginx/nginx.conf](nginx/nginx.conf) 中的 `STATIC_ROOT` 替换为本任务 `static` 目录绝对路径。
4. 在 Nginx 的 `http` 块中加载配置并访问 `http://localhost:8089`。

## 验证方法

- 上传小文件，确认页面显示原始文件名、保存文件名和字节数。
- 检查 `code/uploads`，确认文件已经落盘。
- 上传超过 100 MiB 的文件，观察 Nginx 或 Multer 返回限制错误。
- 在慢速网络下上传，观察超时参数对连接的影响。

## 文件入口

- [上传服务](code/upload-server.js)
- [Node项目配置](code/package.json)
- [完整Nginx配置](nginx/nginx.conf)
- [上传测试页面](static/index.html)

