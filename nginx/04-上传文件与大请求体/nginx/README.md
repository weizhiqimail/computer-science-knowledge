# nginx

[nginx.conf](nginx.conf) 在端口 `8089` 提供上传页面，并只对 `/upload` 放宽请求体和超时限制。

`client_max_body_size` 在入口拦截超大请求；`client_body_timeout` 管理客户端上传停顿；三个代理超时分别管理连接、发送和读取阶段；`proxy_request_buffering off` 让数据边接收边转发。

加载前需要把 `STATIC_ROOT` 替换为本任务 `static` 目录。实际限制还必须与 Node、CDN、云负载均衡器保持一致。

