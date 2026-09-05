# C4-21-SQS-SNS-EventBridge应用集成题

> 资料口径：本模块以用户提供的 719 道 CLF-C02 题库与前序 C1/C2 项目资料为基础。题库的 `correct_answer`、社区投票与评论用于发现考点和争议，不自动等于当前 AWS 官方结论；本模块没有在生成过程中擅自用外部常识覆盖题库内容。凡现有项目已经明确标记为 `[UPDATED]`、`[LEGACY]`、`[CURRENT-OUT-OF-SCOPE]` 的内容，会继续保留这些状态提示。正式考试前，涉及当前产品状态和 Support 计划等时效信息仍应再对照 AWS 官方页面。

本文件共收录 **10** 道主分类题。范围：SQS、SNS、EventBridge、Step Functions、API Gateway、SES。

> 注意：这里的“正确”指题库 `correct_answer` 记录。若题目存在明显争议/历史差异，会明确标记并同时收入 C4-27。

## Q31-SQS-SNS-EventBridge应用集成题

**题目：** Which AWS service or feature is used to send both text and email messages from distributed applications?；

**选项：**

- A. Amazon Simple Notification Service (Amazon SNS)
- B. Amazon Simple Email Service (Amazon SES)
- C. Amazon CloudWatch alerts
- D. Amazon Simple Queue Service (Amazon SQS)

**主分类：** C4-21 SQS-SNS-EventBridge应用集成题；

**题库记录答案：** `A`；

**社区投票：** A 97%

### Q31.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q31.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Simple Notification Service (Amazon SNS) | Amazon SNS：Pub/Sub 消息与通知分发，一个发布可扇出到多个订阅者。 | 题库记录为正确选项 |
| B | Amazon Simple Email Service (Amazon SES) | Amazon SES：可扩展电子邮件发送服务。 | 题库记录为非正确选项 |
| C | Amazon CloudWatch alerts | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |
| D | Amazon Simple Queue Service (Amazon SQS) | Amazon SQS：托管消息队列，用于异步、缓冲和系统解耦。 | 题库记录为非正确选项 |

### Q31.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon SNS：Pub/Sub 消息与通知分发，一个发布可扇出到多个订阅者。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q81-SQS-SNS-EventBridge应用集成题

**题目：** A company has a set of ecommerce applications. The applications need to be able to send messages to each other. Which AWS service meets this requirement?；

**选项：**

- A. AWS Auto Scaling
- B. Elastic Load Balancing
- C. Amazon Simple Queue Service (Amazon SQS)
- D. Amazon Kinesis Data Streams

**主分类：** C4-21 SQS-SNS-EventBridge应用集成题；

**题库记录答案：** `C`；

**社区投票：** C 100%

### Q81.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q81.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Auto Scaling | EC2 Auto Scaling：根据需求自动增加或减少 EC2 容量。 | 题库记录为非正确选项 |
| B | Elastic Load Balancing | Elastic Load Balancing：在多个后端目标间分发流量并提高可用性。 | 题库记录为非正确选项 |
| C | Amazon Simple Queue Service (Amazon SQS) | Amazon SQS：托管消息队列，用于异步、缓冲和系统解耦。 | 题库记录为正确选项 |
| D | Amazon Kinesis Data Streams | Amazon Kinesis：实时数据流采集、处理与传输家族。 | 题库记录为非正确选项 |

### Q81.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon SQS：托管消息队列，用于异步、缓冲和系统解耦。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q140-SQS-SNS-EventBridge应用集成题

**题目：** Which AWS services can a company use to achieve a loosely coupled architecture? (Choose two.)；

**选项：**

- A. Amazon WorkSpaces
- B. Amazon Simple Queue Service (Amazon SQS)
- C. Amazon Connect
- D. AWS Trusted Advisor
- E. AWS Step Functions

**主分类：** C4-21 SQS-SNS-EventBridge应用集成题；

**题库记录答案：** `BE`；

**社区投票：** BE 100%

