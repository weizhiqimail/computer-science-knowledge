# C4-22-Migration与Hybrid-Cloud题

> 资料口径：本模块以用户提供的 719 道 CLF-C02 题库与前序 C1/C2 项目资料为基础。题库的 `correct_answer`、社区投票与评论用于发现考点和争议，不自动等于当前 AWS 官方结论；本模块没有在生成过程中擅自用外部常识覆盖题库内容。凡现有项目已经明确标记为 `[UPDATED]`、`[LEGACY]`、`[CURRENT-OUT-OF-SCOPE]` 的内容，会继续保留这些状态提示。正式考试前，涉及当前产品状态和 Support 计划等时效信息仍应再对照 AWS 官方页面。

本文件共收录 **42** 道主分类题。范围：Discovery、MGN、DMS、DataSync、Migration Hub、Outposts、Hybrid。

> 注意：这里的“正确”指题库 `correct_answer` 记录。若题目存在明显争议/历史差异，会明确标记并同时收入 C4-27。

## Q15-Migration与Hybrid-Cloud题

**题目：** A global company wants to migrate its third-party applications to the AWS Cloud. The company wants help from a global team of experts to complete the migration faster and more reliably in accordance with AWS internal best practices. Which AWS service or resource will meet these requirements?

**选项：**

- A. AWS Support
- B. AWS Professional Services
- C. AWS Launch Wizard
- D. AWS Managed Services (AMS)

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `B`；

**需求/考点标签：** Migration；

**社区投票：** B 100%

### Q15.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q15.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| B | AWS Professional Services | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | AWS Launch Wizard | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Managed Services (AMS) | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |

### Q15.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q38-Migration与Hybrid-Cloud题

**题目：** An ecommerce company has migrated its IT infrastructure from an on-premises data center to the AWS Cloud. Which cost is the company’s direct responsibility?；

**选项：**

- A. Cost of application software licenses
- B. Cost of the hardware infrastructure on AWS
- C. Cost of power for the AWS servers
- D. Cost of physical security for the AWS data center

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `A`；

**需求/考点标签：** Hybrid Cloud / Migration；

**社区投票：** A 100%

### Q38.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q38.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Cost of application software licenses | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Cost of the hardware infrastructure on AWS | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Cost of power for the AWS servers | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Cost of physical security for the AWS data center | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q38.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q47-Migration与Hybrid-Cloud题

**题目：** A company wants to migrate its on-premises relational databases to the AWS Cloud. The company wants to use infrastructure as close to its current geographical location as possible. Which AWS service or resource should the company use to select its Amazon RDS deployment area?

**选项：**

- A. Amazon Connect
- B. AWS Wavelength
- C. AWS Regions
- D. AWS Direct Connect

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `C`；

**需求/考点标签：** 关系数据库高可用；

**社区投票：** C 100%

### Q47.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**关系数据库高可用**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q47.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为非正确选项 |
| B | AWS Wavelength | AWS Wavelength：把 AWS 计算/存储靠近 5G 电信网络边缘；项目资料标记为当前范围外题库补充。 | 题库记录为非正确选项 |
| C | AWS Regions | Region 是 AWS 独立的地理区域，内部包含多个 Availability Zone。 | 题库记录为正确选项 |
| D | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为非正确选项 |

### Q47.3-为什么题库会这样选

题库记录的正确选项定位为：Region 是 AWS 独立的地理区域，内部包含多个 Availability Zone。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q47.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：wavelength
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q62-Migration与Hybrid-Cloud题

**题目：** Which AWS service supports a hybrid architecture that gives users the ability to extend AWS infrastructure, AWS services, APIs, and tools to data centers, co-location environments, or on-premises facilities?；

**选项：**

- A. AWS Snowmobile
- B. AWS Local Zones
- C. AWS Outposts
- D. AWS Fargate

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `C`；

**需求/考点标签：** Hybrid Cloud；

**社区投票：** C 100%

### Q62.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q62.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Snowmobile | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为非正确选项 |
| B | AWS Local Zones | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | AWS Outposts | AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。 | 题库记录为正确选项 |
| D | AWS Fargate | AWS Fargate：为 ECS/EKS 提供不需要管理底层服务器的容器计算能力。 | 题库记录为非正确选项 |

### Q62.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q131-Migration与Hybrid-Cloud题

**题目：** A company wants to migrate its on-premises workloads to the AWS Cloud. The company wants to separate workloads for chargeback to different departments. Which AWS services or features will meet these requirements? (Choose two.)

**选项：**

- A. Placement groups
- B. Consolidated billing
- C. Edge locations
- D. AWS Config
- E. Multiple AWS accounts

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `BE`；

**需求/考点标签：** Hybrid Cloud / Migration；

**社区投票：** BE 100%

### Q131.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q131.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Placement groups | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Consolidated billing | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Edge locations | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |
| E | Multiple AWS accounts | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q131.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q176-Migration与Hybrid-Cloud题

**题目：** A company plans to migrate to the AWS Cloud. The company is gathering information about its on-premises infrastructure and requires information such as the hostname, IP address, and MAC address. Which AWS service will meet these requirements?

**选项：**

