This is a copy of a shared ChatGPT chat. It won't be added to memory.

Report conversation
Today 8:38 AM
Uploaded a file
Uploaded a file

我给你一个AWS的习题，大概700多道，你根据这些习题，帮我把这些习题里所牵涉到的知识点，全部汇总处理出来。结构是这样的：

模块1，先把所有的技术模块，介绍明白，比如什么是EC2 S3 之类的，先全部介绍，作为一个引子。
模块2，再把各个模块，详细介绍一下，比如 EC2 与各种其他的服务之间的使用啊之类的，全部都说明一下。以及使用的时候，有哪些常见的案例呀，在某些场景，该使用哪些内容
模块3，针对于我给你的习题，分门别类地讲解习题，比如这道题，考点是 gateway ，但是你不能直接说答案就是 gateway，而是，要根据这题的实际场景，分析一下，这个题是要做什么，同时，解析每一个选项，选项是做什么的。再者，对比不同的选项之间的差异之类的。这个可能会有同一个知识点在不同的习题里出现。
模块4，针对同一个知识点，在很多习题里都出现的时候（包括选项），按照频率，从头到尾排列输出，这样便于针对于知识点强化学习。
如果你一次性不能输出完毕，那么可以分多次输出。要求输出 markdown 格式的内容，而且，在知识点之间，可以使用一些文字图来描述各个知识点之间的关系，便于理解，不要生成 image 格式的图片，没必要。
C1-总述
C1-01-阅读说明与资料来源.md
AWS CLF-C02 系统学习文档：阅读说明与资料来源
1. 这套文档的目标

这套资料不是一份单纯的 AWS 服务字典，也不是一份“719 道题答案解析”。

它的目标是建立一套完整的 AWS 知识体系，使学习过程按照下面的顺序进行：

先理解：
云计算为什么存在
        ↓
AWS 的基础设施长什么样
        ↓
AWS 有哪些技术领域
        ↓
每一种 AWS 服务解决什么问题
        ↓
不同服务如何组合成真实系统
        ↓
面对一个业务需求时如何选择服务
        ↓
再回到 719 道题
        ↓
分析题目为什么这样出
        ↓
分析每个选项为什么对、为什么错
        ↓
统计反复出现的知识点
        ↓
针对高频知识进行强化

最终目标不是：

“看到某个关键词，机械地背一个答案。”

而是：

“理解业务需求以后，即使题目换一种写法，也能够自己推出应该使用什么 AWS 服务。”

2. 三套知识来源

这套文档会同时使用三类信息，但不会把它们混在一起。

2.1 第一来源：AWS 当前官方资料

★★★★★

凡是涉及：

AWS 服务现在是什么
某个产品现在是否存在
当前 CLF-C02 考试范围
当前服务名称
AWS 官方架构定义
当前 Support 体系
当前 Region / Availability Zone 信息
AWS 官方最佳实践

都会优先以 AWS 当前官方文档为准。

AWS 当前 CLF-C02 官方考试指南明确说明，这项认证考察的是与具体职位无关的 AWS Cloud 整体基础知识；当前考试仍然划分为四个领域。

官方入口：

AWS Certified Cloud Practitioner CLF-C02 官方考试指南

CLF-C02 当前考试范围内 AWS 服务

CLF-C02 当前考试范围外 AWS 服务

CLF-C02 Technologies and Concepts

2.2 第二来源：719 道题库

★★★★★

你提供的 JSON 文件明确记录：

exam:
AWS Certified Cloud Practitioner CLF-C02

total_questions:
719

即这套题库共有 719 道题。

题目数据不仅包含：

question
options
correct_answer

还包含：

vote_distribution
comments
explanation

例如第一题就同时包含题库答案、社区投票比例和大量用户评论。

因此这份题库非常适合：

发现高频服务
发现高频业务场景
发现容易混淆的选项
发现旧题
发现争议题
统计知识点频率

但需要注意：

题库中的 correct_answer 是题库记录的答案，不自动等于 AWS 官方标准答案。

如果题库答案、社区意见和当前 AWS 官方资料之间存在冲突，后续题目解析统一使用：

【题库答案】
A

【当前 AWS 判断】
B 更合理

【原因】
……

【考试处理】
如果属于历史题，需要同时知道旧知识和当前知识。

而不会为了维护题库答案而强行解释。

2.3 第三来源：通用计算机与软件工程知识

AWS 建立在大量已有的计算机技术之上。

例如：

DNS
HTTP
TCP/IP
CIDR
NAT
Load Balancing
Container
Kubernetes
SQL
NoSQL
Cache
Message Queue
Pub/Sub
Encryption
Public Key
Private Key
CDN
API

这些不是 AWS 发明的。

所以如果直接说：

Amazon Route 53 是 DNS 服务。

对于没有系统学习过 DNS 的人来说，仍然没有真正解释清楚。

因此文档会先解释：

DNS 是什么
↓
传统系统为什么需要 DNS
↓
AWS 为什么提供 Route 53
↓
Route 53 如何进入 GlobalShop

而不是直接从 AWS 产品名开始背。

3. 文档中的事实等级

为了避免“题库说了，所以一定是真的”，整套资料使用下面几种信息等级。

标记	含义
【AWS 当前】	经过当前 AWS 官方资料确认
【题库】	来自这 719 道题
【历史题】	题库涉及，但当前 AWS 范围或产品状态已经变化
【推导】	根据架构原理作出的合理推导
【教学示例】	为了理解而构造的 GlobalShop 示例，不代表真实公司架构
【争议】	题库答案、评论或当前 AWS 资料之间存在明显分歧
4. 知识重要度

以后统一使用：

★★★★★  核心知识
★★★★    高频重点
★★★      重要知识
★★       次重点
★        低频知识
无星       了解即可

星级不是按照 AWS 服务本身“高级不高级”决定。

例如：

Amazon EC2        ★★★★★
Amazon S3         ★★★★★
IAM               ★★★★★
Amazon VPC        ★★★★★
CloudWatch        ★★★★★

AWS Wavelength    ★

并不是说 Wavelength 技术上“不重要”。

而是综合考虑：

CLF-C02 当前范围
+
719 题出现情况
+
是否经常成为正确答案
+
是否频繁成为干扰选项
+
是不是理解其他知识的基础
5. 当前考试范围与题库范围不是一回事

这一点非常重要。

AWS 官方目前明确列出了 CLF-C02 的 In-Scope 和 Out-of-Scope 服务，并说明这些清单是 non-exhaustive（非穷尽）且可能变化。

例如当前官方 In-Scope 中包括：

Amazon EC2
Amazon S3
Amazon RDS
Amazon DynamoDB
Amazon VPC
Amazon CloudFront
Route 53
IAM
GuardDuty
Inspector
CloudWatch
CloudTrail
AWS Config
CloudFormation
Lambda
Fargate
ECS
EKS
...

但当前官方 Out-of-Scope 清单又明确列出了：

AWS Wavelength
AWS CodeDeploy
Amazon WorkDocs
AWS IoT Device Defender
Amazon Personalize
...

而这些范围外服务中的一部分仍然出现在题库里。

例如题库评论中明确讨论了 AWS Wavelength。

因此整套教材不会简单地：

当前 Out-of-Scope
↓
删除

而会标记：

★ 【题库补充】【CURRENT-OUT-OF-SCOPE】

AWS Wavelength

告诉你：

老题可能出现，需要知道它是干什么的；但当前备考优先级已经明显下降。

6. 服务第一次出现时的统一格式

后续每个重要服务第一次正式学习时，按照以下结构：

★★★★★ Amazon EC2

正式英文：
Amazon Elastic Compute Cloud

简称：
EC2

中文：
Amazon 弹性计算云 / EC2 云服务器

名称为什么这样取：
Elastic = 弹性
Compute = 计算
Cloud = 云

为什么需要它：
……

它是什么：
……

核心特点：
……

GlobalShop 场景：
……

和哪些服务配合：
……

容易和什么混淆：
……

题库如何考：
……

常见错误：
……

相关英文：
……

AWS 官方资料：
……

这样一个服务不会被压缩成一句：

“EC2 = VM。”

7. 英文的处理规则

第一次出现的重要专业词必须给出：

英文
英文全称（如果存在缩写）
中文
基本含义

例如：

★★★★★ HA
HA
= High Availability
= 高可用性
★★★★ DR
DR
= Disaster Recovery
= 灾难恢复 / 灾备
★★★ CDN
CDN
= Content Delivery Network
= 内容分发网络
★★★★★ IAM
IAM
= Identity and Access Management
= 身份与访问管理

之后再使用：

HA
DR
CDN
IAM

就不需要每一次重新展开。

8. GlobalShop 的作用

整套教材不会每介绍一个 AWS 服务就发明一家新公司。

固定使用：

GlobalShop 全球电商平台

作为主案例。

例如：

EC2
→ 商品系统服务器

S3
→ 商品图片

RDS / Aurora
→ 订单数据库

DynamoDB
→ 大规模 Key-Value 数据

CloudFront
→ 全球商品图片分发

Route 53
→ shop.example.com DNS

SQS
→ 下单之后的异步任务

IAM
→ 员工、服务和资源权限

CloudWatch
→ CPU、请求量、错误率

CloudTrail
→ 谁修改了 AWS 资源

Budgets
→ 双十一云资源成本预警

于是整套 AWS 最终会形成一个完整系统，而不是几十个孤立产品。

9. 学习顺序

不要一开始背：

EC2
S3
RDS
IAM
VPC
CloudTrail
...

推荐采用：

第一阶段
理解 AWS 世界

传统机房
↓
Cloud
↓
Region / AZ
↓
Compute / Storage / Database / Network


第二阶段
学习各个服务

EC2
S3
RDS
...


第三阶段
学习服务之间的关系

EC2 + EBS
EC2 + IAM Role + S3
ALB + EC2 + Auto Scaling
CloudFront + S3
...


第四阶段
真实业务架构

GlobalShop


第五阶段
719题


第六阶段
频率强化
10. 本文档不是部署手册

CLF-C02 是 Foundational Level（基础级）认证。

当前官方定义也是验证 AWS Cloud、服务和术语的基础、高层次理解。

所以这套资料重点解决：

What
是什么

Why
为什么

When
什么时候使用

Which
应该选哪个

而不是把大量篇幅花在：

AWS Console 点哪个按钮
CLI 参数怎么写
Terraform 怎么配置
CloudFormation YAML 每个字段
Kubernetes Manifest 怎么写

这些属于后续 Associate / Professional 或实际工程实践层面的内容。

C1-01 小结

整套教材的原则可以压缩成：

719题
不是教材本身
      │
      ▼
用于发现考点和陷阱

AWS官方资料
      │
      ▼
确定当前事实

计算机基础知识
      │
      ▼
解释技术为什么存在

GlobalShop
      │
      ▼
把所有服务连接为真实系统
C1-02-从传统机房到AWS云.md
从传统机房到 AWS 云
1. 为什么要先讲传统机房？

如果不知道传统 IT 是怎么工作的，就很难真正理解：

EC2 为什么存在
EBS 为什么存在
VPC 为什么存在
RDS 为什么存在
Auto Scaling 为什么重要
Availability Zone 为什么重要

因为 AWS 并没有凭空创造企业 IT 的需求。

AWS 做的事情之一，是把大量过去需要：

买硬件
建设机房
拉网络
采购存储
安装数据库
维护设备

才能获得的 IT 能力，转变为可以通过网络按需获得的服务。

2. 假设 2005 年要创建 GlobalShop

你准备创建一个全球电商系统。

业务包括：

用户
商品
订单
库存
支付
物流
图片
客服
数据分析

首先需要运行程序。

于是需要：

服务器

数据不能丢，需要：

磁盘
存储设备

商品和订单需要查询：

数据库

用户访问网站：

网络
路由器
交换机
DNS
公网IP

防止所有请求打一台机器：

负载均衡器

还需要：

防火墙
日志系统
备份
监控
机房
UPS
空调
备用电源

一个传统架构可能是：

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
3. Data Center 是什么？

★★★

Data Center

中文：

数据中心 / 机房

它不是简单的一间“放电脑的屋子”。

真正的数据中心要解决：

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

假设 GlobalShop 买了 1000 台服务器。

还需要考虑：

一旦停电，这 1000 台服务器怎么办？

所以可能需要：

UPS
Uninterruptible Power Supply
不间断电源

Backup Generator
备用发电机

服务器会产生大量热量，又需要大规模制冷。

所以企业维护 IT 的成本远远不只是：

“服务器多少钱？”

4. CAPEX 和 OPEX

★★★★

这是 CLF-C02 非常重要的云经济概念。

CAPEX

Capital Expenditure

中文：

资本性支出

例如公司提前花：

1000万元

购买：

服务器
存储设备
交换机
机房设施

不管这些服务器以后用不用，钱已经花掉了。

OPEX

Operating Expenditure

中文：

运营性支出 / 经营性支出

例如：

这个月使用多少计算资源
↓
支付多少

云计算的重要经济变化之一就是：

大量 Fixed Expense
固定支出

↓

Variable Expense
可变支出

AWS 官方将这一点列为云计算的重要优势之一：把数据中心和物理服务器这样的固定成本转换为随实际使用变化的可变成本。

5. Capacity Planning：容量规划

★★★★

假设 GlobalShop 平时需要：

100 台服务器

双十一需要：

2000 台服务器

传统系统必须提前做：

Capacity Planning

中文：

容量规划

问题是，你不知道未来真实需要多少。

5.1 买 100 台
平时：

需求 = 100
容量 = 100
正常


双十一：

需求 = 2000
容量 = 100

↓↓↓↓↓↓↓↓↓↓↓↓↓↓

系统过载
5.2 买 2000 台

双十一没问题。

但其他 364 天：

容量：
████████████████████████████████████████

使用：
██

1900 台左右的容量长期闲置。

6. Stop Guessing Capacity

★★★★★

AWS 官方所说的云计算优势之一就是：

Stop guessing capacity

中文可以理解为：

不再依赖提前猜测未来需要多少 IT 容量。

传统方式：

预测一年后的最大流量
↓
提前采购
↓
预测错了也只能承担结果

云：

实际需要增加
↓
增加资源

实际需求下降
↓
减少资源

7. Cloud Computing 是什么？

★★★★★

Cloud Computing

中文：

云计算

可以先理解成：

通过网络按需获得计算、存储、数据库、网络等 IT 能力，并根据实际需求动态使用，而不是所有基础设施都必须自己提前采购和建设。

最重要的变化是：

Infrastructure ownership
自己拥有基础设施

↓

Infrastructure as a service
按服务使用基础设施
8. 一个最简单的变化：服务器

传统：

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

可能需要数周。

AWS：

需要服务器
   │
   ▼
Amazon EC2
   │
   ▼
创建 Instance

几分钟即可获得计算资源。

9. Provisioning

★★★

Provisioning

中文：

资源供应 / 资源配置 / 开通资源

在云环境里经常出现：

provision an EC2 instance
创建/供应一台 EC2

provision infrastructure
配置基础设施

所以：

CloudFormation reduces provisioning time

意思不是“传输速度更快”。

而是：

自动创建基础设施，降低人工开通资源所需的时间。

10. Pay-as-you-go

★★★★★

Pay as you go

中文：

按使用量付费 / 按需付费思想

概念非常直观：

使用多少
↓
支付多少

注意：

AWS 并不是所有服务都完全只有一种“按秒计费”方式。

有些服务：

按小时
按秒
按请求
按 GB
按存储量
按数据传输
按 provisioned capacity
按承诺使用量

AWS 官方定价原则也明确指出，不同资源采用不同计量单位，例如计算资源可能按时间，存储和数据传输通常按 GB。

11. Economies of Scale

★★★★

完整英文：

Economies of Scale

中文：

规模经济

假设 GlobalShop 自己买服务器：

购买：
500 台

AWS：

为大量客户共同建设基础设施
规模：
远大于单个企业

大规模采购：

服务器
网络
电力
带宽
数据中心设备

通常能够获得更低的单位成本。

这就是：

Scale ↑
单位成本可能 ↓

AWS 官方将“Benefit from massive economies of scale”列为云计算优势之一。

12. Agility

★★★★

Agility

中文：

敏捷性

这里不是 Scrum 的 Agile。

它强调：

企业能够更快获得资源、更快试验、更快上线新产品。

例如 GlobalShop 想测试一个：

AI商品推荐系统

传统模式：

先申请 GPU
采购服务器
网络配置
部署环境

一个月以后：
开始实验

AWS：

申请云资源
↓
当天开始实验

实验失败：

关闭资源

实验成功：

继续扩展

这就是 Cloud Agility。

13. Scalability

★★★★★

Scalability

中文：

可扩展性

意思是：

系统处理更大工作负载的能力。

例如：

10万请求 / 分钟
↓
100万请求 / 分钟

系统仍然能够通过增加资源继续工作。

13.1 Vertical Scaling

Vertical Scaling

中文：

纵向扩展 / 垂直扩展

也叫：

Scale Up

原来：

2 CPU
4 GB RAM

变成：

32 CPU
128 GB RAM

即：

把一台机器变强。

13.2 Horizontal Scaling

Horizontal Scaling

中文：

横向扩展 / 水平扩展

也叫：

Scale Out

原来：

EC2

增加：

EC2
EC2
EC2
EC2
EC2

即：

增加机器数量。

现代互联网应用特别常见 Horizontal Scaling。

14. Elasticity

★★★★★

Elasticity

中文：

弹性

它和 Scalability 不是完全一样。

Scalability：

能不能扩。

Elasticity：

能不能随着实际需求自动或快速扩大，再在需求下降时缩回来。

例如双十一：

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

这就是：

Scale Out
扩出去

+

Scale In
缩回来

题库中也明确区分 High Availability、Elasticity、Scalability 和 Agility。例如第 77 题将“出现故障仍尽量减少停机”归到 High Availability，而不是 Elasticity 或 Scalability。

