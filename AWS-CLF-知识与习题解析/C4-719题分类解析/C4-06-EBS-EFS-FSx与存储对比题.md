# C4-06-EBS-EFS-FSx与存储对比题

> 资料口径：本模块以用户提供的 719 道 CLF-C02 题库与前序 C1/C2 项目资料为基础。题库的 `correct_answer`、社区投票与评论用于发现考点和争议，不自动等于当前 AWS 官方结论；本模块没有在生成过程中擅自用外部常识覆盖题库内容。凡现有项目已经明确标记为 `[UPDATED]`、`[LEGACY]`、`[CURRENT-OUT-OF-SCOPE]` 的内容，会继续保留这些状态提示。正式考试前，涉及当前产品状态和 Support 计划等时效信息仍应再对照 AWS 官方页面。

本文件共收录 **8** 道主分类题。范围：Block/File Storage、EBS、Instance Store、EFS、FSx。

> 注意：这里的“正确”指题库 `correct_answer` 记录。若题目存在明显争议/历史差异，会明确标记并同时收入 C4-27。
## Q109-EBS-EFS-FSx与存储对比题

**题目：** A company wants a fully managed Windows file server for its Windows-based applications. Which AWS service will meet this requirement?

**选项：**

- A. Amazon FSx
- B. Amazon Elastic Kubernetes Service (Amazon EKS)
- C. Amazon Elastic Container Service (Amazon ECS)
- D. Amazon EMR

**主分类：** C4-06 EBS-EFS-FSx与存储对比题
**题库记录答案：** `A`
**社区投票：** A 100%

### Q109.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q109.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon FSx | Amazon FSx：托管专业文件系统家族，覆盖 Windows/高性能等文件工作负载。 | 题库记录为正确选项 |
| B | Amazon Elastic Kubernetes Service (Amazon EKS) | Amazon EKS：AWS 托管 Kubernetes 控制面。 | 题库记录为非正确选项 |
| C | Amazon Elastic Container Service (Amazon ECS) | Amazon ECS：AWS 原生托管容器编排服务。 | 题库记录为非正确选项 |
| D | Amazon EMR | Amazon EMR：托管大数据框架平台，如 Spark/Hadoop。 | 题库记录为非正确选项 |

### Q109.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon FSx：托管专业文件系统家族，覆盖 Windows/高性能等文件工作负载。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q196-EBS-EFS-FSx与存储对比题

**题目：** A company needs fully managed, highly reliable, and scalable file storage that is accessible over the Server Message Block (SMB) protocol. Which AWS service will meet these requirements?

**选项：**

- A. Amazon S3
- B. Amazon Elastic File System (Amazon EFS)
- C. Amazon FSx for Windows File Server
- D. Amazon Elastic Block Store (Amazon EBS)

**主分类：** C4-06 EBS-EFS-FSx与存储对比题
**题库记录答案：** `C`
**需求/考点标签：** Scalability / File Storage
**社区投票：** C 100%

### Q196.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Scalability、File Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q196.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | Amazon Elastic File System (Amazon EFS) | Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。 | 题库记录为非正确选项 |
| C | Amazon FSx for Windows File Server | Amazon FSx：托管专业文件系统家族，覆盖 Windows/高性能等文件工作负载。 | 题库记录为正确选项 |
| D | Amazon Elastic Block Store (Amazon EBS) | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |

### Q196.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon FSx：托管专业文件系统家族，覆盖 Windows/高性能等文件工作负载。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q231-EBS-EFS-FSx与存储对比题

**题目：** Who enables encryption of data at rest for Amazon Elastic Block Store (Amazon EBS)?

**选项：**

- A. AWS Support
- B. AWS customers
- C. AWS Key Management Service (AWS KMS)
- D. AWS Trusted Advisor

**主分类：** C4-06 EBS-EFS-FSx与存储对比题
**题库记录答案：** `B`
**需求/考点标签：** Encryption / Block Storage
**社区投票：** B 78%, C 22%

### Q231.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Encryption、Block Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q231.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Support | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| B | AWS customers | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | AWS Key Management Service (AWS KMS) | AWS KMS：集中创建、控制和使用加密密钥。 | 题库记录为非正确选项 |
| D | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |

### Q231.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q231.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q312-EBS-EFS-FSx与存储对比题

**题目：** A company wants to provide access to Windows file shares in AWS from its on-premises workloads. The company does not want to provision any additional infrastructure or applications in its data center. Which AWS service will meet these requirements?

**选项：**

- A. Amazon FSx File Gateway
- B. AWS DataSync
- C. Amazon S3
- D. AWS Snow Family

**主分类：** C4-06 EBS-EFS-FSx与存储对比题
**题库记录答案：** `A`
**需求/考点标签：** Hybrid Cloud
**社区投票：** A 100%

