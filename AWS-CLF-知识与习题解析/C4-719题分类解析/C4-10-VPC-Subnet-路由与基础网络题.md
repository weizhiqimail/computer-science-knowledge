# C4-10-VPC-Subnet-路由与基础网络题

> 资料口径：本模块以用户提供的 719 道 CLF-C02 题库与前序 C1/C2 项目资料为基础。题库的 `correct_answer`、社区投票与评论用于发现考点和争议，不自动等于当前 AWS 官方结论；本模块没有在生成过程中擅自用外部常识覆盖题库内容。凡现有项目已经明确标记为 `[UPDATED]`、`[LEGACY]`、`[CURRENT-OUT-OF-SCOPE]` 的内容，会继续保留这些状态提示。正式考试前，涉及当前产品状态和 Support 计划等时效信息仍应再对照 AWS 官方页面。

本文件共收录 **24** 道主分类题。范围：VPC、Subnet、Route Table、Security Group、NACL、IGW、NAT。

> 注意：这里的“正确”指题库 `correct_answer` 记录。若题目存在明显争议/历史差异，会明确标记并同时收入 C4-27。
## Q24-VPC-Subnet-路由与基础网络题

**题目：** What is the purpose of having an internet gateway within a VPC?

**选项：**

- A. To create a VPN connection to the VPC
- B. To allow communication between the VPC and the internet
- C. To impose bandwidth constraints on internet traffic
- D. To load balance traffic from the internet across Amazon EC2 instances

**主分类：** C4-10 VPC-Subnet-路由与基础网络题
**题库记录答案：** `B`
**需求/考点标签：** Disaster Recovery
**社区投票：** B 100%

### Q24.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Disaster Recovery**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q24.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | To create a VPN connection to the VPC | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。；Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| B | To allow communication between the VPC and the internet | Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为正确选项 |
| C | To impose bandwidth constraints on internet traffic | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | To load balance traffic from the internet across Amazon EC2 instances | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q24.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q59-VPC-Subnet-路由与基础网络题

**题目：** Which of the following services can be used to block network traffic to an instance? (Choose two.)

**选项：**

- A. Security groups
- B. Amazon Virtual Private Cloud (Amazon VPC) flow logs
- C. Network ACLs
- D. Amazon CloudWatch
- E. AWS CloudTrail

**主分类：** C4-10 VPC-Subnet-路由与基础网络题
**题库记录答案：** `AC`
**社区投票：** AC 100%

### Q59.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q59.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Security groups | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为正确选项 |
| B | Amazon Virtual Private Cloud (Amazon VPC) flow logs | Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| C | Network ACLs | Network ACL：Subnet 级无状态网络访问控制列表。 | 题库记录为正确选项 |
| D | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |
| E | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为非正确选项 |

### Q59.3-为什么题库会这样选

题库记录的正确选项定位为：Security Group：资源/ENI 级有状态虚拟防火墙。；Network ACL：Subnet 级无状态网络访问控制列表。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q95-VPC-Subnet-路由与基础网络题

**题目：** Which AWS service or tool can be used to set up a firewall to control traffic going into and coming out of an Amazon VPC subnet?

**选项：**

- A. Security group
- B. AWS WAF
- C. AWS Firewall Manager
- D. Network ACL

**主分类：** C4-10 VPC-Subnet-路由与基础网络题
**题库记录答案：** `D`
**社区投票：** D 77%, C 15%, A 8%

### Q95.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q95.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Security group | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为非正确选项 |
| B | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |
| C | AWS Firewall Manager | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| D | Network ACL | Network ACL：Subnet 级无状态网络访问控制列表。 | 题库记录为正确选项 |

### Q95.3-为什么题库会这样选

题库记录的正确选项定位为：Network ACL：Subnet 级无状态网络访问控制列表。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q119-VPC-Subnet-路由与基础网络题

**题目：** Which AWS service or feature provides log information of the inbound and outbound traffic on network interfaces in a VPC?

**选项：**

- A. Amazon CloudWatch Logs
- B. AWS CloudTrail
- C. VPC Flow Logs
- D. AWS Identity and Access Management (IAM)

**主分类：** C4-10 VPC-Subnet-路由与基础网络题
**题库记录答案：** `C`
**社区投票：** C 100%