15. High Availability

★★★★★

HA = High Availability

中文：

高可用性

解决：

一部分系统发生故障时，业务仍然尽可能保持可用。

例如：

          Load Balancer
          /           \
         /             \
      AZ-A             AZ-B
       │                │
     EC2              EC2

AZ-A 故障：

AZ-A
 X

流量
 ↓
AZ-B

High Availability 关注的是：

减少单点故障
减少停机时间
冗余
多可用区部署
16. Fault Tolerance

★★★★

Fault Tolerance

中文：

容错能力 / 故障容忍

它与 High Availability 很接近，但语义更强。

可以粗略理解：

High Availability
目标：
尽量保持服务可用，允许非常短的恢复过程

Fault Tolerance
目标：
组件发生故障时，系统仍然继续工作，尽量不感知中断

CLF-C02 不要求把二者做非常学术化的可用性数学区分，但需要知道两者都与：

redundancy
冗余

failure
故障

availability
可用性

有关。

17. Disaster Recovery

★★★★

DR = Disaster Recovery

中文：

灾难恢复 / 灾备

解决的不再只是一台服务器坏掉。

可能考虑：

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

GlobalShop：

Tokyo Region
主业务

       │
       │ 复制 / 备份
       ▼

Osaka Region
灾备

如果东京出现重大区域级问题，可以根据灾备方案在大阪恢复业务。

18. 从服务器到 AWS 服务

传统数据中心能力与 AWS 可以先建立这样的映射：

传统能力	AWS 中常见对应方向
服务器	Amazon EC2
Serverless 代码执行	AWS Lambda
容器平台	ECS / EKS / Fargate
本地硬盘 / 块设备	EBS
文件系统	EFS / FSx
对象文件仓库	S3
关系数据库	RDS / Aurora
NoSQL	DynamoDB
内存缓存	ElastiCache
私有网络	VPC
防火墙	Security Group / NACL / WAF 等
DNS	Route 53
CDN	CloudFront
负载均衡	Elastic Load Balancing
权限体系	IAM
监控	CloudWatch
操作审计	CloudTrail
配置审计	AWS Config
自动部署基础设施	CloudFormation
成本分析	Cost Explorer

这只是帮助建立直觉，并不是严格的一一等价关系。

19. Cloud 并不意味着“不需要服务器”

这是一个重要误解。

比如 Lambda 被称为：

Serverless

中文：

无服务器

不是：

AWS 真的没有服务器。

而是：

服务器的创建、维护、操作系统、扩缩容等大量基础设施工作由 AWS 承担，开发者不再直接管理这些服务器。

物理机器依然存在。

只是：

你管理的抽象层
变高了
20. Shared Responsibility 的萌芽

传统机房：

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

AWS：

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

这最终形成：

★★★★★ AWS Shared Responsibility Model

中文：

AWS 责任共担模型

后续安全章节详细展开。

题库中也大量直接考“什么是 AWS 的责任、什么是客户责任”，例如 DynamoDB 题目要求区分 AWS 管理的底层基础设施与客户自己管理的数据访问权限。

C1-02 小结

传统 IT 的核心问题是：

先采购
↓
再使用
↓
容量需要预测
↓
硬件需要自己维护
↓
扩大基础设施需要时间

Cloud 的核心变化是：

按需获得
↓
快速创建
↓
按实际需求扩缩
↓
更多基础设施工作交给云厂商
↓
从固定成本向可变成本转化

后续 AWS 几乎所有服务，都可以从这个变化中理解。

C1-03-GlobalShop全球电商业务模型.md
GlobalShop 全球电商业务模型
1. 为什么需要统一案例？

如果学习 AWS 时不断看到：

A公司
B公司
一家媒体公司
一家银行
一家医院
一家游戏公司

技术虽然很多，但很难形成系统。

因此整套教材采用统一的：

GlobalShop

作为主业务。

2. GlobalShop 是什么？

【教学示例】

GlobalShop 是一家虚构的全球电子商务企业。

可以把业务规模想象成：

Amazon
+
淘宝
+
京东

的某种简化教学模型。

不是在描述任何真实公司的技术架构。

3. 用户范围

GlobalShop 面向：

日本
韩国
新加坡
美国
加拿大
英国
法国
德国
...

的消费者。

主要团队位于东京。

4. 核心业务模块
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

这一套业务足够覆盖 CLF-C02 中绝大多数技术。

5. 流量模型

普通工作日：

日活：
1,000,000

同时在线：
50,000

Web请求：
相对稳定

双十一：

日活：
30,000,000

瞬时请求：
可能是平时几十倍

20:00抢购：
出现流量尖峰

因此 GlobalShop 必须解决：

★★★★★ Scalability

可扩展性

★★★★★ Elasticity

弹性

★★★★★ High Availability

高可用性

6. 用户第一次访问网站

用户输入：

www.globalshop.example

第一件事不是访问 EC2。

浏览器首先需要知道：

这个域名应该去哪里？

所以出现：

★★★★★ Amazon Route 53

负责：

DNS

完整英文：

Domain Name System

中文：

域名系统

以后会详细讲：

domain
域名

DNS record
DNS记录

routing
路由策略
7. 全球用户为什么不能全部直接访问东京？

假设所有原始商品图片都存储在东京。

美国用户每次看商品：

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

这会增加：

Latency

中文：

网络延迟

于是出现：

★★★★ Amazon CloudFront

它属于：

CDN = Content Delivery Network

中文：

内容分发网络

GlobalShop 可以把商品图片缓存到更靠近用户的网络节点。

8. 用户请求进入系统以后

简化：

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

这里已经出现四类完全不同的问题：

Route 53
→ 地址在哪里

CloudFront
→ 怎么让全球访问更快

WAF / Shield
→ 怎么保护入口

Load Balancer
→ 请求怎么分给多台服务器
9. Web 和业务计算

GlobalShop 的：

商品服务
订单服务
库存服务
后台系统

需要计算资源。

最经典：

★★★★★ Amazon EC2

EC2 = Elastic Compute Cloud

中文：

弹性计算云

可以运行：

Java
Node.js
Python
Go
.NET
...

应用。

10. 为什么不能只用一台 EC2？

如果：

Users
  │
  ▼
EC2

一旦这台 EC2：

Crash
宕机

整个网站：

X

因此：

Users
  │
  ▼
Load Balancer
  │
 ┌┼──────┐
 ▼▼      ▼
EC2 EC2 EC2

形成冗余。

11. 双十一怎么自动加服务器？

★★★★★ AWS Auto Scaling

平时：

EC2 × 20

高峰：

EC2 × 200

凌晨：

EC2 × 20

这就是后续理解：

Elasticity
Auto Scaling
Load Balancing

的统一业务场景。

12. 商品图片存哪里？

GlobalShop 有：

5亿张商品图片

如果全部塞进数据库：

问题很多。

商品图片适合：

★★★★★ Amazon S3

S3 = Simple Storage Service

中文：

简单存储服务

它属于：

Object Storage

中文：

对象存储

基本模型：

Bucket
桶
 │
 ├── object-a.jpg
 ├── object-b.mp4
 └── object-c.pdf
13. EC2 自己的系统盘怎么办？

运行服务器还需要类似磁盘的东西。

于是：

★★★★ Amazon EBS

EBS = Elastic Block Store

中文：

弹性块存储

典型关系：

EC2
 │
 ▼
EBS

后续会详细解释：

S3 = Object Storage
EBS = Block Storage
EFS = File Storage

为什么是三个完全不同的模型。

14. 订单存哪里？

订单数据通常有：

订单ID
用户ID
商品
价格
状态
支付状态
地址
创建时间

而且存在：

关系
事务
查询

因此传统关系数据库非常合适。

GlobalShop 可以使用：

★★★★★ Amazon RDS

RDS = Relational Database Service

中文：

关系型数据库服务

或者：

★★★★★ Amazon Aurora

AWS 的关系数据库产品。

15. 所有数据都应该放 RDS 吗？

不是。

GlobalShop 可能还有：

用户Session
购物车
高规模Key-Value访问

某些业务更适合：

★★★★★ Amazon DynamoDB

一种 AWS 托管的 NoSQL 数据库。

所以以后真正的问题不是：

RDS 是什么？

而是：

订单为什么适合RDS/Aurora？

什么数据适合DynamoDB？

为什么S3不能代替RDS？

为什么Redis/ElastiCache又不是数据库的简单替代？
16. 热门商品访问太多怎么办？

一个爆款商品：

iPhone

一分钟可能被查询数百万次。

如果每个请求都直接：

Application
    │
    ▼
Database

数据库压力很大。

可以增加：

★★★★ Amazon ElastiCache

内存缓存。

结构：

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
17. 下单为什么需要 Message Queue？

一个用户点击：

购买

背后可能发生：

创建订单
扣库存
发送邮件
更新积分
通知物流
数据分析
风控
推荐更新

如果所有步骤串行：

A
↓
B
↓
C
↓
D
↓
E

任何一步慢，都可能让用户一直等。

所以系统需要：

★★★★ Amazon SQS

SQS = Simple Queue Service

中文：

简单队列服务

实现：

订单创建成功
     │
     ▼
    SQS
 ┌───┼─────┬──────┐
 ▼   ▼     ▼      ▼
邮件 库存  物流   数据分析

后续会系统解释：

Queue
消息队列

Asynchronous
异步

Decoupling
解耦
18. 一条消息发给很多系统怎么办？

可以考虑：

★★★ Amazon SNS

SNS = Simple Notification Service

中文：

简单通知服务

典型：

订单事件
   │
   ▼
  SNS
 ┌─┼─────┐
 ▼ ▼     ▼
SQS Email SMS

这涉及：

Publish / Subscribe

简称：

Pub/Sub

中文：

发布 / 订阅模式

19. GlobalShop 怎么管理员工权限？

不可能让所有员工都拥有：

Administrator

权限。

于是：

★★★★★ AWS IAM

IAM = Identity and Access Management

中文：

身份与访问管理

例如：

开发人员
→ 可以查看开发环境

DBA
→ 管理数据库

财务人员
→ 查看账单

EC2
→ 只能读取指定S3 Bucket

题库甚至直接有：

EC2 应该通过 IAM Role 获取访问 S3 的权限，而不是把 Access Key 硬编码到程序里。

20. 数据怎么加密？

GlobalShop 存：

用户地址
订单
支付相关信息
商业数据

加密会涉及：

★★★★ AWS KMS

KMS = Key Management Service

中文：

密钥管理服务

核心不是：

KMS 存文件。

而是：

管理 Encryption Key —— 加密密钥。

21. 怎么知道系统快不快？

GlobalShop 运维人员想看：

CPU
请求量
错误率
Latency
资源指标
Logs

于是：

★★★★★ Amazon CloudWatch

Cloud + Watch：

可以直观理解成：

观察云中的系统。

22. 怎么知道谁改坏了 Security Group？

假设凌晨：

Security Group
从：

443 only

变成：

0.0.0.0/0
all ports

安全团队需要知道：

谁改的？

这时候不是 CloudWatch。

而是：

★★★★★ AWS CloudTrail

Trail：

足迹 / 轨迹

记录 AWS API 活动。

23. 怎么知道资源以前是什么配置？

如果想知道：

这个 Security Group
昨天是什么样？

今天是什么样？

是否满足公司规则？

则：

★★★★ AWS Config

Config 来自：

Configuration

中文：

配置

所以形成第一组极高频对比：

CloudWatch
→ 系统运行得怎么样？

CloudTrail
→ 谁做了什么AWS操作？

Config
→ AWS资源是什么配置、怎么变化？
24. GlobalShop 怎么处理全球故障？

主要业务在：

Tokyo Region

内部至少跨：

AZ-A
AZ-B

部署：

Load Balancer
   │
 ┌─┴────────┐
 ▼          ▼
AZ-A       AZ-B
EC2        EC2

这叫：

★★★★★ Multi-AZ

中文：

多可用区架构

用于高可用。

更进一步可能：

Tokyo Region
     │
     │ replication / backup
     ▼
Osaka Region

用于更大范围的：

★★★★ Disaster Recovery

灾难恢复。

25. 公司以前还有本地机房怎么办？

GlobalShop 不一定一夜之间全部迁 AWS。

旧系统可能仍在东京自己的：

On-Premises Data Center
本地数据中心

于是出现：

VPN
Direct Connect
Storage Gateway
DataSync
DMS
Application Migration Service
Snow Family

这就是：

Hybrid Cloud

中文：

混合云

以及：

Cloud Migration

中文：

云迁移

26. GlobalShop 怎么知道钱花在哪里？

双十一扩容之后：

本月AWS账单：
$1,000,000

财务部门马上会问：

钱花哪儿了？

对应：

★★★★ AWS Cost Explorer

成本分析工具

如果问：

本月超过 80 万美元就提醒我。

对应：

★★★★ AWS Budgets

预算管理

如果问：

双十一系统还没上线，先估算大概要多少钱。

对应：

★★★★ AWS Pricing Calculator

定价计算器

27. GlobalShop 一张总业务图
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

后面的所有章节，本质上都是在逐渐把这张图展开。

C1-03 小结

GlobalShop 的意义在于：

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
C1-04-AWS完整技术地图.md
AWS 完整技术地图
1. 不要按 AWS 产品名称理解 AWS

第一次看 AWS Console，最容易产生的感觉就是：

为什么有这么多产品？

更好的方法是先问：

一个现代软件系统到底需要解决哪些问题？

大致可以分为：

在哪里运行？
      ↓
Global Infrastructure


代码在哪里跑？
      ↓
Compute


数据放哪里？
      ↓
Storage


结构化数据怎么查询？
      ↓
Database


机器怎么连接？
      ↓
Networking


不同系统怎么协作？
      ↓
Application Integration


谁能访问什么？
      ↓
Identity


怎么保护系统？
      ↓
Security


系统运行得怎么样？
      ↓
Monitoring


整个公司怎么管理？
      ↓
Governance


基础设施怎么自动建立？
      ↓
Infrastructure as Code


大量数据怎么分析？
      ↓
Analytics


AI功能怎么实现？
      ↓
AI / ML


旧系统怎么搬过来？
      ↓
Migration


花多少钱？
      ↓
Cloud Financial Management
2. AWS 官方当前分类

AWS 当前 CLF-C02 In-Scope 服务页面按主要功能将服务分成 Analytics、Application Integration、Business Applications、Cloud Financial Management、Compute、Containers、Database、Developer Tools、Machine Learning、Management and Governance、Migration and Transfer、Networking and Content Delivery、Security/Identity/Compliance、Serverless、Storage 等类别。

我们的教材会参考这个分类，但为了教学，会对一些强相关类别重新组合。

3. ★★★★★ Global Infrastructure：全球基础设施

解决：

AWS 的资源到底部署在哪里？

核心：

AWS Global Infrastructure
│
├── Region
│
│   ├── Availability Zone
│   ├── Availability Zone
│   └── Availability Zone
│
├── Edge Network
│
├── Local Zones
│
└── Outposts / 其他扩展形态

当前 AWS 官方全球基础设施页面显示 AWS 已覆盖 39 个 Geographic Regions 和 124 个 Availability Zones；这一数字会继续变化，因此后续如果需要具体数字，应以官方实时页面为准。

其中：

Region

区域

独立地理区域。

例如：

Asia Pacific (Tokyo)
ap-northeast-1

Asia Pacific (Osaka)
ap-northeast-3

当前东京 Region 有 4 个 AZ，大阪 Region 有 3 个 AZ。

Availability Zone

可用区

一个 Region 内的隔离位置；每个 AZ 由一个或多个独立数据中心构成，并拥有冗余电力、网络和连接。

题库第 150 题也直接考：

one or more data centers

对应：

Availability Zone。

4. ★★★★★ Compute：计算

解决：

代码在哪里运行？

主线：

Compute
│
├── Virtual Machine
│   └── EC2
│
├── Serverless Function
│   └── Lambda
│
├── Container
│   ├── ECS
│   ├── EKS
│   └── Fargate
│
├── Managed Application Platform
│   └── Elastic Beanstalk
│
├── Simple VPS
│   └── Lightsail
│
└── Batch
    └── AWS Batch

当前 CLF-C02 官方 In-Scope 明确包括 EC2、Elastic Beanstalk、Lightsail、AWS Batch、Outposts、ECS、EKS、ECR，以及 Serverless 类别中的 Fargate 和 Lambda。

最重要的决策关系：

完整虚拟服务器控制
→ EC2

事件驱动短时函数
→ Lambda

AWS原生容器编排
→ ECS

Kubernetes
→ EKS

容器但不想管理底层服务器
→ Fargate
5. ★★★★★ Storage：存储

解决：

数据以什么形态保存？

核心不是“哪个存储更高级”，而是存储模型不同。

Storage
│
├── Object Storage
│   └── S3
│
├── Block Storage
│   └── EBS
│
├── File Storage
│   ├── EFS
│   └── FSx
│
├── Archive
│   └── S3 Glacier
│
├── Backup
│   └── AWS Backup
│
└── Hybrid Storage
    └── Storage Gateway

当前官方 In-Scope 就明确包括 Backup、EBS、EFS、Elastic Disaster Recovery、FSx、S3、S3 Glacier、Storage Gateway。

第一张必须牢记的图：

S3
Object
对象


EBS
Block
块


EFS / FSx
File
文件

题库直接把“将 S3 描述成 Block Storage”设置为错误选项，而把 S3 描述为 Object Storage。

6. ★★★★★ Database：数据库

解决：

应用数据如何保存、查询和建立关系？

Database
│
├── Relational
│   ├── RDS
│   └── Aurora
│
├── Key-Value / NoSQL
│   └── DynamoDB
│
├── Document
│   └── DocumentDB
│
├── Graph
│   └── Neptune
│
└── Cache
    └── ElastiCache

当前 CLF-C02 官方数据库范围包括 Aurora、DocumentDB、DynamoDB、ElastiCache、Neptune、RDS。

