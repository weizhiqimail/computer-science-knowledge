# C4-16-KMS-Secrets-加密与凭证题

> 资料口径：本模块以用户提供的 719 道 CLF-C02 题库与前序 C1/C2 项目资料为基础。题库的 `correct_answer`、社区投票与评论用于发现考点和争议，不自动等于当前 AWS 官方结论；本模块没有在生成过程中擅自用外部常识覆盖题库内容。凡现有项目已经明确标记为 `[UPDATED]`、`[LEGACY]`、`[CURRENT-OUT-OF-SCOPE]` 的内容，会继续保留这些状态提示。正式考试前，涉及当前产品状态和 Support 计划等时效信息仍应再对照 AWS 官方页面。

本文件共收录 **10** 道主分类题。范围：KMS、Secrets Manager、ACM、Encryption、Credential。

> 注意：这里的“正确”指题库 `correct_answer` 记录。若题目存在明显争议/历史差异，会明确标记并同时收入 C4-27。

## Q72-KMS-Secrets-加密与凭证题

**题目：** A company wants to establish a schedule for rotating database user credentials. Which AWS service will support this requirement with the LEAST amount of operational overhead?；

**选项：**

- A. AWS Systems Manager
- B. AWS Secrets Manager
- C. AWS License Manager
- D. AWS Managed Services

**主分类：** C4-16 KMS-Secrets-加密与凭证题；

**题库记录答案：** `B`；

**社区投票：** B 100%

### Q72.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q72.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Systems Manager | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为非正确选项 |
| B | AWS Secrets Manager | AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。 | 题库记录为正确选项 |
| C | AWS License Manager | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| D | AWS Managed Services | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |

### Q72.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q74-KMS-Secrets-加密与凭证题

**题目：** Which AWS service is used to provide encryption for Amazon EBS?；

**选项：**

- A. AWS Certificate Manager
- B. AWS Systems Manager
- C. AWS KMS
- D. AWS Config

**主分类：** C4-16 KMS-Secrets-加密与凭证题；

**题库记录答案：** `C`；

**需求/考点标签：** Encryption / Block Storage；

**社区投票：** C 100%

### Q74.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Encryption、Block Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q74.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Certificate Manager | AWS Certificate Manager：供应和管理 TLS/SSL 证书。 | 题库记录为非正确选项 |
| B | AWS Systems Manager | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为非正确选项 |
| C | AWS KMS | AWS KMS：集中创建、控制和使用加密密钥。 | 题库记录为正确选项 |
| D | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |

### Q74.3-为什么题库会这样选

题库记录的正确选项定位为：AWS KMS：集中创建、控制和使用加密密钥。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q158-KMS-Secrets-加密与凭证题

**题目：** A user wants to securely automate the management and rotation of credentials that are shared between applications, while spending the least amount of time on managing tasks. Which AWS service or feature can be used to accomplish this?

**选项：**

- A. AWS CloudHSM
- B. AWS Key Management Service (AWS KMS)
- C. AWS Secrets Manager
- D. Server-side encryption

**主分类：** C4-16 KMS-Secrets-加密与凭证题；

**题库记录答案：** `C`；

**社区投票：** C 100%

### Q158.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q158.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CloudHSM | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | AWS Key Management Service (AWS KMS) | AWS KMS：集中创建、控制和使用加密密钥。 | 题库记录为非正确选项 |
| C | AWS Secrets Manager | AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。 | 题库记录为正确选项 |
| D | Server-side encryption | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q158.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q217-KMS-Secrets-加密与凭证题

**题目：** Which AWS service can a company use to securely store and encrypt passwords for a database?；

**选项：**

- A. AWS Shield
- B. AWS Secrets Manager
- C. AWS Identity and Access Management (IAM)
- D. Amazon Cognito

**主分类：** C4-16 KMS-Secrets-加密与凭证题；

**题库记录答案：** `B`；

**需求/考点标签：** 关系数据库高可用；

**社区投票：** B 100%

### Q217.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**关系数据库高可用**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q217.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |
| B | AWS Secrets Manager | AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。 | 题库记录为正确选项 |
| C | AWS Identity and Access Management (IAM) | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| D | Amazon Cognito | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。 | 题库记录为非正确选项 |

### Q217.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q418-KMS-Secrets-加密与凭证题

**题目：** Which AWS service can a company use to manage encryption keys in the cloud?；

**选项：**

- A. AWS License Manager
- B. AWS Certificate Manager (ACM)
- C. AWS CloudHSM
- D. AWS Directory Service

**主分类：** C4-16 KMS-Secrets-加密与凭证题；

**题库记录答案：** `C`；

**需求/考点标签：** Encryption；

**社区投票：** C 100%

