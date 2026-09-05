# C1-02-从传统机房到AWS云

## 1-为什么要先讲传统机房？

如果不知道传统 IT 是怎么工作的，就很难真正理解：EC2 为什么存在、EBS 为什么存在、VPC 为什么存在、RDS 为什么存在、Auto Scaling 为什么重要、Availability Zone 为什么重要；因为 AWS 并没有凭空创造企业 IT 的需求。AWS 做的事情之一，是把大量过去需要：买硬件、建设机房、拉网络、采购存储、安装数据库、维护设备；才能获得的 IT 能力，转变为可以通过网络按需获得的服务。

---

## 2-假设-2005-年要创建-GlobalShop

你准备创建一个全球电商系统。业务包括：用户、商品、订单、库存、支付、物流、图片、客服、数据分析；首先需要运行程序。于是需要：服务器；数据不能丢，需要：磁盘、存储设备；商品和订单需要查询：数据库；用户访问网站：网络、路由器、交换机、DNS、公网IP；防止所有请求打一台机器：负载均衡器；还需要：防火墙、日志系统、备份、监控、机房、UPS、空调、备用电源；一个传统架构可能是：

```text
                         Internet
                            │
                         Router
                            │
                        Firewall
                            │
                    Load Balancer
                            │
             ┌──────────────┼──────────────┐
             ▼              ▼              ▼
         Web Server     Web Server     Web Server
             │              │              │
             └──────────────┼──────────────┘
                            ▼
                      App Servers
                            │
              ┌─────────────┴────────────┐
              ▼                          ▼
           Database                    Cache
              │
              ▼
          SAN / Storage

整个系统位于：

Company Data Center
企业自己的数据中心
```
---

## 3-★★★-Data-Center-是什么？

**Data Center**；  中文：**数据中心 / 机房**；它不是简单的一间“放电脑的屋子”。真正的数据中心要解决：

```text
电力
备用电源
制冷
消防
物理安全
网络线路
机柜
服务器
存储
交换机
路由器
运维
监控
灾备
```
假设 GlobalShop 买了 1000 台服务器。还需要考虑：

> 一旦停电，这 1000 台服务器怎么办？

所以可能需要：

```text
UPS
Uninterruptible Power Supply
不间断电源

Backup Generator
备用发电机
```
服务器会产生大量热量，又需要大规模制冷。所以企业维护 IT 的成本远远不只是：

> “服务器多少钱？”

---

## 4-★★★★-CAPEX-和-OPEX

这是 CLF-C02 非常重要的云经济概念。

### 4.1-CAPEX

**Capital Expenditure**；  中文：**资本性支出**；例如公司提前花：1000万元购买：服务器、存储设备、交换机、机房设施；不管这些服务器以后用不用，钱已经花掉了。

---

### 4.2-OPEX

**Operating Expenditure**；  中文：**运营性支出 / 经营性支出**；例如：

```text
这个月使用多少计算资源
↓
支付多少
```
云计算的重要经济变化之一就是：

```text
大量 Fixed Expense
固定支出

↓

Variable Expense
可变支出
```
AWS 官方将这一点列为云计算的重要优势之一：把数据中心和物理服务器这样的固定成本转换为随实际使用变化的可变成本。([AWS Documentation](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html?utm_source=chatgpt.com))

---

## 5-★★★★-Capacity-Planning：容量规划

假设 GlobalShop 平时需要：100 台服务器双十一需要：2000 台服务器传统系统必须提前做：**Capacity Planning**；  中文：**容量规划**；问题是，你不知道未来真实需要多少。

---

### 5.1-买-100-台

```text
平时：

需求 = 100
容量 = 100
正常

双十一：

需求 = 2000
容量 = 100

↓↓↓↓↓↓↓↓↓↓↓↓↓↓

系统过载
```
---

### 5.2-买-2000-台

双十一没问题。但其他 364 天：

```text
容量：
████████████████████████████████████████

使用：
██
```
1900 台左右的容量长期闲置。

---

## 6-★★★★★-Stop-Guessing-Capacity

AWS 官方所说的云计算优势之一就是：**Stop guessing capacity**；中文可以理解为：

> **不再依赖提前猜测未来需要多少 IT 容量。**

传统方式：

```text
预测一年后的最大流量
↓
提前采购
↓
预测错了也只能承担结果
```
云：

```text
实际需要增加
↓
增加资源

实际需求下降
↓
减少资源
```
([AWS Documentation](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html?utm_source=chatgpt.com))

---

## 7-★★★★★-Cloud-Computing-是什么？

