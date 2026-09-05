# C1-03-GlobalShop全球电商业务模型

## 1-为什么需要统一案例？

如果学习 AWS 时不断看到：A公司、B公司、一家媒体公司、一家银行、一家医院、一家游戏公司；技术虽然很多，但很难形成系统。因此整套教材采用统一的：作为主业务。

---

## 2-GlobalShop-是什么？

【教学示例】；GlobalShop 是一家虚构的全球电子商务企业。可以把业务规模想象成：Amazon、+、淘宝、+、京东；的某种简化教学模型。不是在描述任何真实公司的技术架构。

---

## 3-用户范围

GlobalShop 面向：日本、韩国、新加坡、美国、加拿大、英国、法国、德国、...；的消费者。主要团队位于东京。

---

## 4-核心业务模块

```text
GlobalShop
│
├── 用户中心
│   ├── 注册
│   ├── 登录
│   ├── Profile
│   └── 地址
│
├── 商品中心
│   ├── 商品
│   ├── 分类
│   ├── SKU
│   ├── 价格
│   └── 商品状态
│
├── 媒体中心
│   ├── 商品图片
│   ├── 商品视频
│   └── 用户上传图片
│
├── 搜索
│
├── 推荐
│
├── 购物车
│
├── 优惠券
│
├── 订单
│
├── 库存
│
├── 支付
│
├── 物流
│
├── 消息通知
│   ├── Email
│   ├── SMS
│   └── Push
│
├── 客服
│
├── 商家后台
│
├── 风险控制
│
├── 日志
│
└── 数据分析
```
这一套业务足够覆盖 CLF-C02 中绝大多数技术。

---

## 5-流量模型

普通工作日：

```text
日活：
1,000,000

同时在线：
50,000

Web请求：
相对稳定
```
双十一：

```text
日活：
30,000,000

瞬时请求：
可能是平时几十倍

20:00抢购：
出现流量尖峰
```
因此 GlobalShop 必须解决：★★★★★ Scalability；**可扩展性**；★★★★★ Elasticity；**弹性**；★★★★★ High Availability；**高可用性**

---

## 6-用户第一次访问网站

用户输入：www.globalshop.example；第一件事不是访问 EC2。浏览器首先需要知道：

> 这个域名应该去哪里？

所以出现：★★★★★ Amazon Route 53；负责：**DNS**；完整英文：**Domain Name System**；；；；中文：**域名系统**；以后会详细讲：

```text
domain
域名

DNS record
DNS记录

routing
路由策略
```
---

## 7-全球用户为什么不能全部直接访问东京？

假设所有原始商品图片都存储在东京。美国用户每次看商品：

```text
美国用户
   │
   │ Internet
   │
   │ 跨太平洋
   ▼
Tokyo
   │
   ▼
S3
   │
   ▼
原图返回美国
```
这会增加：**Latency**；；；；中文：**网络延迟**；于是出现：★★★★ Amazon CloudFront；它属于：**CDN = Content Delivery Network**；；；；中文：**内容分发网络**；GlobalShop 可以把商品图片缓存到更靠近用户的网络节点。

---

## 8-用户请求进入系统以后

简化：

```text
Users
  │
  ▼
Route 53
  │
  ▼
CloudFront
  │
  ▼
WAF / Shield
  │
  ▼
Load Balancer
  │
 ┌┴───────────┐
 ▼            ▼
EC2          EC2
```
这里已经出现四类完全不同的问题：

```text
Route 53
→ 地址在哪里

CloudFront
→ 怎么让全球访问更快

WAF / Shield
→ 怎么保护入口

Load Balancer
→ 请求怎么分给多台服务器
```
---

## 9-Web-和业务计算

GlobalShop 的：商品服务、订单服务、库存服务、后台系统；需要计算资源。最经典：★★★★★ Amazon EC2；**EC2 = Elastic Compute Cloud**；；；；中文：**弹性计算云**；可以运行：Java、Node.js、Python、Go、.NET、...；应用。

---

## 10-为什么不能只用一台-EC2？

如果：

```text
Users
  │
  ▼
EC2
```
一旦这台 EC2：Crash、宕机；整个网站：X；因此：

```text
Users
  │
  ▼
Load Balancer
  │
 ┌┼──────┐
 ▼▼      ▼
EC2 EC2 EC2
```
形成冗余。

---

## 11-双十一怎么自动加服务器？