- A. AWS DataSync
- B. AWS Application Migration Service
- C. AWS Application Discovery Service
- D. AWS Database Migration Service (AWS DMS)

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `C`；

**需求/考点标签：** Hybrid Cloud / Migration；

**社区投票：** C 100%

### Q176.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q176.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS DataSync | AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。 | 题库记录为非正确选项 |
| B | AWS Application Migration Service | AWS Application Migration Service：将物理/虚拟服务器持续复制并迁移到 AWS 的 lift-and-shift 服务。 | 题库记录为非正确选项 |
| C | AWS Application Discovery Service | AWS Application Discovery Service：收集本地服务器使用和依赖信息，为迁移规划提供 Discovery 数据。 | 题库记录为正确选项 |
| D | AWS Database Migration Service (AWS DMS) | AWS DMS：在线迁移/复制数据库数据并尽量减少停机。 | 题库记录为非正确选项 |

### Q176.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Application Discovery Service：收集本地服务器使用和依赖信息，为迁移规划提供 Discovery 数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q224-Migration与Hybrid-Cloud题

**题目：** A company wants a customized assessment of its current on-premises environment. The company wants to understand its projected running costs in the AWS Cloud. Which AWS service or tool will meet these requirements?；

**选项：**

- A. AWS Trusted Advisor
- B. Amazon Inspector
- C. AWS Control Tower
- D. Migration Evaluator

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `D`；

**需求/考点标签：** Hybrid Cloud；

**社区投票：** D 100%

### Q224.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q224.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| B | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| C | AWS Control Tower | AWS Control Tower：基于最佳实践建立和治理多账号 Landing Zone。 | 题库记录为非正确选项 |
| D | Migration Evaluator | Migration Evaluator：评估本地基础设施并建立迁云商业案例/成本分析。 | 题库记录为正确选项 |

### Q224.3-为什么题库会这样选

题库记录的正确选项定位为：Migration Evaluator：评估本地基础设施并建立迁云商业案例/成本分析。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q227-Migration与Hybrid-Cloud题

**题目：** A company needs to migrate a PostgreSQL database from on-premises to Amazon RDS. Which AWS service or tool should the company use to meet this requirement?；

**选项：**

- A. Cloud Adoption Readiness Tool
- B. AWS Migration Hub
- C. AWS Database Migration Service (AWS DMS)
- D. AWS Application Migration Service

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `C`；

**需求/考点标签：** 关系数据库高可用；

**社区投票：** C 100%

### Q227.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**关系数据库高可用**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q227.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Cloud Adoption Readiness Tool | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | AWS Migration Hub | AWS Migration Hub：集中跟踪多个迁移工具和应用迁移进度。 | 题库记录为非正确选项 |
| C | AWS Database Migration Service (AWS DMS) | AWS DMS：在线迁移/复制数据库数据并尽量减少停机。 | 题库记录为正确选项 |
| D | AWS Application Migration Service | AWS Application Migration Service：将物理/虚拟服务器持续复制并迁移到 AWS 的 lift-and-shift 服务。 | 题库记录为非正确选项 |

### Q227.3-为什么题库会这样选

题库记录的正确选项定位为：AWS DMS：在线迁移/复制数据库数据并尽量减少停机。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q252-Migration与Hybrid-Cloud题

**题目：** A company has migrated its workloads to AWS. The company wants to adopt AWS at scale and operate more efficiently and securely. Which AWS service or framework should the company use for operational support?；

**选项：**

- A. AWS Support
- B. AWS Cloud Adoption Framework (AWS CAF)
- C. AWS Managed Services (AMS)
- D. AWS Well-Architected Framework

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `C`；

**需求/考点标签：** Migration；

**社区投票：** C 81%, Other 19%

### Q252.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q252.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| B | AWS Cloud Adoption Framework (AWS CAF) | AWS CAF：帮助组织规划和推进云采用与业务/组织转型，包含六个 Perspectives。 | 题库记录为非正确选项 |
| C | AWS Managed Services (AMS) | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为正确选项 |
| D | AWS Well-Architected Framework | AWS Well-Architected Framework：以六大 Pillars 评估和设计安全、可靠、高效、成本优化、可持续的 Workload。 | 题库记录为非正确选项 |

### Q252.3-为什么题库会这样选

题库记录的正确选项定位为：该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q259-Migration与Hybrid-Cloud题

**题目：** A company need an AWS service that provides a clear baseline of what the company runs in its on-premises data centers. The company needs the projected cost to run its on-premises workloads in the AWS Cloud. What AWS service or tool will meet these requirements?

**选项：**

- A. AWS Compute Optimizer
- B. AWS Cost Explorer
- C. AWS Systems Manager Agent (SSM Agent)
- D. Migration Evaluator

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `D`；

**需求/考点标签：** Hybrid Cloud；

**社区投票：** D 100%

### Q259.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q259.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Compute Optimizer | AWS Compute Optimizer：根据历史利用率等数据提供资源规格优化建议。 | 题库记录为非正确选项 |
| B | AWS Cost Explorer | AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。 | 题库记录为非正确选项 |
| C | AWS Systems Manager Agent (SSM Agent) | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为非正确选项 |
| D | Migration Evaluator | Migration Evaluator：评估本地基础设施并建立迁云商业案例/成本分析。 | 题库记录为正确选项 |

