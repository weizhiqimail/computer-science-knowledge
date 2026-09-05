# C4-20-Organizations-治理-IaC题

> 资料口径：本模块以用户提供的 719 道 CLF-C02 题库与前序 C1/C2 项目资料为基础。题库的 `correct_answer`、社区投票与评论用于发现考点和争议，不自动等于当前 AWS 官方结论；本模块没有在生成过程中擅自用外部常识覆盖题库内容。凡现有项目已经明确标记为 `[UPDATED]`、`[LEGACY]`、`[CURRENT-OUT-OF-SCOPE]` 的内容，会继续保留这些状态提示。正式考试前，涉及当前产品状态和 Support 计划等时效信息仍应再对照 AWS 官方页面。

本文件共收录 **47** 道主分类题。范围：Organizations、CloudFormation、Systems Manager、Control Tower、Service Catalog、Trusted Advisor。

> 注意：这里的“正确”指题库 `correct_answer` 记录。若题目存在明显争议/历史差异，会明确标记并同时收入 C4-27。
## Q9-Organizations-治理-IaC题

**题目：** Which AWS services or tools can identify rightsizing opportunities for Amazon EC2 instances? (Choose two.)

**选项：**

- A. AWS Cost Explorer
- B. AWS Billing Conductor
- C. Amazon CodeGuru
- D. Amazon SageMaker
- E. AWS Compute Optimizer

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `AE`
**社区投票：** AE 100%

### Q9.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q9.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Cost Explorer | AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。 | 题库记录为正确选项 |
| B | AWS Billing Conductor | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Amazon CodeGuru | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Amazon SageMaker | Amazon SageMaker AI：构建、训练、部署和管理机器学习模型的平台。 | 题库记录为非正确选项 |
| E | AWS Compute Optimizer | AWS Compute Optimizer：根据历史利用率等数据提供资源规格优化建议。 | 题库记录为正确选项 |

### Q9.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。；AWS Compute Optimizer：根据历史利用率等数据提供资源规格优化建议。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q10-Organizations-治理-IaC题

**题目：** Which of the following are benefits of using AWS Trusted Advisor? (Choose two.)

**选项：**

- A. Providing high-performance container orchestration
- B. Creating and rotating encryption keys
- C. Detecting underutilized resources to save costs
- D. Improving security by proactively monitoring the AWS environment
- E. Implementing enforced tagging across AWS resources

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `CD`
**社区投票：** CD 100%

### Q10.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q10.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Providing high-performance container orchestration | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Creating and rotating encryption keys | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Detecting underutilized resources to save costs | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Improving security by proactively monitoring the AWS environment | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| E | Implementing enforced tagging across AWS resources | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q10.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q12-Organizations-治理-IaC题

**题目：** A company wants to manage deployed IT services and govern its infrastructure as code (IaC) templates. Which AWS service will meet this requirement?

**选项：**

- A. AWS Resource Explorer
- B. AWS Service Catalog
- C. AWS Organizations
- D. AWS Systems Manager

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `B`
**需求/考点标签：** IaC
**社区投票：** B 89%, Other 11%

### Q12.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**IaC**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q12.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Resource Explorer | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | AWS Service Catalog | AWS Service Catalog：让企业发布经过批准的云产品/基础设施模板目录。 | 题库记录为正确选项 |
| C | AWS Organizations | AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。 | 题库记录为非正确选项 |
| D | AWS Systems Manager | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为非正确选项 |

### Q12.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Service Catalog：让企业发布经过批准的云产品/基础设施模板目录。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q19-Organizations-治理-IaC题

**题目：** Which AWS service provides the ability to manage infrastructure as code?

**选项：**

- A. AWS CodePipeline
- B. AWS CodeDeploy
- C. AWS Direct Connect
- D. AWS CloudFormation

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `D`
**需求/考点标签：** IaC
**社区投票：** D 100%

### Q19.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**IaC**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q19.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CodePipeline | AWS CodePipeline：持续交付 Pipeline 编排服务。 | 题库记录为非正确选项 |
| B | AWS CodeDeploy | AWS CodeDeploy：自动化应用部署服务；项目资料将其视为题库历史/当前范围需复核项。 | 题库记录为非正确选项 |
| C | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为非正确选项 |
| D | AWS CloudFormation | AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。 | 题库记录为正确选项 |

### Q19.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q19.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：codedeploy
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q22-Organizations-治理-IaC题

**题目：** Which option is a physical location of the AWS global infrastructure?

**选项：**