★★★★★ AWS Auto Scaling；平时：EC2 × 20；高峰：EC2 × 200；凌晨：EC2 × 20；这就是后续理解：Elasticity、Auto Scaling、Load Balancing；的统一业务场景。

---

## 12-商品图片存哪里？

GlobalShop 有：5亿张商品图片如果全部塞进数据库：问题很多。商品图片适合：★★★★★ Amazon S3；**S3 = Simple Storage Service**；；；；中文：**简单存储服务**；它属于：**Object Storage**；；；；中文：**对象存储**；基本模型：

```text
Bucket
桶
 │
 ├── object-a.jpg
 ├── object-b.mp4
 └── object-c.pdf
```
---

## 13-EC2-自己的系统盘怎么办？

运行服务器还需要类似磁盘的东西。于是：★★★★ Amazon EBS；**EBS = Elastic Block Store**；；；；中文：**弹性块存储**；典型关系：

```text
EC2
 │
 ▼
EBS
```
后续会详细解释：

```text
S3 = Object Storage
EBS = Block Storage
EFS = File Storage
```
为什么是三个完全不同的模型。

---

## 14-订单存哪里？

订单数据通常有：订单ID、用户ID、商品、价格、状态、支付状态、地址、创建时间；而且存在：关系、事务、查询；因此传统关系数据库非常合适。GlobalShop 可以使用：★★★★★ Amazon RDS；**RDS = Relational Database Service**；；；；中文：**关系型数据库服务**；或者：★★★★★ Amazon Aurora；AWS 的关系数据库产品。

---

## 15-所有数据都应该放-RDS-吗？

不是。GlobalShop 可能还有：用户Session、购物车、高规模Key-Value访问；某些业务更适合：★★★★★ Amazon DynamoDB；一种 AWS 托管的 NoSQL 数据库。所以以后真正的问题不是：

> RDS 是什么？

而是：

```text
订单为什么适合RDS/Aurora？

什么数据适合DynamoDB？

为什么S3不能代替RDS？

为什么Redis/ElastiCache又不是数据库的简单替代？
```
---

## 16-热门商品访问太多怎么办？

一个爆款商品：iPhone；一分钟可能被查询数百万次。如果每个请求都直接：

```text
Application
    │
    ▼
Database
```
数据库压力很大。可以增加：★★★★ Amazon ElastiCache；内存缓存。结构：

```text
Application
    │
    ▼
ElastiCache
    │
命中
    ├────────→ 返回
    │
未命中
    ▼
Database
```
---

## 17-下单为什么需要-Message-Queue？

一个用户点击：购买；背后可能发生：创建订单、扣库存、发送邮件、更新积分、通知物流、数据分析、风控、推荐更新；如果所有步骤串行：

```text
A
↓
B
↓
C
↓
D
↓
E
```
任何一步慢，都可能让用户一直等。所以系统需要：★★★★ Amazon SQS；**SQS = Simple Queue Service**；；；；中文：**简单队列服务**；实现：

```text
订单创建成功
     │
     ▼
    SQS
 ┌───┼─────┬──────┐
 ▼   ▼     ▼      ▼
邮件 库存  物流   数据分析
```
后续会系统解释：

```text
Queue
消息队列

Asynchronous
异步

Decoupling
解耦
```
---

## 18-一条消息发给很多系统怎么办？

可以考虑：★★★ Amazon SNS；**SNS = Simple Notification Service**；；；；中文：**简单通知服务**；典型：

```text
订单事件
   │
   ▼
  SNS
 ┌─┼─────┐
 ▼ ▼     ▼
SQS Email SMS
```
这涉及：**Publish / Subscribe**；简称：**Pub/Sub**；；；；中文：**发布 / 订阅模式**

---

## 19-GlobalShop-怎么管理员工权限？

不可能让所有员工都拥有：Administrator；权限。于是：★★★★★ AWS IAM；**IAM = Identity and Access Management**；；；；中文：**身份与访问管理**；例如：

```text
开发人员
→ 可以查看开发环境

DBA
→ 管理数据库

财务人员
→ 查看账单

EC2
→ 只能读取指定S3 Bucket
```
题库甚至直接有：

> EC2 应该通过 IAM Role 获取访问 S3 的权限，而不是把 Access Key 硬编码到程序里。

---

## 20-数据怎么加密？

GlobalShop 存：用户地址、订单、支付相关信息、商业数据；加密会涉及：★★★★ AWS KMS；**KMS = Key Management Service**；；；；中文：**密钥管理服务**；核心不是：

