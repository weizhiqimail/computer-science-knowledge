# 02-反向代理与负载均衡

## 示例目标

本示例通过一个 JavaScript 文件启动 Node1、Node2、Node3 三个 Express 服务，验证反向代理、负载均衡、域名路由、路径路由、请求限流、并发限制和 CORS。

## 服务角色

- Node1：端口 `3201`，主站实例一。
- Node2：端口 `3202`，主站实例二。
- Node3：端口 `3203`，提供 `/api`、`/admin`、CORS 和慢请求测试。
- Nginx `8085`：Node1/Node2 负载均衡入口。
- Nginx `8086`：域名与路径路由入口。
- Nginx `8087`：限流、并发控制与 CORS 入口。

## 目录职责

- [code](code/)：Express 项目，一个进程同时启动三个独立服务。
- [nginx](nginx/)：一份完整配置，通过多个 `server` 和 `location` 演示所有代理场景。

## 核心原理

### 反向代理

客户端只访问 Nginx，不知道 Node 服务的真实地址。Nginx 使用 `proxy_pass` 把请求交给内部服务，并通过 `X-Real-IP`、`X-Forwarded-For` 和 `X-Forwarded-Proto` 传递原始访问信息。

### 负载均衡

Node1 和 Node2 被放入同一个 `upstream`。`least_conn` 优先选择当前连接较少的实例，适合请求耗时不完全一致的场景。`max_fails` 和 `fail_timeout` 是被动失败处理，只在真实请求失败后暂时避开节点，不是主动健康检查。

### 域名与路径路由

Nginx 先根据 `server_name` 选择虚拟主机，再根据 `location` 选择后端：

- `app.demo.local` 的普通页面进入 Node1/Node2。
- `app.demo.local/api/` 和 `/admin` 进入 Node3。
- `api.demo.local` 的全部请求进入 Node3。

这样可以让多个业务共享一个入口端口，同时保持不同域名和 URL 路径。

### 限流与并发控制

`limit_req_zone` 保存每个客户端 IP 的请求速率状态，`limit_req` 控制平均速率和突发容量；`limit_conn_zone` 与 `limit_conn` 控制同时占用的连接数。超限返回 `429`，避免高频接口或异常客户端压垮后端。

### CORS

浏览器跨域访问前可能发送 OPTIONS 预检请求。Nginx 直接返回允许来源、方法和请求头，实际 API 响应也带相同来源策略。示例只允许指定前端域名，不使用任意来源。

## 启动步骤

1. 进入 [code](code/) 目录执行 `npm install`。
2. 执行 `npm start`，同时启动 Node1、Node2、Node3。
3. 在 Nginx 的 `http` 块中加载 [nginx/nginx.conf](nginx/nginx.conf)。
4. 测试域名路由时，将 `app.demo.local` 和 `api.demo.local` 解析到 `127.0.0.1`，或手动指定 Host 请求头。

## 验证方法

- 多次刷新 `http://localhost:8085`，观察页面中的 Node1、Node2 标识变化。
- 访问 `http://app.demo.local:8086/admin`，确认响应来自 Node3。
- 访问 `http://app.demo.local:8086/node/details`，确认响应来自 Node1 或 Node2，并可通过页面链接跳转。
- 访问 `http://api.demo.local:8086/api/info`，确认域名直接路由到 Node3。
- 高频请求 `http://localhost:8087/api/info`，观察超限时的 `429`。
- 向 `8087` 发送 OPTIONS 请求，检查 CORS 预检响应头。

## 文件入口

- [三个Node服务](code/servers.js)
- [Node项目配置](code/package.json)
- [完整Nginx配置](nginx/nginx.conf)

