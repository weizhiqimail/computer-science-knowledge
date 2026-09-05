# C4-03-EC2-AMI与计算服务题

> 资料口径：本模块以用户提供的 719 道 CLF-C02 题库与前序 C1/C2 项目资料为基础。题库的 `correct_answer`、社区投票与评论用于发现考点和争议，不自动等于当前 AWS 官方结论；本模块没有在生成过程中擅自用外部常识覆盖题库内容。凡现有项目已经明确标记为 `[UPDATED]`、`[LEGACY]`、`[CURRENT-OUT-OF-SCOPE]` 的内容，会继续保留这些状态提示。正式考试前，涉及当前产品状态和 Support 计划等时效信息仍应再对照 AWS 官方页面。

本文件共收录 **62** 道主分类题。范围：EC2、AMI、Instance Type、Auto Scaling、ELB、Lambda、容器和基础计算定位。

> 注意：这里的“正确”指题库 `correct_answer` 记录。若题目存在明显争议/历史差异，会明确标记并同时收入 C4-27。
## Q4-EC2-AMI与计算服务题

**题目：** According to security best practices, how should an Amazon EC2 instance be given access to an Amazon S3 bucket?

**选项：**

- A. Hard code an IAM user’s secret key and access key directly in the application, and upload the file.
- B. Store the IAM user’s secret key and access key in a text file on the EC2 instance, read the keys, then upload the file.
- C. Have the EC2 instance assume a role to obtain the privileges to upload the file.
- D. Modify the S3 bucket policy so that any service can upload to it at any time.

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `C`
**需求/考点标签：** Object Storage
**社区投票：** C 91%, D 9%

### Q4.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q4.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Hard code an IAM user’s secret key and access key directly in the application, and upload the file. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | Store the IAM user’s secret key and access key in a text file on the EC2 instance, read the keys, then upload the file. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| C | Have the EC2 instance assume a role to obtain the privileges to upload the file. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| D | Modify the S3 bucket policy so that any service can upload to it at any time. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q4.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q7-EC2-AMI与计算服务题

**题目：** A company is running and managing its own Docker environment on Amazon EC2 instances. The company wants an alternative to help manage cluster size, scheduling, and environment maintenance. Which AWS service meets these requirements?

**选项：**

- A. AWS Lambda
- B. Amazon RDS
- C. AWS Fargate
- D. Amazon Athena

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `C`
**社区投票：** C 100%

### Q7.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q7.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| B | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |
| C | AWS Fargate | AWS Fargate：为 ECS/EKS 提供不需要管理底层服务器的容器计算能力。 | 题库记录为正确选项 |
| D | Amazon Athena | Amazon Athena：Serverless 交互式 SQL 查询服务，典型为直接查询 S3 数据。 | 题库记录为非正确选项 |

### Q7.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Fargate：为 ECS/EKS 提供不需要管理底层服务器的容器计算能力。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q8-EC2-AMI与计算服务题

**题目：** A company wants to run a NoSQL database on Amazon EC2 instances. Which task is the responsibility of AWS in this scenario?

**选项：**

- A. Update the guest operating system of the EC2 instances.
- B. Maintain high availability at the database layer.
- C. Patch the physical infrastructure that hosts the EC2 instances.
- D. Configure the security group firewall.

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `C`
**需求/考点标签：** NoSQL自动扩展
**社区投票：** C 96%

### Q8.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**NoSQL自动扩展**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q8.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Update the guest operating system of the EC2 instances. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| B | Maintain high availability at the database layer. | 高可用关注组件故障时尽量维持服务可用。 | 题库记录为非正确选项 |
| C | Patch the physical infrastructure that hosts the EC2 instances. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| D | Configure the security group firewall. | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为非正确选项 |

### Q8.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q17-EC2-AMI与计算服务题

**题目：** A developer wants to deploy an application quickly on AWS without manually creating the required resources. Which AWS service will meet these requirements?

**选项：**

- A. Amazon EC2
- B. AWS Elastic Beanstalk
- C. AWS CodeBuild
- D. Amazon Personalize

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q17.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q17.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| B | AWS Elastic Beanstalk | AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。 | 题库记录为正确选项 |
| C | AWS CodeBuild | AWS CodeBuild：托管代码构建与测试服务。 | 题库记录为非正确选项 |
| D | Amazon Personalize | Amazon Personalize：托管个性化推荐服务；项目资料提示当前考试范围需复核。 | 题库记录为非正确选项 |

### Q17.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q17.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：amazon personalize
- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q88-EC2-AMI与计算服务题

**题目：** Which responsibility belongs to AWS when a company hosts its databases on Amazon EC2 instances?

**选项：**

- A. Database backups
- B. Database software patches
- C. Operating system patches
- D. Operating system installations

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `D`
**社区投票：** D 60%, C 36%

### Q88.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q88.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Database backups | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Database software patches | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Operating system patches | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Operating system installations | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q88.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q88.4-⚠-争议/版本提示

- 社区投票分散，最高项仅 60%
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q92-EC2-AMI与计算服务题

**题目：** Which tool should a developer use to integrate AWS service features directly into an application?

**选项：**

- A. AWS Software Development Kit
- B. AWS CodeDeploy
- C. AWS Lambda
- D. AWS Batch

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `A`
**社区投票：** A 100%

### Q92.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q92.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Software Development Kit | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | AWS CodeDeploy | AWS CodeDeploy：自动化应用部署服务；项目资料将其视为题库历史/当前范围需复核项。 | 题库记录为非正确选项 |
| C | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| D | AWS Batch | AWS Batch：托管批处理作业调度与计算资源供给。 | 题库记录为非正确选项 |

### Q92.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q92.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：codedeploy
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q116-EC2-AMI与计算服务题

**题目：** Which fully managed AWS service assists with the creation, testing, and management of custom Amazon EC2 images?

**选项：**

- A. EC2 Image Builder
- B. Amazon Machine Image (AMI)
- C. AWS Launch Wizard
- D. AWS Elastic Beanstalk

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `A`
**社区投票：** A 100%

### Q116.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q116.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | EC2 Image Builder | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| B | Amazon Machine Image (AMI) | AMI：EC2 启动模板，定义实例启动所需的软件配置。 | 题库记录为非正确选项 |
| C | AWS Launch Wizard | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Elastic Beanstalk | AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。 | 题库记录为非正确选项 |

### Q116.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q118-EC2-AMI与计算服务题

**题目：** A company needs to perform data processing once a week that typically takes about 5 hours to complete. Which AWS service should the company use for this workload?

**选项：**

- A. AWS Lambda
- B. Amazon EC2
- C. AWS CodeDeploy
- D. AWS Wavelength

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `B`
**社区投票：** B 96%

