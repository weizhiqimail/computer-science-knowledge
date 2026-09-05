This is a copy of a shared ChatGPT chat. It won't be added to memory.

Report conversation
Today 10:39 AM
Uploaded a file
C2-02-EC2与基础计算服务.md

本章目标：从“计算到底是什么”开始，建立完整的 AWS 计算层概念，然后系统理解 Amazon EC2、AMI、Instance Type、EBS、Instance Store、Security Group、IAM Role、Auto Scaling、Elastic Load Balancing、EC2 购买模型，以及 Elastic Beanstalk、Lightsail、AWS Batch 等基础计算服务。

在已有 719 道题库的粗略统计中，EC2 相关内容约有 175 道题涉及，是整个 CLF-C02 最核心的技术体系之一；Reserved Instances、Spot Instances、On-Demand Instances、Dedicated Hosts、Savings Plans 等也都有较高曝光度。但这些统计是“题干 + 所有选项”的曝光度，不等同于正确答案次数。

1. 从“计算”开始理解 AWS
1.1 Compute 是什么？

Compute

中文通常翻译为：

计算 / 计算资源

在云计算中，Compute 不是单纯指：

CPU 做加减乘除

而是更广义的：

让程序真正运行起来所需要的计算能力

一个应用程序最终一定要在某个地方运行。

例如 GlobalShop 的商品服务：

GET /products/12345

用户访问商品页面以后，服务器需要：

接收 HTTP 请求
        ↓
执行 Node.js / Java / Python 程序
        ↓
读取 Redis
        ↓
查询数据库
        ↓
组织 JSON
        ↓
返回给用户

这些代码不能凭空运行。

它需要：

CPU
Memory
Operating System
Network
Runtime
Storage

所以，从最基础的角度看：

Compute
=
“代码在哪里运行”

这是理解 AWS Compute 服务最重要的一句话。

2. Physical Server：物理服务器
2.1 传统服务器是什么？

Physical Server

= 物理服务器

传统情况下，一家公司可能购买：

Dell / HP / Lenovo Server

安装在自己的 Data Center 中。

例如：

┌────────────────────────────┐
│ Physical Server            │
│                            │
│ CPU: 32 Core               │
│ Memory: 128 GB             │
│ Disk: 4 TB                 │
│ Network Card               │
│                            │
│ Linux                      │
│                            │
│ GlobalShop Application     │
└────────────────────────────┘

这台机器是真实存在的硬件。

公司需要负责：

购买
运输
机架
供电
散热
网络
硬件故障
容量规划
升级
淘汰
3. 为什么后来出现 Virtual Machine？

假设公司购买一台：

32 CPU
128 GB RAM

的服务器。

但是某个应用只需要：

4 CPU
16 GB RAM

如果一台 Physical Server 只跑一个应用：

Physical Server
32 CPU
128 GB RAM

实际使用：
4 CPU
16 GB RAM

大量硬件资源就浪费了。

于是出现了：

Virtualization
4. Virtualization：虚拟化

Virtualization

= 虚拟化

核心思想是：

一台真实物理服务器，可以被划分为多个逻辑上相对独立的计算环境。

例如：

Physical Server
│
├── VM 1
│   ├── 4 vCPU
│   ├── 16 GB RAM
│   └── Linux
│
├── VM 2
│   ├── 8 vCPU
│   ├── 32 GB RAM
│   └── Windows
│
└── VM 3
    ├── 4 vCPU
    ├── 16 GB RAM
    └── Linux

这里：

VM

= Virtual Machine

= 虚拟机

5. Host、Guest OS、Hypervisor

这三个词第一次学习虚拟化时很容易混。

5.1 Host

Host

= 宿主机

就是底层真正存在的物理服务器。

5.2 Guest OS

Guest Operating System

简称：

Guest OS

= 客户操作系统 / 虚拟机中的操作系统

例如：

VM 1
└── Ubuntu Linux

VM 2
└── Windows Server

Ubuntu 和 Windows 就是 Guest OS。

5.3 Hypervisor

Hypervisor

= 虚拟机监控器 / 虚拟化管理层

它负责把物理硬件资源分配给虚拟机。

概念上可以理解为：

Physical Hardware
        │
        ▼
┌──────────────────┐
│    Hypervisor    │
└──────────────────┘
   │       │       │
   ▼       ▼       ▼
 VM 1     VM 2     VM 3
 Linux    Linux   Windows

Hypervisor 负责：

CPU 分配
Memory 分配
设备虚拟化
虚拟机隔离
虚拟机运行

CLF-C02 不要求深入研究虚拟化底层实现。

真正需要理解的是：

Physical Server
        ↓
Virtualization
        ↓
多个 Virtual Machine
        ↓
云厂商可以快速创建、删除、调整 VM
6. 从 Virtual Machine 到 Cloud VM

传统 VM 已经解决：

一台物理服务器
→ 多台虚拟服务器

但如果这些服务器还是公司自己买的，那么公司仍然需要：

买服务器
建机房
扩容
换硬盘
维护网络
处理硬件故障

AWS 做的关键一步是：

AWS 自己建设庞大的数据中心和硬件基础设施，然后把计算能力通过 API 提供给客户。

于是：

传统：

买服务器
↓
安装虚拟化环境
↓
创建 VM


AWS：

调用 API / Console
↓
几分钟甚至更快得到虚拟服务器

这就是 EC2 的基础思想。

7. Amazon EC2 ★★★★★

[CURRENT-IN-SCOPE]

正式名称：

Amazon Elastic Compute Cloud

简称：

Amazon EC2

中文通常称：

Amazon 弹性计算云

AWS 官方把 EC2 Instance 描述为 Virtual Server，也就是虚拟服务器。EC2 同时提供 AMI、Instance Type、EBS、Instance Store、Security Group 等围绕虚拟服务器运行所需要的基础能力。

8. 为什么叫 Elastic Compute Cloud？

这个名字非常重要。

拆开来看：

Elastic

弹性

表示：

需要时增加
不需要时减少
Compute

计算

表示：

运行程序的 CPU / Memory 等计算能力
Cloud

云

表示：

这些计算资源不是你自己购买服务器建立，
而是通过 AWS 云获得

所以：

Elastic
+
Compute
+
Cloud
=
Elastic Compute Cloud

另外：

Elastic Compute Cloud

Compute
Cloud

两个 C

可以写成：

EC²

最终产品名写成：

EC2
9. EC2 到底是什么？

最简单的一句话：

EC2 是 AWS 提供的可配置虚拟服务器服务。

但真正理解应该是：

AWS Data Center
        │
        ▼
Physical Servers
        │
        ▼
Virtualization
        │
        ▼
EC2 Instance

你不需要：

购买服务器
安装服务器
维护硬件
更换 CPU
维修硬盘
维护机房

你只需要决定：

我要什么 OS？
我要多少 CPU？
我要多少内存？
我要多少存储？
放哪个 Region？
放哪个 AZ？
允许谁访问？
需要运行多久？
采用什么购买模式？
10. EC2 Instance ★★★★★

Instance

本意：

实例

在计算机系统中，可以理解为：

某个模板真正创建出来并运行的一份具体对象。

因此：

EC2
= 服务

EC2 Instance
= 一台具体运行中的 EC2 虚拟服务器

例如：

GlobalShop 有 3 台商品服务器：

i-001
i-002
i-003

这些分别就是三个 EC2 Instance。

11. GlobalShop 中 EC2 在哪里？

最基础架构：

