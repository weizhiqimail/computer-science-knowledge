# C4-15-Shared-Responsibility题

> 资料口径：本模块以用户提供的 719 道 CLF-C02 题库与前序 C1/C2 项目资料为基础。题库的 `correct_answer`、社区投票与评论用于发现考点和争议，不自动等于当前 AWS 官方结论；本模块没有在生成过程中擅自用外部常识覆盖题库内容。凡现有项目已经明确标记为 `[UPDATED]`、`[LEGACY]`、`[CURRENT-OUT-OF-SCOPE]` 的内容，会继续保留这些状态提示。正式考试前，涉及当前产品状态和 Support 计划等时效信息仍应再对照 AWS 官方页面。

本文件共收录 **40** 道主分类题。范围：AWS Shared Responsibility Model 与不同服务的责任边界。

> 注意：这里的“正确”指题库 `correct_answer` 记录。若题目存在明显争议/历史差异，会明确标记并同时收入 C4-27。
## Q5-Shared-Responsibility题

**题目：** Which option is a customer responsibility when using Amazon DynamoDB under the AWS Shared Responsibility Model?

**选项：**

- A. Physical security of DynamoDB
- B. Patching of DynamoDB
- C. Access to DynamoDB tables
- D. Encryption of data at rest in DynamoDB

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `C`
**需求/考点标签：** NoSQL自动扩展
**社区投票：** C 88%, Other 12%

### Q5.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**NoSQL自动扩展**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q5.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Physical security of DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| B | Patching of DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| C | Access to DynamoDB tables | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为正确选项 |
| D | Encryption of data at rest in DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |

### Q5.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q29-Shared-Responsibility题

**题目：** Which tasks are customer responsibilities, according to the AWS shared responsibility model? (Choose two.)

**选项：**

- A. Configure the AWS provided security group firewall.
- B. Classify company assets in the AWS Cloud.
- C. Determine which Availability Zones to use for Amazon S3 buckets.
- D. Patch or upgrade Amazon DynamoDB.
- E. Select Amazon EC2 instances to run AWS Lambda on.

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `AB`
**需求/考点标签：** Shared Responsibility
**社区投票：** AB 92%, Other 8%

### Q29.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q29.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Configure the AWS provided security group firewall. | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为正确选项 |
| B | Classify company assets in the AWS Cloud. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Determine which Availability Zones to use for Amazon S3 buckets. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | Patch or upgrade Amazon DynamoDB. | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| E | Select Amazon EC2 instances to run AWS Lambda on. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。；AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |

### Q29.3-为什么题库会这样选

题库记录的正确选项定位为：Security Group：资源/ENI 级有状态虚拟防火墙。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q42-Shared-Responsibility题

**题目：** What is a customer responsibility when using AWS Lambda according to the AWS shared responsibility model?

**选项：**

- A. Managing the code within the Lambda function
- B. Confirming that the hardware is working in the data center
- C. Patching the operating system
- D. Shutting down Lambda functions when they are no longer in use

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `A`
**需求/考点标签：** Shared Responsibility / Serverless
**社区投票：** A 100%

### Q42.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility、Serverless**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q42.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Managing the code within the Lambda function | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为正确选项 |
| B | Confirming that the hardware is working in the data center | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Patching the operating system | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Shutting down Lambda functions when they are no longer in use | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |

### Q42.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q56-Shared-Responsibility题

**题目：** A company is using Amazon DynamoDB. Which task is the company’s responsibility, according to the AWS shared responsibility model?

**选项：**

- A. Patch the operating system.
- B. Provision hosts.
- C. Manage database access permissions.
- D. Secure the operating system.

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `C`
**需求/考点标签：** NoSQL自动扩展
**社区投票：** C 100%

### Q56.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**NoSQL自动扩展**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q56.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Patch the operating system. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Provision hosts. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Manage database access permissions. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Secure the operating system. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q56.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q79-Shared-Responsibility题

**题目：** Which task is the customer’s responsibility, according to the AWS shared responsibility model?

**选项：**

- A. Maintain the security of the AWS Cloud.
- B. Configure firewalls and networks.
- C. Patch the operating system of Amazon RDS instances.
- D. Implement physical and environmental controls.

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `B`
**需求/考点标签：** Shared Responsibility
**社区投票：** B 100%