### Q118.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q118.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| B | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| C | AWS CodeDeploy | AWS CodeDeploy：自动化应用部署服务；项目资料将其视为题库历史/当前范围需复核项。 | 题库记录为非正确选项 |
| D | AWS Wavelength | AWS Wavelength：把 AWS 计算/存储靠近 5G 电信网络边缘；项目资料标记为当前范围外题库补充。 | 题库记录为非正确选项 |

### Q118.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q118.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：wavelength, codedeploy
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q121-EC2-AMI与计算服务题

**题目：** A company plans to deploy containers on AWS. The company wants full control of the compute resources that host the containers. Which AWS service will meet these requirements?

**选项：**

- A. Amazon Elastic Kubernetes Service (Amazon EKS)
- B. AWS Fargate
- C. Amazon EC2
- D. Amazon Elastic Container Service (Amazon ECS)

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `C`
**需求/考点标签：** Container
**社区投票：** C 79%, D 21%

### Q121.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Container**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q121.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Elastic Kubernetes Service (Amazon EKS) | Amazon EKS：AWS 托管 Kubernetes 控制面。 | 题库记录为非正确选项 |
| B | AWS Fargate | AWS Fargate：为 ECS/EKS 提供不需要管理底层服务器的容器计算能力。 | 题库记录为非正确选项 |
| C | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| D | Amazon Elastic Container Service (Amazon ECS) | Amazon ECS：AWS 原生托管容器编排服务。 | 题库记录为非正确选项 |

### Q121.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q121.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q147-EC2-AMI与计算服务题

**题目：** A company wants its Amazon EC2 instances to operate in a highly available environment, even if there is a natural disaster in a particular geographic area. Which approach will achieve this goal?

**选项：**

- A. Use EC2 instances in multiple AWS Regions.
- B. Use EC2 instances in multiple Amazon CloudFront locations.
- C. Use EC2 instances in multiple edge locations.
- D. Use EC2 instances in AWS Local Zones.

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `A`
**需求/考点标签：** High Availability
**社区投票：** A 100%

### Q147.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**High Availability**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q147.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Use EC2 instances in multiple AWS Regions. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| B | Use EC2 instances in multiple Amazon CloudFront locations. | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。；Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| C | Use EC2 instances in multiple edge locations. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| D | Use EC2 instances in AWS Local Zones. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q147.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q152-EC2-AMI与计算服务题

**题目：** A company has an application with robust hardware requirements. The application must be accessed by students who are using lightweight, low-cost laptops. Which AWS service will help the company deploy the application without investing in backend infrastructure or high-end client hardware?

**选项：**

- A. Amazon AppStream 2.0
- B. AWS AppSync
- C. Amazon WorkLink
- D. AWS Elastic Beanstalk

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `A`
**社区投票：** A 79%, D 21%

### Q152.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q152.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon AppStream 2.0 | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | AWS AppSync | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Amazon WorkLink | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Elastic Beanstalk | AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。 | 题库记录为非正确选项 |

### Q152.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q183-EC2-AMI与计算服务题

**题目：** Which actions are examples of a company’s effort to rightsize its AWS resources to control cloud costs? (Choose two.)

**选项：**

- A. Switch from Amazon RDS to Amazon DynamoDB to accommodate NoSQL datasets.
- B. Base the selection of Amazon EC2 instance types on past utilization patterns.
- C. Use Amazon S3 Lifecycle policies to move objects that users access infrequently to lower-cost storage tiers.
- D. Use Multi-AZ deployments for Amazon RDS.
- E. Replace existing Amazon EC2 instances with AWS Elastic Beanstalk.

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `BC`
**社区投票：** BC 80%, AC 20%

### Q183.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q183.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Switch from Amazon RDS to Amazon DynamoDB to accommodate NoSQL datasets. | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。；Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |
| B | Base the selection of Amazon EC2 instance types on past utilization patterns. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| C | Use Amazon S3 Lifecycle policies to move objects that users access infrequently to lower-cost storage tiers. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| D | Use Multi-AZ deployments for Amazon RDS. | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |
| E | Replace existing Amazon EC2 instances with AWS Elastic Beanstalk. | AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。；Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q183.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。；Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q189-EC2-AMI与计算服务题

**题目：** Which AWS service or feature is a browser-based, pre-authenticated service that can be launched directly from the AWS Management Console?

**选项：**

- A. AWS API
- B. AWS Lightsail
- C. AWS Cloud9
- D. AWS CloudShell

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `D`
**社区投票：** D 100%

### Q189.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q189.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS API | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | AWS Lightsail | Amazon Lightsail：面向简单网站/小型应用的简化云平台与可预测套餐。 | 题库记录为非正确选项 |
| C | AWS Cloud9 | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS CloudShell | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q189.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q193-EC2-AMI与计算服务题

**题目：** A user has limited knowledge of AWS services, but wants to quickly deploy a scalable Node.js application in the AWS Cloud. Which service should be used to deploy the application?

**选项：**

- A. AWS CloudFormation
- B. AWS Elastic Beanstalk
- C. Amazon EC2
- D. AWS OpsWorks

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `B`
**需求/考点标签：** Scalability
**社区投票：** B 100%

### Q193.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Scalability**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q193.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CloudFormation | AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。 | 题库记录为非正确选项 |
| B | AWS Elastic Beanstalk | AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。 | 题库记录为正确选项 |
| C | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| D | AWS OpsWorks | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q193.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q207-EC2-AMI与计算服务题

**题目：** A company needs to plan, schedule, and run hundreds of thousands of computing jobs on AWS. Which AWS service can the company use to meet this requirement?

**选项：**

- A. AWS Step Functions
- B. AWS Service Catalog
- C. Amazon Simple Queue Service (Amazon SQS)
- D. AWS Batch

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `D`
**社区投票：** D 100%

### Q207.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q207.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Step Functions | AWS Step Functions：Serverless 工作流编排和状态机。 | 题库记录为非正确选项 |
| B | AWS Service Catalog | AWS Service Catalog：让企业发布经过批准的云产品/基础设施模板目录。 | 题库记录为非正确选项 |
| C | Amazon Simple Queue Service (Amazon SQS) | Amazon SQS：托管消息队列，用于异步、缓冲和系统解耦。 | 题库记录为非正确选项 |
| D | AWS Batch | AWS Batch：托管批处理作业调度与计算资源供给。 | 题库记录为正确选项 |

### Q207.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Batch：托管批处理作业调度与计算资源供给。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q209-EC2-AMI与计算服务题

**题目：** Which of the following is a way to use Amazon EC2 Auto Scaling groups to scale capacity in the AWS Cloud?

**选项：**

- A. Scale the number of EC2 instances in or out automatically, based on demand.
- B. Use serverless EC2 instances.
- C. Scale the size of EC2 instances up or down automatically, based on demand.
- D. Transfer unused CPU resources between EC2 instances.

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `A`
**社区投票：** A 100%