Internet User
      │
      ▼
   Route 53
      │
      ▼
  CloudFront
      │
      ▼
     ALB
      │
      ▼
┌───────────────┐
│ EC2 Instance  │
│               │
│ Node.js       │
│ Product API   │
└───────────────┘
      │
      ▼
  RDS / Redis

例如用户访问：

https://globalshop.com/product/123

最终可能有一台 EC2：

运行 Node.js
        ↓
执行商品 API
        ↓
查数据库
        ↓
返回商品 JSON
12. AMI ★★★★★

正式名称：

Amazon Machine Image

简称：

AMI

中文：

Amazon 机器映像 / Amazon 系统镜像

13. 为什么需要 AMI？

创建服务器的时候，AWS 必须知道：

这台服务器到底装什么？

例如：

Linux？
Windows？

Ubuntu？
Amazon Linux？

有没有 Node.js？
有没有 Nginx？
有没有应用程序？

所以需要一个：

服务器启动模板

这就是 AMI。

AWS 官方定义中，AMI 包含启动 Instance 所需要的软件配置；创建 EC2 Instance 时必须指定 AMI。AMI 还具有 Region 属性。

14. AMI 可以理解成什么？

可以把 AMI 理解成：

“服务器模板”

例如：

AMI: globalshop-product-v12

包含：

Amazon Linux
Node.js 24
Nginx
CloudWatch Agent
GlobalShop Product Service v12
安全配置
启动脚本

然后：

AMI
 │
 ├── EC2 #1
 ├── EC2 #2
 ├── EC2 #3
 └── EC2 #4

所有机器都可以从同一个模板启动。

15. 为什么 AMI 对 Auto Scaling 很重要？

假设双十一流量突然增加。

AWS 需要从：

20 EC2

扩展成：

300 EC2

不可能让运维人员手动：

安装 Linux
安装 Node
安装 Nginx
下载代码
配置程序

重复 280 次。

应该：

AMI
│
├── EC2
├── EC2
├── EC2
├── EC2
├── ...
└── EC2

所以：

AMI 解决的是“新的 EC2 应该长什么样”。

而：

Auto Scaling 解决的是“应该创建多少台”。

这是非常重要的一组关系。

16. Instance Type ★★★★★

Instance Type

= 实例类型

它决定：

CPU
Memory
Network
Storage
Accelerator

等资源配置。

AWS 当前按照不同工作负载，把 EC2 Instance Type 分成 General Purpose、Compute Optimized、Memory Optimized、Storage Optimized、Accelerated Computing、HPC 等类别。

17. vCPU 是什么？

vCPU

= virtual Central Processing Unit

= 虚拟 CPU

这里不是说：

AWS 给你一块独立实体 CPU

而是给 EC2 Instance 提供一定的虚拟 CPU 计算能力。

CLF-C02 不需要研究：

CPU Thread
NUMA
CPU Pinning
Hyper-Threading

重点只需要知道：

Instance Type
决定 EC2 获得多少计算资源
18. Instance Family 不要死背型号

题目中可能出现：

T
M
C
R
I
P
G

但 CLF 的核心不是：

背几十种型号

而是理解资源倾向。

当前 AWS 的实例分类仍然非常庞大，因此比背型号更重要的是理解“为什么存在不同 Family”。

19. General Purpose ★★★★

General Purpose

= 通用型

特点：

CPU
Memory
Network

比较均衡。

典型：

M Family
T Family

适合：

Web Server
Application Server
开发测试
普通企业应用
代码仓库

GlobalShop：

普通商品 API
普通后台管理系统
普通 Web Server

→ General Purpose
20. Compute Optimized ★★★★

Compute Optimized

= 计算优化型

特点：

CPU 能力相对更突出

典型：

C Family

AWS 官方列举的场景包括：

Batch Processing
Media Transcoding
High-performance Web Server
Scientific Modeling
Machine Learning Inference

等。

GlobalShop：

大规模商品图片计算
复杂促销价格计算
大量 CPU 密集型任务

→ Compute Optimized
21. Memory Optimized ★★★★

Memory Optimized

= 内存优化型

特点：

Memory 很大

适合：

大量数据需要放在内存处理
大型缓存
In-memory Database
大型数据处理

GlobalShop：

大型实时数据分析
超大内存缓存

→ Memory Optimized
22. Storage Optimized ★★★

Storage Optimized

= 存储优化型

重点：

高本地磁盘性能
高 IOPS
低延迟
大量顺序 / 随机 I/O

IOPS

= Input/Output Operations Per Second

= 每秒输入输出操作次数

可以简单理解成：

存储设备每秒能处理多少次读写操作。

适合：

大量本地数据
高频磁盘 I/O
大型数据处理

23. Accelerated Computing ★★★

Accelerated Computing

= 加速计算

核心思想：

某些计算不只靠普通 CPU，而使用专门硬件加速器。

例如：

GPU
AWS Inferentia
AWS Trainium
FPGA

GlobalShop：

AI 推荐
图像处理
模型训练
模型推理

→ Accelerated Computing
24. Instance Type 的真正选择逻辑

不要记成：

M = 好
C = 更快
R = 更贵

正确理解是：

工作负载的瓶颈是什么？
        │
        ├── 比较平均
        │      ↓
        │ General Purpose
        │
        ├── CPU
        │      ↓
        │ Compute Optimized
        │
        ├── Memory
        │      ↓
        │ Memory Optimized
        │
        ├── Local Storage I/O
        │      ↓
        │ Storage Optimized
        │
        └── GPU / AI / Accelerator
               ↓
          Accelerated Computing
25. EC2 Instance Lifecycle ★★★★

Lifecycle

= 生命周期

EC2 不只是：

存在
不存在

而是存在多个状态。

主要包括：

pending
running
stopping
stopped
shutting-down
terminated

AWS 当前官方文档仍然使用这套生命周期状态。

26. Launch

Launch

= 启动 / 创建新的 Instance

例如：

AMI
+
Instance Type
+
Network
+
Security Group
+
Storage
        ↓
Launch
        ↓
pending
        ↓
running
27. Start

如果 Instance 已经：

stopped

可以：

Start

然后：

stopped
   ↓
pending
   ↓
running

注意：

Start 一个停止的实例，和 Launch 一个全新的实例，不是同一个动作。

28. Stop

Stop

= 停止实例

概念上类似：

关机

但 Instance 这个资源仍然存在。

例如：

running
   ↓
stopping
   ↓
stopped

Stopped 状态下通常不再产生 EC2 Instance 本身的运行计算费用，但 EBS 等关联资源仍可能继续收费。

29. Reboot

Reboot

= 重启

类似：

操作系统重新启动

重要区别：

Reboot
≠
Stop + Start

AWS 官方说明，Reboot 时实例通常保持在同一 Host 上，而且 Instance Store 数据也不会因为单纯 Reboot 而被删除。

因此不能写成：

“只要重启 EC2，Instance Store 就会丢失。”

这是错误的。

30. Terminate ★★★★★

Terminate

= 终止 / 删除 EC2 Instance

这是：

真的删除

而不是：

暂时关机

流程：

running
    ↓
shutting-down
    ↓
terminated

已经 Terminated 的实例不能重新启动或恢复。

所以考试看到：

temporary shutdown

一般不是 Terminate。

31. Stop、Reboot、Terminate 对比
操作	实例还存在？	可以继续使用？	核心理解
Reboot	是	是	重启 OS
Stop	是	Start 后可以	暂时停止
Terminate	否	否	删除 Instance
32. EBS ★★★★★

正式名称：

Amazon Elastic Block Store

