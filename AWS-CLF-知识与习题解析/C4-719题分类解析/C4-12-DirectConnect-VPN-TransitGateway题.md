# C4-12-DirectConnect-VPN-TransitGateway题

> 资料口径：本模块以用户提供的 719 道 CLF-C02 题库与前序 C1/C2 项目资料为基础。题库的 `correct_answer`、社区投票与评论用于发现考点和争议，不自动等于当前 AWS 官方结论；本模块没有在生成过程中擅自用外部常识覆盖题库内容。凡现有项目已经明确标记为 `[UPDATED]`、`[LEGACY]`、`[CURRENT-OUT-OF-SCOPE]` 的内容，会继续保留这些状态提示。正式考试前，涉及当前产品状态和 Support 计划等时效信息仍应再对照 AWS 官方页面。

本文件共收录 **17** 道主分类题。范围：Direct Connect、VPN、Transit Gateway、本地与多 VPC 连接。

> 注意：这里的“正确”指题库 `correct_answer` 记录。若题目存在明显争议/历史差异，会明确标记并同时收入 C4-27。

## Q21-DirectConnect-VPN-TransitGateway题

**题目：** Which AWS service or feature allows a user to establish a dedicated network connection between a company’s on-premises data center and the AWS Cloud?；

**选项：**

- A. AWS Direct Connect
- B. VPC peering
- C. AWS VPN
- D. Amazon Route 53

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题；

**题库记录答案：** `A`；

**需求/考点标签：** 本地到AWS专线；

**社区投票：** A 100%

### Q21.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**本地到AWS专线**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q21.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为正确选项 |
| B | VPC peering | VPC Peering：两个 VPC 之间的点到点私网连接。；Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| C | AWS VPN | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。 | 题库记录为非正确选项 |
| D | Amazon Route 53 | Amazon Route 53：AWS 托管 DNS 与 DNS 路由服务。 | 题库记录为非正确选项 |

### Q21.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q64-DirectConnect-VPN-TransitGateway题

**题目：** A company wants to provide managed Windows virtual desktops and applications to its remote employees over secure network connections. Which AWS services can the company use to meet these requirements? (Choose two.)；

**选项：**

- A. Amazon Connect
- B. Amazon AppStream 2.0
- C. Amazon WorkSpaces
- D. AWS Site-to-Site VPN
- E. Amazon Elastic Container Service (Amazon ECS)

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题；

**题库记录答案：** `BC`；

**社区投票：** BC 66%, CD 34%

### Q64.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q64.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为非正确选项 |
| B | Amazon AppStream 2.0 | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Amazon WorkSpaces | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | AWS Site-to-Site VPN | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。 | 题库记录为非正确选项 |
| E | Amazon Elastic Container Service (Amazon ECS) | Amazon ECS：AWS 原生托管容器编排服务。 | 题库记录为非正确选项 |

### Q64.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q64.4-⚠-争议/版本提示

- 社区投票分散，最高项仅 66%
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q70-DirectConnect-VPN-TransitGateway题

**题目：** A network engineer needs to build a hybrid cloud architecture connecting on-premises networks to the AWS Cloud using AWS Direct Connect. The company has a few VPCs in a single AWS Region and expects to increase the number of VPCs to hundreds over time. Which AWS service or feature should the engineer use to simplify and scale this connectivity as the VPCs increase in number?

**选项：**

- A. VPC endpoints
- B. AWS Transit Gateway
- C. Amazon Route 53
- D. AWS Secrets Manager

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题；

**题库记录答案：** `B`；

**需求/考点标签：** 本地到AWS专线；

**社区投票：** B 100%

### Q70.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**本地到AWS专线**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q70.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | VPC endpoints | VPC Endpoint：让 VPC 私网访问支持的 AWS 服务，而无需经过公共 Internet。；Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| B | AWS Transit Gateway | AWS Transit Gateway：连接多个 VPC 与本地网络的中心 Hub/云路由器。 | 题库记录为正确选项 |
| C | Amazon Route 53 | Amazon Route 53：AWS 托管 DNS 与 DNS 路由服务。 | 题库记录为非正确选项 |
| D | AWS Secrets Manager | AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。 | 题库记录为非正确选项 |

