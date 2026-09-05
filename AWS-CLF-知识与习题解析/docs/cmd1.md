C1-总述/
│
├── C1-01-阅读说明与资料来源.md
├── C1-02-从传统机房到AWS云.md
├── C1-03-GlobalShop全球电商业务模型.md
├── C1-04-AWS完整技术地图.md
├── C1-05-AWS服务分类与命名规则.md
└── C1-06-CLF-C02考试与719题知识地图.md

C2-AWS知识体系/
│
├── C2-01-云计算核心概念与全球基础设施.md
├── C2-02-EC2与基础计算服务.md
├── C2-03-容器Serverless与应用运行平台.md
├── C2-04-存储体系.md
├── C2-05-数据库与缓存体系.md
├── C2-06-VPC与基础网络.md
├── C2-07-全球网络内容分发与混合网络.md
├── C2-08-IAM身份与访问控制.md
├── C2-09-安全加密威胁检测与合规.md
├── C2-10-监控运维治理与IaC.md
├── C2-11-消息事件应用集成与开发工具.md
├── C2-12-数据分析与大数据.md
├── C2-13-AI-ML-IoT与业务应用.md
├── C2-14-迁移数据传输与混合云.md
├── C2-15-成本计费定价与Support.md
└── C2-16-AWS架构思想与Framework.md

C3-架构与业务场景/
│
├── C3-01-GlobalShop完整基础架构.md
├── C3-02-用户访问商品页面完整链路.md
├── C3-03-计算层与双十一自动扩容.md
├── C3-04-订单数据库缓存与数据一致性.md
├── C3-05-订单异步化消息与事件驱动.md
├── C3-06-图片文件存储备份与生命周期.md
├── C3-07-VPC公网私网与服务间通信.md
├── C3-08-全球用户CDN-DNS与网络加速.md
├── C3-09-IAM加密与完整安全体系.md
├── C3-10-监控日志审计与故障排查.md
├── C3-11-多Account与企业治理.md
├── C3-12-本地机房迁移AWS全过程.md
├── C3-13-数据湖分析与AI数据链路.md
├── C3-14-Multi-AZ-Multi-Region与灾备.md
├── C3-15-双十一成本优化全过程.md
├── C3-16-AWS高频服务选择决策树.md
└── C3-17-全体系易混服务对比.md


C4-719题分类解析/
│
├── C4-00-719题索引与分类规则.md
├── C4-01-云计算价值与基础概念题.md
├── C4-02-Region-AZ-高可用与灾备题.md
├── C4-03-EC2-AMI与计算服务题.md
├── C4-04-EC2计费与容量选择题.md
├── C4-05-S3对象存储与Storage-Class题.md
├── C4-06-EBS-EFS-FSx与存储对比题.md
├── C4-07-Storage-Gateway-Backup-Snow题.md
├── C4-08-RDS-Aurora与关系数据库题.md
├── C4-09-DynamoDB-NoSQL-缓存与数据库选择题.md
├── C4-10-VPC-Subnet-路由与基础网络题.md
├── C4-11-Gateway-Endpoint-Peering-PrivateLink题.md
├── C4-12-DirectConnect-VPN-TransitGateway题.md
├── C4-13-Route53-CloudFront与全球网络题.md
├── C4-14-IAM-Role-Policy-MFA题.md
├── C4-15-Shared-Responsibility题.md
├── C4-16-KMS-Secrets-加密与凭证题.md
├── C4-17-GuardDuty-Inspector-Macie等安全题.md
├── C4-18-WAF-Shield与网络安全题.md
├── C4-19-CloudWatch-CloudTrail-Config题.md
├── C4-20-Organizations-治理-IaC题.md
├── C4-21-SQS-SNS-EventBridge应用集成题.md
├── C4-22-Migration与Hybrid-Cloud题.md
├── C4-23-Analytics-AI-ML-IoT题.md
├── C4-24-Cost-Billing-Pricing题.md
├── C4-25-AWS-Support与客户资源题.md
├── C4-26-CAF-Well-Architected题.md
└── C4-27-旧题争议题与当前AWS差异.md

C5-频率统计与强化/
│
├── C5-01-统计方法与分类规则.md
├── C5-02-AWS服务出现频率总排名.md
├── C5-03-作为正确答案的频率排名.md
├── C5-04-作为错误选项的频率排名.md
├── C5-05-知识概念出现频率排名.md
├── C5-06-服务共同出现与混淆组合.md
├── C5-07-高频场景与需求关键词.md
├── C5-08-五星到一星学习优先级.md
├── C5-09-当前范围与历史题分析.md
└── C5-10-最终强化学习清单.md

C6-总结与考前复习/
│
├── C6-01-AWS完整架构总图.md
├── C6-02-所有核心服务一览表.md
├── C6-03-所有高频服务对比表.md
├── C6-04-所有重要英文缩写与中文.md
├── C6-05-所有高频业务场景决策树.md
├── C6-06-719题Top知识点.md
├── C6-07-最容易做错的50个知识点.md
├── C6-08-当前AWS与旧题差异.md
└── C6-09-考前最后复习版.md





