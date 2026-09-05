# C4-09-DynamoDB-NoSQL-缓存与数据库选择题

> 资料口径：本模块以用户提供的 719 道 CLF-C02 题库与前序 C1/C2 项目资料为基础。题库的 `correct_answer`、社区投票与评论用于发现考点和争议，不自动等于当前 AWS 官方结论；本模块没有在生成过程中擅自用外部常识覆盖题库内容。凡现有项目已经明确标记为 `[UPDATED]`、`[LEGACY]`、`[CURRENT-OUT-OF-SCOPE]` 的内容，会继续保留这些状态提示。正式考试前，涉及当前产品状态和 Support 计划等时效信息仍应再对照 AWS 官方页面。

本文件共收录 **13** 道主分类题。范围：DynamoDB、NoSQL、ElastiCache、DocumentDB、Neptune、数据库选型。

> 注意：这里的“正确”指题库 `correct_answer` 记录。若题目存在明显争议/历史差异，会明确标记并同时收入 C4-27。
## Q55-DynamoDB-NoSQL-缓存与数据库选择题

**题目：** To reduce costs, a company is planning to migrate a NoSQL database to AWS. Which AWS service is fully managed and can automatically scale throughput capacity to meet database workload demands?

**选项：**

- A. Amazon Redshift
- B. Amazon Aurora
- C. Amazon DynamoDB
- D. Amazon RDS

**主分类：** C4-09 DynamoDB-NoSQL-缓存与数据库选择题
**题库记录答案：** `C`
**需求/考点标签：** NoSQL自动扩展
**社区投票：** C 96%

### Q55.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**NoSQL自动扩展**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q55.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Redshift | Amazon Redshift：托管云数据仓库，用于大规模分析型查询。 | 题库记录为非正确选项 |
| B | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为非正确选项 |
| C | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为正确选项 |
| D | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |

### Q55.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q66-DynamoDB-NoSQL-缓存与数据库选择题

**题目：** Which AWS service is a key-value database that provides sub-millisecond latency on a large scale?

**选项：**

- A. Amazon DynamoDB
- B. Amazon Aurora
- C. Amazon DocumentDB (with MongoDB compatibility)
- D. Amazon Neptune

**主分类：** C4-09 DynamoDB-NoSQL-缓存与数据库选择题
**题库记录答案：** `A`
**社区投票：** A 100%

### Q66.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q66.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为正确选项 |
| B | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为非正确选项 |
| C | Amazon DocumentDB (with MongoDB compatibility) | Amazon DocumentDB：兼容 MongoDB 工作负载的托管文档数据库。 | 题库记录为非正确选项 |
| D | Amazon Neptune | Amazon Neptune：托管图数据库，适合关系网络和图遍历场景。 | 题库记录为非正确选项 |

### Q66.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q182-DynamoDB-NoSQL-缓存与数据库选择题

**题目：** A user needs to quickly deploy a nonrelational database on AWS. The user does not want to manage the underlying hardware or the database software. Which AWS service can be used to accomplish this?

**选项：**

- A. Amazon RDS
- B. Amazon DynamoDB
- C. Amazon Aurora
- D. Amazon Redshift

**主分类：** C4-09 DynamoDB-NoSQL-缓存与数据库选择题
**题库记录答案：** `B`
**需求/考点标签：** Relational Database
**社区投票：** B 100%

### Q182.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Relational Database**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q182.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |
| B | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为正确选项 |
| C | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为非正确选项 |
| D | Amazon Redshift | Amazon Redshift：托管云数据仓库，用于大规模分析型查询。 | 题库记录为非正确选项 |

### Q182.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q248-DynamoDB-NoSQL-缓存与数据库选择题

**题目：** A company wants a time-series database service that makes it easier to store and analyze trillions of events each day. Which AWS service will meet this requirement?

**选项：**

- A. Amazon Neptune
- B. Amazon Timestream
- C. Amazon Forecast
- D. Amazon DocumentDB (with MongoDB compatibility)