- A. AWS DataSync
- B. AWS Region
- C. Amazon Connect
- D. AWS Organizations

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q22.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q22.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS DataSync | AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。 | 题库记录为非正确选项 |
| B | AWS Region | Region 是 AWS 独立的地理区域，内部包含多个 Availability Zone。 | 题库记录为正确选项 |
| C | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为非正确选项 |
| D | AWS Organizations | AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。 | 题库记录为非正确选项 |

### Q22.3-为什么题库会这样选

题库记录的正确选项定位为：Region 是 AWS 独立的地理区域，内部包含多个 Availability Zone。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q44-Organizations-治理-IaC题

**题目：** Which AWS service can be used at no additional cost?

**选项：**

- A. Amazon SageMaker
- B. AWS Config
- C. AWS Organizations
- D. Amazon CloudWatch

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `C`
**社区投票：** C 91%, A 9%

### Q44.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q44.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon SageMaker | Amazon SageMaker AI：构建、训练、部署和管理机器学习模型的平台。 | 题库记录为非正确选项 |
| B | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |
| C | AWS Organizations | AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。 | 题库记录为正确选项 |
| D | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |

### Q44.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q51-Organizations-治理-IaC题

**题目：** Which of the following is a software development framework that a company can use to define cloud resources as code and provision the resources through AWS CloudFormation?

**选项：**

- A. AWS CLI
- B. AWS Developer Center
- C. AWS Cloud Development Kit (AWS CDK)
- D. AWS CodeStar

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `C`
**需求/考点标签：** IaC
**社区投票：** C 100%

### Q51.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**IaC**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q51.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CLI | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | AWS Developer Center | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | AWS Cloud Development Kit (AWS CDK) | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | AWS CodeStar | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q51.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q65-Organizations-治理-IaC题

**题目：** A company wants to monitor for misconfigured security groups that are allowing unrestricted access to specific ports. Which AWS service will meet this requirement?

**选项：**

- A. AWS Trusted Advisor
- B. Amazon CloudWatch
- C. Amazon GuardDuty
- D. AWS Health Dashboard

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `A`
**需求/考点标签：** Monitoring / Configuration Compliance
**社区投票：** A 72%, C 23%, B 5%

### Q65.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Monitoring、Configuration Compliance**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q65.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为正确选项 |
| B | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |
| C | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| D | AWS Health Dashboard | AWS Health：提供与 AWS 服务事件和账号资源相关的健康信息。 | 题库记录为非正确选项 |

### Q65.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q78-Organizations-治理-IaC题

**题目：** A developer needs to maintain a development environment infrastructure and a production environment infrastructure in a repeatable fashion. Which AWS service should the developer use to meet these requirements?

**选项：**

- A. AWS Ground Station
- B. AWS Shield
- C. AWS IoT Device Defender
- D. AWS CloudFormation

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `D`
**社区投票：** D 100%

### Q78.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q78.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Ground Station | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |
| C | AWS IoT Device Defender | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS CloudFormation | AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。 | 题库记录为正确选项 |

### Q78.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q78.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：iot device defender
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q100-Organizations-治理-IaC题

**题目：** A company wants to automate infrastructure deployment by using infrastructure as code (IaC). The company wants to scale production stacks so the stacks can be deployed in multiple AWS Regions. Which AWS service will meet these requirements?

**选项：**

- A. Amazon CloudWatch
- B. AWS Config
- C. AWS Trusted Advisor
- D. AWS CloudFormation

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `D`
**需求/考点标签：** IaC
**社区投票：** D 100%

### Q100.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**IaC**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q100.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |
| B | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |
| C | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| D | AWS CloudFormation | AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。 | 题库记录为正确选项 |

### Q100.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q120-Organizations-治理-IaC题

**题目：** A company wants to design a centralized storage system to manage the configuration data and passwords for its critical business applications. Which AWS service or capability will meet these requirements MOST cost-effectively?

**选项：**

- A. AWS Systems Manager Parameter Store
- B. AWS Secrets Manager
- C. AWS Config
- D. Amazon S3

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `A`
**需求/考点标签：** 关系数据库高可用
**社区投票：** A 74%, B 26%

### Q120.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**关系数据库高可用**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q120.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Systems Manager Parameter Store | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为正确选项 |
| B | AWS Secrets Manager | AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。 | 题库记录为非正确选项 |
| C | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |
| D | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q120.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q122-Organizations-治理-IaC题

**题目：** Which AWS service or feature allows users to create new AWS accounts, group multiple accounts to organize workflows, and apply policies to groups of accounts?

**选项：**

- A. AWS Identity and Access Management (IAM)
- B. AWS Trusted Advisor
- C. AWS CloudFormation
- D. AWS Organizations

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `D`
**需求/考点标签：** 工作流编排
**社区投票：** D 83%, A 17%