### Q140.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q140.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon WorkSpaces | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Amazon Simple Queue Service (Amazon SQS) | Amazon SQS：托管消息队列，用于异步、缓冲和系统解耦。 | 题库记录为正确选项 |
| C | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为非正确选项 |
| D | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| E | AWS Step Functions | AWS Step Functions：Serverless 工作流编排和状态机。 | 题库记录为正确选项 |

### Q140.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon SQS：托管消息队列，用于异步、缓冲和系统解耦。；AWS Step Functions：Serverless 工作流编排和状态机。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q140.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q188-SQS-SNS-EventBridge应用集成题

**题目：** A company is building an application that requires the ability to send, store, and receive messages between application components. The company has another requirement to process messages in first-in, first-out (FIFO) order. Which AWS service should the company use?

**选项：**

- A. AWS Step Functions
- B. Amazon Simple Notification Service (Amazon SNS)
- C. Amazon Kinesis Data Streams
- D. Amazon Simple Queue Service (Amazon SQS)

**主分类：** C4-21 SQS-SNS-EventBridge应用集成题；

**题库记录答案：** `D`；

**社区投票：** D 100%

### Q188.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q188.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Step Functions | AWS Step Functions：Serverless 工作流编排和状态机。 | 题库记录为非正确选项 |
| B | Amazon Simple Notification Service (Amazon SNS) | Amazon SNS：Pub/Sub 消息与通知分发，一个发布可扇出到多个订阅者。 | 题库记录为非正确选项 |
| C | Amazon Kinesis Data Streams | Amazon Kinesis：实时数据流采集、处理与传输家族。 | 题库记录为非正确选项 |
| D | Amazon Simple Queue Service (Amazon SQS) | Amazon SQS：托管消息队列，用于异步、缓冲和系统解耦。 | 题库记录为正确选项 |

### Q188.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon SQS：托管消息队列，用于异步、缓冲和系统解耦。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q376-SQS-SNS-EventBridge应用集成题

**题目：** Which AWS service uses a combination of publishers and subscribers?；

**选项：**

- A. AWS Lambda
- B. Amazon Simple Notification Service (Amazon SNS)
- C. Amazon CloudWatch
- D. AWS CloudFormation

**主分类：** C4-21 SQS-SNS-EventBridge应用集成题；

**题库记录答案：** `B`；

**需求/考点标签：** 一对多通知；

**社区投票：** B 100%

### Q376.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**一对多通知**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q376.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| B | Amazon Simple Notification Service (Amazon SNS) | Amazon SNS：Pub/Sub 消息与通知分发，一个发布可扇出到多个订阅者。 | 题库记录为正确选项 |
| C | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |
| D | AWS CloudFormation | AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。 | 题库记录为非正确选项 |

### Q376.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon SNS：Pub/Sub 消息与通知分发，一个发布可扇出到多个订阅者。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q421-SQS-SNS-EventBridge应用集成题

**题目：** Which AWS service or tool gives a company the ability to release application changes in an automated way?；

**选项：**

- A. Amazon AppFlow
- B. AWS CodeDeploy
- C. AWS PrivateLink
- D. Amazon EKS Distro

**主分类：** C4-21 SQS-SNS-EventBridge应用集成题；

**题库记录答案：** `B`；

**社区投票：** B 100%

### Q421.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q421.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon AppFlow | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | AWS CodeDeploy | AWS CodeDeploy：自动化应用部署服务；项目资料将其视为题库历史/当前范围需复核项。 | 题库记录为正确选项 |
| C | AWS PrivateLink | AWS PrivateLink：通过私有 IP/接口 Endpoint 私下发布和访问服务。 | 题库记录为非正确选项 |
| D | Amazon EKS Distro | Amazon EKS：AWS 托管 Kubernetes 控制面。 | 题库记录为非正确选项 |

### Q421.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CodeDeploy：自动化应用部署服务；项目资料将其视为题库历史/当前范围需复核项。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q421.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：codedeploy
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q495-SQS-SNS-EventBridge应用集成题

**题目：** Which AWS service can be used to send alerts when a specific Amazon CloudWatch alarm is invoked?；

**选项：**

- A. AWS CloudTrail
- B. Amazon Simple Notification Service (Amazon SNS)
- C. Amazon Simple Queue Service (Amazon SQS)
- D. Amazon EventBridge