### Q79.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q79.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Maintain the security of the AWS Cloud. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Configure firewalls and networks. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Patch the operating system of Amazon RDS instances. | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |
| D | Implement physical and environmental controls. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q79.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q105-Shared-Responsibility题

**题目：** Which tasks are the customer’s responsibility, according to the AWS shared responsibility model? (Choose two.)

**选项：**

- A. Establish the global infrastructure.
- B. Perform client-side data encryption.
- C. Configure IAM credentials.
- D. Secure edge locations.
- E. Patch Amazon RDS DB instances.

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `BC`
**需求/考点标签：** Shared Responsibility
**社区投票：** BC 100%

### Q105.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q105.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Establish the global infrastructure. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Perform client-side data encryption. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Configure IAM credentials. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| D | Secure edge locations. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| E | Patch Amazon RDS DB instances. | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |

### Q105.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q130-Shared-Responsibility题

**题目：** Which option is a shared responsibility between AWS and its customers under the AWS shared responsibility model?

**选项：**

- A. Configuration of Amazon EC2 instance operating systems
- B. Application file system server-side encryption
- C. Patch management
- D. Security of the physical infrastructure

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `C`
**需求/考点标签：** Shared Responsibility
**社区投票：** C 100%

### Q130.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q130.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Configuration of Amazon EC2 instance operating systems | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| B | Application file system server-side encryption | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Patch management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Security of the physical infrastructure | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q130.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q132-Shared-Responsibility题

**题目：** Which task is a responsibility of AWS, according to the AWS shared responsibility model?

**选项：**

- A. Enable client-side encryption for objects that are stored in Amazon S3.
- B. Configure IAM security policies to comply with the principle of least privilege.
- C. Patch the guest operating system on an Amazon EC2 instance.
- D. Apply updates to the Nitro Hypervisor.

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `D`
**需求/考点标签：** Shared Responsibility
**社区投票：** D 100%

### Q132.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q132.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Enable client-side encryption for objects that are stored in Amazon S3. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | Configure IAM security policies to comply with the principle of least privilege. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| C | Patch the guest operating system on an Amazon EC2 instance. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| D | Apply updates to the Nitro Hypervisor. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q132.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q132.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q146-Shared-Responsibility题

**题目：** Which option is a customer responsibility under the AWS shared responsibility model?

**选项：**

- A. Maintenance of underlying hardware of Amazon EC2 instances
- B. Application data security
- C. Physical security of data centers
- D. Maintenance of VPC components

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `B`
**需求/考点标签：** Shared Responsibility
**社区投票：** B 100%

### Q146.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q146.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Maintenance of underlying hardware of Amazon EC2 instances | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| B | Application data security | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Physical security of data centers | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Maintenance of VPC components | Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |

### Q146.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q156-Shared-Responsibility题

**题目：** Which task is a customer’s responsibility, according to the AWS shared responsibility model?

**选项：**

- A. Management of the guest operating systems
- B. Maintenance of the configuration of infrastructure devices
- C. Management of the host operating systems and virtualization
- D. Maintenance of the software that powers Availability Zones

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `A`
**需求/考点标签：** Shared Responsibility
**社区投票：** A 100%

### Q156.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q156.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Management of the guest operating systems | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Maintenance of the configuration of infrastructure devices | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Management of the host operating systems and virtualization | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Maintenance of the software that powers Availability Zones | Availability Zone 是 Region 内相互隔离的故障域/部署位置。 | 题库记录为非正确选项 |

### Q156.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q163-Shared-Responsibility题

**题目：** A company needs to transfer data between an Amazon S3 bucket and an on-premises application. Who is responsible for the security of this data, according to the AWS shared responsibility model?

**选项：**

- A. The company
- B. AWS
- C. Firewall vendor
- D. AWS Marketplace partner

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `A`
**需求/考点标签：** Shared Responsibility / Object Storage / Hybrid Cloud
**社区投票：** A 86%, B 14%

### Q163.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility、Object Storage、Hybrid Cloud**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q163.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | The company | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | AWS | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Firewall vendor | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Marketplace partner | AWS Marketplace：查找、购买和部署第三方软件、数据与服务的数字目录。 | 题库记录为非正确选项 |