### Q122.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作流编排**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q122.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Identity and Access Management (IAM) | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| C | AWS CloudFormation | AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。 | 题库记录为非正确选项 |
| D | AWS Organizations | AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。 | 题库记录为正确选项 |

### Q122.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q126-Organizations-治理-IaC题

**题目：** A company needs to evaluate its AWS environment and provide best practice recommendations in five categories: cost, performance, service limits, fault tolerance and security. Which AWS service can the company use to meet these requirements?

**选项：**

- A. AWS Shield
- B. AWS WAF
- C. AWS Trusted Advisor
- D. AWS Service Catalog

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `C`
**需求/考点标签：** Fault Tolerance
**社区投票：** C 100%

### Q126.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Fault Tolerance**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q126.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |
| B | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |
| C | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为正确选项 |
| D | AWS Service Catalog | AWS Service Catalog：让企业发布经过批准的云产品/基础设施模板目录。 | 题库记录为非正确选项 |

### Q126.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q171-Organizations-治理-IaC题

**题目：** Which AWS service should users use to learn about AWS service availability and operations?

**选项：**

- A. Amazon EventBridge
- B. AWS Service Catalog
- C. AWS Control Tower
- D. AWS Health Dashboard

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `D`
**社区投票：** D 92%, B 8%

### Q171.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q171.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon EventBridge | Amazon EventBridge：事件总线和规则路由服务，用事件来源/模式连接多个目标。 | 题库记录为非正确选项 |
| B | AWS Service Catalog | AWS Service Catalog：让企业发布经过批准的云产品/基础设施模板目录。 | 题库记录为非正确选项 |
| C | AWS Control Tower | AWS Control Tower：基于最佳实践建立和治理多账号 Landing Zone。 | 题库记录为非正确选项 |
| D | AWS Health Dashboard | AWS Health：提供与 AWS 服务事件和账号资源相关的健康信息。 | 题库记录为正确选项 |

### Q171.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Health：提供与 AWS 服务事件和账号资源相关的健康信息。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q171.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q187-Organizations-治理-IaC题

**题目：** A company wants to create templates that the company can reuse to deploy multiple AWS resources. Which AWS service or feature can the company use to meet this requirement?

**选项：**

- A. AWS Marketplace
- B. Amazon Machine Image (AMI)
- C. AWS CloudFormation
- D. AWS OpsWorks

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `C`
**社区投票：** C 100%

### Q187.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q187.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Marketplace | AWS Marketplace：查找、购买和部署第三方软件、数据与服务的数字目录。 | 题库记录为非正确选项 |
| B | Amazon Machine Image (AMI) | AMI：EC2 启动模板，定义实例启动所需的软件配置。 | 题库记录为非正确选项 |
| C | AWS CloudFormation | AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。 | 题库记录为正确选项 |
| D | AWS OpsWorks | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q187.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q197-Organizations-治理-IaC题

**题目：** A company needs to centrally configure and manage Amazon VPC security groups across multiple AWS accounts within an organization in AWS Organizations. Which AWS service should the company use to meet these requirements?

**选项：**

- A. AWS Firewall Manager
- B. Amazon GuardDuty
- C. Amazon Detective
- D. AWS WAF

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `A`
**需求/考点标签：** Configuration Compliance / Governance
**社区投票：** A 100%

### Q197.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Configuration Compliance、Governance**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q197.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Firewall Manager | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为正确选项 |
| B | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| C | Amazon Detective | Amazon Detective：基于安全数据帮助调查潜在安全事件和根因。 | 题库记录为非正确选项 |
| D | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |

### Q197.3-为什么题库会这样选

题库记录的正确选项定位为：该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q203-Organizations-治理-IaC题

**题目：** A company needs to engage third-party consultants to help maintain and support its AWS environment and the company’s business needs. Which AWS service or resource will meet these requirements?

**选项：**

- A. AWS Support
- B. AWS Organizations
- C. AWS Service Catalog
- D. AWS Partner Network (APN)

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `D`
**社区投票：** D 100%

### Q203.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q203.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| B | AWS Organizations | AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。 | 题库记录为非正确选项 |
| C | AWS Service Catalog | AWS Service Catalog：让企业发布经过批准的云产品/基础设施模板目录。 | 题库记录为非正确选项 |
| D | AWS Partner Network (APN) | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q203.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q212-Organizations-治理-IaC题

**题目：** Which AWS service allows users to model and provision AWS resources using common programming languages?

**选项：**

