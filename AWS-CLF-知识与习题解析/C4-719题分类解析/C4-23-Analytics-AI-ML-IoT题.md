# C4-23-Analytics-AI-ML-IoT题

> 资料口径：本模块以用户提供的 719 道 CLF-C02 题库与前序 C1/C2 项目资料为基础。题库的 `correct_answer`、社区投票与评论用于发现考点和争议，不自动等于当前 AWS 官方结论；本模块没有在生成过程中擅自用外部常识覆盖题库内容。凡现有项目已经明确标记为 `[UPDATED]`、`[LEGACY]`、`[CURRENT-OUT-OF-SCOPE]` 的内容，会继续保留这些状态提示。正式考试前，涉及当前产品状态和 Support 计划等时效信息仍应再对照 AWS 官方页面。

本文件共收录 **31** 道主分类题。范围：Athena、Glue、Redshift、Kinesis、EMR、QuickSight、AI/ML/IoT。

> 注意：这里的“正确”指题库 `correct_answer` 记录。若题目存在明显争议/历史差异，会明确标记并同时收入 C4-27。

## Q14-Analytics-AI-ML-IoT题

**题目：** A company is using a central data platform to manage multiple types of data for its customers. The company wants to use AWS services to discover, transform, and visualize the data. Which combination of AWS services should the company use to meet these requirements? (Choose two.)

**选项：**

- A. AWS Glue
- B. Amazon Elastic File System (Amazon EFS)
- C. Amazon Redshift
- D. Amazon QuickSight
- E. Amazon Quantum Ledger Database (Amazon QLDB)

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `AD`；

**社区投票：** AD 100%

### Q14.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q14.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Glue | AWS Glue：Serverless 数据集成/ETL 与 Data Catalog 服务。 | 题库记录为正确选项 |
| B | Amazon Elastic File System (Amazon EFS) | Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。 | 题库记录为非正确选项 |
| C | Amazon Redshift | Amazon Redshift：托管云数据仓库，用于大规模分析型查询。 | 题库记录为非正确选项 |
| D | Amazon QuickSight | Amazon QuickSight：云端 BI 与可视化分析服务。；Amazon Q：AWS 的生成式 AI 助手家族，用于企业知识和开发者场景。 | 题库记录为正确选项 |
| E | Amazon Quantum Ledger Database (Amazon QLDB) | Amazon Q：AWS 的生成式 AI 助手家族，用于企业知识和开发者场景。 | 题库记录为非正确选项 |

### Q14.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Glue：Serverless 数据集成/ETL 与 Data Catalog 服务。；Amazon QuickSight：云端 BI 与可视化分析服务。；Amazon Q：AWS 的生成式 AI 助手家族，用于企业知识和开发者场景。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q43-Analytics-AI-ML-IoT题

**题目：** A company has 5 TB of data stored in Amazon S3. The company plans to occasionally run queries on the data for analysis. Which AWS service should the company use to run these queries in the MOST cost-effective manner?；

**选项：**

- A. Amazon Redshift
- B. Amazon Athena
- C. Amazon Kinesis
- D. Amazon RDS

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `B`；

**需求/考点标签：** Object Storage / Cost Optimization；

**社区投票：** B 98%

### Q43.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage、Cost Optimization**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q43.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Redshift | Amazon Redshift：托管云数据仓库，用于大规模分析型查询。 | 题库记录为非正确选项 |
| B | Amazon Athena | Amazon Athena：Serverless 交互式 SQL 查询服务，典型为直接查询 S3 数据。 | 题库记录为正确选项 |
| C | Amazon Kinesis | Amazon Kinesis：实时数据流采集、处理与传输家族。 | 题库记录为非正确选项 |
| D | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |

### Q43.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Athena：Serverless 交互式 SQL 查询服务，典型为直接查询 S3 数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q96-Analytics-AI-ML-IoT题

**题目：** A company wants to operate a data warehouse to analyze data without managing the data warehouse infrastructure. Which AWS service will meet this requirement?；

**选项：**

- A. Amazon Aurora
- B. Amazon Redshift Serverless
- C. AWS Lambda
- D. Amazon RDS

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `B`；

