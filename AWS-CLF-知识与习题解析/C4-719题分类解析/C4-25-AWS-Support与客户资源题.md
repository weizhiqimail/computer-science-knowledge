# C4-25-AWS-Support与客户资源题

> 资料口径：本模块以用户提供的 719 道 CLF-C02 题库与前序 C1/C2 项目资料为基础。题库的 `correct_answer`、社区投票与评论用于发现考点和争议，不自动等于当前 AWS 官方结论；本模块没有在生成过程中擅自用外部常识覆盖题库内容。凡现有项目已经明确标记为 `[UPDATED]`、`[LEGACY]`、`[CURRENT-OUT-OF-SCOPE]` 的内容，会继续保留这些状态提示。正式考试前，涉及当前产品状态和 Support 计划等时效信息仍应再对照 AWS 官方页面。

本文件共收录 **22** 道主分类题。范围：Support、Marketplace、客户支持与 AWS 客户资源。

> 注意：这里的“正确”指题库 `correct_answer` 记录。若题目存在明显争议/历史差异，会明确标记并同时收入 C4-27。

## Q71-AWS-Support与客户资源题

**题目：** A company wants to assess its operational readiness. It also wants to identify and mitigate any operational risks ahead of a new product launch. Which AWS Support plan offers guidance and support for this kind of event at no additional charge?

**选项：**

- A. AWS Business Support
- B. AWS Basic Support
- C. AWS Developer Support
- D. AWS Enterprise Support

**主分类：** C4-25 AWS-Support与客户资源题；

**题库记录答案：** `D`；

**需求/考点标签：** 组织云采用准备度；

**社区投票：** D 79%, A 15%

### Q71.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q71.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Business Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| B | AWS Basic Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| C | AWS Developer Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| D | AWS Enterprise Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为正确选项 |

### Q71.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q71.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：developer support, business support
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q135-AWS-Support与客户资源题

**题目：** A company is assessing its AWS Business Support plan to determine if the plan still meets the company’s needs. The company is considering switching to AWS Enterprise Support. Which additional benefit will the company receive with AWS Enterprise Support?

**选项：**

- A. A full set of AWS Trusted Advisor checks
- B. Phone, email, and chat access to cloud support engineers 24 hours a day, 7 days a week
- C. A designated technical account manager (TAM) to assist in monitoring and optimization
- D. A consultative review and architecture guidance for the company’s applications

**主分类：** C4-25 AWS-Support与客户资源题；

**题库记录答案：** `C`；

**社区投票：** C 52%, D 48%

### Q135.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q135.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | A full set of AWS Trusted Advisor checks | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| B | Phone, email, and chat access to cloud support engineers 24 hours a day, 7 days a week | 该选项描述 AWS Support/客户支持能力，需要结合题目要求的响应时间或服务级别判断。 | 题库记录为非正确选项 |
| C | A designated technical account manager (TAM) to assist in monitoring and optimization | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | A consultative review and architecture guidance for the company’s applications | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q135.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q135.4-⚠-争议/版本提示

- 社区投票分散，最高项仅 52%
- 涉及项目资料已提示需关注当前状态的词：business support
- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q195-AWS-Support与客户资源题

**题目：** A company needs to use third-party software for its workload on AWS. Which AWS service or feature can the company use to purchase the software?；

**选项：**

- A. AWS Resource Access Manager
- B. AWS Managed Services
- C. AWS License Manager
- D. AWS Marketplace

**主分类：** C4-25 AWS-Support与客户资源题；

**题库记录答案：** `D`；

**社区投票：** D 100%

### Q195.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q195.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Resource Access Manager | AWS RAM：在账号/组织之间共享支持的 AWS 资源。 | 题库记录为非正确选项 |
| B | AWS Managed Services | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| C | AWS License Manager | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| D | AWS Marketplace | AWS Marketplace：查找、购买和部署第三方软件、数据与服务的数字目录。 | 题库记录为正确选项 |

### Q195.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Marketplace：查找、购买和部署第三方软件、数据与服务的数字目录。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q236-AWS-Support与客户资源题

**题目：** At what support level do users receive access to a support concierge?；

**选项：**