### Q209.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q209.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Scale the number of EC2 instances in or out automatically, based on demand. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| B | Use serverless EC2 instances. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| C | Scale the size of EC2 instances up or down automatically, based on demand. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| D | Transfer unused CPU resources between EC2 instances. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q209.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q222-EC2-AMI与计算服务题

**题目：** A customer runs an On-Demand Amazon Linux EC2 instance for 3 hours, 5 minutes, and 6 seconds. For how much time will the customer be billed?

**选项：**

- A. 3 hours, 5 minutes
- B. 3 hours, 5 minutes, and 6 seconds
- C. 3 hours, 6 minutes
- D. 4 hours

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `B`
**社区投票：** B 56%, C 28%, D 16%

### Q222.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q222.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | 3 hours, 5 minutes | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | 3 hours, 5 minutes, and 6 seconds | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | 3 hours, 6 minutes | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | 4 hours | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q222.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q222.4-⚠-争议/版本提示

- 社区投票分散，最高项仅 56%
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q233-EC2-AMI与计算服务题

**题目：** A company is planning to host its workloads on AWS. Which AWS service requires the company to update and patch the guest operating system?

**选项：**

- A. Amazon DynamoDB
- B. Amazon S3
- C. Amazon EC2
- D. Amazon Aurora

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `C`
**社区投票：** C 100%

### Q233.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q233.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| B | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| C | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| D | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为非正确选项 |

### Q233.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q235-EC2-AMI与计算服务题

**题目：** A company is migrating its workloads to the AWS Cloud. The company must retain full control of patch management for the guest operating systems that host its applications. Which AWS service should the company use to meet these requirements?

**选项：**

- A. Amazon DynamoDB
- B. Amazon EC2
- C. AWS Lambda
- D. Amazon RDS

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q235.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q235.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |
| B | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| C | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| D | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |

### Q235.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q237-EC2-AMI与计算服务题

**题目：** Which AWS service can a company use to visually design and build serverless applications?

**选项：**

- A. AWS Lambda
- B. AWS Batch
- C. AWS Application Composer
- D. AWS App Runner

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `C`
**需求/考点标签：** Serverless
**社区投票：** C 100%

### Q237.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Serverless**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q237.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| B | AWS Batch | AWS Batch：托管批处理作业调度与计算资源供给。 | 题库记录为非正确选项 |
| C | AWS Application Composer | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | AWS App Runner | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q237.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q269-EC2-AMI与计算服务题

**题目：** A company wants to use Amazon EC2 instances to provide a static website to users all over the world. The company needs to minimize latency for the users. Which solution meets these requirements?

**选项：**

- A. Use EC2 instances in multiple edge locations.
- B. Use EC2 instances in the same Availability Zone but in different AWS Regions.
- C. Use Amazon CloudFront with the EC2 instances configured as the source.
- D. Use EC2 instances in the same Availability Zone but in different AWS accounts.

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `C`
**需求/考点标签：** Block Storage
**社区投票：** C 94%, A 6%

### Q269.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Block Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q269.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Use EC2 instances in multiple edge locations. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| B | Use EC2 instances in the same Availability Zone but in different AWS Regions. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| C | Use Amazon CloudFront with the EC2 instances configured as the source. | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。；Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| D | Use EC2 instances in the same Availability Zone but in different AWS accounts. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q269.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。；Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q289-EC2-AMI与计算服务题

**题目：** Which task can a company perform by using security groups in the AWS Cloud?

**选项：**

- A. Allow access to an Amazon EC2 instance through only a specific port.
- B. Deny access to malicious IP addresses at a subnet level.
- C. Protect data that is cached by Amazon CloudFront.
- D. Apply a stateless firewall to an Amazon EC2 instance.

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `A`
**社区投票：** A 100%

### Q289.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q289.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Allow access to an Amazon EC2 instance through only a specific port. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| B | Deny access to malicious IP addresses at a subnet level. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Protect data that is cached by Amazon CloudFront. | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。 | 题库记录为非正确选项 |
| D | Apply a stateless firewall to an Amazon EC2 instance. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q289.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q289.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q290-EC2-AMI与计算服务题

**题目：** A company plans to run a compute-intensive workload that uses graphics processing units (GPUs). Which Amazon EC2 instance type should the company use?

**选项：**

- A. Accelerated computing
- B. Compute optimized
- C. Storage optimized
- D. General purpose

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `A`
**社区投票：** A 100%

### Q290.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q290.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Accelerated computing | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Compute optimized | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Storage optimized | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | General purpose | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q290.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q302-EC2-AMI与计算服务题

**题目：** An Amazon EC2 instance previously used for development is inaccessible and no longer appears in the AWS Management Console. Which AWS service should be used to determine what action made this EC2 instance inaccessible?

**选项：**

- A. Amazon CloudWatch Logs
- B. AWS Security Hub
- C. Amazon Inspector
- D. AWS CloudTraiI

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `D`
**社区投票：** D 100%

### Q302.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q302.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon CloudWatch Logs | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |
| B | AWS Security Hub | AWS Security Hub：聚合安全发现并提供安全态势管理。 | 题库记录为非正确选项 |
| C | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| D | AWS CloudTraiI | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q302.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q311-EC2-AMI与计算服务题

**题目：** Which type of AWS storage is ephemeral and is deleted when an Amazon EC2 instance is stopped or terminated?

**选项：**

- A. Amazon Elastic Block Store (Amazon EBS)
- B. Amazon EC2 instance store
- C. Amazon Elastic File System (Amazon EFS)
- D. Amazon S3

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q311.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q311.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Elastic Block Store (Amazon EBS) | Amazon EBS：面向 EC2 的持久化块存储卷。 | 题库记录为非正确选项 |
| B | Amazon EC2 instance store | EC2 Instance Store：与 EC2 宿主硬件关联的临时本地块存储。；Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| C | Amazon Elastic File System (Amazon EFS) | Amazon EFS：托管弹性 NFS 文件系统，可被多个计算资源共享。 | 题库记录为非正确选项 |
| D | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q311.3-为什么题库会这样选

题库记录的正确选项定位为：EC2 Instance Store：与 EC2 宿主硬件关联的临时本地块存储。；Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q323-EC2-AMI与计算服务题

**题目：** A company needs to deploy applications in the AWS Cloud as quickly as possible. The company also needs to minimize the complexity that is related to the management of AWS resources. Which AWS service should the company use to meet these requirements?

**选项：**

- A. AWS Config
- B. AWS Elastic Beanstalk
- C. Amazon EC2
- D. Amazon Personalize

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q323.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q323.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |
| B | AWS Elastic Beanstalk | AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。 | 题库记录为正确选项 |
| C | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| D | Amazon Personalize | Amazon Personalize：托管个性化推荐服务；项目资料提示当前考试范围需复核。 | 题库记录为非正确选项 |