这里后续尤其要理解：

RDS
不是“S3加强版”

DynamoDB
不是“便宜版RDS”

ElastiCache
不是“另一种普通数据库”

它们处理的是不同数据访问模型。

7. ★★★★★ Networking and Content Delivery：网络与内容分发

解决：

资源之间怎么通信？
用户怎么访问系统？
本地机房怎么访问AWS？
私网怎么访问外部？
全球用户怎么加速？

核心地图：

Networking
│
├── VPC
│   ├── Subnet
│   ├── Route Table
│   ├── Security Group
│   ├── NACL
│   ├── Internet Gateway
│   ├── NAT Gateway
│   └── VPC Endpoint
│
├── VPC-to-VPC
│   ├── Peering
│   └── Transit Gateway
│
├── On-Prem ↔ AWS
│   ├── VPN
│   └── Direct Connect
│
├── DNS
│   └── Route 53
│
├── CDN
│   └── CloudFront
│
├── Network Acceleration
│   └── Global Accelerator
│
├── Private Service Connectivity
│   └── PrivateLink
│
└── API Entry
    └── API Gateway

当前官方 In-Scope 明确包括 API Gateway、CloudFront、Direct Connect、Global Accelerator、PrivateLink、Route 53、Transit Gateway、VPC 和多种 VPN。

8. ★★★★★ Identity：身份和权限

核心问题：

谁可以做什么？

IAM
│
├── User
├── Group
├── Role
└── Policy

同时还有：

IAM Identity Center
→ 企业员工 / 多Account统一访问

Cognito
→ 应用最终用户身份

STS
→ Temporary Credentials

后续会建立：

人访问 AWS
和
程序访问 AWS
和
消费者登录你的App

三个完全不同的身份场景。

9. ★★★★★ Security：安全

可以拆为：

Security
│
├── Identity
│   └── IAM
│
├── Encryption
│   ├── KMS
│   ├── CloudHSM
│   └── Secrets Manager
│
├── Web / DDoS
│   ├── WAF
│   └── Shield
│
├── Threat Detection
│   └── GuardDuty
│
├── Vulnerability
│   └── Inspector
│
├── Sensitive Data
│   └── Macie
│
├── Investigation
│   └── Detective
│
├── Security Findings
│   └── Security Hub
│
└── Compliance
    ├── Artifact
    └── Audit Manager

当前官方范围明确包含这一整组核心安全服务。

题库中 Inspector、GuardDuty、Config、Trusted Advisor 经常被放在一起作为干扰选项，这正说明“只知道都是安全/检查工具”不够。题库第 2 题就是典型例子。

10. ★★★★★ Monitoring / Management / Governance

这组非常容易混。

CloudWatch
→ Runtime monitoring
→ 系统运行状态


CloudTrail
→ API activity
→ 谁操作AWS


Config
→ Resource configuration
→ 资源配置和变化


Trusted Advisor
→ Best-practice checks
→ AWS最佳实践建议


Compute Optimizer
→ Resource sizing recommendation
→ 计算资源规格优化


Systems Manager
→ Operations management
→ 集中运维AWS和服务器

再往企业层：

Organizations
→ 多Account组织

Control Tower
→ 多Account治理环境

Service Catalog
→ 企业批准的资源/模板目录

CloudFormation
→ Infrastructure as Code

当前 In-Scope 管理与治理类别包含以上核心服务。

11. ★★★★ Application Integration：应用集成
Application Integration
│
├── Queue
│   └── SQS
│
├── Pub/Sub Notification
│   └── SNS
│
├── Event Bus
│   └── EventBridge
│
└── Workflow
    └── Step Functions

当前官方范围也正好包括这四项。

GlobalShop：

用户下单
   │
   ▼
Order Service
   │
   ▼
  Event
   │
   ├── 库存
   ├── 通知
   ├── 物流
   └── 数据分析
12. ★★★★ Analytics：数据分析
Analytics
│
├── SQL over S3
│   └── Athena
│
├── ETL / Catalog
│   └── Glue
│
├── Streaming
│   └── Kinesis
│
├── Big Data
│   └── EMR
│
├── Search / Log Analytics
│   └── OpenSearch
│
├── Data Warehouse
│   └── Redshift
│
└── BI
    └── QuickSight

这些服务都在当前 CLF-C02 Analytics In-Scope 列表中。

GlobalShop 可以形成：

用户点击
   │
   ▼
Kinesis
   │
   ▼
  S3
   │
   ▼
 Glue
   │
 ┌─┴─────────┐
 ▼           ▼
Athena    Redshift
              │
              ▼
          QuickSight
13. ★★★ AI / ML

当前 CLF-C02 官方范围包括：

Comprehend
Kendra
Lex
Polly
Amazon Q
Rekognition
SageMaker AI
Textract
Transcribe
Translate

它们不是一种功能。

简单先分类：

Image
→ Rekognition

Speech → Text
→ Transcribe

Text → Speech
→ Polly

Document extraction
→ Textract

Language understanding
→ Comprehend

Chatbot
→ Lex

Translation
→ Translate

ML platform
→ SageMaker AI

后面逐个讲输入、处理、输出和业务场景。

14. ★★★★ Migration and Transfer：迁移与传输
Migration
│
├── Discover
│   └── Application Discovery Service
│
├── Evaluate
│   └── Migration Evaluator
│
├── Server Migration
│   └── Application Migration Service
│
├── Database Migration
│   ├── DMS
│   └── SCT
│
├── Migration Tracking
│   └── Migration Hub
│
└── Offline Data Transfer
    └── Snow Family

这些服务均出现在当前 CLF-C02 Migration and Transfer 范围中。

题库也直接考：

Application Discovery
vs
Application Migration
vs
DMS
vs
DataSync

15. ★★★★★ Cloud Financial Management：云财务管理
Before deployment
部署前
→ Pricing Calculator


After deployment
部署后
→ Cost Explorer


Threshold
预算阈值
→ Budgets


Detailed billing data
详细成本数据
→ Cost and Usage Reports

以及计算资源购买方式：

On-Demand
Reserved
Savings Plans
Spot
Dedicated

这是题库极高频模块。

16. ★★★★★ Architecture Frameworks：架构框架

两个最重要：

AWS CAF

AWS Cloud Adoption Framework

中文：

AWS 云采用框架

回答：

公司作为一个组织应该怎么采用 Cloud？

当前 AWS CAF 将能力划为六个 Perspective：

Business
业务

People
人员

Governance
治理

Platform
平台

Security
安全

Operations
运营

AWS Well-Architected Framework

中文可以理解为：

AWS 良好架构框架

回答：

一个 Cloud workload 应该怎样设计和运行得更好？

当前六大 Pillars：

Operational Excellence
卓越运营

Security
安全性

Reliability
可靠性

Performance Efficiency
性能效率

Cost Optimization
成本优化

Sustainability
可持续性

题库中也有大量 Pillar 题，例如第 647 题直接询问“持续改善流程以交付业务价值”对应哪个 Pillar。

17. AWS 完整鸟瞰图
                    ┌──────────────────────────┐
                    │ AWS Global Infrastructure│
                    │ Region / AZ / Edge       │
                    └────────────┬─────────────┘
                                 │
           ┌─────────────────────┼─────────────────────┐
           │                     │                     │
           ▼                     ▼                     ▼
        Compute               Storage              Database
      EC2/Lambda            S3/EBS/EFS          RDS/DynamoDB
      ECS/EKS               FSx/Backup          Aurora/Cache
           │                     │                     │
           └─────────────────────┼─────────────────────┘
                                 │
                                 ▼
                             Networking
                          VPC / Route53
                       CloudFront / Gateway
                                 │
                                 ▼
                        Application Integration
                        SQS/SNS/EventBridge
                                 │
         ┌───────────────────────┼──────────────────────┐
         ▼                       ▼                      ▼
      Security               Monitoring             Analytics
    IAM/KMS/WAF          CloudWatch/Trail      Athena/Glue/EMR
   GuardDuty/etc             Config                Redshift
         │                       │                      │
         └───────────────────────┼──────────────────────┘
                                 ▼
                      Management & Governance
                 Organizations / Control Tower
                       CloudFormation
                                 │
                   ┌─────────────┴─────────────┐
                   ▼                           ▼
                Migration                   Cost
             DMS/MGN/Snow             Budgets/Explorer

这张图就是后续几十篇文档的主地图。

C1-04 小结

AWS 的服务数量很多，但从根本上还是在解决有限的几类问题：

在哪里
怎么运行
怎么存
怎么查
怎么连
怎么协作
怎么授权
怎么保护
怎么看
怎么管理
怎么分析
怎么迁移
怎么控制成本

真正学习 AWS，应先识别问题类别，再学习产品。

C1-05-AWS服务分类与命名规则.md
AWS 服务分类与命名规则
1. 为什么 AWS 名字看起来这么乱？

AWS 产品名主要有三种形式：

Amazon + 产品名

AWS + 产品名

单独品牌词

例如：

Amazon EC2
Amazon S3
Amazon RDS
Amazon DynamoDB

AWS Lambda
AWS CloudFormation
AWS CloudTrail
AWS Config

Amazon Aurora
Amazon Athena
Amazon Redshift

这些名称不能简单认为：

带 Amazon 就是一类，带 AWS 就是另一类。

对于备考来说，最重要的是理解服务本身。

2. 缩写型服务

一部分服务名由完整英文缩写而来。

★★★★★ EC2

Amazon Elastic Compute Cloud

Elastic
弹性的

Compute
计算

Cloud
云

为什么是 2？

因为：

Compute
Cloud

两个单词都以 C 开头：

EC²
→ EC2
★★★★★ S3

Amazon Simple Storage Service

三个 S：

Simple
Storage
Service

S × 3
→ S3
★★★★★ RDS

Amazon Relational Database Service

Relational
关系型

Database
数据库

Service
服务
★★★★ EBS

Amazon Elastic Block Store

Elastic
弹性

Block
块

Store
存储

Block Storage：

块存储

★★★ EFS

Amazon Elastic File System

Elastic
弹性

File System
文件系统
★★★★★ VPC

Amazon Virtual Private Cloud

Virtual
虚拟

Private
私有

Cloud
云

中文通常称：

虚拟私有云

实际上学习时可以理解：

你在 AWS 中划出的逻辑隔离网络环境。

★★★★★ IAM

AWS Identity and Access Management

Identity
身份

Access
访问

Management
管理

中文：

身份与访问管理

★★★★ KMS

AWS Key Management Service

这里：

Key

是：

Encryption Key，加密密钥

不是：

Primary Key
数据库主键
★★★★ SQS

Amazon Simple Queue Service

Queue
队列

中文：

简单队列服务

★★★ SNS

Amazon Simple Notification Service

Notification
通知

中文：

简单通知服务

★★★ ECS

Amazon Elastic Container Service

中文：

弹性容器服务

★★★ EKS

Amazon Elastic Kubernetes Service

Kubernetes：

容器编排平台。

★★★ ECR

Amazon Elastic Container Registry

Registry：

镜像注册表 / 镜像仓库

保存 Container Image。

★★★ DMS

AWS Database Migration Service

中文：

数据库迁移服务

★★ SCT

AWS Schema Conversion Tool

Schema
数据库模式

Conversion
转换

数据库引擎迁移时帮助转换 Schema。

★★★ ACM

AWS Certificate Manager

Certificate：

数字证书

主要与 HTTPS / TLS 证书相关。

★★★ RAM

AWS Resource Access Manager

注意：

这里的 RAM 不是：

Random Access Memory
随机存取存储器

而是：

Resource Access Manager
资源访问管理器

所以必须结合 AWS 名称判断。

3. 名称中经常出现的 Elastic

★★★★★

Elastic：

弹性的

AWS 中到处出现：

Elastic Compute Cloud
Elastic Block Store
Elastic File System
Elastic Load Balancing
Elastic Container Service
Elastic Kubernetes Service

它背后的 Cloud 思想是：

资源能够根据需求扩展、缩减或灵活配置。

但不能机械认为：

名字里有 Elastic = 一定自动扩容。

例如：

EBS

名字里有 Elastic，但不代表任何 EBS Volume 自动随着 CPU 扩大。

4. Simple

例如：

Simple Storage Service
S3

Simple Queue Service
SQS

Simple Notification Service
SNS

Simple Email Service
SES

这里 Simple 更多是产品命名传统。

不能据此推导：

功能简单，所以不适合企业。

S3、SQS 都是非常核心的云基础服务。

5. Managed

★★★★

Managed Service

中文：

托管服务

这是 AWS 最重要的词之一。

传统：

自己安装MySQL
↓
自己管理服务器
自己Patch
自己备份
自己处理硬件

Managed Database：

使用RDS

底层大量数据库基础设施工作
由AWS承担

注意：

Managed 不等于“客户什么都不用负责”。

权限、数据、数据库设计等责任仍可能属于客户。

6. Fully Managed

Fully Managed

中文：

完全托管

通常强调：

AWS 进一步承担底层基础设施运维。

但是依然不能理解为：

客户没有任何责任。

例如：

DynamoDB
Fully Managed

客户仍然要管理：

谁能访问 Table
应用如何使用数据
权限策略

题库第 5 题就直接考客户对 DynamoDB Table Access 的责任。

7. Serverless

★★★★★

Serverless

中文：

无服务器

含义：

用户不直接配置和管理底层服务器。

不是：

没有服务器。

典型：

Lambda

DynamoDB

Athena

都具有 Serverless 特征。

当前 CLF-C02 官方甚至单独将 Fargate 与 Lambda 放在 Serverless 类别中。

8. Instance

★★★★★

Instance

中文：

实例

AWS 中经常说：

EC2 Instance
RDS DB Instance

Instance 可以理解为：

某个服务实际创建出来并运行的一个具体资源实例。

例如：

EC2
服务

↓

i-012345...
EC2 Instance
具体的一台云服务器实例
9. Resource

★★★★★

Resource

中文：

资源

AWS 中的：

EC2 Instance
S3 Bucket
RDS Database
VPC
Security Group
Lambda Function

都可以被笼统称为：

AWS Resources

10. Workload

★★★★★

Workload

中文常译：

工作负载

这个中文很容易让初学者觉得抽象。

它其实可以理解为：

为实现某个业务目的而运行的一组应用、服务、数据和基础设施。

例如：

GlobalShop Order System

整个订单系统可以被称为：

Order workload

AWS Well-Architected 经常使用这个词。

11. Gateway

★★★★★

Gateway

中文：

网关

最原始的概念：

两个不同网络、系统或边界之间的“入口/出口/中转点”。

所以 AWS 有大量 Gateway：

Internet Gateway
NAT Gateway
Transit Gateway
Storage Gateway
API Gateway
Virtual Private Gateway

它们共同只有一个抽象：

都在某种边界之间提供连接/转发能力。

但业务完全不同：

Internet Gateway
VPC ↔ Internet


NAT Gateway
Private Subnet → Internet


Transit Gateway
多VPC / On-Prem 中央网络Hub


Storage Gateway
On-Prem Storage ↔ AWS Storage


API Gateway
Client ↔ Backend API

后续网络章节会完全拆解。

12. Endpoint

★★★★

Endpoint

中文：

端点

可以理解：

网络通信所要连接的一个目标入口。

比如：

API Endpoint
API访问地址

VPC Endpoint
VPC中的私有访问入口

考试中：

VPC Endpoint

尤其重要。

13. Region

★★★★★

Region

中文：

区域

AWS 中是一个独立地理区域。

例如：

Asia Pacific (Tokyo)
ap-northeast-1
14. Availability Zone

★★★★★

简称：

AZ

中文：

可用区

AWS 官方定义一个 AZ 可以由一个或多个独立数据中心组成。

所以：

Tokyo
不是AZ

Tokyo
是Region

Region 内部才有多个 AZ。

15. Zone

Zone

中文：

区域 / 分区

AWS 中不同的 Zone 不一定代表同一种东西：

Availability Zone
Local Zone
Wavelength Zone

所以看到 Zone 不能直接翻译完就结束，需要看前面的限定词。

16. Cluster

★★★

Cluster

中文：

集群

多个计算节点、数据库节点或其他资源组合成一个逻辑整体。

例如：

EKS Cluster

不能把 Cluster 简单理解成“一台服务器”。

17. Bucket

★★★★★

S3 中：

Bucket

中文常译：

桶 / 存储桶

可以理解为 S3 Object 的顶层容器。

Bucket
│
├── image1.jpg
├── video1.mp4
└── logs/...
18. Object

★★★★★

Object

中文：

对象

S3 中的数据基本单位。

一个 Object 大致包含：

Data
实际数据

Metadata
元数据

Key
对象标识

所以 S3 叫：

Object Storage

对象存储。

19. Volume

★★★★

Volume

中文：

卷

EBS 中：

EBS Volume

可以先理解成：

一块逻辑云磁盘。

20. Snapshot

★★★★

Snapshot

中文：

快照

用于记录某个时间点的数据状态。

最经典：

EBS Volume
   │
   ▼
EBS Snapshot

用于备份和恢复。

21. Policy

★★★★★

Policy

中文：

策略

AWS IAM 中 Policy 用于表达：

谁
是否允许
执行什么Action
访问什么Resource
满足什么Condition

不是公司员工手册意义上的普通 Policy。

22. Role

★★★★★

Role

中文：

角色

IAM Role 不是：

“职位名称”。

而是：

一个可以被人、AWS Service 或其他身份临时承担的权限身份。

这是以后 IAM 最核心的概念之一。

23. Principal

★★★

Principal

中文：

主体

在 AWS Security 中表示：

谁在发起请求。

可能是：

IAM User
IAM Role
AWS Service
Federated User
24. Authentication 与 Authorization

★★★★★

极容易混。

Authentication

中文：

身份认证

回答：

你是谁？

例如：

Password
MFA
Authorization

中文：

授权

回答：

你允许做什么？

例如：

User Alice
已登录

