# 1. 用户输入

+ 判断输入的关键字是搜索内容，还是请求的 URL。
+ 标签页上的图标便进入了加载状态，

# 2. 请求过程

+ 浏览器进程会通过进程间通信（IPC）把 URL 请求发送至网络进程，发起真正的 URL 请求流程。
+ 本地缓存是否缓存了该资源。
  + DNS 解析，请求 IP 地址，建立 TLS 连接
  + 用 IP 地址和服务器建立 TCP 连接
+ 浏览器构建请求航、请求头，把 Cookie 等信息添加到请求头，向服务器发送构建的请求信息。
+ 服务端根据请求信息生成响应数据。
+ **重定向**
+ **响应数据类型处理 Content-Type**

# 3. 准备渲染进程

+ 每个标签对应一个渲染进程，新页面和当前页面属于同一站点的话，那么新页面会复用父页面的渲染进程。

# 4. 提交文档

+ 浏览器进程发出提交文档，渲染进程接收到“提交文档”的消息后，会和网络进程建立传输数据的“管道”。
+ 等文档数据传输完成之后，渲染进程会返回“确认提交”的消息给浏览器进程。
+ 浏览器进程在收到“确认提交”的消息后，会更新浏览器界面状态，包括了安全状态、地址栏的 URL、前进后退的历史状态，并更新 Web 页面。

# 5. 渲染阶段

+ 文档被提交，渲染进程便开始页面解析和子资源加载

# 6. 渲染流程

**渲染流水线**

+ 渲染机制过于复杂，所以渲染模块在执行过程中会被划分为很多子阶段，输入的 HTML 经过这些子阶段，最后输出像素。
+ 构建 DOM 树
+ 样式计算（Recalculate Style）
  + 把 CSS 转换为浏览器能够理解的结构
  + 转换样式表中的属性值，使其标准化
  + 计算出 DOM 树中每个节点的具体样式
+ 布局阶段
  + 创建布局树
  + 布局计算
  + 分层，复杂的 3D 变换、页面滚动，或者使用 z-indexing 做 z 轴排序等
+ 渲染阶段
  + 图层绘制，渲染引擎实现图层的绘制与之类似，会把一个图层的绘制拆分成很多小的绘制指令，然后再把这些指令按照顺序组成一个待绘制列表。
  + 栅格化（raster）操作，绘制列表只是用来记录绘制顺序和绘制指令的列表，而实际上绘制操作是由渲染引擎中的合成线程来完成的。
  + 合成和显示，合成线程发送绘制图块命令DrawQuad给浏览器进程
  + 浏览器进程根据 DrawQuad 消息生成页面，并显示到显示器上。
