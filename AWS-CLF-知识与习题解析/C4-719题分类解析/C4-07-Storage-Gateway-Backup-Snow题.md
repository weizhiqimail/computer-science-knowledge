# C4-07-Storage-Gateway-Backup-Snow题

> 资料口径：本模块以用户提供的 719 道 CLF-C02 题库与前序 C1/C2 项目资料为基础。题库的 `correct_answer`、社区投票与评论用于发现考点和争议，不自动等于当前 AWS 官方结论；本模块没有在生成过程中擅自用外部常识覆盖题库内容。凡现有项目已经明确标记为 `[UPDATED]`、`[LEGACY]`、`[CURRENT-OUT-OF-SCOPE]` 的内容，会继续保留这些状态提示。正式考试前，涉及当前产品状态和 Support 计划等时效信息仍应再对照 AWS 官方页面。

本文件共收录 **18** 道主分类题。范围：Storage Gateway、AWS Backup、Snow Family、混合存储。

> 注意：这里的“正确”指题库 `correct_answer` 记录。若题目存在明显争议/历史差异，会明确标记并同时收入 C4-27。
## Q1-Storage-Gateway-Backup-Snow题

**题目：** A company plans to use an Amazon Snowball Edge device to transfer files to the AWS Cloud. Which activities related to a Snowball Edge device are available to the company at no cost?

**选项：**

- A. Use of the Snowball Edge appliance for a 10-day period
- B. The transfer of data out of Amazon S3 and to the Snowball Edge appliance
- C. The transfer of data from the Snowball Edge appliance into Amazon S3
- D. Daily use of the Snowball Edge appliance after 10 days

**主分类：** C4-07 Storage-Gateway-Backup-Snow题
**题库记录答案：** `C`
**需求/考点标签：** 离线大规模数据迁移
**社区投票：** C 84%, A 16%

### Q1.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**离线大规模数据迁移**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q1.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Use of the Snowball Edge appliance for a 10-day period | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为非正确选项 |
| B | The transfer of data out of Amazon S3 and to the Snowball Edge appliance | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。；Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| C | The transfer of data from the Snowball Edge appliance into Amazon S3 | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。；Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| D | Daily use of the Snowball Edge appliance after 10 days | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为非正确选项 |

### Q1.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。；Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q3-Storage-Gateway-Backup-Snow题

**题目：** A company has a centralized group of users with large file storage requirements that have exceeded the space available on premises. The company wants to extend its file storage capabilities for this group while retaining the performance benefit of sharing content locally. What is the MOST operationally efficient AWS solution for this scenario?

**选项：**

- A. Create an Amazon S3 bucket for each user. Mount each bucket by using an S3 file system mounting utility.
- B. Configure and deploy an AWS Storage Gateway file gateway. Connect each user’s workstation to the file gateway.
- C. Move each user’s working environment to Amazon WorkSpaces. Set up an Amazon WorkDocs account for each user.
- D. Deploy an Amazon EC2 instance and attach an Amazon Elastic Block Store (Amazon EBS) Provisioned IOPS volume.

**主分类：** C4-07 Storage-Gateway-Backup-Snow题
**题库记录答案：** `B`
**需求/考点标签：** File Storage / Hybrid Cloud
**社区投票：** B 97%

### Q3.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**File Storage、Hybrid Cloud**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q3.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Create an Amazon S3 bucket for each user. Mount each bucket by using an S3 file system mounting utility. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | Configure and deploy an AWS Storage Gateway file gateway. Connect each user’s workstation to the file gateway. | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为正确选项 |
| C | Move each user’s working environment to Amazon WorkSpaces. Set up an Amazon WorkDocs account for each user. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Deploy an Amazon EC2 instance and attach an Amazon Elastic Block Store (Amazon EBS) Provisioned IOPS volume. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。；Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |

### Q3.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q3.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：workdocs
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q90-Storage-Gateway-Backup-Snow题

**题目：** Which AWS service is a hybrid cloud storage service that provides on-premises users access to virtually unlimited cloud storage?

**选项：**

- A. AWS DataSync
- B. Amazon S3 Glacier
- C. AWS Storage Gateway
- D. Amazon Elastic Block Store (Amazon EBS)

**主分类：** C4-07 Storage-Gateway-Backup-Snow题
**题库记录答案：** `C`
**需求/考点标签：** Hybrid Cloud
**社区投票：** C 100%

### Q90.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q90.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS DataSync | AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。 | 题库记录为非正确选项 |
| B | Amazon S3 Glacier | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| C | AWS Storage Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为正确选项 |
| D | Amazon Elastic Block Store (Amazon EBS) | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |

### Q90.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q103-Storage-Gateway-Backup-Snow题

**题目：** A company is using a third-party service to back up 10 TB of data to a tape library. The on-premises backup server is running out of space. The company wants to use AWS services for the backups without changing its existing backup workflows. Which AWS service should the company use to meet these requirements?