### Q163.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q173-Shared-Responsibility题

**题目：** What is the customer ALWAYS responsible for managing, according to the AWS shared responsibility model?

**选项：**

- A. Software licenses
- B. Networking
- C. Customer data
- D. Encryption keys

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `C`
**需求/考点标签：** Shared Responsibility
**社区投票：** C 100%

### Q173.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q173.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Software licenses | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Networking | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Customer data | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Encryption keys | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q173.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q198-Shared-Responsibility题

**题目：** Which task is a responsibility of AWS, according to the AWS shared responsibility model?

**选项：**

- A. Configure identity and access management for applications.
- B. Manage encryption options for data that is stored on AWS.
- C. Configure security groups for Amazon EC2 instances.
- D. Maintain the physical hardware of the infrastructure.

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `D`
**需求/考点标签：** Shared Responsibility
**社区投票：** D 90%, B 10%

### Q198.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q198.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Configure identity and access management for applications. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Manage encryption options for data that is stored on AWS. | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| C | Configure security groups for Amazon EC2 instances. | Security Group：资源/ENI 级有状态虚拟防火墙。；Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| D | Maintain the physical hardware of the infrastructure. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q198.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q200-Shared-Responsibility题

**题目：** Which actions are the responsibility of AWS, according to the AWS shared responsibility model? (Choose two.)

**选项：**

- A. Securing the virtualization layer
- B. Patching the operating system on Amazon EC2 instances
- C. Enforcing a strict password policy for IAM users
- D. Patching the operating system on Amazon RDS instances
- E. Configuring security groups and network ACLs

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `AD`
**需求/考点标签：** Shared Responsibility
**社区投票：** AD 85%, AE 15%

### Q200.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q200.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Securing the virtualization layer | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Patching the operating system on Amazon EC2 instances | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| C | Enforcing a strict password policy for IAM users | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| D | Patching the operating system on Amazon RDS instances | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为正确选项 |
| E | Configuring security groups and network ACLs | Security Group：资源/ENI 级有状态虚拟防火墙。；Network ACL：Subnet 级无状态网络访问控制列表。 | 题库记录为非正确选项 |

### Q200.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q239-Shared-Responsibility题

**题目：** A company has deployed an Amazon EC2 instance. Which option is an AWS responsibility under the AWS shared responsibility model?

**选项：**

- A. Managing and encrypting application data
- B. Installing updates and security patches of guest operating system
- C. Configuration of infrastructure devices
- D. Configuration of security groups on each instance

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `C`
**需求/考点标签：** Shared Responsibility
**社区投票：** C 88%, B 12%

### Q239.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q239.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Managing and encrypting application data | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Installing updates and security patches of guest operating system | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Configuration of infrastructure devices | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Configuration of security groups on each instance | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为非正确选项 |

### Q239.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q241-Shared-Responsibility题

**题目：** A company is using Amazon DynamoDB for its application database. Which tasks are the responsibility of AWS, according to the AWS shared responsibility model? (Choose two.)

**选项：**

- A. Classify data.
- B. Configure access permissions.
- C. Manage encryption options.
- D. Provide public endpoints to store and retrieve data.
- E. Manage the infrastructure layer and the operating system.

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `DE`
**需求/考点标签：** NoSQL自动扩展
**社区投票：** DE 100%

### Q241.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**NoSQL自动扩展**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q241.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Classify data. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Configure access permissions. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Manage encryption options. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Provide public endpoints to store and retrieve data. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| E | Manage the infrastructure layer and the operating system. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q241.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q243-Shared-Responsibility题

**题目：** Which maintenance task is the customer’s responsibility, according to the AWS shared responsibility model?

**选项：**

- A. Physical connectivity among Availability Zones
- B. Network switch maintenance
- C. Hardware updates and firmware patches
- D. Amazon EC2 updates and security patches

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `D`
**需求/考点标签：** Shared Responsibility
**社区投票：** D 100%

### Q243.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q243.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Physical connectivity among Availability Zones | Availability Zone 是 Region 内相互隔离的故障域/部署位置。 | 题库记录为非正确选项 |
| B | Network switch maintenance | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Hardware updates and firmware patches | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Amazon EC2 updates and security patches | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |

### Q243.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q249-Shared-Responsibility题

**题目：** Which option is a shared control between AWS and the customer, according to the AWS shared responsibility model?

**选项：**

- A. Configuration management
- B. Physical and environmental controls
- C. Data integrity authentication
- D. Identity and access management

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `A`
**需求/考点标签：** Shared Responsibility
**社区投票：** A 100%

### Q249.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q249.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Configuration management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Physical and environmental controls | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Data integrity authentication | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Identity and access management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q249.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q249.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q282-Shared-Responsibility题

**题目：** Which of the following is the customer's responsibility under the AWS shared responsibility model? (Choose two.)

**选项：**

- A. Maintain the configuration of infrastructure devices.
- B. Maintain patching and updates within the hardware infrastructure.
- C. Maintain the configuration of guest operating systems and applications.
- D. Manage decisions involving encryption options.
- E. Maintain infrastructure hardware.

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `CD`
**需求/考点标签：** Shared Responsibility
**社区投票：** CD 100%

### Q282.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q282.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Maintain the configuration of infrastructure devices. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Maintain patching and updates within the hardware infrastructure. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Maintain the configuration of guest operating systems and applications. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Manage decisions involving encryption options. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| E | Maintain infrastructure hardware. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q282.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q293-Shared-Responsibility题

**题目：** According to the AWS shared responsibility model, the customer is responsible for applying the latest security updates and patches for which of the following?

**选项：**

- A. Amazon DynamoDB
- B. Amazon EC2 instances
- C. Amazon RDS instances
- D. Amazon S3

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `B`
**需求/考点标签：** Shared Responsibility
**社区投票：** B 100%

### Q293.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q293.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| B | Amazon EC2 instances | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| C | Amazon RDS instances | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |
| D | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q293.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q297-Shared-Responsibility题

**题目：** Who is responsible for managing IAM user access and secret keys according to the AWS shared responsibility model?

**选项：**

- A. IAM access and secret keys are static, so there is no need to rotate them.
- B. The customer is responsible for rotating keys.
- C. AWS will rotate the keys whenever required.
- D. The AWS Support team will rotate keys when requested by the customer.

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `B`
**需求/考点标签：** Shared Responsibility
**社区投票：** B 100%

### Q297.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q297.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | IAM access and secret keys are static, so there is no need to rotate them. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | The customer is responsible for rotating keys. | 该选项描述 Shared Responsibility 中客户侧的管理/安全责任。 | 题库记录为正确选项 |
| C | AWS will rotate the keys whenever required. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | The AWS Support team will rotate keys when requested by the customer. | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |

### Q297.3-为什么题库会这样选

题库记录的正确选项定位为：该选项描述 Shared Responsibility 中客户侧的管理/安全责任。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q300-Shared-Responsibility题

**题目：** Which of the following is entirely the responsibility of AWS, according to the AWS shared responsibility model?

**选项：**

- A. Security awareness and training
- B. Development of an IAM password policy
- C. Patching of the guest operating system
- D. Physical and environmental controls

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `D`
**需求/考点标签：** Shared Responsibility
**社区投票：** D 100%

### Q300.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q300.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Security awareness and training | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Development of an IAM password policy | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| C | Patching of the guest operating system | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Physical and environmental controls | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q300.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q334-Shared-Responsibility题

**题目：** Which task is a responsibility of AWS, according to the AWS shared responsibility model?

**选项：**

- A. Encryption of application data
- B. Authentication of application users
- C. Protection of physical network infrastructure
- D. Configuration of firewalls

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `C`
**需求/考点标签：** Shared Responsibility
**社区投票：** C 100%

### Q334.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q334.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Encryption of application data | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Authentication of application users | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Protection of physical network infrastructure | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Configuration of firewalls | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q334.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q384-Shared-Responsibility题

**题目：** Which option is a responsibility of AWS under the AWS shared responsibility model?

**选项：**

- A. Application data security
- B. Patch management for applications that run on Amazon EC2 instances
- C. Patch management of the underlying infrastructure for managed services
- D. Application identity and access management

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `C`
**需求/考点标签：** Shared Responsibility
**社区投票：** C 100%