### Q323.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q323.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：amazon personalize
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q329-EC2-AMI与计算服务题

**题目：** A company wants to use application stacks to run a workload in the AWS Cloud. The company wants to use pre-configured instances. Which AWS service will meet these requirements?

**选项：**

- A. Amazon Lightsail
- B. Amazon Athena
- C. AWS Outposts
- D. Amazon EC2

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `A`
**需求/考点标签：** Configuration Compliance
**社区投票：** A 100%

### Q329.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Configuration Compliance**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q329.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Lightsail | Amazon Lightsail：面向简单网站/小型应用的简化云平台与可预测套餐。 | 题库记录为正确选项 |
| B | Amazon Athena | Amazon Athena：Serverless 交互式 SQL 查询服务，典型为直接查询 S3 数据。 | 题库记录为非正确选项 |
| C | AWS Outposts | AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。 | 题库记录为非正确选项 |
| D | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q329.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Lightsail：面向简单网站/小型应用的简化云平台与可预测套餐。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q330-EC2-AMI与计算服务题

**题目：** Which AWS services are supported by Savings Plans? (Choose two.)

**选项：**

- A. Amazon EC2
- B. Amazon RDS
- C. Amazon SageMaker
- D. Amazon Redshift
- E. Amazon DynamoDB

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `AC`
**需求/考点标签：** Cost Optimization
**社区投票：** AC 93%, AE 7%

### Q330.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Cost Optimization**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q330.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| B | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |
| C | Amazon SageMaker | Amazon SageMaker AI：构建、训练、部署和管理机器学习模型的平台。 | 题库记录为正确选项 |
| D | Amazon Redshift | Amazon Redshift：托管云数据仓库，用于大规模分析型查询。 | 题库记录为非正确选项 |
| E | Amazon DynamoDB | Amazon DynamoDB：Serverless NoSQL Key-Value/Document 数据库，适合高规模、低延迟访问。 | 题库记录为非正确选项 |

### Q330.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。；Amazon SageMaker AI：构建、训练、部署和管理机器学习模型的平台。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q346-EC2-AMI与计算服务题

**题目：** A company launched an Amazon EC2 instance with the latest Amazon Linux 2 Amazon Machine Image (AMI). Which actions can a system administrator take to connect to the EC2 instance? (Choose two.)

**选项：**

- A. Use Amazon EC2 Instance Connect.
- B. Use a Remote Desktop Protocol (RDP) connection.
- C. Use AWS Batch.
- D. Use AWS Systems Manager Session Manager.
- E. Use Amazon Connect.

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `AD`
**社区投票：** AD 100%

### Q346.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q346.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Use Amazon EC2 Instance Connect. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| B | Use a Remote Desktop Protocol (RDP) connection. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Use AWS Batch. | AWS Batch：托管批处理作业调度与计算资源供给。 | 题库记录为非正确选项 |
| D | Use AWS Systems Manager Session Manager. | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为正确选项 |
| E | Use Amazon Connect. | Amazon Connect：云联络中心服务。 | 题库记录为非正确选项 |

### Q346.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。；AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q361-EC2-AMI与计算服务题

**题目：** Which of the following AWS services are serverless? (Choose two.)

**选项：**

- A. AWS Outposts
- B. Amazon EC2
- C. Amazon Elastic Kubernetes Service (Amazon EKS)
- D. AWS Fargate
- E. AWS Lambda

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `DE`
**需求/考点标签：** Serverless
**社区投票：** DE 100%

### Q361.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Serverless**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q361.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Outposts | AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。 | 题库记录为非正确选项 |
| B | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| C | Amazon Elastic Kubernetes Service (Amazon EKS) | Amazon EKS：AWS 托管 Kubernetes 控制面。 | 题库记录为非正确选项 |
| D | AWS Fargate | AWS Fargate：为 ECS/EKS 提供不需要管理底层服务器的容器计算能力。 | 题库记录为正确选项 |
| E | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为正确选项 |

### Q361.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Fargate：为 ECS/EKS 提供不需要管理底层服务器的容器计算能力。；AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q363-EC2-AMI与计算服务题

**题目：** A solutions architect needs to maintain a fleet of Amazon EC2 instances so that any impaired instances are replaced with new ones. Which AWS service should the solutions architect use?

**选项：**

- A. Amazon Elastic Container Service (Amazon ECS)
- B. Amazon GuardDuty
- C. AWS Shield
- D. AWS Auto Scaling

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `D`
**社区投票：** D 100%

### Q363.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q363.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Elastic Container Service (Amazon ECS) | Amazon ECS：AWS 原生托管容器编排服务。 | 题库记录为非正确选项 |
| B | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| C | AWS Shield | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |
| D | AWS Auto Scaling | EC2 Auto Scaling：根据需求自动增加或减少 EC2 容量。 | 题库记录为正确选项 |

### Q363.3-为什么题库会这样选

题库记录的正确选项定位为：EC2 Auto Scaling：根据需求自动增加或减少 EC2 容量。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q366-EC2-AMI与计算服务题

**题目：** Which AWS service supports the deployment and management of applications in the AWS Cloud?

**选项：**

- A. Amazon CodeGuru
- B. AWS Fargate
- C. AWS CodeCommit
- D. AWS Elastic Beanstalk

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `D`
**社区投票：** D 100%

### Q366.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q366.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon CodeGuru | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | AWS Fargate | AWS Fargate：为 ECS/EKS 提供不需要管理底层服务器的容器计算能力。 | 题库记录为非正确选项 |
| C | AWS CodeCommit | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Elastic Beanstalk | AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。 | 题库记录为正确选项 |

### Q366.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q374-EC2-AMI与计算服务题

**题目：** Which AWS service uses AWS Compute Optimizer to provide sizing recommendations based on workload metrics?

**选项：**

- A. Amazon EC2
- B. Amazon RDS
- C. Amazon Lightsail
- D. AWS Step Functions

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `A`
**需求/考点标签：** 运行时指标监控
**社区投票：** A 100%

### Q374.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**运行时指标监控**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q374.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| B | Amazon RDS | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |
| C | Amazon Lightsail | Amazon Lightsail：面向简单网站/小型应用的简化云平台与可预测套餐。 | 题库记录为非正确选项 |
| D | AWS Step Functions | AWS Step Functions：Serverless 工作流编排和状态机。 | 题库记录为非正确选项 |

### Q374.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q390-EC2-AMI与计算服务题

**题目：** A company is in the process of finding correct Amazon EC2 instance types and sizes to meet its performance and capacity requirements. The company wants to find the lowest possible cost. Which option accurately characterizes the company's actions?

**选项：**

- A. Auto Scaling
- B. Storage tiering
- C. Rightsizing
- D. Instance scheduling

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `C`
**社区投票：** C 100%