**选项：**

- A. Amazon Elastic Block Store (Amazon EBS)
- B. AWS Storage Gateway
- C. Amazon Elastic Container Service (Amazon ECS)
- D. AWS Lambda

**主分类：** C4-07 Storage-Gateway-Backup-Snow题
**题库记录答案：** `B`
**需求/考点标签：** 工作流编排
**社区投票：** B 100%

### Q103.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作流编排**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q103.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Elastic Block Store (Amazon EBS) | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |
| B | AWS Storage Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为正确选项 |
| C | Amazon Elastic Container Service (Amazon ECS) | Amazon ECS：AWS 原生托管容器编排服务。 | 题库记录为非正确选项 |
| D | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |

### Q103.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q110-Storage-Gateway-Backup-Snow题

**题目：** A company wants to migrate its NFS on-premises workload to AWS. Which AWS Storage Gateway type should the company use to meet this requirement?

**选项：**

- A. Tape Gateway
- B. Volume Gateway
- C. Amazon FSx File Gateway
- D. Amazon S3 File Gateway

**主分类：** C4-07 Storage-Gateway-Backup-Snow题
**题库记录答案：** `D`
**需求/考点标签：** File Storage / Hybrid Cloud / Migration
**社区投票：** D 72%, C 28%

### Q110.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**File Storage、Hybrid Cloud、Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q110.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Tape Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为非正确选项 |
| B | Volume Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为非正确选项 |
| C | Amazon FSx File Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。；Amazon FSx：托管专业文件系统家族，覆盖 Windows/高性能等文件工作负载。 | 题库记录为非正确选项 |
| D | Amazon S3 File Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。；Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |

### Q110.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。；Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q151-Storage-Gateway-Backup-Snow题

**题目：** A company is moving an on-premises data center to the AWS Cloud. The company must migrate 50 petabytes of file storage data to AWS with the least possible operational overhead. Which AWS service or resource should the company use to meet these requirements?

**选项：**

- A. AWS Snowmobile
- B. AWS Snowball Edge
- C. AWS Data Exchange
- D. AWS Database Migration Service (AWS DMS)

**主分类：** C4-07 Storage-Gateway-Backup-Snow题
**题库记录答案：** `A`
**需求/考点标签：** File Storage / Hybrid Cloud / Migration
**社区投票：** A 89%, B 11%

### Q151.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**File Storage、Hybrid Cloud、Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q151.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Snowmobile | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为正确选项 |
| B | AWS Snowball Edge | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为非正确选项 |
| C | AWS Data Exchange | AWS Data Exchange：查找、订阅和使用第三方数据集的服务。 | 题库记录为非正确选项 |
| D | AWS Database Migration Service (AWS DMS) | AWS DMS：在线迁移/复制数据库数据并尽量减少停机。 | 题库记录为非正确选项 |

### Q151.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q191-Storage-Gateway-Backup-Snow题

**题目：** A company has a fleet of cargo ships. The cargo ships have sensors that collect data at sea, where there is intermittent or no internet connectivity. The company needs to collect, format, and process the data at sea and move the data to AWS later. Which AWS service should the company use to meet these requirements?

**选项：**

- A. AWS IoT Core
- B. Amazon Lightsail
- C. AWS Storage Gateway
- D. AWS Snowball Edge

**主分类：** C4-07 Storage-Gateway-Backup-Snow题
**题库记录答案：** `D`
**社区投票：** D 100%

### Q191.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q191.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS IoT Core | AWS IoT Core：安全连接 IoT 设备并处理设备消息的托管服务。 | 题库记录为非正确选项 |
| B | Amazon Lightsail | Amazon Lightsail：面向简单网站/小型应用的简化云平台与可预测套餐。 | 题库记录为非正确选项 |
| C | AWS Storage Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为非正确选项 |
| D | AWS Snowball Edge | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为正确选项 |

### Q191.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q205-Storage-Gateway-Backup-Snow题

**题目：** A company is planning to move data backups to the AWS Cloud. The company needs to replace on-premises storage with storage that is cloud-based but locally cached. Which AWS service meets these requirements?

**选项：**

- A. AWS Storage Gateway
- B. AWS Snowcone
- C. AWS Backup
- D. Amazon Elastic File System (Amazon EFS)

**主分类：** C4-07 Storage-Gateway-Backup-Snow题
**题库记录答案：** `A`
**需求/考点标签：** 热点数据缓存
**社区投票：** A 91%, D 9%

### Q205.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**热点数据缓存**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q205.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Storage Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为正确选项 |
| B | AWS Snowcone | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为非正确选项 |
| C | AWS Backup | AWS Backup：集中管理 AWS 资源备份策略、计划与保留。 | 题库记录为非正确选项 |
| D | Amazon Elastic File System (Amazon EFS) | Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。 | 题库记录为非正确选项 |

