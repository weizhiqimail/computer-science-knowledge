# C4-17-GuardDuty-Inspector-Macie等安全题

> 资料口径：本模块以用户提供的 719 道 CLF-C02 题库与前序 C1/C2 项目资料为基础。题库的 `correct_answer`、社区投票与评论用于发现考点和争议，不自动等于当前 AWS 官方结论；本模块没有在生成过程中擅自用外部常识覆盖题库内容。凡现有项目已经明确标记为 `[UPDATED]`、`[LEGACY]`、`[CURRENT-OUT-OF-SCOPE]` 的内容，会继续保留这些状态提示。正式考试前，涉及当前产品状态和 Support 计划等时效信息仍应再对照 AWS 官方页面。

本文件共收录 **28** 道主分类题。范围：GuardDuty、Inspector、Macie、Security Hub、Detective、Artifact。

> 注意：这里的“正确”指题库 `correct_answer` 记录。若题目存在明显争议/历史差异，会明确标记并同时收入 C4-27。

## Q2-GuardDuty-Inspector-Macie等安全题

**题目：** A company has deployed applications on Amazon EC2 instances. The company needs to assess application vulnerabilities and must identify infrastructure deployments that do not meet best practices. Which AWS service can the company use to meet these requirements?

**选项：**

- A. AWS Trusted Advisor
- B. Amazon Inspector
- C. AWS Config
- D. Amazon GuardDuty

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题；

**题库记录答案：** `B`；

**需求/考点标签：** 漏洞扫描；

**社区投票：** B 87%, Other 13%

### Q2.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**漏洞扫描**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q2.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| B | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为正确选项 |
| C | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |
| D | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |

### Q2.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q28-GuardDuty-Inspector-Macie等安全题

**题目：** Which AWS service or resource provides answers to the most frequently asked security-related questions that AWS receives from its users?；

**选项：**

- A. AWS Artifact
- B. Amazon Connect
- C. AWS Chatbot
- D. AWS Knowledge Center

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题；

**题库记录答案：** `D`；

**社区投票：** D 93%, A 7%

### Q28.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q28.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Artifact | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。 | 题库记录为非正确选项 |
| B | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为非正确选项 |
| C | AWS Chatbot | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Knowledge Center | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q28.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q32-GuardDuty-Inspector-Macie等安全题

**题目：** A user needs programmatic access to AWS resources through the AWS CLI or the AWS API. Which option will provide the user with the appropriate access?；

**选项：**

- A. Amazon Inspector
- B. Access keys
- C. SSH public keys
- D. AWS Key Management Service (AWS KMS) keys

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题；

**题库记录答案：** `B`；

**社区投票：** B 100%

### Q32.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q32.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| B | Access keys | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | SSH public keys | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Key Management Service (AWS KMS) keys | AWS KMS：集中创建、控制和使用加密密钥。 | 题库记录为非正确选项 |

### Q32.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q37-GuardDuty-Inspector-Macie等安全题

**题目：** A cloud practitioner needs to obtain AWS compliance reports before migrating an environment to the AWS Cloud. How can these reports be generated?；

**选项：**

- A. Contact the AWS Compliance team.
- B. Download the reports from AWS Artifact.
- C. Open a case with AWS Support.
- D. Generate the reports with Amazon Macie.

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题；

**题库记录答案：** `B`；

**需求/考点标签：** 配置变化与合规；

**社区投票：** B 100%

### Q37.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q37.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Contact the AWS Compliance team. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Download the reports from AWS Artifact. | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。 | 题库记录为正确选项 |
| C | Open a case with AWS Support. | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| D | Generate the reports with Amazon Macie. | Amazon Macie：发现和保护 S3 中的敏感数据。 | 题库记录为非正确选项 |

### Q37.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q53-GuardDuty-Inspector-Macie等安全题

**题目：** Which AWS service is a cloud security posture management (CSPM) service that aggregates alerts from various AWS services and partner products in a standardized format?；

**选项：**

- A. AWS Security Hub
- B. AWS Trusted Advisor
- C. Amazon EventBridge
- D. Amazon GuardDuty

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题；

**题库记录答案：** `A`；

**社区投票：** A 100%