- A. Basic Support
- B. Developer Support
- C. Business Support
- D. Enterprise Support

**主分类：** C4-25 AWS-Support与客户资源题；

**题库记录答案：** `D`；

**社区投票：** D 100%

### Q236.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q236.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Basic Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| B | Developer Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| C | Business Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| D | Enterprise Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为正确选项 |

### Q236.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q236.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：developer support, business support
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q238-AWS-Support与客户资源题

**题目：** A company wants to migrate to AWS and use the same security software it uses on premises. The security software vendor offers its security software as a service on AWS. Where can the company purchase the security solution?；

**选项：**

- A. AWS Partner Solutions Finder
- B. AWS Support Center
- C. AWS Management Console
- D. AWS Marketplace

**主分类：** C4-25 AWS-Support与客户资源题；

**题库记录答案：** `D`；

**需求/考点标签：** Hybrid Cloud / Migration；

**社区投票：** D 100%

### Q238.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q238.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Partner Solutions Finder | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | AWS Support Center | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| C | AWS Management Console | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| D | AWS Marketplace | AWS Marketplace：查找、购买和部署第三方软件、数据与服务的数字目录。 | 题库记录为正确选项 |

### Q238.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Marketplace：查找、购买和部署第三方软件、数据与服务的数字目录。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q246-AWS-Support与客户资源题

**题目：** A company that has AWS Enterprise Support is launching a new version of a popular product in 2 months. The company expects a large increase in traffic to its website. The website is hosted on Amazon EC2 instances. Which action should the company take to assess its readiness to scale for this launch?

**选项：**

- A. Replace the EC2 instances with AWS Lambda functions.
- B. Use AWS Infrastructure Event Management (IEM) support.
- C. Submit a request on AWS Marketplace to monitor the event.
- D. Review the coverage reports in the AWS Cost Management console.

**主分类：** C4-25 AWS-Support与客户资源题；

**题库记录答案：** `B`；

**需求/考点标签：** 组织云采用准备度；

**社区投票：** B 100%

### Q246.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q246.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Replace the EC2 instances with AWS Lambda functions. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。；AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| B | Use AWS Infrastructure Event Management (IEM) support. | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为正确选项 |
| C | Submit a request on AWS Marketplace to monitor the event. | AWS Marketplace：查找、购买和部署第三方软件、数据与服务的数字目录。 | 题库记录为非正确选项 |
| D | Review the coverage reports in the AWS Cost Management console. | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |

### Q246.3-为什么题库会这样选

题库记录的正确选项定位为：该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q256-AWS-Support与客户资源题

**题目：** A company is using the AWS Free Tier for several AWS services for an application. What will happen if the Free Tier usage period expires or if the application use exceeds the Free Tier usage limits?；

**选项：**

- A. The company will be charged the standard pay-as-you-go service rates for the usage that exceeds the Free Tier usage.
- B. AWS Support will contact the company to set up standard service charges.
- C. The company will be charged for the services it consumed during the Free Tier period, plus additional charges for service
- D. The company's AWS account will be frozen and can be restarted after a payment plan is established.

**主分类：** C4-25 AWS-Support与客户资源题；

**题库记录答案：** `A`；

**社区投票：** A 100%

### Q256.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q256.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | The company will be charged the standard pay-as-you-go service rates for the usage that exceeds the Free Tier usage. | OPEX/可变支出强调按实际使用支付。 | 题库记录为正确选项 |
| B | AWS Support will contact the company to set up standard service charges. | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| C | The company will be charged for the services it consumed during the Free Tier period, plus additional charges for service | 该选项描述计费/免费数据传输或服务使用条件，需要结合具体 AWS 定价规则判断。 | 题库记录为非正确选项 |
| D | The company's AWS account will be frozen and can be restarted after a payment plan is established. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q256.3-为什么题库会这样选

题库记录的正确选项定位为：OPEX/可变支出强调按实际使用支付。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q256.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q265-AWS-Support与客户资源题

**题目：** How does the AWS Enterprise Support Concierge team help users?；

**选项：**

- A. Supporting application development
- B. Providing architecture guidance
- C. Answering billing and account inquiries
- D. Answering questions regarding technical support cases

**主分类：** C4-25 AWS-Support与客户资源题；