### Q119.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q119.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon CloudWatch Logs | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |
| B | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为非正确选项 |
| C | VPC Flow Logs | Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为正确选项 |
| D | AWS Identity and Access Management (IAM) | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |

### Q119.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q150-VPC-Subnet-路由与基础网络题

**题目：** Which option is an environment that consists of one or more data centers?

**选项：**

- A. Amazon CloudFront
- B. Availability Zone
- C. VPC
- D. AWS Outposts

**主分类：** C4-10 VPC-Subnet-路由与基础网络题
**题库记录答案：** `B`
**社区投票：** B 93%, C 7%

### Q150.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q150.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon CloudFront | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。 | 题库记录为非正确选项 |
| B | Availability Zone | Availability Zone 是 Region 内相互隔离的故障域/部署位置。 | 题库记录为正确选项 |
| C | VPC | Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| D | AWS Outposts | AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。 | 题库记录为非正确选项 |

### Q150.3-为什么题库会这样选

题库记录的正确选项定位为：Availability Zone 是 Region 内相互隔离的故障域/部署位置。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q172-VPC-Subnet-路由与基础网络题

**题目：** Which AWS service or tool can be used to capture information about inbound and outbound traffic in an Amazon VPC?

**选项：**

- A. VPC Flow Logs
- B. Amazon Inspector
- C. VPC endpoint services
- D. NAT gateway

**主分类：** C4-10 VPC-Subnet-路由与基础网络题
**题库记录答案：** `A`
**社区投票：** A 100%

### Q172.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q172.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | VPC Flow Logs | Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为正确选项 |
| B | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| C | VPC endpoint services | VPC Endpoint：让 VPC 私网访问支持的 AWS 服务，而无需经过公共 Internet。；Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| D | NAT gateway | NAT Gateway：常用于 Private Subnet 资源主动访问外部 IPv4 网络。 | 题库记录为非正确选项 |

### Q172.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q184-VPC-Subnet-路由与基础网络题

**题目：** Which AWS service or feature can a company use to apply security rules to specific Amazon EC2 instances?

**选项：**

- A. Network ACLs
- B. Security groups
- C. AWS Trusted Advisor
- D. AWS WAF

**主分类：** C4-10 VPC-Subnet-路由与基础网络题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q184.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q184.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Network ACLs | Network ACL：Subnet 级无状态网络访问控制列表。 | 题库记录为非正确选项 |
| B | Security groups | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为正确选项 |
| C | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| D | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |

### Q184.3-为什么题库会这样选

题库记录的正确选项定位为：Security Group：资源/ENI 级有状态虚拟防火墙。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q199-VPC-Subnet-路由与基础网络题

**题目：** A company has an Amazon EC2 instance in a private subnet. The company wants to initiate a connection to the internet to pull operating system updates while preventing traffic from the internet from accessing the EC2 instance. Which AWS managed service allows this?

**选项：**

- A. VPC endpoint
- B. NAT gateway
- C. Amazon PrivateLink
- D. VPC peering

**主分类：** C4-10 VPC-Subnet-路由与基础网络题
**题库记录答案：** `B`
**需求/考点标签：** 私网实例访问互联网
**社区投票：** B 100%

### Q199.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**私网实例访问互联网**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q199.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | VPC endpoint | VPC Endpoint：让 VPC 私网访问支持的 AWS 服务，而无需经过公共 Internet。；Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| B | NAT gateway | NAT Gateway：常用于 Private Subnet 资源主动访问外部 IPv4 网络。 | 题库记录为正确选项 |
| C | Amazon PrivateLink | AWS PrivateLink：通过私有 IP/接口 Endpoint 私下发布和访问服务。 | 题库记录为非正确选项 |
| D | VPC peering | VPC Peering：两个 VPC 之间的点到点私网连接。；Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |

### Q199.3-为什么题库会这样选

题库记录的正确选项定位为：NAT Gateway：常用于 Private Subnet 资源主动访问外部 IPv4 网络。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q214-VPC-Subnet-路由与基础网络题

**题目：** Which of the following acts as an instance-level firewall to control inbound and outbound access?

**选项：**

- A. Network access control list
- B. Security groups
- C. AWS Trusted Advisor
- D. Virtual private gateways

**主分类：** C4-10 VPC-Subnet-路由与基础网络题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q214.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q214.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Network access control list | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Security groups | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为正确选项 |
| C | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| D | Virtual private gateways | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q214.3-为什么题库会这样选