### Q53.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q53.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Security Hub | AWS Security Hub：聚合安全发现并提供安全态势管理。 | 题库记录为正确选项 |
| B | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| C | Amazon EventBridge | Amazon EventBridge：事件总线和规则路由服务，用事件来源/模式连接多个目标。 | 题库记录为非正确选项 |
| D | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |

### Q53.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Security Hub：聚合安全发现并提供安全态势管理。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q58-GuardDuty-Inspector-Macie等安全题

**题目：** Which AWS service gives users the ability to discover and protect sensitive data that is stored in Amazon S3 buckets?；

**选项：**

- A. Amazon Macie
- B. Amazon Detective
- C. Amazon GuardDuty
- D. AWS IAM Access Analyzer

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题；

**题库记录答案：** `A`；

**需求/考点标签：** S3敏感数据发现；

**社区投票：** A 100%

### Q58.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**S3敏感数据发现**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q58.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Macie | Amazon Macie：发现和保护 S3 中的敏感数据。 | 题库记录为正确选项 |
| B | Amazon Detective | Amazon Detective：基于安全数据帮助调查潜在安全事件和根因。 | 题库记录为非正确选项 |
| C | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| D | AWS IAM Access Analyzer | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |

### Q58.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Macie：发现和保护 S3 中的敏感数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q84-GuardDuty-Inspector-Macie等安全题

**题目：** What is the best resource for a user to find compliance-related information and reports about AWS?；

**选项：**

- A. AWS Artifact
- B. AWS Marketplace
- C. Amazon Inspector
- D. AWS Support

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题；

**题库记录答案：** `A`；

**需求/考点标签：** 配置变化与合规；

**社区投票：** A 100%

### Q84.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q84.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Artifact | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。 | 题库记录为正确选项 |
| B | AWS Marketplace | AWS Marketplace：查找、购买和部署第三方软件、数据与服务的数字目录。 | 题库记录为非正确选项 |
| C | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| D | AWS Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |

### Q84.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q117-GuardDuty-Inspector-Macie等安全题

**题目：** A company wants an automated process to continuously scan its Amazon EC2 instances for software vulnerabilities. Which AWS service will meet these requirements?；

**选项：**

- A. Amazon GuardDuty
- B. Amazon Inspector
- C. Amazon Detective
- D. Amazon Cognito

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题；

**题库记录答案：** `B`；

**需求/考点标签：** 漏洞扫描；

**社区投票：** B 100%

### Q117.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**漏洞扫描**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q117.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| B | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为正确选项 |
| C | Amazon Detective | Amazon Detective：基于安全数据帮助调查潜在安全事件和根因。 | 题库记录为非正确选项 |
| D | Amazon Cognito | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。 | 题库记录为非正确选项 |

### Q117.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q159-GuardDuty-Inspector-Macie等安全题

**题目：** Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?；

**选项：**

- A. Amazon GuardDuty
- B. Amazon Macie
- C. Amazon Inspector
- D. AWS Shield

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题；

**题库记录答案：** `B`；

**需求/考点标签：** S3敏感数据发现；

**社区投票：** B 100%

### Q159.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**S3敏感数据发现**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q159.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| B | Amazon Macie | Amazon Macie：发现和保护 S3 中的敏感数据。 | 题库记录为正确选项 |
| C | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| D | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |

### Q159.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Macie：发现和保护 S3 中的敏感数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q174-GuardDuty-Inspector-Macie等安全题

**题目：** Which AWS service can be used to retrieve compliance reports on demand?；

**选项：**

- A. AWS Secrets Manager
- B. AWS Artifact
- C. AWS Security Hub
- D. AWS Certificate Manager

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题；

**题库记录答案：** `B`；

**需求/考点标签：** 配置变化与合规；

**社区投票：** B 100%

### Q174.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q174.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Secrets Manager | AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。 | 题库记录为非正确选项 |
| B | AWS Artifact | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。 | 题库记录为正确选项 |
| C | AWS Security Hub | AWS Security Hub：聚合安全发现并提供安全态势管理。 | 题库记录为非正确选项 |
| D | AWS Certificate Manager | AWS Certificate Manager：供应和管理 TLS/SSL 证书。 | 题库记录为非正确选项 |

### Q174.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q175-GuardDuty-Inspector-Macie等安全题

**题目：** Which AWS service enables users to check for vulnerabilities on Amazon EC2 instances by using predefined assessment templates?；

