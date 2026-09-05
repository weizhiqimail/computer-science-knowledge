# C4-05-S3对象存储与Storage-Class题

> 资料口径：本模块以用户提供的 719 道 CLF-C02 题库与前序 C1/C2 项目资料为基础。题库的 `correct_answer`、社区投票与评论用于发现考点和争议，不自动等于当前 AWS 官方结论；本模块没有在生成过程中擅自用外部常识覆盖题库内容。凡现有项目已经明确标记为 `[UPDATED]`、`[LEGACY]`、`[CURRENT-OUT-OF-SCOPE]` 的内容，会继续保留这些状态提示。正式考试前，涉及当前产品状态和 Support 计划等时效信息仍应再对照 AWS 官方页面。

本文件共收录 **26** 道主分类题。范围：S3、Object、Bucket、Storage Class、Lifecycle、Versioning。

> 注意：这里的“正确”指题库 `correct_answer` 记录。若题目存在明显争议/历史差异，会明确标记并同时收入 C4-27。
## Q18-S3对象存储与Storage-Class题

**题目：** A company is storing sensitive customer data in an Amazon S3 bucket. The company wants to protect the data from accidental deletion or overwriting. Which S3 feature should the company use to meet these requirements?

**选项：**

- A. S3 Lifecycle rules
- B. S3 Versioning
- C. S3 bucket policies
- D. S3 server-side encryption

**主分类：** C4-05 S3对象存储与Storage-Class题
**题库记录答案：** `B`
**需求/考点标签：** Object Storage
**社区投票：** B 100%

### Q18.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q18.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | S3 Lifecycle rules | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | S3 Versioning | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| C | S3 bucket policies | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | S3 server-side encryption | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q18.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q83-S3对象存储与Storage-Class题

**题目：** A user wants to review all Amazon S3 buckets with ACLs and S3 bucket policies in the S3 console. Which AWS service or resource will meet this requirement?

**选项：**

- A. S3 Multi-Region Access Points
- B. S3 Storage Lens
- C. AWS IAM Identity Center (AWS Single Sign-On)
- D. Access Analyzer for S3

**主分类：** C4-05 S3对象存储与Storage-Class题
**题库记录答案：** `D`
**需求/考点标签：** Object Storage
**社区投票：** D 97%

### Q83.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q83.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | S3 Multi-Region Access Points | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | S3 Storage Lens | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| C | AWS IAM Identity Center (AWS Single Sign-On) | AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| D | Access Analyzer for S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |

### Q83.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q87-S3对象存储与Storage-Class题

**题目：** Which AWS service provides highly durable object storage?

**选项：**

- A. Amazon S3
- B. Amazon Elastic File System (Amazon EFS)
- C. Amazon Elastic Block Store (Amazon EBS)
- D. Amazon FSx

**主分类：** C4-05 S3对象存储与Storage-Class题
**题库记录答案：** `A`
**需求/考点标签：** Durability / Object Storage
**社区投票：** A 100%

### Q87.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Durability、Object Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q87.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| B | Amazon Elastic File System (Amazon EFS) | Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。 | 题库记录为非正确选项 |
| C | Amazon Elastic Block Store (Amazon EBS) | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |
| D | Amazon FSx | Amazon FSx：托管专业文件系统家族，覆盖 Windows/高性能等文件工作负载。 | 题库记录为非正确选项 |

### Q87.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q123-S3对象存储与Storage-Class题

**题目：** A company wants to store and retrieve files in Amazon S3 for its existing on-premises applications by using industry-standard file system protocols. Which AWS service will meet these requirements?

**选项：**

- A. AWS DataSync
- B. AWS Snowball Edge
- C. Amazon S3 File Gateway
- D. AWS Transfer Family

**主分类：** C4-05 S3对象存储与Storage-Class题
**题库记录答案：** `C`
**需求/考点标签：** Object Storage / Hybrid Cloud
**社区投票：** C 82%, D 18%