**需求/考点标签：** 数据仓库；

**社区投票：** B 100%

### Q96.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**数据仓库**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q96.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为非正确选项 |
| B | Amazon Redshift Serverless | Amazon Redshift：托管云数据仓库，用于大规模分析型查询。 | 题库记录为正确选项 |
| C | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| D | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |

### Q96.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Redshift：托管云数据仓库，用于大规模分析型查询。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q113-Analytics-AI-ML-IoT题

**题目：** A company wants an AWS service to provide product recommendations based on its customer data. Which AWS service will meet this requirement?；

**选项：**

- A. Amazon Polly
- B. Amazon Personalize
- C. Amazon Comprehend
- D. Amazon Rekognition

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `B`；

**社区投票：** B 100%

### Q113.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q113.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Polly | Amazon Polly：Text-to-Speech，文本转自然语音。 | 题库记录为非正确选项 |
| B | Amazon Personalize | Amazon Personalize：托管个性化推荐服务；项目资料提示当前考试范围需复核。 | 题库记录为正确选项 |
| C | Amazon Comprehend | Amazon Comprehend：自然语言处理与文本洞察服务。 | 题库记录为非正确选项 |
| D | Amazon Rekognition | Amazon Rekognition：图像和视频分析/计算机视觉服务。 | 题库记录为非正确选项 |

### Q113.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Personalize：托管个性化推荐服务；项目资料提示当前考试范围需复核。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q113.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：amazon personalize
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q166-Analytics-AI-ML-IoT题

**题目：** Which AWS service gives users the ability to build interactive business intelligence dashboards that include machine learning insights?；

**选项：**

- A. Amazon Athena
- B. Amazon Kendra
- C. Amazon QuickSight
- D. Amazon Redshift

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `C`；

**需求/考点标签：** 关系数据库高可用；

**社区投票：** C 100%

### Q166.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**关系数据库高可用**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q166.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Athena | Amazon Athena：Serverless 交互式 SQL 查询服务，典型为直接查询 S3 数据。 | 题库记录为非正确选项 |
| B | Amazon Kendra | Amazon Kendra：面向企业内容的智能搜索服务。 | 题库记录为非正确选项 |
| C | Amazon QuickSight | Amazon QuickSight：云端 BI 与可视化分析服务。；Amazon Q：AWS 的生成式 AI 助手家族，用于企业知识和开发者场景。 | 题库记录为正确选项 |
| D | Amazon Redshift | Amazon Redshift：托管云数据仓库，用于大规模分析型查询。 | 题库记录为非正确选项 |

### Q166.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon QuickSight：云端 BI 与可视化分析服务。；Amazon Q：AWS 的生成式 AI 助手家族，用于企业知识和开发者场景。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q262-Analytics-AI-ML-IoT题

**题目：** Which of the following is a managed AWS service that is used specifically for extract, transform, and load (ETL) data?；

**选项：**

- A. Amazon Athena
- B. AWS Glue
- C. Amazon S3
- D. AWS Snowball Edge

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `B`；

**需求/考点标签：** ETL与数据目录；

**社区投票：** B 100%

### Q262.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**ETL与数据目录**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q262.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Athena | Amazon Athena：Serverless 交互式 SQL 查询服务，典型为直接查询 S3 数据。 | 题库记录为非正确选项 |
| B | AWS Glue | AWS Glue：Serverless 数据集成/ETL 与 Data Catalog 服务。 | 题库记录为正确选项 |
| C | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| D | AWS Snowball Edge | AWS Snow Family：用于大规模离线数据迁移、边缘数据处理等的物理设备家族。 | 题库记录为非正确选项 |

### Q262.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Glue：Serverless 数据集成/ETL 与 Data Catalog 服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q318-Analytics-AI-ML-IoT题

**题目：** A company has been storing monthly reports in an Amazon S3 bucket. The company exports the report data into comma- separated values (.csv) files. A developer wants to write a simple query that can read all of these files and generate a summary report. Which AWS service or feature should the developer use to meet these requirements with the LEAST amount of operational overhead?

**选项：**