### Q390.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q390.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Auto Scaling | EC2 Auto Scaling：根据需求自动增加或减少 EC2 容量。 | 题库记录为非正确选项 |
| B | Storage tiering | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Rightsizing | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Instance scheduling | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q390.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q397-EC2-AMI与计算服务题

**题目：** A company wants to deploy a non-containerized Java-based web application on AWS. The company wants to use a managed service to quickly deploy the application. The company wants the service to automatically provision capacity, load balance, scale, and monitor application health. Which AWS service will meet these requirements?

**选项：**

- A. Amazon Elastic Container Service (Amazon ECS)
- B. AWS Lambda
- C. Amazon Elastic Kubernetes Service (Amazon EKS)
- D. AWS Elastic Beanstalk

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `D`
**需求/考点标签：** Container / Monitoring
**社区投票：** D 100%

### Q397.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Container、Monitoring**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q397.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Elastic Container Service (Amazon ECS) | Amazon ECS：AWS 原生托管容器编排服务。 | 题库记录为非正确选项 |
| B | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| C | Amazon Elastic Kubernetes Service (Amazon EKS) | Amazon EKS：AWS 托管 Kubernetes 控制面。 | 题库记录为非正确选项 |
| D | AWS Elastic Beanstalk | AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。 | 题库记录为正确选项 |

### Q397.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q410-EC2-AMI与计算服务题

**题目：** Which of the following is an advantage that the AWS Cloud provides to users?

**选项：**

- A. Users eliminate the need to guess about infrastructure capacity requirements.
- B. Users decrease their variable costs by maintaining sole ownership of IT hardware.
- C. Users maintain control of underlying IT infrastructure hardware.
- D. Users maintain control of operating systems for managed services.

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `A`
**社区投票：** A 100%

### Q410.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q410.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Users eliminate the need to guess about infrastructure capacity requirements. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Users decrease their variable costs by maintaining sole ownership of IT hardware. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Users maintain control of underlying IT infrastructure hardware. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Users maintain control of operating systems for managed services. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q410.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q425-EC2-AMI与计算服务题

**题目：** Which AWS service or resource can a company use to deploy AWS WAF rules?

**选项：**

- A. Amazon EC2
- B. Application Load Balancer
- C. AWS Trusted Advisor
- D. Network Load Balancer

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `B`
**需求/考点标签：** Web攻击防护
**社区投票：** B 100%

### Q425.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Web攻击防护**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q425.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| B | Application Load Balancer | Elastic Load Balancing：在多个后端目标间分发流量并提高可用性。 | 题库记录为正确选项 |
| C | AWS Trusted Advisor | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |
| D | Network Load Balancer | Elastic Load Balancing：在多个后端目标间分发流量并提高可用性。 | 题库记录为非正确选项 |

### Q425.3-为什么题库会这样选

题库记录的正确选项定位为：Elastic Load Balancing：在多个后端目标间分发流量并提高可用性。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q432-EC2-AMI与计算服务题

**题目：** A company deploys its application on Amazon EC2 instances. The application occasionally experiences sudden increases in demand. The company wants to ensure that its application can respond to changes in demand at the lowest possible cost. Which AWS service or concept will meet these requirements?

**选项：**

- A. AWS Auto Scaling
- B. AWS Compute Optimizer
- C. AWS Cost Explorer
- D. AWS Well-Architected Framework

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `A`
**社区投票：** A 100%

### Q432.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q432.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Auto Scaling | EC2 Auto Scaling：根据需求自动增加或减少 EC2 容量。 | 题库记录为正确选项 |
| B | AWS Compute Optimizer | AWS Compute Optimizer：根据历史利用率等数据提供资源规格优化建议。 | 题库记录为非正确选项 |
| C | AWS Cost Explorer | AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。 | 题库记录为非正确选项 |
| D | AWS Well-Architected Framework | AWS Well-Architected Framework：以六大 Pillars 评估和设计安全、可靠、高效、成本优化、可持续的 Workload。 | 题库记录为非正确选项 |

### Q432.3-为什么题库会这样选

题库记录的正确选项定位为：EC2 Auto Scaling：根据需求自动增加或减少 EC2 容量。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q440-EC2-AMI与计算服务题

**题目：** A company wants to migrate a company’s on-premises container infrastructure to the AWS Cloud. The company wants to prevent unplanned administration and operation cost and adapt to a serverless architecture. Which AWS service will meet these requirements?

**选项：**

- A. Amazon Connect
- B. AWS Fargate
- C. Amazon Lightsail
- D. Amazon EC2

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `B`
**需求/考点标签：** Serverless / Container / Hybrid Cloud / Migration
**社区投票：** B 100%

### Q440.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Serverless、Container、Hybrid Cloud、Migration**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q440.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Connect | Amazon Connect：云联络中心服务。 | 题库记录为非正确选项 |
| B | AWS Fargate | AWS Fargate：为 ECS/EKS 提供不需要管理底层服务器的容器计算能力。 | 题库记录为正确选项 |
| C | Amazon Lightsail | Amazon Lightsail：面向简单网站/小型应用的简化云平台与可预测套餐。 | 题库记录为非正确选项 |
| D | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q440.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Fargate：为 ECS/EKS 提供不需要管理底层服务器的容器计算能力。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q441-EC2-AMI与计算服务题

**题目：** A company wants its Amazon EC2 instances to be in different locations but share the same geographic area. The company also wants to use multiple power grids and independent networking connectivity for the EC2 instances. Which solution meets these requirements?

**选项：**

- A. Use EC2 instances in multiple edge locations in the same AWS Region.
- B. Use EC2 instances in multiple Availability Zones in the same AWS Region.
- C. Use EC2 instances in multiple Amazon Connect locations in the same AWS Region.
- D. Use EC2 instances in multiple AWS Artifact locations in the same AWS Region.

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q441.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q441.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Use EC2 instances in multiple edge locations in the same AWS Region. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| B | Use EC2 instances in multiple Availability Zones in the same AWS Region. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| C | Use EC2 instances in multiple Amazon Connect locations in the same AWS Region. | Amazon Connect：云联络中心服务。；Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| D | Use EC2 instances in multiple AWS Artifact locations in the same AWS Region. | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。；Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q441.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q442-EC2-AMI与计算服务题

**题目：** An ecommerce company has deployed a new web application on Amazon EC2 instances. The company wants to distribute incoming HTTP traffic evenly across all running instances. Which AWS service or resource will meet this requirement?

**选项：**

- A. Amazon EC2 Auto Scaling
- B. Application Load Balancer
- C. Gateway Load Balancer
- D. Network Load Balancer

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q442.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q442.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon EC2 Auto Scaling | EC2 Auto Scaling：根据需求自动增加或减少 EC2 容量。；Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| B | Application Load Balancer | Elastic Load Balancing：在多个后端目标间分发流量并提高可用性。 | 题库记录为正确选项 |
| C | Gateway Load Balancer | Elastic Load Balancing：在多个后端目标间分发流量并提高可用性。 | 题库记录为非正确选项 |
| D | Network Load Balancer | Elastic Load Balancing：在多个后端目标间分发流量并提高可用性。 | 题库记录为非正确选项 |

