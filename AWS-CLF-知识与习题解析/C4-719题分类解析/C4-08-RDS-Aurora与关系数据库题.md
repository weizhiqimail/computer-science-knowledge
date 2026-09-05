# C4-08-RDS-Aurora与关系数据库题

> 资料口径：本模块以用户提供的 719 道 CLF-C02 题库与前序 C1/C2 项目资料为基础。题库的 `correct_answer`、社区投票与评论用于发现考点和争议，不自动等于当前 AWS 官方结论；本模块没有在生成过程中擅自用外部常识覆盖题库内容。凡现有项目已经明确标记为 `[UPDATED]`、`[LEGACY]`、`[CURRENT-OUT-OF-SCOPE]` 的内容，会继续保留这些状态提示。正式考试前，涉及当前产品状态和 Support 计划等时效信息仍应再对照 AWS 官方页面。

本文件共收录 **16** 道主分类题。范围：RDS、Aurora、Multi-AZ、Read Replica、关系数据库。

> 注意：这里的“正确”指题库 `correct_answer` 记录。若题目存在明显争议/历史差异，会明确标记并同时收入 C4-27。

## Q61-RDS-Aurora与关系数据库题

**题目：** Which of the following is a fully managed MySQL-compatible database?；

**选项：**

- A. Amazon S3
- B. Amazon DynamoDB
- C. Amazon Redshift
- D. Amazon Aurora

**主分类：** C4-08 RDS-Aurora与关系数据库题；

**题库记录答案：** `D`；

**社区投票：** D 100%

### Q61.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q61.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| C | Amazon Redshift | Amazon Redshift：托管云数据仓库，用于大规模分析型查询。 | 题库记录为非正确选项 |
| D | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为正确选项 |

### Q61.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q63-RDS-Aurora与关系数据库题

**题目：** Which AWS service can run a managed PostgreSQL database that provides online transaction processing (OLTP)?；

**选项：**

- A. Amazon DynamoDB
- B. Amazon Athena
- C. Amazon RDS
- D. Amazon EMR

**主分类：** C4-08 RDS-Aurora与关系数据库题；

**题库记录答案：** `C`；

**需求/考点标签：** Relational Database；

**社区投票：** C 100%

### Q63.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Relational Database**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q63.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| B | Amazon Athena | Amazon Athena：Serverless 交互式 SQL 查询服务，典型为直接查询 S3 数据。 | 题库记录为非正确选项 |
| C | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为正确选项 |
| D | Amazon EMR | Amazon EMR：托管大数据框架平台，如 Spark/Hadoop。 | 题库记录为非正确选项 |

### Q63.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q161-RDS-Aurora与关系数据库题

**题目：** A company is running a critical workload on an Amazon RDS DB instance. The company needs the DB instance to be highly available with a recovery time of less than 5 minutes. Which solution will meet these requirements?；

**选项：**

- A. Create a read replica of the DB instance.
- B. Create a template of the DB instance by using AWS CloudFormation.
- C. Take frequent snapshots of the DB instance. Store the snapshots in Amazon S3.
- D. Modify the DB instance to be a Multi-AZ deployment.

**主分类：** C4-08 RDS-Aurora与关系数据库题；

**题库记录答案：** `D`；

**需求/考点标签：** 关系数据库高可用；

**社区投票：** D 100%

### Q161.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**关系数据库高可用**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q161.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Create a read replica of the DB instance. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Create a template of the DB instance by using AWS CloudFormation. | AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。 | 题库记录为非正确选项 |
| C | Take frequent snapshots of the DB instance. Store the snapshots in Amazon S3. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | Modify the DB instance to be a Multi-AZ deployment. | Availability Zone 是 Region 内相互隔离的故障域/部署位置。 | 题库记录为正确选项 |

### Q161.3-为什么题库会这样选

题库记录的正确选项定位为：Availability Zone 是 Region 内相互隔离的故障域/部署位置。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q190-RDS-Aurora与关系数据库题