### Q259.3-为什么题库会这样选

题库记录的正确选项定位为：Migration Evaluator：评估本地基础设施并建立迁云商业案例/成本分析。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q259.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q304-Migration与Hybrid-Cloud题

**题目：** A company wants to migrate unstructured data to AWS. The data needs to be securely moved with inflight encryption and end- to-end data validation. Which AWS service will meet these requirements?；

**选项：**

- A. AWS Application Migration Service
- B. Amazon Elastic File System (Amazon EFS)
- C. AWS DataSync
- D. AWS Migration Hub

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `C`；

**需求/考点标签：** Encryption / Migration；

**社区投票：** C 100%

### Q304.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Encryption、Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q304.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Application Migration Service | AWS Application Migration Service：将物理/虚拟服务器持续复制并迁移到 AWS 的 lift-and-shift 服务。 | 题库记录为非正确选项 |
| B | Amazon Elastic File System (Amazon EFS) | Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。 | 题库记录为非正确选项 |
| C | AWS DataSync | AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。 | 题库记录为正确选项 |
| D | AWS Migration Hub | AWS Migration Hub：集中跟踪多个迁移工具和应用迁移进度。 | 题库记录为非正确选项 |

### Q304.3-为什么题库会这样选

题库记录的正确选项定位为：AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q307-Migration与Hybrid-Cloud题

**题目：** Which AWS Cloud deployment model uses AWS Outposts as part of the application deployment infrastructure?；

**选项：**

- A. On-premises
- B. Serverless
- C. Cloud-native
- D. Hybrid

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `D`；

**需求/考点标签：** Hybrid Cloud；

**社区投票：** D 93%, A 7%

### Q307.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q307.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | On-premises | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Serverless | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Cloud-native | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Hybrid | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q307.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q316-Migration与Hybrid-Cloud题

**题目：** A company wants to move its on-premises databases to managed cloud database services by using a simplified migration process. Which AWS service or tool can help the company meet this requirement?；

**选项：**

- A. AWS Storage Gateway
- B. AWS Application Migration Service
- C. AWS DataSync
- D. AWS Database Migration Service (AWS DMS)

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `D`；

**需求/考点标签：** Hybrid Cloud / Migration；

**社区投票：** D 100%

### Q316.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q316.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Storage Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为非正确选项 |
| B | AWS Application Migration Service | AWS Application Migration Service：将物理/虚拟服务器持续复制并迁移到 AWS 的 lift-and-shift 服务。 | 题库记录为非正确选项 |
| C | AWS DataSync | AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。 | 题库记录为非正确选项 |
| D | AWS Database Migration Service (AWS DMS) | AWS DMS：在线迁移/复制数据库数据并尽量减少停机。 | 题库记录为正确选项 |

### Q316.3-为什么题库会这样选

题库记录的正确选项定位为：AWS DMS：在线迁移/复制数据库数据并尽量减少停机。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q345-Migration与Hybrid-Cloud题

**题目：** Which AWS service provides a single location to track the progress of application migrations?；

**选项：**

- A. AWS Application Discovery Service
- B. AWS Application Migration Service
- C. AWS Service Catalog
- D. AWS Migration Hub

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `D`；

**需求/考点标签：** Migration；

**社区投票：** D 100%

### Q345.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q345.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Application Discovery Service | AWS Application Discovery Service：收集本地服务器使用和依赖信息，为迁移规划提供 Discovery 数据。 | 题库记录为非正确选项 |
| B | AWS Application Migration Service | AWS Application Migration Service：将物理/虚拟服务器持续复制并迁移到 AWS 的 lift-and-shift 服务。 | 题库记录为非正确选项 |
| C | AWS Service Catalog | AWS Service Catalog：让企业发布经过批准的云产品/基础设施模板目录。 | 题库记录为非正确选项 |
| D | AWS Migration Hub | AWS Migration Hub：集中跟踪多个迁移工具和应用迁移进度。 | 题库记录为正确选项 |

### Q345.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Migration Hub：集中跟踪多个迁移工具和应用迁移进度。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q351-Migration与Hybrid-Cloud题

**题目：** A company is planning to migrate to the AWS Cloud. The company wants to identify measurable business outcomes that will explain the value of the company's decision to migrate. Which phase of the cloud transformation journey includes these activities?

**选项：**

- A. Envision
- B. Align
- C. Scale
- D. Launch

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `A`；

**需求/考点标签：** Migration；

**社区投票：** A 92%, B 8%

### Q351.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q351.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Envision | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Align | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Scale | 可扩展性关注系统承载更大规模工作负载的能力。 | 题库记录为非正确选项 |
| D | Launch | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q351.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q360-Migration与Hybrid-Cloud题

**题目：** A company wants to deploy some of its resources in the AWS Cloud. To meet regulatory requirements, the data must remain local and on premises. There must be low latency between AWS and the company resources. Which AWS service or feature can be used to meet these requirements?

**选项：**

- A. AWS Local Zones
- B. Availability Zones
- C. AWS Outposts
- D. AWS Wavelength Zones

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `C`；

