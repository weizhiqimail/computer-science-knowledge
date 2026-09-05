# C4-19-CloudWatch-CloudTrail-Config题

> 资料口径：本模块以用户提供的 719 道 CLF-C02 题库与前序 C1/C2 项目资料为基础。题库的 `correct_answer`、社区投票与评论用于发现考点和争议，不自动等于当前 AWS 官方结论；本模块没有在生成过程中擅自用外部常识覆盖题库内容。凡现有项目已经明确标记为 `[UPDATED]`、`[LEGACY]`、`[CURRENT-OUT-OF-SCOPE]` 的内容，会继续保留这些状态提示。正式考试前，涉及当前产品状态和 Support 计划等时效信息仍应再对照 AWS 官方页面。

本文件共收录 **24** 道主分类题。范围：运行监控、API 审计、资源配置与合规。

> 注意：这里的“正确”指题库 `correct_answer` 记录。若题目存在明显争议/历史差异，会明确标记并同时收入 C4-27。

## Q27-CloudWatch-CloudTrail-Config题

**题目：** A company wants to receive a notification when a specific AWS cost threshold is reached. Which AWS services or tools can the company use to meet this requirement? (Choose two.)；

**选项：**

- A. Amazon Simple Queue Service (Amazon SQS)
- B. AWS Budgets
- C. Cost Explorer
- D. Amazon CloudWatch
- E. AWS Cost and Usage Report

**主分类：** C4-19 CloudWatch-CloudTrail-Config题；

**题库记录答案：** `BD`；

**需求/考点标签：** 预算阈值告警；

**社区投票：** BD 93%, Other 7%

### Q27.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**预算阈值告警**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q27.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Simple Queue Service (Amazon SQS) | Amazon SQS：托管消息队列，用于异步、缓冲和系统解耦。 | 题库记录为非正确选项 |
| B | AWS Budgets | AWS Budgets：设置成本/用量预算阈值和告警。 | 题库记录为正确选项 |
| C | Cost Explorer | AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。 | 题库记录为非正确选项 |
| D | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为正确选项 |
| E | AWS Cost and Usage Report | AWS Cost and Usage Report：提供细粒度成本与使用明细数据。 | 题库记录为非正确选项 |

### Q27.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Budgets：设置成本/用量预算阈值和告警。；Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q41-CloudWatch-CloudTrail-Config题

**题目：** Which service enables customers to audit API calls in their AWS accounts?；

**选项：**

- A. AWS CloudTrail
- B. AWS Trusted Advisor
- C. Amazon Inspector
- D. AWS X-Ray

**主分类：** C4-19 CloudWatch-CloudTrail-Config题；

**题库记录答案：** `A`；

**需求/考点标签：** 谁执行了API操作；

**社区投票：** A 100%

### Q41.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**谁执行了API操作**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q41.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为正确选项 |
| B | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| C | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| D | AWS X-Ray | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q41.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q60-CloudWatch-CloudTrail-Config题

**题目：** Which AWS service can identify when an Amazon EC2 instance was terminated?；

**选项：**

- A. AWS Identity and Access Management (IAM)
- B. AWS CloudTrail
- C. AWS Compute Optimizer
- D. Amazon EventBridge

**主分类：** C4-19 CloudWatch-CloudTrail-Config题；

**题库记录答案：** `B`；

**社区投票：** B 100%

### Q60.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q60.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Identity and Access Management (IAM) | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为正确选项 |
| C | AWS Compute Optimizer | AWS Compute Optimizer：根据历史利用率等数据提供资源规格优化建议。 | 题库记录为非正确选项 |
| D | Amazon EventBridge | Amazon EventBridge：事件总线和规则路由服务，用事件来源/模式连接多个目标。 | 题库记录为非正确选项 |

### Q60.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q111-CloudWatch-CloudTrail-Config题