### Q384.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q384.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Application data security | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Patch management for applications that run on Amazon EC2 instances | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| C | Patch management of the underlying infrastructure for managed services | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Application identity and access management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q384.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q434-Shared-Responsibility题

**题目：** A company wants to build an application that uses AWS Lambda to run Python code. Under the AWS shared responsibility model, which tasks will be the company’s responsibility? (Choose two.)

**选项：**

- A. Management of the underlying infrastructure.
- B. Management of the operating system.
- C. Writing the business logic code.
- D. Installation of the computer language runtime.
- E. Providing AWS Identity and Access Management (IAM) access to the Lambda service.

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `CE`
**需求/考点标签：** Shared Responsibility / Serverless
**社区投票：** CE 100%

### Q434.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility、Serverless**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q434.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Management of the underlying infrastructure. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Management of the operating system. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Writing the business logic code. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Installation of the computer language runtime. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| E | Providing AWS Identity and Access Management (IAM) access to the Lambda service. | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |

### Q434.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q437-Shared-Responsibility题

**题目：** What does "security of the cloud” refer to in the AWS shared responsibility model?

**选项：**

- A. Availability of AWS services such as Amazon EC2
- B. Security of the cloud infrastructure that runs all the AWS services
- C. Implementation of password policies for IAM users
- D. Security of customer environments by using AWS Network Firewall partners

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `B`
**需求/考点标签：** Shared Responsibility
**社区投票：** B 100%

### Q437.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q437.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Availability of AWS services such as Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| B | Security of the cloud infrastructure that runs all the AWS services | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Implementation of password policies for IAM users | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| D | Security of customer environments by using AWS Network Firewall partners | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q437.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q475-Shared-Responsibility题

**题目：** A company uses Amazon WorkSpaces. Which task is the responsibility of AWS, according to the AWS shared responsibility model?

**选项：**

- A. Set up multi-factor authentication (MFA) for each WorkSpaces user account.
- B. Ensure the environmental safety and security of the AWS infrastructure that hosts WorkSpaces.
- C. Provide security for WorkSpaces user accounts through AWS Identity and Access Management (IAM).
- D. Configure AWS CloudTrail to log API calls and user activity.

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `B`
**需求/考点标签：** Shared Responsibility
**社区投票：** B 100%

### Q475.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q475.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Set up multi-factor authentication (MFA) for each WorkSpaces user account. | MFA：多因素认证，增强账号登录安全。 | 题库记录为非正确选项 |
| B | Ensure the environmental safety and security of the AWS infrastructure that hosts WorkSpaces. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Provide security for WorkSpaces user accounts through AWS Identity and Access Management (IAM). | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| D | Configure AWS CloudTrail to log API calls and user activity. | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为非正确选项 |

### Q475.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q483-Shared-Responsibility题

**题目：** Which option is AWS responsible for under the AWS shared responsibility model?

**选项：**

- A. Network and firewall configuration
- B. Client-side data encryption
- C. Management of user permissions
- D. Hardware and infrastructure

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `D`
**需求/考点标签：** Shared Responsibility
**社区投票：** D 100%

### Q483.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q483.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Network and firewall configuration | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Client-side data encryption | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Management of user permissions | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Hardware and infrastructure | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q483.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q497-Shared-Responsibility题

**题目：** According to the AWS shared responsibility model, which task is the customer's responsibility?

**选项：**

- A. Maintaining the infrastructure needed to run AWS Lambda
- B. Updating the operating system of Amazon DynamoDB instances
- C. Maintaining Amazon S3 infrastructure
- D. Updating the guest operating system on Amazon EC2 instances

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `D`
**需求/考点标签：** Shared Responsibility
**社区投票：** D 100%

### Q497.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q497.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Maintaining the infrastructure needed to run AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| B | Updating the operating system of Amazon DynamoDB instances | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| C | Maintaining Amazon S3 infrastructure | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | Updating the guest operating system on Amazon EC2 instances | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |

### Q497.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q498-Shared-Responsibility题