**题目：** A company wants to migrate its database to a managed AWS service that is compatible with PostgreSQL. Which AWS services will meet these requirements? (Choose two.)；

**选项：**

- A. Amazon Athena
- B. Amazon RDS
- C. Amazon EC2
- D. Amazon DynamoDB
- E. Amazon Aurora

**主分类：** C4-08 RDS-Aurora与关系数据库题；

**题库记录答案：** `BE`；

**需求/考点标签：** Migration；

**社区投票：** BE 100%

### Q190.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q190.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Athena | Amazon Athena：Serverless 交互式 SQL 查询服务，典型为直接查询 S3 数据。 | 题库记录为非正确选项 |
| B | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为正确选项 |
| C | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| D | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| E | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为正确选项 |

### Q190.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。；Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q240-RDS-Aurora与关系数据库题

**题目：** A company wants to migrate its PostgreSQL database to AWS. The company does not use the database frequently. Which AWS service or resource will meet these requirements with the LEAST management overhead?；

**选项：**

- A. PostgreSQL on Amazon EC2
- B. Amazon RDS for PostgreSQL
- C. Amazon Aurora PostgreSQL-Compatible Edition
- D. Amazon Aurora Serverless

**主分类：** C4-08 RDS-Aurora与关系数据库题；

**题库记录答案：** `D`；

**需求/考点标签：** Relational Database / Migration；

**社区投票：** D 71%, B 25%

### Q240.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Relational Database、Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q240.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | PostgreSQL on Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| B | Amazon RDS for PostgreSQL | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |
| C | Amazon Aurora PostgreSQL-Compatible Edition | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为非正确选项 |
| D | Amazon Aurora Serverless | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为正确选项 |

### Q240.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q322-RDS-Aurora与关系数据库题

**题目：** A user needs a relational database but does not have the resources to manage the hardware, resiliency, and replication. Which AWS service option meets the user's requirements?；

**选项：**

- A. Run MySQL on Amazon Elastic Container Service (Amazon ECS).
- B. Run MySQL on Amazon EC2.
- C. Choose Amazon RDS for MySQL.
- D. Choose Amazon ElastiCache for Redis.

**主分类：** C4-08 RDS-Aurora与关系数据库题；

**题库记录答案：** `C`；

**需求/考点标签：** Relational Database；

**社区投票：** C 100%

### Q322.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Relational Database**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q322.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Run MySQL on Amazon Elastic Container Service (Amazon ECS). | Amazon ECS：AWS 原生托管容器编排服务。 | 题库记录为非正确选项 |
| B | Run MySQL on Amazon EC2. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| C | Choose Amazon RDS for MySQL. | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为正确选项 |
| D | Choose Amazon ElastiCache for Redis. | Amazon ElastiCache：托管内存缓存，用于降低数据库压力并提高热点数据访问速度。 | 题库记录为非正确选项 |

### Q322.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q370-RDS-Aurora与关系数据库题

**题目：** Which AWS service is a relational database compatible with MySQL and PostgreSQL?；

**选项：**

- A. Amazon Redshift
- B. Amazon DynamoDB
- C. Amazon Aurora
- D. Amazon Neptune

**主分类：** C4-08 RDS-Aurora与关系数据库题；

**题库记录答案：** `C`；

**需求/考点标签：** Relational Database；

**社区投票：** C 100%

### Q370.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Relational Database**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q370.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Redshift | Amazon Redshift：托管云数据仓库，用于大规模分析型查询。 | 题库记录为非正确选项 |
| B | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| C | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为正确选项 |
| D | Amazon Neptune | Amazon Neptune：托管图数据库，适合关系网络和图遍历场景。 | 题库记录为非正确选项 |

### Q370.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q469-RDS-Aurora与关系数据库题

**题目：** Which AWS services can host PostgreSQL databases? (Choose two.)；