- A. Amazon S3 Select
- B. Amazon Athena
- C. Amazon Redshift
- D. Amazon EC2

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `B`；

**需求/考点标签：** Object Storage；

**社区投票：** B 91%, A 9%

### Q318.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q318.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon S3 Select | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | Amazon Athena | Amazon Athena：Serverless 交互式 SQL 查询服务，典型为直接查询 S3 数据。 | 题库记录为正确选项 |
| C | Amazon Redshift | Amazon Redshift：托管云数据仓库，用于大规模分析型查询。 | 题库记录为非正确选项 |
| D | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q318.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Athena：Serverless 交互式 SQL 查询服务，典型为直接查询 S3 数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q320-Analytics-AI-ML-IoT题

**题目：** A company needs to search for text in documents that are stored in Amazon S3. Which AWS service will meet these requirements?；

**选项：**

- A. Amazon Kendra
- B. Amazon Rekognition
- C. Amazon Polly
- D. Amazon Lex

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `A`；

**需求/考点标签：** Object Storage；

**社区投票：** A 100%

### Q320.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q320.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Kendra | Amazon Kendra：面向企业内容的智能搜索服务。 | 题库记录为正确选项 |
| B | Amazon Rekognition | Amazon Rekognition：图像和视频分析/计算机视觉服务。 | 题库记录为非正确选项 |
| C | Amazon Polly | Amazon Polly：Text-to-Speech，文本转自然语音。 | 题库记录为非正确选项 |
| D | Amazon Lex | Amazon Lex：构建语音/文本 Conversational Interface 与 Chatbot。 | 题库记录为非正确选项 |

### Q320.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Kendra：面向企业内容的智能搜索服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q328-Analytics-AI-ML-IoT题

**题目：** Which AWS service converts text to lifelike voices?；

**选项：**

- A. Amazon Transcribe
- B. Amazon Rekognition
- C. Amazon Polly
- D. Amazon Textract

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `C`；

**社区投票：** C 100%

### Q328.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q328.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Transcribe | Amazon Transcribe：Speech-to-Text，语音转文本。 | 题库记录为非正确选项 |
| B | Amazon Rekognition | Amazon Rekognition：图像和视频分析/计算机视觉服务。 | 题库记录为非正确选项 |
| C | Amazon Polly | Amazon Polly：Text-to-Speech，文本转自然语音。 | 题库记录为正确选项 |
| D | Amazon Textract | Amazon Textract：从扫描文档/图片中提取文字、表格和表单信息。 | 题库记录为非正确选项 |

### Q328.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Polly：Text-to-Speech，文本转自然语音。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q332-Analytics-AI-ML-IoT题

**题目：** A company operates a petabyte-scale data warehouse to analyze its data. The company wants a solution that will not require manual hardware and software management. Which AWS service will meet these requirements?；

**选项：**

- A. Amazon DocumentDB (with MongoDB compatibility)
- B. Amazon Redshift
- C. Amazon Neptune
- D. Amazon ElastiCache

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `B`；

**需求/考点标签：** 数据仓库；

**社区投票：** B 100%

### Q332.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**数据仓库**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q332.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon DocumentDB (with MongoDB compatibility) | Amazon DocumentDB：兼容 MongoDB 工作负载的托管文档数据库。 | 题库记录为非正确选项 |
| B | Amazon Redshift | Amazon Redshift：托管云数据仓库，用于大规模分析型查询。 | 题库记录为正确选项 |
| C | Amazon Neptune | Amazon Neptune：托管图数据库，适合关系网络和图遍历场景。 | 题库记录为非正确选项 |
| D | Amazon ElastiCache | Amazon ElastiCache：托管内存缓存，用于降低数据库压力并提高热点数据访问速度。 | 题库记录为非正确选项 |

### Q332.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Redshift：托管云数据仓库，用于大规模分析型查询。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q333-Analytics-AI-ML-IoT题

**题目：** A library wants to automate the classification of electronic books based on the contents of the books. Which AWS service should the library use to meet this requirement?；

**选项：**

- A. Amazon Redshift
- B. Amazon CloudSearch
- C. Amazon Comprehend
- D. Amazon Aurora

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `C`；