**主分类：** C4-09 DynamoDB-NoSQL-缓存与数据库选择题
**题库记录答案：** `B`
**需求/考点标签：** Event Driven
**社区投票：** B 100%

### Q248.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Event Driven**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q248.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Neptune | Amazon Neptune：托管图数据库，适合关系网络和图遍历场景。 | 题库记录为非正确选项 |
| B | Amazon Timestream | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Amazon Forecast | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Amazon DocumentDB (with MongoDB compatibility) | Amazon DocumentDB：兼容 MongoDB 工作负载的托管文档数据库。 | 题库记录为非正确选项 |

### Q248.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q308-DynamoDB-NoSQL-缓存与数据库选择题

**题目：** Which of the following is a fully managed graph database service on AWS?

**选项：**

- A. Amazon Aurora
- B. Amazon FSx
- C. Amazon DynamoDB
- D. Amazon Neptune

**主分类：** C4-09 DynamoDB-NoSQL-缓存与数据库选择题
**题库记录答案：** `D`
**社区投票：** D 100%

### Q308.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q308.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为非正确选项 |
| B | Amazon FSx | Amazon FSx：托管专业文件系统家族，覆盖 Windows/高性能等文件工作负载。 | 题库记录为非正确选项 |
| C | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| D | Amazon Neptune | Amazon Neptune：托管图数据库，适合关系网络和图遍历场景。 | 题库记录为正确选项 |

### Q308.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Neptune：托管图数据库，适合关系网络和图遍历场景。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q369-DynamoDB-NoSQL-缓存与数据库选择题

**题目：** Which AWS service provides the ability to host a NoSQL database in the AWS Cloud?

**选项：**

- A. Amazon Aurora
- B. Amazon DynamoDB
- C. Amazon RDS
- D. Amazon Redshift

**主分类：** C4-09 DynamoDB-NoSQL-缓存与数据库选择题
**题库记录答案：** `B`
**需求/考点标签：** NoSQL自动扩展
**社区投票：** B 100%

### Q369.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**NoSQL自动扩展**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q369.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为非正确选项 |
| B | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为正确选项 |
| C | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |
| D | Amazon Redshift | Amazon Redshift：托管云数据仓库，用于大规模分析型查询。 | 题库记录为非正确选项 |

### Q369.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q438-DynamoDB-NoSQL-缓存与数据库选择题

**题目：** A company has an application that produces unstructured data continuously. The company needs to store the data so that the data is durable and easy to query. Which AWS service can the company use to meet these requirements?

**选项：**

- A. Amazon RDS
- B. Amazon Aurora
- C. Amazon QuickSight
- D. Amazon DynamoDB

**主分类：** C4-09 DynamoDB-NoSQL-缓存与数据库选择题
**题库记录答案：** `D`
**需求/考点标签：** Durability
**社区投票：** D 100%

### Q438.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Durability**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q438.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |
| B | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为非正确选项 |
| C | Amazon QuickSight | Amazon QuickSight：云端 BI 与可视化分析服务。；Amazon Q：AWS 的生成式 AI 助手家族，用于企业知识和开发者场景。 | 题库记录为非正确选项 |
| D | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为正确选项 |

### Q438.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q484-DynamoDB-NoSQL-缓存与数据库选择题

**题目：** A company wants to run a graph query that provides credit card users’ names, addresses, and transactions. The company wants the graph to show if the names, addresses, and transactions indicates possible fraud. Which AWS database service will meet these requirements?

**选项：**

- A. Amazon DocumentDB (with MongoDB compatibility)
- B. Amazon Timestream
- C. Amazon DynamoDB
- D. Amazon Neptune

**主分类：** C4-09 DynamoDB-NoSQL-缓存与数据库选择题
**题库记录答案：** `D`
**社区投票：** D 100%

### Q484.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q484.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon DocumentDB (with MongoDB compatibility) | Amazon DocumentDB：兼容 MongoDB 工作负载的托管文档数据库。 | 题库记录为非正确选项 |
| B | Amazon Timestream | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| D | Amazon Neptune | Amazon Neptune：托管图数据库，适合关系网络和图遍历场景。 | 题库记录为正确选项 |