**选项：**

- A. Amazon S3
- B. Amazon Aurora
- C. Amazon EC2
- D. Amazon OpenSearch Service
- E. Amazon Elastic File System (Amazon EFS)

**主分类：** C4-08 RDS-Aurora与关系数据库题；

**题库记录答案：** `BC`；

**需求/考点标签：** Relational Database；

**社区投票：** BC 100%

### Q469.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Relational Database**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q469.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为正确选项 |
| C | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| D | Amazon OpenSearch Service | Amazon OpenSearch Service：托管搜索、日志分析与可观测性搜索引擎服务。 | 题库记录为非正确选项 |
| E | Amazon Elastic File System (Amazon EFS) | Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。 | 题库记录为非正确选项 |

### Q469.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。；Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q503-RDS-Aurora与关系数据库题

**题目：** A company has a MariaDB database on premises. The company wants to move the data to the AWS Cloud. Which AWS service will host this database with the LEAST amount of operational overhead?；

**选项：**

- A. Amazon RDS
- B. Amazon Neptune
- C. Amazon S3
- D. Amazon DynamoDB

**主分类：** C4-08 RDS-Aurora与关系数据库题；

**题库记录答案：** `A`；

**需求/考点标签：** Hybrid Cloud；

**社区投票：** A 100%

### Q503.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q503.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为正确选项 |
| B | Amazon Neptune | Amazon Neptune：托管图数据库，适合关系网络和图遍历场景。 | 题库记录为非正确选项 |
| C | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |

### Q503.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q525-RDS-Aurora与关系数据库题

**题目：** A company needs to deploy a PostgreSQL database into Amazon RDS. The database must be highly available and fault tolerant. Which AWS solution should the company use to meet these requirements?；

**选项：**

- A. Amazon RDS with a single Availability Zone
- B. Amazon RDS snapshots
- C. Amazon RDS with multiple Availability Zones
- D. AWS Database Migration Service (AWS DMS)

**主分类：** C4-08 RDS-Aurora与关系数据库题；

**题库记录答案：** `C`；

**需求/考点标签：** 关系数据库高可用；

**社区投票：** C 100%

### Q525.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**关系数据库高可用**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q525.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon RDS with a single Availability Zone | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |
| B | Amazon RDS snapshots | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |
| C | Amazon RDS with multiple Availability Zones | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为正确选项 |
| D | AWS Database Migration Service (AWS DMS) | AWS DMS：在线迁移/复制数据库数据并尽量减少停机。 | 题库记录为非正确选项 |

### Q525.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q551-RDS-Aurora与关系数据库题

**题目：** A company uses Amazon RDS for a product database. The company wants to ensure the database is highly available. Which feature of Amazon RDS will meet this requirement?；

**选项：**

- A. Read replicas
- B. Blue/green deployment
- C. Multi-AZ deployment
- D. Reserved Instances

**主分类：** C4-08 RDS-Aurora与关系数据库题；

**题库记录答案：** `C`；

**需求/考点标签：** 关系数据库高可用；

**社区投票：** C 100%

### Q551.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**关系数据库高可用**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q551.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Read replicas | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Blue/green deployment | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Multi-AZ deployment | Availability Zone 是 Region 内相互隔离的故障域/部署位置。 | 题库记录为正确选项 |
| D | Reserved Instances | Reserved Instances：通过 1/3 年承诺获得折扣的 EC2/RDS 等预留定价概念，具体机制需按服务区分。 | 题库记录为非正确选项 |

### Q551.3-为什么题库会这样选

题库记录的正确选项定位为：Availability Zone 是 Region 内相互隔离的故障域/部署位置。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q587-RDS-Aurora与关系数据库题

**题目：** A company wants to run relationship databases in the AWS Cloud. The company wants to use a managed service that will install the database and run regular software updates. Which AWS service will meet these requirements?；

**选项：**