**社区投票：** C 100%

### Q333.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q333.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Redshift | Amazon Redshift：托管云数据仓库，用于大规模分析型查询。 | 题库记录为非正确选项 |
| B | Amazon CloudSearch | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Amazon Comprehend | Amazon Comprehend：自然语言处理与文本洞察服务。 | 题库记录为正确选项 |
| D | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为非正确选项 |

### Q333.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Comprehend：自然语言处理与文本洞察服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q367-Analytics-AI-ML-IoT题

**题目：** A company wants to integrate natural language processing (NLP) into business intelligence (BI) dashboards. The company wants to ask questions and receive answers with relevant visualizations. Which AWS service or tool will meet these requirements?

**选项：**

- A. Amazon Macie
- B. Amazon Rekognition
- C. Amazon QuickSight Q
- D. Amazon Lex

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `C`；

**需求/考点标签：** 关系数据库高可用；

**社区投票：** C 100%

### Q367.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**关系数据库高可用**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q367.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Macie | Amazon Macie：发现和保护 S3 中的敏感数据。 | 题库记录为非正确选项 |
| B | Amazon Rekognition | Amazon Rekognition：图像和视频分析/计算机视觉服务。 | 题库记录为非正确选项 |
| C | Amazon QuickSight Q | Amazon QuickSight：云端 BI 与可视化分析服务。；Amazon Q：AWS 的生成式 AI 助手家族，用于企业知识和开发者场景。 | 题库记录为正确选项 |
| D | Amazon Lex | Amazon Lex：构建语音/文本 Conversational Interface 与 Chatbot。 | 题库记录为非正确选项 |

### Q367.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon QuickSight：云端 BI 与可视化分析服务。；Amazon Q：AWS 的生成式 AI 助手家族，用于企业知识和开发者场景。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q398-Analytics-AI-ML-IoT题

**题目：** Which AWS service or tool gives users the ability to connect with AWS and deploy resources programmatically?；

**选项：**

- A. Amazon QuickSight
- B. AWS PrivateLink
- C. AWS Direct Connect
- D. AWS SDKs

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `D`；

**社区投票：** D 100%

### Q398.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q398.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon QuickSight | Amazon QuickSight：云端 BI 与可视化分析服务。；Amazon Q：AWS 的生成式 AI 助手家族，用于企业知识和开发者场景。 | 题库记录为非正确选项 |
| B | AWS PrivateLink | AWS PrivateLink：通过私有 IP/接口 Endpoint 私下发布和访问服务。 | 题库记录为非正确选项 |
| C | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为非正确选项 |
| D | AWS SDKs | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q398.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q430-Analytics-AI-ML-IoT题

**题目：** A company wants to discover, prepare, move, and integrate data from multiple sources for data analytics and machine learning. Which AWS serverless data integration service should the company use to meet these requirements?；

**选项：**

- A. AWS Glue
- B. AWS Data Exchange
- C. Amazon Athena
- D. Amazon EMR

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `A`；

**需求/考点标签：** Serverless / AI/ML；

**社区投票：** A 100%

### Q430.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Serverless、AI/ML**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q430.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Glue | AWS Glue：Serverless 数据集成/ETL 与 Data Catalog 服务。 | 题库记录为正确选项 |
| B | AWS Data Exchange | AWS Data Exchange：查找、订阅和使用第三方数据集的服务。 | 题库记录为非正确选项 |
| C | Amazon Athena | Amazon Athena：Serverless 交互式 SQL 查询服务，典型为直接查询 S3 数据。 | 题库记录为非正确选项 |
| D | Amazon EMR | Amazon EMR：托管大数据框架平台，如 Spark/Hadoop。 | 题库记录为非正确选项 |

### Q430.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Glue：Serverless 数据集成/ETL 与 Data Catalog 服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q452-Analytics-AI-ML-IoT题

**题目：** A company wants to gain insights from its data and build interactive data visualization dashboards. Which AWS service will meet these requirements?；

**选项：**

- A. Amazon SageMaker
- B. Amazon Rekognition
- C. Amazon QuickSight
- D. Amazon Kinesis

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `C`；