下面这份可以直接复制到新会话里，作为完整的交接上下文。

# AWS CLF-C02 学习文档项目：会话交接总结

## 1. 当前任务目标

用户正在基于一套约 700+ 道 AWS Certified Cloud Practitioner CLF-C02 题库，制作一套完整、系统、可长期阅读的 Markdown 学习文档。

这套资料不是：

* 单纯的 AWS 服务字典
* 单纯的 719 道题答案解析
* 简短的考试速查表
* 一堆“EC2=服务器、S3=存储”式定义

而是要做成一套真正的 AWS 入门到理解的系统教材。

核心目标：

```text
先理解：
云计算为什么存在
        ↓
AWS 的完整技术体系是什么
        ↓
每个服务为什么存在、解决什么问题
        ↓
不同服务怎么组合成真实系统
        ↓
通过统一电商案例理解实际使用
        ↓
再回到 719 道题
        ↓
分析题目、所有选项和混淆点
        ↓
统计高频知识点
        ↓
针对考试强化
```

---

# 2. 用户提供的源文件

当前会话中用户上传了：

```text
/mnt/data/AWS_CLF_C02_questions.json
/mnt/data/AWS_CLF_C02_questions_raw.txt
```

JSON 中确认：

```text
exam:
AWS Certified Cloud Practitioner CLF-C02

total_questions:
719
```

即一共：

# 719 道题

题目数据中包含：

```text
id
question
options
correct_answer
vote_distribution
comments
explanation
```

注意：

* 大部分题目 `explanation` 为空。
* 社区评论很多。
* `correct_answer` 是题库记录答案，不自动等于 AWS 官方正确答案。
* 后续需要结合当前 AWS 官方资料核对。

---

# 3. 最重要的用户要求

这些要求在新会话中应继续严格执行。

## 3.1 默认使用中文

用户希望整套学习资料使用中文。

但 AWS 英文术语必须保留。

---

## 3.2 不使用 Writing Block / Canvas / 文档模式

用户明确偏好：

> 普通聊天 Markdown 输出。

除非用户明确要求，不要使用：

* Writing Block
* Canvas
* 文档编辑模式
* 类似全屏编辑模式

直接在聊天中输出 Markdown。

---

# 4. 文档必须是“学习教材”，不是“参考手册”

用户之前明确指出，不接受这种写法：

```text
Amazon DocumentDB

Document Database。
MongoDB compatibility。

关键词：
MongoDB
document database
```

因为这种内容看似解释了，但实际上无法理解。

以后每个重要技术都必须完成从：

```text
为什么需要它
↓
它到底是什么
↓
它有什么特点
↓
实际怎么使用
↓
真实业务场景
↓
和其他服务怎么组合
↓
和相似服务怎么区分
↓
考试怎么考
```

的完整学习过程。

---

# 5. 每个 AWS 技术的统一讲解模板

以后第一次正式介绍一个重要 AWS 服务时，应尽量包含：

```text
1. 正式英文名称

2. 简称 / 缩写

3. 中文名称

4. 英文名称拆解
   为什么这样命名

5. 它为什么存在
   没有它之前有什么问题

6. 它到底是什么

7. 核心功能

8. 核心特点

9. 实际业务用途

10. GlobalShop 电商案例

11. ASCII 架构图

12. 一般和哪些 AWS 服务配合

13. 它不适合什么

14. 与类似服务的区别

15. 题目中通常怎么出现

16. 常见干扰项

17. 重要英文词汇

18. 当前 AWS 官方资料链接
```

不是每个低频服务都一定写 18 节，但核心服务应达到这种解释深度。

---

# 6. 英文术语处理规则

这是用户特别强调的要求。

第一次出现英文缩写时，必须同时给：

```text
英文缩写
完整英文
中文
基本解释
```

例如：

```text
IAM
= Identity and Access Management
= 身份与访问管理
```

```text
DR
= Disaster Recovery
= 灾难恢复 / 灾备
```

```text
HA
= High Availability
= 高可用性
```

```text
CDN
= Content Delivery Network
= 内容分发网络
```

不能直接写：

```text
Multi-Region → DR / sovereignty
```

然后默认用户知道 DR 或 sovereignty 是什么。

第一次出现的专业英语也尽量解释，例如：

```text
Latency
延迟

Throughput
吞吐量

Durability
持久性 / 数据耐久性

Workload
工作负载
```

---

# 7. AWS 名字也要解释

用户不只想知道功能，还希望理解 AWS 产品为什么叫这个名字。

例如：

```text
EC2
Amazon Elastic Compute Cloud

Elastic
弹性

Compute
计算

Cloud
云
```