### Q123.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage、Hybrid Cloud**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q123.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS DataSync | AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。 | 题库记录为非正确选项 |
| B | AWS Snowball Edge | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为非正确选项 |
| C | Amazon S3 File Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。；Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| D | AWS Transfer Family | AWS Transfer Family：为 SFTP/FTPS/FTP 等协议提供托管文件传输入口。 | 题库记录为非正确选项 |

### Q123.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。；Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q143-S3对象存储与Storage-Class题

**题目：** A company needs to quickly and securely move files over long distances between its client and an Amazon S3 bucket. Which S3 feature will meet this requirement?

**选项：**

- A. S3 Versioning
- B. S3 Transfer Acceleration
- C. S3ACLs
- D. S3 Intelligent-Tiering

**主分类：** C4-05 S3对象存储与Storage-Class题
**题库记录答案：** `B`
**需求/考点标签：** Object Storage
**社区投票：** B 100%

### Q143.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q143.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | S3 Versioning | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | S3 Transfer Acceleration | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| C | S3ACLs | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | S3 Intelligent-Tiering | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q143.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q153-S3对象存储与Storage-Class题

**题目：** A company wants to query its server logs to gain insights about its customers’ experiences. Which AWS service will store this data MOST cost-effectively?

**选项：**

- A. Amazon Aurora
- B. Amazon Elastic File System (Amazon EFS)
- C. Amazon Elastic Block Store (Amazon EBS)
- D. Amazon S3

**主分类：** C4-05 S3对象存储与Storage-Class题
**题库记录答案：** `D`
**需求/考点标签：** Cost Optimization
**社区投票：** D 100%

### Q153.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Cost Optimization**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q153.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为非正确选项 |
| B | Amazon Elastic File System (Amazon EFS) | Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。 | 题库记录为非正确选项 |
| C | Amazon Elastic Block Store (Amazon EBS) | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |
| D | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |

### Q153.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q179-S3对象存储与Storage-Class题

**题目：** Which of the following describes some of the core functionality of Amazon S3?

**选项：**

- A. Amazon S3 is a high-performance block storage service that is designed for use with Amazon EC2.
- B. Amazon S3 is an object storage service that provides high-level performance, security, scalability, and data availability.
- C. Amazon S3 is a fully managed, highly reliable, and scalable file storage system that is accessible over the industry-
- D. Amazon S3 is a scalable, fully managed elastic NFS for use with AWS Cloud services and on-premises resources.

**主分类：** C4-05 S3对象存储与Storage-Class题
**题库记录答案：** `B`
**需求/考点标签：** Object Storage
**社区投票：** B 100%

### Q179.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q179.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon S3 is a high-performance block storage service that is designed for use with Amazon EC2. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。；Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | Amazon S3 is an object storage service that provides high-level performance, security, scalability, and data availability. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| C | Amazon S3 is a fully managed, highly reliable, and scalable file storage system that is accessible over the industry- | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | Amazon S3 is a scalable, fully managed elastic NFS for use with AWS Cloud services and on-premises resources. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q179.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q201-S3对象存储与Storage-Class题

**题目：** A company is storing data that will not be frequently accessed in the AWS Cloud. If the company needs to access the data, the data needs to be retrieved within 12 hours. The company wants a solution that is cost-effective for storage costs for each gigabyte. Which Amazon S3 storage class will meet these requirements?

**选项：**

- A. S3 Standard
- B. S3 Glacier Flexible Retrieval
- C. S3 One Zone-Infrequent Access (S3 One Zone-IA)
- D. S3 Standard-Infrequent Access (S3 Standard-IA)

**主分类：** C4-05 S3对象存储与Storage-Class题
**题库记录答案：** `B`
**需求/考点标签：** Object Storage / Cost Optimization
**社区投票：** B 67%, C 33%

