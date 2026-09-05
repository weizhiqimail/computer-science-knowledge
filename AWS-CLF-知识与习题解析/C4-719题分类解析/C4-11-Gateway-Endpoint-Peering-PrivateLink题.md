# C4-11-Gateway-Endpoint-Peering-PrivateLink题

> 资料口径：本模块以用户提供的 719 道 CLF-C02 题库与前序 C1/C2 项目资料为基础。题库的 `correct_answer`、社区投票与评论用于发现考点和争议，不自动等于当前 AWS 官方结论；本模块没有在生成过程中擅自用外部常识覆盖题库内容。凡现有项目已经明确标记为 `[UPDATED]`、`[LEGACY]`、`[CURRENT-OUT-OF-SCOPE]` 的内容，会继续保留这些状态提示。正式考试前，涉及当前产品状态和 Support 计划等时效信息仍应再对照 AWS 官方页面。

本文件共收录 **3** 道主分类题。范围：VPC Endpoint、PrivateLink、VPC Peering 与各类 Gateway 混淆。

> 注意：这里的“正确”指题库 `correct_answer` 记录。若题目存在明显争议/历史差异，会明确标记并同时收入 C4-27。

## Q327-Gateway-Endpoint-Peering-PrivateLink题

**题目：** Which AWS services or features give users the ability to create a network connection between two VPCs? (Choose two.)；

**选项：**

- A. VPC endpoints
- B. Amazon Route 53
- C. VPC peering
- D. AWS Direct Connect
- E. AWS Transit Gateway

**主分类：** C4-11 Gateway-Endpoint-Peering-PrivateLink题；

**题库记录答案：** `CE`；

**社区投票：** CE 100%

### Q327.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q327.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | VPC endpoints | VPC Endpoint：让 VPC 私网访问支持的 AWS 服务，而无需经过公共 Internet。；Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| B | Amazon Route 53 | Amazon Route 53：AWS 托管 DNS 与 DNS 路由服务。 | 题库记录为非正确选项 |
| C | VPC peering | VPC Peering：两个 VPC 之间的点到点私网连接。；Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为正确选项 |
| D | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为非正确选项 |
| E | AWS Transit Gateway | AWS Transit Gateway：连接多个 VPC 与本地网络的中心 Hub/云路由器。 | 题库记录为正确选项 |

### Q327.3-为什么题库会这样选

题库记录的正确选项定位为：VPC Peering：两个 VPC 之间的点到点私网连接。；Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。；AWS Transit Gateway：连接多个 VPC 与本地网络的中心 Hub/云路由器。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q644-Gateway-Endpoint-Peering-PrivateLink题

**题目：** A company wants to securely access an Amazon S3 bucket from an Amazon EC2 instance without accessing the internet. What should the company use to accomplish this goal?；

**选项：**

- A. VPN connection
- B. Internet gateway
- C. VPC endpoint
- D. NAT gateway

**主分类：** C4-11 Gateway-Endpoint-Peering-PrivateLink题；

**题库记录答案：** `C`；

**需求/考点标签：** Object Storage；

**社区投票：** C 100%

### Q644.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q644.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | VPN connection | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。 | 题库记录为非正确选项 |
| B | Internet gateway | Internet Gateway：VPC 与公网 Internet 之间的网关组件。 | 题库记录为非正确选项 |
| C | VPC endpoint | VPC Endpoint：让 VPC 私网访问支持的 AWS 服务，而无需经过公共 Internet。；Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为正确选项 |
| D | NAT gateway | NAT Gateway：常用于 Private Subnet 资源主动访问外部 IPv4 网络。 | 题库记录为非正确选项 |

### Q644.3-为什么题库会这样选

题库记录的正确选项定位为：VPC Endpoint：让 VPC 私网访问支持的 AWS 服务，而无需经过公共 Internet。；Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q715-Gateway-Endpoint-Peering-PrivateLink题

**题目：** A company wants to connect its supported AWS services and VPCs. The company does not want to expose its internal traffic to the public internet. Which AWS service will meet these requirements?；

**选项：**

- A. Amazon Inspector
- B. AWS PrivateLink
- C. Amazon Connect
- D. AWS Internet Gateway

**主分类：** C4-11 Gateway-Endpoint-Peering-PrivateLink题；

**题库记录答案：** `B`；

**社区投票：** B 100%

### Q715.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q715.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| B | AWS PrivateLink | AWS PrivateLink：通过私有 IP/接口 Endpoint 私下发布和访问服务。 | 题库记录为正确选项 |
| C | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为非正确选项 |
| D | AWS Internet Gateway | Internet Gateway：VPC 与公网 Internet 之间的网关组件。 | 题库记录为非正确选项 |

### Q715.3-为什么题库会这样选

题库记录的正确选项定位为：AWS PrivateLink：通过私有 IP/接口 Endpoint 私下发布和访问服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---