为什么叫 EC2：

```text
Compute + Cloud
两个 C

EC²
→ EC2
```

例如：

```text
S3
Simple Storage Service

三个 S
→ S3
```

例如：

```text
KMS
Key Management Service

这里的 Key
= Encryption Key
= 加密密钥
```

而不是数据库 Primary Key。

---

# 8. 必须使用统一真实业务案例

整套文档统一采用：

# GlobalShop 全球电商平台

作为教学案例。

这是虚构业务，不代表 Amazon、淘宝或京东真实架构。

可以理解成：

```text
Amazon / 淘宝 / 京东
的简化教学模型
```

业务包括：

```text
用户注册 / 登录

商品

分类

SKU

商品图片 / 视频

商品搜索

购物车

优惠券

订单

库存

支付

物流

邮件 / 短信

客服

商家后台

风控

日志

数据分析

AI / 推荐
```

用户分布：

```text
日本
美国
欧洲
东南亚
```

假设：

```text
平时：
约 100 万日活

双十一：
约 3000 万日活
瞬时流量几十倍
```

整套资料尽量使用同一个 GlobalShop 场景，不要每个服务都重新发明一个毫无关联的“A公司”。

---

# 9. GlobalShop 已经建立的总体架构思路

大致：

```text
Global Users
     │
     ▼
Route 53
DNS
     │
     ▼
CloudFront
CDN / Edge
     │
     ▼
WAF / Shield
     │
     ▼
Elastic Load Balancer
     │
 ┌───┼────┐
 ▼   ▼    ▼
EC2 EC2  EC2
     │
     ├── ElastiCache
     │
     ├── RDS / Aurora
     │
     ├── DynamoDB
     │
     ├── S3
     │
     └── SQS / SNS / EventBridge
```

横向支撑：

```text
IAM
KMS

CloudWatch
CloudTrail
Config

Organizations
CloudFormation

Cost Explorer
Budgets
Pricing Calculator
```

后续服务都尽量放回这张系统图中解释。

---

# 10. 重点等级规则

所有知识点统一使用星级：

```text
★★★★★
核心中的核心，必须彻底理解

★★★★
高频重点，必须会区分场景

★★★
重要知识

★★
次重点

★
低频 / 题库补充

无星
了解即可
```

星级综合考虑：

```text
当前 CLF-C02 官方考试范围

+

719题出现频率

+

作为正确答案的频率

+

作为错误选项 / 干扰项的频率

+

与其他服务的混淆程度

+

是否属于 AWS 基础架构核心知识
```

不是单纯按照字符串次数。

---

# 11. 当前 AWS 官方资料与题库必须分开

整套资料需要同时使用：

## 来源 A：当前 AWS 官方资料

用于确定：

```text
AWS 服务现在是什么

当前 CLF-C02 范围

当前产品状态

当前 Support 体系

当前最佳实践
```

## 来源 B：719 道题库

用于：

```text
发现考点

发现高频服务

发现题型

发现干扰项

发现旧题

发现争议题
```

---

# 12. 不允许盲目相信题库答案

后续 Module/Chapter 的题目解析必须采用：

```text
题库答案
≠
自动等于当前AWS正确答案
```

如果存在差异，应写：

```text
【题库答案】
A

【当前 AWS 判断】
C 更合理

【原因】
...

【考试处理】
需要知道旧题为什么这样出，
但不能把旧规则当成当前技术事实。
```

---

# 13. 推荐使用状态标签

后续对旧服务/旧题可以使用：

```text
[CURRENT-IN-SCOPE]
当前 CLF-C02 官方明确范围内

[QUESTION-BANK]
719题中出现

[CURRENT-OUT-OF-SCOPE]
当前官方明确列为考试范围外

[LEGACY]
历史知识

[DISPUTED]
题库答案存在争议

[UPDATED]
AWS 当前规则已经变化
```

例如：

```text
★ AWS Wavelength

[QUESTION-BANK]
[CURRENT-OUT-OF-SCOPE]
```

即：

题库里出现，所以要知道；
但不应该和 EC2、S3 一样投入大量备考时间。

---

# 14. 用户对官方链接格式的要求

不要写这种：

```text
([AWS Documentation][3])
```

或者参考文献编号式链接。

用户希望看到可直接阅读的链接，例如：

```markdown
[AWS 官方文档：AWS Regions](https://docs.aws.amazon.com/...)
```

即：

> 直接给出对应超链接。

---

# 15. 架构图要求

用户明确表示：

> 不需要生成图片。

关系、流程和架构尽量使用：

```text
ASCII
Markdown
文字图
```

例如：

```text
Users
  │
  ▼
CloudFront
  │
  ▼
ALB
  │
 ┌┴─────┐
 ▼      ▼
EC2    EC2
```

---

# 16. 解释抽象概念时必须说明“为什么这样叫”

例如 Edge Location。

不能只说：