### Q484.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Neptune：托管图数据库，适合关系网络和图遍历场景。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q518-DynamoDB-NoSQL-缓存与数据库选择题

**题目：** A company is building an application that will receive millions of database queries each second. The company needs the data store for the application to scale to meet these needs. Which AWS service will meet this requirement?

**选项：**

- A. Amazon DynamoDB
- B. AWS Cloud9
- C. Amazon ElastiCache for Memcached
- D. Amazon Neptune

**主分类：** C4-09 DynamoDB-NoSQL-缓存与数据库选择题
**题库记录答案：** `A`
**社区投票：** A 100%

### Q518.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q518.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为正确选项 |
| B | AWS Cloud9 | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Amazon ElastiCache for Memcached | Amazon ElastiCache：托管内存缓存，用于降低数据库压力并提高热点数据访问速度。 | 题库记录为非正确选项 |
| D | Amazon Neptune | Amazon Neptune：托管图数据库，适合关系网络和图遍历场景。 | 题库记录为非正确选项 |

### Q518.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q588-DynamoDB-NoSQL-缓存与数据库选择题

**题目：** Which AWS service provides a fully managed graph database for highly connected datasets?

**选项：**

- A. Amazon DynamoDB
- B. Amazon RDS
- C. Amazon Neptune
- D. Amazon Aurora

**主分类：** C4-09 DynamoDB-NoSQL-缓存与数据库选择题
**题库记录答案：** `C`
**社区投票：** C 100%

### Q588.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q588.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| B | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |
| C | Amazon Neptune | Amazon Neptune：托管图数据库，适合关系网络和图遍历场景。 | 题库记录为正确选项 |
| D | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为非正确选项 |

### Q588.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Neptune：托管图数据库，适合关系网络和图遍历场景。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q596-DynamoDB-NoSQL-缓存与数据库选择题

**题目：** Which AWS service is designed for users running workloads that include a NoSQL database?

**选项：**

- A. Amazon RDS
- B. Amazon S3
- C. Amazon Redshift
- D. Amazon DynamoDB

**主分类：** C4-09 DynamoDB-NoSQL-缓存与数据库选择题
**题库记录答案：** `D`
**需求/考点标签：** NoSQL自动扩展
**社区投票：** D 100%

### Q596.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**NoSQL自动扩展**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q596.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |
| B | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| C | Amazon Redshift | Amazon Redshift：托管云数据仓库，用于大规模分析型查询。 | 题库记录为非正确选项 |
| D | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为正确选项 |

### Q596.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q662-DynamoDB-NoSQL-缓存与数据库选择题

**题目：** Which AWS service is a fully managed NoSQL database service?

**选项：**

- A. Amazon RDS
- B. Amazon Redshift
- C. Amazon DynamoDB
- D. Amazon Aurora

**主分类：** C4-09 DynamoDB-NoSQL-缓存与数据库选择题
**题库记录答案：** `C`
**需求/考点标签：** NoSQL自动扩展

### Q662.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**NoSQL自动扩展**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q662.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |
| B | Amazon Redshift | Amazon Redshift：托管云数据仓库，用于大规模分析型查询。 | 题库记录为非正确选项 |
| C | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为正确选项 |
| D | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为非正确选项 |

### Q662.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q672-DynamoDB-NoSQL-缓存与数据库选择题

**题目：** A company wants to build graph queries for real-time fraud pattern detection. Which AWS service will meet this requirement?

**选项：**

- A. Amazon Neptune
- B. Amazon DynamoDB
- C. Amazon Timestream
- D. Amazon Forecast

**主分类：** C4-09 DynamoDB-NoSQL-缓存与数据库选择题
**题库记录答案：** `A`
**社区投票：** A 100%

### Q672.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q672.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Neptune | Amazon Neptune：托管图数据库，适合关系网络和图遍历场景。 | 题库记录为正确选项 |
| B | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| C | Amazon Timestream | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Amazon Forecast | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q672.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Neptune：托管图数据库，适合关系网络和图遍历场景。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---
