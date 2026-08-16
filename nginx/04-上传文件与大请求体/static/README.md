# static

[index.html](index.html) 是上传示例页面。浏览器使用 `FormData` 以 `multipart/form-data` 形式向 `/upload` 提交文件，并把服务端 JSON 结果显示在页面中。

该页面由 Nginx 直接返回，上传请求则由同一域名下的 Nginx 转发给 Express，因此浏览器不需要额外处理跨域。

