const express = require("express");

const app = express();
let requestCount = 0;

app.get("/public-data", (req, res) => {
  requestCount += 1;
  res.set("Cache-Control", "public, max-age=30");
  res.json({
    message: "该响应来自 Node 动态源站，可通过 Nginx 代理缓存",
    originRequestCount: requestCount,
    generatedAt: new Date().toISOString(),
  });
});

app.get("/private-data", (req, res) => {
  res.set("Cache-Control", "private, no-store");
  res.json({
    message: "私有响应不应进入共享缓存",
    generatedAt: new Date().toISOString(),
  });
});

app.listen(3100, "127.0.0.1", () => {
  console.log("Static cache origin listening on http://127.0.0.1:3100");
});
