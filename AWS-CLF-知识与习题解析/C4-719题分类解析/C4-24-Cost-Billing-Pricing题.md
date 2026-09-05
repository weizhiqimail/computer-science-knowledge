# C4-24-Cost-Billing-Pricing题

> 资料口径：本模块以用户提供的 719 道 CLF-C02 题库与前序 C1/C2 项目资料为基础。题库的 `correct_answer`、社区投票与评论用于发现考点和争议，不自动等于当前 AWS 官方结论；本模块没有在生成过程中擅自用外部常识覆盖题库内容。凡现有项目已经明确标记为 `[UPDATED]`、`[LEGACY]`、`[CURRENT-OUT-OF-SCOPE]` 的内容，会继续保留这些状态提示。正式考试前，涉及当前产品状态和 Support 计划等时效信息仍应再对照 AWS 官方页面。

本文件共收录 **30** 道主分类题。范围：Cost Explorer、Budgets、Pricing Calculator、CUR、Billing、成本优化。

> 注意：这里的“正确”指题库 `correct_answer` 记录。若题目存在明显争议/历史差异，会明确标记并同时收入 C4-27。
## Q13-Cost-Billing-Pricing题

**题目：** Which AWS service or tool helps users visualize, understand, and manage spending and usage over time?

**选项：**

- A. AWS Organizations
- B. AWS Pricing Calculator
- C. AWS Cost Explorer
- D. AWS Service Catalog

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `C`
**社区投票：** C 100%

### Q13.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q13.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Organizations | AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。 | 题库记录为非正确选项 |
| B | AWS Pricing Calculator | AWS Pricing Calculator：部署前估算计划架构成本。 | 题库记录为非正确选项 |
| C | AWS Cost Explorer | AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。 | 题库记录为正确选项 |
| D | AWS Service Catalog | AWS Service Catalog：让企业发布经过批准的云产品/基础设施模板目录。 | 题库记录为非正确选项 |

### Q13.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q48-Cost-Billing-Pricing题

**题目：** A company is exploring the use of the AWS Cloud, and needs to create a cost estimate for a project before the infrastructure is provisioned. Which AWS service or feature can be used to estimate costs before deployment?

**选项：**

- A. AWS Free Tier
- B. AWS Pricing Calculator
- C. AWS Billing and Cost Management
- D. AWS Cost and Usage Report

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q48.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q48.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Free Tier | 该选项描述计费/免费数据传输或服务使用条件，需要结合具体 AWS 定价规则判断。 | 题库记录为非正确选项 |
| B | AWS Pricing Calculator | AWS Pricing Calculator：部署前估算计划架构成本。 | 题库记录为正确选项 |
| C | AWS Billing and Cost Management | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| D | AWS Cost and Usage Report | AWS Cost and Usage Report：提供细粒度成本与使用明细数据。 | 题库记录为非正确选项 |

### Q48.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Pricing Calculator：部署前估算计划架构成本。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q82-Cost-Billing-Pricing题

**题目：** What are the benefits of consolidated billing for AWS Cloud services? (Choose two.)

**选项：**

- A. Volume discounts
- B. A minimal additional fee for use
- C. One bill for multiple accounts
- D. Installment payment options
- E. Custom cost and usage budget creation

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `AC`
**社区投票：** AC 87%, CE 13%

### Q82.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q82.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Volume discounts | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | A minimal additional fee for use | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | One bill for multiple accounts | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Installment payment options | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| E | Custom cost and usage budget creation | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q82.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q82.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q91-Cost-Billing-Pricing题

**题目：** A company plans to migrate to AWS and wants to create cost estimates for its AWS use cases. Which AWS service or tool can the company use to meet these requirements?

**选项：**

- A. AWS Pricing Calculator
- B. Amazon CloudWatch
- C. AWS Cost Explorer
- D. AWS Budgets

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `A`
**需求/考点标签：** Migration
**社区投票：** A 100%