- A. Amazon S3
- B. Amazon RDS
- C. Amazon Elastic Block Store (Amazon EBS)
- D. Amazon DynamoDB

**主分类：** C4-08 RDS-Aurora与关系数据库题；

**题库记录答案：** `B`；

**社区投票：** B 100%

### Q587.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q587.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为正确选项 |
| C | Amazon Elastic Block Store (Amazon EBS) | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |
| D | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |

### Q587.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q664-RDS-Aurora与关系数据库题

**题目：** A company wants to migrate its on-premises SQL Server database to the AWS Cloud. The company wants AWS to handle the day-to-day administration of the database. Which AWS service will meet the company's requirements?；

**选项：**

- A. Amazon EC2 for Microsoft SQL Server
- B. Amazon DynamoDB
- C. Amazon RDS
- D. Amazon Aurora

**主分类：** C4-08 RDS-Aurora与关系数据库题；

**题库记录答案：** `C`；

**需求/考点标签：** Hybrid Cloud / Migration；

**社区投票：** C 100%

### Q664.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q664.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon EC2 for Microsoft SQL Server | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| B | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| C | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为正确选项 |
| D | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为非正确选项 |

### Q664.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q680-RDS-Aurora与关系数据库题

**题目：** A company has multiple SQL-based databases located in a data center. The company needs to migrate all database servers to the AWS Cloud to reduce the cost of operating physical servers. Which AWS service or resource will meet these requirements with the LEAST operational overhead?

**选项：**

- A. Amazon EC2 instances
- B. Amazon RDS
- C. Amazon DynamoDB
- D. OpenSearch

**主分类：** C4-08 RDS-Aurora与关系数据库题；

**题库记录答案：** `B`；

**需求/考点标签：** Migration

### Q680.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q680.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon EC2 instances | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| B | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为正确选项 |
| C | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| D | OpenSearch | Amazon OpenSearch Service：托管搜索、日志分析与可观测性搜索引擎服务。 | 题库记录为非正确选项 |

### Q680.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q696-RDS-Aurora与关系数据库题

**题目：** Which AWS service supports MySQL database engines?；

**选项：**

- A. Amazon Dynamo DВ
- B. Amazon RDS
- C. Amazon DocumentDB (with MongoDB compatibility)
- D. Amazon ElastiCache

**主分类：** C4-08 RDS-Aurora与关系数据库题；

**题库记录答案：** `B`；

**需求/考点标签：** Relational Database；

**社区投票：** B 100%

### Q696.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Relational Database**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q696.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Dynamo DВ | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为正确选项 |
| C | Amazon DocumentDB (with MongoDB compatibility) | Amazon DocumentDB：兼容 MongoDB 工作负载的托管文档数据库。 | 题库记录为非正确选项 |
| D | Amazon ElastiCache | Amazon ElastiCache：托管内存缓存，用于降低数据库压力并提高热点数据访问速度。 | 题库记录为非正确选项 |

### Q696.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q718-RDS-Aurora与关系数据库题

**题目：** A company wants to deploy an application that stores data in a relational database. The company wants database tasks, such as automated backups and database snapshots, to be managed by AWS. Which AWS service will meet these requirements?

**选项：**

- A. Amazon DocumentDB
- B. Amazon RDS
- C. Amazon Elastic Block Store (Amazon EBS)
- D. Amazon S3

**主分类：** C4-08 RDS-Aurora与关系数据库题；

**题库记录答案：** `B`；

**需求/考点标签：** Relational Database；

**社区投票：** B 67%, C 33%

### Q718.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Relational Database**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q718.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon DocumentDB | Amazon DocumentDB：兼容 MongoDB 工作负载的托管文档数据库。 | 题库记录为非正确选项 |
| B | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为正确选项 |
| C | Amazon Elastic Block Store (Amazon EBS) | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |
| D | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q718.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q718.4-⚠-争议/版本提示

- 社区投票分散，最高项仅 67%
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---