**主分类：** C4-21 SQS-SNS-EventBridge应用集成题；

**题库记录答案：** `B`；

**需求/考点标签：** 运行时指标监控；

**社区投票：** B 100%

### Q495.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**运行时指标监控**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q495.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为非正确选项 |
| B | Amazon Simple Notification Service (Amazon SNS) | Amazon SNS：Pub/Sub 消息与通知分发，一个发布可扇出到多个订阅者。 | 题库记录为正确选项 |
| C | Amazon Simple Queue Service (Amazon SQS) | Amazon SQS：托管消息队列，用于异步、缓冲和系统解耦。 | 题库记录为非正确选项 |
| D | Amazon EventBridge | Amazon EventBridge：事件总线和规则路由服务，用事件来源/模式连接多个目标。 | 题库记录为非正确选项 |

### Q495.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon SNS：Pub/Sub 消息与通知分发，一个发布可扇出到多个订阅者。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q502-SQS-SNS-EventBridge应用集成题

**题目：** A user wants to invoke an AWS Lambda function when an Amazon EC2 instance enters the “stopping” state. Which AWS service is appropriate for this use case?；

**选项：**

- A. Amazon EventBridge
- B. AWS Config
- C. Amazon Simple Notification Service (Amazon SNS)
- D. AWS CloudFormation

**主分类：** C4-21 SQS-SNS-EventBridge应用集成题；

**题库记录答案：** `A`；

**需求/考点标签：** Serverless；

**社区投票：** A 100%

### Q502.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Serverless**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q502.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon EventBridge | Amazon EventBridge：事件总线和规则路由服务，用事件来源/模式连接多个目标。 | 题库记录为正确选项 |
| B | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |
| C | Amazon Simple Notification Service (Amazon SNS) | Amazon SNS：Pub/Sub 消息与通知分发，一个发布可扇出到多个订阅者。 | 题库记录为非正确选项 |
| D | AWS CloudFormation | AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。 | 题库记录为非正确选项 |

### Q502.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EventBridge：事件总线和规则路由服务，用事件来源/模式连接多个目标。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q645-SQS-SNS-EventBridge应用集成题

**题目：** A company wants an AWS service that can automate software deployment in Amazon EC2 instances and on-premises instances. Which AWS service will meet this requirement?；

**选项：**

- A. AWS CodeCommit
- B. AWS CodeBuild
- C. AWS CodeDeploy
- D. AWS CodePipeline

**主分类：** C4-21 SQS-SNS-EventBridge应用集成题；

**题库记录答案：** `C`；

**需求/考点标签：** Hybrid Cloud；

**社区投票：** C 100%

### Q645.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q645.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CodeCommit | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | AWS CodeBuild | AWS CodeBuild：托管代码构建与测试服务。 | 题库记录为非正确选项 |
| C | AWS CodeDeploy | AWS CodeDeploy：自动化应用部署服务；项目资料将其视为题库历史/当前范围需复核项。 | 题库记录为正确选项 |
| D | AWS CodePipeline | AWS CodePipeline：持续交付 Pipeline 编排服务。 | 题库记录为非正确选项 |

### Q645.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CodeDeploy：自动化应用部署服务；项目资料将其视为题库历史/当前范围需复核项。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q645.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：codedeploy
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q710-SQS-SNS-EventBridge应用集成题

**题目：** A company wants to consolidate its call centers to improve the customer voice and chat experience with call center agents. Which AWS service or tool will meet these requirements?；

**选项：**

- A. Amazon Simple Notification Service (Amazon SNS)
- B. AWS Support Center
- C. Amazon Cognito
- D. Amazon Connect

**主分类：** C4-21 SQS-SNS-EventBridge应用集成题；

**题库记录答案：** `D`；

**社区投票：** D 100%

### Q710.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q710.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Simple Notification Service (Amazon SNS) | Amazon SNS：Pub/Sub 消息与通知分发，一个发布可扇出到多个订阅者。 | 题库记录为非正确选项 |
| B | AWS Support Center | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| C | Amazon Cognito | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。 | 题库记录为非正确选项 |
| D | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为正确选项 |

### Q710.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Connect：云联络中心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---