简称：

Amazon EBS

中文：

弹性块存储

本章只讲它与 EC2 的关系。

完整 Storage 体系放在 C2-04。

33. EC2 为什么还需要 EBS？

EC2 主要解决：

Compute

但程序还需要保存：

Operating System
Application
Configuration
Files
Data

所以 EC2 通常搭配：

EC2
 │
 ▼
EBS

可以简单理解为：

EC2
≈ Computer

EBS
≈ 可持久化 Block Disk

AWS 官方把 EBS 描述为 EC2 的 Persistent Storage Volume。

34. Block Storage 是什么？

Block Storage

= 块存储

操作系统看到的是类似：

Disk
Volume
Device

然后可以：

创建文件系统
格式化
挂载
保存文件

例如 Linux：

/dev/nvme0n1

这种思维更接近：

硬盘

而不是 S3 那种：

Object
Bucket
35. Instance Store ★★★★

Instance Store

= 实例存储

也可以理解成：

EC2 Host 上提供给 Instance 的临时本地存储。

它最大的特点：

Local
+
Ephemeral
36. Ephemeral 是什么意思？

Ephemeral

= 临时的 / 短暂存在的

所以：

Instance Store
=
Ephemeral Local Storage

这不是最适合保存：

唯一一份
重要永久数据

的地方。

37. EBS vs Instance Store
EC2
├── EBS
│    └── Persistent Storage
│
└── Instance Store
     └── Ephemeral Local Storage

重要区别：

	EBS	Instance Store
类型	Block Storage	Local Storage
持久性	持久	临时
是否依赖当前 Host	相对独立	强依赖 Host
适合重要持久数据	是	一般否
适合临时高速本地数据	可以但不是核心优势	是
38. Instance Store 最容易写错的地方

不要记成：

EC2 一停
→ 所有情况下数据一定立即丢

更准确的理解是：

Instance Store 与底层 Host 生命周期紧密相关，Stop/Terminate 等操作可能导致其中的数据丢失；但 Reboot 本身通常不会导致 Instance Store 数据消失。

AWS 官方当前明确说明：

Reboot
→ 保留 Instance Store 数据

Stop + Start
→ 原 Host 的 Instance Store 数据丢失

因此考试层面最安全的关键词仍然是：

Instance Store
→ temporary
→ ephemeral
→ local
39. Security Group ★★★★★

Security Group

= 安全组

最简单的理解：

EC2 等 VPC 资源前面的虚拟防火墙。

例如：

Internet
   │
   │ HTTPS :443
   ▼
Security Group
   │
   ▼
 EC2

Security Group 控制：

Inbound
Outbound

即：

谁可以进来
谁可以出去

AWS 官方当前仍将 Security Group 定义为控制资源 Inbound / Outbound Traffic 的虚拟防火墙，并且 Security Group 是 Stateful。

40. Inbound / Outbound

Inbound

= 入站流量

例如：

User
   ↓
EC2

Outbound

= 出站流量

例如：

EC2
 ↓
Internet / Other Service

GlobalShop：

ALB Security Group
允许：
Internet → 443

EC2 Security Group
允许：
ALB → 8080

而不是：

Internet
→ 直接访问 EC2:8080
41. Stateful

Stateful

= 有状态

假设 Security Group 允许：

Client
→ EC2:443

EC2 返回响应：

EC2
→ Client

这个响应流量会被允许返回，不需要再人为写一条完全对应的反向规则。

这是 Security Group 与 Network ACL 后面非常重要的区别。

Security Group
→ Stateful

Network ACL
→ Stateless

Network ACL 会在 C2-06 详细讲。

42. IAM Role for EC2 ★★★★★

正式名称：

IAM

= Identity and Access Management

= 身份与访问管理

完整 IAM 在 C2-08。

这里重点解释 EC2 为什么需要 IAM Role。

43. EC2 访问 S3 的错误方法

假设：

GlobalShop EC2

需要读取：

S3 Product Images Bucket

一种非常危险的方式：

AWS_ACCESS_KEY_ID = "AKIA..."
AWS_SECRET_ACCESS_KEY = "..."

写到：

代码
.env
配置文件
AMI

这是非常差的做法。

因为：

Credential 泄漏
        ↓
攻击者得到长期 Access Key
        ↓
访问 AWS Resource
44. 正确方式：IAM Role
EC2
 │
 │ assumes / uses
 ▼
IAM Role
 │
 │ temporary credentials
 ▼
S3

AWS 专门设计 EC2 IAM Role 来解决：

应用运行在 EC2 上，但又需要调用 AWS API 时，如何避免在 Instance 中保存长期 Credentials。

Instance 中的应用可以取得临时 Credentials，权限来自绑定的 IAM Role。

45. GlobalShop 示例

例如：

GlobalShop Product EC2
        │
        │ IAM Role:
        │ Allow s3:GetObject
        ▼
ProductImagesBucket

EC2 不需要保存：

长期 Access Key

而是：

IAM Role
     ↓
temporary credentials
     ↓
访问 S3

这也是题库 Q4 的直接考点：

EC2 如何安全访问 S3？

→ IAM Role
46. User Data ★★★★

User Data

= 用户数据

名字看起来很奇怪。

它不是：

用户的订单数据

而是：

创建 EC2 时交给 Instance 的启动配置或启动脚本。

例如：

#!/bin/bash
dnf install nginx -y
systemctl start nginx

Instance 启动以后执行这些命令。

47. User Data 为什么存在？

假设每次启动 EC2 都需要：

安装软件
下载配置
启动服务
注册监控

如果人工操作：

创建 1 台
→ SSH
→ 安装

创建 100 台
→ SSH 100 次

显然不可行。

于是：

AMI
+
User Data

配合使用。

例如：

AMI
→ 提供基础系统

User Data
→ 在 Launch 时进行最后的动态配置

AWS 官方也明确给出了“通用 AMI + User Data 在 Launch 时进行个性化配置”的模式。

48. AMI vs User Data
AMI
=
服务器“基础模板”

User Data
=
服务器启动时执行的初始化信息

例如 GlobalShop：

AMI:
Linux
Node
Nginx
Application

User Data:
ENV=production
REGION=ap-northeast-1
启动 Product Service
49. Instance Metadata ★★★

Metadata

= 元数据

可以理解为：

描述这台 Instance 自身的信息。

例如：

Instance ID
Hostname
Security Group
Instance identity

等。

EC2 内部的程序可以通过：

IMDS

Instance Metadata Service

= 实例元数据服务

获取相关信息。

50. Metadata 不要理解成业务数据
商品价格
订单信息
用户地址

≠ Metadata

Metadata 是：

“关于这台 EC2 自己的信息”
51. Elastic IP ★★★

Elastic IP Address

简称：

EIP

= 弹性 IP 地址

它是一种：

可以保留在 AWS Account 中并重新关联到不同资源的静态公有 IPv4 地址。

普通 Public IPv4 可能因为 Instance Stop / Start 等生命周期变化而改变。

而 Elastic IP 可以保留并重新映射。

52. 为什么叫 Elastic IP？

不是说：

IP 会自动变大变小

而是：

IP 与某一台物理服务器不必永久绑定

可以：

EIP
 │
 ▼
EC2 A

EC2 A Failure

EIP
 │
 ▼
EC2 B

因此具备一定“重新映射”的弹性。

53. [UPDATED] Public IPv4 收费规则

这一点旧教材非常容易过时。

当前 AWS：

所有 Public IPv4 Address 都会收费，包括运行中 EC2 所使用的 Public IPv4 和 Elastic IP。