> 靠近用户的 AWS 边缘节点。

需要解释：

```text
为什么叫 Edge？

Edge 不是“城市边缘”

而是网络拓扑中的：

Core
核心

↓

Edge
边缘

↓

User
终端用户
```

即：

越靠近最终用户网络的一侧，就越接近网络 Edge。

以后 Local Zone、Gateway、Endpoint 等也应采用这种理解方式。

---

# 17. C1 已经正式确定

目录：

```text
C1-总述/
│
├── C1-01-阅读说明与资料来源.md
├── C1-02-从传统机房到AWS云.md
├── C1-03-GlobalShop全球电商业务模型.md
├── C1-04-AWS完整技术地图.md
├── C1-05-AWS服务分类与命名规则.md
└── C1-06-CLF-C02考试与719题知识地图.md
```

C1 已经全部输出完成。

---

# 18. C1-01 已完成内容

`C1-01-阅读说明与资料来源.md`

已经说明：

```text
整套资料目标

AWS当前官方资料

719题库

通用计算机知识

题库答案不等于官方答案

星级规则

旧题处理方式

英语缩写规则

GlobalShop案例作用

推荐学习顺序
```

---

# 19. C1-02 已完成内容

`C1-02-从传统机房到AWS云.md`

已经介绍：

```text
传统Data Center

On-Premises

服务器 / 网络 / 存储 / 数据库

Capacity Planning

CAPEX

OPEX

Fixed Expense

Variable Expense

Cloud Computing

Provisioning

Pay-as-you-go

Economies of Scale

Agility

Scalability

Vertical Scaling

Horizontal Scaling

Elasticity

High Availability

Fault Tolerance

Shared Responsibility基本思想
```

---

# 20. C1-03 已完成内容

`C1-03-GlobalShop全球电商业务模型.md`

已经定义：

```text
GlobalShop业务范围

用户

商品

媒体

搜索

推荐

购物车

订单

库存

支付

物流

通知

客服

日志

分析
```

并初步映射：

```text
Route 53
CloudFront
EC2
Auto Scaling
S3
EBS
RDS/Aurora
DynamoDB
ElastiCache
SQS
SNS
IAM
KMS
CloudWatch
CloudTrail
Config
Multi-AZ
Multi-Region
Cost Explorer
Budgets
Pricing Calculator
```

---

# 21. C1-04 已完成内容

`C1-04-AWS完整技术地图.md`

已经建立 AWS 的整体分类：

```text
Global Infrastructure

Compute

Storage

Database

Networking and Content Delivery

Identity

Security

Monitoring / Management / Governance

Application Integration

Analytics

AI / ML

Migration and Transfer

Cloud Financial Management

Architecture Frameworks
```

---

# 22. C1-05 已完成内容

`C1-05-AWS服务分类与命名规则.md`

已经解释很多反复出现的名称和词：

```text
EC2
S3
RDS
EBS
EFS
VPC
IAM
KMS
SQS
SNS
ECS
EKS
ECR
DMS
SCT
ACM
RAM
```

以及：

```text
Elastic
Simple
Managed
Fully Managed
Serverless
Instance
Resource
Workload
Gateway
Endpoint
Region
Availability Zone
Zone
Cluster
Bucket
Object
Volume
Snapshot
Policy
Role
Principal
Authentication
Authorization
Encryption
Latency
Throughput
Availability
Reliability
Durability
API
CLI
SDK
IaC
```

---

# 23. C1-06 已完成内容

`C1-06-CLF-C02考试与719题知识地图.md`

已说明当前官方 CLF-C02 四大领域：

```text
Domain 1
Cloud Concepts
24%

Domain 2
Security and Compliance
30%

Domain 3
Cloud Technology and Services
34%

Domain 4
Billing, Pricing, and Support
12%
```

也说明：

719 题不适合按 Q1 → Q719 顺序学习。

应该重新分类成：

```text
Cloud Concepts
Infrastructure
Compute
Storage
Database
Networking
Security
Monitoring
Governance
Integration
Analytics / AI
Migration
Cost
Framework
```

---

# 24. C2 的正式目录

用户已经明确给出并固定：

```text
C2-AWS知识体系/
│
├── C2-01-云计算核心概念与全球基础设施.md
├── C2-02-EC2与基础计算服务.md
├── C2-03-容器Serverless与应用运行平台.md
├── C2-04-存储体系.md
├── C2-05-数据库与缓存体系.md
├── C2-06-VPC与基础网络.md
├── C2-07-全球网络内容分发与混合网络.md
├── C2-08-IAM身份与访问控制.md
├── C2-09-安全加密威胁检测与合规.md
├── C2-10-监控运维治理与IaC.md
├── C2-11-消息事件应用集成与开发工具.md
├── C2-12-数据分析与大数据.md
├── C2-13-AI-ML-IoT与业务应用.md
├── C2-14-迁移数据传输与混合云.md
├── C2-15-成本计费定价与Support.md
└── C2-16-AWS架构思想与Framework.md
```