### Q442.3-为什么题库会这样选

题库记录的正确选项定位为：Elastic Load Balancing：在多个后端目标间分发流量并提高可用性。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q444-EC2-AMI与计算服务题

**题目：** A company wants to run CPU-intensive workload across multiple Amazon EC2 instances. Which EC2 instance type should the company use to meet this requirement?

**选项：**

- A. General purpose instances
- B. Compute optimized instances
- C. Memory optimized instances
- D. Storage optimized instances

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q444.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q444.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | General purpose instances | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Compute optimized instances | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Memory optimized instances | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Storage optimized instances | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q444.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q451-EC2-AMI与计算服务题

**题目：** A company is using AWS for all its IT infrastructure. The company's developers are allowed to deploy applications on their own. The developers want to deploy their applications without having to provision the infrastructure themselves. Which AWS service should the developers use to meet these requirements?

**选项：**

- A. AWS CloudFormation
- B. AWS CodeBuild
- C. AWS Elastic Beanstalk
- D. AWS CodeDeploy

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `C`
**社区投票：** C 100%

### Q451.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q451.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CloudFormation | AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。 | 题库记录为非正确选项 |
| B | AWS CodeBuild | AWS CodeBuild：托管代码构建与测试服务。 | 题库记录为非正确选项 |
| C | AWS Elastic Beanstalk | AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。 | 题库记录为正确选项 |
| D | AWS CodeDeploy | AWS CodeDeploy：自动化应用部署服务；项目资料将其视为题库历史/当前范围需复核项。 | 题库记录为非正确选项 |

### Q451.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q451.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：codedeploy
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q463-EC2-AMI与计算服务题

**题目：** A company wants to log in securely to Linux Amazon EC2 instances. How can the company accomplish this goal?

**选项：**

- A. Use SSH keys.
- B. Use a VPN.
- C. Use end-to-end encryption.
- D. Use Amazon Route 53.

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `A`
**社区投票：** A 100%

### Q463.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q463.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Use SSH keys. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Use a VPN. | AWS Site-to-Site VPN：通过 Internet 建立加密隧道连接本地网络与 AWS。 | 题库记录为非正确选项 |
| C | Use end-to-end encryption. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Use Amazon Route 53. | Amazon Route 53：AWS 托管 DNS 与 DNS 路由服务。 | 题库记录为非正确选项 |

### Q463.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q464-EC2-AMI与计算服务题

**题目：** A company wants to use a serverless compute service for an application. Which AWS service will meet this requirement?

**选项：**

- A. AWS Lambda
- B. AWS CloudFormation
- C. AWS Elastic Beanstalk
- D. Elastic Load Balancing

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `A`
**需求/考点标签：** Serverless
**社区投票：** A 100%

### Q464.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Serverless**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q464.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为正确选项 |
| B | AWS CloudFormation | AWS CloudFormation：AWS Infrastructure as Code，用模板声明和部署资源。 | 题库记录为非正确选项 |
| C | AWS Elastic Beanstalk | AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。 | 题库记录为非正确选项 |
| D | Elastic Load Balancing | Elastic Load Balancing：在多个后端目标间分发流量并提高可用性。 | 题库记录为非正确选项 |

### Q464.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q467-EC2-AMI与计算服务题

**题目：** A company plans to migrate its custom marketing application and order-processing application to AWS. The company needs to deploy the applications on different types of instances with various configurations of CPU, memory, storage, and networking capacity. Which AWS service should the company use to meet these requirements?

**选项：**

- A. AWS Lambda
- B. Amazon Cognito
- C. Amazon Athena
- D. Amazon EC2

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `D`
**需求/考点标签：** Migration / Configuration Compliance
**社区投票：** D 100%

### Q467.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Migration、Configuration Compliance**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q467.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| B | Amazon Cognito | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。 | 题库记录为非正确选项 |
| C | Amazon Athena | Amazon Athena：Serverless 交互式 SQL 查询服务，典型为直接查询 S3 数据。 | 题库记录为非正确选项 |
| D | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |

### Q467.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q467.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q472-EC2-AMI与计算服务题

**题目：** A company wants its Amazon EC2 instances to operate in a highly available environment, even if there is a natural disaster in a particular geographic area. Which solution achieves this goal?

**选项：**

- A. Use EC2 instances in multiple AWS Regions.
- B. Use EC2 instances in multiple edge locations.
- C. Use EC2 instances in the same Availability Zone but in different AWS Regions.
- D. Use Amazon CloudFront with the EC2 instances configured as the source.

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `A`
**需求/考点标签：** High Availability
**社区投票：** A 100%

### Q472.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**High Availability**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q472.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Use EC2 instances in multiple AWS Regions. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| B | Use EC2 instances in multiple edge locations. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| C | Use EC2 instances in the same Availability Zone but in different AWS Regions. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| D | Use Amazon CloudFront with the EC2 instances configured as the source. | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。；Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q472.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q492-EC2-AMI与计算服务题

**题目：** Which AWS compute service gives users the ability to securely and reliably run containers at scale?

**选项：**

- A. Amazon Elastic Container Service (Amazon ECS)
- B. Amazon Aurora
- C. Amazon Athena
- D. Amazon Polly

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `A`
**需求/考点标签：** Container
**社区投票：** A 100%

### Q492.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Container**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q492.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Elastic Container Service (Amazon ECS) | Amazon ECS：AWS 原生托管容器编排服务。 | 题库记录为正确选项 |
| B | Amazon Aurora | Amazon Aurora：AWS 云原生关系数据库，兼容 MySQL/PostgreSQL 生态，强调高性能与高可用。 | 题库记录为非正确选项 |
| C | Amazon Athena | Amazon Athena：Serverless 交互式 SQL 查询服务，典型为直接查询 S3 数据。 | 题库记录为非正确选项 |
| D | Amazon Polly | Amazon Polly：Text-to-Speech，文本转自然语音。 | 题库记录为非正确选项 |

### Q492.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon ECS：AWS 原生托管容器编排服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q494-EC2-AMI与计算服务题

**题目：** A company runs an application on AWS that performs batch jobs. The application is fault-tolerant and can handle interruptions. The company wants to optimize the cost to run the application. Which AWS offering will meet these requirements?

**选项：**

- A. Amazon Macie
- B. Amazon Neptune
- C. Amazon EC2 Spot Instances
- D. Amazon EC2 On-Demand Instances

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `C`
**需求/考点标签：** 可中断低成本计算
**社区投票：** C 100%