但：
能不能删除S3？

这是 Authorization。

25. Encryption

★★★★

Encryption

中文：

加密

两个高频短语：

Encryption at Rest

静态数据加密 / 静态加密

数据存着的时候加密。

Encryption in Transit

传输中加密

数据在网络传输的时候加密。

26. Latency

★★★★

Latency

中文：

延迟

通常表示一次通信/请求需要多久。

例如：

Japan User
→ Tokyo

通常比：

Japan User
→ Virginia

有更低的网络传播延迟。

27. Throughput

★★★

Throughput

中文：

吞吐量

不是“一个请求有多快”。

而更接近：

单位时间可以处理/传输多少数据。

例如：

GB/s
requests/second
28. Availability、Reliability、Durability

★★★★★

三者不要混。

Availability

可用性

系统现在能不能正常提供服务。

Reliability

可靠性

系统能够持续按预期正确工作的能力。

Durability

持久性 / 数据耐久性

更多关心：

数据会不会丢。

S3 中经常出现 Durability。

29. Scalability 与 Elasticity

再次统一：

Scalability
可扩展性
→ 能不能承受更大规模


Elasticity
弹性
→ 能不能随需求动态扩大和缩小
30. API

★★★★★

API = Application Programming Interface

中文：

应用程序编程接口

AWS 的所有资源并不是只有 Console 能操作。

实际上可以：

Management Console
CLI
SDK
API

来调用 AWS 能力。

31. CLI

★★★

CLI = Command Line Interface

中文：

命令行界面

AWS CLI：

AWS Command Line Interface

通过命令操作 AWS。

32. SDK

★★★

SDK = Software Development Kit

中文：

软件开发工具包

例如：

AWS SDK for JavaScript
AWS SDK for Java
AWS SDK for Python

允许程序调用 AWS API。

33. IaC

★★★★

IaC = Infrastructure as Code

中文：

基础设施即代码

核心思想：

基础设施
不要只靠人手点Console

↓

写成代码 / Template

AWS 代表：

CloudFormation

C1-05 小结

AWS 名字表面很多，真正需要熟悉的是一套反复出现的语言：

Elastic
Managed
Serverless
Instance
Resource
Workload
Gateway
Endpoint
Region
Zone
Cluster
Bucket
Object
Volume
Snapshot
Policy
Role
Authentication
Authorization
Encryption
Latency
Scalability
Elasticity
API
CLI
SDK
IaC

一旦这些基础词真正理解，后续服务名会容易很多。

C1-06-CLF-C02考试与719题知识地图.md
CLF-C02 考试与 719 题知识地图
1. CLF-C02 是什么？

正式名称：

AWS Certified Cloud Practitioner

考试代码：

CLF-C02

级别：

Foundational

中文可以理解为：

AWS Certified Cloud Practitioner / AWS 云从业者基础认证

AWS 官方将它定位为验证对 AWS Cloud、AWS 服务和云术语的基础、高层次理解，而不是某个具体职位的深度技术认证。

2. 当前考试形式

截至当前 AWS 官方考试页面：

考试时间：
90 分钟

题目数量：
65 题

题型：
Multiple Choice
单项选择

Multiple Response
多项选择

级别：
Foundational

最低通过分数为：

700

AWS 使用 scaled scoring（缩放评分），不是简单理解成：

“65 题答对 70% 就一定通过。”

3. 官方四大考试领域

★★★★★

当前 CLF-C02：

Domain	中文	权重
Domain 1: Cloud Concepts	云概念	24%
Domain 2: Security and Compliance	安全性与合规性	30%
Domain 3: Cloud Technology and Services	云技术与服务	34%
Domain 4: Billing, Pricing, and Support	账单、定价与支持	12%

4. 为什么我们的教材不按照这四章直接学习？

因为这四项是：

考试分类

而不是最佳学习顺序。

例如：

Availability Zone

会与：

EC2
RDS Multi-AZ
High Availability
Disaster Recovery

产生大量关系。

如果严格按照官方 Domain 切开：

Cloud Concepts学一点HA

几百页以后
Technology再学EC2

再后面
Database学RDS Multi-AZ

知识会碎掉。

因此我们的教材采用：

第一阶段：
按技术体系学习

第二阶段：
按业务架构组合

第三阶段：
再映射回考试Domain
5. Domain 1：Cloud Concepts

★★★★★

权重：

24%

当前官方 Task Statements 包括：

1. AWS Cloud 的优势

2. AWS Cloud 的设计原则

3. 迁移到 AWS 的优势与策略

4. Cloud Economics
   云经济

典型知识：

Pay-as-you-go
CAPEX / OPEX
Agility
Elasticity
Scalability
High Availability
Economies of Scale
Migration Benefits
AWS CAF
Well-Architected
6. Domain 2：Security and Compliance

★★★★★

权重：

30%

意味着：

安全相关知识不是边角料，而是整场考试最大的知识领域之一。

对应我们的教材：

IAM

MFA

Role
Policy

Shared Responsibility

KMS
CloudHSM
Secrets Manager

WAF
Shield

GuardDuty
Inspector
Macie
Detective
Security Hub

Artifact

Compliance

所以 IAM 和 Shared Responsibility 必须达到：

★★★★★

7. Domain 3：Cloud Technology and Services

★★★★★

权重：

34%

这是最大领域。

官方当前 Domain 3 明确要求识别：

AWS global infrastructure
AWS compute services
AWS database services
AWS network services
AWS storage services

以及部署和运营 AWS 的方式。

也就是说：

EC2
S3
RDS
VPC
Route53
CloudFront
Lambda
DynamoDB
...

基本都集中在这里。

8. Domain 4：Billing, Pricing, and Support

★★★★

权重：

12%

虽然权重比安全和技术低，但是这部分特点是：

大量题属于定义明确、容易拿分的知识。

主要：

Pricing Models

On-Demand
Reserved
Spot
Savings Plans

Pricing Calculator

Cost Explorer

Budgets

Cost and Usage Reports

Organizations
Consolidated Billing

Support
9. 当前官方 Technologies and Concepts

AWS 官方现在单独列出可能出现在考试中的技术与概念，包括：

APIs

迁移到AWS的优势

AWS CAF

AWS Compliance

Compute

Cost Management

Databases

EC2 purchasing / instance models

AWS Global Infrastructure

IaC

Machine Learning

Management and Governance

Migration and Data Transfer

Network Services

Pricing Calculator

SDK

Security

Shared Responsibility

Storage

Support

Well-Architected Framework

这说明：

CLF-C02 并不是单纯“背 AWS 产品名称”。

很多问题考的是：

架构概念
云经济
责任边界
服务选择
10. 719 道题库的性质

你的题库明确包含：

719 questions

并且题目从非常具体的服务题：

Snowball Edge

开始。

接下来立即进入：

Inspector
Trusted Advisor
Config
GuardDuty

的安全服务对比。

第三题又进入：

Storage Gateway
S3
EBS
WorkSpaces

混合存储。

第四题再进入：

EC2
IAM
S3
Role
Least Privilege

这说明：

题库本身几乎没有适合学习的渐进顺序。

所以不能从 Q1 顺序学习到 Q719。

11. 719 题应该怎样重新整理？

重新映射成：

719 Question Bank
       │
       ├── Cloud Concepts
       │
       ├── Infrastructure
       │
       ├── Compute
       │
       ├── Storage
       │
       ├── Database
       │
       ├── Networking
       │
       ├── Security
       │
       ├── Monitoring
       │
       ├── Governance
       │
       ├── Integration
       │
       ├── Analytics / AI
       │
       ├── Migration
       │
       ├── Cost
       │
       └── Frameworks

然后再统计：

题干涉及什么
正确答案是什么
错误选项是什么
哪些服务经常一起出现
哪些业务条件反复出现
12. 题库最有价值的不是“答案”

题库真正有价值的四个维度：

第一：发现高频知识

例如 EC2、S3、IAM 等大量重复出现。

第二：发现相似服务

例如：

CloudWatch
CloudTrail
Config
Trusted Advisor

经常一起作为选项。

第三：发现考试语言

例如：

most operationally efficient

most cost-effective

least operational overhead

highly available

scalable

without accessing the internet

fully managed

least privilege

这些条件经常决定答案。

第四：发现旧知识

题库中出现了一些当前 CLF-C02 已明确 Out-of-Scope 的服务。

例如当前官方 Out-of-Scope 明确包括：

AWS Wavelength
AWS CodeDeploy
Amazon WorkDocs
AWS IoT Device Defender
Amazon Personalize

所以题库还是有“历史信息价值”，但备考优先级要调整。

13. 当前范围服务与题库服务如何处理？

统一采用：

CURRENT-IN-SCOPE
当前明确考试范围

↓

重点学习
QUESTION-BANK + CURRENT-OUT-OF-SCOPE
题库出现，但当前范围外

↓

知道它是什么
知道为什么会成为老题答案或干扰项
不投入与核心服务相同的学习时间
QUESTION-BANK + UPDATED
题库规则已经变化

↓

同时记录：
旧规则
当前规则
14. Question Bank Answer 不等于 Official Answer

这是后面 Module 3 的基本原则。

例如某些题会出现：

Correct Answer

以及：

Community vote distribution

两者可能不是完全一致。

第一题就是明显案例：

题库：
Correct Answer = C

Community:
C = 84%
A = 16%

而评论里又有人基于不同理解支持 A。

所以后续解析不会采用：

题库写C
↓
想办法证明C一定对

而是：

读题
↓
拆业务需求
↓
检查AWS当前定义
↓
逐项分析
↓
得出判断
↓
最后与题库答案比较
15. 高频“技术服务题”与“概念题”

CLF-C02 可以先理解成两类大题。

A. 服务选择题

例如：

A company wants to monitor EC2 CPU utilization.

你要识别：

monitor
CPU
metric

→ CloudWatch。

B. 云概念题

例如：

系统可以承受故障并减少 downtime，体现了哪一个 Cloud Benefit？

题库第 77 题：

Agility
Elasticity
Scalability
High Availability

正确方向是：

High Availability。

这类题不是 AWS Product Name。

所以模块 1 既需要服务，也需要概念。

16. 服务之间的“混淆网络”

后续 Module 4 会重点建立这种图。

例如安全：

              Security
                  │
     ┌────────────┼────────────┐
     ▼            ▼            ▼
 GuardDuty    Inspector      Macie
 Threat       Vulnerability  Sensitive Data
     │            │            │
     └────────────┼────────────┘
                  ▼
            Security Hub

             Investigation
                  │
                  ▼
              Detective

监控：

CloudWatch
运行状态

CloudTrail
API操作

Config
资源配置

网络：

Internet Gateway
NAT Gateway
Transit Gateway
Storage Gateway
API Gateway

存储：

S3
EBS
EFS
FSx

这比孤立背产品定义更重要。

17. 从官方 Domain 映射到教材章节
官方 CLF-C02 Domain	本教材主要对应内容
Cloud Concepts	C1、云概念、Framework、Migration、Cloud Economics
Security and Compliance	IAM、安全、Shared Responsibility、Compliance
Cloud Technology and Services	Compute、Storage、Database、Network、Monitoring、Analytics
Billing, Pricing, Support	Cost、Pricing、Purchasing Models、Support

但一个知识点可能同时服务多个 Domain。

例如：

AWS Organizations

既涉及：

Governance

也可能出现在：

Billing
Consolidated Billing

所以不会强行给服务贴唯一考试标签。

18. 后续学习路线

完整路线：

C1 总述
│
│  建立全局地图
▼

C2 / Module 1
AWS完整知识体系
│
│  一个一个技术学懂
▼

Module 2
GlobalShop架构
│
│  学习服务如何组合
▼

Module 3
719道题
│
│  将知识用于题目
▼

Module 4
统计与强化
│
│  找出高频和弱点
▼

总结
│
▼
考前压缩知识地图
19. 第一阶段不应该做什么？

在刚开始学习的时候，不建议：

看到：
VPC Endpoint

马上背：
private access to S3

应该先理解：

VPC是什么
为什么有Private Subnet
什么叫Internet
什么叫AWS Service Endpoint
为什么不希望经过公网

然后：

VPC Endpoint

自然成为答案。

20. 最终目标：从关键词背题升级到架构判断

初级状态：

看到：
CPU
↓
CloudWatch

这对考试有帮助，但不够。

完整状态：

题目说：
EC2实例CPU Utilization

↓
这是运行时性能指标
↓
需要Monitoring
↓
CloudWatch负责Metrics
↓
所以CloudWatch

再比如：

题目说：
谁修改了Security Group？

↓
不是性能指标
↓
是AWS API activity
↓
需要audit trail
↓
CloudTrail

这才是稳定的知识。

C1-06 小结

CLF-C02 的官方结构是：

Cloud Concepts                  24%
Security and Compliance         30%
Cloud Technology and Services   34%
Billing, Pricing and Support    12%

但这 719 道题的原始排列并不适合作为学习顺序。

因此整套资料采用：

AWS官方知识体系
       +
719题真实考点
       +
GlobalShop业务架构
       │
       ▼
重新组织

最终形成：

Concept
概念

↓

Service
服务

↓

Architecture
架构

↓

Scenario
场景

↓

Question
题目

↓

Frequency
频率强化
C1 总结

第一章并不要求记住所有 AWS 服务。

它只需要先建立六个认识。

认识一：AWS 不是“网上租服务器”

AWS 是：

Compute
Storage
Database
Networking
Security
Management
Analytics
AI
Migration
Cost
...

组成的完整云平台。

认识二：AWS 的产品是为了解决真实 IT 问题
服务器
→ EC2

海量Object
→ S3

关系数据库
→ RDS / Aurora

私有网络
→ VPC

全球内容
→ CloudFront

权限
→ IAM

监控
→ CloudWatch

操作审计
→ CloudTrail

成本
→ Cost Explorer / Budgets
认识三：同一个业务会同时使用大量 AWS 服务

GlobalShop 不是：

“用EC2”

而是：

Route53
↓
CloudFront
↓
WAF
↓
Load Balancer
↓
EC2 / Lambda / Container
↓
Cache / Database / Storage
↓
Messaging
↓
Analytics

同时由：

IAM
KMS
CloudWatch
CloudTrail
Config
Organizations
Budgets

横向支撑。

认识四：考试真正考的是选择

最核心的学习方式是：

业务需求
↓
技术类型
↓
候选AWS服务
↓
排除不匹配服务
↓
选择最符合条件的方案

而不是：

AWS名字
↓
背一句定义
认识五：719 题不是 AWS 官方教材

题库用于：

发现知识点
发现题型
发现干扰项
发现高频
发现旧题

当前 AWS 技术事实则以 AWS 官方资料为主。

认识六：后面的学习会逐渐放大这张图
                         AWS
                          │
         ┌────────────────┼────────────────┐
         │                │                │
      Compute          Storage         Database
         │                │                │
         └────────────────┼────────────────┘
                          │
                       Network
                          │
                   Application
                          │
         ┌────────────────┼────────────────┐
         │                │                │
      Security        Monitoring        Analytics
         │                │                │
         └────────────────┼────────────────┘
                          │
                    Governance
                          │
                 Migration / Cost

C1 到这里的任务只是把地图摊开。

下一章开始，才会真正进入这张地图内部，逐一把各个技术从“听过名字”推进到“理解为什么存在、怎么使用、和谁配合、题目怎么考”。

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
C2-01-云计算核心概念与全球基础设施.md
云计算核心概念与 AWS 全球基础设施
1. 本章目标

这一章解决两个最基础的问题：

第一，为什么需要云计算？

以及：

第二，AWS 的“云”在现实世界里到底放在哪里？

后续要学习的 EC2、S3、RDS、VPC、CloudFront、Route 53、Lambda 等服务，都建立在这一层基础设施之上。

本章将依次建立下面这套知识结构：

传统数据中心
     │
     ▼
Cloud Computing
云计算
     │
     ├── Pay-as-you-go
     ├── Agility
     ├── Scalability
     ├── Elasticity
     ├── High Availability
     └── Economies of Scale
     │
     ▼
AWS Global Infrastructure
AWS 全球基础设施
     │
     ├── Region
     │     └── Availability Zone
     │
     ├── Edge Location
     ├── Local Zone
     ├── Outposts
     └── Wavelength（题库补充）
     │
     ▼
架构方式
     │
     ├── Single-AZ
     ├── Multi-AZ
     └── Multi-Region
     │
     ▼
Reliability / Resilience
可靠性 / 韧性
     │
     ├── High Availability
     ├── Fault Tolerance
     ├── Disaster Recovery
     ├── RTO
     └── RPO

这些不是零散的英语名词。

它们其实都在回答一个问题：

GlobalShop 怎样才能以合理的成本，让全球用户稳定地访问一个不会轻易挂掉、又能够随流量变化扩展的电商平台？

2. ★★★★★ Cloud Computing：什么是云计算？

Cloud Computing

中文：

云计算

如果只把它理解成：

“把服务器放到互联网上。”

是不够准确的。

更好的理解方式是：

把计算、存储、数据库、网络、安全等 IT 能力，从“企业提前购买并自己维护的硬件”，变成可以通过网络按需获取、快速调整、按照实际使用情况付费的服务。

3. 从 GlobalShop 的传统机房开始

假设 GlobalShop 还没有使用 AWS。

GlobalShop 有：

用户系统
商品系统
订单系统
库存系统
支付系统
物流系统
搜索系统
推荐系统
数据分析系统

这些程序必须运行在真实机器上。

所以需要：

GlobalShop Data Center
企业数据中心

├── Web Server
├── Application Server
├── Database Server
├── Cache Server
├── File Server
│
├── Router
├── Switch
├── Firewall
├── Load Balancer
│
├── Storage
├── Backup
│
├── UPS
├── Cooling
├── Physical Security
└── Network Lines

这就是传统：

On-Premises

简称有时写：

On-Prem

中文：

本地部署 / 本地数据中心部署