**题目：** A company is learning about its responsibilities that are related to the management of Amazon EC2 instances. Which tasks for EC2 instances are the company’s responsibility, according to the AWS shared responsibility model? (Choose two.)

**选项：**

- A. Install and patch the machine hypervisor.
- B. Patch the guest operating system.
- C. Encrypt data at rest on associated storage.
- D. Install the physical hardware and cabling.
- E. Provide physical security for the EC2 instances.

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `BC`
**需求/考点标签：** Shared Responsibility
**社区投票：** BC 100%

### Q498.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q498.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Install and patch the machine hypervisor. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Patch the guest operating system. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Encrypt data at rest on associated storage. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Install the physical hardware and cabling. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| E | Provide physical security for the EC2 instances. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q498.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q511-Shared-Responsibility题

**题目：** Which task is the responsibility of the customer, according to the AWS shared responsibility model?

**选项：**

- A. Patch the Amazon DynamoDB operating system.
- B. Secure Amazon CloudFront edge locations by allowing physical access according to the principle of least privilege.
- C. Protect the hardware that runs AWS services.
- D. Use AWS Identity and Access Management (IAM) according to the principle of least privilege.

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `D`
**需求/考点标签：** Shared Responsibility
**社区投票：** D 100%

### Q511.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q511.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Patch the Amazon DynamoDB operating system. | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| B | Secure Amazon CloudFront edge locations by allowing physical access according to the principle of least privilege. | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。 | 题库记录为非正确选项 |
| C | Protect the hardware that runs AWS services. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Use AWS Identity and Access Management (IAM) according to the principle of least privilege. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |

### Q511.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q535-Shared-Responsibility题

**题目：** Which task is the customer's responsibility, according to the AWS shared responsibility model?

**选项：**

- A. Patch a guest operating system that is deployed on an Amazon EC2 instance.
- B. Control physical access to an AWS data center.
- C. Control access to AWS underlying hardware.
- D. Patch a host operating system that is deployed on Amazon S3.

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `A`
**需求/考点标签：** Shared Responsibility
**社区投票：** A 100%

### Q535.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q535.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Patch a guest operating system that is deployed on an Amazon EC2 instance. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| B | Control physical access to an AWS data center. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Control access to AWS underlying hardware. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Patch a host operating system that is deployed on Amazon S3. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q535.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q544-Shared-Responsibility题

**题目：** According to the AWS shared responsibility model, which of the following are AWS responsibilities? (Choose two.)

**选项：**

- A. Network infrastructure and virtualization of infrastructure
- B. Security of application data
- C. Guest operating systems
- D. Physical security of hardware
- E. Credentials and policies

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `AD`
**需求/考点标签：** Shared Responsibility
**社区投票：** AD 100%

### Q544.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q544.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Network infrastructure and virtualization of infrastructure | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Security of application data | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Guest operating systems | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Physical security of hardware | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| E | Credentials and policies | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q544.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q545-Shared-Responsibility题

**题目：** A company uses Amazon Aurora as its database service. The company wants to encrypt its databases and database backups. Which party manages the encryption of the database clusters and database snapshots, according to the AWS shared responsibility model?

**选项：**

- A. AWS
- B. The company
- C. AWS Marketplace partners
- D. Third-party partners

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `B`
**需求/考点标签：** Shared Responsibility / Encryption / Relational Database
**社区投票：** B 86%, A 14%

### Q545.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility、Encryption、Relational Database**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q545.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | The company | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | AWS Marketplace partners | AWS Marketplace：查找、购买和部署第三方软件、数据与服务的数字目录。 | 题库记录为非正确选项 |
| D | Third-party partners | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q545.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q592-Shared-Responsibility题

**题目：** Which task is the responsibility of AWS, according to the AWS shared responsibility model?

**选项：**

- A. Apply guest operating system patches to Amazon EC2 instances.
- B. Provide monitoring of human resources information management (HRIM) systems.
- C. Perform automated backups of Amazon RDS instances.
- D. Optimize the costs of running AWS services.

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `C`
**需求/考点标签：** Shared Responsibility
**社区投票：** C 100%

### Q592.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q592.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Apply guest operating system patches to Amazon EC2 instances. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| B | Provide monitoring of human resources information management (HRIM) systems. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Perform automated backups of Amazon RDS instances. | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为正确选项 |
| D | Optimize the costs of running AWS services. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q592.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q609-Shared-Responsibility题

