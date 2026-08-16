const express = require("express");

function page(service, title, body, links) {
  const items = links
    .map(([label, href]) => `<li><a href="${href}">${label}</a></li>`)
    .join("");
  return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><title>${title}</title><style>body{font-family:system-ui;margin:48px;max-width:800px}header{padding:16px;background:#eef4ff}a{color:#0052cc}</style></head><body><header><strong>${service}</strong></header><h1>${title}</h1><p>${body}</p><ul>${items}</ul></body></html>`;
}

function startMainNode(name, port, color) {
  const app = express();
  app.get(["/", "/node"], (req, res) =>
    res.send(
      page(name, `${name} 首页`, `响应实例：${name}，主题色：${color}`, [
        ["访问另一个路由页面", "/node/details"],
        ["访问Node3管理页", "/admin"],
      ]),
    ),
  );
  app.get("/node/details", (req, res) =>
    res.send(
      page(
        name,
        `${name} 详情页`,
        "该页面与首页由同一个 Express 服务中的不同路由直接渲染。",
        [
          ["返回首页", "/"],
          ["访问API", "/api/info"],
        ],
      ),
    ),
  );
  app.get("/health", (req, res) => res.json({ service: name, healthy: true }));
  app.listen(port, "127.0.0.1", () =>
    console.log(`${name} listening on http://127.0.0.1:${port}`),
  );
}

function startNode3() {
  const app = express();
  app.use(express.json());
  app.get("/admin", (req, res) =>
    res.send(
      page("Node3", "管理页面", "用于验证 /admin 路径被路由到独立服务。", [
        ["返回主站", "/"],
        ["访问API", "/api/info"],
      ]),
    ),
  );
  app.get("/api/info", (req, res) =>
    res.json({
      service: "Node3",
      route: "/api/info",
      time: new Date().toISOString(),
    }),
  );
  app.all("/api/cors", (req, res) =>
    res.json({
      service: "Node3",
      method: req.method,
      cors: "Headers are added by Nginx",
    }),
  );
  app.get("/slow", async (req, res) => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    res.json({ service: "Node3", delayed: true });
  });
  app.listen(3203, "127.0.0.1", () =>
    console.log("Node3 listening on http://127.0.0.1:3203"),
  );
}

startMainNode("Node1", 3201, "blue");
startMainNode("Node2", 3202, "green");
startNode3();