**题库记录答案：** `C`；

**社区投票：** C 83%, Other 17%

### Q265.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q265.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Supporting application development | 该选项描述 AWS Support/客户支持能力，需要结合题目要求的响应时间或服务级别判断。 | 题库记录为非正确选项 |
| B | Providing architecture guidance | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Answering billing and account inquiries | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Answering questions regarding technical support cases | 该选项描述 AWS Support/客户支持能力，需要结合题目要求的响应时间或服务级别判断。 | 题库记录为非正确选项 |

### Q265.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q271-AWS-Support与客户资源题

**题目：** Which of the following are benefits that a company receives when it moves an on-premises production workload to AWS? (Choose two.)；

**选项：**

- A. AWS trains the company's staff on the use of all the AWS services.
- B. AWS manages all security in the cloud.
- C. AWS offers free support from technical account managers (TAMs).
- D. AWS offers high availability.
- E. AWS provides economies of scale.

**主分类：** C4-25 AWS-Support与客户资源题；

**题库记录答案：** `DE`；

**需求/考点标签：** Hybrid Cloud；

**社区投票：** DE 100%

### Q271.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q271.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS trains the company's staff on the use of all the AWS services. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | AWS manages all security in the cloud. | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| C | AWS offers free support from technical account managers (TAMs). | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| D | AWS offers high availability. | 高可用关注组件故障时尽量维持服务可用。 | 题库记录为正确选项 |
| E | AWS provides economies of scale. | 可扩展性关注系统承载更大规模工作负载的能力。 | 题库记录为正确选项 |

### Q271.3-为什么题库会这样选

题库记录的正确选项定位为：高可用关注组件故障时尽量维持服务可用。；可扩展性关注系统承载更大规模工作负载的能力。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q298-AWS-Support与客户资源题

**题目：** A company needs to run a pre-installed third-party firewall on an Amazon EC2 instance. Which AWS service or feature can provide this solution?；

**选项：**

- A. Network ACLs
- B. Security groups
- C. AWS Marketplace
- D. AWS Trusted Advisor

**主分类：** C4-25 AWS-Support与客户资源题；

**题库记录答案：** `C`；

**社区投票：** C 100%

### Q298.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q298.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Network ACLs | Network ACL：Subnet 级无状态网络访问控制列表。 | 题库记录为非正确选项 |
| B | Security groups | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为非正确选项 |
| C | AWS Marketplace | AWS Marketplace：查找、购买和部署第三方软件、数据与服务的数字目录。 | 题库记录为正确选项 |
| D | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |

### Q298.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Marketplace：查找、购买和部署第三方软件、数据与服务的数字目录。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q298.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q319-AWS-Support与客户资源题

**题目：** Which AWS feature provides a no-cost platform for AWS users to join community groups, ask questions, find answers, and read community-generated articles about best practices?；

**选项：**

- A. AWS Knowledge Center
- B. AWS re:Post
- C. AWS IQ
- D. AWS Enterprise Support

**主分类：** C4-25 AWS-Support与客户资源题；

**题库记录答案：** `B`；

**社区投票：** B 100%

### Q319.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q319.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Knowledge Center | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | AWS re:Post | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | AWS IQ | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Enterprise Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |

### Q319.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q407-AWS-Support与客户资源题

**题目：** Which AWS Support plans provide access to an AWS technical account manager (TAM)? (Choose two.)；

**选项：**

- A. AWS Basic Support
- B. AWS Developer Support
- C. AWS Business Support
- D. AWS Enterprise On-Ramp Support
- E. AWS Enterprise Support

**主分类：** C4-25 AWS-Support与客户资源题；

**题库记录答案：** `DE`；

**社区投票：** DE 75%, CE 25%

### Q407.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q407.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Basic Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| B | AWS Developer Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| C | AWS Business Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| D | AWS Enterprise On-Ramp Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为正确选项 |
| E | AWS Enterprise Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为正确选项 |

### Q407.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。；AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q407.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：developer support, business support, enterprise on-ramp
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q419-AWS-Support与客户资源题

**题目：** A company wants to enhance security by launching a third-party ISP intrusion detection system from its AWS account. Which AWS service or resource should the company use to meet this requirement?；