### Q91.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q91.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Pricing Calculator | AWS Pricing Calculator：部署前估算计划架构成本。 | 题库记录为正确选项 |
| B | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |
| C | AWS Cost Explorer | AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。 | 题库记录为非正确选项 |
| D | AWS Budgets | AWS Budgets：设置成本/用量预算阈值和告警。 | 题库记录为非正确选项 |

### Q91.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Pricing Calculator：部署前估算计划架构成本。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q102-Cost-Billing-Pricing题

**题目：** A company is running a workload in the AWS Cloud. Which AWS best practice ensures the MOST cost-effective architecture for the workload?

**选项：**

- A. Loose coupling
- B. Rightsizing
- C. Caching
- D. Redundancy

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `B`
**需求/考点标签：** Cost Optimization
**社区投票：** B 100%

### Q102.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Cost Optimization**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q102.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Loose coupling | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Rightsizing | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Caching | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Redundancy | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q102.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q104-Cost-Billing-Pricing题

**题目：** Which AWS tool gives users the ability to plan their service usage, service costs, and instance reservations, and also allows them to set custom alerts when their costs or usage exceed established thresholds?

**选项：**

- A. Cost Explorer
- B. AWS Budgets
- C. AWS Cost and Usage Report
- D. Reserved Instance reporting

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `B`
**需求/考点标签：** 预算阈值告警
**社区投票：** B 100%

### Q104.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**预算阈值告警**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q104.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Cost Explorer | AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。 | 题库记录为非正确选项 |
| B | AWS Budgets | AWS Budgets：设置成本/用量预算阈值和告警。 | 题库记录为正确选项 |
| C | AWS Cost and Usage Report | AWS Cost and Usage Report：提供细粒度成本与使用明细数据。 | 题库记录为非正确选项 |
| D | Reserved Instance reporting | Reserved Instances：通过 1/3 年承诺获得折扣的 EC2/RDS 等预留定价概念，具体机制需按服务区分。 | 题库记录为非正确选项 |

### Q104.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Budgets：设置成本/用量预算阈值和告警。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q107-Cost-Billing-Pricing题

**题目：** A company has multiple AWS accounts that include compute workloads that cannot be interrupted. The company wants to obtain billing discounts that are based on the company’s use of AWS services. Which AWS feature or purchasing option will meet these requirements?

**选项：**

- A. Resource tagging
- B. Consolidated billing
- C. Pay-as-you-go pricing
- D. Spot Instances

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `B`
**需求/考点标签：** 可中断低成本计算
**社区投票：** B 97%

### Q107.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**可中断低成本计算**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q107.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Resource tagging | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Consolidated billing | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Pay-as-you-go pricing | OPEX/可变支出强调按实际使用支付。 | 题库记录为非正确选项 |
| D | Spot Instances | Spot Instances：利用 AWS 闲置计算容量的低价实例，但可能被中断。 | 题库记录为非正确选项 |

### Q107.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q107.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q141-Cost-Billing-Pricing题

**题目：** Which AWS Cloud service can send alerts to customers if custom spending thresholds are exceeded?

**选项：**

- A. AWS Budgets
- B. AWS Cost Explorer
- C. AWS Cost Allocation Tags
- D. AWS Organizations

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `A`
**需求/考点标签：** 预算阈值告警
**社区投票：** A 100%

### Q141.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**预算阈值告警**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q141.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Budgets | AWS Budgets：设置成本/用量预算阈值和告警。 | 题库记录为正确选项 |
| B | AWS Cost Explorer | AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。 | 题库记录为非正确选项 |
| C | AWS Cost Allocation Tags | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Organizations | AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。 | 题库记录为非正确选项 |

### Q141.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Budgets：设置成本/用量预算阈值和告警。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q204-Cost-Billing-Pricing题