**题目：** What is a customer responsibility under the AWS shared responsibility model when using AWS Lambda?

**选项：**

- A. Maintenance of the underlying Lambda hardware.
- B. Maintenance of the Lambda networking infrastructure.
- C. The code and libraries that run in the Lambda functions.
- D. The Lambda server software.

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `C`
**需求/考点标签：** Shared Responsibility / Serverless
**社区投票：** C 100%

### Q609.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility、Serverless**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q609.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Maintenance of the underlying Lambda hardware. | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| B | Maintenance of the Lambda networking infrastructure. | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| C | The code and libraries that run in the Lambda functions. | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为正确选项 |
| D | The Lambda server software. | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |

### Q609.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q610-Shared-Responsibility题

**题目：** Which tasks are the responsibility of AWS according to the AWS shared responsibility model? (Choose two.)

**选项：**

- A. Configure AWS Identity and Access Management (IAM).
- B. Configure security groups on Amazon EC2 instances.
- C. Secure the access of physical AWS facilities.
- D. Patch applications that run on Amazon EC2 instances.
- E. Perform infrastructure patching and maintenance.

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `CE`
**需求/考点标签：** Shared Responsibility
**社区投票：** CE 100%

### Q610.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q610.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Configure AWS Identity and Access Management (IAM). | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | Configure security groups on Amazon EC2 instances. | Security Group：资源/ENI 级有状态虚拟防火墙。；Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| C | Secure the access of physical AWS facilities. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Patch applications that run on Amazon EC2 instances. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| E | Perform infrastructure patching and maintenance. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q610.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q627-Shared-Responsibility题

**题目：** Which tasks are responsibilities of the customer, according to the AWS shared responsibility model? (Choose two.)

**选项：**

- A. Secure the virtualization layer.
- B. Encrypt data and maintain data integrity.
- C. Patch the Amazon RDS operating system.
- D. Maintain identity and access management controls.
- E. Secure Availability Zones.

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `BD`
**需求/考点标签：** Shared Responsibility
**社区投票：** BD 100%

### Q627.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q627.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Secure the virtualization layer. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Encrypt data and maintain data integrity. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Patch the Amazon RDS operating system. | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |
| D | Maintain identity and access management controls. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| E | Secure Availability Zones. | Availability Zone 是 Region 内相互隔离的故障域/部署位置。 | 题库记录为非正确选项 |

### Q627.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q631-Shared-Responsibility题

**题目：** Under the AWS shared responsibility model, which of the following is a responsibility of the customer?

**选项：**

- A. Shred disk drives before they leave a data center.
- B. Prevent customers from gathering packets or collecting traffic at the hypervisor level.
- C. Patch the guest operating system with the latest security patches.
- D. Maintain security systems that provide physical monitoring of data centers.

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `C`
**需求/考点标签：** Shared Responsibility
**社区投票：** C 100%

### Q631.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q631.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Shred disk drives before they leave a data center. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Prevent customers from gathering packets or collecting traffic at the hypervisor level. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Patch the guest operating system with the latest security patches. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Maintain security systems that provide physical monitoring of data centers. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q631.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q648-Shared-Responsibility题

**题目：** Which of the following is a customer responsibility according to the AWS shared responsibility model?

**选项：**

- A. Apply security patches for Amazon S3 infrastructure devices.
- B. Provide physical security for AWS datacenters.
- C. Install operating system updates on Lambda@Edge.
- D. Implement multi-factor authentication (MFA) for IAM user accounts.

**主分类：** C4-15 Shared-Responsibility题
**题库记录答案：** `D`
**需求/考点标签：** Shared Responsibility

### Q648.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Shared Responsibility**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q648.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Apply security patches for Amazon S3 infrastructure devices. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | Provide physical security for AWS datacenters. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Install operating system updates on Lambda@Edge. | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| D | Implement multi-factor authentication (MFA) for IAM user accounts. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。；MFA：多因素认证，增强账号登录安全。 | 题库记录为正确选项 |

### Q648.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。；MFA：多因素认证，增强账号登录安全。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---