这是后续必须严格遵守的目录。

---

# 25. C2 的定位

C2 是整个教材最重要的：

# AWS 知识体系主体章节

主要回答：

> 每一个 AWS 技术到底是什么？

不是主要回答：

> 719 题怎么选。

题库考法可以适当出现，但系统题目解析属于后面的章节。

C2 的重点：

```text
从0理解技术
↓
为什么存在
↓
功能
↓
特点
↓
实际业务
↓
GlobalShop
↓
和其他服务关系
↓
相似技术区别
```

---

# 26. C2-01 已经完成

`C2-01-云计算核心概念与全球基础设施.md`

已经正式输出完成。

主要覆盖：

```text
Cloud Computing

On-Premises

Capacity Planning

Fixed Expense
Variable Expense

CAPEX
OPEX

Pay-as-you-go

Economies of Scale

Agility

Scalability

Vertical Scaling
Horizontal Scaling

Elasticity

High Availability
SPOF
Redundancy

Fault Tolerance

Reliability

Resilience / Resiliency

Durability

AWS Global Infrastructure

Region

Tokyo Region
ap-northeast-1

Osaka Region
ap-northeast-3

Availability Zone
AZ

AZ ID

Multi-AZ

Multi-Region

Disaster Recovery
DR

RTO

RPO

Data Residency

Data Sovereignty

Global Footprint

Edge

Edge Location

Origin

Cache

Regional Edge Cache

Local Zone

AWS Outposts

AWS Wavelength
（题库出现，但当前CLF-C02 Out-of-Scope）

Regional / Zonal / Global resource scope

Latency

Throughput

Bandwidth
```

---

# 27. C2-01 已经使用的重要业务关系

已经建立：

```text
Region
→ 大的地理部署区域

AZ
→ Region内部故障隔离位置

Multi-AZ
→ High Availability

Multi-Region
→ 更高层级DR / 全球业务

Edge Location
→ CDN / 靠近用户

Local Zone
→ 靠近城市运行Compute等Workload

Outposts
→ AWS基础设施进入客户机房

Wavelength
→ 5G Telecom Edge
```

---

# 28. C2-01 的重要实际例子

东京：

```text
Asia Pacific (Tokyo)

Region Code:
ap-northeast-1
```

大阪：

```text
Asia Pacific (Osaka)

Region Code:
ap-northeast-3
```

Tokyo 当前：

```text
4 AZ
```

Osaka 当前：

```text
3 AZ
```

C2-01 中已经解释：

> Tokyo 是 Region，不是 AZ。

并给出了真实 Tokyo AZ ID 例子：

```text
apne1-az1
apne1-az2
apne1-az3
apne1-az4
```

---

# 29. C2-01 已建立的高频区分

```text
Agility
→ 获取资源、尝试业务更快

Scalability
→ 能否承载越来越大的规模

Elasticity
→ 随当前需求扩大和缩小

High Availability
→ 故障时尽量维持服务
```

以及：

```text
Availability
→ 现在能不能访问

Durability
→ 数据会不会丢
```

以及：

```text
RTO
→ 最多允许停多久

RPO
→ 最多允许丢多少时间的数据
```

---

# 30. 下一步明确是 C2-02

新会话应该从：

# `C2-02-EC2与基础计算服务.md`

开始。

不要重新输出 C1，也不要重复 C2-01。

---

# 31. C2-02 原定内容

C2-02 应系统讲：

```text
Compute 是什么

Physical Server

Virtual Machine

Virtualization

Hypervisor

Amazon EC2

Elastic Compute Cloud

EC2 Instance

AMI

Instance Type

vCPU

Memory

Network

Storage

Instance Family

General Purpose

Compute Optimized

Memory Optimized

Storage Optimized

Accelerated Computing

EC2 Instance Lifecycle

Launch

Start

Stop

Reboot

Terminate

EBS

Instance Store
（这里只介绍与EC2直接关系，
完整存储在C2-04）

Elastic IP
（简单介绍，网络细节C2-06）

Security Group
（简单介绍，网络安全细节后讲）

IAM Role for EC2
（简单介绍，IAM在C2-08完整讲）

User Data

Metadata
如果CLF层级有价值则解释

Auto Scaling

EC2 Auto Scaling

Elastic Load Balancing

ELB

ALB

NLB

AMI + Auto Scaling关系

Load Balancer + Auto Scaling关系

CloudWatch + Auto Scaling关系

EC2 Shared Responsibility

EC2 Pricing Models

On-Demand

Reserved Instances

Spot Instances

Dedicated Hosts

Dedicated Instances
如题库出现

Capacity Reservations
如题库出现

Savings Plans
可在这里介绍与EC2关系，
完整成本模型在C2-15

Elastic Beanstalk

Lightsail

AWS Batch
```