**选项：**

- A. AWS Security Hub
- B. AWS Marketplace
- C. AWS Quick Starts
- D. AWS Security Center

**主分类：** C4-25 AWS-Support与客户资源题；

**题库记录答案：** `B`；

**社区投票：** B 60%, C 20%, D 20%

### Q419.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q419.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Security Hub | AWS Security Hub：聚合安全发现并提供安全态势管理。 | 题库记录为非正确选项 |
| B | AWS Marketplace | AWS Marketplace：查找、购买和部署第三方软件、数据与服务的数字目录。 | 题库记录为正确选项 |
| C | AWS Quick Starts | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Security Center | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q419.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Marketplace：查找、购买和部署第三方软件、数据与服务的数字目录。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q419.4-⚠-争议/版本提示

- 社区投票分散，最高项仅 60%
- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q515-AWS-Support与客户资源题

**题目：** An independent software vendor wants to deliver and share its custom Amazon Machine Images (AMIs) to prospective customers. Which AWS service will meet these requirements?；

**选项：**

- A. AWS Marketplace
- B. AWS Data Exchange
- C. Amazon EC2
- D. AWS Organizations

**主分类：** C4-25 AWS-Support与客户资源题；

**题库记录答案：** `A`；

**社区投票：** A 100%

### Q515.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q515.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Marketplace | AWS Marketplace：查找、购买和部署第三方软件、数据与服务的数字目录。 | 题库记录为正确选项 |
| B | AWS Data Exchange | AWS Data Exchange：查找、订阅和使用第三方数据集的服务。 | 题库记录为非正确选项 |
| C | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| D | AWS Organizations | AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。 | 题库记录为非正确选项 |

### Q515.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Marketplace：查找、购买和部署第三方软件、数据与服务的数字目录。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q520-AWS-Support与客户资源题

**题目：** Which AWS Support plan provides the full set of AWS Trusted Advisor checks at the LOWEST cost?；

**选项：**

- A. AWS Developer Support
- B. AWS Business Support
- C. AWS Enterprise On-Ramp Support
- D. AWS Enterprise Support

**主分类：** C4-25 AWS-Support与客户资源题；

**题库记录答案：** `B`；

**社区投票：** B 90%, A 10%

### Q520.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q520.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Developer Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| B | AWS Business Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为正确选项 |
| C | AWS Enterprise On-Ramp Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| D | AWS Enterprise Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |

### Q520.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q520.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：developer support, business support, enterprise on-ramp
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q556-AWS-Support与客户资源题

**题目：** Which benefit is always free of charge with AWS, regardless of a user’s AWS Support plan?；

**选项：**

- A. AWS Developer Support
- B. AWS Developer Forums
- C. Programmatic case management
- D. AWS technical account manager (TAM)

**主分类：** C4-25 AWS-Support与客户资源题；

**题库记录答案：** `B`；

**社区投票：** B 100%

### Q556.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q556.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Developer Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| B | AWS Developer Forums | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Programmatic case management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS technical account manager (TAM) | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |

### Q556.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q556.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：developer support
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q567-AWS-Support与客户资源题

**题目：** A new AWS user needs to interact with AWS Support by using API calls. Which AWS Support plan will meet this requirement MOST cost-effectively?；

**选项：**

- A. AWS Basic Support
- B. AWS Developer Support
- C. AWS Business Support
- D. AWS Enterprise Support

**主分类：** C4-25 AWS-Support与客户资源题；

**题库记录答案：** `C`；

**需求/考点标签：** 谁执行了API操作；

**社区投票：** C 52%, B 44%

### Q567.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**谁执行了API操作**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q567.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Basic Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| B | AWS Developer Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| C | AWS Business Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为正确选项 |
| D | AWS Enterprise Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |

### Q567.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q567.4-⚠-争议/版本提示

- 社区投票分散，最高项仅 52%
- 涉及项目资料已提示需关注当前状态的词：developer support, business support
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q575-AWS-Support与客户资源题

**题目：** A company needs access to checks and recommendations that help the company follow AWS best practices for cost optimization, security, fault tolerance, performance, and service quotas. Which combination of an AWS service and AWS Support plan on the AWS account will meet these requirements?