**需求/考点标签：** 关系数据库高可用；

**社区投票：** C 100%

### Q452.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**关系数据库高可用**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q452.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon SageMaker | Amazon SageMaker AI：构建、训练、部署和管理机器学习模型的平台。 | 题库记录为非正确选项 |
| B | Amazon Rekognition | Amazon Rekognition：图像和视频分析/计算机视觉服务。 | 题库记录为非正确选项 |
| C | Amazon QuickSight | Amazon QuickSight：云端 BI 与可视化分析服务。；Amazon Q：AWS 的生成式 AI 助手家族，用于企业知识和开发者场景。 | 题库记录为正确选项 |
| D | Amazon Kinesis | Amazon Kinesis：实时数据流采集、处理与传输家族。 | 题库记录为非正确选项 |

### Q452.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon QuickSight：云端 BI 与可视化分析服务。；Amazon Q：AWS 的生成式 AI 助手家族，用于企业知识和开发者场景。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q458-Analytics-AI-ML-IoT题

**题目：** A company needs to create and publish interactive business intelligence dashboards. The dashboards require insights that are powered by machine learning. Which AWS service or tool will meet these requirements?；

**选项：**

- A. AWS Glue Studio
- B. Amazon QuickSight
- C. Amazon Redshift
- D. Amazon Athena

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `B`；

**需求/考点标签：** 一对多通知 / 关系数据库高可用；

**社区投票：** B 100%

### Q458.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**一对多通知、关系数据库高可用**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q458.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Glue Studio | AWS Glue：Serverless 数据集成/ETL 与 Data Catalog 服务。 | 题库记录为非正确选项 |
| B | Amazon QuickSight | Amazon QuickSight：云端 BI 与可视化分析服务。；Amazon Q：AWS 的生成式 AI 助手家族，用于企业知识和开发者场景。 | 题库记录为正确选项 |
| C | Amazon Redshift | Amazon Redshift：托管云数据仓库，用于大规模分析型查询。 | 题库记录为非正确选项 |
| D | Amazon Athena | Amazon Athena：Serverless 交互式 SQL 查询服务，典型为直接查询 S3 数据。 | 题库记录为非正确选项 |

### Q458.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon QuickSight：云端 BI 与可视化分析服务。；Amazon Q：AWS 的生成式 AI 助手家族，用于企业知识和开发者场景。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q485-Analytics-AI-ML-IoT题

**题目：** Which AWS service provides machine learning capability to detect and analyze content in images and videos?；

**选项：**

- A. Amazon Connect
- B. Amazon Lightsail
- C. Amazon Personalize
- D. Amazon Rekognition

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `D`；

**需求/考点标签：** AI/ML；

**社区投票：** D 100%

### Q485.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**AI/ML**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q485.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为非正确选项 |
| B | Amazon Lightsail | Amazon Lightsail：面向简单网站/小型应用的简化云平台与可预测套餐。 | 题库记录为非正确选项 |
| C | Amazon Personalize | Amazon Personalize：托管个性化推荐服务；项目资料提示当前考试范围需复核。 | 题库记录为非正确选项 |
| D | Amazon Rekognition | Amazon Rekognition：图像和视频分析/计算机视觉服务。 | 题库记录为正确选项 |

### Q485.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Rekognition：图像和视频分析/计算机视觉服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q485.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：amazon personalize
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q486-Analytics-AI-ML-IoT题

**题目：** A company wants its AWS usage to be more sustainable. The company wants to track, measure, review, and forecast polluting emissions that result from its AWS applications. Which AWS service or tool can the company use to meet these requirements?

**选项：**

- A. AWS Health Dashboard
- B. AWS customer carbon footprint tool
- C. AWS Support Center
- D. Amazon QuickSight

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `B`；

**社区投票：** B 100%

### Q486.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q486.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Health Dashboard | AWS Health：提供与 AWS 服务事件和账号资源相关的健康信息。 | 题库记录为非正确选项 |
| B | AWS customer carbon footprint tool | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | AWS Support Center | AWS Support：AWS 技术支持与客户服务计划体系；项目资料明确提示当前计划体系有更新。 | 题库记录为非正确选项 |
| D | Amazon QuickSight | Amazon QuickSight：云端 BI 与可视化分析服务。；Amazon Q：AWS 的生成式 AI 助手家族，用于企业知识和开发者场景。 | 题库记录为非正确选项 |