---

# 32. C2-02 必须继续用 GlobalShop

核心场景：

## 普通商品服务

```text
User
 ↓
ALB
 ↓
EC2
```

## 多 AZ

```text
             ALB
          /       \
         ▼         ▼
      AZ-A       AZ-B
       EC2        EC2
```

## 双十一

```text
平时：
20 EC2

流量增加：
Auto Scaling

高峰：
300 EC2

结束：
20 EC2
```

## EC2 + EBS

```text
EC2
 │
 ▼
EBS
系统盘 / 数据盘
```

## EC2 + IAM Role + S3

```text
EC2
 │
 │ IAM Role
 ▼
S3
```

不能硬编码 Access Key。

题库中 Q4 就直接考这个。

---

# 33. C2-02 要特别解释 EC2 为什么叫 Elastic

不要只说：

> EC2 是云服务器。

需要从：

```text
传统服务器采购
↓
VM
↓
Cloud VM
↓
EC2
↓
为什么叫Elastic
```

一步一步讲。

---

# 34. C2-02 需要讲清 Virtual Machine

用户是开发背景，但整个文档目标仍然要从入门角度建立概念。

建议讲：

```text
Physical Server
物理服务器

Host
宿主机

Hypervisor
虚拟机管理层

Virtual Machine
虚拟机

Guest OS
客户操作系统
```

ASCII：

```text
Physical Server
│
├── Hypervisor
│
├── VM 1
│   └── Linux
│
├── VM 2
│   └── Linux
│
└── VM 3
    └── Windows
```

然后自然过渡到：

```text
EC2 Instance
```

---

# 35. EC2 Instance Type 不要做成型号表

重点不是背：

```text
t3
m5
c7
r6
```

而是理解：

```text
General Purpose
通用

Compute Optimized
计算优化

Memory Optimized
内存优化

Storage Optimized
存储优化

Accelerated Computing
加速计算
```

GlobalShop 场景：

```text
普通Web
→ General Purpose

大量CPU计算
→ Compute Optimized

大型内存缓存/分析
→ Memory Optimized

高本地存储I/O
→ Storage Optimized

GPU/ML
→ Accelerated Computing
```

---

# 36. EC2 购买模型是高频重点

此前对 719 题做过字符串统计，EC2 相关非常高频。

已统计到的大致数据：

```text
Amazon EC2
约 175 道题涉及
```

EC2 购买模型：

```text
Reserved Instances
约 45

Spot Instances
约 41

On-Demand Instances
约 39

Dedicated Hosts
约 19

Savings Plans
约 17
```

这些是题干+所有选项中出现的“题目曝光度”级统计，不等于正确答案次数。

因此 C2-02 中需要详细讲选择逻辑。

---

# 37. EC2 购买模型核心学习框架

## On-Demand

```text
没有长期承诺
需求不确定
短期
实验
```

## Reserved Instances

```text
稳定
可预测
长期
1年/3年承诺类场景
```

注意当前 AWS RI 具体机制和 Capacity Reservation 不应混淆。

## Spot

```text
便宜

但：
可能被AWS中断

适合：
可中断
容错
Batch
```

不适合：

```text
不能中断的关键数据库
```

## Savings Plans

```text
承诺一定计算消费
换取折扣

灵活度通常高于传统某些RI绑定方式
```

完整成本比较在 C2-15 深入。

---

# 38. 题库已知的一些高频服务曝光度

之前扫描 719 题得到过这些粗略频率。

注意：

这是“题干 + 所有选项中，每题最多计一次”的曝光度统计。

大致：

```text
EC2                  175

S3                    83

IAM                   76

Reserved Instances    45

RDS                   42

Trusted Advisor       41

Shared Responsibility 41

Spot Instances        41

On-Demand             39

VPC                   37

DynamoDB              36

GuardDuty              35

WAF                    33

AWS CAF                33

AWS Region             33

Lambda                 31

Security Groups        30

Inspector              30

CloudWatch             29

Direct Connect         28

CloudTrail             27

Well-Architected       27

CloudFront             26

Shield                 26

Aurora                 25

Config                 25

CloudFormation         25

Organizations          24

Cost Explorer          23

Systems Manager        22

EBS                    21

Availability Zone      21

Budgets                20

Redshift               18

Cognito                18

Storage Gateway        17

Artifact               17

DataSync               17

Savings Plans          17

Elastic Beanstalk      16

EFS                    16

Route 53               16

Network ACL            16

Security Hub           16

Secrets Manager        15

Marketplace            15

Outposts               15

Athena                  15

Fargate                 14

Macie                   14

Service Catalog        14

DMS                     14

Snow Family            14
```

后面 C5/频率模块还需要重新更严谨统计。

---

# 39. Gateway 是题库的重要混淆家族

此前扫描：

“Gateway”出现在大约 43 道不同题中。

包括：