- A. AWS CloudFormation
- B. AWS CodePipeline
- C. AWS Cloud Development Kit (AWS CDK)
- D. AWS Systems Manager

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `C`
**社区投票：** C 69%, A 31%

### Q212.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q212.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CloudFormation | AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。 | 题库记录为非正确选项 |
| B | AWS CodePipeline | AWS CodePipeline：持续交付 Pipeline 编排服务。 | 题库记录为非正确选项 |
| C | AWS Cloud Development Kit (AWS CDK) | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | AWS Systems Manager | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为非正确选项 |

### Q212.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q212.4-⚠-争议/版本提示

- 社区投票分散，最高项仅 69%
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q225-Organizations-治理-IaC题

**题目：** A company that has multiple business units wants to centrally manage and govern its AWS Cloud environments. The company wants to automate the creation of AWS accounts, apply service control policies (SCPs), and simplify billing processes. Which AWS service or tool should the company use to meet these requirements?

**选项：**

- A. AWS Organizations
- B. Cost Explorer
- C. AWS Budgets
- D. AWS Trusted Advisor

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `A`
**社区投票：** A 100%

### Q225.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q225.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Organizations | AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。 | 题库记录为正确选项 |
| B | Cost Explorer | AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。 | 题库记录为非正确选项 |
| C | AWS Budgets | AWS Budgets：设置成本/用量预算阈值和告警。 | 题库记录为非正确选项 |
| D | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |

### Q225.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q226-Organizations-治理-IaC题

**题目：** A company is hosting an application in the AWS Cloud. The company wants to verify that underlying AWS services and general AWS infrastructure are operating normally. Which combination of AWS services can the company use to gather the required information? (Choose two.)

**选项：**

- A. AWS Personal Health Dashboard
- B. AWS Systems Manager
- C. AWS Trusted Advisor
- D. AWS Service Health Dashboard
- E. AWS Service Catalog

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `AD`
**社区投票：** AD 100%

### Q226.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q226.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Personal Health Dashboard | AWS Health：提供与 AWS 服务事件和账号资源相关的健康信息。 | 题库记录为正确选项 |
| B | AWS Systems Manager | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为非正确选项 |
| C | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| D | AWS Service Health Dashboard | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| E | AWS Service Catalog | AWS Service Catalog：让企业发布经过批准的云产品/基础设施模板目录。 | 题库记录为非正确选项 |

### Q226.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Health：提供与 AWS 服务事件和账号资源相关的健康信息。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q228-Organizations-治理-IaC题

**题目：** Which cloud concept is demonstrated by using AWS Compute Optimizer?

**选项：**

- A. Security validation
- B. Rightsizing
- C. Elasticity
- D. Global reach

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q228.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q228.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Security validation | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Rightsizing | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Elasticity | 弹性是资源随当前负载自动扩大或缩小。 | 题库记录为非正确选项 |
| D | Global reach | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q228.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q247-Organizations-治理-IaC题

**题目：** A company wants to launch multiple workloads on AWS. Each workload is related to a different business unit. The company wants to separate and track costs for each business unit. Which solution will meet these requirements with the LEAST operational overhead?

**选项：**

- A. Use AWS Organizations and create one account for each business unit.
- B. Use a spreadsheet to control the owners and cost of each resource.
- C. Use an Amazon DynamoDB table to record costs for each business unit.
- D. Use the AWS Billing console to assign owners to resources and track costs.

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `A`
**社区投票：** A 82%, D 18%

### Q247.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q247.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Use AWS Organizations and create one account for each business unit. | AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。 | 题库记录为正确选项 |
| B | Use a spreadsheet to control the owners and cost of each resource. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Use an Amazon DynamoDB table to record costs for each business unit. | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| D | Use the AWS Billing console to assign owners to resources and track costs. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q247.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q247.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q253-Organizations-治理-IaC题

**题目：** A company wants to provision and manage its AWS infrastructure by using the common programming languages Typescript, Python, Java, and .NET. Which AWS service will meet this requirement?

**选项：**

- A. AWS CodeBuild
- B. AWS CloudFormation
- C. AWS CLI
- D. AWS Cloud Development Kit (AWS CDK)

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `D`
**社区投票：** D 100%

### Q253.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q253.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CodeBuild | AWS CodeBuild：托管代码构建与测试服务。 | 题库记录为非正确选项 |
| B | AWS CloudFormation | AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。 | 题库记录为非正确选项 |
| C | AWS CLI | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Cloud Development Kit (AWS CDK) | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q253.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q253.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q260-Organizations-治理-IaC题

**题目：** A company acquired another corporation. The company now has two AWS accounts. Which AWS service or tool can the company use to consolidate the billing for these two accounts?