**题目：** A company needs to track the activity in its AWS accounts, and needs to know when an API call is made against its AWS resources. Which AWS tool or service can be used to meet these requirements?；

**选项：**

- A. Amazon CloudWatch
- B. Amazon Inspector
- C. AWS CloudTrail
- D. AWS IAM

**主分类：** C4-19 CloudWatch-CloudTrail-Config题；

**题库记录答案：** `C`；

**社区投票：** C 100%

### Q111.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q111.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |
| B | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| C | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为正确选项 |
| D | AWS IAM | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |

### Q111.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q155-CloudWatch-CloudTrail-Config题

**题目：** Which AWS service helps users audit API activity across their AWS account?；

**选项：**

- A. AWS CloudTrail
- B. Amazon Inspector
- C. AWS WAF
- D. AWS Config

**主分类：** C4-19 CloudWatch-CloudTrail-Config题；

**题库记录答案：** `A`；

**需求/考点标签：** Audit Trail；

**社区投票：** A 100%

### Q155.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Audit Trail**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q155.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为正确选项 |
| B | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| C | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |
| D | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |

### Q155.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q221-CloudWatch-CloudTrail-Config题

**题目：** Which AWS service is used to track, record, and audit configuration changes made to AWS resources?；

**选项：**

- A. AWS Shield
- B. AWS Config
- C. AWS IAM
- D. Amazon Inspector

**主分类：** C4-19 CloudWatch-CloudTrail-Config题；

**题库记录答案：** `B`；

**需求/考点标签：** 配置变化与合规；

**社区投票：** B 100%

### Q221.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q221.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |
| B | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为正确选项 |
| C | AWS IAM | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| D | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |

### Q221.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Config：记录资源配置与变化，并可按规则检查配置合规性。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q232-CloudWatch-CloudTrail-Config题

**题目：** What can a user accomplish using AWS CloudTrail?；

**选项：**

- A. Generate an IAM user credentials report.
- B. Record API calls made to AWS services.
- C. Assess the compliance of AWS resource configurations with policies and guidelines.
- D. Ensure that Amazon EC2 instances are patched with the latest security updates.

**主分类：** C4-19 CloudWatch-CloudTrail-Config题；

**题库记录答案：** `B`；

**需求/考点标签：** 谁执行了API操作；

**社区投票：** B 100%

### Q232.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**谁执行了API操作**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q232.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Generate an IAM user credentials report. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | Record API calls made to AWS services. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Assess the compliance of AWS resource configurations with policies and guidelines. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Ensure that Amazon EC2 instances are patched with the latest security updates. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q232.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q244-CloudWatch-CloudTrail-Config题

**题目：** A company wants to improve its security posture by reviewing user activity through API calls. Which AWS service will meet this requirement?；

**选项：**

- A. AWS WAF
- B. Amazon Detective
- C. Amazon CloudWatch
- D. AWS CloudTrail

**主分类：** C4-19 CloudWatch-CloudTrail-Config题；

**题库记录答案：** `D`；

**需求/考点标签：** 谁执行了API操作；

**社区投票：** D 100%

### Q244.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**谁执行了API操作**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q244.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |
| B | Amazon Detective | Amazon Detective：基于安全数据帮助调查潜在安全事件和根因。 | 题库记录为非正确选项 |
| C | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |
| D | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为正确选项 |

### Q244.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q314-CloudWatch-CloudTrail-Config题

**题目：** An ecommerce company wants to use Amazon EC2 Auto Scaling to add and remove EC2 instances based on CPU utilization. Which AWS service or feature can initiate an Amazon EC2 Auto Scaling action to achieve this goal?；

**选项：**

- A. Amazon Simple Queue Service (Amazon SQS)
- B. Amazon Simple Notification Service (Amazon SNS)
- C. AWS Systems Manager
- D. Amazon CloudWatch alarm

**主分类：** C4-19 CloudWatch-CloudTrail-Config题；