### Q494.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**可中断低成本计算**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q494.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Macie | Amazon Macie：发现和保护 S3 中的敏感数据。 | 题库记录为非正确选项 |
| B | Amazon Neptune | Amazon Neptune：托管图数据库，适合关系网络和图遍历场景。 | 题库记录为非正确选项 |
| C | Amazon EC2 Spot Instances | Spot Instances：利用 AWS 闲置计算容量的低价实例，但可能被中断。；Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| D | Amazon EC2 On-Demand Instances | On-Demand Instances：无长期承诺、按使用付费的计算购买方式。；Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q494.3-为什么题库会这样选

题库记录的正确选项定位为：Spot Instances：利用 AWS 闲置计算容量的低价实例，但可能被中断。；Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q542-EC2-AMI与计算服务题

**题目：** An ecommerce company wants to distribute traffic between the Amazon EC2 instances that host its website. Which AWS service or resource will meet these requirements?

**选项：**

- A. Application Load Balancer
- B. AWS WAF
- C. AWS CloudHSM
- D. AWS Direct Connect

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `A`
**需求/考点标签：** Block Storage
**社区投票：** A 100%

### Q542.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Block Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q542.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Application Load Balancer | Elastic Load Balancing：在多个后端目标间分发流量并提高可用性。 | 题库记录为正确选项 |
| B | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |
| C | AWS CloudHSM | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Direct Connect | AWS Direct Connect：客户网络到 AWS 的专用网络连接，适合稳定、长期、可预测链路需求。 | 题库记录为非正确选项 |

### Q542.3-为什么题库会这样选

题库记录的正确选项定位为：Elastic Load Balancing：在多个后端目标间分发流量并提高可用性。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q549-EC2-AMI与计算服务题

**题目：** A company's employees are working from home. The company wants its employees to use their personal devices to connect to a managed workstation in the AWS Cloud. Which AWS service should the company use to provide the remote environment?

**选项：**

- A. Amazon Workspaces
- B. AWS Cloud9
- C. AWS Outposts
- D. Amazon Lightsail

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `A`
**社区投票：** A 100%

### Q549.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q549.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Workspaces | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | AWS Cloud9 | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | AWS Outposts | AWS Outposts：把 AWS 基础设施和服务运行到客户本地场所。 | 题库记录为非正确选项 |
| D | Amazon Lightsail | Amazon Lightsail：面向简单网站/小型应用的简化云平台与可预测套餐。 | 题库记录为非正确选项 |

### Q549.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q552-EC2-AMI与计算服务题

**题目：** Which AWS service provides serverless compute for use with containers?

**选项：**

- A. Amazon Simple Queue Service (Amazon SQS)
- B. AWS Fargate
- C. AWS Elastic Beanstalk
- D. Amazon SageMaker

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `B`
**需求/考点标签：** Serverless / Container
**社区投票：** B 100%

### Q552.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Serverless、Container**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q552.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Simple Queue Service (Amazon SQS) | Amazon SQS：托管消息队列，用于异步、缓冲和系统解耦。 | 题库记录为非正确选项 |
| B | AWS Fargate | AWS Fargate：为 ECS/EKS 提供不需要管理底层服务器的容器计算能力。 | 题库记录为正确选项 |
| C | AWS Elastic Beanstalk | AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。 | 题库记录为非正确选项 |
| D | Amazon SageMaker | Amazon SageMaker AI：构建、训练、部署和管理机器学习模型的平台。 | 题库记录为非正确选项 |

### Q552.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Fargate：为 ECS/EKS 提供不需要管理底层服务器的容器计算能力。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q555-EC2-AMI与计算服务题

**题目：** A company is planning to use the Amazon EC2 instances as web servers. Customers from around the world will use the web servers. Most customers will use the web servers only during certain hours of the day. How should the company deploy the EC2 instances to achieve the LOWEST operational cost?

**选项：**

- A. In multiple Availability Zones
- B. In an Auto Scaling group
- C. In a placement group
- D. In private subnets

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q555.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q555.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | In multiple Availability Zones | Availability Zone 是 Region 内相互隔离的故障域/部署位置。 | 题库记录为非正确选项 |
| B | In an Auto Scaling group | EC2 Auto Scaling：根据需求自动增加或减少 EC2 容量。 | 题库记录为正确选项 |
| C | In a placement group | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | In private subnets | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q555.3-为什么题库会这样选

题库记录的正确选项定位为：EC2 Auto Scaling：根据需求自动增加或减少 EC2 容量。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q590-EC2-AMI与计算服务题

**题目：** A company wants to update its online data processing application by implementing container-based services that run for 4 hours at a time. The company does not want to provision or manage server instances. Which AWS service will meet these requirements?

**选项：**

- A. AWS Lambda
- B. AWS Fargate
- C. Amazon EC2
- D. AWS Elastic Beanstalk

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `B`
**需求/考点标签：** Container
**社区投票：** B 75%, A 25%

### Q590.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Container**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q590.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| B | AWS Fargate | AWS Fargate：为 ECS/EKS 提供不需要管理底层服务器的容器计算能力。 | 题库记录为正确选项 |
| C | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| D | AWS Elastic Beanstalk | AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。 | 题库记录为非正确选项 |

### Q590.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Fargate：为 ECS/EKS 提供不需要管理底层服务器的容器计算能力。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q594-EC2-AMI与计算服务题

**题目：** A developer who has no AWS Cloud experience wants to use AWS technology to build a web application. Which AWS service should the developer use to start building the application?

**选项：**

- A. Amazon SageMaker
- B. AWS Lambda
- C. Amazon Lightsail
- D. Amazon Elastic Container Service (Amazon ECS)

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `C`
**社区投票：** C 100%

### Q594.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q594.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon SageMaker | Amazon SageMaker AI：构建、训练、部署和管理机器学习模型的平台。 | 题库记录为非正确选项 |
| B | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| C | Amazon Lightsail | Amazon Lightsail：面向简单网站/小型应用的简化云平台与可预测套餐。 | 题库记录为正确选项 |
| D | Amazon Elastic Container Service (Amazon ECS) | Amazon ECS：AWS 原生托管容器编排服务。 | 题库记录为非正确选项 |

### Q594.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Lightsail：面向简单网站/小型应用的简化云平台与可预测套餐。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q621-EC2-AMI与计算服务题

**题目：** What is a benefit of using an Elastic Load Balancing (ELB) load balancer with applications running in the AWS Cloud?

**选项：**

- A. An ELB will automatically scale resources to meet capacity needs.
- B. An ELB can balance traffic across multiple compute resources.
- C. An ELB can span multiple AWS Regions.
- D. An ELB can balance traffic between multiple internet gateways.

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q621.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q621.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | An ELB will automatically scale resources to meet capacity needs. | 可扩展性关注系统承载更大规模工作负载的能力。 | 题库记录为非正确选项 |
| B | An ELB can balance traffic across multiple compute resources. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | An ELB can span multiple AWS Regions. | Region 是 AWS 独立的地理区域，内部包含多个 Availability Zone。 | 题库记录为非正确选项 |
| D | An ELB can balance traffic between multiple internet gateways. | Internet Gateway：VPC 与公网 Internet 之间的网关组件。 | 题库记录为非正确选项 |