这里的“本地”不是指：

放在程序员自己的电脑。

而是：

基础设施运行在企业自己控制的数据中心、服务器机房或公司场所，而不是公有云厂商的数据中心中。

4. 传统基础设施最大的难题：你必须先猜未来

假设 GlobalShop 平时需要：

100 台 Application Server

但是“双十一”20:00：

需要 2000 台

那么公司应该买多少？

4.1 方案 A：买 100 台

平时：

需求：
██████████

服务器：
██████████

刚好。

但双十一：

实际需求：
████████████████████████████████████████████

服务器：
██████████

结果：
Overload
过载

用户可能看到：

504 Gateway Timeout

Service Unavailable

页面打不开

付款失败
4.2 方案 B：直接买 2000 台

双十一安全了。

问题是平时：

实际使用：
██

已购买：
████████████████████████████████████████

大量服务器一年绝大多数时间闲置。

但：

硬件成本
机房成本
电力
网络
维护
折旧

仍然存在。

5. ★★★★ Capacity Planning：容量规划

Capacity

容量。

Planning

规划。

Capacity Planning

中文：

容量规划

也就是：

根据未来业务量预测，需要提前准备多少计算、存储、网络等资源。

传统 IT 环境必须认真做这件事情。

因为从：

“发现不够用了”

到：

“真正增加100台服务器”

中间可能经历：

需求申请
↓
预算审批
↓
采购
↓
供应商发货
↓
机房上架
↓
网络连接
↓
安装OS
↓
系统配置
↓
应用部署

可能不是几分钟，而是几周甚至几个月。

6. ★★★★★ 云计算的关键变化：On-Demand Resource

On-Demand

中文：

按需

核心思想：

需要资源的时候再创建。

例如 GlobalShop：

平时：
100台

双十一：
需求增加
↓
500台
↓
1000台
↓
2000台

双十一结束：
↓
500台
↓
100台

这背后就涉及后面两个非常重要的概念：

Scalability
可扩展性

Elasticity
弹性

但二者不是同一个东西。

后面详细区分。

7. ★★★★★ Fixed Expense → Variable Expense

传统基础设施经常存在：

Fixed Expense

中文：

固定支出

例如提前购买：

服务器
存储
机柜
交换机
数据中心设施

无论最终使用率是多少，投入已经产生。

云计算的重要价值之一，是让相当一部分 IT 成本转为：

Variable Expense

中文：

可变支出

也就是：

用得多
→ 支出增加

用得少
→ 支出减少
8. CAPEX 与 OPEX

★★★★

在商业和财务题中还会出现两个词。

8.1 CAPEX

完整英文：

Capital Expenditure

中文：

资本性支出

例如：

一次购买1000台服务器

属于典型资本投入。

8.2 OPEX

完整英文：

Operating Expenditure

中文：

运营性支出 / 经营性支出

例如：

这个月用了多少云资源
↓
这个月支付相应费用

更接近运营成本模型。

简单理解：

传统自建数据中心
更偏向：
CAPEX

Cloud
可以将大量支出转化为：
OPEX / Variable Expense

但不要绝对化。

现实企业财务会复杂得多。

CLF-C02 主要考概念。

9. ★★★★★ Pay-as-you-go

Pay as you go

中文：

按使用量付费 / 随用随付

这是 AWS 最核心的经济思想之一。

但不要理解成：

AWS 所有东西都是一秒多少钱。

不同服务有不同计量方式：

EC2
→ 计算使用时间等

S3
→ 存储容量、请求、数据传输等

Lambda
→ 请求数、计算时间等

CloudFront
→ 请求、数据传输等

真正的共同思想是：

不必为了未来可能出现的需求，提前永久拥有所有容量。

10. ★★★★ Economies of Scale：规模经济

完整英文：

Economies of Scale

中文：

规模经济

它是什么意思？

假设 GlobalShop 自己建数据中心：

购买服务器：
500 台

采购带宽：
企业自己的规模

采购硬盘：
企业自己的规模

AWS 面向全球大量客户：

AWS
├── 大量服务器
├── 大量数据中心
├── 大量网络资源
├── 大规模电力采购
└── 大规模基础设施运营

因为采购、建设、运营规模远大于一般企业：

规模增加
↓
单位成本可能降低

AWS 可以利用这种规模经济向客户提供云资源。

题库中也反复把：

Benefit from massive economies of scale

作为 Cloud 的典型优势。

11. ★★★★ Agility：敏捷性

Agility

中文：

敏捷性

这里不是专指：

Agile Software Development，敏捷软件开发。

云计算里的 Agility 更强调：

获得 IT 能力和尝试新业务的速度。

11.1 GlobalShop 例子

产品经理提出：

做一个 AI 商品推荐实验。

传统数据中心：

需要GPU资源
↓
预算审批
↓
采购
↓
安装
↓
配置
↓
几周后开始实验

AWS：

申请适合的Cloud Resource
↓
快速创建
↓
当天开始实验

如果项目失败：

关闭资源

如果项目成功：

继续扩大

所以：

获取资源更快
↓
实验成本降低
↓
新业务上线速度提高
↓
Agility提高

题库评论也直接使用：

从 weeks 到 minutes，提高组织的 agility。

12. ★★★★★ Scalability：可扩展性

Scalability

中文：

可扩展性

核心问题：

当业务规模越来越大时，系统能不能增加能力继续处理？

比如：

今天：
每秒1000个请求

明年：
每秒10000个请求

如果系统可以通过增加资源支撑：

1000
↓
10000
↓
100000

说明系统具有良好的：

Scalability

13. Vertical Scaling：纵向扩展

★★★

Vertical Scaling

中文：

纵向扩展 / 垂直扩展

也叫：

Scale Up

意思：

不增加机器数量，而是把原来的机器变强。

例如：

原服务器：

2 vCPU
8 GB RAM

↓

更强服务器：

32 vCPU
128 GB RAM

图：

Small Server

    │
    │ Scale Up
    ▼

Large Server
14. Horizontal Scaling：横向扩展

★★★★

Horizontal Scaling

中文：

横向扩展 / 水平扩展

也叫：

Scale Out

意思：

不只是把一台机器变强，而是增加机器数量。

原来：

EC2

变成：

EC2
EC2
EC2
EC2
EC2

GlobalShop Web 系统通常非常适合：

         Load Balancer
              │
       ┌──────┼──────┐
       ▼      ▼      ▼
      EC2    EC2    EC2

流量继续增加：

         Load Balancer
              │
   ┌────┬─────┼─────┬────┐
   ▼    ▼     ▼     ▼    ▼
  EC2  EC2   EC2   EC2  EC2
15. ★★★★★ Elasticity：弹性

Elasticity

中文：

弹性

这是 CLF-C02 极其重要的概念。

它比 Scalability 多了一层意思：

资源能够根据需求变化扩大，也能够在需求减少时缩回来。

15.1 GlobalShop 双十一
11月10日 10:00

EC2：
20台

流量增加：

11月11日 19:00

EC2：
80台

20:00 秒杀：

EC2：
300台

凌晨：

02:00

EC2：
50台

第二天：

EC2：
20台

这就是：

Scale Out
扩大

+

Scale In
缩小

=

Elasticity
弹性
16. Scalability 与 Elasticity 的区别

★★★★★

这是必须真正理解的地方。

Scalability

回答：

系统能不能处理越来越大的规模？

Elasticity

回答：

系统能不能随着当前需求动态地增加和减少资源？

16.1 举例

一家公司从：

1000用户

长期发展到：

100万用户

于是服务器从：

5台
→ 100台

这是：

Scalability

另一家公司每天：

上午：
20台

晚上高峰：
100台

凌晨：
10台

每天自动变化。

这是：

Elasticity

可以记成：

Scalability
关注：
“大了以后能不能撑住？”


Elasticity
关注：
“需求变了以后能不能跟着变化？”

题库第 40 题就是非常直接的 Elasticity 题：题库把“随着需求变化进行 rightsize”以及“需要时容易获得资源”作为 Elasticity 的表现，而不是 EC2 重启速度或者 RAM 上限。

17. ★★★★★ High Availability：高可用性

简称：

HA

完整英文：

High Availability

中文：

高可用性

它关注的问题不是：

流量增加怎么办？

而是：

某些组件坏掉以后，业务还能不能继续？

18. Single Point of Failure：单点故障

★★★★

完整英文：

Single Point of Failure

常缩写：

SPOF

中文：

单点故障

例如：

         Users
           │
           ▼
          EC2

如果唯一的 EC2：

EC2
 X

整个系统：

Users
  │
  X
Service unavailable

这台 EC2 就是：

Single Point of Failure

19. 用冗余提高 Availability

Redundancy

中文：

冗余

意思是：

不只准备一个组件，而是准备额外组件，避免一个坏掉整个系统就停止。

例如：

         Load Balancer
              │
       ┌──────┴──────┐
       ▼             ▼
      EC2           EC2

坏掉一个：

EC2-A
  X

EC2-B
继续服务
20. High Availability 与 Scalability 不一样

★★★★★

题库特别喜欢把：

Agility
Elasticity
Scalability
High Availability

放到一起。

它们分别回答：

概念	核心问题
Agility	能不能快速获得资源、快速变化业务
Scalability	能不能承受更大的规模
Elasticity	能不能随实际需求增减资源
High Availability	出现故障以后还能不能尽量继续服务

题库第 77 题就是：

架构能够在发生故障时以最少 downtime 继续运行。

这里对应的是：

High Availability

而不是 Elasticity 或 Scalability。

题库相关解释也明确指出：Elasticity 主要处理资源随需求变化；Scalability 处理更大的负载；而 High Availability 关注故障情况下减少停机。

21. ★★★★ Fault Tolerance：容错能力

Fault

故障。

Tolerance

容忍。

Fault Tolerance

中文：

容错 / 故障容忍能力

其目标是：

一个组件出现故障时，系统仍然能够继续完成其功能。

High Availability 和 Fault Tolerance 很接近。

可以先这样理解：

High Availability
重点：
尽可能让服务持续可用、减少Downtime


Fault Tolerance
重点：
系统能容忍部分组件失败而继续工作
22. Downtime

★★★

Downtime

中文：

停机时间 / 服务不可用时间

例如：

20:00 系统故障
20:05 恢复

Downtime：

5 minutes
23. ★★★★ Reliability：可靠性

Reliability

中文：

可靠性

这个概念比：

Availability

范围更大。

可以粗略理解为：

系统能够在一段时间内持续、正确地执行预期功能，并能在发生故障时进行恢复。

AWS Well-Architected Framework 中专门有：

Reliability Pillar

即：

可靠性支柱。

后面的 C2-16 会详细介绍。

24. ★★★★ Resilience / Resiliency：韧性

Resilience

或：

Resiliency

中文常译：

韧性 / 弹性恢复能力 / 抗故障恢复能力

注意：

这里不要和：

Elasticity，资源弹性

混淆。

Resilience 更关心：

系统面对故障、灾害或者异常以后，能否抵抗影响并恢复。

例如：

Hardware Failure
硬件故障

AZ Failure
可用区故障

Region Failure
区域级故障

Network Failure
网络故障

Human Error
人为错误

都属于 Resilience 设计需要考虑的事件。

25. Durability：数据持久性

★★★

Durability

中文：

持久性 / 数据耐久性

主要关注：

数据会不会丢？

不要和 Availability 混淆。

例如一个存储服务可能：

数据没有丢
但是暂时访问不了

那么：

Durability
可能仍然很好

Availability
此刻却受到影响

所以：

Availability
→ 能不能访问


Durability
→ 数据会不会长期保存下来

S3 章节会再次重点讲这个区别。

26. 云计算核心概念关系图

★★★★★

                    Cloud Computing
                          │
       ┌──────────────────┼──────────────────┐
       │                  │                  │
       ▼                  ▼                  ▼
     Agility          Scalability        Availability
     敏捷性             可扩展性             可用性
       │                  │                  │
       │                  │                  │
快速获得资源          系统规模可扩大       故障后仍尽量可用
       │                  │
       │              Elasticity
       │                  弹性
       │                  │
       │             随需求增减资源
       │
       └──────────────────┬─────────────────
                          │
                      Reliability
                        可靠性
                          │
                     Resilience
                         韧性
27. ★★★★★ AWS Global Infrastructure：AWS 全球基础设施

到这里，我们已经回答：

Cloud 为什么有价值？

接下来要回答：

这些云服务器实际在哪里？

AWS 的云不是漂浮在空气中。

底层仍然是：

真实土地
真实建筑
真实服务器
真实交换机
真实光纤
真实电力系统

只是这些物理基础设施由 AWS 建设和运营。

28. 当前 AWS 全球规模

【AWS 当前｜2026-09】

截至本章编写时，AWS 官方 Global Infrastructure 页面显示：

Geographic Regions
地理区域：
39

Availability Zones
可用区：
124

CloudFront POPs
以及 Regional Edge Caches：
750+

这些数字会持续增加，因此不建议把具体数字作为长期死记内容；考试更重要的是理解 Region、AZ 和 Edge Network 之间的关系。

29. AWS 全球基础设施第一张总图

★★★★★

                           AWS Global
                        全球AWS基础设施
                              │
       ┌──────────────────────┼──────────────────────┐
       │                      │                      │
       ▼                      ▼                      ▼
 Tokyo Region            Oregon Region          Frankfurt Region
 东京区域                  俄勒冈区域               法兰克福区域
       │
 ┌─────┼─────┬─────┐
 ▼     ▼     ▼     ▼
AZ-1  AZ-2  AZ-3  AZ-4
 │
 ├── Data Center
 └── Data Center


另外还有：

Edge Locations
Local Zones
Outposts
Wavelength Zones
30. ★★★★★ Region：区域

Region

中文：

区域

AWS 官方定义非常直接：

每一个 AWS Region 是一个独立的地理区域。

31. 一个真实 Region：东京

GlobalShop 的日本核心系统可以选择：

Asia Pacific (Tokyo)

中文：

亚太（东京）区域

Region Code：

ap-northeast-1

拆开来看：

ap
Asia Pacific
亚太

northeast
东北方向

1
该系列中的编号

实际使用 AWS API、CLI、SDK 时，经常会看到：

ap-northeast-1

而不是完整的：

Asia Pacific (Tokyo)
32. 日本目前有两个 AWS Region

【AWS 当前】

例如：

Asia Pacific (Tokyo)
ap-northeast-1
4 AZs

Asia Pacific (Osaka)
ap-northeast-3
3 AZs

AWS 当前 Region 列表确认东京为 4 个 AZ、大阪为 3 个 AZ。

这两个都是：

Region

不是：

Tokyo = AZ
Osaka = AZ
33. 为什么 AWS 要划分 Region？

有几个核心原因。

33.1 Geographic Proximity：地理接近

Geographic Proximity

中文：

地理接近性

假设用户主要都在日本。

部署：

Tokyo

通常比部署：

Virginia

更有机会获得较低的网络传播延迟。

AWS 官方 Region 指南也明确建议，可以选择靠近主要用户的 Region 来降低网络延迟。

33.2 Regulatory / Compliance：监管和合规

Regulatory

监管。

Compliance

合规。

有些业务可能规定：

某类数据必须保存在指定国家/地区

于是 Region 选择不再只是性能问题。

可能是法律和监管问题。

33.3 Service Availability：服务可用范围

不是所有 AWS 服务：

从发布第一天起

都一定在全球每一个 Region 同时提供。

所以部署业务前，需要考虑：

我需要的 AWS Service 在这个 Region 有没有？

AWS Region 官方指南将所需服务和功能是否可用明确列为 Region 选择因素。

34. GlobalShop Region 选择案例

GlobalShop 日本站：

主要用户：
日本

监管：
部分用户数据希望放在日本

主要业务团队：
东京

可能选择：

Asia Pacific (Tokyo)
ap-northeast-1

欧洲业务如果存在数据和法律要求：

Europe Region

可能更适合。

所以：

Region Selection
区域选择

不是只看：
“哪个Region最快？”

而是：

用户位置
+
法律/监管
+
服务Availability
+
业务需求
35. ★★★★★ Availability Zone：可用区

完整英文：

Availability Zone

简称：

AZ

中文：

可用区

36. AZ 到底是什么？

这是非常重要的一句话：

一个 Availability Zone 是一个 Region 内相互隔离的基础设施位置，可以包含一个或多个离散的数据中心。

题库第 150 题就直接问：

哪一个环境由一个或多个 Data Center 组成？

题库答案：

Availability Zone。

37. Region 与 AZ 的真实层级

不要这样理解：

Tokyo
=
一个机房

正确结构更接近：

Japan
│
├── Asia Pacific (Tokyo) Region
│      │
│      ├── Availability Zone 1
│      │      ├── Data Center
│      │      └── Data Center
│      │
│      ├── Availability Zone 2
│      │      └── Data Center(s)
│      │
│      ├── Availability Zone 3
│      │
│      └── Availability Zone 4
│
└── Asia Pacific (Osaka) Region
       │
       ├── AZ
       ├── AZ
       └── AZ
38. 东京 Region 的实际 AZ

【AWS 当前】

Tokyo Region：

ap-northeast-1

当前包含四个稳定 AZ ID：

apne1-az1
apne1-az2
apne1-az3
apne1-az4

AWS 官方 Availability Zone 列表明确列出了这四个 Tokyo AZ ID。

39. 为什么有 AZ ID 和 ap-northeast-1a 这种名字？

这是一个可以了解、但 CLF-C02 不需要深入的细节。

你有时会看到：

ap-northeast-1a
ap-northeast-1b
...

这是：

Availability Zone Code

而 AWS 还提供：

apne1-az1

这种：

AZ ID

AZ ID 用于稳定标识一个具体的物理 AZ。

AWS 当前文档还说明：对于较早创建的账户，在一些老 Region 中，类似 us-east-1a 这样的字母代码过去可能在不同账户映射到不同的物理 AZ；AZ ID 则跨账户一致。新账户的映射策略已经发生变化。