```text
Internet Gateway

NAT Gateway

Transit Gateway

Storage Gateway

Virtual Private Gateway

API Gateway
```

用户之前特别指出：

> 不要只告诉我“答案是某某 Gateway”。

需要解释：

```text
题目到底想实现什么

为什么这个Gateway满足

其他Gateway分别是什么

为什么不满足
```

这主要在：

```text
C2-06
C2-07

以及后面的题库解析章节
```

重点处理。

---

# 40. 719 题分类的粗略分析结果

此前已经做过启发式分类，大致：

```text
Security
约117

Cloud Concepts / Frameworks
约86

Cost / Pricing / Support
约86

Compute
约77

Management / Governance / Observability
约73

Networking
约64

Storage
约46

Migration / Hybrid / Edge
约35

Database
约35

Analytics / ML
约24

Application Integration / Dev
约23

End-user / Business
约9
```

还有一部分需要人工重新分类。

这些数字是辅助设计教材结构，不应当作为最终权威统计。

最终频率模块要重新计算。

---

# 41. 题库里的一些已确认实际题型

## Q150

问：

> 由一个或多个 Data Center 组成的环境是什么？

答案方向：

```text
Availability Zone
```

---

## Q147

问：

> EC2 要在某个 geographic area 发生 natural disaster 时仍保持服务。

答案：

```text
multiple AWS Regions
```

用于理解：

```text
Multi-Region
```

---

## Q77

问：

> 能抵抗 failure，并只有 minimal downtime，体现什么 Cloud benefit？

答案：

```text
High Availability
```

用于区分：

```text
Agility
Elasticity
Scalability
High Availability
```

---

## Q40

问：

```text
Elasticity in the AWS Cloud refers to...
```

主要体现：

```text
需求变化时调整资源
需要时容易获得资源
```

而不是：

```text
EC2 reboot speed

maximum RAM
```

---

## Q4

问：

> EC2 应该如何安全访问 S3？

答案：

```text
EC2 assumes IAM Role
```

不是：

```text
hard-code access key
```

---

## Q3

场景：

```text
本地文件存储不够
又希望保留local performance
```

答案：

```text
AWS Storage Gateway File Gateway
```

这个题以后需要完整解释：

```text
Hybrid Storage

local cache

S3 backend
```

---

# 42. 当前 AWS 官方状态中的重要变化

后续写作时要注意。

## AWS Support

截至 2026 年当前状态已经变化。

当前新的 Support 体系包括：

```text
Basic

Business Support+

Enterprise Support

Unified Operations
```

旧的：

```text
Developer Support

Business Support
```

截至 2025-12-02 已不再接受新订阅，并计划 2027-01-01 停止。

Enterprise On-Ramp 也在过渡。

因此：

> 题库里的旧 Support Plan 题必须标记为历史题 / 当前规则变化。

C2-15 必须重点处理这一点。

---

# 43. Storage Gateway 当前变化

当前 AWS 官方资料中：

**Amazon FSx File Gateway**

已不再向新客户提供。

现有客户可继续使用。

但是旧题库里仍可能出现。

所以后面讲 Storage Gateway 时应区分：

```text
当前AWS
vs
旧题库
```

---

# 44. S3 Glacier 表述注意

后续不要粗暴把：

```text
S3 Glacier
```

全部说成一个独立的“存储服务”。

当前更准确理解是：

S3 中存在 Glacier 类存储级别，例如：

```text
S3 Glacier Instant Retrieval

S3 Glacier Flexible Retrieval

S3 Glacier Deep Archive
```

C2-04 中应详细讲。

---

# 45. Instance Store 表述注意

此前提醒过：

不要过度简化成：

> EC2 一停止，Instance Store 一定丢。

更安全的 CLF 级解释：

```text
Instance Store
= ephemeral local storage

实例停止 / 终止、
底层宿主硬件发生问题等生命周期变化时，
数据可能丢失。

Reboot 本身通常不会导致Instance Store数据丢失。
```

具体生命周期根据实例类型和操作不同。

C2-02 / C2-04 中应避免过度绝对化。

---

# 46. 后续总体章节结构

用户现在明确采用：

```text
C1
C2
...
```

其中：

# C1 = 总述

# C2 = AWS知识体系

原来已经商定的后续逻辑没有变化，可以继续映射为：

```text
C3
AWS架构与业务场景

C4
719题分类解析

C5
频率统计与强化

C6
总结与考前复习
```

如果用户之后给出新的章节名/序号，以用户最新目录为准。

---

# 47. 原来约定的“架构与业务场景”章节内容

如果以后用户没有另行修改，可以继续使用：