**需求/考点标签：** Hybrid Cloud；

**社区投票：** C 100%

### Q360.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q360.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Local Zones | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Availability Zones | Availability Zone 是 Region 内相互隔离的故障域/部署位置。 | 题库记录为非正确选项 |
| C | AWS Outposts | AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。 | 题库记录为正确选项 |
| D | AWS Wavelength Zones | AWS Wavelength：把 AWS 计算/存储靠近 5G 电信网络边缘；项目资料标记为当前范围外题库补充。 | 题库记录为非正确选项 |

### Q360.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q360.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：wavelength
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q375-Migration与Hybrid-Cloud题

**题目：** Which AWS service will help a company plan a migration to AWS by collecting the configuration, usage, and behavior data of on-premises data centers?；

**选项：**

- A. AWS Resource Groups
- B. AWS Application Discovery Service
- C. AWS Service Catalog
- D. AWS Systems Manager

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `B`；

**需求/考点标签：** Hybrid Cloud / Migration / Configuration Compliance；

**社区投票：** B 100%

### Q375.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Migration、Configuration Compliance**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q375.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Resource Groups | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | AWS Application Discovery Service | AWS Application Discovery Service：收集本地服务器使用和依赖信息，为迁移规划提供 Discovery 数据。 | 题库记录为正确选项 |
| C | AWS Service Catalog | AWS Service Catalog：让企业发布经过批准的云产品/基础设施模板目录。 | 题库记录为非正确选项 |
| D | AWS Systems Manager | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为非正确选项 |

### Q375.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Application Discovery Service：收集本地服务器使用和依赖信息，为迁移规划提供 Discovery 数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q389-Migration与Hybrid-Cloud题

**题目：** A company wants to migrate its on-premises NoSQL workload to Amazon DynamoDB. Which AWS service will meet this requirement?；

**选项：**

- A. AWS Migration Hub
- B. AWS Database Migration Service (AWS DMS)
- C. Migration Evaluator
- D. AWS Application Migration Service

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `B`；

**需求/考点标签：** NoSQL自动扩展；

**社区投票：** B 100%

### Q389.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**NoSQL自动扩展**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q389.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Migration Hub | AWS Migration Hub：集中跟踪多个迁移工具和应用迁移进度。 | 题库记录为非正确选项 |
| B | AWS Database Migration Service (AWS DMS) | AWS DMS：在线迁移/复制数据库数据并尽量减少停机。 | 题库记录为正确选项 |
| C | Migration Evaluator | Migration Evaluator：评估本地基础设施并建立迁云商业案例/成本分析。 | 题库记录为非正确选项 |
| D | AWS Application Migration Service | AWS Application Migration Service：将物理/虚拟服务器持续复制并迁移到 AWS 的 lift-and-shift 服务。 | 题库记录为非正确选项 |

### Q389.3-为什么题库会这样选

题库记录的正确选项定位为：AWS DMS：在线迁移/复制数据库数据并尽量减少停机。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q395-Migration与Hybrid-Cloud题

**题目：** Which complimentary AWS service or tool creates data-driven business cases for cloud planning?；

**选项：**

- A. Migration Evaluator
- B. AWS Billing Conductor
- C. AWS Billing Console
- D. Amazon Forecast

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `A`；

**社区投票：** A 100%

### Q395.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q395.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Migration Evaluator | Migration Evaluator：评估本地基础设施并建立迁云商业案例/成本分析。 | 题库记录为正确选项 |
| B | AWS Billing Conductor | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | AWS Billing Console | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Amazon Forecast | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q395.3-为什么题库会这样选

题库记录的正确选项定位为：Migration Evaluator：评估本地基础设施并建立迁云商业案例/成本分析。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q402-Migration与Hybrid-Cloud题

**题目：** Which AWS service can migrate data between AWS storage services?；

**选项：**

- A. AWS DataSync
- B. AWS Direct Connect
- C. AWS Lake Formation
- D. Amazon S3

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `A`；

**需求/考点标签：** Migration；

**社区投票：** A 100%

### Q402.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q402.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS DataSync | AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。 | 题库记录为正确选项 |
| B | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为非正确选项 |
| C | AWS Lake Formation | AWS Lake Formation：帮助构建、管理和治理数据湖。 | 题库记录为非正确选项 |
| D | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q402.3-为什么题库会这样选

题库记录的正确选项定位为：AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q455-Migration与Hybrid-Cloud题

**题目：** A user is moving a workload from a local data center to an architecture that is distributed between the local data center and the AWS Cloud. Which type of migration is this?；

**选项：**

- A. On-premises to cloud native
- B. Hybrid to cloud native
- C. On-premises to hybrid
- D. Cloud native to hybrid

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `C`；

**需求/考点标签：** Migration；

**社区投票：** C 86%, B 14%

### Q455.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q455.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | On-premises to cloud native | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Hybrid to cloud native | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | On-premises to hybrid | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Cloud native to hybrid | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q455.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q459-Migration与Hybrid-Cloud题

**题目：** A company wants to use AWS. The company has stringent requirements about low-latency access to on-premises systems and data residency. Which AWS service should the company use to design a solution that meets these requirements?