**选项：**

- A. AWS Systems Manager
- B. AWS Organizations
- C. AWS License Manager
- D. Cost Explorer

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `B`
**需求/考点标签：** Disaster Recovery
**社区投票：** B 96%

### Q260.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Disaster Recovery**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q260.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Systems Manager | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为非正确选项 |
| B | AWS Organizations | AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。 | 题库记录为正确选项 |
| C | AWS License Manager | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| D | Cost Explorer | AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。 | 题库记录为非正确选项 |

### Q260.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q260.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q273-Organizations-治理-IaC题

**题目：** Which of the following are benefits of AWS Trusted Advisor? (Choose two.)

**选项：**

- A. Access to Amazon Simple Queue Service (Amazon SQS)
- B. Cost optimization recommendations
- C. Hourly refresh of the service limit checks
- D. Security checks
- E. AWS Identity and Access Management (IAM) approval management

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `BD`
**社区投票：** BD 100%

### Q273.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q273.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Access to Amazon Simple Queue Service (Amazon SQS) | Amazon SQS：托管消息队列，用于异步、缓冲和系统解耦。 | 题库记录为非正确选项 |
| B | Cost optimization recommendations | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Hourly refresh of the service limit checks | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Security checks | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| E | AWS Identity and Access Management (IAM) approval management | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |

### Q273.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q305-Organizations-治理-IaC题

**题目：** A development team wants to deploy multiple test environments for an application in a fast, repeatable manner. Which AWS service should the team use?

**选项：**

- A. Amazon EC2
- B. AWS CloudFormation
- C. Amazon QuickSight
- D. Amazon Elastic Container Service (Amazon ECS)

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q305.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q305.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| B | AWS CloudFormation | AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。 | 题库记录为正确选项 |
| C | Amazon QuickSight | Amazon QuickSight：云端 BI 与可视化分析服务。；Amazon Q：AWS 的生成式 AI 助手家族，用于企业知识和开发者场景。 | 题库记录为非正确选项 |
| D | Amazon Elastic Container Service (Amazon ECS) | Amazon ECS：AWS 原生托管容器编排服务。 | 题库记录为非正确选项 |

### Q305.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q353-Organizations-治理-IaC题

**题目：** Which AWS service can companies use to create infrastructure from code?

**选项：**

- A. Amazon Elastic Kubernetes Service (Amazon EKS)
- B. AWS Outposts
- C. AWS CodePipeline
- D. AWS CloudFormation

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `D`
**社区投票：** D 100%

### Q353.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q353.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Elastic Kubernetes Service (Amazon EKS) | Amazon EKS：AWS 托管 Kubernetes 控制面。 | 题库记录为非正确选项 |
| B | AWS Outposts | AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。 | 题库记录为非正确选项 |
| C | AWS CodePipeline | AWS CodePipeline：持续交付 Pipeline 编排服务。 | 题库记录为非正确选项 |
| D | AWS CloudFormation | AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。 | 题库记录为正确选项 |

### Q353.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q399-Organizations-治理-IaC题

**题目：** A company has deployed a web application to Amazon EC2 instances. The EC2 instances have low usage. Which AWS service or feature should the company use to rightsize the EC2 instances?

**选项：**

- A. AWS Config
- B. AWS Cost Anomaly Detection
- C. AWS Budgets
- D. AWS Compute Optimizer

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `D`
**社区投票：** D 100%

### Q399.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q399.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |
| B | AWS Cost Anomaly Detection | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | AWS Budgets | AWS Budgets：设置成本/用量预算阈值和告警。 | 题库记录为非正确选项 |
| D | AWS Compute Optimizer | AWS Compute Optimizer：根据历史利用率等数据提供资源规格优化建议。 | 题库记录为正确选项 |

### Q399.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Compute Optimizer：根据历史利用率等数据提供资源规格优化建议。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q405-Organizations-治理-IaC题

**题目：** A company needs to consolidate the billing for multiple AWS accounts. The company needs to use one account to pay on behalf of all the other accounts. Which AWS service or tool should the company use to meet this requirement?

**选项：**

- A. AWS Trusted Advisor
- B. AWS Organizations
- C. AWS Budgets
- D. AWS Service Catalog

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q405.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q405.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| B | AWS Organizations | AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。 | 题库记录为正确选项 |
| C | AWS Budgets | AWS Budgets：设置成本/用量预算阈值和告警。 | 题库记录为非正确选项 |
| D | AWS Service Catalog | AWS Service Catalog：让企业发布经过批准的云产品/基础设施模板目录。 | 题库记录为非正确选项 |