### Q201.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage、Cost Optimization**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q201.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | S3 Standard | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | S3 Glacier Flexible Retrieval | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| C | S3 One Zone-Infrequent Access (S3 One Zone-IA) | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | S3 Standard-Infrequent Access (S3 Standard-IA) | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q201.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q201.4-⚠-争议/版本提示

- 社区投票分散，最高项仅 67%
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q219-S3对象存储与Storage-Class题

**题目：** Which encryption types can be used to protect objects at rest in Amazon S3? (Choose two.)

**选项：**

- A. Server-side encryption with Amazon S3 managed encryption keys (SSE-S3)
- B. Server-side encryption with AWS KMS managed keys (SSE-KMS)
- C. TLS
- D. SSL
- E. Transparent Data Encryption (TDE)

**主分类：** C4-05 S3对象存储与Storage-Class题
**题库记录答案：** `AB`
**需求/考点标签：** Encryption / Object Storage
**社区投票：** AB 67%, AE 33%

### Q219.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Encryption、Object Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q219.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Server-side encryption with Amazon S3 managed encryption keys (SSE-S3) | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| B | Server-side encryption with AWS KMS managed keys (SSE-KMS) | AWS KMS：集中创建、控制和使用加密密钥。 | 题库记录为正确选项 |
| C | TLS | 传输加密保护网络传输中的数据。 | 题库记录为非正确选项 |
| D | SSL | 传输加密保护网络传输中的数据。 | 题库记录为非正确选项 |
| E | Transparent Data Encryption (TDE) | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q219.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。；AWS KMS：集中创建、控制和使用加密密钥。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q219.4-⚠-争议/版本提示

- 社区投票分散，最高项仅 67%
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q251-S3对象存储与Storage-Class题

**题目：** A company wants to store data in Amazon S3. The company rarely access the data, and the data can be regenerated if necessary. The company wants to store the data in the most cost-effective storage class. Which S3 storage class will meet this requirement?

**选项：**

- A. S3 Standard
- B. S3 Intelligent-Tiering
- C. S3 Standard-Infrequent Access (S3 Standard-IA)
- D. S3 One Zone-Infrequent Access (S3 One Zone-IA)

**主分类：** C4-05 S3对象存储与Storage-Class题
**题库记录答案：** `D`
**需求/考点标签：** Object Storage / Cost Optimization
**社区投票：** D 84%, C 16%

### Q251.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage、Cost Optimization**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q251.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | S3 Standard | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | S3 Intelligent-Tiering | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| C | S3 Standard-Infrequent Access (S3 Standard-IA) | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | S3 One Zone-Infrequent Access (S3 One Zone-IA) | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |

### Q251.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q274-S3对象存储与Storage-Class题

**题目：** A company wants to save costs by archiving data that is no longer frequently accessed by end users. Which Amazon S3 feature will meet this requirement?

**选项：**

- A. S3 Versioning
- B. S3 Lifecycle
- C. S3 Object Lock
- D. S3 Inventory

**主分类：** C4-05 S3对象存储与Storage-Class题
**题库记录答案：** `B`
**需求/考点标签：** Object Storage
**社区投票：** B 100%

### Q274.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q274.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | S3 Versioning | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | S3 Lifecycle | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| C | S3 Object Lock | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | S3 Inventory | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q274.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q294-S3对象存储与Storage-Class题

**题目：** Which Amazon S3 storage class is MOST cost-effective for unknown access patterns?

**选项：**

- A. S3 Standard
- B. S3 Standard-Infrequent Access (S3 Standard-IA)
- C. S3 One Zone-Infrequent Access (S3 One Zone-IA)
- D. S3 Intelligent-Tiering

**主分类：** C4-05 S3对象存储与Storage-Class题
**题库记录答案：** `D`
**需求/考点标签：** Object Storage / Cost Optimization
**社区投票：** D 100%

### Q294.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage、Cost Optimization**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q294.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | S3 Standard | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | S3 Standard-Infrequent Access (S3 Standard-IA) | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| C | S3 One Zone-Infrequent Access (S3 One Zone-IA) | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | S3 Intelligent-Tiering | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |

### Q294.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q313-S3对象存储与Storage-Class题

**题目：** A company wants durable storage for static content and infinitely scalable data storage infrastructure at the lowest cost. Which AWS service should the company choose?

**选项：**

- A. Amazon Elastic Block Store (Amazon EBS)
- B. Amazon S3
- C. AWS Storage Gateway
- D. Amazon Elastic File System (Amazon EFS)

**主分类：** C4-05 S3对象存储与Storage-Class题
**题库记录答案：** `B`
**需求/考点标签：** Scalability / Durability
**社区投票：** B 100%

### Q313.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Scalability、Durability**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q313.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Elastic Block Store (Amazon EBS) | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |
| B | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| C | AWS Storage Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为非正确选项 |
| D | Amazon Elastic File System (Amazon EFS) | Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。 | 题库记录为非正确选项 |

### Q313.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q338-S3对象存储与Storage-Class题

**题目：** A company wants to track tags, buckets, and prefixes for its Amazon S3 objects. Which S3 feature will meet this requirement?

**选项：**

- A. S3 Inventory report
- B. S3 Lifecycle
- C. S3 Versioning
- D. S3 ACLs

**主分类：** C4-05 S3对象存储与Storage-Class题
**题库记录答案：** `A`
**需求/考点标签：** Object Storage
**社区投票：** A 100%

### Q338.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q338.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | S3 Inventory report | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| B | S3 Lifecycle | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| C | S3 Versioning | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | S3 ACLs | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q338.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q349-S3对象存储与Storage-Class题

**题目：** What does the Amazon S3 Intelligent-Tiering storage class offer?

**选项：**

- A. Payment flexibility by reserving storage capacity
- B. Long-term retention of data by copying the data to an encrypted Amazon Elastic Block Store (Amazon EBS) volume
- C. Automatic cost savings by moving objects between tiers based on access pattern changes
- D. Secure, durable, and lowest cost storage for data archival

**主分类：** C4-05 S3对象存储与Storage-Class题
**题库记录答案：** `C`
**需求/考点标签：** Object Storage
**社区投票：** C 100%

### Q349.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q349.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Payment flexibility by reserving storage capacity | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Long-term retention of data by copying the data to an encrypted Amazon Elastic Block Store (Amazon EBS) volume | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |
| C | Automatic cost savings by moving objects between tiers based on access pattern changes | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Secure, durable, and lowest cost storage for data archival | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q349.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q368-S3对象存储与Storage-Class题

**题目：** Which Amazon S3 feature or storage class uses the AWS backbone network and edge locations to reduce latencies from the end user to Amazon S3?

**选项：**

- A. S3 Cross-Region Replication
- B. S3 Transfer Acceleration
- C. S3 Event Notifications
- D. S3 Standard-Infrequent Access (S3 Standard-IA)

**主分类：** C4-05 S3对象存储与Storage-Class题
**题库记录答案：** `B`
**需求/考点标签：** 全球静态内容加速
**社区投票：** B 100%

### Q368.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**全球静态内容加速**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q368.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | S3 Cross-Region Replication | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | S3 Transfer Acceleration | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| C | S3 Event Notifications | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | S3 Standard-Infrequent Access (S3 Standard-IA) | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q368.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q446-S3对象存储与Storage-Class题

**题目：** A company stores a large amount of data that auditors access only twice each year. Which Amazon S3 storage class should the company use to store the data with the LOWEST cost?

**选项：**

- A. Amazon S3 Outposts
- B. Amazon S3 Glacier Instant Retrieval
- C. Amazon S3 Standard
- D. Amazon S3 Intelligent-Tiering

**主分类：** C4-05 S3对象存储与Storage-Class题
**题库记录答案：** `B`
**需求/考点标签：** Object Storage / Audit Trail
**社区投票：** B 65%, D 35%

