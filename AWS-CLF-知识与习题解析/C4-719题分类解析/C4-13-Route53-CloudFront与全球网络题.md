# C4-13-Route53-CloudFront与全球网络题

> 资料口径：本模块以用户提供的 719 道 CLF-C02 题库与前序 C1/C2 项目资料为基础。题库的 `correct_answer`、社区投票与评论用于发现考点和争议，不自动等于当前 AWS 官方结论；本模块没有在生成过程中擅自用外部常识覆盖题库内容。凡现有项目已经明确标记为 `[UPDATED]`、`[LEGACY]`、`[CURRENT-OUT-OF-SCOPE]` 的内容，会继续保留这些状态提示。正式考试前，涉及当前产品状态和 Support 计划等时效信息仍应再对照 AWS 官方页面。

本文件共收录 **19** 道主分类题。范围：DNS、Route 53、CloudFront、Global Accelerator。

> 注意：这里的“正确”指题库 `correct_answer` 记录。若题目存在明显争议/历史差异，会明确标记并同时收入 C4-27。
## Q49-Route53-CloudFront与全球网络题

**题目：** A company is building an application that needs to deliver images and videos globally with minimal latency. Which approach can the company use to accomplish this in a cost effective manner?

**选项：**

- A. Deliver the content through Amazon CloudFront.
- B. Store the content on Amazon S3 and enable S3 cross-region replication.
- C. Implement a VPN across multiple AWS Regions.
- D. Deliver the content through AWS PrivateLink.

**主分类：** C4-13 Route53-CloudFront与全球网络题
**题库记录答案：** `A`
**社区投票：** A 100%

### Q49.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q49.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Deliver the content through Amazon CloudFront. | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。 | 题库记录为正确选项 |
| B | Store the content on Amazon S3 and enable S3 cross-region replication. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| C | Implement a VPN across multiple AWS Regions. | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。 | 题库记录为非正确选项 |
| D | Deliver the content through AWS PrivateLink. | AWS PrivateLink：通过私有 IP/接口 Endpoint 私下发布和访问服务。 | 题库记录为非正确选项 |

### Q49.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q80-Route53-CloudFront与全球网络题

**题目：** Which AWS service helps deliver highly available applications with fast failover for multi-Region and Multi-AZ architectures?

**选项：**

- A. AWS WAF
- B. AWS Global Accelerator
- C. AWS Shield
- D. AWS Direct Connect

**主分类：** C4-13 Route53-CloudFront与全球网络题
**题库记录答案：** `B`
**需求/考点标签：** 关系数据库高可用
**社区投票：** B 100%

### Q80.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**关系数据库高可用**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q80.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |
| B | AWS Global Accelerator | AWS Global Accelerator：利用 AWS 全球网络和 Anycast 静态 IP 改善全球应用访问路径。 | 题库记录为正确选项 |
| C | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |
| D | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为非正确选项 |

### Q80.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Global Accelerator：利用 AWS 全球网络和 Anycast 静态 IP 改善全球应用访问路径。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q85-Route53-CloudFront与全球网络题

**题目：** Which AWS service enables companies to deploy an application close to end users?

**选项：**

- A. Amazon CloudFront
- B. AWS Auto Scaling
- C. AWS AppSync
- D. Amazon Route 53

**主分类：** C4-13 Route53-CloudFront与全球网络题
**题库记录答案：** `A`
**社区投票：** A 100%

### Q85.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q85.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon CloudFront | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。 | 题库记录为正确选项 |
| B | AWS Auto Scaling | EC2 Auto Scaling：根据需求自动增加或减少 EC2 容量。 | 题库记录为非正确选项 |
| C | AWS AppSync | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Amazon Route 53 | Amazon Route 53：AWS 托管 DNS 与 DNS 路由服务。 | 题库记录为非正确选项 |

### Q85.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q86-Route53-CloudFront与全球网络题

**题目：** Which AWS service or feature improves network performance by sending traffic through the AWS worldwide network infrastructure?

**选项：**