题库记录的正确选项定位为：Security Group：资源/ENI 级有状态虚拟防火墙。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q291-VPC-Subnet-路由与基础网络题

**题目：** Which of the following are features of network ACLs as they are used in the AWS Cloud? (Choose two.)

**选项：**

- A. They are stateless.
- B. They are stateful.
- C. They evaluate all rules before allowing traffic.
- D. They process rules in order, starting with the lowest numbered rule, when deciding whether to allow traffic.
- E. They operate at the instance level.

**主分类：** C4-10 VPC-Subnet-路由与基础网络题
**题库记录答案：** `AD`
**社区投票：** AD 90%, CD 10%

### Q291.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q291.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | They are stateless. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | They are stateful. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | They evaluate all rules before allowing traffic. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | They process rules in order, starting with the lowest numbered rule, when deciding whether to allow traffic. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| E | They operate at the instance level. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q291.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q291.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q310-VPC-Subnet-路由与基础网络题

**题目：** Which AWS service or feature gives users the ability to capture information about network traffic in a VPC?

**选项：**

- A. VPC Flow Logs
- B. Amazon Inspector
- C. VPC route tables
- D. AWS CloudTrail

**主分类：** C4-10 VPC-Subnet-路由与基础网络题
**题库记录答案：** `A`
**社区投票：** A 100%

### Q310.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q310.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | VPC Flow Logs | Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为正确选项 |
| B | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| C | VPC route tables | Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| D | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为非正确选项 |

### Q310.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q340-VPC-Subnet-路由与基础网络题

**题目：** A company created an Amazon EC2 instance. The company wants to control the incoming and outgoing network traffic at the instance level. Which AWS resource or service will meet this requirement?

**选项：**

- A. AWS Shield
- B. Security groups
- C. Network Access Analyzer
- D. VPC endpoints

**主分类：** C4-10 VPC-Subnet-路由与基础网络题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q340.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q340.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |
| B | Security groups | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为正确选项 |
| C | Network Access Analyzer | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | VPC endpoints | VPC Endpoint：让 VPC 私网访问支持的 AWS 服务，而无需经过公共 Internet。；Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |

### Q340.3-为什么题库会这样选

题库记录的正确选项定位为：Security Group：资源/ENI 级有状态虚拟防火墙。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q352-VPC-Subnet-路由与基础网络题

**题目：** Which AWS service or component allows inbound traffic from the internet to access a VPC?

**选项：**

- A. Internet gateway
- B. NAT gateway
- C. AWS WAF
- D. VPC peering

**主分类：** C4-10 VPC-Subnet-路由与基础网络题
**题库记录答案：** `A`
**社区投票：** A 94%, B 6%

### Q352.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q352.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Internet gateway | Internet Gateway：VPC 与公网 Internet 之间的网关组件。 | 题库记录为正确选项 |
| B | NAT gateway | NAT Gateway：常用于 Private Subnet 资源主动访问外部 IPv4 网络。 | 题库记录为非正确选项 |
| C | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |
| D | VPC peering | VPC Peering：两个 VPC 之间的点到点私网连接。；Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |

### Q352.3-为什么题库会这样选

题库记录的正确选项定位为：Internet Gateway：VPC 与公网 Internet 之间的网关组件。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q413-VPC-Subnet-路由与基础网络题

**题目：** A company runs many Amazon EC2 instances in its VPC. The company wants to use a native AWS security resource to control network traffic between certain EC2 instances. Which AWS service or feature will meet this requirement?

**选项：**

- A. Network ACLs
- B. AWS WAF
- C. Amazon GuardDuty
- D. Security groups

**主分类：** C4-10 VPC-Subnet-路由与基础网络题
**题库记录答案：** `D`
**社区投票：** D 100%

### Q413.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q413.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Network ACLs | Network ACL：Subnet 级无状态网络访问控制列表。 | 题库记录为非正确选项 |
| B | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |
| C | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| D | Security groups | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为正确选项 |

### Q413.3-为什么题库会这样选

题库记录的正确选项定位为：Security Group：资源/ENI 级有状态虚拟防火墙。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q414-VPC-Subnet-路由与基础网络题

**题目：** Which of the following can be components of a VPC in the AWS Cloud? (Choose two.)

**选项：**

- A. Amazon API Gateway
- B. Amazon S3 buckets and objects
- C. AWS Storage Gateway
- D. Internet gateway
- E. Subnet