### Q418.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Encryption**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q418.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS License Manager | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| B | AWS Certificate Manager (ACM) | AWS Certificate Manager：供应和管理 TLS/SSL 证书。 | 题库记录为非正确选项 |
| C | AWS CloudHSM | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | AWS Directory Service | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q418.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q423-KMS-Secrets-加密与凭证题

**题目：** Which AWS service or feature allows users to securely store encrypted credentials and retrieve these credentials when required?；

**选项：**

- A. AWS Encryption SDK
- B. AWS Security Hub
- C. AWS Secrets Manager
- D. AWS Artifact

**主分类：** C4-16 KMS-Secrets-加密与凭证题；

**题库记录答案：** `C`；

**需求/考点标签：** Encryption；

**社区投票：** C 100%

### Q423.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Encryption**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q423.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Encryption SDK | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | AWS Security Hub | AWS Security Hub：聚合安全发现并提供安全态势管理。 | 题库记录为非正确选项 |
| C | AWS Secrets Manager | AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。 | 题库记录为正确选项 |
| D | AWS Artifact | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。 | 题库记录为非正确选项 |

### Q423.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q449-KMS-Secrets-加密与凭证题

**题目：** Which AWS service can a company use to manage encryption keys in the cloud?；

**选项：**

- A. AWS License Manager
- B. AWS Certificate Manager (ACM)
- C. AWS CloudHSM
- D. AWS Directory Service

**主分类：** C4-16 KMS-Secrets-加密与凭证题；

**题库记录答案：** `C`；

**需求/考点标签：** Encryption；

**社区投票：** C 100%

### Q449.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Encryption**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q449.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS License Manager | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| B | AWS Certificate Manager (ACM) | AWS Certificate Manager：供应和管理 TLS/SSL 证书。 | 题库记录为非正确选项 |
| C | AWS CloudHSM | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | AWS Directory Service | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q449.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q526-KMS-Secrets-加密与凭证题

**题目：** What is the MOST secure way to store passwords on AWS?；

**选项：**

- A. Store passwords in an Amazon S3 bucket.
- B. Store passwords as AWS CloudFormation parameters.
- C. Store passwords in AWS Storage Gateway.
- D. Store passwords in AWS Secrets Manager.

**主分类：** C4-16 KMS-Secrets-加密与凭证题；

**题库记录答案：** `D`；

**需求/考点标签：** 关系数据库高可用；

**社区投票：** D 100%

### Q526.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**关系数据库高可用**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q526.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Store passwords in an Amazon S3 bucket. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | Store passwords as AWS CloudFormation parameters. | AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。 | 题库记录为非正确选项 |
| C | Store passwords in AWS Storage Gateway. | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为非正确选项 |
| D | Store passwords in AWS Secrets Manager. | AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。 | 题库记录为正确选项 |

### Q526.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q623-KMS-Secrets-加密与凭证题

**题目：** A company wants to securely store Amazon RDS database credentials and automatically rotate user passwords periodically. Which AWS service or capability will meet these requirements?；

**选项：**

- A. Amazon S3
- B. AWS Systems Manager Parameter Store
- C. AWS Secrets Manager
- D. AWS CloudTrail

**主分类：** C4-16 KMS-Secrets-加密与凭证题；

**题库记录答案：** `C`；

**需求/考点标签：** 关系数据库高可用

### Q623.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**关系数据库高可用**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q623.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | AWS Systems Manager Parameter Store | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为非正确选项 |
| C | AWS Secrets Manager | AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。 | 题库记录为正确选项 |
| D | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为非正确选项 |

### Q623.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q636-KMS-Secrets-加密与凭证题

**题目：** Which AWS service integrates with other AWS services to provide the ability to encrypt data at rest?；

**选项：**

- A. AWS Key Management Service (AWS KMS)
- B. AWS Certificate Manager (ACM)
- C. AWS Identity and Access Management (IAM)
- D. AWS Security Hub

**主分类：** C4-16 KMS-Secrets-加密与凭证题；

**题库记录答案：** `A`；

**需求/考点标签：** Encryption；

**社区投票：** A 100%

### Q636.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Encryption**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q636.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Key Management Service (AWS KMS) | AWS KMS：集中创建、控制和使用加密密钥。 | 题库记录为正确选项 |
| B | AWS Certificate Manager (ACM) | AWS Certificate Manager：供应和管理 TLS/SSL 证书。 | 题库记录为非正确选项 |
| C | AWS Identity and Access Management (IAM) | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| D | AWS Security Hub | AWS Security Hub：聚合安全发现并提供安全态势管理。 | 题库记录为非正确选项 |

### Q636.3-为什么题库会这样选

题库记录的正确选项定位为：AWS KMS：集中创建、控制和使用加密密钥。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---