### Q405.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q408-Organizations-治理-IaC题

**题目：** Where can users find examples of AWS Cloud solution designs?

**选项：**

- A. AWS Marketplace
- B. AWS Service Catalog
- C. AWS Architecture Center
- D. AWS Trusted Advisor

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `C`
**社区投票：** C 100%

### Q408.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q408.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Marketplace | AWS Marketplace：查找、购买和部署第三方软件、数据与服务的数字目录。 | 题库记录为非正确选项 |
| B | AWS Service Catalog | AWS Service Catalog：让企业发布经过批准的云产品/基础设施模板目录。 | 题库记录为非正确选项 |
| C | AWS Architecture Center | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |

### Q408.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q412-Organizations-治理-IaC题

**题目：** A company needs to check for IAM access keys that have not been rotated recently. Which AWS service should the company use to meet this requirement?

**选项：**

- A. AWS WAF
- B. AWS Shield
- C. Amazon Cognito
- D. AWS Trusted Advisor

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `D`
**社区投票：** D 100%

### Q412.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q412.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |
| B | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |
| C | Amazon Cognito | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。 | 题库记录为非正确选项 |
| D | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为正确选项 |

### Q412.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q436-Organizations-治理-IaC题

**题目：** A company wants to use a centralized AWS service to enforce compliance with the organizational business standards. The company wants to use an AWS service that can govern and control who can deploy, manage, and decommission AWS resources. Which AWS service will meet these requirements?

**选项：**

- A. Amazon CloudWatch
- B. AWS Service Catalog
- C. Amazon GuardDuty
- D. AWS Security Hub

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `B`
**需求/考点标签：** 配置变化与合规 / 关系数据库高可用
**社区投票：** B 100%

### Q436.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规、关系数据库高可用**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q436.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |
| B | AWS Service Catalog | AWS Service Catalog：让企业发布经过批准的云产品/基础设施模板目录。 | 题库记录为正确选项 |
| C | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| D | AWS Security Hub | AWS Security Hub：聚合安全发现并提供安全态势管理。 | 题库记录为非正确选项 |

### Q436.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Service Catalog：让企业发布经过批准的云产品/基础设施模板目录。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q487-Organizations-治理-IaC题

**题目：** Which AWS service gives users the ability to deploy highly repeatable infrastructure configurations?

**选项：**

- A. AWS CloudFormation
- B. AWS CodeDeploy
- C. AWS CodeBuild
- D. AWS Systems Manager

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `A`
**需求/考点标签：** Configuration Compliance
**社区投票：** A 100%

### Q487.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Configuration Compliance**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q487.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CloudFormation | AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。 | 题库记录为正确选项 |
| B | AWS CodeDeploy | AWS CodeDeploy：自动化应用部署服务；项目资料将其视为题库历史/当前范围需复核项。 | 题库记录为非正确选项 |
| C | AWS CodeBuild | AWS CodeBuild：托管代码构建与测试服务。 | 题库记录为非正确选项 |
| D | AWS Systems Manager | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为非正确选项 |

### Q487.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q487.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：codedeploy
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q488-Organizations-治理-IaC题

**题目：** A company needs to provide customer service by using voice calls and web chat features. Which AWS service should the company use to meet these requirements?

**选项：**

- A. Amazon Aurora
- B. Amazon Connect
- C. Amazon WorkSpaces
- D. AWS Organizations

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q488.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q488.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为非正确选项 |
| B | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为正确选项 |
| C | Amazon WorkSpaces | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Organizations | AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。 | 题库记录为非正确选项 |

### Q488.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Connect：云联络中心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q512-Organizations-治理-IaC题

**题目：** A company wants to manage its cloud resources by using infrastructure as code (IaC) templates. The company needs to meet compliance requirements. Which AWS service should the company use to meet these requirements?

**选项：**

- A. AWS Artifact
- B. AWS Resource Explorer
- C. AWS License Manager
- D. AWS Service Catalog

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `D`
**需求/考点标签：** 配置变化与合规
**社区投票：** D 100%

### Q512.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q512.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Artifact | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。 | 题库记录为非正确选项 |
| B | AWS Resource Explorer | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | AWS License Manager | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| D | AWS Service Catalog | AWS Service Catalog：让企业发布经过批准的云产品/基础设施模板目录。 | 题库记录为正确选项 |

### Q512.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Service Catalog：让企业发布经过批准的云产品/基础设施模板目录。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q517-Organizations-治理-IaC题

**题目：** Which AWS service supports a company's ability to treat infrastructure as code?

**选项：**