- A. Route table
- B. AWS Transit Gateway
- C. AWS Global Accelerator
- D. Amazon VPC

**主分类：** C4-13 Route53-CloudFront与全球网络题
**题库记录答案：** `C`
**社区投票：** C 100%

### Q86.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q86.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Route table | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | AWS Transit Gateway | AWS Transit Gateway：连接多个 VPC 与本地网络的中心 Hub/云路由器。 | 题库记录为非正确选项 |
| C | AWS Global Accelerator | AWS Global Accelerator：利用 AWS 全球网络和 Anycast 静态 IP 改善全球应用访问路径。 | 题库记录为正确选项 |
| D | Amazon VPC | Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |

### Q86.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Global Accelerator：利用 AWS 全球网络和 Anycast 静态 IP 改善全球应用访问路径。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q194-Route53-CloudFront与全球网络题

**题目：** A company needs a content delivery network that provides secure delivery of data, videos, applications, and APIs to users globally with low latency and high transfer speeds. Which AWS service meets these requirements?

**选项：**

- A. Amazon CloudFront
- B. Elastic Load Balancing
- C. Amazon S3
- D. Amazon Elastic Transcoder

**主分类：** C4-13 Route53-CloudFront与全球网络题
**题库记录答案：** `A`
**社区投票：** A 100%

### Q194.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q194.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon CloudFront | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。 | 题库记录为正确选项 |
| B | Elastic Load Balancing | Elastic Load Balancing：在多个后端目标间分发流量并提高可用性。 | 题库记录为非正确选项 |
| C | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | Amazon Elastic Transcoder | 弹性是资源随当前负载自动扩大或缩小。 | 题库记录为非正确选项 |

### Q194.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q208-Route53-CloudFront与全球网络题

**题目：** Which AWS services or features provide high availability and low latency by enabling failover across different AWS Regions? (Choose two.)

**选项：**

- A. Amazon Route 53
- B. Network Load Balancer
- C. Amazon S3 Transfer Acceleration
- D. AWS Global Accelerator
- E. Application Load Balancer

**主分类：** C4-13 Route53-CloudFront与全球网络题
**题库记录答案：** `AD`
**需求/考点标签：** High Availability
**社区投票：** AD 86%, BE 14%

### Q208.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**High Availability**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q208.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Route 53 | Amazon Route 53：AWS 托管 DNS 与 DNS 路由服务。 | 题库记录为正确选项 |
| B | Network Load Balancer | Elastic Load Balancing：在多个后端目标间分发流量并提高可用性。 | 题库记录为非正确选项 |
| C | Amazon S3 Transfer Acceleration | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | AWS Global Accelerator | AWS Global Accelerator：利用 AWS 全球网络和 Anycast 静态 IP 改善全球应用访问路径。 | 题库记录为正确选项 |
| E | Application Load Balancer | Elastic Load Balancing：在多个后端目标间分发流量并提高可用性。 | 题库记录为非正确选项 |

### Q208.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Route 53：AWS 托管 DNS 与 DNS 路由服务。；AWS Global Accelerator：利用 AWS 全球网络和 Anycast 静态 IP 改善全球应用访问路径。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q242-Route53-CloudFront与全球网络题

**题目：** A company wants to create a globally accessible ecommerce platform for its customers. The company wants to use a highly available and scalable DNS web service to connect users to the platform. Which AWS service will meet these requirements?

**选项：**

- A. Amazon EC2
- B. Amazon VPC
- C. Amazon Route 53
- D. Amazon RDS

**主分类：** C4-13 Route53-CloudFront与全球网络题
**题库记录答案：** `C`
**需求/考点标签：** DNS与流量路由
**社区投票：** C 100%

### Q242.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**DNS与流量路由**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q242.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| B | Amazon VPC | Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| C | Amazon Route 53 | Amazon Route 53：AWS 托管 DNS 与 DNS 路由服务。 | 题库记录为正确选项 |
| D | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |

### Q242.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Route 53：AWS 托管 DNS 与 DNS 路由服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q321-Route53-CloudFront与全球网络题