### Q205.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q255-Storage-Gateway-Backup-Snow题

**题目：** A company has a physical tape library to store data backups. The tape library is running out of space. The company needs to extend the tape library's capacity to the AWS Cloud. Which AWS service should the company use to meet this requirement?

**选项：**

- A. Amazon Elastic File System (Amazon EFS)
- B. Amazon Elastic Block Store (Amazon EBS)
- C. Amazon S3
- D. AWS Storage Gateway

**主分类：** C4-07 Storage-Gateway-Backup-Snow题
**题库记录答案：** `D`
**社区投票：** D 100%

### Q255.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q255.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Elastic File System (Amazon EFS) | Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。 | 题库记录为非正确选项 |
| B | Amazon Elastic Block Store (Amazon EBS) | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |
| C | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | AWS Storage Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为正确选项 |

### Q255.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q263-Storage-Gateway-Backup-Snow题

**题目：** A company wants to migrate petabytes of data from its on-premises data center to AWS. The company does not want to use an internet connection to perform the migration. Which AWS service will meet these requirements?

**选项：**

- A. AWS DataSync
- B. Amazon Connect
- C. AWS Snowmobile
- D. AWS Direct Connect

**主分类：** C4-07 Storage-Gateway-Backup-Snow题
**题库记录答案：** `C`
**需求/考点标签：** Hybrid Cloud / Migration
**社区投票：** C 100%

### Q263.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q263.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS DataSync | AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。 | 题库记录为非正确选项 |
| B | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为非正确选项 |
| C | AWS Snowmobile | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为正确选项 |
| D | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为非正确选项 |

### Q263.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q270-Storage-Gateway-Backup-Snow题

**题目：** A team of researchers is going to collect data at remote locations around the world. Many locations do not have internet connectivity. The team needs to capture the data in the field, and transfer it to the AWS Cloud later. Which AWS service will support these requirements?

**选项：**

- A. AWS Outposts
- B. AWS Transfer Family
- C. AWS Snow Family
- D. AWS Migration Hub

**主分类：** C4-07 Storage-Gateway-Backup-Snow题
**题库记录答案：** `C`
**社区投票：** C 93%, A 7%

### Q270.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q270.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Outposts | AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。 | 题库记录为非正确选项 |
| B | AWS Transfer Family | AWS Transfer Family：为 SFTP/FTPS/FTP 等协议提供托管文件传输入口。 | 题库记录为非正确选项 |
| C | AWS Snow Family | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为正确选项 |
| D | AWS Migration Hub | AWS Migration Hub：集中跟踪多个迁移工具和应用迁移进度。 | 题库记录为非正确选项 |

### Q270.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q276-Storage-Gateway-Backup-Snow题

**题目：** A company wants an AWS service to collect and process 10 TB of data locally and transfer the data to AWS. The company has intermittent connectivity. Which AWS service will meet these requirements?

**选项：**

- A. AWS Database Migration Service (AWS DMS)
- B. AWS DataSync
- C. AWS Backup
- D. AWS Snowball Edge

**主分类：** C4-07 Storage-Gateway-Backup-Snow题
**题库记录答案：** `D`
**社区投票：** D 100%

### Q276.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q276.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Database Migration Service (AWS DMS) | AWS DMS：在线迁移/复制数据库数据并尽量减少停机。 | 题库记录为非正确选项 |
| B | AWS DataSync | AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。 | 题库记录为非正确选项 |
| C | AWS Backup | AWS Backup：集中管理 AWS 资源备份策略、计划与保留。 | 题库记录为非正确选项 |
| D | AWS Snowball Edge | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为正确选项 |

### Q276.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q355-Storage-Gateway-Backup-Snow题

**题目：** A company needs to move 75 petabytes of data from its on-premises data centers to AWS. Which AWS service should the company use to meet these requirements MOST cost-effectively?

**选项：**

- A. AWS Snowball Edge Storage Optimized
- B. AWS Snowmobile
- C. AWS Direct Connect
- D. AWS Storage Gateway

**主分类：** C4-07 Storage-Gateway-Backup-Snow题
**题库记录答案：** `B`
**需求/考点标签：** Hybrid Cloud / Cost Optimization
**社区投票：** B 75%, A 25%

### Q355.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Cost Optimization**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q355.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Snowball Edge Storage Optimized | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为非正确选项 |
| B | AWS Snowmobile | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为正确选项 |
| C | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为非正确选项 |
| D | AWS Storage Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为非正确选项 |

### Q355.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q364-Storage-Gateway-Backup-Snow题

**题目：** Which AWS service provides on-premises applications with low-latency access to data that is stored in the AWS Cloud?

**选项：**