- A. AWS CodeDeploy
- B. AWS Elastic Beanstalk
- C. Amazon API Gateway
- D. AWS CloudFormation

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `D`
**需求/考点标签：** IaC
**社区投票：** D 100%

### Q517.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**IaC**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q517.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CodeDeploy | AWS CodeDeploy：自动化应用部署服务；项目资料将其视为题库历史/当前范围需复核项。 | 题库记录为非正确选项 |
| B | AWS Elastic Beanstalk | AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。 | 题库记录为非正确选项 |
| C | Amazon API Gateway | Amazon API Gateway：托管 API 前门，用于发布、保护和管理 API。 | 题库记录为非正确选项 |
| D | AWS CloudFormation | AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。 | 题库记录为正确选项 |

### Q517.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q517.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：codedeploy
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q553-Organizations-治理-IaC题

**题目：** A company is using multiple AWS accounts for different business teams. The finance team wants to receive one bill for all of the company's accounts. Which AWS service or tool should the finance team use to meet this requirement?

**选项：**

- A. AWS Organizations
- B. AWS Trusted Advisor
- C. Cost Explorer
- D. AWS Budgets

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `A`
**社区投票：** A 100%

### Q553.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q553.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Organizations | AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。 | 题库记录为正确选项 |
| B | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| C | Cost Explorer | AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。 | 题库记录为非正确选项 |
| D | AWS Budgets | AWS Budgets：设置成本/用量预算阈值和告警。 | 题库记录为非正确选项 |

### Q553.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q563-Organizations-治理-IaC题

**题目：** Which AWS service can companies use to subscribe to RSS feeds for updates about all AWS service issues?

**选项：**

- A. Amazon Simple Notification Service (Amazon SNS)
- B. AWS Health Dashboard
- C. AWS Config
- D. AWS CodeCommit

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `B`
**需求/考点标签：** 一对多通知
**社区投票：** B 100%

### Q563.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**一对多通知**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q563.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Simple Notification Service (Amazon SNS) | Amazon SNS：Pub/Sub 消息与通知分发，一个发布可扇出到多个订阅者。 | 题库记录为非正确选项 |
| B | AWS Health Dashboard | AWS Health：提供与 AWS 服务事件和账号资源相关的健康信息。 | 题库记录为正确选项 |
| C | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |
| D | AWS CodeCommit | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q563.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Health：提供与 AWS 服务事件和账号资源相关的健康信息。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q563.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q573-Organizations-治理-IaC题

**题目：** A company has migrated its workload to the AWS Cloud. The company wants to optimize existing Amazon EC2 resources. Which AWS services or tools provide this functionality? (Choose two.)

**选项：**

- A. AWS Elastic Beanstalk
- B. AWS Cost Explorer
- C. Amazon Detective
- D. AWS Compute Optimizer
- E. AWS Billing Conductor

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `BD`
**需求/考点标签：** Migration

### Q573.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q573.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Elastic Beanstalk | AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。 | 题库记录为非正确选项 |
| B | AWS Cost Explorer | AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。 | 题库记录为正确选项 |
| C | Amazon Detective | Amazon Detective：基于安全数据帮助调查潜在安全事件和根因。 | 题库记录为非正确选项 |
| D | AWS Compute Optimizer | AWS Compute Optimizer：根据历史利用率等数据提供资源规格优化建议。 | 题库记录为正确选项 |
| E | AWS Billing Conductor | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q573.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。；AWS Compute Optimizer：根据历史利用率等数据提供资源规格优化建议。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q574-Organizations-治理-IaC题

**题目：** A company with multiple accounts and teams wants to set up a new multi-account AWS environment. Which AWS service supports this requirement?

**选项：**

- A. AWS CloudFormation
- B. AWS Control Tower
- C. AWS Config
- D. Amazon Virtual Private Cloud (Amazon VPC)

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q574.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q574.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CloudFormation | AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。 | 题库记录为非正确选项 |
| B | AWS Control Tower | AWS Control Tower：基于最佳实践建立和治理多账号 Landing Zone。 | 题库记录为正确选项 |
| C | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |
| D | Amazon Virtual Private Cloud (Amazon VPC) | Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |

### Q574.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Control Tower：基于最佳实践建立和治理多账号 Landing Zone。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q583-Organizations-治理-IaC题

**题目：** Why are AWS CloudFormation templates used?

**选项：**

- A. To reduce provisioning time by using automation.
- B. To transfer existing infrastructure to another company.
- C. To reuse on-premises infrastructure in the AWS Cloud.
- D. To deploy large infrastructure with no cost implications.

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `A`
**需求/考点标签：** IaC
**社区投票：** A 100%