**题目：** Which AWS services make use of global edge locations? (Choose two.)

**选项：**

- A. AWS Fargate
- B. Amazon CloudFront
- C. AWS Global Accelerator
- D. AWS Wavelength
- E. Amazon VPC

**主分类：** C4-13 Route53-CloudFront与全球网络题
**题库记录答案：** `BC`
**需求/考点标签：** 全球静态内容加速
**社区投票：** BC 100%

### Q321.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**全球静态内容加速**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q321.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Fargate | AWS Fargate：为 ECS/EKS 提供不需要管理底层服务器的容器计算能力。 | 题库记录为非正确选项 |
| B | Amazon CloudFront | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。 | 题库记录为正确选项 |
| C | AWS Global Accelerator | AWS Global Accelerator：利用 AWS 全球网络和 Anycast 静态 IP 改善全球应用访问路径。 | 题库记录为正确选项 |
| D | AWS Wavelength | AWS Wavelength：把 AWS 计算/存储靠近 5G 电信网络边缘；项目资料标记为当前范围外题库补充。 | 题库记录为非正确选项 |
| E | Amazon VPC | Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |

### Q321.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。；AWS Global Accelerator：利用 AWS 全球网络和 Anycast 静态 IP 改善全球应用访问路径。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q321.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：wavelength
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q365-Route53-CloudFront与全球网络题

**题目：** What does Amazon CloudFront provide?

**选项：**

- A. Automatic scaling for all resources to power an application from a single unified interface
- B. Secure delivery of data, videos, applications, and APIs to users globally with low latency
- C. Ability to directly manage traffic globally through a variety of routing types, including latency-based routing, geo DNS,
- D. Automatic distribution of incoming application traffic across multiple targets, such as Amazon EC2 instances, containers,

**主分类：** C4-13 Route53-CloudFront与全球网络题
**题库记录答案：** `B`
**需求/考点标签：** 全球静态内容加速
**社区投票：** B 100%

### Q365.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**全球静态内容加速**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q365.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Automatic scaling for all resources to power an application from a single unified interface | 可扩展性关注系统承载更大规模工作负载的能力。 | 题库记录为非正确选项 |
| B | Secure delivery of data, videos, applications, and APIs to users globally with low latency | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Ability to directly manage traffic globally through a variety of routing types, including latency-based routing, geo DNS, | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Automatic distribution of incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q365.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q372-Route53-CloudFront与全球网络题

**题目：** Which benefit of cloud computing gives a company the ability to deploy applications to users all over the world through a network of AWS Regions, Availability Zones, and edge locations?

**选项：**

- A. Economy of scale
- B. Global reach
- C. Agility
- D. High availability

**主分类：** C4-13 Route53-CloudFront与全球网络题
**题库记录答案：** `B`
**需求/考点标签：** 全球静态内容加速
**社区投票：** B 100%

### Q372.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**全球静态内容加速**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q372.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Economy of scale | 可扩展性关注系统承载更大规模工作负载的能力。 | 题库记录为非正确选项 |
| B | Global reach | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Agility | Agility 强调快速获取资源、实验和交付业务。 | 题库记录为非正确选项 |
| D | High availability | 高可用关注组件故障时尽量维持服务可用。 | 题库记录为非正确选项 |

### Q372.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q426-Route53-CloudFront与全球网络题

**题目：** A company hosts its website on Amazon EC2 instances. The company needs to ensure that the website reaches a global audience and provides minimum latency to users. Which AWS service should the company use to meet these requirements?

**选项：**

- A. Amazon Route 53
- B. Amazon CloudFront
- C. Elastic Load Balancing
- D. AWS Lambda

**主分类：** C4-13 Route53-CloudFront与全球网络题
**题库记录答案：** `B`
**需求/考点标签：** Block Storage
**社区投票：** B 100%