**选项：**

- A. AWS Wavelength
- B. AWS Transit Gateway
- C. AWS Ground Station
- D. AWS Outposts

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `D`；

**需求/考点标签：** Hybrid Cloud；

**社区投票：** D 100%

### Q459.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q459.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Wavelength | AWS Wavelength：把 AWS 计算/存储靠近 5G 电信网络边缘；项目资料标记为当前范围外题库补充。 | 题库记录为非正确选项 |
| B | AWS Transit Gateway | AWS Transit Gateway：连接多个 VPC 与本地网络的中心 Hub/云路由器。 | 题库记录为非正确选项 |
| C | AWS Ground Station | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Outposts | AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。 | 题库记录为正确选项 |

### Q459.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q459.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：wavelength
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q460-Migration与Hybrid-Cloud题

**题目：** A company runs an on-premises contact center for customers. The company needs to migrate to a cloud-based solution that can deliver artificial intelligence features to improve user experience. Which AWS service will meet these requirements?

**选项：**

- A. AWS Wavelength
- B. AWS IAM Identity Center (AWS Single Sign-On)
- C. AWS Direct Connect
- D. Amazon Connect

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `D`；

**需求/考点标签：** Hybrid Cloud / Migration / AI/ML；

**社区投票：** D 100%

### Q460.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Migration、AI/ML**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q460.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Wavelength | AWS Wavelength：把 AWS 计算/存储靠近 5G 电信网络边缘；项目资料标记为当前范围外题库补充。 | 题库记录为非正确选项 |
| B | AWS IAM Identity Center (AWS Single Sign-On) | AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| C | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为非正确选项 |
| D | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为正确选项 |

### Q460.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Connect：云联络中心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q460.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：wavelength
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q478-Migration与Hybrid-Cloud题

**题目：** Which combination of AWS services can be used to move a commercial relational database to an Amazon-managed open- source database? (Choose two.)；

**选项：**

- A. AWS Database Migration Service (AWS DMS)
- B. AWS software development kits (SDKs)
- C. AWS Schema Conversion Tool
- D. AWS Systems Manager
- E. Amazon EMR

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `AC`；

**需求/考点标签：** Relational Database；

**社区投票：** AC 100%

### Q478.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Relational Database**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q478.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Database Migration Service (AWS DMS) | AWS DMS：在线迁移/复制数据库数据并尽量减少停机。 | 题库记录为正确选项 |
| B | AWS software development kits (SDKs) | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | AWS Schema Conversion Tool | AWS SCT：异构数据库迁移时转换数据库 Schema/代码对象。 | 题库记录为正确选项 |
| D | AWS Systems Manager | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为非正确选项 |
| E | Amazon EMR | Amazon EMR：托管大数据框架平台，如 Spark/Hadoop。 | 题库记录为非正确选项 |

### Q478.3-为什么题库会这样选

题库记录的正确选项定位为：AWS DMS：在线迁移/复制数据库数据并尽量减少停机。；AWS SCT：异构数据库迁移时转换数据库 Schema/代码对象。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q480-Migration与Hybrid-Cloud题

**题目：** A company runs a legacy workload in an on-premises data center. The company wants to migrate the workload to AWS. The company does not want to make any changes to the workload. Which migration strategy should the company use?；

**选项：**

- A. Repurchase
- B. Replatform
- C. Rehost
- D. Refactor

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `C`；

**需求/考点标签：** Hybrid Cloud / Migration；

**社区投票：** C 100%

### Q480.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q480.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Repurchase | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Replatform | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Rehost | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Refactor | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q480.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q481-Migration与Hybrid-Cloud题

**题目：** A company is planning to migrate applications to the AWS Cloud. During a system audit, the company finds that its content management system (CMS) application is incompatible with cloud environments. Which migration strategies will help the company to migrate the CMS application with the LEAST effort? (Choose two.)

**选项：**

- A. Retire
- B. Rehost
- C. Repurchase
- D. Replatform
- E. Refactor

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `BC`；

**需求/考点标签：** Migration / Audit Trail；

**社区投票：** BC 32%, CD 25%, AC 21%, Other 22%

### Q481.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration、Audit Trail**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q481.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Retire | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Rehost | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Repurchase | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Replatform | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| E | Refactor | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q481.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q481.4-⚠-争议/版本提示

- 社区投票分散，最高项仅 32%
- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q499-Migration与Hybrid-Cloud题

**题目：** A company runs MySQL database workloads on self-managed servers in an on-premises data center. The company wants to migrate the database workloads to an AWS managed service. Which migration strategy should the company use?；

**选项：**

- A. Rehost
- B. Repurchase
- C. Refactor
- D. Replatform

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `D`；

**需求/考点标签：** Relational Database / Hybrid Cloud / Migration；

**社区投票：** D 100%

### Q499.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Relational Database、Hybrid Cloud、Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q499.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Rehost | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Repurchase | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Refactor | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Replatform | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q499.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q500-Migration与Hybrid-Cloud题

**题目：** A company is planning to migrate a monolithic application to AWS. The company wants to modernize the application by splitting it into microservices. The company will deploy the microservices on AWS. Which migration strategy should the company use?