### Q621.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q628-EC2-AMI与计算服务题

**题目：** An online retail company wants to migrate its on-premises workload to AWS. The company needs to automatically handle a seasonal workload increase in a cost-effective manner. Which AWS Cloud features will help the company meet this requirement? (Choose two.)

**选项：**

- A. Cross-Region workload deployment
- B. Pay-as-you-go pricing
- C. Built-in AWS CloudTrail audit capabilities
- D. Auto Scaling policies
- E. Centralized logging

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `BD`
**需求/考点标签：** Hybrid Cloud / Migration / Cost Optimization
**社区投票：** BD 100%

### Q628.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Migration、Cost Optimization**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q628.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Cross-Region workload deployment | Region 是 AWS 独立的地理区域，内部包含多个 Availability Zone。 | 题库记录为非正确选项 |
| B | Pay-as-you-go pricing | OPEX/可变支出强调按实际使用支付。 | 题库记录为正确选项 |
| C | Built-in AWS CloudTrail audit capabilities | AWS CloudTrail：记录 AWS API/账号活动，回答谁在什么时候做了什么操作。 | 题库记录为非正确选项 |
| D | Auto Scaling policies | EC2 Auto Scaling：根据需求自动增加或减少 EC2 容量。 | 题库记录为正确选项 |
| E | Centralized logging | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q628.3-为什么题库会这样选

题库记录的正确选项定位为：OPEX/可变支出强调按实际使用支付。；EC2 Auto Scaling：根据需求自动增加或减少 EC2 容量。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q646-EC2-AMI与计算服务题

**题目：** Which AWS services are serverless? (Choose two.)

**选项：**

- A. AWS Fargate
- B. Amazon Managed Streaming for Apache Kafka
- C. Amazon EMR
- D. Amazon S3
- E. Amazon EC2

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `AD`
**需求/考点标签：** Serverless
**社区投票：** AD 100%

### Q646.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Serverless**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q646.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Fargate | AWS Fargate：为 ECS/EKS 提供不需要管理底层服务器的容器计算能力。 | 题库记录为正确选项 |
| B | Amazon Managed Streaming for Apache Kafka | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Amazon EMR | Amazon EMR：托管大数据框架平台，如 Spark/Hadoop。 | 题库记录为非正确选项 |
| D | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为正确选项 |
| E | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q646.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Fargate：为 ECS/EKS 提供不需要管理底层服务器的容器计算能力。；Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q657-EC2-AMI与计算服务题

**题目：** A company hosts a web application on AWS. The company has improved the availability of its application by provisioning multiple Amazon EC2 instances. The company wants to distribute its traffic across the EC2 instances while providing a single point of contact to the web clients. Which AWS service can distribute the traffic to multiple EC2 instances as targets?

**选项：**

- A. VPC endpoints
- B. Application Load Balancer
- C. NAT gateway
- D. Internet gateway

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q657.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q657.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | VPC endpoints | VPC Endpoint：让 VPC 私网访问支持的 AWS 服务，而无需经过公共 Internet。；Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| B | Application Load Balancer | Elastic Load Balancing：在多个后端目标间分发流量并提高可用性。 | 题库记录为正确选项 |
| C | NAT gateway | NAT Gateway：常用于 Private Subnet 资源主动访问外部 IPv4 网络。 | 题库记录为非正确选项 |
| D | Internet gateway | Internet Gateway：VPC 与公网 Internet 之间的网关组件。 | 题库记录为非正确选项 |

### Q657.3-为什么题库会这样选

题库记录的正确选项定位为：Elastic Load Balancing：在多个后端目标间分发流量并提高可用性。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q674-EC2-AMI与计算服务题

**题目：** A company wants to deploy a web application as a containerized application. The company wants to use a managed service that can automatically create container images from source code and deploy the containerized application. Which AWS service will meet these requirements?

**选项：**

- A. AWS Elastic Beanstalk
- B. Amazon Elastic Container Service (Amazon ECS)
- C. AWS App Runner
- D. Amazon EC2

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `C`
**需求/考点标签：** Container
**社区投票：** C 75%, B 25%

### Q674.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Container**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q674.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Elastic Beanstalk | AWS Elastic Beanstalk：托管应用部署平台，帮助创建和管理常见 Web 应用运行环境。 | 题库记录为非正确选项 |
| B | Amazon Elastic Container Service (Amazon ECS) | Amazon ECS：AWS 原生托管容器编排服务。 | 题库记录为非正确选项 |
| C | AWS App Runner | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q674.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q702-EC2-AMI与计算服务题

**题目：** A company wants to run its application's code without having to provision and manage servers. Which AWS service will meet this requirement?

**选项：**

- A. AWS Glue
- B. AWS Lambda
- C. AWS CodeDeploy
- D. Amazon CodeGuru

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q702.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q702.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Glue | AWS Glue：Serverless 数据集成/ETL 与 Data Catalog 服务。 | 题库记录为非正确选项 |
| B | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为正确选项 |
| C | AWS CodeDeploy | AWS CodeDeploy：自动化应用部署服务；项目资料将其视为题库历史/当前范围需复核项。 | 题库记录为非正确选项 |
| D | Amazon CodeGuru | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q702.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q702.4-⚠-争议/版本提示

- 涉及项目资料已提示需关注当前状态的词：codedeploy
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q708-EC2-AMI与计算服务题

**题目：** A company has an on-premises application. The application has processing times of less than 5 minutes and is invoked only a few times each day. The company wants to move the application to the AWS Cloud. Which AWS service will support this application MOST cost-effectively?

**选项：**

- A. Amazon Elastic Container Service (Amazon ECS)
- B. AWS Lambda
- C. Amazon Elastic Kubernetes Service (Amazon EKS)
- D. Amazon EC2

**主分类：** C4-03 EC2-AMI与计算服务题
**题库记录答案：** `B`
**需求/考点标签：** Hybrid Cloud / Cost Optimization
**社区投票：** B 100%

### Q708.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud、Cost Optimization**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q708.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Elastic Container Service (Amazon ECS) | Amazon ECS：AWS 原生托管容器编排服务。 | 题库记录为非正确选项 |
| B | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为正确选项 |
| C | Amazon Elastic Kubernetes Service (Amazon EKS) | Amazon EKS：AWS 托管 Kubernetes 控制面。 | 题库记录为非正确选项 |
| D | Amazon EC2 | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q708.3-为什么题库会这样选

题库记录的正确选项定位为：AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---