### Q486.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q489-Analytics-AI-ML-IoT题

**题目：** Which AWS service is designed to help users handle large amounts of data in a data warehouse environment?；

**选项：**

- A. Amazon RDS
- B. Amazon DynamoDB
- C. Amazon Redshift
- D. Amazon Aurora

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `C`；

**需求/考点标签：** 数据仓库；

**社区投票：** C 100%

### Q489.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**数据仓库**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q489.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |
| B | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| C | Amazon Redshift | Amazon Redshift：托管云数据仓库，用于大规模分析型查询。 | 题库记录为正确选项 |
| D | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为非正确选项 |

### Q489.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Redshift：托管云数据仓库，用于大规模分析型查询。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q537-Analytics-AI-ML-IoT题

**题目：** A company wants to use automated video analysis to identify employees that are accessing its offices. Which AWS service will meet this requirement?；

**选项：**

- A. Amazon Rekognition
- B. Amazon Polly
- C. Amazon Cognito
- D. AWS Lambda

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `A`；

**社区投票：** A 100%

### Q537.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q537.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Rekognition | Amazon Rekognition：图像和视频分析/计算机视觉服务。 | 题库记录为正确选项 |
| B | Amazon Polly | Amazon Polly：Text-to-Speech，文本转自然语音。 | 题库记录为非正确选项 |
| C | Amazon Cognito | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。 | 题库记录为非正确选项 |
| D | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |

### Q537.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Rekognition：图像和视频分析/计算机视觉服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q550-Analytics-AI-ML-IoT题

**题目：** A company needs to use SQL syntax to perform a direct query of objects in an Amazon S3 bucket. Which AWS service can the company use to meet this requirement?；

**选项：**

- A. AWS Glue
- B. Amazon Athena
- C. AWS Lambda
- D. Amazon Kinesis

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `B`；

**需求/考点标签：** Object Storage；

**社区投票：** B 100%

### Q550.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q550.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Glue | AWS Glue：Serverless 数据集成/ETL 与 Data Catalog 服务。 | 题库记录为非正确选项 |
| B | Amazon Athena | Amazon Athena：Serverless 交互式 SQL 查询服务，典型为直接查询 S3 数据。 | 题库记录为正确选项 |
| C | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| D | Amazon Kinesis | Amazon Kinesis：实时数据流采集、处理与传输家族。 | 题库记录为非正确选项 |

### Q550.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Athena：Serverless 交互式 SQL 查询服务，典型为直接查询 S3 数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q598-Analytics-AI-ML-IoT题

**题目：** A company wants to add a conversational chatbot to its website. Which AWS service can the company use to meet this requirement?；

**选项：**

- A. Amazon Textract
- B. Amazon Lex
- C. AWS Glue
- D. Amazon Rekognition

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `B`；

**需求/考点标签：** Block Storage；

**社区投票：** B 100%

### Q598.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Block Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q598.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Textract | Amazon Textract：从扫描文档/图片中提取文字、表格和表单信息。 | 题库记录为非正确选项 |
| B | Amazon Lex | Amazon Lex：构建语音/文本 Conversational Interface 与 Chatbot。 | 题库记录为正确选项 |
| C | AWS Glue | AWS Glue：Serverless 数据集成/ETL 与 Data Catalog 服务。 | 题库记录为非正确选项 |
| D | Amazon Rekognition | Amazon Rekognition：图像和视频分析/计算机视觉服务。 | 题库记录为非正确选项 |

### Q598.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Lex：构建语音/文本 Conversational Interface 与 Chatbot。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q615-Analytics-AI-ML-IoT题

**题目：** A company wants to develop an accessibility application that will convert text into audible speech. Which AWS service will meet this requirement?；

**选项：**

- A. Amazon MQ
- B. Amazon Polly
- C. Amazon Neptune
- D. Amazon Timestream

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `B`；

**社区投票：** B 100%