**选项：**

- A. Rehost
- B. Repurchase
- C. Replatform
- D. Refactor

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `D`；

**需求/考点标签：** Migration；

**社区投票：** D 100%

### Q500.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q500.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Rehost | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Repurchase | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Replatform | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Refactor | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q500.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q568-Migration与Hybrid-Cloud题

**题目：** A company migrated to the AWS Cloud. Now the company pays for services on an as-needed basis. Which advantage of cloud computing is the company benefiting from?；

**选项：**

- A. Stop spending money running and maintaining data centers
- B. Increase speed and agility
- C. Go global in minutes
- D. Trade fixed expense for variable expense

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `D`；

**需求/考点标签：** Migration；

**社区投票：** D 100%

### Q568.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q568.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Stop spending money running and maintaining data centers | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Increase speed and agility | Agility 强调快速获取资源、实验和交付业务。 | 题库记录为非正确选项 |
| C | Go global in minutes | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Trade fixed expense for variable expense | CAPEX/固定支出表示预先购买长期资产。 | 题库记录为正确选项 |

### Q568.3-为什么题库会这样选

题库记录的正确选项定位为：CAPEX/固定支出表示预先购买长期资产。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q576-Migration与Hybrid-Cloud题

**题目：** Which AWS service helps users plan and track their server and application inventory migration data to AWS?；

**选项：**

- A. Amazon CloudWatch
- B. AWS DataSync
- C. AWS Migration Hub
- D. AWS Application Migration Service

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `C`；

**需求/考点标签：** Migration；

**社区投票：** C 75%, D 25%

### Q576.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q576.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |
| B | AWS DataSync | AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。 | 题库记录为非正确选项 |
| C | AWS Migration Hub | AWS Migration Hub：集中跟踪多个迁移工具和应用迁移进度。 | 题库记录为正确选项 |
| D | AWS Application Migration Service | AWS Application Migration Service：将物理/虚拟服务器持续复制并迁移到 AWS 的 lift-and-shift 服务。 | 题库记录为非正确选项 |

### Q576.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Migration Hub：集中跟踪多个迁移工具和应用迁移进度。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q600-Migration与Hybrid-Cloud题

**题目：** A company has applications that control on-premises factory equipment. Which AWS service should the company use to run these applications with the LEAST latency?；

**选项：**

- A. AWS Outposts
- B. Amazon EC2
- C. AWS Lambda
- D. AWS Fargate

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `A`；

**需求/考点标签：** Hybrid Cloud；

**社区投票：** A 100%

### Q600.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q600.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Outposts | AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。 | 题库记录为正确选项 |
| B | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| C | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| D | AWS Fargate | AWS Fargate：为 ECS/EKS 提供不需要管理底层服务器的容器计算能力。 | 题库记录为非正确选项 |

### Q600.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q613-Migration与Hybrid-Cloud题

**题目：** A company plans to perform a one-time migration of a large dataset with millions of files from its on-premises data center to the AWS Cloud. Which AWS service should the company use for the migration?；

**选项：**

- A. AWS Database Migration Service (AWS DMS)
- B. AWS DataSync
- C. AWS Migration Hub
- D. AWS Application Migration Service

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `B`；

**需求/考点标签：** Hybrid Cloud / Migration；

**社区投票：** B 100%

### Q613.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q613.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Database Migration Service (AWS DMS) | AWS DMS：在线迁移/复制数据库数据并尽量减少停机。 | 题库记录为非正确选项 |
| B | AWS DataSync | AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。 | 题库记录为正确选项 |
| C | AWS Migration Hub | AWS Migration Hub：集中跟踪多个迁移工具和应用迁移进度。 | 题库记录为非正确选项 |
| D | AWS Application Migration Service | AWS Application Migration Service：将物理/虚拟服务器持续复制并迁移到 AWS 的 lift-and-shift 服务。 | 题库记录为非正确选项 |

### Q613.3-为什么题库会这样选

题库记录的正确选项定位为：AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q618-Migration与Hybrid-Cloud题

**题目：** A company wants to migrate its on-premises infrastructure to the AWS Cloud. Which advantage of cloud computing will help the company reduce upfront costs?；

**选项：**

- A. Go global in minutes
- B. Increase speed and agility
- C. Benefit from massive economies of scale
- D. Trade fixed expense for variable expense

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `D`；

**需求/考点标签：** Hybrid Cloud / Migration；

**社区投票：** D 100%

### Q618.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q618.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Go global in minutes | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Increase speed and agility | Agility 强调快速获取资源、实验和交付业务。 | 题库记录为非正确选项 |
| C | Benefit from massive economies of scale | 可扩展性关注系统承载更大规模工作负载的能力。 | 题库记录为非正确选项 |
| D | Trade fixed expense for variable expense | CAPEX/固定支出表示预先购买长期资产。 | 题库记录为正确选项 |

### Q618.3-为什么题库会这样选

题库记录的正确选项定位为：CAPEX/固定支出表示预先购买长期资产。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q626-Migration与Hybrid-Cloud题

**题目：** A company plans to migrate to the AWS Cloud. The company wants to gather information about its on-premises data center. Which AWS service should the company use to meet these requirements?；