### Q583.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**IaC**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q583.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | To reduce provisioning time by using automation. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | To transfer existing infrastructure to another company. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | To reuse on-premises infrastructure in the AWS Cloud. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | To deploy large infrastructure with no cost implications. | 该选项描述计费/免费数据传输或服务使用条件，需要结合具体 AWS 定价规则判断。 | 题库记录为非正确选项 |

### Q583.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q591-Organizations-治理-IaC题

**题目：** Which AWS service enables users to create copies of resources across AWS Regions?

**选项：**

- A. Amazon ElastiCache
- B. AWS CloudFormation
- C. AWS CloudTrail
- D. AWS Systems Manager

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q591.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q591.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon ElastiCache | Amazon ElastiCache：托管内存缓存，用于降低数据库压力并提高热点数据访问速度。 | 题库记录为非正确选项 |
| B | AWS CloudFormation | AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。 | 题库记录为正确选项 |
| C | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为非正确选项 |
| D | AWS Systems Manager | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为非正确选项 |

### Q591.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q605-Organizations-治理-IaC题

**题目：** A developer needs to interact with AWS by using the AWS CLI. Which security feature or AWS service must be provisioned in the developer's account to meet this requirement?

**选项：**

- A. User name and password
- B. AWS Systems Manager
- C. Root password access
- D. AWS access key

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `D`
**社区投票：** D 100%

### Q605.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q605.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | User name and password | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | AWS Systems Manager | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为非正确选项 |
| C | Root password access | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS access key | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q605.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q629-Organizations-治理-IaC题

**题目：** A developer needs to use a standardized template to create copies of a company's AWS architecture for development, test, and production environments. Which AWS service should the developer use to meet this requirement?

**选项：**

- A. AWS Cloud Map
- B. AWS CloudFormation
- C. Amazon Cloud Front
- D. AWS CloudTrail

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q629.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q629.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Cloud Map | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | AWS CloudFormation | AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。 | 题库记录为正确选项 |
| C | Amazon Cloud Front | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为非正确选项 |

### Q629.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q635-Organizations-治理-IaC题

**题目：** A company migrated its systems to the AWS Cloud. The systems are rightsized, and a security review did not reveal any issues. The company must ensure that additional developments, integrations, changes, and system usage growth do not jeopardize this optimized AWS infrastructure. Which AWS service should the company use to report ongoing optimization and security?

**选项：**

- A. AWS Trusted Advisor
- B. AWS Health Dashboard
- C. Amazon Connect
- D. AWS Systems Manager

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `A`
**需求/考点标签：** Migration
**社区投票：** A 100%

### Q635.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q635.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为正确选项 |
| B | AWS Health Dashboard | AWS Health：提供与 AWS 服务事件和账号资源相关的健康信息。 | 题库记录为非正确选项 |
| C | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为非正确选项 |
| D | AWS Systems Manager | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为非正确选项 |

### Q635.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q682-Organizations-治理-IaC题

**题目：** Which AWS service or tool provides recommendations to help users get rightsized Amazon EC2 instances based on historical workload usage data?

**选项：**

- A. AWS Pricing Calculator
- B. AWS Compute Optimizer
- C. AWS App Runner
- D. AWS Systems Manager

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q682.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q682.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Pricing Calculator | AWS Pricing Calculator：部署前估算计划架构成本。 | 题库记录为非正确选项 |
| B | AWS Compute Optimizer | AWS Compute Optimizer：根据历史利用率等数据提供资源规格优化建议。 | 题库记录为正确选项 |
| C | AWS App Runner | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Systems Manager | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为非正确选项 |

### Q682.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Compute Optimizer：根据历史利用率等数据提供资源规格优化建议。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q690-Organizations-治理-IaC题

**题目：** A company has multiple AWS accounts. The company needs to receive a consolidated bill from AWS and must centrally manage security and compliance. Which AWS service or feature should the company use to meet these requirements?

**选项：**

- A. AWS Cost and Usage Report
- B. AWS Organizations
- C. AWS Config
- D. AWS Security Hub

**主分类：** C4-20 Organizations-治理-IaC题
**题库记录答案：** `B`
**需求/考点标签：** 配置变化与合规
**社区投票：** B 100%

### Q690.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q690.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Cost and Usage Report | AWS Cost and Usage Report：提供细粒度成本与使用明细数据。 | 题库记录为非正确选项 |
| B | AWS Organizations | AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。 | 题库记录为正确选项 |
| C | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |
| D | AWS Security Hub | AWS Security Hub：聚合安全发现并提供安全态势管理。 | 题库记录为非正确选项 |

### Q690.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---