### Q615.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q615.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon MQ | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Amazon Polly | Amazon Polly：Text-to-Speech，文本转自然语音。 | 题库记录为正确选项 |
| C | Amazon Neptune | Amazon Neptune：托管图数据库，适合关系网络和图遍历场景。 | 题库记录为非正确选项 |
| D | Amazon Timestream | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q615.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Polly：Text-to-Speech，文本转自然语音。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q617-Analytics-AI-ML-IoT题

**题目：** A company needs to use dashboards and charts to analyze insights from business data. Which AWS service will provide the dashboards and charts for these insights?；

**选项：**

- A. Amazon Macie
- B. Amazon Aurora
- C. Amazon QuickSight
- D. AWS CloudTrail

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `C`；

**需求/考点标签：** 关系数据库高可用；

**社区投票：** C 100%

### Q617.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**关系数据库高可用**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q617.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Macie | Amazon Macie：发现和保护 S3 中的敏感数据。 | 题库记录为非正确选项 |
| B | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为非正确选项 |
| C | Amazon QuickSight | Amazon QuickSight：云端 BI 与可视化分析服务。；Amazon Q：AWS 的生成式 AI 助手家族，用于企业知识和开发者场景。 | 题库记录为正确选项 |
| D | AWS CloudTrail | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为非正确选项 |

### Q617.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon QuickSight：云端 BI 与可视化分析服务。；Amazon Q：AWS 的生成式 AI 助手家族，用于企业知识和开发者场景。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q622-Analytics-AI-ML-IoT题

**题目：** A company needs to convert video files and audio files to a format that will play on smartphones. Which AWS service will meet this requirement?；

**选项：**

- A. Amazon Comprehend
- B. Amazon Rekognition
- C. Amazon Elastic Transcoder
- D. Amazon Polly

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `C`；

**社区投票：** C 100%

### Q622.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q622.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Comprehend | Amazon Comprehend：自然语言处理与文本洞察服务。 | 题库记录为非正确选项 |
| B | Amazon Rekognition | Amazon Rekognition：图像和视频分析/计算机视觉服务。 | 题库记录为非正确选项 |
| C | Amazon Elastic Transcoder | 弹性是资源随当前负载自动扩大或缩小。 | 题库记录为正确选项 |
| D | Amazon Polly | Amazon Polly：Text-to-Speech，文本转自然语音。 | 题库记录为非正确选项 |

### Q622.3-为什么题库会这样选

题库记录的正确选项定位为：弹性是资源随当前负载自动扩大或缩小。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q632-Analytics-AI-ML-IoT题

**题目：** Which AWS service uses speech-to-text conversion to help users create meeting notes?；

**选项：**

- A. Amazon Polly
- B. Amazon Textract
- C. Amazon Rekognition
- D. Amazon Transcribe

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `D`；

**社区投票：** D 100%

### Q632.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q632.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Polly | Amazon Polly：Text-to-Speech，文本转自然语音。 | 题库记录为非正确选项 |
| B | Amazon Textract | Amazon Textract：从扫描文档/图片中提取文字、表格和表单信息。 | 题库记录为非正确选项 |
| C | Amazon Rekognition | Amazon Rekognition：图像和视频分析/计算机视觉服务。 | 题库记录为非正确选项 |
| D | Amazon Transcribe | Amazon Transcribe：Speech-to-Text，语音转文本。 | 题库记录为正确选项 |

### Q632.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Transcribe：Speech-to-Text，语音转文本。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q649-Analytics-AI-ML-IoT题

**题目：** Which AWS service should a company use to organize, characterize, and search large numbers of images?；

**选项：**

- A. Amazon Transcribe
- B. Amazon Rekognition
- C. Amazon Aurora
- D. Amazon QuickSight

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `B`；

**社区投票：** B 100%

### Q649.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q649.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Transcribe | Amazon Transcribe：Speech-to-Text，语音转文本。 | 题库记录为非正确选项 |
| B | Amazon Rekognition | Amazon Rekognition：图像和视频分析/计算机视觉服务。 | 题库记录为正确选项 |
| C | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为非正确选项 |
| D | Amazon QuickSight | Amazon QuickSight：云端 BI 与可视化分析服务。；Amazon Q：AWS 的生成式 AI 助手家族，用于企业知识和开发者场景。 | 题库记录为非正确选项 |