**Cloud Computing**；  中文：**云计算**；可以先理解成：

> 通过网络按需获得计算、存储、数据库、网络等 IT 能力，并根据实际需求动态使用，而不是所有基础设施都必须自己提前采购和建设。

最重要的变化是：

```text
Infrastructure ownership
自己拥有基础设施

↓

Infrastructure as a service
按服务使用基础设施
```
---

## 8-一个最简单的变化：服务器

传统：

```text
业务部门：
需要10台服务器

↓ 提需求

IT部门

↓ 预算

采购

↓ 等待

供应商发货

↓ 上架

网络配置

↓ 安装OS

部署应用
```
可能需要数周。AWS：

```text
需要服务器
   │
   ▼
Amazon EC2
   │
   ▼
创建 Instance
```
几分钟即可获得计算资源。

---

## 9-★★★-Provisioning

**Provisioning**；  中文：**资源供应 / 资源配置 / 开通资源**；在云环境里经常出现：

```text
provision an EC2 instance
创建/供应一台 EC2

provision infrastructure
配置基础设施
```
所以：CloudFormation reduces provisioning time；意思不是“传输速度更快”。而是：

> 自动创建基础设施，降低人工开通资源所需的时间。

---

## 10-★★★★★-Pay-as-you-go

**Pay as you go**；  中文：**按使用量付费 / 按需付费思想**；概念非常直观：

```text
使用多少
↓
支付多少
```
注意：

> AWS 并不是所有服务都完全只有一种“按秒计费”方式。

有些服务：按小时、按秒、按请求、按 GB、按存储量、按数据传输、按 provisioned capacity、按承诺使用量

AWS 官方定价原则也明确指出，不同资源采用不同计量单位，例如计算资源可能按时间，存储和数据传输通常按 GB。([AWS Documentation](https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/key-principles.html?utm_source=chatgpt.com))

---

## 11-★★★★-Economies-of-Scale

完整英文：**Economies of Scale**；  中文：**规模经济**；假设 GlobalShop 自己买服务器：购买：、500 台；AWS：为大量客户共同建设基础设施、规模：、远大于单个企业；大规模采购：服务器、网络、电力、带宽、数据中心设备；通常能够获得更低的单位成本。这就是：

```text
Scale ↑
单位成本可能 ↓
```
AWS 官方将“Benefit from massive economies of scale”列为云计算优势之一。([AWS Documentation](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html?utm_source=chatgpt.com))

---

## 12-★★★★-Agility

**Agility**；  中文：**敏捷性**；这里不是 Scrum 的 Agile。它强调：

> 企业能够更快获得资源、更快试验、更快上线新产品。

例如 GlobalShop 想测试一个：AI商品推荐系统；传统模式：

```text
先申请 GPU
采购服务器
网络配置
部署环境

一个月以后：
开始实验
```
AWS：

```text
申请云资源
↓
当天开始实验
```
实验失败：关闭资源；实验成功：继续扩展；这就是 Cloud Agility。

---

## 13-★★★★★-Scalability

**Scalability**；  中文：**可扩展性**；意思是：

> 系统处理更大工作负载的能力。

例如：

```text
10万请求 / 分钟
↓
100万请求 / 分钟
```
系统仍然能够通过增加资源继续工作。

---

### 13.1-Vertical-Scaling

**Vertical Scaling**；  中文：**纵向扩展 / 垂直扩展**；也叫：**Scale Up**；原来：2 CPU、4 GB RAM变成：32 CPU、128 GB RAM即：

> 把一台机器变强。

---

### 13.2-Horizontal-Scaling

**Horizontal Scaling**；  中文：**横向扩展 / 水平扩展**；也叫：**Scale Out**；原来：EC2；增加：EC2、EC2、EC2、EC2、EC2；即：

> 增加机器数量。

现代互联网应用特别常见 Horizontal Scaling。

---

## 14-★★★★★-Elasticity

**Elasticity**；  中文：**弹性**；它和 Scalability 不是完全一样。Scalability：

> 能不能扩。

Elasticity：

> 能不能随着实际需求自动或快速扩大，再在需求下降时缩回来。

例如双十一：

```text
10:00
20台EC2

18:00
50台

20:00
300台

23:30
100台

02:00
20台
```
这就是：

```text
Scale Out
扩出去

+

Scale In
缩回来
```
题库中也明确区分 High Availability、Elasticity、Scalability 和 Agility。例如第 77 题将“出现故障仍尽量减少停机”归到 High Availability，而不是 Elasticity 或 Scalability。