**选项：**

- A. AWS WAF
- B. AWS Trusted Advisor
- C. Amazon Inspector
- D. AWS Shield

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题；

**题库记录答案：** `C`；

**需求/考点标签：** 漏洞扫描；

**社区投票：** C 100%

### Q175.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**漏洞扫描**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q175.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |
| B | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| C | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为正确选项 |
| D | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |

### Q175.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q218-GuardDuty-Inspector-Macie等安全题

**题目：** What can a cloud practitioner use to retrieve AWS security and compliance documents and submit them as evidence to an auditor or regulator?；

**选项：**

- A. AWS Certificate Manager
- B. AWS Systems Manager
- C. AWS Artifact
- D. Amazon Inspector

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题；

**题库记录答案：** `C`；

**需求/考点标签：** 配置变化与合规；

**社区投票：** C 100%

### Q218.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q218.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Certificate Manager | AWS Certificate Manager：供应和管理 TLS/SSL 证书。 | 题库记录为非正确选项 |
| B | AWS Systems Manager | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为非正确选项 |
| C | AWS Artifact | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。 | 题库记录为正确选项 |
| D | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |

### Q218.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q229-GuardDuty-Inspector-Macie等安全题

**题目：** A company hosts a large amount of data in AWS. The company wants to identify if any of the data should be considered sensitive. Which AWS service will meet the requirement?；

**选项：**

- A. Amazon Inspector
- B. Amazon Macie
- C. AWS Identity and Access Management (IAM)
- D. Amazon CloudWatch

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题；

**题库记录答案：** `B`；

**社区投票：** B 100%

### Q229.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q229.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| B | Amazon Macie | Amazon Macie：发现和保护 S3 中的敏感数据。 | 题库记录为正确选项 |
| C | AWS Identity and Access Management (IAM) | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| D | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |

### Q229.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Macie：发现和保护 S3 中的敏感数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q284-GuardDuty-Inspector-Macie等安全题

**题目：** A company uses AWS security services and tools. The company needs a service to help manage the security alerts and must organize the alerts into a single dashboard. Which AWS service should the company use to meet these requirements?

**选项：**

- A. Amazon GuardDuty
- B. Amazon Inspector
- C. Amazon Macie
- D. AWS Security Hub

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题；

**题库记录答案：** `D`；

**社区投票：** D 94%, B 6%

### Q284.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q284.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| B | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| C | Amazon Macie | Amazon Macie：发现和保护 S3 中的敏感数据。 | 题库记录为非正确选项 |
| D | AWS Security Hub | AWS Security Hub：聚合安全发现并提供安全态势管理。 | 题库记录为正确选项 |

### Q284.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Security Hub：聚合安全发现并提供安全态势管理。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q286-GuardDuty-Inspector-Macie等安全题

**题目：** A company uses Amazon S3 to store records that can contain personally identifiable information (PII). The company wants a solution that can monitor all S3 buckets for PII and immediately alert staff about vulnerabilities. Which AWS service will meet these requirements?

**选项：**

- A. Amazon GuardDuty
- B. Amazon Detective
- C. Amazon Macie
- D. AWS Shield

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题；

**题库记录答案：** `C`；

**需求/考点标签：** 漏洞扫描 / 关系数据库高可用；

**社区投票：** C 100%

### Q286.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**漏洞扫描、关系数据库高可用**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q286.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| B | Amazon Detective | Amazon Detective：基于安全数据帮助调查潜在安全事件和根因。 | 题库记录为非正确选项 |
| C | Amazon Macie | Amazon Macie：发现和保护 S3 中的敏感数据。 | 题库记录为正确选项 |
| D | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |

### Q286.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Macie：发现和保护 S3 中的敏感数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q287-GuardDuty-Inspector-Macie等安全题

**题目：** Which AWS service allows users to download security and compliance reports about the AWS infrastructure on demand?；

**选项：**

- A. Amazon GuardDuty
- B. AWS Security Hub
- C. AWS Artifact
- D. AWS Shield

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题；

**题库记录答案：** `C`；

**需求/考点标签：** 配置变化与合规；

**社区投票：** C 100%

### Q287.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q287.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| B | AWS Security Hub | AWS Security Hub：聚合安全发现并提供安全态势管理。 | 题库记录为非正确选项 |
| C | AWS Artifact | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。 | 题库记录为正确选项 |
| D | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |

### Q287.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q393-GuardDuty-Inspector-Macie等安全题

**题目：** A company wants to use machine learning capabilities to analyze log data from its Amazon EC2 instances and efficiently conduct security investigations. Which AWS service will meet these requirements?；

**选项：**

- A. Amazon Inspector
- B. Amazon QuickSight
- C. Amazon Detective -
- D. Amazon GuardDuty

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题；

**题库记录答案：** `C`；

**需求/考点标签：** AI/ML；

**社区投票：** C 100%

### Q393.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**AI/ML**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q393.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| B | Amazon QuickSight | Amazon QuickSight：云端 BI 与可视化分析服务。；Amazon Q：AWS 的生成式 AI 助手家族，用于企业知识和开发者场景。 | 题库记录为非正确选项 |
| C | Amazon Detective - | Amazon Detective：基于安全数据帮助调查潜在安全事件和根因。 | 题库记录为正确选项 |
| D | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |

### Q393.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Detective：基于安全数据帮助调查潜在安全事件和根因。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q416-GuardDuty-Inspector-Macie等安全题

**题目：** A company wants to use a managed service to identify and protect sensitive data that is stored in Amazon S3. Which AWS service will meet these requirements?；

**选项：**

- A. AWS IAM Access Analyzer
- B. Amazon GuardDuty
- C. Amazon Inspector
- D. Amazon Macie

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题；

**题库记录答案：** `D`；

**需求/考点标签：** S3敏感数据发现；

**社区投票：** D 100%

### Q416.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**S3敏感数据发现**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q416.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS IAM Access Analyzer | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| C | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| D | Amazon Macie | Amazon Macie：发现和保护 S3 中的敏感数据。 | 题库记录为正确选项 |

### Q416.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Macie：发现和保护 S3 中的敏感数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q457-GuardDuty-Inspector-Macie等安全题

**题目：** Which AWS service provides users with AWS issued reports, certifications, accreditations, and third-party attestations?；

**选项：**

- A. AWS Artifact
- B. AWS Trusted Advisor
- C. AWS Health Dashboard
- D. AWS Config

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题；

**题库记录答案：** `A`；

**社区投票：** A 100%

### Q457.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q457.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Artifact | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。 | 题库记录为正确选项 |
| B | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| C | AWS Health Dashboard | AWS Health：提供与 AWS 服务事件和账号资源相关的健康信息。 | 题库记录为非正确选项 |
| D | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |

### Q457.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q479-GuardDuty-Inspector-Macie等安全题

**题目：** Which AWS service gives users on-demand, self-service access to AWS compliance control reports?；

**选项：**

- A. AWS Config
- B. Amazon GuardDuty
- C. AWS Trusted Advisor
- D. AWS Artifact

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题；

**题库记录答案：** `D`；

**需求/考点标签：** 配置变化与合规；

**社区投票：** D 100%

### Q479.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q479.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |
| B | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| C | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| D | AWS Artifact | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。 | 题库记录为正确选项 |

### Q479.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q506-GuardDuty-Inspector-Macie等安全题

**题目：** A company needs a threat detection service that will continuously monitor its AWS accounts, workloads, and Amazon S3 buckets for malicious activity and unauthorized behavior. Which AWS service meets these requirements?；

**选项：**

- A. AWS Shield
- B. AWS Firewall Manager
- C. Amazon GuardDuty
- D. Amazon Inspector

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题；

**题库记录答案：** `C`；

**需求/考点标签：** 威胁检测；

**社区投票：** C 100%

### Q506.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**威胁检测**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q506.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |
| B | AWS Firewall Manager | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| C | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为正确选项 |
| D | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |

### Q506.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q519-GuardDuty-Inspector-Macie等安全题

**题目：** An AWS user wants to proactively detect when an instance or account might be compromised or if there are threats from attacks. Which AWS service should the user choose?；

**选项：**

- A. Amazon GuardDuty
- B. AWS WAF
- C. AWS Shield
- D. Amazon Inspector

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题；

**题库记录答案：** `A`；

**社区投票：** A 100%

### Q519.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q519.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为正确选项 |
| B | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |
| C | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |
| D | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |

### Q519.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q541-GuardDuty-Inspector-Macie等安全题