### Q649.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Rekognition：图像和视频分析/计算机视觉服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q668-Analytics-AI-ML-IoT题

**题目：** A company has data lakes designed for high performance computing (HPC) workloads. Which Amazon EC2 instance type should the company use to meet these requirements?；

**选项：**

- A. General purpose instances
- B. Compute optimized instances
- C. Memory optimized instances
- D. Storage optimized instances

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `B`；

**需求/考点标签：** Data Lake；

**社区投票：** B 67%, D 33%

### Q668.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Data Lake**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q668.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | General purpose instances | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Compute optimized instances | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Memory optimized instances | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Storage optimized instances | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q668.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q668.4-⚠-争议/版本提示

- 社区投票分散，最高项仅 67%
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q681-Analytics-AI-ML-IoT题

**题目：** A company wants to build, train, and deploy machine learning (ML) models. Which AWS service can the company use to meet this requirement?；

**选项：**

- A. Amazon Personalize
- B. Amazon Comprehend
- C. Amazon Forecast
- D. Amazon SageMaker

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `D`；

**需求/考点标签：** AI/ML；

**社区投票：** D 100%

### Q681.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**AI/ML**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q681.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Personalize | Amazon Personalize：托管个性化推荐服务；项目资料提示当前考试范围需复核。 | 题库记录为非正确选项 |
| B | Amazon Comprehend | Amazon Comprehend：自然语言处理与文本洞察服务。 | 题库记录为非正确选项 |
| C | Amazon Forecast | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Amazon SageMaker | Amazon SageMaker AI：构建、训练、部署和管理机器学习模型的平台。 | 题库记录为正确选项 |

### Q681.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon SageMaker AI：构建、训练、部署和管理机器学习模型的平台。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q681.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：amazon personalize
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q683-Analytics-AI-ML-IoT题

**题目：** A company wants to explore and analyze data in Amazon S3 by using a programming language. Which AWS service will meet these requirements?；

**选项：**

- A. Amazon Kendra
- B. Amazon Athena
- C. Amazon Comprehend
- D. Amazon SageMaker

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `B`；

**需求/考点标签：** Object Storage；

**社区投票：** B 100%

### Q683.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q683.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Kendra | Amazon Kendra：面向企业内容的智能搜索服务。 | 题库记录为非正确选项 |
| B | Amazon Athena | Amazon Athena：Serverless 交互式 SQL 查询服务，典型为直接查询 S3 数据。 | 题库记录为正确选项 |
| C | Amazon Comprehend | Amazon Comprehend：自然语言处理与文本洞察服务。 | 题库记录为非正确选项 |
| D | Amazon SageMaker | Amazon SageMaker AI：构建、训练、部署和管理机器学习模型的平台。 | 题库记录为非正确选项 |

### Q683.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Athena：Serverless 交互式 SQL 查询服务，典型为直接查询 S3 数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q699-Analytics-AI-ML-IoT题

**题目：** A company wants to improve employee productivity by providing a way for employees to search for questions and retrieve specific answers. The company wants to use a single intelligent search interface. Which AWS service will meet these requirements?

**选项：**

- A. Amazon Connect
- B. Amazon Kendra
- C. Amazon Lex
- D. Amazon Comprehend

**主分类：** C4-23 Analytics-AI-ML-IoT题；

**题库记录答案：** `B`；

**社区投票：** B 80%, A 20%

### Q699.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q699.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为非正确选项 |
| B | Amazon Kendra | Amazon Kendra：面向企业内容的智能搜索服务。 | 题库记录为正确选项 |
| C | Amazon Lex | Amazon Lex：构建语音/文本 Conversational Interface 与 Chatbot。 | 题库记录为非正确选项 |
| D | Amazon Comprehend | Amazon Comprehend：自然语言处理与文本洞察服务。 | 题库记录为非正确选项 |

### Q699.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Kendra：面向企业内容的智能搜索服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---