### Q446.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage、Audit Trail**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q446.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon S3 Outposts | AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。；Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | Amazon S3 Glacier Instant Retrieval | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| C | Amazon S3 Standard | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | Amazon S3 Intelligent-Tiering | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q446.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q446.4-⚠-争议/版本提示

- 社区投票分散，最高项仅 65%
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q450-S3对象存储与Storage-Class题

**题目：** A company wants to store its files in the AWS Cloud. Users need to be able to download these files directly using a public URL. Which AWS service or feature will meet this requirement?

**选项：**

- A. Amazon Redshift
- B. Amazon Elastic Block Store (Amazon EBS)
- C. Amazon Elastic File System (Amazon EFS)
- D. Amazon S3

**主分类：** C4-05 S3对象存储与Storage-Class题
**题库记录答案：** `D`
**社区投票：** D 100%

### Q450.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q450.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Redshift | Amazon Redshift：托管云数据仓库，用于大规模分析型查询。 | 题库记录为非正确选项 |
| B | Amazon Elastic Block Store (Amazon EBS) | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |
| C | Amazon Elastic File System (Amazon EFS) | Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。 | 题库记录为非正确选项 |
| D | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |

### Q450.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q453-S3对象存储与Storage-Class题

**题目：** A cloud engineer wants to store data in Amazon S3. The engineer will access some of the data yearly and some of the data daily. Which S3 storage class will meet these requirements MOST cost-effectively?

**选项：**

- A. S3 Standard
- B. S3 Glacier Deep Archive
- C. S3 One Zone-Infrequent Access (S3 One Zone-IA)
- D. S3 Intelligent-Tiering

**主分类：** C4-05 S3对象存储与Storage-Class题
**题库记录答案：** `D`
**需求/考点标签：** Object Storage / Cost Optimization
**社区投票：** D 100%

### Q453.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage、Cost Optimization**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q453.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | S3 Standard | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | S3 Glacier Deep Archive | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| C | S3 One Zone-Infrequent Access (S3 One Zone-IA) | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | S3 Intelligent-Tiering | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |

### Q453.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q456-S3对象存储与Storage-Class题

**题目：** A company needs to store infrequently used data for data archives and long-term backups. Which AWS service or storage class will meet these requirements MOST cost-effectively?

**选项：**

- A. Amazon FSx for Lustre
- B. Amazon Elastic Block Store (Amazon EBS)
- C. Amazon Elastic File System (Amazon EFS)
- D. Amazon S3 Glacier Flexible Retrieval

**主分类：** C4-05 S3对象存储与Storage-Class题
**题库记录答案：** `D`
**需求/考点标签：** 稳定长期计算
**社区投票：** D 100%

### Q456.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**稳定长期计算**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q456.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon FSx for Lustre | Amazon FSx：托管专业文件系统家族，覆盖 Windows/高性能等文件工作负载。 | 题库记录为非正确选项 |
| B | Amazon Elastic Block Store (Amazon EBS) | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |
| C | Amazon Elastic File System (Amazon EFS) | Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。 | 题库记录为非正确选项 |
| D | Amazon S3 Glacier Flexible Retrieval | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |

### Q456.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q523-S3对象存储与Storage-Class题

**题目：** A company must archive its documents by using a write-once, read-many (WORM) model to meet legal and compliance obligations. Which feature of Amazon S3 can the company use to meet this requirement?

**选项：**

- A. S3 Versioning
- B. S3 bucket policy
- C. S3 Glacier Vault Lock
- D. S3 multi-factor authentication (MFA) delete

**主分类：** C4-05 S3对象存储与Storage-Class题
**题库记录答案：** `C`
**需求/考点标签：** 配置变化与合规
**社区投票：** C 100%

### Q523.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q523.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | S3 Versioning | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | S3 bucket policy | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| C | S3 Glacier Vault Lock | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| D | S3 multi-factor authentication (MFA) delete | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。；MFA：多因素认证，增强账号登录安全。 | 题库记录为非正确选项 |