**题目：** A company wants to create Amazon QuickSight dashboards every week by using its billing data. Which AWS feature or tool can the company use to meet these requirements?

**选项：**

- A. AWS Budgets
- B. AWS Cost Explorer
- C. AWS Cost and Usage Report
- D. AWS Cost Anomaly Detection

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `C`
**需求/考点标签：** 关系数据库高可用
**社区投票：** C 100%

### Q204.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**关系数据库高可用**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q204.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Budgets | AWS Budgets：设置成本/用量预算阈值和告警。 | 题库记录为非正确选项 |
| B | AWS Cost Explorer | AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。 | 题库记录为非正确选项 |
| C | AWS Cost and Usage Report | AWS Cost and Usage Report：提供细粒度成本与使用明细数据。 | 题库记录为正确选项 |
| D | AWS Cost Anomaly Detection | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q204.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Cost and Usage Report：提供细粒度成本与使用明细数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q206-Cost-Billing-Pricing题

**题目：** A company needs to organize its resources and track AWS costs on a detailed level. The company needs to categorize costs by business department, environment, and application. Which solution will meet these requirements?

**选项：**

- A. Access the AWS Cost Management console to organize resources, set an AWS budget, and receive notifications of
- B. Use tags to organize the resources. Activate cost allocation tags to track AWS costs on a detailed level.
- C. Create Amazon CloudWatch dashboards to visually organize and track costs individually.
- D. Access the AWS Billing and Cost Management dashboard to organize and track resource consumption on a detailed

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `B`
**社区投票：** B 83%, A 17%

### Q206.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q206.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Access the AWS Cost Management console to organize resources, set an AWS budget, and receive notifications of | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| B | Use tags to organize the resources. Activate cost allocation tags to track AWS costs on a detailed level. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Create Amazon CloudWatch dashboards to visually organize and track costs individually. | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |
| D | Access the AWS Billing and Cost Management dashboard to organize and track resource consumption on a detailed | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |

### Q206.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q264-Cost-Billing-Pricing题

**题目：** A company wants to receive alerts to monitor its overall operating costs for its AWS public cloud infrastructure. Which AWS offering will meet these requirements?

**选项：**

- A. Amazon EventBridge
- B. Compute Savings Plans
- C. AWS Budgets
- D. Migration Evaluator

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `C`
**需求/考点标签：** Monitoring
**社区投票：** C 92%, B 8%

### Q264.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Monitoring**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q264.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon EventBridge | Amazon EventBridge：事件总线和规则路由服务，用事件来源/模式连接多个目标。 | 题库记录为非正确选项 |
| B | Compute Savings Plans | Savings Plans：承诺一定计算消费金额换取折扣的定价模型。 | 题库记录为非正确选项 |
| C | AWS Budgets | AWS Budgets：设置成本/用量预算阈值和告警。 | 题库记录为正确选项 |
| D | Migration Evaluator | Migration Evaluator：评估本地基础设施并建立迁云商业案例/成本分析。 | 题库记录为非正确选项 |

### Q264.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Budgets：设置成本/用量预算阈值和告警。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q264.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q331-Cost-Billing-Pricing题

**题目：** Which AWS service or tool can provide rightsizing recommendations for Amazon EC2 resources at no additional cost?

**选项：**

- A. AWS Well-Architected Tool
- B. Amazon CloudWatch
- C. AWS Cost Explorer
- D. Amazon S3 analytics

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `C`
**社区投票：** C 100%

### Q331.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q331.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Well-Architected Tool | AWS Well-Architected Tool：把 Well-Architected Review 流程工具化。 | 题库记录为非正确选项 |
| B | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |
| C | AWS Cost Explorer | AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。 | 题库记录为正确选项 |
| D | Amazon S3 analytics | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q331.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q342-Cost-Billing-Pricing题

**题目：** A company wants a web application to interact with various AWS services. Which AWS service or resource will meet this requirement?

**选项：**

