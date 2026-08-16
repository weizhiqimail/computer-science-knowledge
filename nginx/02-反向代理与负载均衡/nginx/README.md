# nginx

[nginx.conf](nginx.conf) 在一份配置中完成四组示例：

- `8085`：`upstream` 与 `least_conn` 在 Node1、Node2 之间分配请求。
- `8086` + `app.demo.local`：普通页面进入主站池，`/api/` 和 `/admin` 进入 Node3。
- `8086` + `api.demo.local`：按域名把全部请求交给 Node3。
- `8087`：按客户端 IP 限制请求速率和并发连接，并处理 CORS 预检及实际响应。

配置中的 `proxy_set_header` 用于保存客户端原始域名、地址和协议。限流状态保存在共享内存区；若 Nginx 前面存在其他代理，应先正确恢复真实客户端 IP。