```text
GlobalShop完整基础架构

用户访问商品页面完整链路

计算层与双十一自动扩容

订单数据库缓存与数据一致性

订单异步化消息与事件驱动

图片文件存储备份与生命周期

VPC公网私网与服务间通信

全球用户CDN-DNS与网络加速

IAM加密与完整安全体系

监控日志审计与故障排查

多Account与企业治理

本地机房迁移AWS全过程

数据湖分析与AI数据链路

Multi-AZ-Multi-Region与灾备

双十一成本优化全过程

AWS高频服务选择决策树

全体系易混服务对比
```

---

# 48. 后续 719 题解析章节的要求

必须按知识类型分组，而不是机械：

```text
Q1
Q2
Q3
...
Q719
```

推荐分类：

```text
云计算价值与基础概念

Region / AZ / 高可用 / DR

EC2

EC2 Pricing

S3

EBS / EFS / FSx

Storage Gateway / Snow / Backup

RDS / Aurora

DynamoDB / NoSQL / Cache

VPC / Subnet

Gateway / Endpoint / PrivateLink / Peering

Direct Connect / VPN / Transit Gateway

Route53 / CloudFront

IAM / Role / Policy

Shared Responsibility

KMS / Secrets

GuardDuty / Inspector / Macie

WAF / Shield

CloudWatch / CloudTrail / Config

Organizations / Governance / IaC

SQS / SNS / EventBridge

Migration

Analytics / AI

Cost

Support

CAF / Well-Architected

争议题 / 历史题
```

---

# 49. 后续每道题的标准分析模板

建议固定：

```text
## Question #XXX

### 原始题目

### 中文场景

### 这家公司真正要解决什么问题

### 条件拆解

### 核心考点

### 架构图

### A 选项
是什么
为什么看起来可能正确
为什么本题不选

### B 选项
...

### C 选项
...

### D 选项
...

### 题库答案

### 当前AWS判断

### 是否存在题库/当前AWS差异

### 相似知识点

### 相似题

### 真正应该记住什么
```

这点是用户最开始非常强调的。

---

# 50. 频率统计章节不能只算“正确答案”

用户明确要求：

> 包括作为干扰选项出现的次数。

最终应该统计：

```text
总出现次数

题干出现次数

正确选项次数

错误选项次数

经常和哪些服务一起出现

最常成为谁的干扰项
```

例如：

```text
GuardDuty

总曝光：
XX

正确答案：
XX

错误选项：
XX

最常混淆：
Inspector
Macie
Security Hub
WAF
Shield
```

---

# 51. 还要统计“业务场景词”

不只是 AWS 名字。

还要分析：

```text
high availability

least privilege

cost-effective

low latency

private access

without internet

unpredictable workload

steady workload

sensitive data

DDoS

vulnerability

API activity

CPU utilization

operational overhead
```

因为真正考试模式是：

```text
业务需求
↓
服务选择
```

---

# 52. 最终考前总结应该高度压缩

只有在前面已经详细理解以后，最后才做：

```text
CPU
→ CloudWatch

API Activity
→ CloudTrail

Resource Configuration
→ Config

Vulnerability
→ Inspector

Threat
→ GuardDuty

Sensitive S3 Data
→ Macie

DDoS
→ Shield

SQL Injection
→ WAF
```

不能一开始就这样学。

---

# 53. 用户整体写作偏好

写作时：

* 中文清楚、直接。
* 不需要“AI腔”。
* 不要反复说“你刚才指出得对”“我之前写错了”这种对话式道歉。
* 正文应像正式教材，而不是一直回应用户之前的问题。
* 不要把用户指出的几个知识点无限放大。
* 必须全盘覆盖 AWS 体系，而不是围绕用户举的例子偏科。
* 内容长没有问题，用户明确表示“不嫌长”。
* 但要通过章节/文件拆分，避免一个 Markdown 几万行。
* 一个 C2 文件可以很长，只要逻辑完整。
* 不需要为了省长度而牺牲理解过程。

---

# 54. 新会话的推荐开场上下文

可以直接给新会话模型这句话：

> 继续之前的 AWS CLF-C02 系统教材项目。C1 六个文件已经全部完成，C2-01《云计算核心概念与全球基础设施》也已经完成。现在不要重复前文，直接按照既定要求输出 `C2-02-EC2与基础计算服务.md`。必须继续使用 GlobalShop 电商案例，所有缩写第一次出现给完整英文和中文，每个核心技术从为什么存在、是什么、特点、业务场景、与其他服务关系、相似服务对比、题库考法来解释，并结合 719 道题和当前 AWS 官方知识体系；当前知识与旧题有差异时明确标记。使用普通 Markdown 聊天输出，不使用 Writing Block/Canvas。

---

# 55. 下一步

当前进度：

```text
C1-01 ✅
C1-02 ✅
C1-03 ✅
C1-04 ✅
C1-05 ✅
C1-06 ✅

C2-01 ✅

C2-02 ← 下一篇
C2-03
C2-04
...
C2-16
```

下一篇应直接开始：

# `C2-02-EC2与基础计算服务.md`

不要重新解释项目背景，直接进入正文即可。