因此不要再背旧规则：

EIP 绑定运行中的 EC2
→ 免费

当前已经不成立。

但 CLF 层面更重要的技术区别仍然是：

普通 Public IPv4
→ 不应视为永久固定地址

Elastic IP
→ Static Public IPv4
54. 单台 EC2 为什么不够？

现在假设 GlobalShop：

User
 ↓
EC2

这有三个严重问题。

问题 1：性能

如果：

100 users
→ 没问题

1,000,000 users
→ EC2 扛不住
问题 2：Single Point of Failure

SPOF

= Single Point of Failure

= 单点故障

如果唯一的 EC2：

EC2
 X

整个系统：

DOWN
问题 3：流量变化

平时：

20 EC2 的能力

够用。

双十一：

需要 300 EC2

活动结束：

又只需要 20

如果始终运行 300：

严重浪费成本

所以需要：

Auto Scaling
55. Amazon EC2 Auto Scaling ★★★★★

正式名称：

Amazon EC2 Auto Scaling

核心功能：

根据需求自动增加或减少 EC2 Instance 数量，并维护期望数量的 Instance。

例如：

Normal
20 EC2

Traffic ↑
        ↓
50
        ↓
100
        ↓
300 EC2

Traffic ↓
        ↓
100
        ↓
50
        ↓
20 EC2
56. Scale Out / Scale In

Scale Out

= 横向增加实例

2 EC2
↓
4 EC2
↓
8 EC2

Scale In

= 横向减少实例

8 EC2
↓
4 EC2
↓
2 EC2

不要和：

Scale Up / Scale Down

混淆。

后者一般指：

单台机器变大 / 变小
57. Auto Scaling Group

简称：

ASG

Auto Scaling Group

= 自动扩缩容组

可以配置：

Minimum Capacity
Desired Capacity
Maximum Capacity

例如：

Min = 20
Desired = 20
Max = 300

意思是：

最少：
20

正常希望：
20

最多：
300
58. Launch Template ★★★★

Auto Scaling 创建新 EC2 时必须知道：

使用哪个 AMI？
什么 Instance Type？
什么 Security Group？
什么 User Data？
什么存储？

因此需要：

Launch Template

= 启动模板

当前 AWS 官方建议使用 Launch Template；旧的 Launch Configuration 已经进入明显的历史兼容阶段，新 Account 已不能按旧方式创建 Launch Configuration，因此新教材应该把 Launch Template 作为主线。

59. Launch Template 与 AMI 的关系

不要混淆：

AMI
→ 操作系统 / 软件镜像

Launch Template
→ 如何创建整个 EC2 Instance 的配置模板

Launch Template 可以包含：

AMI
Instance Type
Security Group
Key Pair
Storage
User Data
其他 Launch Parameters

所以：

Launch Template
        │
        ├── AMI
        ├── Instance Type
        ├── Security Group
        ├── User Data
        └── Storage
                │
                ▼
        Auto Scaling Group
                │
                ▼
             EC2
60. CloudWatch + Auto Scaling

Amazon CloudWatch

= AWS 的监控与可观测性服务之一。

完整内容放在 C2-10。

这里先理解：

CloudWatch
   │
   │ Metric
   ▼
Auto Scaling
   │
   ▼
增加 / 减少 EC2

例如：

CPU Utilization > 70%
持续一段时间
        ↓
Scale Out

或者：

CPU Utilization < 20%
        ↓
Scale In

Amazon EC2 Auto Scaling 的 Dynamic Scaling 支持 Target Tracking、Step Scaling、Simple Scaling 等策略。

61. Target Tracking

Target Tracking Scaling

= 目标跟踪扩缩容

思想很像空调恒温器。

例如：

目标 CPU
= 50%

系统尝试：

CPU 太高
→ 增 EC2

CPU 太低
→ 减 EC2

目标是让整体指标尽量接近：

50%

AWS 官方也直接用 thermostat，也就是恒温器，来说明这种机制。

62. Auto Scaling 不只是“性能功能”

它同时解决：

Scalability
Elasticity
Availability
Cost Optimization

例如：

实例坏掉
↓
ASG 检测到
↓
创建 replacement instance

AWS 官方教程明确展示了：人为 Terminate Auto Scaling Group 中的 Instance 后，Auto Scaling 会检测并补充新的 Instance，以保持预期容量。

63. 只有 Auto Scaling 还不够

现在有：

EC2 1
EC2 2
EC2 3
EC2 4
...

问题来了：

用户应该访问哪一台？

难道：

user1 → EC2-1
user2 → EC2-2
user3 → EC2-3

由客户端自己决定？

不行。

因此需要：

Load Balancer
64. Load Balancer

Load Balancer

= 负载均衡器

核心工作：

大量请求
    │
    ▼
Load Balancer
    │
 ┌──┼──┐
 ▼  ▼  ▼
EC2 EC2 EC2

把流量分散到多个 Backend Target。

65. Elastic Load Balancing ★★★★★

正式名称：

Elastic Load Balancing

简称：

ELB

中文：

弹性负载均衡

注意：

ELB

是整个服务体系名称。

不是所有场景下某一种具体 Load Balancer 的名称。

当前主要有：

Application Load Balancer
Network Load Balancer
Gateway Load Balancer
Classic Load Balancer

66. Application Load Balancer ★★★★★

简称：

ALB

正式名称：

Application Load Balancer

= 应用负载均衡器

主要处理：

HTTP
HTTPS

并工作在：

OSI Layer 7
Application Layer

因此它不仅知道：

连接从哪里来

还可以理解：

Host
Path
HTTP Request

等应用层内容。

67. ALB 的实际价值

例如 GlobalShop：

