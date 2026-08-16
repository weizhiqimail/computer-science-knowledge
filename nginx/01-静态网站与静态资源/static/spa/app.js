const pages = {
  "/": "这是SPA首页。",
  "/products": "这是产品路由，刷新页面仍由index.html接管。",
  "/about/team": "这是多级前端路由。",
};
document.querySelector("#app").textContent =
  pages[location.pathname] || `前端处理未知路由：${location.pathname}`;
document.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", (e) => {
    e.preventDefault();
    history.pushState({}, "", a.pathname);
    document.querySelector("#app").textContent =
      pages[location.pathname] || location.pathname;
  }),
);
addEventListener("popstate", () => location.reload());