### Q426.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Block Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q426.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Route 53 | Amazon Route 53：AWS 托管 DNS 与 DNS 路由服务。 | 题库记录为非正确选项 |
| B | Amazon CloudFront | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。 | 题库记录为正确选项 |
| C | Elastic Load Balancing | Elastic Load Balancing：在多个后端目标间分发流量并提高可用性。 | 题库记录为非正确选项 |
| D | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |

### Q426.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q476-Route53-CloudFront与全球网络题

**题目：** A company is migrating its public website to AWS. The company wants to host the domain name for the website on AWS. Which AWS service should the company use to meet this requirement?

**选项：**

- A. AWS Lambda
- B. Amazon Route 53
- C. Amazon CloudFront
- D. AWS Direct Connect

**主分类：** C4-13 Route53-CloudFront与全球网络题
**题库记录答案：** `B`
**需求/考点标签：** Block Storage
**社区投票：** B 100%

### Q476.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Block Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q476.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| B | Amazon Route 53 | Amazon Route 53：AWS 托管 DNS 与 DNS 路由服务。 | 题库记录为正确选项 |
| C | Amazon CloudFront | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。 | 题库记录为非正确选项 |
| D | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为非正确选项 |

### Q476.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Route 53：AWS 托管 DNS 与 DNS 路由服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q496-Route53-CloudFront与全球网络题

**题目：** A cloud practitioner wants to use a highly available and scalable DNS service for its AWS workload. Which AWS service will meet this requirement?

**选项：**

- A. Amazon Route 53
- B. Amazon Lightsail
- C. AWS Amplify Hosting
- D. Amazon S3

**主分类：** C4-13 Route53-CloudFront与全球网络题
**题库记录答案：** `A`
**需求/考点标签：** DNS与流量路由
**社区投票：** A 100%

### Q496.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**DNS与流量路由**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q496.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Route 53 | Amazon Route 53：AWS 托管 DNS 与 DNS 路由服务。 | 题库记录为正确选项 |
| B | Amazon Lightsail | Amazon Lightsail：面向简单网站/小型应用的简化云平台与可预测套餐。 | 题库记录为非正确选项 |
| C | AWS Amplify Hosting | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q496.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Route 53：AWS 托管 DNS 与 DNS 路由服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q528-Route53-CloudFront与全球网络题

**题目：** Which AWS service provides DNS resolution?

**选项：**

- A. Amazon CloudFront
- B. Amazon VPC
- C. Amazon Route 53
- D. AWS Direct Connect

**主分类：** C4-13 Route53-CloudFront与全球网络题
**题库记录答案：** `C`
**需求/考点标签：** DNS与流量路由
**社区投票：** C 100%

### Q528.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**DNS与流量路由**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q528.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon CloudFront | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。 | 题库记录为非正确选项 |
| B | Amazon VPC | Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| C | Amazon Route 53 | Amazon Route 53：AWS 托管 DNS 与 DNS 路由服务。 | 题库记录为正确选项 |
| D | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为非正确选项 |

### Q528.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Route 53：AWS 托管 DNS 与 DNS 路由服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q597-Route53-CloudFront与全球网络题

**题目：** A company has a website on AWS. The company wants to deliver the website to a worldwide audience and provide low-latency response times for global users. Which AWS service will meet these requirements?

**选项：**

- A. AWS CloudFormation
- B. Amazon CloudFront
- C. Amazon ElastiCache
- D. Amazon DynamoDB

**主分类：** C4-13 Route53-CloudFront与全球网络题
**题库记录答案：** `B`
**需求/考点标签：** Block Storage
**社区投票：** B 100%

### Q597.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Block Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q597.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CloudFormation | AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。 | 题库记录为非正确选项 |
| B | Amazon CloudFront | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。 | 题库记录为正确选项 |
| C | Amazon ElastiCache | Amazon ElastiCache：托管内存缓存，用于降低数据库压力并提高热点数据访问速度。 | 题库记录为非正确选项 |
| D | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |

### Q597.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q643-Route53-CloudFront与全球网络题

**题目：** Which AWS service uses edge locations to cache content?

**选项：**