**选项：**

- A. AWS Application Discovery Service
- B. AWS DataSync
- C. AWS Storage Gateway
- D. AWS Database Migration Service (AWS DMS)

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `A`；

**需求/考点标签：** Hybrid Cloud / Migration；

**社区投票：** A 100%

### Q626.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q626.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Application Discovery Service | AWS Application Discovery Service：收集本地服务器使用和依赖信息，为迁移规划提供 Discovery 数据。 | 题库记录为正确选项 |
| B | AWS DataSync | AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。 | 题库记录为非正确选项 |
| C | AWS Storage Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为非正确选项 |
| D | AWS Database Migration Service (AWS DMS) | AWS DMS：在线迁移/复制数据库数据并尽量减少停机。 | 题库记录为非正确选项 |

### Q626.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Application Discovery Service：收集本地服务器使用和依赖信息，为迁移规划提供 Discovery 数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q651-Migration与Hybrid-Cloud题

**题目：** A company needs to run some of its workloads on premises to comply with regulatory guidelines. The company wants to use the AWS Cloud to run workloads that are not required to be on premises. The company also wants to be able to use the same API calls for the on-premises workloads and the cloud workloads. Which AWS service or feature should the company use to meet these requirements?

**选项：**

- A. Dedicated Hosts
- B. AWS Outposts
- C. Availability Zones
- D. AWS Wavelength

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `B`；

**需求/考点标签：** 谁执行了API操作；

**社区投票：** B 100%

### Q651.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**谁执行了API操作**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q651.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Dedicated Hosts | Dedicated Hosts：客户专用物理服务器，适合许可证/合规等硬件隔离要求。 | 题库记录为非正确选项 |
| B | AWS Outposts | AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。 | 题库记录为正确选项 |
| C | Availability Zones | Availability Zone 是 Region 内相互隔离的故障域/部署位置。 | 题库记录为非正确选项 |
| D | AWS Wavelength | AWS Wavelength：把 AWS 计算/存储靠近 5G 电信网络边缘；项目资料标记为当前范围外题库补充。 | 题库记录为非正确选项 |

### Q651.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q651.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：wavelength
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q661-Migration与Hybrid-Cloud题

**题目：** A company wants to transfer a virtual Windows Server 2022 that is currently running in its own data center to AWS. The company wants to automatically convert the existing server to run directly on AWS infrastructure instead of visualized hardware. Which AWS service will meet these requirements?

**选项：**

- A. AWS DataSync
- B. AWS Database Migration Service (AWS DMS)
- C. AWS Application Discovery Service
- D. AWS Application Migration Service

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `D`；

**社区投票：** D 100%

### Q661.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q661.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS DataSync | AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。 | 题库记录为非正确选项 |
| B | AWS Database Migration Service (AWS DMS) | AWS DMS：在线迁移/复制数据库数据并尽量减少停机。 | 题库记录为非正确选项 |
| C | AWS Application Discovery Service | AWS Application Discovery Service：收集本地服务器使用和依赖信息，为迁移规划提供 Discovery 数据。 | 题库记录为非正确选项 |
| D | AWS Application Migration Service | AWS Application Migration Service：将物理/虚拟服务器持续复制并迁移到 AWS 的 lift-and-shift 服务。 | 题库记录为正确选项 |

### Q661.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Application Migration Service：将物理/虚拟服务器持续复制并迁移到 AWS 的 lift-and-shift 服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q667-Migration与Hybrid-Cloud题

**题目：** A company wants to migrate its server-based applications to the AWS Cloud. The company wants to determine the total cost of ownership for its compute resources that will be hosted on the AWS Cloud. Which combination of AWS services or tools will meet these requirements? (Choose two.)

**选项：**

- A. AWS Pricing Calculator
- B. Migration Evaluator
- C. AWS Support Center
- D. AWS Application Discovery Service
- E. AWS Database Migration Service (AWS DMS)

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `AB`；

**需求/考点标签：** Migration；

**社区投票：** AB 100%

### Q667.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q667.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Pricing Calculator | AWS Pricing Calculator：部署前估算计划架构成本。 | 题库记录为正确选项 |
| B | Migration Evaluator | Migration Evaluator：评估本地基础设施并建立迁云商业案例/成本分析。 | 题库记录为正确选项 |
| C | AWS Support Center | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| D | AWS Application Discovery Service | AWS Application Discovery Service：收集本地服务器使用和依赖信息，为迁移规划提供 Discovery 数据。 | 题库记录为非正确选项 |
| E | AWS Database Migration Service (AWS DMS) | AWS DMS：在线迁移/复制数据库数据并尽量减少停机。 | 题库记录为非正确选项 |

### Q667.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Pricing Calculator：部署前估算计划架构成本。；Migration Evaluator：评估本地基础设施并建立迁云商业案例/成本分析。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q673-Migration与Hybrid-Cloud题

**题目：** A company wants to migrate to the AWS Cloud. The company needs the ability to acquire resources when the resources are necessary. The company also needs the ability to release those resources when the resources are no longer necessary. Which architecture concept of the AWS Cloud meets these requirements?

**选项：**