- A. AWS CloudShell
- B. AWS Marketplace
- C. AWS Management Console
- D. AWS CLI

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `C`
**社区投票：** C 68%, D 32%

### Q342.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q342.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CloudShell | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | AWS Marketplace | AWS Marketplace：查找、购买和部署第三方软件、数据与服务的数字目录。 | 题库记录为非正确选项 |
| C | AWS Management Console | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为正确选项 |
| D | AWS CLI | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q342.3-为什么题库会这样选

题库记录的正确选项定位为：该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q342.4-⚠-争议/版本提示

- 社区投票分散，最高项仅 68%
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q377-Cost-Billing-Pricing题

**题目：** A company is in the early stages of planning a migration to AWS. The company wants to obtain the monthly predicted total AWS cost of ownership for future Amazon EC2 instances and associated storage. Which AWS service or tool should the company use to meet these requirements?

**选项：**

- A. AWS Pricing Calculator
- B. AWS Compute Optimizer
- C. AWS Trusted Advisor
- D. AWS Application Migration Service

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `A`
**需求/考点标签：** Migration
**社区投票：** A 100%

### Q377.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q377.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Pricing Calculator | AWS Pricing Calculator：部署前估算计划架构成本。 | 题库记录为正确选项 |
| B | AWS Compute Optimizer | AWS Compute Optimizer：根据历史利用率等数据提供资源规格优化建议。 | 题库记录为非正确选项 |
| C | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| D | AWS Application Migration Service | AWS Application Migration Service：将物理/虚拟服务器持续复制并迁移到 AWS 的 lift-and-shift 服务。 | 题库记录为非正确选项 |

### Q377.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Pricing Calculator：部署前估算计划架构成本。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q396-Cost-Billing-Pricing题

**题目：** Which cloud concept is demonstrated by using AWS Cost Explorer?

**选项：**

- A. Rightsizing
- B. Reliability
- C. Resilience
- D. Modernization

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `A`
**需求/考点标签：** 分析已经发生的成本
**社区投票：** A 100%

### Q396.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**分析已经发生的成本**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q396.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Rightsizing | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Reliability | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Resilience | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Modernization | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q396.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q401-Cost-Billing-Pricing题

**题目：** A company needs to categorize and track AWS usage cost based on business categories. Which AWS service or feature should the company use to meet these requirements?

**选项：**

- A. Cost allocation tags
- B. AWS Organizations
- C. AWS Security Hub
- D. AWS Cost and Usage Report

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `A`
**社区投票：** A 100%

### Q401.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q401.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Cost allocation tags | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | AWS Organizations | AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。 | 题库记录为非正确选项 |
| C | AWS Security Hub | AWS Security Hub：聚合安全发现并提供安全态势管理。 | 题库记录为非正确选项 |
| D | AWS Cost and Usage Report | AWS Cost and Usage Report：提供细粒度成本与使用明细数据。 | 题库记录为非正确选项 |

### Q401.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q403-Cost-Billing-Pricing题

**题目：** Which statements represent the cost-effectiveness of the AWS Cloud? (Choose two.)

**选项：**

- A. Users can trade fixed expenses for variable expenses.
- B. Users can deploy all over the world in minutes.
- C. AWS offers increased speed and agility.
- D. AWS is responsible for patching the infrastructure.
- E. Users benefit from economies of scale.

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `AE`
**需求/考点标签：** Cost Optimization
**社区投票：** AE 83%, DE 17%

### Q403.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Cost Optimization**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q403.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Users can trade fixed expenses for variable expenses. | CAPEX/固定支出表示预先购买长期资产。 | 题库记录为正确选项 |
| B | Users can deploy all over the world in minutes. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | AWS offers increased speed and agility. | Agility 强调快速获取资源、实验和交付业务。 | 题库记录为非正确选项 |
| D | AWS is responsible for patching the infrastructure. | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| E | Users benefit from economies of scale. | 可扩展性关注系统承载更大规模工作负载的能力。 | 题库记录为正确选项 |