### Q312.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q312.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon FSx File Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。；Amazon FSx：托管专业文件系统家族，覆盖 Windows/高性能等文件工作负载。 | 题库记录为正确选项 |
| B | AWS DataSync | AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。 | 题库记录为非正确选项 |
| C | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | AWS Snow Family | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为非正确选项 |

### Q312.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。；Amazon FSx：托管专业文件系统家族，覆盖 Windows/高性能等文件工作负载。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q317-EBS-EFS-FSx与存储对比题

**题目：** A company needs a fully managed file server that natively supports Microsoft workloads and file systems. The file server must also support the SMB protocol. Which AWS service should the company use to meet these requirements?

**选项：**

- A. Amazon Elastic File System (Amazon EFS)
- B. Amazon FSx for Lustre
- C. Amazon FSx for Windows File Server
- D. Amazon Elastic Block Store (Amazon EBS)

**主分类：** C4-06 EBS-EFS-FSx与存储对比题
**题库记录答案：** `C`
**需求/考点标签：** File Storage
**社区投票：** C 100%

### Q317.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**File Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q317.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Elastic File System (Amazon EFS) | Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。 | 题库记录为非正确选项 |
| B | Amazon FSx for Lustre | Amazon FSx：托管专业文件系统家族，覆盖 Windows/高性能等文件工作负载。 | 题库记录为非正确选项 |
| C | Amazon FSx for Windows File Server | Amazon FSx：托管专业文件系统家族，覆盖 Windows/高性能等文件工作负载。 | 题库记录为正确选项 |
| D | Amazon Elastic Block Store (Amazon EBS) | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |

### Q317.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon FSx：托管专业文件系统家族，覆盖 Windows/高性能等文件工作负载。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q473-EBS-EFS-FSx与存储对比题

**题目：** Which AWS service allows for file sharing between multiple Amazon EC2 instances?

**选项：**

- A. AWS Direct Connect
- B. AWS Snowball Edge
- C. AWS Backup
- D. Amazon Elastic File System (Amazon EFS)

**主分类：** C4-06 EBS-EFS-FSx与存储对比题
**题库记录答案：** `D`
**社区投票：** D 100%

### Q473.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q473.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为非正确选项 |
| B | AWS Snowball Edge | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为非正确选项 |
| C | AWS Backup | AWS Backup：集中管理 AWS 资源备份策略、计划与保留。 | 题库记录为非正确选项 |
| D | Amazon Elastic File System (Amazon EFS) | Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。 | 题库记录为正确选项 |

### Q473.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q593-EBS-EFS-FSx与存储对比题

**题目：** A user needs to perform a one-time backup of an Amazon Elastic Block Store (Amazon EBS) volume that is attached to an Amazon EC2 instance. What is the MOST operationally efficient way to perform this backup?

**选项：**

- A. Attach another EBS volume to the EC2 instance, and copy the contents.
- B. Copy the EBS volume to a server that is running outside AWS and is connected with AWS Direct Connect.
- C. Create an EBS snapshot of the volume.
- D. Create a custom script to copy the EBS file contents to Amazon S3.

**主分类：** C4-06 EBS-EFS-FSx与存储对比题
**题库记录答案：** `C`
**需求/考点标签：** Block Storage
**社区投票：** C 100%

### Q593.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Block Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q593.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Attach another EBS volume to the EC2 instance, and copy the contents. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。；Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |
| B | Copy the EBS volume to a server that is running outside AWS and is connected with AWS Direct Connect. | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。；Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |
| C | Create an EBS snapshot of the volume. | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为正确选项 |
| D | Create a custom script to copy the EBS file contents to Amazon S3. | Amazon EBS：面向 EC2 的持久化块存储卷。；Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q593.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EBS：面向 EC2 的持久化块存储卷。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q625-EBS-EFS-FSx与存储对比题

**题目：** A company needs a managed NFS file system that the company can use with its AWS compute resources. Which AWS service or feature will meet these requirements?

**选项：**

- A. Amazon Elastic Block Store (Amazon EBS)
- B. AWS Storage Gateway Tape Gateway
- C. Amazon S3 Glacier Flexible Retrieval
- D. Amazon Elastic File System (Amazon EFS)

**主分类：** C4-06 EBS-EFS-FSx与存储对比题
**题库记录答案：** `D`
**需求/考点标签：** File Storage

### Q625.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**File Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q625.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Elastic Block Store (Amazon EBS) | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |
| B | AWS Storage Gateway Tape Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为非正确选项 |
| C | Amazon S3 Glacier Flexible Retrieval | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | Amazon Elastic File System (Amazon EFS) | Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。 | 题库记录为正确选项 |

### Q625.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---