### Q70.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Transit Gateway：连接多个 VPC 与本地网络的中心 Hub/云路由器。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q73-DirectConnect-VPN-TransitGateway题

**题目：** Which AWS service or feature can be used to create a private connection between an on-premises workload and an AWS Cloud workload?；

**选项：**

- A. Amazon Route 53
- B. Amazon Macie
- C. AWS Direct Connect
- D. AWS PrivateLink

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题；

**题库记录答案：** `C`；

**需求/考点标签：** Hybrid Cloud；

**社区投票：** C 77%, D 23%

### Q73.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q73.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Route 53 | Amazon Route 53：AWS 托管 DNS 与 DNS 路由服务。 | 题库记录为非正确选项 |
| B | Amazon Macie | Amazon Macie：发现和保护 S3 中的敏感数据。 | 题库记录为非正确选项 |
| C | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为正确选项 |
| D | AWS PrivateLink | AWS PrivateLink：通过私有 IP/接口 Endpoint 私下发布和访问服务。 | 题库记录为非正确选项 |

### Q73.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q125-DirectConnect-VPN-TransitGateway题

**题目：** A company wants a unified tool to provide a consistent method to interact with AWS services. Which AWS service or tool will meet this requirement?；

**选项：**

- A. AWS CLI
- B. Amazon Elastic Container Service (Amazon ECS)
- C. AWS Cloud9
- D. AWS Virtual Private Network (AWS VPN)

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题；

**题库记录答案：** `A`；

**社区投票：** A 100%

### Q125.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q125.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CLI | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Amazon Elastic Container Service (Amazon ECS) | Amazon ECS：AWS 原生托管容器编排服务。 | 题库记录为非正确选项 |
| C | AWS Cloud9 | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Virtual Private Network (AWS VPN) | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。 | 题库记录为非正确选项 |

### Q125.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q181-DirectConnect-VPN-TransitGateway题

**题目：** Which AWS services or features enable users to connect on-premises networks to a VPC? (Choose two.)；

**选项：**

- A. AWS VPN
- B. Elastic Load Balancing
- C. AWS Direct Connect
- D. VPC peering
- E. Amazon CloudFront

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题；

**题库记录答案：** `AC`；

**需求/考点标签：** Hybrid Cloud；

**社区投票：** AC 100%

### Q181.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q181.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS VPN | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。 | 题库记录为正确选项 |
| B | Elastic Load Balancing | Elastic Load Balancing：在多个后端目标间分发流量并提高可用性。 | 题库记录为非正确选项 |
| C | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为正确选项 |
| D | VPC peering | VPC Peering：两个 VPC 之间的点到点私网连接。；Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| E | Amazon CloudFront | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。 | 题库记录为非正确选项 |

### Q181.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。；AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q326-DirectConnect-VPN-TransitGateway题

**题目：** A company wants to establish a private network connection between AWS and its corporate network. Which AWS service or feature will meet this requirement?；

**选项：**

- A. Amazon Connect
- B. Amazon Route 53
- C. AWS Direct Connect
- D. VPC peering

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题；

**题库记录答案：** `C`；

**需求/考点标签：** Disaster Recovery；

**社区投票：** C 100%

### Q326.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Disaster Recovery**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q326.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为非正确选项 |
| B | Amazon Route 53 | Amazon Route 53：AWS 托管 DNS 与 DNS 路由服务。 | 题库记录为非正确选项 |
| C | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为正确选项 |
| D | VPC peering | VPC Peering：两个 VPC 之间的点到点私网连接。；Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |

### Q326.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q357-DirectConnect-VPN-TransitGateway题

**题目：** A company needs to connect its on-premises data center to the AWS Cloud. The company needs a dedicated, low-latency connection with consistent network performance. Which AWS service will meet these requirements?；

**选项：**