对 CLF-C02 来说，只需知道：

Region
包含多个AZ

AZ
是Region内部的隔离故障域

就足够。

40. 为什么一个 Region 不能只有一个 AZ？

因为：

数据中心也会故障。

例如：

停电
网络中断
硬件故障
火灾
洪水
人为故障

如果整个东京 Region 只有一个位置：

Tokyo

└── Data Center
      │
      ├── EC2
      ├── RDS
      └── Application

这个地方发生重大故障：

Tokyo
  X

业务全部停止。

因此 AWS Region 采用多个相互隔离的：

Availability Zones

当前 AWS 官方文档指出，每个 Region 至少有三个 AZ，用于帮助设计高可用应用。

41. AZ 为什么要相互隔离？

如果两个所谓“可用区”：

共用同一个电源
共用同一个交换机
共用同一个建筑

那么：

电源故障
↓
两个一起挂

就失去了意义。

所以 AZ 的设计重点是：

Fault Isolation

中文：

故障隔离

也就是：

尽可能防止一个基础设施位置发生故障时，把其他位置一起带走。

42. 为什么多个 AZ 之间还要高速连接？

另一方面，如果 AZ：

完全隔离
但是彼此网络很慢

也很难组成一个实时业务系统。

所以一个 Region 内的 AZ 既需要：

故障隔离

又需要：

高带宽
低延迟的网络连接

让：

AZ-A Application

能够和：

AZ-B Database

进行可靠通信。

43. ★★★★★ Multi-AZ：多可用区

Multi

多个。

AZ

Availability Zone。

Multi-AZ

中文：

多可用区部署

它不是一个单独的 AWS 产品名称。

它是一种：

Architecture Pattern

中文：

架构模式

44. Single-AZ 的问题

GlobalShop：

Tokyo Region
│
└── AZ-A
      │
      ├── EC2
      └── Database

如果：

AZ-A
  X

整个服务：

X
45. Multi-AZ 架构
                 Tokyo Region
                      │
             Load Balancer
                  /       \
                 /         \
                ▼           ▼
             AZ-A         AZ-B
              │             │
             EC2           EC2

数据库也可以采取适当的 Multi-AZ 高可用设计。

当：

AZ-A
  X

还有：

AZ-B
 ✓

所以服务仍有机会继续提供。

46. Multi-AZ 的主要目的是什么？

★★★★★

主要：

High Availability
高可用

Fault Isolation
故障隔离

Resilience
韧性

而不是：

服务美国用户更快

因为：

AZ-A
AZ-B

仍然都属于：

Tokyo Region
47. 题库如何考 Multi-AZ？

例如题库存在典型数据库题：

Database must be highly available and fault tolerant.

选项包括：

RDS Single-AZ

RDS Snapshot

RDS Multi-AZ

DMS

题库对应：

RDS with multiple Availability Zones。

这类题真正考的是：

High Availability
+
AZ Failure protection
↓
Multi-AZ

而不是简单背：

RDS = Multi-AZ
48. ★★★★★ Multi-Region：多区域

Multi-Region

中文：

多区域部署

这里比 Multi-AZ 再高一层。

49. Multi-AZ 与 Multi-Region
Japan

┌────────────────────────┐
│ Tokyo Region           │
│                        │
│ AZ-A  AZ-B  AZ-C AZ-D  │
└────────────────────────┘

          │
          │ Multi-Region
          ▼

┌────────────────────────┐
│ Osaka Region           │
│                        │
│ AZ-A  AZ-B  AZ-C       │
└────────────────────────┘
50. Multi-AZ 主要保护什么？

例如：

某个数据中心故障
某个Availability Zone故障
部分基础设施问题
51. Multi-Region 主要进一步考虑什么？

例如：

整个地理区域重大灾害
区域级业务连续性
全球业务
跨区域灾难恢复
部分法规需求
52. 一个非常重要的原则

★★★★★

不要理解成：

“只要系统重要，就一定 Multi-Region。”

不一定。

Multi-Region 会引入：

更高成本
更复杂数据复制
一致性问题
跨Region网络
Failover机制
运维复杂性

AWS 当前架构指导也明确指出：

不是所有 workload 都需要 Multi-Region；对于很多场景，同一 Region 内良好的 Multi-AZ 已经能够提供高可用。

所以：

Multi-AZ
≠ 低级架构

Multi-Region
≠ 永远更正确

要根据业务要求。

53. 题库中的 Multi-Region 场景

题库第 147 题：

EC2 必须保持高可用，即使某一个特定 geographic area 发生 natural disaster。

选项中包括：

multiple AWS Regions

multiple CloudFront locations

multiple Edge Locations

Local Zones

题库答案：

multiple AWS Regions。

为什么？

因为：

natural disaster
+
particular geographic area

已经超出了单纯：

离用户更近

的问题。

54. ★★★★ Disaster Recovery：灾难恢复

简称：

DR

完整英文：

Disaster Recovery

中文：

灾难恢复 / 灾备

55. DR 和 High Availability 不完全一样

High Availability：

主要希望正常运行期间，即使局部组件发生故障，也尽量维持服务。

Disaster Recovery：

发生重大灾害之后，如何恢复整个 workload。

AWS 官方 Reliability 文档明确区分：Availability 关注一段时间内对组件故障、负载尖峰、软件 Bug 等事件的韧性；DR 则关注面对自然灾害、大规模技术故障或攻击/人为错误时的一次恢复目标。

56. GlobalShop 的 DR 场景

正常：

Tokyo Region
     │
     ├── AZ-A
     └── AZ-B

正常提供业务

另外：

Osaka Region
     │
     └── 保留备份 / 副本 / 恢复能力

重大区域事件：

Tokyo Region
     X

      │
      │ Disaster Recovery
      ▼

Osaka Region
恢复业务
57. ★★★★ RTO：Recovery Time Objective

完整英文：

Recovery Time Objective

简称：

RTO

中文：

恢复时间目标

核心问题：

最多允许业务停多久？

例如：

GlobalShop 定义：

RTO = 30 minutes

意思：

发生灾害以后，希望最多 30 分钟以内恢复业务。

58. ★★★★ RPO：Recovery Point Objective

完整英文：

Recovery Point Objective

简称：

RPO

中文：

恢复点目标

核心问题：

最多允许丢多少时间范围的数据？

例如：

RPO = 5 minutes

意味着：

灾害发生后，最多接受最近约 5 分钟的数据无法恢复。

AWS 官方定义也是：

RTO：服务中断到恢复之间最大可接受时间。
RPO：最后可恢复的数据点与故障之间最大可接受时间。
59. RTO / RPO 文字时间轴

★★★★★

假设：

10:00
最后一次可恢复数据

10:05
灾害发生

10:25
业务恢复

则：

             Disaster
                │
                ▼
09:55  10:00  10:05             10:25
─────────●───────X────────────────●────→
         │                         │
         │                         │
      RPO范围                   RTO范围

简单理解：

RPO
向灾害之前看

“最多丢多少数据？”


RTO
向灾害之后看

“最多停多久？”
60. RTO 越低意味着什么？

例如：

RTO = 24 hours

业务允许慢慢恢复。

成本可能相对较低。

而：

RTO = 30 seconds

意味着：

灾害发生以后几乎马上恢复。

通常需要：

更多预先运行的资源
更多自动化
更复杂架构
更高成本
61. RPO 越低意味着什么？

例如：

RPO = 24 hours

每天备份一次或许有机会满足。

而：

RPO ≈ 0

意味着几乎不能丢数据。

通常需要：

持续复制
实时复制
更复杂的数据架构

所以：

RTO ↓
RPO ↓

通常意味着：

Cost ↑
Complexity ↑
62. DR 的四种典型思想

★★★

AWS Reliability 指导中常见四种 DR 策略：

Backup and Restore
备份与恢复

Pilot Light
指示灯 / 最小核心环境

Warm Standby
温备

Multi-Site Active/Active
多站点双活 / 多活

它们通常：

成本逐渐增加
↓
恢复速度逐渐提高
↓
RTO / RPO 通常逐渐降低

AWS 当前 Well-Architected Reliability 文档仍使用这些恢复策略。

C2-16 和后续架构章节会详细展开。

本章只建立概念。

63. ★★★★ Data Residency：数据驻留

Data

数据。

Residency

驻留。

Data Residency

中文：

数据驻留

AWS 对其定义可以简单理解为：

数据在物理或地理上存储和处理在哪里。

64. GlobalShop 数据驻留例子

假设监管要求：

日本客户的特定敏感数据必须留在日本。

那么架构不能随便：

Japan Data
    │
    ▼
US Region

而要根据法规和业务要求选择合适：

Japan Region

例如：

Tokyo
Osaka

Region 就变成一个非常重要的合规控制点。

65. ★★★ Data Sovereignty：数据主权

Sovereignty

主权。

Data Sovereignty

中文：

数据主权

它比 Data Residency 范围更广。

AWS 当前的解释是：

数据受到其物理位置对应法律和监管体系的约束。Data Residency 强调数据实际在哪里；Data Sovereignty 进一步强调该地的法律和治理如何作用于数据。

66. Data Residency 与 Data Sovereignty

★★★★★

可以先记：

Data Residency
↓
数据在哪里？


Data Sovereignty
↓
数据受到哪里的法律、
监管和治理体系约束？

例如：

日本客户数据
实际存储：
Tokyo Region

这是：

Residency

然后：

这些数据如何受到日本相关法律和监管制度约束？

属于：

Sovereignty

67. 题库怎样考地理位置和法规？

题库第 529 题：

公司需要在 specific geographic area 部署应用以满足 regulations。

题库把 AWS 的：

Global Footprint

作为相关优势，并在评论中把它和 Region/AZ 的全球分布以及数据驻留联系起来。

真正理解应该是：

Compliance Requirement
        │
        ▼
需要控制部署地理位置
        │
        ▼
选择适合的 AWS Region

而不是死记：

regulation = global footprint
68. Global Footprint 是什么？

★★★

Global

全球。

Footprint

原意是“足迹”。

这里：

Global Footprint

可以理解：

全球基础设施覆盖范围

AWS 在全球存在许多：

Regions
Availability Zones
Edge Locations
Local Zones

因此企业可以根据：

用户位置
法律
延迟
业务连续性

选择部署地点。

69. ★★★★ Edge：什么叫“边缘”？

现在进入一个很容易被一句：

“离用户更近。”

糊弄过去的概念。

70. 网络中的 Core 与 Edge

Core

核心。

Edge

边缘。

这里的 Edge 不是：

城市边缘。

而是：

相对于云中心基础设施而言，更靠近终端用户和接入网络的位置。

想象：

                  Cloud Core
                 AWS Region
                     │
                     │
                Backbone
                     │
                     │
                Edge Network
                     │
                     ▼
                   Users

越靠近：

最终用户

越接近：

Network Edge

网络边缘。

71. ★★★★ Edge Location：边缘站点

Edge Location

中文常理解为：

边缘站点 / 边缘节点

主要服务于：

CDN
DNS
Network Acceleration
Edge Security

等全球网络能力。

72. 为什么需要 Edge Location？

GlobalShop 所有商品图片原文件存在：

Tokyo
S3

日本用户：

Tokyo User
    │
    ▼
Tokyo Region

距离较近。

美国用户：

US User
   │
   │ long network path
   │
   ▼
Tokyo Region

每次都跑东京，网络路径很长。

73. CloudFront 怎么使用 Edge Location？

★★★★

后面 C2-07 会完整讲 CloudFront。

现在只理解边缘节点。

第一次访问：

US User
   │
   ▼
US Edge Location
   │
Cache miss
   │
   ▼
Tokyo Origin
S3
   │
   ▼
Object returned
   │
   ▼
Edge Cache

下一位附近用户：

US User
   │
   ▼
Nearby Edge Location
   │
   ▼
Cached Object
   │
   ▼
直接返回

不必每次跨越远距离到 Tokyo。

74. Origin 是什么？

★★★

Origin

中文：

源站

在 CDN 中：

保存原始内容、CloudFront 最终回源访问的位置。

GlobalShop：

S3 Bucket

可以作为 CloudFront Origin。

也可以是：

Load Balancer
HTTP Server

等。

75. Cache 是什么？

★★★★

Cache

中文：

缓存

其思想：

把经常需要的数据暂时保存在离使用者更近或访问更快的位置。

例如：

Original:
Tokyo S3

Cached Copy:
US Edge

这样后续请求可以直接从 Cache 返回。

76. Edge Location 与 Availability Zone 最大区别

★★★★★

对比	Availability Zone	Edge Location
中文	可用区	边缘站点
所属逻辑	Region 内基础设施	全球边缘网络
主要目标	故障隔离、高可用	靠近用户、降低内容访问延迟
常见服务	EC2、RDS、EBS 等	CloudFront、DNS/边缘能力等
典型问题	一个 AZ 挂了怎么办	全球用户离源站太远怎么办

不要因为两个地方都有服务器就认为是同一个概念。

77. Regional Edge Cache

★★

CloudFront 还存在：

Regional Edge Cache

中文：

区域边缘缓存

可以粗略理解为：

位于 Edge Location 与 Origin 之间更大一级的中间缓存层。

概念图：

User
 │
 ▼
Edge Location
 │
 ▼
Regional Edge Cache
 │
 ▼
Origin

它可以进一步减少：

每次都直接回源

的需求。

CLF-C02 一般不要求深入 CloudFront 多级缓存实现，本章知道层级即可。

78. ★★★ Local Zone：本地区域

AWS Local Zones

中文通常：

AWS 本地区域

它是：

AWS Region 向特定大城市或人口/产业中心方向的基础设施延伸。

AWS 官方定义：

Local Zone 将计算、存储、数据库等部分 AWS 资源部署到更靠近大型人口和产业中心的位置，以提供低延迟访问。

79. 为什么已经有 Region，还要 Local Zone？

假设：

Parent Region:
Oregon

而你的用户/业务就在：

Los Angeles

某些业务要求：

极低延迟

但并不一定有一个完整 AWS Region 就建在那个城市。

于是 AWS 可以提供：

Local Zone

把部分：

Compute
Storage
Database

资源放到更接近当地用户的位置。

80. 一个真实 Local Zone 例子

AWS 当前文档给出的典型 Local Zone：

us-west-2-lax-1a

其中：

us-west-2
Parent Region
美国西部（俄勒冈）

lax
Los Angeles
洛杉矶

所以它表达的是：

这个 Local Zone 属于 us-west-2 Region 的扩展，但基础设施靠近 Los Angeles。

81. GlobalShop 为什么可能用 Local Zone？

普通电商页面：

几十毫秒差异

往往没有必要专门使用 Local Zone。

但如果 GlobalShop 开始做：

AR虚拟试衣

直播电商实时视频处理

仓库实时视觉系统

远程图形工作站

这些业务对：

Low Latency

低延迟非常敏感。

如果目标用户靠近 Local Zone：

可以考虑。

AWS 官方列出的 Local Zone 典型用途也包括实时游戏、直播、AR/VR、虚拟工作站以及低延迟混合部署。

82. Local Zone 和 Edge Location 的区别

★★★★

两者都说：

靠近用户。

但不是一个东西。

Edge Location

更偏：

Cache
Content Delivery
DNS
Edge Network
Local Zone

可以真正部署部分：

EC2
Storage
Database
Application Workload

所以：

CloudFront缓存商品图片
→ Edge Location


在洛杉矶本地运行低延迟EC2 workload
→ Local Zone
83. ★★★ AWS Outposts

Outpost

英文原义：

前哨 / 前哨站

产品：

AWS Outposts

中文一般仍直接叫：

AWS Outposts

84. Outposts 为什么存在？

有些公司说：

我想使用 AWS 的服务器、API 和运维模式。

但是又说：

我的计算资源必须放在我自己的机房里。

原因可能：

需要极低本地延迟

大量数据不适合一直传Cloud Region

本地数据处理

法规 / Residency

现有系统高度依赖本地网络

于是：

只使用普通AWS Region

不能完全满足。

85. Outposts 做了什么？

AWS 把：

AWS managed hardware
AWS compute capacity
AWS storage capacity
AWS APIs
AWS tools

直接延伸到：

Customer Premises

中文：

客户现场 / 客户自己的数据中心

AWS 官方当前定义：

Outposts 是完全托管服务，将 AWS 基础设施、服务、API 和工具扩展到客户所在地；Outpost 本身是部署在客户现场的一组 AWS 计算和存储容量，并由 AWS 作为其关联 Region 的一部分进行运营、监控和管理。

86. Outposts 实际结构
GlobalShop Data Center
企业自己的机房
│
├── Legacy Server
├── Mainframe
├── Local Database
│
└── AWS Outposts Rack
       │
       ├── AWS Compute
       ├── AWS Storage
       └── AWS Services
              │
              │ Service Link
              ▼
          AWS Region

这里非常关键：

Outposts 不是“通过专线访问 AWS Region”。

而是：

AWS 的基础设施本身真的部署进客户现场。

87. Outposts 与 Direct Connect 不一样

后面 C2-07 会详细讲。

先记：

Direct Connect
→ 网络连接


Outposts
→ AWS基础设施部署到客户现场

比如：

自己家没有AWS服务器
只拉了一条专线
→ Direct Connect


自己机房里真的放了AWS管理的Rack
→ Outposts
88. GlobalShop Outposts 场景

假设 GlobalShop 有一个大型物流中心。

仓库自动化系统：

摄像头
机械臂
分拣机
传送带

需要：

极低延迟本地控制

不能每个控制信号：

仓库
↓
公网
↓
Tokyo Region
↓
计算
↓
再回来

但公司又希望：

使用AWS API
AWS管理方式
与AWS VPC集成

于是：

Outposts

可能成为方案之一。

89. Outposts 当前产品状态补充

【AWS 当前】