**主分类：** C4-10 VPC-Subnet-路由与基础网络题
**题库记录答案：** `DE`
**社区投票：** DE 100%

### Q414.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q414.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon API Gateway | Amazon API Gateway：托管 API 前门，用于发布、保护和管理 API。 | 题库记录为非正确选项 |
| B | Amazon S3 buckets and objects | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| C | AWS Storage Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为非正确选项 |
| D | Internet gateway | Internet Gateway：VPC 与公网 Internet 之间的网关组件。 | 题库记录为正确选项 |
| E | Subnet | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q414.3-为什么题库会这样选

题库记录的正确选项定位为：Internet Gateway：VPC 与公网 Internet 之间的网关组件。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q417-VPC-Subnet-路由与基础网络题

**题目：** Which AWS service or feature can a user configure to limit network access at the subnet level?

**选项：**

- A. AWS Shield
- B. AWS WAF
- C. Network ACL
- D. Security group

**主分类：** C4-10 VPC-Subnet-路由与基础网络题
**题库记录答案：** `C`
**需求/考点标签：** Configuration Compliance
**社区投票：** C 100%

### Q417.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Configuration Compliance**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q417.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |
| B | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |
| C | Network ACL | Network ACL：Subnet 级无状态网络访问控制列表。 | 题库记录为正确选项 |
| D | Security group | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为非正确选项 |

### Q417.3-为什么题库会这样选

题库记录的正确选项定位为：Network ACL：Subnet 级无状态网络访问控制列表。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q493-VPC-Subnet-路由与基础网络题

**题目：** Which AWS tool or feature acts as a VPC firewall at the subnet level?

**选项：**

- A. Security group
- B. Network ACL
- C. Traffic Mirroring
- D. Internet gateway

**主分类：** C4-10 VPC-Subnet-路由与基础网络题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q493.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q493.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Security group | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为非正确选项 |
| B | Network ACL | Network ACL：Subnet 级无状态网络访问控制列表。 | 题库记录为正确选项 |
| C | Traffic Mirroring | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Internet gateway | Internet Gateway：VPC 与公网 Internet 之间的网关组件。 | 题库记录为非正确选项 |

### Q493.3-为什么题库会这样选

题库记录的正确选项定位为：Network ACL：Subnet 级无状态网络访问控制列表。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q516-VPC-Subnet-路由与基础网络题

**题目：** Which component must be attached to a VPC to enable inbound internet access?

**选项：**

- A. NAT gateway
- B. VPC endpoint
- C. VPN connection
- D. Internet gateway

**主分类：** C4-10 VPC-Subnet-路由与基础网络题
**题库记录答案：** `D`
**社区投票：** D 100%

### Q516.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q516.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | NAT gateway | NAT Gateway：常用于 Private Subnet 资源主动访问外部 IPv4 网络。 | 题库记录为非正确选项 |
| B | VPC endpoint | VPC Endpoint：让 VPC 私网访问支持的 AWS 服务，而无需经过公共 Internet。；Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| C | VPN connection | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。 | 题库记录为非正确选项 |
| D | Internet gateway | Internet Gateway：VPC 与公网 Internet 之间的网关组件。 | 题库记录为正确选项 |

### Q516.3-为什么题库会这样选

题库记录的正确选项定位为：Internet Gateway：VPC 与公网 Internet 之间的网关组件。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q536-VPC-Subnet-路由与基础网络题

**题目：** Which AWS service or feature provides a firewall at the subnet level within a VPC?

**选项：**

- A. Security group
- B. Network ACL
- C. Elastic network interface
- D. AWS WAF

**主分类：** C4-10 VPC-Subnet-路由与基础网络题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q536.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q536.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Security group | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为非正确选项 |
| B | Network ACL | Network ACL：Subnet 级无状态网络访问控制列表。 | 题库记录为正确选项 |
| C | Elastic network interface | 弹性是资源随当前负载自动扩大或缩小。 | 题库记录为非正确选项 |
| D | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |

### Q536.3-为什么题库会这样选

题库记录的正确选项定位为：Network ACL：Subnet 级无状态网络访问控制列表。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q554-VPC-Subnet-路由与基础网络题

**题目：** A company needs a firewall that will control network connections to and from a single Amazon EC2 instance. This firewall will not control network connections to and from other instances that are in the same subnet. Which AWS service or feature can the company use to meet these requirements?

