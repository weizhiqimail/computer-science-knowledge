# code

本目录是文件上传示例的 Express 项目。Multer 负责解析 `multipart/form-data`，限制一次上传一个文件且不超过 100 MiB，并把文件保存到运行时创建的 `uploads` 目录。

## 启动

```bash
npm install
npm start
```

服务监听 `127.0.0.1:3400`。生产环境不能只依赖扩展名，还需要鉴权、内容检测、病毒扫描、配额和清理策略。

- [upload-server.js](upload-server.js)：上传处理、文件名清理和错误响应。
- [package.json](package.json)：Express、Multer 依赖和启动命令。