globalshop.com/products/*
        ↓
Product Target Group

globalshop.com/orders/*
        ↓
Order Target Group

seller.globalshop.com/*
        ↓
Seller Target Group

也就是根据请求内容路由。

架构：

                 ALB
                  │
         ┌────────┼────────┐
         │        │        │
         ▼        ▼        ▼
     Product    Order    Seller
     Target     Target   Target
     Group      Group    Group
68. Listener

Listener

= 监听器

例如：

HTTP :80
HTTPS :443

ALB Listener 接收请求，然后根据 Rule 决定把请求转发到哪个 Target Group。

69. Target Group

Target Group

= 目标组

例如：

Product Target Group

├── EC2 #1
├── EC2 #2
├── EC2 #3
└── EC2 #4

Load Balancer 实际把流量发到 Target Group 中健康的 Target。

70. Health Check ★★★★★

Health Check

= 健康检查

Load Balancer 会定期检查 Backend：

EC2 #1 → Healthy
EC2 #2 → Healthy
EC2 #3 → Unhealthy

然后：

Request
   ↓
ALB
   ├── EC2 #1 ✓
   ├── EC2 #2 ✓
   └── EC2 #3 ✗

不再把正常请求继续发送到故障 Target。

这也是 Load Balancing 对 High Availability 很重要的原因之一。

71. Network Load Balancer ★★★★

简称：

NLB

正式名称：

Network Load Balancer

= 网络负载均衡器

主要工作在：

OSI Layer 4

重点：

TCP
UDP
TLS
非常高的网络性能

AWS 官方当前文档指出 NLB 工作在 OSI 第四层，并能够处理极大量连接/请求。

72. ALB vs NLB

CLF 层面可以这样理解：

	ALB	NLB
主要层级	Layer 7	Layer 4
主要协议	HTTP / HTTPS	TCP / UDP / TLS 等
是否理解 HTTP 内容	是	核心不是这个
内容路由	强	非主要定位
超高性能网络连接	可以	更典型
Web Application	非常典型	特殊需求

一句话：

Web / HTTP Routing
→ ALB

TCP / UDP / extreme network performance
→ NLB
73. Gateway Load Balancer

简称：

GWLB

Gateway Load Balancer

主要用于：

Firewall
Intrusion Detection
Intrusion Prevention
Deep Packet Inspection

等网络虚拟设备。

不是普通 Web Application：

HTTP → EC2

场景的默认选择。

74. Classic Load Balancer

简称：

CLB

这是较早一代的 ELB 类型。

在现代架构中，新系统通常重点理解：

ALB
NLB
GWLB

CLB 更适合作为：

旧系统
Legacy

知识理解。

75. ELB + Auto Scaling ★★★★★

这是 EC2 架构最重要的组合之一：

                    Users
                      │
                      ▼
                     ALB
                      │
            ┌─────────┴─────────┐
            │                   │
          AZ-A                AZ-B
            │                   │
       ┌────┴────┐         ┌────┴────┐
       ▼         ▼         ▼         ▼
      EC2       EC2       EC2       EC2
       \          \       /          /
        \          \     /          /
         └──── Auto Scaling ───────┘

Auto Scaling：

管理 EC2 数量

ELB：

管理请求如何分发

两者完全不是同一个服务。

76. GlobalShop 双十一完整计算层

平时：

Users
  │
  ▼
 ALB
  │
  ▼
20 EC2

双十一开始：

Traffic ↑
    │
    ▼
CloudWatch Metrics
    │
    ▼
Auto Scaling
    │
    ▼
20 → 50 → 100 → 300 EC2

请求仍然只访问：

ALB

而不是让客户知道后面到底有：

20 台
100 台
300 台

活动结束：

Traffic ↓
    │
    ▼
Auto Scaling
    │
    ▼
300 → 100 → 50 → 20

这就是：

Elasticity

真正落地到系统架构中的样子。

77. Multi-AZ + ELB + Auto Scaling

如果所有 EC2 都在：

AZ-A

那么：

AZ-A 故障
↓
所有 EC2 同时不可用

正确架构应该：

                    ALB
                 /       \
                /         \
               ▼           ▼
             AZ-A         AZ-B
             │             │
          ┌──┴──┐       ┌──┴──┐
          EC2  EC2      EC2  EC2

这样：

AZ-A Failure
       ↓
ALB
       ↓
继续将流量发给 AZ-B 的 Healthy Target

这正是：

Multi-AZ
+
Load Balancing
+
Auto Scaling

共同构建高可用 Web 计算层的典型方式。

78. EC2 Pricing Models ★★★★★

这是 CLF-C02 极高频内容。

首先要知道：

“EC2 是什么服务器”和“你采用什么方式付钱”是两个问题。

例如：

同一个 EC2 Instance Type

可以根据使用模式采用不同的购买/计费方式。

常见考点：

On-Demand
Reserved Instances
Spot Instances
Savings Plans
Dedicated Hosts
Dedicated Instances
Capacity Reservations
79. On-Demand Instances ★★★★★

On-Demand

字面意思：

On Demand
=
按需求
需要就用

特点：

无长期承诺
使用灵活
按实际运行计算

当前 AWS 对 On-Demand 的核心描述仍是：

不需要预付或长期承诺，根据使用量付费。

80. On-Demand 适合什么？

典型：

短期
实验
开发
测试
需求不确定
业务刚上线
无法预测长期用量

GlobalShop 新 AI 商品功能：

不知道用户会不会喜欢
不知道是否长期运行

先：

On-Demand

很合理。

81. On-Demand 最大优点与问题

优点：

Flexible
No long-term commitment

问题：

如果你明知道某套服务器 24×7 连续运行几年，却始终全部使用 On-Demand，通常不是最经济的方案。

于是出现：

Reserved Instances
Savings Plans
82. Reserved Instances ★★★★★

简称：

RI

正式名称：

Reserved Instances

= 预留实例

但这里特别容易产生一个错误：

RI 并不等于“另外创建了一种神奇的服务器”。

它首先是一种：

Pricing / Billing mechanism

也就是：

通过较长期承诺，换取相对 On-Demand 更低的价格。

83. RI 的期限

当前 EC2 Reserved Instances：

1 year
3 years

并存在：

All Upfront
Partial Upfront
No Upfront

等付款方式。

84. Standard vs Convertible RI
Standard Reserved Instance

特点：

折扣通常更高
灵活性相对较低
Convertible Reserved Instance

Convertible

= 可转换的

特点：

折扣相对低一些
但可以 Exchange 到不同属性的 Convertible RI

AWS 当前仍保留 Standard 和 Convertible 两种 Offering Class。

85. RI 适合什么？

典型题目：

stable workload
predictable workload
continuous workload
1 or 3 years

例如 GlobalShop：

商品核心 API

过去三年：
每天都要运行

预计未来三年：
仍然持续运行

那么：

长期折扣模型

就值得考虑。

86. [UPDATED] AWS 当前更推荐 Savings Plans

这里必须把：

题库知识

与：

当前 AWS

分开。

旧题库经常把：

长期稳定 EC2
→ Reserved Instances

作为标准答案。

这类历史考法仍然必须会。

但当前 AWS EC2 官方文档已经明确：

AWS recommends Savings Plans over Reserved Instances.

即：

当前 AWS 更推荐 Savings Plans 作为简单且灵活的计算成本节省方式。

因此不能把：

RI
=
当前 AWS 一切长期 EC2 的默认最佳方案

写成绝对规则。

87. Savings Plans ★★★★★

正式名称：

AWS Savings Plans

中文可以理解成：

节省计划

核心逻辑：

你承诺未来一定程度的计算使用量，AWS 给你较低价格。

不是承诺：

必须永远运行 EC2 #123

而是承诺：

一定程度的 $/hour compute usage

期限同样主要是：

1 year
3 years

88. Compute Savings Plans

Compute Savings Plans

灵活性最大。

可覆盖：

EC2
Fargate
Lambda

而且 EC2 可以在：

Instance Family
Size
Region
OS
Tenancy

等方面变化，仍可能继续享受对应 Savings Plans 优惠。

例如：

今天：
EC2 C Family

以后：
EC2 M Family

再以后：
Fargate

甚至：
Lambda

Compute Savings Plans 比传统固定配置的 RI 更灵活。

89. EC2 Instance Savings Plans

另一类：

EC2 Instance Savings Plans

特点：

针对某个 Region
+
某个 Instance Family

例如：

Tokyo
+
M Family

但：

Size
OS
Tenancy
AZ

具有一定灵活性。

相对于 Compute Savings Plans：

灵活性更低
但折扣潜力更高

AWS 当前页面给出的最高折扣数字分别约为：

Compute Savings Plans
→ up to 66%

EC2 Instance Savings Plans
→ up to 72%

不要把具体百分比作为永久不变的考试定理，更重要的是理解：

Compute SP
→ 更灵活

EC2 Instance SP
→ 更绑定于特定 Region + Instance Family
90. Savings Plans 不提供 Capacity Reservation

这个区别非常重要：

Savings Plans
→ 省钱

Capacity Reservation
→ 保证容量

Savings Plans 本身：

NO capacity reservation

AWS 官方 FAQ 明确说明这一点。

91. Spot Instances ★★★★★

Spot

这里可以理解为：

使用 AWS 当前闲置的 EC2 Capacity。

AWS 用较大折扣把：

unused EC2 capacity

提供给客户。

目前官方仍宣传：

up to 90% off

相对于 On-Demand。

92. 为什么 Spot 这么便宜？

因为这部分 Capacity：

AWS 可能重新需要

因此：

AWS
可以 Interrupt 你的 Spot Instance

这就是你用极低价格换来的条件。

93. Interrupt

Interrupt

= 中断

Spot 最大考点：

cheap
BUT
interruptible

当前 AWS 一般会在中断 Spot Instance 前提供约两分钟的 Interruption Notice；如果配置 Hibernate，则处理方式有所不同。

94. Spot 适合什么？

典型关键词：

fault tolerant
stateless
flexible
batch
distributed
CI/CD
test
big data

AWS 官方也明确列出了：

stateless
fault-tolerant
flexible applications

等典型用途。

95. GlobalShop Spot 场景

例如：

每天生成 500 万张商品缩略图

任务可以拆成：

Task 1
Task 2
Task 3
...
Task 100000

某台 Spot EC2 被中断：

Task 8273
失败

重新交给另一台机器：

Retry Task 8273

没问题。

这就是：

Fault Tolerant
96. 什么不适合 Spot？

例如：

唯一一台订单主数据库

而且：

一中断
→ 整个订单系统崩溃

就非常不适合直接依赖 Spot。

核心判断不是：

任务重要不重要

而是：

任务能不能容忍 Instance 被中断？
97. Spot 的真正考试逻辑

看到：

lowest cost
+
interruptible
+
fault tolerant

首先想到：

Spot

看到：

must not be interrupted

就应该警惕：

Spot

通常不是答案。

98. Dedicated Instance ★★★

Dedicated Instance

= 专用实例

EC2 Instance 运行在：

专属于单一客户的硬件上。

也就是说，不与其他 AWS Account 的实例共享同一个物理 Host。

但是：

Dedicated Instance

并不代表你获得了：

完整底层物理服务器的细粒度控制
99. Dedicated Host ★★★★

Dedicated Host

= 专用宿主机

这里强调的是：

Host

也就是底层完整 Physical Server。

AWS 给你更强的：

Visibility
Control
Placement control

特别适合：

Server-bound Software License
BYOL
Compliance

等场景。

100. Dedicated Host vs Dedicated Instance

可以记：

Dedicated Instance
→ 关心“我的 Instance 不和别人共用硬件”

Dedicated Host
→ 关心“这整台 Physical Host 给我，并且我需要更强 Host 控制”

考试关键词：

existing server-bound license
physical server visibility
socket/core licensing

→ Dedicated Host
101. Capacity Reservation ★★★★

正式名称：

On-Demand Capacity Reservation

核心作用：

在特定 Availability Zone 为 EC2 预留计算容量。

例如 GlobalShop 知道：

双十一 20:00
一定需要 500 台特定 EC2

最大的风险不是钱，而是：

到时候该 AZ 没那么多 Capacity

于是可以考虑：

Capacity Reservation

AWS 官方将它明确定位为“对特定 AZ 中 EC2 Capacity 的保证”。

102. Capacity Reservation 与 Savings Plans 不要混

最核心的区别：

Savings Plans
解决：
PRICE

Capacity Reservation
解决：
CAPACITY

即：

有没有折扣？
vs
到时候有没有机器给我？

这是两个完全不同的问题。

103. Capacity Reservation 与 RI 也不要简单等同

历史上 RI 的 Capacity Benefit 容易让教材写得混乱。

考试学习应该先抓住：

Capacity Reservation
→ 专门解决 Capacity Assurance

Savings Plans
→ Pricing Discount

RI
→ 长期 EC2 Pricing Commitment，
   部分 Scope / 类型具有特定 Capacity 特性

AWS 当前官方也专门提供三者对比表，因为它们极容易混淆。

104. EC2 购买模式决策树
我要运行 EC2
     │
     ▼
需求是否短期 / 不确定？
     │
   Yes
     ▼
 On-Demand

如果长期稳定：

长期稳定计算使用
     │
     ▼
希望降低 Compute Cost
     │
     ▼
Savings Plans

旧题 / 特定 RI 场景：

稳定 EC2 配置
1 / 3 year
     │
     ▼
Reserved Instances

如果可中断：

Fault-tolerant
Interruptible
     │
     ▼
Spot

如果要求特定时间保证 Capacity：

Must have capacity
specific AZ
     │
     ▼
Capacity Reservation

如果要求整台物理服务器：

Physical Host
License / Compliance
     │
     ▼
Dedicated Host
105. EC2 Shared Responsibility ★★★★★

Shared Responsibility Model

= 责任共担模型

这里不要背一句：

AWS 负责云
客户负责云中

而要真正放到 EC2 看。

106. AWS 负责什么？

例如：

Data Center
Physical Building
Power
Cooling
Physical Server
Physical Network
Underlying infrastructure

这些客户不负责。

107. 客户负责什么？

EC2 属于相对底层的计算服务。

所以客户通常仍然负责：

Guest OS
OS Patch
Application
Application Configuration
IAM Permission
Security Group
Data
Encryption choices
Installed Software

也就是说：

EC2

不像一个完全 Serverless 服务。

你得到服务器以后：

操作系统和应用层面的安全责任很大一部分仍然属于客户。

108. GlobalShop EC2 安全责任

例如：

AWS：
修坏掉的物理 CPU

GlobalShop：
更新 Ubuntu security patch
修 Node.js 漏洞
设置 Security Group
控制 IAM Role
保护用户数据

如果 GlobalShop 自己：

开放 0.0.0.0/0:22

让全世界都能 SSH：

这不能怪 AWS。

Security Group 是 AWS 提供的工具，但如何配置属于客户责任的一部分。

109. Elastic Beanstalk ★★★★

正式名称：

AWS Elastic Beanstalk

Beanstalk

字面是：

豆茎

名字来自“快速向上生长”的形象。

技术上可以把它理解成：

AWS 帮你把 Web Application 的 EC2、Load Balancer、Scaling、Health Monitoring 等基础设施组织起来。

110. 为什么需要 Elastic Beanstalk？

直接使用 EC2 时：

开发者可能要处理：

EC2
AMI
Auto Scaling
ELB
Deployment
Health Check
Configuration

但很多开发者只想：

我有一个 Java / Node.js / Python Web App

请帮我部署起来。

于是：

Application Code
       │
       ▼
Elastic Beanstalk
       │
       ├── EC2
       ├── Load Balancing
       ├── Auto Scaling
       └── Health Monitoring

AWS 官方目前仍然如此描述 Elastic Beanstalk。

111. Elastic Beanstalk 不是 Serverless

非常容易产生误解。

因为：

开发者不用自己手动创建那么多基础设施

不代表：

底层没有 EC2

恰恰相反，Elastic Beanstalk 会为你的环境 Provision EC2、Load Balancer 等资源。

所以可以理解为：

Elastic Beanstalk
=
Higher-level application deployment platform

底层仍可能是：
EC2 + ELB + Auto Scaling
112. Elastic Beanstalk 是否另外收费？

当前 AWS 官方：

Elastic Beanstalk 本身没有额外服务费，主要为底层实际使用的 AWS Resource 付费。

例如：

EC2
Load Balancer
Storage
Data Transfer

仍然正常收费。

113. EC2 vs Elastic Beanstalk
EC2

你：
“给我一台服务器，
剩下很多东西我自己做。”

vs

Elastic Beanstalk

你：
“这是我的应用，
帮我建立并管理常见运行环境。”

所以：

控制能力
EC2 > Elastic Beanstalk

运维抽象程度
Elastic Beanstalk > EC2
114. Amazon Lightsail ★★★

正式名称：

Amazon Lightsail

它的核心定位不是：

比 EC2 更强大的企业级服务器

而是：

更简单、更容易入门、更可预测价格的 AWS 应用 / 网站运行方式。

Lightsail 把：

Virtual Server
Storage
Database
Load Balancer
Static IP
DNS
CDN
Snapshot

等常见能力组合成相对简单的体验。

115. Lightsail 适合什么？

例如：

个人网站
WordPress
小型公司网站
简单 Web Application
Prototype

特点：

simple
predictable monthly pricing
easy to start

如果题目强调：

简单网站
不想处理复杂 AWS 配置
固定 / 可预测套餐

Lightsail 值得重点考虑。

116. EC2 vs Lightsail
Lightsail
→ 简化体验
→ 面向较简单使用场景
→ Bundled resources / predictable pricing

EC2
→ 灵活性高
→ 企业级复杂架构能力强
→ 网络、实例、扩缩容等配置更细

不要理解成：

Lightsail 不是 AWS

它仍然是 AWS Service。

117. AWS Batch ★★★

正式名称：

AWS Batch

Batch

= 批处理

所谓 Batch Processing：

不是持续实时响应用户请求，而是提交一批 Job，然后由系统安排资源运行。

例如：

100 万张图片
需要重新生成缩略图

不是用户每点击一下才处理。

而是：

Job Queue
   │
   ▼
Batch Processing
   │
   ├── Job 1
   ├── Job 2
   ├── Job 3
   └── ...
118. AWS Batch 为什么存在？

如果自己实现 Batch Platform：

你要处理：

Job Queue
Scheduling
Compute Provisioning
Scaling
Resource Allocation
Retry
Container Runtime

AWS Batch 帮你处理很多底层调度和 Capacity 管理工作。

AWS 当前将 Batch 定义为 Fully Managed Batch Computing Service，可以根据提交的 Job 自动 Provision 计算资源，并可运行在 EC2、Fargate、ECS/EKS 等计算体系上。

119. GlobalShop AWS Batch 场景

例如每天凌晨：

1 亿商品
↓
重新计算推荐特征
↓
生成价格统计
↓
生成图片缩略图

可以：

Jobs
  │
  ▼
AWS Batch
  │
  ├── EC2
  ├── Spot
  └── Fargate

如果任务可以中断并重试：

Batch
+
Spot

往往是非常典型的成本优化组合。

120. EC2、Beanstalk、Lightsail、Batch 的定位对比
服务	核心问题
EC2	我要虚拟服务器
Elastic Beanstalk	我要快速部署 Web Application，并让 AWS 帮我管理常见环境
Lightsail	我要简单、容易使用、价格相对可预测的网站 / 小型应用平台
AWS Batch	我要运行大规模批处理 Job
121. 本章最重要的 GlobalShop 架构

现在把前面的内容放到一张图里：

                        Global Users
                              │
                              ▼
                         CloudFront
                              │
                              ▼
                             ALB
                              │
               ┌──────────────┴──────────────┐
               │                             │
              AZ-A                          AZ-B
               │                             │
        ┌──────┴──────┐              ┌──────┴──────┐
        ▼             ▼              ▼             ▼
      EC2            EC2            EC2            EC2
        │             │              │             │
        └──────── Auto Scaling Group ───────────────┘
                              │
                Launch Template
                              │
                ┌─────────────┼─────────────┐
                ▼             ▼             ▼
               AMI      Instance Type   User Data
                              │
                              ▼
                         IAM Role
                              │
                    ┌─────────┼─────────┐
                    ▼         ▼         ▼
                   S3        RDS     CloudWatch

这张图可以解释本章绝大多数核心知识。

122. 一次 EC2 创建过程

假设 GlobalShop 新建 Product Server。

第一步：

选择 Region
Tokyo
ap-northeast-1

第二步：

选择 AMI
Amazon Linux + GlobalShop Application

第三步：

选择 Instance Type
General Purpose

第四步：

配置 Storage
EBS

第五步：

配置 Network
VPC / Subnet

第六步：

配置 Security Group

第七步：

绑定 IAM Role

第八步：

配置 User Data

然后：

Launch
   ↓
pending
   ↓
running

这就得到一台实际的：

EC2 Instance
123. 从一台 EC2 到生产系统

学习 EC2 最容易犯的错误是：

学完以后脑子里只有“一台云服务器”。

真正 AWS 架构应该继续往前走：

Single EC2
   │
   ▼
Single Point of Failure
   │
   ▼
Multiple EC2
   │
   ▼
Multi-AZ
   │
   ▼
Load Balancer
   │
   ▼
Auto Scaling
   │
   ▼
CloudWatch Metrics

最终才形成：

Scalable
Elastic
Highly Available

的计算层。

124. 高频易混概念 1：EC2 vs AMI
EC2 Instance
→ 真正在运行的虚拟服务器

AMI
→ 创建服务器的镜像模板

类比：

AMI
≈ Windows 安装镜像 + 预装软件模板

EC2 Instance
≈ 真正安装运行起来的一台机器
125. 高频易混概念 2：AMI vs Launch Template
AMI
→ 机器里面装什么

Launch Template
→ 整台 EC2 应该怎么 Launch

Launch Template 可以引用：

AMI

但两者不是同一个东西。

126. 高频易混概念 3：Auto Scaling vs Load Balancer
Auto Scaling
→ 有多少台机器

Load Balancer
→ 请求发给哪台机器

非常重要。

127. 高频易混概念 4：Scalability vs Elasticity

如果 GlobalShop：

20 EC2
→ 300 EC2

说明系统具备：

Scalability

即：

能承载更大规模。

如果：

20
↓
300
↓
20

随着需求自动变化：

Elasticity

更突出。

128. 高频易混概念 5：EBS vs Instance Store
EBS
→ Persistent

Instance Store
→ Ephemeral

如果题目说：

temporary high-speed local storage

优先考虑：

Instance Store

如果是：

persistent block storage for EC2

优先：

EBS
129. 高频易混概念 6：Security Group vs IAM Role

这两个都是 Security，但解决完全不同的问题。

Security Group

谁能通过网络访问 EC2？

例如：

允许 ALB → EC2:8080

而：

IAM Role

EC2 运行的 Application 能调用哪些 AWS API？

例如：

EC2
→ s3:GetObject

所以：

Network Access
→ Security Group

AWS API Permission
→ IAM Role
130. 高频易混概念 7：On-Demand vs Spot
On-Demand

没有长期承诺
正常使用 Capacity
不因为 Spot reclaim 而被 AWS 中断

vs

Spot

便宜很多
使用 spare capacity
可能被中断
131. 高频易混概念 8：Savings Plans vs Capacity Reservation
Savings Plans
→ Cost

Capacity Reservation
→ Capacity

一道题如果说：

“公司必须确保活动当天在特定 AZ 一定能启动所需 EC2。”

核心不是：

便宜

而是：

capacity assurance

因此：

Capacity Reservation

方向更准确。

132. 高频易混概念 9：Dedicated Host vs Dedicated Instance
Dedicated Instance
→ dedicated hardware isolation

Dedicated Host
→ dedicated physical server
→ 更多 Host visibility/control
→ licensing

看到：

existing server-bound license

重点考虑：

Dedicated Host
133. 高频易混概念 10：EC2 vs Elastic Beanstalk
EC2
→ Infrastructure / VM

Elastic Beanstalk
→ Application deployment abstraction

Beanstalk 底层可能仍然帮你创建：

EC2
ELB
Auto Scaling

因此不是竞争关系，而是：

Beanstalk
     ↓
uses
     ↓
EC2 / ELB / Auto Scaling
134. 高频题型：需求 → 答案
场景 1
Short-term
Unpredictable
No long-term commitment

答案方向：

On-Demand
场景 2
Long-term
Stable compute usage
Want discount

当前架构思维：

Savings Plans

旧题 / 指定 EC2 RI 语境：

Reserved Instances
场景 3
Interruptible
Fault tolerant
Lowest cost

答案：

Spot Instances
场景 4
Existing server-bound license
Dedicated physical server

答案：

Dedicated Host
场景 5
Must guarantee EC2 capacity
specific AZ

答案：

On-Demand Capacity Reservation
场景 6
Automatically add EC2
when CPU increases

答案：

EC2 Auto Scaling
场景 7
Distribute HTTP traffic
across EC2

答案：

Application Load Balancer
场景 8
High-performance TCP / UDP

答案方向：

Network Load Balancer
场景 9
EC2 securely accesses S3
without hard-coded credentials

答案：

IAM Role
场景 10
Temporary local EC2 storage

答案：

Instance Store
135. GlobalShop 最终计算层案例

正常情况：

Users
  │
  ▼
 ALB
  │
 ┌┴───────────────────────────┐
 ▼                            ▼
AZ-A                          AZ-B
 │                             │
 ▼                             ▼
EC2                           EC2
 │                             │
 └──────── Auto Scaling ───────┘

每台 EC2：

AMI
+
Instance Type
+
EBS
+
Security Group
+
IAM Role
+
User Data

监控：

EC2
 │
 ▼
CloudWatch
 │
 ▼
Auto Scaling

访问 AWS Resource：

EC2
 │
 │ IAM Role
 ▼
S3 / DynamoDB / Other AWS APIs

流量高峰：

20 EC2
↓
300 EC2

高峰结束：

300
↓
20

后台可中断计算任务：

AWS Batch
+
Spot

这就是一个比较完整的 AWS 基础计算体系。

136. 本章必须真正记住的关系

不要把 EC2 学成：

EC2 = 云服务器

而应该形成下面这张关系图：

                       Compute
                          │
                          ▼
                         EC2
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
        ▼                 ▼                 ▼
       AMI          Instance Type         Storage
   怎么启动           多大机器          EBS / Store
        │
        ▼
Launch Template
        │
        ▼
Auto Scaling
有多少台 Instance
        │
        ▼
       ELB
请求发给哪一台
        │
        ▼
    Security Group
网络允许谁访问
        │
        ▼
      IAM Role
Instance 可以访问哪些 AWS API
        │
        ▼
     CloudWatch
监控运行状态与指标
137. 考前压缩版

只有完成前面的理解以后，才值得记下面这些。

Virtual Server
→ EC2

Server Image
→ AMI

CPU / Memory Configuration
→ Instance Type

Persistent Block Storage
→ EBS

Temporary Local Storage
→ Instance Store

Virtual Firewall
→ Security Group

EC2 Access AWS Service
→ IAM Role

Startup Script
→ User Data

Static Public IPv4
→ Elastic IP

Automatically Add / Remove EC2
→ EC2 Auto Scaling

Distribute Requests
→ Elastic Load Balancing

HTTP / HTTPS / Layer 7
→ ALB

TCP / UDP / Layer 4
→ NLB

No Long-term Commitment
→ On-Demand

Long-term Compute Discount
→ Savings Plans

Traditional EC2 Commitment Discount
→ Reserved Instances

Interruptible / Fault Tolerant
→ Spot

Dedicated Physical Server
→ Dedicated Host

Capacity Assurance
→ Capacity Reservation

Deploy Web App with Managed Environment
→ Elastic Beanstalk

Simple Website / Predictable Package
→ Lightsail

Batch Jobs
→ AWS Batch
138. 当前 AWS 与旧题库需要特别注意的更新
[UPDATED] 1. Savings Plans 与 RI

题库里：

长期稳定 EC2
→ Reserved Instances

仍然会大量出现。

当前 AWS：

AWS 已明确更推荐 Savings Plans

因此学习时必须同时知道两套语境。

[UPDATED] 2. Elastic IP / Public IPv4

旧资料可能写：

运行中的 EC2 绑定 EIP
→ 不收费

当前不能这样记。

目前 AWS 对 Public IPv4 普遍收费。

[UPDATED] 3. Launch Configuration

旧 Auto Scaling 教材经常：

Launch Configuration
→ ASG

当前应该以：

Launch Template

为主。

Launch Configuration 已经属于 Legacy Compatibility 路线，新账号的创建能力已经受到严格限制。

[UPDATED] 4. Instance Store

不要记：

任何 EC2 Restart
→ Instance Store 丢失

正确区分：

Reboot
→ 通常保留

Stop / Start
→ 原 Host Instance Store 数据丢失

Terminate
→ 不能把 Instance Store 当持久存储

139. AWS 官方资料

Amazon EC2：

AWS 官方文档：What is Amazon EC2?

EC2 Instance Types：

AWS 官方文档：EC2 Instance Type Specifications

AMI：

AWS 官方文档：Amazon EC2 AMI Lifecycle

EC2 Lifecycle：

AWS 官方文档：EC2 Instance State Changes

Security Group：

AWS 官方文档：Security Groups

EC2 IAM Role：

AWS 官方文档：IAM Roles for Amazon EC2

EC2 Auto Scaling：

AWS 官方文档：Amazon EC2 Auto Scaling

Elastic Load Balancing：

AWS 官方文档：Elastic Load Balancing

Reserved Instances：

AWS 官方文档：EC2 Reserved Instances

Savings Plans：

AWS 官方文档：Savings Plans

Spot Instances：

AWS 官方页面：EC2 Spot Instances

Capacity Reservations：

AWS 官方文档：EC2 Capacity Reservations

Elastic Beanstalk：

AWS 官方文档：What is AWS Elastic Beanstalk?

Amazon Lightsail：

AWS 官方文档：What is Amazon Lightsail?

AWS Batch：

AWS 官方文档：What is AWS Batch?

140. 本章结束后的知识位置

现在 GlobalShop 已经有了第一套真正可以运行应用程序的计算层：

                       GlobalShop
                           │
                           ▼
                          ALB
                           │
              ┌────────────┴────────────┐
              ▼                         ▼
            AZ-A                      AZ-B
              │                         │
             EC2                       EC2
              │                         │
              └────── Auto Scaling ─────┘
                           │
             ┌─────────────┼─────────────┐
             ▼             ▼             ▼
            EBS        IAM Role      CloudWatch

但这里还有一个重要问题没有解决：

是不是所有 Application
都必须运行在 EC2 Virtual Machine 上？

答案当然是否定的。

现代 AWS Compute 体系还有：

Container
ECS
EKS
Fargate

Serverless
Lambda

Application Runtime / Platform

因此下一章应该正式进入：

C2-03-容器Serverless与应用运行平台.md

重点建立：

Virtual Machine
        ↓
Container
        ↓
Docker
        ↓
ECS / EKS
        ↓
Fargate
        ↓
Serverless
        ↓
Lambda

并重点解释一个非常关键的问题：

EC2、Container、Fargate、Lambda 到底分别把多少基础设施管理责任交给 AWS，为什么现代系统会同时使用它们。