AWS 当前文档注明，原来的 1U 和 2U Outposts Server 已停止销售，AWS 正把重点放到 Outposts Rack 以及新的形态上。Outposts 本身仍然是当前 AWS 服务。

CLF-C02 不需要记这种产品生命周期细节。

这里只是为了保证文档与当前 AWS 状态一致。

90. ★ AWS Wavelength

【题库补充】【CURRENT-OUT-OF-SCOPE】

AWS 当前 CLF-C02 官方 Out-of-Scope 页面已经明确将：

AWS Wavelength

列在：

Compute
Out-of-Scope

中。

但是你的 719 题中存在 Wavelength，因此仍然需要知道它是什么。

91. Wavelength 是什么？

AWS Wavelength 将部分标准 AWS 计算和存储能力部署到：

Telecommunication Carrier 5G Edge

中文：

电信运营商的 5G 网络边缘

AWS 当前 Global Infrastructure 文档仍然这样描述 Wavelength Zone：

用于让开发者构建面向 5G 设备和终端用户的超低延迟应用。

92. 普通移动应用路径
5G Phone
   │
   ▼
Telecom Network
运营商网络
   │
   ▼
Internet / Backbone
   │
   ▼
AWS Region
   │
   ▼
EC2
93. Wavelength
5G Phone
   │
   ▼
Telecom Network
   │
   ▼
Wavelength Zone
   │
   └── Compute / Storage
          │
          ▼
      AWS Region

某些实时业务不需要每一次都走到较远的核心 Region 再回来。

94. Wavelength 场景

比如：

实时多人云游戏
AR / VR
联网汽车
实时视频分析

这些业务可能对：

几毫秒级延迟

非常敏感。

普通 GlobalShop 商品页通常并不需要这种能力。

95. Local Zone、Wavelength、Outposts、Edge Location 对比

★★★★★

技术	中文理解	基础设施在哪里	主要目的
Availability Zone	可用区	AWS Region 内	高可用、故障隔离
Edge Location	边缘站点	靠近终端用户的 AWS Edge Network	CDN、DNS、内容与网络加速
Local Zone	本地区域	靠近特定城市/产业中心	运行低延迟 AWS workload
Wavelength Zone	5G 边缘区域	电信运营商 5G 网络边缘	移动设备超低延迟
Outposts	AWS 本地基础设施	客户自己的机房	本地运行 AWS 基础设施

这五个概念都涉及：

Location
位置

但目的完全不同。

96. 一张位置层级图

★★★★★

                         AWS GLOBAL
                             │
             ┌───────────────┴───────────────┐
             │                               │
             ▼                               ▼
       Tokyo Region                    Oregon Region
             │                               │
   ┌─────────┼─────────┐                ┌────┼────┐
   ▼         ▼         ▼                ▼    ▼    ▼
  AZ1       AZ2       AZ3              AZ1  AZ2  AZ3
   │
   └── Data Centers


Region Extension:

Oregon Region
     │
     └──── Los Angeles Local Zone


Near Users:

User
 │
 ▼
Edge Location
 │
 ▼
CloudFront
 │
 ▼
Region


5G:

Mobile User
 │
 ▼
Carrier Network
 │
 ▼
Wavelength Zone
 │
 ▼
Region


Customer Premises:

GlobalShop Data Center
 │
 └── AWS Outposts
        │
        ▼
     AWS Region
97. Regional、Zonal、Global Service Scope

★★★★

AWS 服务并不都是一个地理作用域。

可以粗略分成：

Global
全球

Regional
区域级

Zonal
可用区级

理解这一点非常重要。

98. Regional Resource：区域资源

例如很多 AWS 服务的资源：

在某一个Region创建

比如 EC2：

Tokyo Region

和：

Oregon Region

里的实例是两个不同 Region 内的资源。

99. Zonal Resource：可用区资源

有些资源与具体 AZ 强关联。

例如后续会学习：

Amazon EBS Volume

通常创建在：

某个Availability Zone

如果：

EBS in AZ-A

要直接挂到：

EC2 in AZ-B

就不能把它当普通本地硬盘一样理解。

后面 C2-04 详细讲。

100. Global Services：全球服务

有一些服务的管理范围呈全球性质。

例如：

AWS IAM

Amazon Route 53

Amazon CloudFront

但“Global Service”不代表：

所有数据和行为都完全没有地域概念。

这部分涉及具体服务细节，后续相关章节再准确说明。

当前只需要知道：

AWS 资源存在不同地理 Scope，不能假设所有服务都绑在同一个 AZ。

101. ★★★★ Latency：延迟

Latency

中文：

延迟

例如：

用户发送请求
12:00:00.000

收到响应
12:00:00.100

总耗时：

100ms

其中存在：

网络延迟
服务器处理时间
数据库时间
102. 为什么 Region 位置影响 Latency？

光纤再快，也不能突破物理规律。

日本用户：

Tokyo
↓
Tokyo Region

网络路径通常比：

Tokyo
↓
US East

短。

所以 AWS 官方也把：

靠近主要用户以降低 network latency

列为选择 Region 的考虑因素。

103. Throughput：吞吐量

★★★

Throughput

中文：

吞吐量

不要与 Latency 混淆。

Latency

回答：

一次需要多久？

例如：

50 ms
Throughput

回答：

一段时间能够处理多少？

例如：

10 GB/s

100,000 requests/second

所以：

Latency
像：
一个快递包裹多久送到


Throughput
像：
一天一共能运多少包裹
104. Bandwidth：带宽

★★★

Bandwidth

中文：

带宽

可以粗略理解为：

网络链路理论上可以承载的数据传输能力。

虽然：

Bandwidth
Throughput

经常相关，但不是完全同义。

105. Availability、Latency、Cost 不一定可以同时做到最好

真实架构必须做：

Trade-off

中文：

权衡 / 取舍

例如：

只部署东京
↓
成本较简单
日本用户很好
美国用户延迟可能较高
Region级DR能力有限


全球多Region Active-Active
↓
全球性能更强
区域级韧性更好
但是：
成本更高
架构更复杂
数据同步更难

所以：

云架构不是“选最贵的就是最好”。

而是：

业务需求
+
风险
+
成本
+
复杂度

之间取得平衡。

106. GlobalShop 的完整基础设施选择过程

现在把本章所有概念串起来。

Step 1：用户主要在哪？
Japan
US
Europe

所以需要考虑：

Regions
Edge Network
Step 2：日本核心系统在哪里？

选择：

Asia Pacific (Tokyo)
ap-northeast-1
Step 3：东京只有一个 AZ 可以吗？

不希望。

生产环境：

AZ-A
+
AZ-B

至少形成 Multi-AZ 思维。

Step 4：商品图片美国用户怎么办？
S3 Origin
+
CloudFront Edge Network

后面 C2-07 详细实现。

Step 5：某城市有超低延迟业务怎么办？

如果有合适 Local Zone：

Local Zone

可能考虑。

Step 6：物流中心必须本地处理怎么办？

可能考虑：

Outposts
Step 7：整个东京 Region 都不可用怎么办？

如果业务真的有这个要求：

Multi-Region DR

例如：

Tokyo
+
Osaka
Step 8：能停多久？

定义：

RTO
Step 9：能丢多少数据？

定义：

RPO
107. GlobalShop 基础设施总图

★★★★★

                         Global Users
             Japan          US          Europe
               │             │             │
               ▼             ▼             ▼
          Edge Location  Edge Location  Edge Location
               │             │             │
               └─────────────┼─────────────┘
                             │
                         CloudFront
                             │
                             ▼
                    Asia Pacific (Tokyo)
                       ap-northeast-1
                             │
               ┌─────────────┼─────────────┐
               │             │             │
               ▼             ▼             ▼
             AZ-1          AZ-2          AZ-3
               │             │
              EC2           EC2
               │             │
               └──────┬──────┘
                      │
                 Multi-AZ
                      │
                      ▼
               High Availability


                         DR
Tokyo Region ───────────────────────── Osaka Region
    │                                      │
 Primary                                Recovery
 Workload                                Region


Local Requirement:

Large City
   │
   ▼
Local Zone


On-Prem Requirement:

GlobalShop Data Center
   │
   ▼
AWS Outposts
   │
   ▼
AWS Region
108. 题库中的本章主要考法

根据 719 题，本章知识主要以以下几种方式出现。

类型 1：云计算优势

例如：

固定成本还是可变成本？

为什么AWS可以降低单位成本？

为什么Cloud提高Agility？

为什么不用提前Overprovision？

高频答案方向：

Variable expense

Economies of scale

Speed and agility

Elastic capacity

题库中也反复讨论“Trade fixed expense for variable expense”以及规模经济等云价值。

109. 类型 2：Elasticity / Scalability / Availability 区分

典型选项：

Agility

Elasticity

Scalability

High Availability

判断：

快速上线资源
→ Agility


规模越来越大还能撑
→ Scalability


随流量自动增加又减少
→ Elasticity


故障以后还能提供服务
→ High Availability
110. 类型 3：Region / AZ

题目可能问：

one or more data centers

→ Availability Zone。

或者：

choose geographic deployment area

→ Region。

题库中也有题直接将 RDS 的 deployment area 选择和 AWS Regions 联系起来。

111. 类型 4：法规和地理要求

题目：

specific geographic location

regulatory requirements

data must remain...

通常首先想到：

Region Selection

而不是：

Availability Zone

因为 Region 才是：

Geographic Area

更高层级的位置概念。

112. 类型 5：High Availability

题目：

AZ failure

highly available

fault tolerant

通常考虑：

Multiple Availability Zones
113. 类型 6：Geographic Disaster

题目：

natural disaster

entire geographic area

Regional failure

需要开始考虑：

Multiple Regions

但不要机械：

Disaster
=
Multi-Region

现实 AWS 架构中，Multi-AZ 也能缓解许多火灾、洪水、电力等局部灾害；只有当业务要求保护到整个 Region 无法运行这种级别，才真正需要跨 Region 策略。AWS 当前 Reliability 指导也明确区分了这两级。

114. 类型 7：Edge / Local / Outposts

判断：

CDN / content near users
→ Edge Location


run AWS compute near a metro area
→ Local Zone


AWS infrastructure in customer's own data center
→ Outposts


5G ultra-low-latency
→ Wavelength
【当前CLF-C02范围外】
115. 本章高频英文词汇表
英文	全称/解释	中文
Cloud Computing	—	云计算
On-Premises	On-Prem	本地部署
Capacity	—	容量
Capacity Planning	—	容量规划
Provision	—	创建/供应资源
Pay-as-you-go	—	按使用量付费
CAPEX	Capital Expenditure	资本性支出
OPEX	Operating Expenditure	运营性支出
Economies of Scale	—	规模经济
Agility	—	敏捷性
Scalability	—	可扩展性
Scale Up	Vertical Scaling	纵向扩展
Scale Out	Horizontal Scaling	横向扩展
Scale In	—	缩减资源
Elasticity	—	弹性
HA	High Availability	高可用性
SPOF	Single Point of Failure	单点故障
Redundancy	—	冗余
Fault Tolerance	—	容错能力
Reliability	—	可靠性
Resilience	Resiliency	韧性
Durability	—	持久性/数据耐久性
Downtime	—	停机时间
Region	—	区域
AZ	Availability Zone	可用区
Multi-AZ	Multiple Availability Zones	多可用区
Multi-Region	Multiple Regions	多区域
Data Center	—	数据中心
Edge	—	边缘
Edge Location	—	边缘站点
Local Zone	—	本地区域
Outposts	—	AWS 本地基础设施服务
DR	Disaster Recovery	灾难恢复
RTO	Recovery Time Objective	恢复时间目标
RPO	Recovery Point Objective	恢复点目标
Data Residency	—	数据驻留
Data Sovereignty	—	数据主权
Latency	—	延迟
Throughput	—	吞吐量
Bandwidth	—	带宽
Origin	—	源站
Cache	—	缓存
Trade-off	—	权衡
116. ★★★★★ 本章最重要的概念对比
116.1 Scalability vs Elasticity
Scalability
=
能不能扩大


Elasticity
=
能不能随需求扩大和缩小
116.2 Availability vs Durability
Availability
=
现在能不能访问


Durability
=
数据会不会丢
116.3 Multi-AZ vs Multi-Region
Multi-AZ

同一个Region
多个AZ

主要：
High Availability


Multi-Region

不同Region

主要：
Region级DR
全球业务
部分法规需求
116.4 AZ vs Edge Location
AZ
=
完整AWS workload基础设施位置
主要解决Fault Isolation


Edge Location
=
靠近用户的Edge Network节点
主要解决Content Delivery / Latency
116.5 Local Zone vs Outposts
Local Zone
=
AWS在靠近特定城市的位置提供基础设施


Outposts
=
AWS基础设施进入客户自己的数据中心
116.6 High Availability vs Disaster Recovery
High Availability
=
正常运行期间局部故障
尽量不中断业务


Disaster Recovery
=
重大灾害以后
整个workload如何恢复
116.7 RTO vs RPO
RTO
=
最多停多久


RPO
=
最多丢多少时间的数据
117. 做题快速判断图
题目说：
“需求变化”
      │
      ├── 规模可以扩大
      │      → Scalability
      │
      └── 自动增加/减少
             → Elasticity


题目说：
“故障”
      │
      ├── 尽量不中断
      │      → High Availability
      │
      ├── 一个AZ挂掉
      │      → Multi-AZ
      │
      └── 整个地理区域灾害
             → Multi-Region / DR


题目说：
“位置”
      │
      ├── Geographic Area
      │      → Region
      │
      ├── Region内隔离位置
      │      → Availability Zone
      │
      ├── CDN / 离用户近
      │      → Edge Location
      │
      ├── 城市级低延迟Compute
      │      → Local Zone
      │
      └── 自己机房运行AWS
             → Outposts


题目说：
“灾备目标”
      │
      ├── 停多久
      │      → RTO
      │
      └── 丢多少数据
             → RPO
118. GlobalShop 本章最终案例

最后完整走一遍。

GlobalShop 计划建设日本电商平台。

第一步：选择 Region

主要用户在日本：

Asia Pacific (Tokyo)
ap-northeast-1

考虑：

Latency
Regulation
Service Availability
第二步：不能只部署一个 AZ
Tokyo Region
│
├── AZ-A
└── AZ-B

Web Server 分布在两个 AZ。

目标：

High Availability
第三步：双十一自动增加资源
Normal:
20 servers

Peak:
300 servers

After peak:
20 servers

体现：

Elasticity

同时整个系统能够长期增长：

Scalability
第四步：全球商品图片

使用靠近全球用户的：

Edge Locations

配合后续会学习的：

CloudFront

目标：

Lower Latency
第五步：东京大型仓库要求本地处理

如果要求：

AWS infrastructure
+
local processing
+
very low latency

可以研究：

Outposts
第六步：整个东京 Region 都不能运行

业务要求：

Regional Disaster Protection

考虑：

Tokyo
+
Recovery Region

形成：

Multi-Region Disaster Recovery
第七步：明确业务恢复要求

公司定义：

RTO = 30 minutes

RPO = 5 minutes

意思：

最多允许停：
30分钟

最多允许丢：
约5分钟的数据

然后架构团队才能根据这些业务目标选择相应 DR 策略。

119. 本章重点等级总结
★★★★★ 必须完全掌握
Cloud Computing

Pay-as-you-go

Scalability

Elasticity

High Availability

Region

Availability Zone

Multi-AZ

Multi-Region

Region vs AZ

AZ vs Edge Location

RTO vs RPO
★★★★ 高频理解
Agility

Economies of Scale

Fault Tolerance

Reliability

Resilience

Disaster Recovery

Edge Location

Latency

Data Residency

Data Sovereignty
★★★ 应该理解
CAPEX / OPEX

Vertical Scaling

Horizontal Scaling

Single Point of Failure

Durability

Local Zones

Throughput

Regional Edge Cache
★★～★★★ 业务场景知识
AWS Outposts
★ 题库补充
AWS Wavelength

当前：
CLF-C02官方Out-of-Scope

但：
719题中存在
120. 本章总结

本章最重要的不是记住 AWS 有多少 Region。

真正需要建立的是下面这套因果关系：

传统机房需要提前采购
       │
       ▼
Cloud允许按需获得资源
       │
       ├── Agility
       │
       ├── Pay-as-you-go
       │
       ├── Scalability
       │
       └── Elasticity
       │
       ▼
但Cloud仍然运行在真实基础设施上
       │
       ▼
AWS Global Infrastructure
       │
       ▼
Region
       │
       ▼
Availability Zones
       │
       ├── Single-AZ
       │
       └── Multi-AZ
       │        │
       │        ▼
       │   High Availability
       │
       ▼
Multi-Region
       │
       ▼
Disaster Recovery
       │
       ├── RTO
       └── RPO

与此同时：

全球用户距离Region太远
       │
       ▼
Edge Network


城市级低延迟需求
       │
       ▼
Local Zone


AWS需要直接进入企业机房
       │
       ▼
Outposts

因此整个 AWS 全球基础设施可以用一句话概括：

Region 决定“业务部署在哪个大的地理区域”；Availability Zone 决定“同一个 Region 内如何隔离故障并实现高可用”；Edge、Local Zone 和 Outposts 则把不同类型的 AWS 能力进一步延伸到更靠近用户或企业本地的位置。

而对于 GlobalShop：

Region
决定：
系统在哪

Multi-AZ
决定：
一个AZ坏了还能不能跑

Elasticity
决定：
双十一能不能自动扩大再缩回来

Edge
决定：
全球用户访问内容够不够快

Multi-Region + DR
决定：
极端区域级灾害后怎么恢复

这些概念会直接成为后续 EC2、RDS、S3、VPC、CloudFront、Route 53、Auto Scaling、Elastic Load Balancing 等服务的基础。

下一文件进入：

C2-02-EC2与基础计算服务.md