---

## 15-★★★★★-High-Availability

**HA = High Availability**；  中文：**高可用性**；解决：

> 一部分系统发生故障时，业务仍然尽可能保持可用。

例如：

```text
          Load Balancer
          /           \
         /             \
      AZ-A             AZ-B
       │                │
     EC2              EC2
```
AZ-A 故障：

```text
AZ-A
 X

流量
 ↓
AZ-B
```
High Availability 关注的是：减少单点故障、减少停机时间、冗余、多可用区部署

---

## 16-★★★★-Fault-Tolerance

**Fault Tolerance**；  中文：**容错能力 / 故障容忍**；它与 High Availability 很接近，但语义更强。可以粗略理解：

```text
High Availability
目标：
尽量保持服务可用，允许非常短的恢复过程

Fault Tolerance
目标：
组件发生故障时，系统仍然继续工作，尽量不感知中断
```
CLF-C02 不要求把二者做非常学术化的可用性数学区分，但需要知道两者都与：

```text
redundancy
冗余

failure
故障

availability
可用性
```
有关。

---

## 17-★★★★-Disaster-Recovery

**DR = Disaster Recovery**；  中文：**灾难恢复 / 灾备**；解决的不再只是一台服务器坏掉。可能考虑：

```text
Availability Zone failure
整个可用区故障

Region-level disaster
区域级重大故障

data corruption
数据损坏

ransomware
勒索软件

human error
人为错误
```
GlobalShop：

```text
Tokyo Region
主业务

       │
       │ 复制 / 备份
       ▼

Osaka Region
灾备
```
如果东京出现重大区域级问题，可以根据灾备方案在大阪恢复业务。

---

## 18-从服务器到-AWS-服务

传统数据中心能力与 AWS 可以先建立这样的映射：

| 传统能力            | AWS 中常见对应方向                   |
| --------------- | ----------------------------- |
| 服务器             | Amazon EC2                    |
| Serverless 代码执行 | AWS Lambda                    |
| 容器平台            | ECS / EKS / Fargate           |
| 本地硬盘 / 块设备      | EBS                           |
| 文件系统            | EFS / FSx                     |
| 对象文件仓库          | S3                            |
| 关系数据库           | RDS / Aurora                  |
| NoSQL           | DynamoDB                      |
| 内存缓存            | ElastiCache                   |
| 私有网络            | VPC                           |
| 防火墙             | Security Group / NACL / WAF 等 |
| DNS             | Route 53                      |
| CDN             | CloudFront                    |
| 负载均衡            | Elastic Load Balancing        |
| 权限体系            | IAM                           |
| 监控              | CloudWatch                    |
| 操作审计            | CloudTrail                    |
| 配置审计            | AWS Config                    |
| 自动部署基础设施        | CloudFormation                |
| 成本分析            | Cost Explorer                 |

这只是帮助建立直觉，并不是严格的一一等价关系。

---

## 19-Cloud-并不意味着“不需要服务器”

这是一个重要误解。比如 Lambda 被称为：**Serverless**；  中文：**无服务器**；不是：

> AWS 真的没有服务器。

而是：

> 服务器的创建、维护、操作系统、扩缩容等大量基础设施工作由 AWS 承担，开发者不再直接管理这些服务器。

物理机器依然存在。只是：你管理的抽象层、变高了

---

## 20-Shared-Responsibility-的萌芽

传统机房：

```text
物理机房
你负责

服务器
你负责

OS
你负责

应用
你负责

数据
你负责
```
AWS：

```text
Data Center
AWS负责

Physical Server
AWS负责

Hypervisor
AWS负责

Guest OS
是否由谁负责
取决于使用什么服务

Application
客户负责

Data / IAM
客户通常仍承担重要责任
```
这最终形成：★★★★★ **AWS Shared Responsibility Model**；  中文：**AWS 责任共担模型**；后续安全章节详细展开。题库中也大量直接考“什么是 AWS 的责任、什么是客户责任”，例如 DynamoDB 题目要求区分 AWS 管理的底层基础设施与客户自己管理的数据访问权限。

---

## 21-本章小结

传统 IT 的核心问题是：

```text
先采购
↓
再使用
↓
容量需要预测
↓
硬件需要自己维护
↓
扩大基础设施需要时间
```
Cloud 的核心变化是：

```text
按需获得
↓
快速创建
↓
按实际需求扩缩
↓
更多基础设施工作交给云厂商
↓
从固定成本向可变成本转化
```
后续 AWS 几乎所有服务，都可以从这个变化中理解。

---