- A. AWS Global Accelerator
- B. Amazon CloudFront
- C. AWS Direct Connect
- D. AWS Managed VPN

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题；

**题库记录答案：** `C`；

**需求/考点标签：** Hybrid Cloud；

**社区投票：** C 100%

### Q357.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q357.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Global Accelerator | AWS Global Accelerator：利用 AWS 全球网络和 Anycast 静态 IP 改善全球应用访问路径。 | 题库记录为非正确选项 |
| B | Amazon CloudFront | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。 | 题库记录为非正确选项 |
| C | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为正确选项 |
| D | AWS Managed VPN | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。 | 题库记录为非正确选项 |

### Q357.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q443-DirectConnect-VPN-TransitGateway题

**题目：** Which AWS service or feature gives users the ability to connect VPCs and on-premises networks to a central hub?；

**选项：**

- A. Virtual private gateway
- B. AWS Transit Gateway
- C. Internet gateway
- D. Customer gateway

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题；

**题库记录答案：** `B`；

**需求/考点标签：** Hybrid Cloud；

**社区投票：** B 100%

### Q443.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q443.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Virtual private gateway | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | AWS Transit Gateway | AWS Transit Gateway：连接多个 VPC 与本地网络的中心 Hub/云路由器。 | 题库记录为正确选项 |
| C | Internet gateway | Internet Gateway：VPC 与公网 Internet 之间的网关组件。 | 题库记录为非正确选项 |
| D | Customer gateway | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q443.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Transit Gateway：连接多个 VPC 与本地网络的中心 Hub/云路由器。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q445-DirectConnect-VPN-TransitGateway题

**题目：** A company is connecting multiple VPCs and on-premises networks. The company needs to use an AWS service as a cloud router to simplify peering relationships. Which AWS service can the company use to meet this requirement?；

**选项：**

- A. AWS Direct Connect
- B. AWS Transit Gateway
- C. Amazon Connect
- D. Amazon Route 53

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题；

**题库记录答案：** `B`；

**需求/考点标签：** Hybrid Cloud；

**社区投票：** B 86%, A 14%

### Q445.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q445.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为非正确选项 |
| B | AWS Transit Gateway | AWS Transit Gateway：连接多个 VPC 与本地网络的中心 Hub/云路由器。 | 题库记录为正确选项 |
| C | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为非正确选项 |
| D | Amazon Route 53 | Amazon Route 53：AWS 托管 DNS 与 DNS 路由服务。 | 题库记录为非正确选项 |

### Q445.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Transit Gateway：连接多个 VPC 与本地网络的中心 Hub/云路由器。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q466-DirectConnect-VPN-TransitGateway题

**题目：** A company is building AWS architecture to deliver real-time data feeds from an on-premises data center into an application that runs on AWS. The company needs a consistent network connection with minimal latency. What should the company use to connect the application and the data center to meet these requirements?

**选项：**

- A. AWS Direct Connect
- B. Public internet
- C. AWS VPN
- D. Amazon Connect

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题；

**题库记录答案：** `A`；

**需求/考点标签：** Hybrid Cloud；

**社区投票：** A 100%

### Q466.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q466.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为正确选项 |
| B | Public internet | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | AWS VPN | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。 | 题库记录为非正确选项 |
| D | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为非正确选项 |

### Q466.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q471-DirectConnect-VPN-TransitGateway题

**题目：** Which AWS service or feature requires an internet service provider (ISP) and a colocation facility to be implemented?；

**选项：**

- A. AWS VPN
- B. Amazon Connect
- C. AWS Direct Connect
- D. Internet gateway

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题；

**题库记录答案：** `C`

### Q471.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q471.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS VPN | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。 | 题库记录为非正确选项 |
| B | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为非正确选项 |
| C | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为正确选项 |
| D | Internet gateway | Internet Gateway：VPC 与公网 Internet 之间的网关组件。 | 题库记录为非正确选项 |

### Q471.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q547-DirectConnect-VPN-TransitGateway题