### Q523.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q560-S3对象存储与Storage-Class题

**题目：** A company needs to use AWS technology to deploy a static website. Which solution meets this requirement with the LEAST amount of operational overhead?

**选项：**

- A. Deploy the website on Amazon EC2.
- B. Host the website on AWS Elastic Beanstalk.
- C. Deploy the website with Amazon Lightsail.
- D. Host the website on Amazon S3.

**主分类：** C4-05 S3对象存储与Storage-Class题
**题库记录答案：** `D`
**需求/考点标签：** Block Storage
**社区投票：** D 100%

### Q560.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Block Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q560.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Deploy the website on Amazon EC2. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| B | Host the website on AWS Elastic Beanstalk. | AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。 | 题库记录为非正确选项 |
| C | Deploy the website with Amazon Lightsail. | Amazon Lightsail：面向简单网站/小型应用的简化云平台与可预测套餐。 | 题库记录为非正确选项 |
| D | Host the website on Amazon S3. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |

### Q560.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q607-S3对象存储与Storage-Class题

**题目：** A company needs to use Amazon S3 to store audio files that are each 5 megabytes in size. The company will rarely access the files, but the company must be able to retrieve the files immediately. Which S3 storage class will meet these requirements MOST cost-effectively?

**选项：**

- A. S3 Standard
- B. S3 Standard-Infrequent Access (S3 Standard-IA)
- C. S3 Glacier Flexible Retrieval
- D. S3 Glacier Deep Archive

**主分类：** C4-05 S3对象存储与Storage-Class题
**题库记录答案：** `B`
**需求/考点标签：** Object Storage / Cost Optimization
**社区投票：** B 80%, C 20%

### Q607.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage、Cost Optimization**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q607.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | S3 Standard | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | S3 Standard-Infrequent Access (S3 Standard-IA) | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| C | S3 Glacier Flexible Retrieval | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | S3 Glacier Deep Archive | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q607.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q658-S3对象存储与Storage-Class题

**题目：** What is the total volume of data that can be stored in Amazon S3?

**选项：**

- A. 10 PB
- B. 50 PB
- C. 100 PB
- D. Virtually unlimited

**主分类：** C4-05 S3对象存储与Storage-Class题
**题库记录答案：** `D`
**需求/考点标签：** Object Storage
**社区投票：** D 100%

### Q658.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q658.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | 10 PB | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | 50 PB | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | 100 PB | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Virtually unlimited | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q658.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q660-S3对象存储与Storage-Class题

**题目：** A company stores data in an Amazon S3 bucket. Which task is the responsibility of AWS?

**选项：**

- A. Configure an S3 Lifecycle policy.
- B. Activate S3 Versioning.
- C. Configure S3 bucket policies.
- D. Protect the infrastructure that supports S3 storage.

**主分类：** C4-05 S3对象存储与Storage-Class题
**题库记录答案：** `D`
**需求/考点标签：** Object Storage

### Q660.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q660.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Configure an S3 Lifecycle policy. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | Activate S3 Versioning. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| C | Configure S3 bucket policies. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | Protect the infrastructure that supports S3 storage. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |

### Q660.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q700-S3对象存储与Storage-Class题

**题目：** A company wants an Amazon S3 solution that provides access to object storage within single-digit milliseconds. Which solution will meet these requirements?

**选项：**

- A. S3 Express One Zone
- B. S3 Standard
- C. S3 Glacier Flexible Retrieval
- D. S3 Glacier Instant Retrieval

**主分类：** C4-05 S3对象存储与Storage-Class题
**题库记录答案：** `A`
**需求/考点标签：** Object Storage
**社区投票：** A 56%, B 44%

### Q700.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q700.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | S3 Express One Zone | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| B | S3 Standard | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| C | S3 Glacier Flexible Retrieval | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | S3 Glacier Instant Retrieval | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q700.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q700.4-⚠-争议/版本提示

- 社区投票分散，最高项仅 56%
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---