- A. Elasticity
- B. Availability
- C. Reliability
- D. Durability

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `A`；

**需求/考点标签：** Migration；

**社区投票：** A 100%

### Q673.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q673.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Elasticity | 弹性是资源随当前负载自动扩大或缩小。 | 题库记录为正确选项 |
| B | Availability | 高可用关注组件故障时尽量维持服务可用。 | 题库记录为非正确选项 |
| C | Reliability | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Durability | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q673.3-为什么题库会这样选

题库记录的正确选项定位为：弹性是资源随当前负载自动扩大或缩小。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q686-Migration与Hybrid-Cloud题

**题目：** A company plans to migrate its application from on premises to the AWS Cloud. The company needs to gather usage and configuration data for the application components. Which AWS service will meet these requirements?；

**选项：**

- A. AWS Database Migration Service (AWS DMS)
- B. AWS Transfer Family
- C. AWS Application Discovery Service
- D. AWS Global Accelerator

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `C`；

**需求/考点标签：** Hybrid Cloud / Migration / Configuration Compliance

### Q686.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Migration、Configuration Compliance**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q686.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Database Migration Service (AWS DMS) | AWS DMS：在线迁移/复制数据库数据并尽量减少停机。 | 题库记录为非正确选项 |
| B | AWS Transfer Family | AWS Transfer Family：为 SFTP/FTPS/FTP 等协议提供托管文件传输入口。 | 题库记录为非正确选项 |
| C | AWS Application Discovery Service | AWS Application Discovery Service：收集本地服务器使用和依赖信息，为迁移规划提供 Discovery 数据。 | 题库记录为正确选项 |
| D | AWS Global Accelerator | AWS Global Accelerator：利用 AWS 全球网络和 Anycast 静态 IP 改善全球应用访问路径。 | 题库记录为非正确选项 |

### Q686.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Application Discovery Service：收集本地服务器使用和依赖信息，为迁移规划提供 Discovery 数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q703-Migration与Hybrid-Cloud题

**题目：** A company is planning to migrate to the AWS Cloud. The company needs to understand the existing on-premises usage and configuration. The company does not want to replicate its workloads to AWS, yet. Which AWS service or tool will meet these requirements?

**选项：**

- A. AWS Application Discovery Service
- B. AWS Application Migration Service
- C. Cloud Migration Factory
- D. AWS Transfer Family

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `A`；

**需求/考点标签：** Hybrid Cloud / Migration / Configuration Compliance；

**社区投票：** A 100%

### Q703.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Migration、Configuration Compliance**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q703.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Application Discovery Service | AWS Application Discovery Service：收集本地服务器使用和依赖信息，为迁移规划提供 Discovery 数据。 | 题库记录为正确选项 |
| B | AWS Application Migration Service | AWS Application Migration Service：将物理/虚拟服务器持续复制并迁移到 AWS 的 lift-and-shift 服务。 | 题库记录为非正确选项 |
| C | Cloud Migration Factory | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Transfer Family | AWS Transfer Family：为 SFTP/FTPS/FTP 等协议提供托管文件传输入口。 | 题库记录为非正确选项 |

### Q703.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Application Discovery Service：收集本地服务器使用和依赖信息，为迁移规划提供 Discovery 数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q712-Migration与Hybrid-Cloud题

**题目：** Which AWS service can migrate Amazon EC2 instances from one AWS Region to another?；

**选项：**

- A. AWS Application Migration Service
- B. AWS Database Migration Service (AWS DMS)
- C. AWS DataSync
- D. AWS Migration Hub

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `A`；

**需求/考点标签：** Migration；

**社区投票：** A 100%

### Q712.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q712.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Application Migration Service | AWS Application Migration Service：将物理/虚拟服务器持续复制并迁移到 AWS 的 lift-and-shift 服务。 | 题库记录为正确选项 |
| B | AWS Database Migration Service (AWS DMS) | AWS DMS：在线迁移/复制数据库数据并尽量减少停机。 | 题库记录为非正确选项 |
| C | AWS DataSync | AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。 | 题库记录为非正确选项 |
| D | AWS Migration Hub | AWS Migration Hub：集中跟踪多个迁移工具和应用迁移进度。 | 题库记录为非正确选项 |

### Q712.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Application Migration Service：将物理/虚拟服务器持续复制并迁移到 AWS 的 lift-and-shift 服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q717-Migration与Hybrid-Cloud题

**题目：** A company needs to run some of its workload in the AWS Cloud. The company needs to keep some of the workload in its own on-site data center due to compliance reasons. Which AWS service will meet these requirements?；

**选项：**

- A. AWSConfig
- B. AWS Outposts
- C. Amazon Lightsail
- D. Amazon Connect

**主分类：** C4-22 Migration与Hybrid-Cloud题；

**题库记录答案：** `B`；

**需求/考点标签：** 配置变化与合规

### Q717.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q717.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWSConfig | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | AWS Outposts | AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。 | 题库记录为正确选项 |
| C | Amazon Lightsail | Amazon Lightsail：面向简单网站/小型应用的简化云平台与可预测套餐。 | 题库记录为非正确选项 |
| D | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为非正确选项 |

### Q717.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---