### Q403.3-为什么题库会这样选

题库记录的正确选项定位为：CAPEX/固定支出表示预先购买长期资产。；可扩展性关注系统承载更大规模工作负载的能力。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q403.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q406-Cost-Billing-Pricing题

**题目：** A company is moving some of its on-premises IT services to the AWS Cloud. The finance department wants to see the entire bill so it can forecast spending limits. Which AWS service can the company use to set spending limits and receive notifications if those limits are exceeded?

**选项：**

- A. AWS Cost and Usage Reports
- B. AWS Budgets
- C. AWS Organizations consolidated billing
- D. Cost Explorer

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `B`
**需求/考点标签：** Hybrid Cloud / Pub/Sub
**社区投票：** B 100%

### Q406.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Pub/Sub**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q406.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Cost and Usage Reports | AWS Cost and Usage Report：提供细粒度成本与使用明细数据。 | 题库记录为非正确选项 |
| B | AWS Budgets | AWS Budgets：设置成本/用量预算阈值和告警。 | 题库记录为正确选项 |
| C | AWS Organizations consolidated billing | AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。 | 题库记录为非正确选项 |
| D | Cost Explorer | AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。 | 题库记录为非正确选项 |

### Q406.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Budgets：设置成本/用量预算阈值和告警。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q501-Cost-Billing-Pricing题

**题目：** A company wants to implement detailed tracking of its cloud costs by department and project. Which AWS feature or service should the company use?

**选项：**

- A. Consolidated billing
- B. Cost allocation tags
- C. AWS Marketplace
- D. AWS Budgets

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q501.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q501.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Consolidated billing | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Cost allocation tags | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | AWS Marketplace | AWS Marketplace：查找、购买和部署第三方软件、数据与服务的数字目录。 | 题库记录为非正确选项 |
| D | AWS Budgets | AWS Budgets：设置成本/用量预算阈值和告警。 | 题库记录为非正确选项 |

### Q501.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q514-Cost-Billing-Pricing题

**题目：** A company wants to migrate all of its on-premises infrastructure to the AWS Cloud. Before migration, the company wants estimate of costs for running its as-is infrastructure. Which AWS service or principle should the company use to meet this requirement?

**选项：**

- A. AWS Pricing Calculator
- B. AWS Well-Architected Framework
- C. AWS shared responsibility model
- D. AWS Cloud Adoption Framework (AWS CAF)

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `A`
**需求/考点标签：** 部署前估算成本
**社区投票：** A 100%

### Q514.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**部署前估算成本**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q514.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Pricing Calculator | AWS Pricing Calculator：部署前估算计划架构成本。 | 题库记录为正确选项 |
| B | AWS Well-Architected Framework | AWS Well-Architected Framework：以六大 Pillars 评估和设计安全、可靠、高效、成本优化、可持续的 Workload。 | 题库记录为非正确选项 |
| C | AWS shared responsibility model | Shared Responsibility Model：AWS 与客户之间划分云安全和运维责任的模型。 | 题库记录为非正确选项 |
| D | AWS Cloud Adoption Framework (AWS CAF) | AWS CAF：帮助组织规划和推进云采用与业务/组织转型，包含六个 Perspectives。 | 题库记录为非正确选项 |

### Q514.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Pricing Calculator：部署前估算计划架构成本。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q530-Cost-Billing-Pricing题

**题目：** An ecommerce company plans to move its data center workload to the AWS Cloud to support highly dynamic usage patterns. Which benefits make the AWS Cloud cost-effective for the migration of this type of workload? (Choose two.)

**选项：**

- A. Reliability
- B. Security
- C. Elasticity
- D. Pay-as-you-go resource
- E. High availability

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `CD`
**需求/考点标签：** Migration / Cost Optimization
**社区投票：** CD 100%