- A. Amazon Kinesis
- B. Amazon Simple Queue Service (Amazon SQS)
- C. Amazon CloudFront
- D. Amazon Route 53

**主分类：** C4-13 Route53-CloudFront与全球网络题
**题库记录答案：** `C`
**需求/考点标签：** 全球静态内容加速 / 热点数据缓存
**社区投票：** C 100%

### Q643.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**全球静态内容加速、热点数据缓存**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q643.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Kinesis | Amazon Kinesis：实时数据流采集、处理与传输家族。 | 题库记录为非正确选项 |
| B | Amazon Simple Queue Service (Amazon SQS) | Amazon SQS：托管消息队列，用于异步、缓冲和系统解耦。 | 题库记录为非正确选项 |
| C | Amazon CloudFront | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。 | 题库记录为正确选项 |
| D | Amazon Route 53 | Amazon Route 53：AWS 托管 DNS 与 DNS 路由服务。 | 题库记录为非正确选项 |

### Q643.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q663-Route53-CloudFront与全球网络题

**题目：** A company deployed an application in multiple AWS Regions around the world. The company wants to improve the application’s performance and availability. Which AWS service will meet these requirements?

**选项：**

- A. AWS Global Accelerator
- B. Amazon DataZone
- C. AWS Cloud Map
- D. AWS Auto Scaling

**主分类：** C4-13 Route53-CloudFront与全球网络题
**题库记录答案：** `A`
**社区投票：** A 100%

### Q663.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q663.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Global Accelerator | AWS Global Accelerator：利用 AWS 全球网络和 Anycast 静态 IP 改善全球应用访问路径。 | 题库记录为正确选项 |
| B | Amazon DataZone | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | AWS Cloud Map | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Auto Scaling | EC2 Auto Scaling：根据需求自动增加或减少 EC2 容量。 | 题库记录为非正确选项 |

### Q663.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Global Accelerator：利用 AWS 全球网络和 Anycast 静态 IP 改善全球应用访问路径。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q694-Route53-CloudFront与全球网络题

**题目：** A company plans to onboard new employees that will be working remotely. The company needs to set up Windows virtual desktops to create a working environment for the new employees. The employees must be able access the working environment from anywhere and by using their computer or a web browser. Which AWS service or feature will meet these requirements?

**选项：**

- A. Dedicated Hosts
- B. AWS Global Accelerator
- C. Amazon Workspaces
- D. Amazon CloudFront

**主分类：** C4-13 Route53-CloudFront与全球网络题
**题库记录答案：** `C`
**社区投票：** C 100%

### Q694.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q694.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Dedicated Hosts | Dedicated Hosts：客户专用物理服务器，适合许可证/合规等硬件隔离要求。 | 题库记录为非正确选项 |
| B | AWS Global Accelerator | AWS Global Accelerator：利用 AWS 全球网络和 Anycast 静态 IP 改善全球应用访问路径。 | 题库记录为非正确选项 |
| C | Amazon Workspaces | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Amazon CloudFront | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。 | 题库记录为非正确选项 |

### Q694.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q707-Route53-CloudFront与全球网络题

**题目：** A company has deployed several public applications behind Application Load Balancers. The company wants to improve the performance of the applications. Which AWS service will meet these requirements?

**选项：**

- A. AWS Global Accelerator
- B. Amazon Connect
- C. Amazon ElastiCache
- D. Amazon CloudWatch

**主分类：** C4-13 Route53-CloudFront与全球网络题
**题库记录答案：** `A`
**社区投票：** A 100%

### Q707.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q707.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Global Accelerator | AWS Global Accelerator：利用 AWS 全球网络和 Anycast 静态 IP 改善全球应用访问路径。 | 题库记录为正确选项 |
| B | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为非正确选项 |
| C | Amazon ElastiCache | Amazon ElastiCache：托管内存缓存，用于降低数据库压力并提高热点数据访问速度。 | 题库记录为非正确选项 |
| D | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |

### Q707.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Global Accelerator：利用 AWS 全球网络和 Anycast 静态 IP 改善全球应用访问路径。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---