> KMS 存文件。

而是：

> 管理 Encryption Key —— 加密密钥。

---

## 21-怎么知道系统快不快？

GlobalShop 运维人员想看：CPU、请求量、错误率、Latency、资源指标、Logs；于是：★★★★★ Amazon CloudWatch；Cloud + Watch：可以直观理解成：**观察云中的系统。**

---

## 22-怎么知道谁改坏了-Security-Group？

假设凌晨：

```text
Security Group
从：

443 only

变成：

0.0.0.0/0
all ports
```
安全团队需要知道：

> 谁改的？

这时候不是 CloudWatch。而是：★★★★★ AWS CloudTrail；Trail：**足迹 / 轨迹**；记录 AWS API 活动。

---

## 23-怎么知道资源以前是什么配置？

如果想知道：

```text
这个 Security Group
昨天是什么样？

今天是什么样？

是否满足公司规则？
```
则：★★★★ AWS Config；Config 来自：**Configuration**；；；；中文：**配置**；所以形成第一组极高频对比：

```text
CloudWatch
→ 系统运行得怎么样？

CloudTrail
→ 谁做了什么AWS操作？

Config
→ AWS资源是什么配置、怎么变化？
```
---

## 24-GlobalShop-怎么处理全球故障？

主要业务在：Tokyo Region；内部至少跨：AZ-A、AZ-B；部署：

```text
Load Balancer
   │
 ┌─┴────────┐
 ▼          ▼
AZ-A       AZ-B
EC2        EC2
```
这叫：★★★★★ Multi-AZ；；；；中文：**多可用区架构**；用于高可用。更进一步可能：

```text
Tokyo Region
     │
     │ replication / backup
     ▼
Osaka Region
```
用于更大范围的：★★★★ Disaster Recovery；灾难恢复。

---

## 25-公司以前还有本地机房怎么办？

GlobalShop 不一定一夜之间全部迁 AWS。旧系统可能仍在东京自己的：On-Premises Data Center、本地数据中心；于是出现：VPN、Direct Connect、Storage Gateway、DataSync、DMS、Application Migration Service、Snow Family；这就是：**Hybrid Cloud**；；；；中文：**混合云**；以及：**Cloud Migration**；；；；中文：**云迁移**

---

## 26-GlobalShop-怎么知道钱花在哪里？

双十一扩容之后：本月AWS账单：、$1,000,000；财务部门马上会问：

> 钱花哪儿了？

对应：★★★★ AWS Cost Explorer；**成本分析工具**；如果问：

> 本月超过 80 万美元就提醒我。

对应：★★★★ AWS Budgets；**预算管理**；如果问：

> 双十一系统还没上线，先估算大概要多少钱。

对应：★★★★ AWS Pricing Calculator；**定价计算器**

---

## 27-GlobalShop-一张总业务图

```text
                           Global Users
                Japan / US / Europe / Asia
                             │
                             ▼
                         Route 53
                             │
                             ▼
                        CloudFront
                             │
                       WAF / Shield
                             │
                             ▼
                    Load Balancer
                             │

            ┌────────────────┴─────────────────┐
            │          Tokyo Region            │
            │                                  │
            │              VPC                 │
            │                                  │
            │     AZ-A                AZ-B     │
            │      │                   │       │
            │     EC2                 EC2      │
            │      │                   │       │
            │      └────────┬──────────┘       │
            │               │                  │
            │      Auto Scaling                │
            │               │                  │
            │    ┌──────────┼───────────┐      │
            │    ▼          ▼           ▼      │
            │ Aurora    DynamoDB   ElastiCache │
            │                                  │
            └──────────────────────────────────┘
                         │
                         ▼
                         S3
                商品图片 / 文件 / 日志

订单异步链路：

Application
    │
    ▼
   SQS
 ┌──┼────┬─────┐
 ▼  ▼    ▼     ▼
通知 库存 物流  分析

安全与治理：

IAM
KMS
GuardDuty
Inspector

监控：

CloudWatch
CloudTrail
Config

成本：

Cost Explorer
Budgets
Pricing Calculator
```
后面的所有章节，本质上都是在逐渐把这张图展开。

---

## 28-本章小结

GlobalShop 的意义在于：

```text
AWS服务
不再是：
EC2 / S3 / RDS / IAM / VPC
一堆单词

而变成：

用户访问
↓
网络
↓
计算
↓
存储
↓
数据库
↓
异步消息
↓
安全
↓
监控
↓
成本
```