**题目：** A company is requesting Payment Card Industry (PCI) reports that validate the operating effectiveness of AWS security controls. How should the company obtain these reports?；

**选项：**

- A. Contact AWS Support.
- B. Download reports from AWS Artifact.
- C. Download reports from AWS Security Hub.
- D. Contact an AWS technical account manager (TAM).

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题；

**题库记录答案：** `B`；

**社区投票：** B 100%

### Q541.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q541.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Contact AWS Support. | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| B | Download reports from AWS Artifact. | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。 | 题库记录为正确选项 |
| C | Download reports from AWS Security Hub. | AWS Security Hub：聚合安全发现并提供安全态势管理。 | 题库记录为非正确选项 |
| D | Contact an AWS technical account manager (TAM). | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |

### Q541.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q585-GuardDuty-Inspector-Macie等安全题

**题目：** Which group shares responsibility with AWS for security and compliance of AWS accounts and resources?；

**选项：**

- A. Third-party vendors
- B. Customers
- C. Reseller partners
- D. Internet providers

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题；

**题库记录答案：** `B`；

**需求/考点标签：** 配置变化与合规；

**社区投票：** B 100%

### Q585.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q585.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Third-party vendors | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Customers | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Reseller partners | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Internet providers | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q585.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q603-GuardDuty-Inspector-Macie等安全题

**题目：** What is the primary use case for Amazon GuardDuty?；

**选项：**

- A. Prevention of DDoS attacks
- B. Protection against SQL injection attacks
- C. Automatic monitoring for threats to AWS workloads
- D. Automatic provisioning of AWS resources

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题；

**题库记录答案：** `C`；

**需求/考点标签：** 威胁检测；

**社区投票：** C 100%

### Q603.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**威胁检测**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q603.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Prevention of DDoS attacks | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Protection against SQL injection attacks | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Automatic monitoring for threats to AWS workloads | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Automatic provisioning of AWS resources | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q603.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q611-GuardDuty-Inspector-Macie等安全题

**题目：** A company's compliance officer wants to review the AWS Service Organization Control (SOC) reports. Which AWS service or feature should the compliance officer use to complete this task?；

**选项：**

- A. AWS Artifact
- B. AWS Concierge Support
- C. AWS Support
- D. AWS Trusted Advisor

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题；

**题库记录答案：** `A`；

**需求/考点标签：** 配置变化与合规；

**社区投票：** A 100%

### Q611.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q611.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Artifact | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。 | 题库记录为正确选项 |
| B | AWS Concierge Support | 该选项描述 AWS Support/客户支持能力，需要结合题目要求的响应时间或服务级别判断。 | 题库记录为非正确选项 |
| C | AWS Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| D | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |

### Q611.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q655-GuardDuty-Inspector-Macie等安全题

**题目：** To assist companies with Payment Card Industry Data Security Standard (PCI DSS) compliance in the cloud, AWS provides:

**选项：**

- A. physical Inspections of data centers by appointment.
- B. required PCI compliance certifications for any application running on AWS.
- C. an AWS Attestation of Compliance (AOC) report for specific AWS services.
- D. professional PCI compliance services.

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题；

**题库记录答案：** `C`；

**需求/考点标签：** 配置变化与合规

### Q655.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q655.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | physical Inspections of data centers by appointment. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | required PCI compliance certifications for any application running on AWS. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | an AWS Attestation of Compliance (AOC) report for specific AWS services. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | professional PCI compliance services. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q655.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q693-GuardDuty-Inspector-Macie等安全题

**题目：** Which AWS offering can analyze a company’s AWS environment to discover security vulnerabilities on Amazon EC2 instances?；

**选项：**

- A. Amazon Inspector
- B. Amazon Macie
- C. AWS Shield Standard
- D. Security groups

**主分类：** C4-17 GuardDuty-Inspector-Macie等安全题；

**题库记录答案：** `A`；

**需求/考点标签：** 漏洞扫描；

**社区投票：** A 100%

### Q693.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**漏洞扫描**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q693.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为正确选项 |
| B | Amazon Macie | Amazon Macie：发现和保护 S3 中的敏感数据。 | 题库记录为非正确选项 |
| C | AWS Shield Standard | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |
| D | Security groups | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为非正确选项 |

### Q693.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---