**题库记录答案：** `D`；

**需求/考点标签：** 运行时指标监控；

**社区投票：** D 100%

### Q314.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**运行时指标监控**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q314.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Simple Queue Service (Amazon SQS) | Amazon SQS：托管消息队列，用于异步、缓冲和系统解耦。 | 题库记录为非正确选项 |
| B | Amazon Simple Notification Service (Amazon SNS) | Amazon SNS：Pub/Sub 消息与通知分发，一个发布可扇出到多个订阅者。 | 题库记录为非正确选项 |
| C | AWS Systems Manager | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为非正确选项 |
| D | Amazon CloudWatch alarm | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为正确选项 |

### Q314.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q324-CloudWatch-CloudTrail-Config题

**题目：** Which mechanism allows developers to access AWS services from application code?；

**选项：**

- A. AWS Software Development Kit
- B. AWS Management Console
- C. AWS CodePipeline
- D. AWS Config

**主分类：** C4-19 CloudWatch-CloudTrail-Config题；

**题库记录答案：** `A`；

**社区投票：** A 100%

### Q324.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q324.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Software Development Kit | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | AWS Management Console | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| C | AWS CodePipeline | AWS CodePipeline：持续交付 Pipeline 编排服务。 | 题库记录为非正确选项 |
| D | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |

### Q324.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q373-CloudWatch-CloudTrail-Config题

**题目：** Which AWS service makes it easier to monitor and troubleshoot application logs and cloud resources?；

**选项：**

- A. Amazon EC2
- B. AWS Identity and Access Management (IAM)
- C. Amazon CloudWatch
- D. AWS CloudTrail

**主分类：** C4-19 CloudWatch-CloudTrail-Config题；

**题库记录答案：** `C`；

**需求/考点标签：** Monitoring；

**社区投票：** C 100%

### Q373.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Monitoring**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q373.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| B | AWS Identity and Access Management (IAM) | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| C | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为正确选项 |
| D | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为非正确选项 |

### Q373.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q378-CloudWatch-CloudTrail-Config题

**题目：** Which AWS service or tool will monitor AWS resources and applications in real time?；

**选项：**

- A. AWS Trusted Advisor
- B. Amazon CloudWatch
- C. AWS CloudTrail
- D. AWS Cost Explorer

**主分类：** C4-19 CloudWatch-CloudTrail-Config题；

**题库记录答案：** `B`；

**需求/考点标签：** Monitoring；

**社区投票：** B 100%

### Q378.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Monitoring**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q378.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| B | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为正确选项 |
| C | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为非正确选项 |
| D | AWS Cost Explorer | AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。 | 题库记录为非正确选项 |

### Q378.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q388-CloudWatch-CloudTrail-Config题

**题目：** A company wants to use AWS Managed Services (AMS) for operational support and wants to understand the scope of AMS. Which AMS feature will meet these requirements?；

**选项：**

- A. Landing zone and network management
- B. Customer application development
- C. DevSecOps pipeline configuration
- D. Application log monitoring

**主分类：** C4-19 CloudWatch-CloudTrail-Config题；

**题库记录答案：** `A`；

**社区投票：** A 80%, D 20%

### Q388.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q388.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Landing zone and network management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Customer application development | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | DevSecOps pipeline configuration | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Application log monitoring | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q388.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q435-CloudWatch-CloudTrail-Config题

**题目：** A company needs to identify who accessed an AWS service and what action was performed for a given time period. Which AWS service should the company use to meet this requirement?；

**选项：**

- A. Amazon CloudWatch
- B. AWS CloudTrail
- C. AWS Security Hub
- D. Amazon Inspector

**主分类：** C4-19 CloudWatch-CloudTrail-Config题；

**题库记录答案：** `B`；

**社区投票：** B 100%

### Q435.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q435.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |
| B | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为正确选项 |
| C | AWS Security Hub | AWS Security Hub：聚合安全发现并提供安全态势管理。 | 题库记录为非正确选项 |
| D | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |

### Q435.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q470-CloudWatch-CloudTrail-Config题

**题目：** Which AWS service can generate information that can be used by external auditors?；

**选项：**

- A. Amazon Cognito
- B. Amazon FSx
- C. AWS Config
- D. Amazon Inspector

**主分类：** C4-19 CloudWatch-CloudTrail-Config题；

**题库记录答案：** `C`；

**需求/考点标签：** Audit Trail；

**社区投票：** C 100%

### Q470.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Audit Trail**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q470.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Cognito | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。 | 题库记录为非正确选项 |
| B | Amazon FSx | Amazon FSx：托管专业文件系统家族，覆盖 Windows/高性能等文件工作负载。 | 题库记录为非正确选项 |
| C | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为正确选项 |
| D | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |

### Q470.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Config：记录资源配置与变化，并可按规则检查配置合规性。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q504-CloudWatch-CloudTrail-Config题

**题目：** Which AWS service or feature supports governance, compliance, and risk auditing of AWS accounts?；

**选项：**

- A. Multi-factor authentication (MFA)
- B. AWS Lambda
- C. Amazon Simple Notification Service (Amazon SNS)
- D. AWS CloudTrail

**主分类：** C4-19 CloudWatch-CloudTrail-Config题；

**题库记录答案：** `D`；

**需求/考点标签：** 配置变化与合规；

**社区投票：** D 100%

### Q504.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q504.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Multi-factor authentication (MFA) | MFA：多因素认证，增强账号登录安全。 | 题库记录为非正确选项 |
| B | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| C | Amazon Simple Notification Service (Amazon SNS) | Amazon SNS：Pub/Sub 消息与通知分发，一个发布可扇出到多个订阅者。 | 题库记录为非正确选项 |
| D | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为正确选项 |

### Q504.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q505-CloudWatch-CloudTrail-Config题

**题目：** Which AWS Cloud design principle is a company using when the company implements AWS CloudTrail?；

**选项：**

- A. Activate traceability.
- B. Use serverless compute architectures.
- C. Perform operations as code.
- D. Go global in minutes.

**主分类：** C4-19 CloudWatch-CloudTrail-Config题；

**题库记录答案：** `A`；

**需求/考点标签：** 谁执行了API操作；

**社区投票：** A 100%

### Q505.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**谁执行了API操作**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q505.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Activate traceability. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Use serverless compute architectures. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Perform operations as code. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Go global in minutes. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q505.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q513-CloudWatch-CloudTrail-Config题

**题目：** A systems administrator wants to monitor the CPU utilization of a company's Amazon EC2 instances. Which AWS service can provide this information?；

**选项：**

- A. AWS Config
- B. AWS Trusted Advisor
- C. AWS CloudTrail
- D. Amazon CloudWatch

**主分类：** C4-19 CloudWatch-CloudTrail-Config题；

**题库记录答案：** `D`；

**需求/考点标签：** 运行时指标监控；

**社区投票：** D 100%

### Q513.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**运行时指标监控**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q513.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |
| B | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| C | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为非正确选项 |
| D | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为正确选项 |

### Q513.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q558-CloudWatch-CloudTrail-Config题

**题目：** A company needs to perform an audit of recent AWS account activity. The audit will investigate who initiated an event and what actions were performed. Which AWS service should the company use to meet these requirements?；

**选项：**

- A. AWS Config
- B. Amazon Rekognition
- C. AWS CloudTrail
- D. Amazon Simple Notification Service (Amazon SNS)

**主分类：** C4-19 CloudWatch-CloudTrail-Config题；

**题库记录答案：** `C`；

**需求/考点标签：** Audit Trail / Event Driven；

**社区投票：** C 100%