### Q530.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration、Cost Optimization**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q530.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Reliability | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Security | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Elasticity | 弹性是资源随当前负载自动扩大或缩小。 | 题库记录为正确选项 |
| D | Pay-as-you-go resource | OPEX/可变支出强调按实际使用支付。 | 题库记录为正确选项 |
| E | High availability | 高可用关注组件故障时尽量维持服务可用。 | 题库记录为非正确选项 |

### Q530.3-为什么题库会这样选

题库记录的正确选项定位为：弹性是资源随当前负载自动扩大或缩小。；OPEX/可变支出强调按实际使用支付。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q532-Cost-Billing-Pricing题

**题目：** Which of the following can the AWS Pricing Calculator do?

**选项：**

- A. Project monthly AWS costs.
- B. Calculate historical AWS costs.
- C. Provide in-depth information about AWS pricing strategies.
- D. Provide users with access to their monthly bills.

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `A`
**需求/考点标签：** 部署前估算成本
**社区投票：** A 100%

### Q532.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**部署前估算成本**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q532.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Project monthly AWS costs. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Calculate historical AWS costs. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Provide in-depth information about AWS pricing strategies. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Provide users with access to their monthly bills. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q532.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q561-Cost-Billing-Pricing题

**题目：** Which recommendation can AWS Cost Explorer provide to help reduce cost?

**选项：**

- A. Use a specific database engine.
- B. Change the programming language for an application.
- C. Deploy a specific operating system.
- D. Terminate an idle instance.

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `D`
**需求/考点标签：** 分析已经发生的成本
**社区投票：** D 100%

### Q561.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**分析已经发生的成本**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q561.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Use a specific database engine. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Change the programming language for an application. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Deploy a specific operating system. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Terminate an idle instance. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q561.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q570-Cost-Billing-Pricing题

**题目：** A company wants to estimate the cost for its AWS architecture solution before migration. Which AWS service or feature will meet this requirement?

**选项：**

- A. Amazon Detective
- B. AWS Budgets
- C. AWS Resource Explorer
- D. AWS Pricing Calculator

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `D`
**需求/考点标签：** 部署前估算成本
**社区投票：** D 100%

### Q570.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**部署前估算成本**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q570.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Detective | Amazon Detective：基于安全数据帮助调查潜在安全事件和根因。 | 题库记录为非正确选项 |
| B | AWS Budgets | AWS Budgets：设置成本/用量预算阈值和告警。 | 题库记录为非正确选项 |
| C | AWS Resource Explorer | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Pricing Calculator | AWS Pricing Calculator：部署前估算计划架构成本。 | 题库记录为正确选项 |

### Q570.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Pricing Calculator：部署前估算计划架构成本。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q572-Cost-Billing-Pricing题

**题目：** A university receives a grant to conduct research by using AWS services. The research team needs to make sure the grant money lasts for the entire school year. The team has decided on a monthly allocation that adds up to the total grant amount. Which AWS service or feature will notify the team if spending exceeds the planned amount?

**选项：**

- A. AWS Budgets
- B. Cost Explorer
- C. Cost allocation tags
- D. Cost categories

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `A`
**社区投票：** A 100%

### Q572.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q572.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Budgets | AWS Budgets：设置成本/用量预算阈值和告警。 | 题库记录为正确选项 |
| B | Cost Explorer | AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。 | 题库记录为非正确选项 |
| C | Cost allocation tags | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Cost categories | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q572.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Budgets：设置成本/用量预算阈值和告警。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q637-Cost-Billing-Pricing题

**题目：** A company wants to track the monthly cost and usage of all Amazon EC2 instances in a specific AWS environment. Which AWS service or tool will meet these requirements?

**选项：**