**选项：**

- A. Network ACL
- B. AWS WAF
- C. Route table
- D. Security group

**主分类：** C4-10 VPC-Subnet-路由与基础网络题
**题库记录答案：** `D`
**社区投票：** D 100%

### Q554.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q554.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Network ACL | Network ACL：Subnet 级无状态网络访问控制列表。 | 题库记录为非正确选项 |
| B | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |
| C | Route table | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Security group | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为正确选项 |

### Q554.3-为什么题库会这样选

题库记录的正确选项定位为：Security Group：资源/ENI 级有状态虚拟防火墙。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q581-VPC-Subnet-路由与基础网络题

**题目：** Which AWS service or feature allows a company to have its own logically isolated section of the AWS Cloud?

**选项：**

- A. AWS VPN
- B. Availability Zones
- C. Amazon Virtual Private Cloud (Amazon VPC)
- D. AWS Regions

**主分类：** C4-10 VPC-Subnet-路由与基础网络题
**题库记录答案：** `C`
**社区投票：** C 100%

### Q581.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q581.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS VPN | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。 | 题库记录为非正确选项 |
| B | Availability Zones | Availability Zone 是 Region 内相互隔离的故障域/部署位置。 | 题库记录为非正确选项 |
| C | Amazon Virtual Private Cloud (Amazon VPC) | Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为正确选项 |
| D | AWS Regions | Region 是 AWS 独立的地理区域，内部包含多个 Availability Zone。 | 题库记录为非正确选项 |

### Q581.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q604-VPC-Subnet-路由与基础网络题

**题目：** Which VPC component can a company use to set up a virtual firewall at the Amazon EC2 instance level?

**选项：**

- A. Network ACL
- B. Security group
- C. Route table
- D. NAT gateway

**主分类：** C4-10 VPC-Subnet-路由与基础网络题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q604.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q604.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Network ACL | Network ACL：Subnet 级无状态网络访问控制列表。 | 题库记录为非正确选项 |
| B | Security group | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为正确选项 |
| C | Route table | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | NAT gateway | NAT Gateway：常用于 Private Subnet 资源主动访问外部 IPv4 网络。 | 题库记录为非正确选项 |

### Q604.3-为什么题库会这样选

题库记录的正确选项定位为：Security Group：资源/ENI 级有状态虚拟防火墙。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q614-VPC-Subnet-路由与基础网络题

**题目：** Which AWS network services or features allow CIDR block notation when providing an IP address range? (Choose two.)

**选项：**

- A. Security groups
- B. Amazon Machine Image (AMI)
- C. Network access control list (network ACL)
- D. AWS Budgets
- E. Amazon Elastic Block Store (Amazon EBS)

**主分类：** C4-10 VPC-Subnet-路由与基础网络题
**题库记录答案：** `AC`
**社区投票：** AC 100%

### Q614.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q614.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Security groups | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为正确选项 |
| B | Amazon Machine Image (AMI) | AMI：EC2 启动模板，定义实例启动所需的软件配置。 | 题库记录为非正确选项 |
| C | Network access control list (network ACL) | Network ACL：Subnet 级无状态网络访问控制列表。 | 题库记录为正确选项 |
| D | AWS Budgets | AWS Budgets：设置成本/用量预算阈值和告警。 | 题库记录为非正确选项 |
| E | Amazon Elastic Block Store (Amazon EBS) | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |

### Q614.3-为什么题库会这样选

题库记录的正确选项定位为：Security Group：资源/ENI 级有状态虚拟防火墙。；Network ACL：Subnet 级无状态网络访问控制列表。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q665-VPC-Subnet-路由与基础网络题

**题目：** A company needs stateless network filtering for its VPC. Which AWS service, tool, or feature will meet this requirement?

**选项：**

- A. AWS PrivateLink
- B. Security group
- C. Network access control list (ACL)
- D. AWS WAF

**主分类：** C4-10 VPC-Subnet-路由与基础网络题
**题库记录答案：** `C`
**社区投票：** C 100%

### Q665.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q665.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS PrivateLink | AWS PrivateLink：通过私有 IP/接口 Endpoint 私下发布和访问服务。 | 题库记录为非正确选项 |
| B | Security group | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为非正确选项 |
| C | Network access control list (ACL) | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |

### Q665.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---