**题目：** A company wants to maintain bandwidth throughput and provide a more consistent network experience than public internet- based connections. Which AWS service should the company choose?；

**选项：**

- A. AWS VPN
- B. AWS Direct Connect
- C. Amazon Connect
- D. Amazon CloudFront

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题；

**题库记录答案：** `B`；

**社区投票：** B 80%, D 20%

### Q547.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q547.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS VPN | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。 | 题库记录为非正确选项 |
| B | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为正确选项 |
| C | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为非正确选项 |
| D | Amazon CloudFront | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。 | 题库记录为非正确选项 |

### Q547.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q608-DirectConnect-VPN-TransitGateway题

**题目：** A company wants to set up a secure network connection from on premises to the AWS Cloud within 1 week. Which solution will meet these requirements?；

**选项：**

- A. AWS Direct Connect
- B. Amazon VPC
- C. AWS Site-to-Site VPN
- D. Edge location

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题；

**题库记录答案：** `C`；

**需求/考点标签：** Hybrid Cloud；

**社区投票：** C 100%

### Q608.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q608.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为非正确选项 |
| B | Amazon VPC | Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| C | AWS Site-to-Site VPN | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。 | 题库记录为正确选项 |
| D | Edge location | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q608.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q616-DirectConnect-VPN-TransitGateway题

**题目：** A company needs to set up dedicated network connectivity between its on-premises data center and the AWS Cloud. The network cannot use the public internet. Which AWS service or feature will meet these requirements?；

**选项：**

- A. AWS Transit Gateway
- B. AWS VPN
- C. Amazon CloudFront
- D. AWS Direct Connect

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题；

**题库记录答案：** `D`；

**需求/考点标签：** 本地到AWS专线；

**社区投票：** D 100%

### Q616.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**本地到AWS专线**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q616.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Transit Gateway | AWS Transit Gateway：连接多个 VPC 与本地网络的中心 Hub/云路由器。 | 题库记录为非正确选项 |
| B | AWS VPN | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。 | 题库记录为非正确选项 |
| C | Amazon CloudFront | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。 | 题库记录为非正确选项 |
| D | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为正确选项 |

### Q616.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q630-DirectConnect-VPN-TransitGateway题

**题目：** Which AWS service can create a private network connection from on premises to the AWS Cloud?；

**选项：**

- A. AWS Config
- B. Virtual Private Cloud (Amazon VPC)
- C. AWS Direct Connect
- D. Amazon Route 53

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题；

**题库记录答案：** `C`；

**需求/考点标签：** Hybrid Cloud；

**社区投票：** C 100%

### Q630.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q630.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |
| B | Virtual Private Cloud (Amazon VPC) | Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| C | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为正确选项 |
| D | Amazon Route 53 | Amazon Route 53：AWS 托管 DNS 与 DNS 路由服务。 | 题库记录为非正确选项 |

### Q630.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q653-DirectConnect-VPN-TransitGateway题

**题目：** A company wants to use an AWS networking solution that can act as a centralized gateway between multiple VPCs and on- premises networks. Which AWS service or feature will meet this requirement?；

**选项：**

- A. Gateway VPC endpoint
- B. AWS Direct Connect
- C. AWS Transit Gateway
- D. AWS PrivateLink

**主分类：** C4-12 DirectConnect-VPN-TransitGateway题；

**题库记录答案：** `C`；

**社区投票：** C 100%

### Q653.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q653.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Gateway VPC endpoint | VPC Endpoint：让 VPC 私网访问支持的 AWS 服务，而无需经过公共 Internet。；Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| B | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为非正确选项 |
| C | AWS Transit Gateway | AWS Transit Gateway：连接多个 VPC 与本地网络的中心 Hub/云路由器。 | 题库记录为正确选项 |
| D | AWS PrivateLink | AWS PrivateLink：通过私有 IP/接口 Endpoint 私下发布和访问服务。 | 题库记录为非正确选项 |

### Q653.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Transit Gateway：连接多个 VPC 与本地网络的中心 Hub/云路由器。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---