- A. AWS Cost Anomaly Detection
- B. AWS Budgets
- C. AWS Compute Optimizer
- D. AWS Trusted Advisor

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q637.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q637.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Cost Anomaly Detection | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | AWS Budgets | AWS Budgets：设置成本/用量预算阈值和告警。 | 题库记录为正确选项 |
| C | AWS Compute Optimizer | AWS Compute Optimizer：根据历史利用率等数据提供资源规格优化建议。 | 题库记录为非正确选项 |
| D | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |

### Q637.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Budgets：设置成本/用量预算阈值和告警。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q641-Cost-Billing-Pricing题

**题目：** Which AWS service or tool provides a visualization of historical AWS spending patterns and projections of future AWS costs?

**选项：**

- A. AWS Cost and Usage Report
- B. AWS Budgets
- C. Cost Explorer
- D. Amazon Cloud Watch

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `C`

### Q641.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q641.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Cost and Usage Report | AWS Cost and Usage Report：提供细粒度成本与使用明细数据。 | 题库记录为非正确选项 |
| B | AWS Budgets | AWS Budgets：设置成本/用量预算阈值和告警。 | 题库记录为非正确选项 |
| C | Cost Explorer | AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。 | 题库记录为正确选项 |
| D | Amazon Cloud Watch | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q641.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q675-Cost-Billing-Pricing题

**题目：** A company has moved all its infrastructure to the AWS Cloud. To plan ahead for each quarter, the finance team wants to track the cost and usage data of all resources from previous months. The finance team wants to automatically generate reports that contains the data. Which AWS service or feature should the finance team use to meet these requirements?

**选项：**

- A. Amazon Detective
- B. AWS Pricing Calculator
- C. AWS Budgets
- D. AWS Savings Plans

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `C`
**社区投票：** C 100%

### Q675.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q675.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Detective | Amazon Detective：基于安全数据帮助调查潜在安全事件和根因。 | 题库记录为非正确选项 |
| B | AWS Pricing Calculator | AWS Pricing Calculator：部署前估算计划架构成本。 | 题库记录为非正确选项 |
| C | AWS Budgets | AWS Budgets：设置成本/用量预算阈值和告警。 | 题库记录为正确选项 |
| D | AWS Savings Plans | Savings Plans：承诺一定计算消费金额换取折扣的定价模型。 | 题库记录为非正确选项 |

### Q675.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Budgets：设置成本/用量预算阈值和告警。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q695-Cost-Billing-Pricing题

**题目：** A company wants to visualize and manage AWS Cloud costs and usage for a specific period of time. Which AWS service or feature will meet these requirements?

**选项：**

- A. Cost Explorer
- B. Consolidated billing
- C. AWS Organizations
- D. AWS Budgets

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `A`
**社区投票：** A 100%

### Q695.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q695.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Cost Explorer | AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。 | 题库记录为正确选项 |
| B | Consolidated billing | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | AWS Organizations | AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。 | 题库记录为非正确选项 |
| D | AWS Budgets | AWS Budgets：设置成本/用量预算阈值和告警。 | 题库记录为非正确选项 |

### Q695.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q706-Cost-Billing-Pricing题

**题目：** A company plans to launch an ecommerce website that contains many images for a product catalog. The company wants to keep the cost of running the website within a specific budget. Which AWS service or tool should the company use to monitor the ongoing costs of the website?

**选项：**

- A. AWS Cost Explorer
- B. AWS SDKs
- C. EC2 Image Builder
- D. AWS CloudFormation

**主分类：** C4-24 Cost-Billing-Pricing题
**题库记录答案：** `A`
**需求/考点标签：** 预算阈值告警
**社区投票：** A 67%, C 33%

### Q706.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**预算阈值告警**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q706.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Cost Explorer | AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。 | 题库记录为正确选项 |
| B | AWS SDKs | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | EC2 Image Builder | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| D | AWS CloudFormation | AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。 | 题库记录为非正确选项 |

### Q706.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q706.4-⚠-争议/版本提示

- 社区投票分散，最高项仅 67%
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---