**选项：**

- A. AWS Trusted Advisor with AWS Developer Support
- B. AWS Health Dashboard with AWS Enterprise Support
- C. AWS Trusted Advisor with AWS Business Support
- D. AWS Health Dashboard with AWS Enterprise On-Ramp Support

**主分类：** C4-25 AWS-Support与客户资源题；

**题库记录答案：** `C`；

**需求/考点标签：** Fault Tolerance / Cost Optimization；

**社区投票：** C 86%, A 14%

### Q575.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Fault Tolerance、Cost Optimization**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q575.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Trusted Advisor with AWS Developer Support | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。；AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| B | AWS Health Dashboard with AWS Enterprise Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。；AWS Health：提供与 AWS 服务事件和账号资源相关的健康信息。 | 题库记录为非正确选项 |
| C | AWS Trusted Advisor with AWS Business Support | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。；AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为正确选项 |
| D | AWS Health Dashboard with AWS Enterprise On-Ramp Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。；AWS Health：提供与 AWS 服务事件和账号资源相关的健康信息。 | 题库记录为非正确选项 |

### Q575.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。；AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q575.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：developer support, business support, enterprise on-ramp
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q577-AWS-Support与客户资源题

**题目：** Which AWS team or offering helps users accelerate cloud adoption through paid engagements in any of several specialty practice areas?；

**选项：**

- A. AWS Enterprise Support
- B. AWS solutions architects
- C. AWS Professional Services
- D. AWS account managers

**主分类：** C4-25 AWS-Support与客户资源题；

**题库记录答案：** `C`；

**社区投票：** C 100%

### Q577.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q577.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Enterprise Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| B | AWS solutions architects | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | AWS Professional Services | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | AWS account managers | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |

### Q577.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q602-AWS-Support与客户资源题

**题目：** A company runs its production workload in the AWS Cloud. The company needs to choose one of the AWS Support Plans. Which of the AWS Support Plans will meet these requirements at the LOWEST cost?；

**选项：**

- A. Developer
- B. Enterprise On-Ramp
- C. Enterprise
- D. Business

**主分类：** C4-25 AWS-Support与客户资源题；

**题库记录答案：** `D`；

**社区投票：** D 85%, A 15%

### Q602.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q602.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Developer | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Enterprise On-Ramp | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| C | Enterprise | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Business | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q602.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q602.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：enterprise on-ramp
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q640-AWS-Support与客户资源题

**题目：** A company has an AWS Business Support plan. The company needs to gain access to the AWS DDoS Response Team (DRT) to help mitigate DDoS events. Which AWS service or resource must the company use to meet these requirements?；

**选项：**

- A. AWS Shield Standard
- B. AWS Enterprise Support
- C. AWS WAF
- D. AWS Shield Advanced

**主分类：** C4-25 AWS-Support与客户资源题；

**题库记录答案：** `D`；

**需求/考点标签：** DDoS防护

### Q640.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**DDoS防护**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q640.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Shield Standard | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |
| B | AWS Enterprise Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| C | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |
| D | AWS Shield Advanced | AWS Shield：AWS DDoS 防护服务。 | 题库记录为正确选项 |

### Q640.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Shield：AWS DDoS 防护服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q640.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：business support
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q698-AWS-Support与客户资源题

**题目：** A company is releasing a business-critical application. Before the release, the company needs strategic planning assistance from AWS. During the release, the company needs AWS infrastructure event management and real-time support. What should the company do to meet these requirements?

**选项：**

- A. Access AWS Trusted Advisor
- B. Contact the AWS Partner Network (APN)
- C. Sign up for AWS Enterprise Support
- D. Contact AWS Professional Services

**主分类：** C4-25 AWS-Support与客户资源题；

**题库记录答案：** `C`；

**需求/考点标签：** Event Driven；

**社区投票：** C 67%, D 33%

### Q698.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Event Driven**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q698.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Access AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| B | Contact the AWS Partner Network (APN) | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Sign up for AWS Enterprise Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为正确选项 |
| D | Contact AWS Professional Services | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q698.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q698.4-⚠-争议/版本提示

- 社区投票分散，最高项仅 67%
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---