- A. Amazon CloudFront
- B. AWS Storage Gateway
- C. AWS Backup
- D. AWS DataSync

**主分类：** C4-07 Storage-Gateway-Backup-Snow题
**题库记录答案：** `B`
**需求/考点标签：** Hybrid Cloud
**社区投票：** B 100%

### Q364.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q364.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon CloudFront | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。 | 题库记录为非正确选项 |
| B | AWS Storage Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为正确选项 |
| C | AWS Backup | AWS Backup：集中管理 AWS 资源备份策略、计划与保留。 | 题库记录为非正确选项 |
| D | AWS DataSync | AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。 | 题库记录为非正确选项 |

### Q364.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q400-Storage-Gateway-Backup-Snow题

**题目：** A company wants to define a central data protection policy that works across AWS services for compute, storage, and database resources. Which AWS service will meet this requirement?

**选项：**

- A. AWS Batch
- B. AWS Elastic Disaster Recovery
- C. AWS Backup
- D. Amazon FSx

**主分类：** C4-07 Storage-Gateway-Backup-Snow题
**题库记录答案：** `C`
**社区投票：** C 100%

### Q400.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q400.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Batch | AWS Batch：托管批处理作业调度与计算资源供给。 | 题库记录为非正确选项 |
| B | AWS Elastic Disaster Recovery | 灾难恢复关注更大范围故障后的恢复策略、RTO/RPO。 | 题库记录为非正确选项 |
| C | AWS Backup | AWS Backup：集中管理 AWS 资源备份策略、计划与保留。 | 题库记录为正确选项 |
| D | Amazon FSx | Amazon FSx：托管专业文件系统家族，覆盖 Windows/高性能等文件工作负载。 | 题库记录为非正确选项 |

### Q400.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Backup：集中管理 AWS 资源备份策略、计划与保留。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q533-Storage-Gateway-Backup-Snow题

**题目：** Which AWS solution gives companies the ability to use protocols such as NFS to store and retrieve objects in Amazon S3?

**选项：**

- A. Amazon FSx for Lustre
- B. AWS Storage Gateway volume gateway
- C. AWS Storage Gateway file gateway
- D. Amazon Elastic File System (Amazon EFS)

**主分类：** C4-07 Storage-Gateway-Backup-Snow题
**题库记录答案：** `C`
**需求/考点标签：** Object Storage / File Storage
**社区投票：** C 80%, A 20%

### Q533.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage、File Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q533.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon FSx for Lustre | Amazon FSx：托管专业文件系统家族，覆盖 Windows/高性能等文件工作负载。 | 题库记录为非正确选项 |
| B | AWS Storage Gateway volume gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为非正确选项 |
| C | AWS Storage Gateway file gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为正确选项 |
| D | Amazon Elastic File System (Amazon EFS) | Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。 | 题库记录为非正确选项 |

### Q533.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q671-Storage-Gateway-Backup-Snow题

**题目：** A company that is planning to migrate to the AWS Cloud is based in an isolated area that has limited internet connectivity. The company needs to perform local data processing on premises. The company needs a solution that can operate without a stable internet connection. Which AWS service will meet these requirements?

**选项：**

- A. Amazon S3
- B. AWS Snowball Edge
- C. AWS Storage Gateway
- D. AWS Backup

**主分类：** C4-07 Storage-Gateway-Backup-Snow题
**题库记录答案：** `B`
**需求/考点标签：** Hybrid Cloud / Migration
**社区投票：** B 100%

### Q671.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q671.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | AWS Snowball Edge | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为正确选项 |
| C | AWS Storage Gateway | AWS Storage Gateway：把本地环境通过文件/卷/虚拟磁带等接口连接 AWS 存储的混合存储服务。 | 题库记录为非正确选项 |
| D | AWS Backup | AWS Backup：集中管理 AWS 资源备份策略、计划与保留。 | 题库记录为非正确选项 |

### Q671.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q685-Storage-Gateway-Backup-Snow题

**题目：** A company wants a fully managed service that centralizes and automates data protection across AWS services and hybrid workloads. Which AWS service will meet these requirements?

**选项：**

- A. AWS Artifact
- B. AWS Backup
- C. AWS Batch
- D. AWS Shield

**主分类：** C4-07 Storage-Gateway-Backup-Snow题
**题库记录答案：** `B`
**需求/考点标签：** Hybrid Cloud
**社区投票：** B 100%

### Q685.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q685.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Artifact | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。 | 题库记录为非正确选项 |
| B | AWS Backup | AWS Backup：集中管理 AWS 资源备份策略、计划与保留。 | 题库记录为正确选项 |
| C | AWS Batch | AWS Batch：托管批处理作业调度与计算资源供给。 | 题库记录为非正确选项 |
| D | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |

### Q685.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Backup：集中管理 AWS 资源备份策略、计划与保留。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---