届时会从最基本的“什么叫 Compute、什么叫服务器、物理机和虚拟机有什么区别”开始，完整展开 EC2 → Instance → AMI → Instance Type → CPU/Memory/Storage → Auto Scaling → Load Balancer → On-Demand/Reserved/Spot/Dedicated → Elastic Beanstalk/Lightsail/Batch，并继续使用 GlobalShop 的普通流量与双十一场景贯穿整个计算体系。

本次会话内容过长，把本地会话内容的主要内容汇总，我要开心另外一个会话窗口，继续任务的执行，请把本地所有的主要内容，特别是我给你的要求，列出来，以及目录章节结构。为下一个会话提供足够的数据信息。

下面这份可以直接复制到新会话里，作为完整的交接上下文。

AWS CLF-C02 学习文档项目：会话交接总结
1. 当前任务目标

用户正在基于一套约 700+ 道 AWS Certified Cloud Practitioner CLF-C02 题库，制作一套完整、系统、可长期阅读的 Markdown 学习文档。

这套资料不是：

单纯的 AWS 服务字典
单纯的 719 道题答案解析
简短的考试速查表
一堆“EC2=服务器、S3=存储”式定义

而是要做成一套真正的 AWS 入门到理解的系统教材。

核心目标：

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
2. 用户提供的源文件

当前会话中用户上传了：

/mnt/data/AWS_CLF_C02_questions.json
/mnt/data/AWS_CLF_C02_questions_raw.txt

JSON 中确认：

exam:
AWS Certified Cloud Practitioner CLF-C02

total_questions:
719

即一共：

719 道题

题目数据中包含：

id
question
options
correct_answer
vote_distribution
comments
explanation

注意：

大部分题目 explanation 为空。
社区评论很多。
correct_answer 是题库记录答案，不自动等于 AWS 官方正确答案。
后续需要结合当前 AWS 官方资料核对。
3. 最重要的用户要求

这些要求在新会话中应继续严格执行。

3.1 默认使用中文

用户希望整套学习资料使用中文。

但 AWS 英文术语必须保留。

3.2 不使用 Writing Block / Canvas / 文档模式

用户明确偏好：

普通聊天 Markdown 输出。

除非用户明确要求，不要使用：

Writing Block
Canvas
文档编辑模式
类似全屏编辑模式

直接在聊天中输出 Markdown。

4. 文档必须是“学习教材”，不是“参考手册”

用户之前明确指出，不接受这种写法：

Amazon DocumentDB

Document Database。
MongoDB compatibility。

关键词：
MongoDB
document database

因为这种内容看似解释了，但实际上无法理解。

以后每个重要技术都必须完成从：

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

的完整学习过程。

5. 每个 AWS 技术的统一讲解模板

以后第一次正式介绍一个重要 AWS 服务时，应尽量包含：

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

不是每个低频服务都一定写 18 节，但核心服务应达到这种解释深度。

6. 英文术语处理规则

这是用户特别强调的要求。

第一次出现英文缩写时，必须同时给：

英文缩写
完整英文
中文
基本解释

例如：

IAM
= Identity and Access Management
= 身份与访问管理
DR
= Disaster Recovery
= 灾难恢复 / 灾备
HA
= High Availability
= 高可用性
CDN
= Content Delivery Network
= 内容分发网络

不能直接写：

Multi-Region → DR / sovereignty

然后默认用户知道 DR 或 sovereignty 是什么。

第一次出现的专业英语也尽量解释，例如：

Latency
延迟

Throughput
吞吐量

Durability
持久性 / 数据耐久性

Workload
工作负载
7. AWS 名字也要解释

用户不只想知道功能，还希望理解 AWS 产品为什么叫这个名字。

例如：

EC2
Amazon Elastic Compute Cloud

Elastic
弹性

Compute
计算

Cloud
云

为什么叫 EC2：

Compute + Cloud
两个 C

EC²
→ EC2

例如：

S3
Simple Storage Service

三个 S
→ S3

例如：

KMS
Key Management Service

这里的 Key
= Encryption Key
= 加密密钥

而不是数据库 Primary Key。

8. 必须使用统一真实业务案例

整套文档统一采用：

GlobalShop 全球电商平台

作为教学案例。

这是虚构业务，不代表 Amazon、淘宝或京东真实架构。

可以理解成：

Amazon / 淘宝 / 京东
的简化教学模型

业务包括：

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

用户分布：

日本
美国
欧洲
东南亚

假设：

平时：
约 100 万日活

双十一：
约 3000 万日活
瞬时流量几十倍

整套资料尽量使用同一个 GlobalShop 场景，不要每个服务都重新发明一个毫无关联的“A公司”。

9. GlobalShop 已经建立的总体架构思路

大致：

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

横向支撑：

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

后续服务都尽量放回这张系统图中解释。

10. 重点等级规则

所有知识点统一使用星级：

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

星级综合考虑：

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

不是单纯按照字符串次数。

11. 当前 AWS 官方资料与题库必须分开

整套资料需要同时使用：

来源 A：当前 AWS 官方资料

用于确定：

AWS 服务现在是什么

当前 CLF-C02 范围

当前产品状态

当前 Support 体系

当前最佳实践
来源 B：719 道题库

用于：

发现考点

发现高频服务

发现题型

发现干扰项

发现旧题

发现争议题
12. 不允许盲目相信题库答案

后续 Module/Chapter 的题目解析必须采用：

题库答案
≠
自动等于当前AWS正确答案

如果存在差异，应写：

【题库答案】
A

【当前 AWS 判断】
C 更合理

【原因】
...

【考试处理】
需要知道旧题为什么这样出，
但不能把旧规则当成当前技术事实。
13. 推荐使用状态标签

后续对旧服务/旧题可以使用：

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

例如：

★ AWS Wavelength

[QUESTION-BANK]
[CURRENT-OUT-OF-SCOPE]

即：

题库里出现，所以要知道；
但不应该和 EC2、S3 一样投入大量备考时间。

14. 用户对官方链接格式的要求

不要写这种：

([AWS Documentation][3])

或者参考文献编号式链接。

用户希望看到可直接阅读的链接，例如：

[AWS 官方文档：AWS Regions](https://docs.aws.amazon.com/...)

即：

直接给出对应超链接。

15. 架构图要求

用户明确表示：

不需要生成图片。

关系、流程和架构尽量使用：

ASCII
Markdown
文字图

例如：

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
16. 解释抽象概念时必须说明“为什么这样叫”

例如 Edge Location。

不能只说：

靠近用户的 AWS 边缘节点。

需要解释：

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

即：

越靠近最终用户网络的一侧，就越接近网络 Edge。

以后 Local Zone、Gateway、Endpoint 等也应采用这种理解方式。

17. C1 已经正式确定

目录：

C1-总述/
│
├── C1-01-阅读说明与资料来源.md
├── C1-02-从传统机房到AWS云.md
├── C1-03-GlobalShop全球电商业务模型.md
├── C1-04-AWS完整技术地图.md
├── C1-05-AWS服务分类与命名规则.md
└── C1-06-CLF-C02考试与719题知识地图.md

C1 已经全部输出完成。

18. C1-01 已完成内容

C1-01-阅读说明与资料来源.md

已经说明：

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
19. C1-02 已完成内容

C1-02-从传统机房到AWS云.md

已经介绍：

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
20. C1-03 已完成内容

C1-03-GlobalShop全球电商业务模型.md

已经定义：

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

并初步映射：

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
21. C1-04 已完成内容

C1-04-AWS完整技术地图.md

已经建立 AWS 的整体分类：

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
22. C1-05 已完成内容

C1-05-AWS服务分类与命名规则.md

已经解释很多反复出现的名称和词：

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

以及：

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
23. C1-06 已完成内容

C1-06-CLF-C02考试与719题知识地图.md

已说明当前官方 CLF-C02 四大领域：

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

也说明：

719 题不适合按 Q1 → Q719 顺序学习。

应该重新分类成：

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
24. C2 的正式目录

用户已经明确给出并固定：

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

这是后续必须严格遵守的目录。

25. C2 的定位

C2 是整个教材最重要的：

AWS 知识体系主体章节

主要回答：

每一个 AWS 技术到底是什么？

不是主要回答：

719 题怎么选。

题库考法可以适当出现，但系统题目解析属于后面的章节。

C2 的重点：

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
26. C2-01 已经完成

C2-01-云计算核心概念与全球基础设施.md

已经正式输出完成。

主要覆盖：

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
27. C2-01 已经使用的重要业务关系

已经建立：

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
28. C2-01 的重要实际例子

东京：

Asia Pacific (Tokyo)

Region Code:
ap-northeast-1

大阪：

Asia Pacific (Osaka)

Region Code:
ap-northeast-3

Tokyo 当前：

4 AZ

Osaka 当前：

3 AZ

C2-01 中已经解释：

Tokyo 是 Region，不是 AZ。

并给出了真实 Tokyo AZ ID 例子：

apne1-az1
apne1-az2
apne1-az3
apne1-az4
29. C2-01 已建立的高频区分
Agility
→ 获取资源、尝试业务更快

Scalability
→ 能否承载越来越大的规模

Elasticity
→ 随当前需求扩大和缩小

High Availability
→ 故障时尽量维持服务

以及：

Availability
→ 现在能不能访问

Durability
→ 数据会不会丢

以及：

RTO
→ 最多允许停多久

RPO
→ 最多允许丢多少时间的数据
30. 下一步明确是 C2-02

新会话应该从：

C2-02-EC2与基础计算服务.md

开始。

不要重新输出 C1，也不要重复 C2-01。

31. C2-02 原定内容

C2-02 应系统讲：

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
32. C2-02 必须继续用 GlobalShop

核心场景：

普通商品服务
User
 ↓
ALB
 ↓
EC2
多 AZ
             ALB
          /       \
         ▼         ▼
      AZ-A       AZ-B
       EC2        EC2
双十一
平时：
20 EC2

流量增加：
Auto Scaling

高峰：
300 EC2

结束：
20 EC2
EC2 + EBS
EC2
 │
 ▼
EBS
系统盘 / 数据盘
EC2 + IAM Role + S3
EC2
 │
 │ IAM Role
 ▼
S3

不能硬编码 Access Key。

题库中 Q4 就直接考这个。

33. C2-02 要特别解释 EC2 为什么叫 Elastic

不要只说：

EC2 是云服务器。

需要从：

传统服务器采购
↓
VM
↓
Cloud VM
↓
EC2
↓
为什么叫Elastic

一步一步讲。

34. C2-02 需要讲清 Virtual Machine

用户是开发背景，但整个文档目标仍然要从入门角度建立概念。

建议讲：

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

ASCII：

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

然后自然过渡到：

EC2 Instance
35. EC2 Instance Type 不要做成型号表

重点不是背：

t3
m5
c7
r6

而是理解：

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

GlobalShop 场景：

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
36. EC2 购买模型是高频重点

此前对 719 题做过字符串统计，EC2 相关非常高频。

已统计到的大致数据：

Amazon EC2
约 175 道题涉及

EC2 购买模型：

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

这些是题干+所有选项中出现的“题目曝光度”级统计，不等于正确答案次数。

因此 C2-02 中需要详细讲选择逻辑。

37. EC2 购买模型核心学习框架
On-Demand
没有长期承诺
需求不确定
短期
实验
Reserved Instances
稳定
可预测
长期
1年/3年承诺类场景

注意当前 AWS RI 具体机制和 Capacity Reservation 不应混淆。

Spot
便宜

但：
可能被AWS中断

适合：
可中断
容错
Batch

不适合：

不能中断的关键数据库
Savings Plans
承诺一定计算消费
换取折扣

灵活度通常高于传统某些RI绑定方式

完整成本比较在 C2-15 深入。

38. 题库已知的一些高频服务曝光度

之前扫描 719 题得到过这些粗略频率。

注意：

这是“题干 + 所有选项中，每题最多计一次”的曝光度统计。

大致：

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

后面 C5/频率模块还需要重新更严谨统计。

39. Gateway 是题库的重要混淆家族

此前扫描：

“Gateway”出现在大约 43 道不同题中。

包括：

Internet Gateway

NAT Gateway

Transit Gateway

Storage Gateway

Virtual Private Gateway

API Gateway

用户之前特别指出：

不要只告诉我“答案是某某 Gateway”。

需要解释：

题目到底想实现什么

为什么这个Gateway满足

其他Gateway分别是什么

为什么不满足

这主要在：

C2-06
C2-07

以及后面的题库解析章节

重点处理。

40. 719 题分类的粗略分析结果

此前已经做过启发式分类，大致：

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

还有一部分需要人工重新分类。

这些数字是辅助设计教材结构，不应当作为最终权威统计。

最终频率模块要重新计算。

41. 题库里的一些已确认实际题型
Q150

问：

由一个或多个 Data Center 组成的环境是什么？

答案方向：

Availability Zone
Q147

问：

EC2 要在某个 geographic area 发生 natural disaster 时仍保持服务。

答案：

multiple AWS Regions

用于理解：

Multi-Region
Q77

问：

能抵抗 failure，并只有 minimal downtime，体现什么 Cloud benefit？

答案：

High Availability

用于区分：

Agility
Elasticity
Scalability
High Availability
Q40

问：

Elasticity in the AWS Cloud refers to...

主要体现：

需求变化时调整资源
需要时容易获得资源

而不是：

EC2 reboot speed

maximum RAM
Q4

问：

EC2 应该如何安全访问 S3？

答案：

EC2 assumes IAM Role

不是：

hard-code access key
Q3

场景：

本地文件存储不够
又希望保留local performance

答案：

AWS Storage Gateway File Gateway

这个题以后需要完整解释：

Hybrid Storage

local cache

S3 backend
42. 当前 AWS 官方状态中的重要变化

后续写作时要注意。

AWS Support

截至 2026 年当前状态已经变化。

当前新的 Support 体系包括：

Basic

Business Support+

Enterprise Support

Unified Operations

旧的：

Developer Support

Business Support

截至 2025-12-02 已不再接受新订阅，并计划 2027-01-01 停止。

Enterprise On-Ramp 也在过渡。

因此：

题库里的旧 Support Plan 题必须标记为历史题 / 当前规则变化。

C2-15 必须重点处理这一点。

43. Storage Gateway 当前变化

当前 AWS 官方资料中：

Amazon FSx File Gateway

已不再向新客户提供。

现有客户可继续使用。

但是旧题库里仍可能出现。

所以后面讲 Storage Gateway 时应区分：

当前AWS
vs
旧题库
44. S3 Glacier 表述注意

后续不要粗暴把：

S3 Glacier

全部说成一个独立的“存储服务”。

当前更准确理解是：

S3 中存在 Glacier 类存储级别，例如：

S3 Glacier Instant Retrieval

S3 Glacier Flexible Retrieval

S3 Glacier Deep Archive

C2-04 中应详细讲。

45. Instance Store 表述注意

此前提醒过：

不要过度简化成：

EC2 一停止，Instance Store 一定丢。

更安全的 CLF 级解释：

Instance Store
= ephemeral local storage

实例停止 / 终止、
底层宿主硬件发生问题等生命周期变化时，
数据可能丢失。

Reboot 本身通常不会导致Instance Store数据丢失。

具体生命周期根据实例类型和操作不同。

C2-02 / C2-04 中应避免过度绝对化。

46. 后续总体章节结构

用户现在明确采用：

C1
C2
...

其中：

C1 = 总述
C2 = AWS知识体系

原来已经商定的后续逻辑没有变化，可以继续映射为：

C3
AWS架构与业务场景

C4
719题分类解析

C5
频率统计与强化

C6
总结与考前复习

如果用户之后给出新的章节名/序号，以用户最新目录为准。

47. 原来约定的“架构与业务场景”章节内容

如果以后用户没有另行修改，可以继续使用：

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
48. 后续 719 题解析章节的要求

必须按知识类型分组，而不是机械：

Q1
Q2
Q3
...
Q719

推荐分类：

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
49. 后续每道题的标准分析模板

建议固定：

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

这点是用户最开始非常强调的。

50. 频率统计章节不能只算“正确答案”

用户明确要求：

包括作为干扰选项出现的次数。

最终应该统计：

总出现次数

题干出现次数

正确选项次数

错误选项次数

经常和哪些服务一起出现

最常成为谁的干扰项

例如：

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
51. 还要统计“业务场景词”

不只是 AWS 名字。

还要分析：

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

因为真正考试模式是：

业务需求
↓
服务选择
52. 最终考前总结应该高度压缩

只有在前面已经详细理解以后，最后才做：

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

不能一开始就这样学。

53. 用户整体写作偏好

写作时：

中文清楚、直接。
不需要“AI腔”。
不要反复说“你刚才指出得对”“我之前写错了”这种对话式道歉。
正文应像正式教材，而不是一直回应用户之前的问题。
不要把用户指出的几个知识点无限放大。
必须全盘覆盖 AWS 体系，而不是围绕用户举的例子偏科。
内容长没有问题，用户明确表示“不嫌长”。
但要通过章节/文件拆分，避免一个 Markdown 几万行。
一个 C2 文件可以很长，只要逻辑完整。
不需要为了省长度而牺牲理解过程。
54. 新会话的推荐开场上下文

可以直接给新会话模型这句话：

继续之前的 AWS CLF-C02 系统教材项目。C1 六个文件已经全部完成，C2-01《云计算核心概念与全球基础设施》也已经完成。现在不要重复前文，直接按照既定要求输出 C2-02-EC2与基础计算服务.md。必须继续使用 GlobalShop 电商案例，所有缩写第一次出现给完整英文和中文，每个核心技术从为什么存在、是什么、特点、业务场景、与其他服务关系、相似服务对比、题库考法来解释，并结合 719 道题和当前 AWS 官方知识体系；当前知识与旧题有差异时明确标记。使用普通 Markdown 聊天输出，不使用 Writing Block/Canvas。

55. 下一步

当前进度：

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

下一篇应直接开始：

C2-02-EC2与基础计算服务.md

不要重新解释项目背景，直接进入正文即可。