### Q558.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Audit Trail、Event Driven**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q558.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |
| B | Amazon Rekognition | Amazon Rekognition：图像和视频分析/计算机视觉服务。 | 题库记录为非正确选项 |
| C | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为正确选项 |
| D | Amazon Simple Notification Service (Amazon SNS) | Amazon SNS：Pub/Sub 消息与通知分发，一个发布可扇出到多个订阅者。 | 题库记录为非正确选项 |

### Q558.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q580-CloudWatch-CloudTrail-Config题

**题目：** Which AWS service or feature gives users the ability to provision AWS infrastructure programmatically?；

**选项：**

- A. AWS Cloud Development Kit (AWS CDK)
- B. Amazon CodeGuru
- C. AWS Config
- D. AWS CodeCommit

**主分类：** C4-19 CloudWatch-CloudTrail-Config题；

**题库记录答案：** `A`；

**社区投票：** A 100%

### Q580.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q580.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Cloud Development Kit (AWS CDK) | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Amazon CodeGuru | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |
| D | AWS CodeCommit | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q580.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q586-CloudWatch-CloudTrail-Config题

**题目：** A company needs an event history of which AWS resources the company has created. Which AWS service will provide this information?；

**选项：**

- A. Amazon CloudWatch
- B. AWS CloudTrail
- C. Amazon Aurora
- D. Amazon EventBridge

**主分类：** C4-19 CloudWatch-CloudTrail-Config题；

**题库记录答案：** `B`；

**需求/考点标签：** Event Driven；

**社区投票：** B 100%

### Q586.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Event Driven**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q586.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |
| B | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为正确选项 |
| C | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为非正确选项 |
| D | Amazon EventBridge | Amazon EventBridge：事件总线和规则路由服务，用事件来源/模式连接多个目标。 | 题库记录为非正确选项 |

### Q586.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q599-CloudWatch-CloudTrail-Config题

**题目：** Which AWS service or feature can be used to monitor for potential disk write spikes on a system that is running on Amazon EC2?；

**选项：**

- A. AWS CloudTrail
- B. AWS Health Dashboard
- C. AWS Trusted Advisor
- D. Amazon CloudWatch

**主分类：** C4-19 CloudWatch-CloudTrail-Config题；

**题库记录答案：** `D`；

**需求/考点标签：** Monitoring

### Q599.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Monitoring**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q599.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为非正确选项 |
| B | AWS Health Dashboard | AWS Health：提供与 AWS 服务事件和账号资源相关的健康信息。 | 题库记录为非正确选项 |
| C | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| D | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为正确选项 |

### Q599.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q612-CloudWatch-CloudTrail-Config题

**题目：** A company has a compliance requirement to record and evaluate configuration changes, as well as perform remediation actions on AWS resources. Which AWS service should the company use?；

**选项：**

- A. AWS Config
- B. AWS Secrets Manager
- C. AWS CloudTrail
- D. AWS Trusted Advisor

**主分类：** C4-19 CloudWatch-CloudTrail-Config题；

**题库记录答案：** `A`；

**需求/考点标签：** 配置变化与合规；

**社区投票：** A 100%

### Q612.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q612.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为正确选项 |
| B | AWS Secrets Manager | AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。 | 题库记录为非正确选项 |
| C | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为非正确选项 |
| D | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |

### Q612.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Config：记录资源配置与变化，并可按规则检查配置合规性。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q654-CloudWatch-CloudTrail-Config题

**题目：** An administrator observed that multiple AWS resources were deleted yesterday. Which AWS service will help identify the cause and determine which user deleted the resources?；

**选项：**

- A. AWS CloudTrail
- B. Amazon Inspector
- C. Amazon GuardDuty
- D. AWS Trusted Advisor

**主分类：** C4-19 CloudWatch-CloudTrail-Config题；

**题库记录答案：** `A`；

**社区投票：** A 100%

### Q654.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q654.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为正确选项 |
| B | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| C | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| D | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |

### Q654.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---
