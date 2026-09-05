# C4-14-IAM-Role-Policy-MFA题

> 资料口径：本模块以用户提供的 719 道 CLF-C02 题库与前序 C1/C2 项目资料为基础。题库的 `correct_answer`、社区投票与评论用于发现考点和争议，不自动等于当前 AWS 官方结论；本模块没有在生成过程中擅自用外部常识覆盖题库内容。凡现有项目已经明确标记为 `[UPDATED]`、`[LEGACY]`、`[CURRENT-OUT-OF-SCOPE]` 的内容，会继续保留这些状态提示。正式考试前，涉及当前产品状态和 Support 计划等时效信息仍应再对照 AWS 官方页面。

本文件共收录 **54** 道主分类题。范围：IAM、User/Group/Role/Policy、MFA、Identity Center、Cognito、SCP。

> 注意：这里的“正确”指题库 `correct_answer` 记录。若题目存在明显争议/历史差异，会明确标记并同时收入 C4-27。
## Q26-IAM-Role-Policy-MFA题

**题目：** A company has an AWS account. The company wants to audit its password and access key rotation details for compliance purposes. Which AWS service or tool will meet this requirement?

**选项：**

- A. IAM Access Analyzer
- B. AWS Artifact
- C. IAM credential report
- D. AWS Audit Manager

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `C`
**需求/考点标签：** 配置变化与合规
**社区投票：** C 100%

### Q26.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**配置变化与合规**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q26.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | IAM Access Analyzer | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | AWS Artifact | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。 | 题库记录为非正确选项 |
| C | IAM credential report | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| D | AWS Audit Manager | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |

### Q26.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q36-IAM-Role-Policy-MFA题

**题目：** Which AWS service or feature identifies whether an Amazon S3 bucket or an IAM role has been shared with an external entity?

**选项：**

- A. AWS Service Catalog
- B. AWS Systems Manager
- C. AWS IAM Access Analyzer
- D. AWS Organizations

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `C`
**需求/考点标签：** Object Storage
**社区投票：** C 100%

### Q36.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q36.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Service Catalog | AWS Service Catalog：让企业发布经过批准的云产品/基础设施模板目录。 | 题库记录为非正确选项 |
| B | AWS Systems Manager | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为非正确选项 |
| C | AWS IAM Access Analyzer | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| D | AWS Organizations | AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。 | 题库记录为非正确选项 |

### Q36.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q39-IAM-Role-Policy-MFA题

**题目：** A company is setting up AWS Identity and Access Management (IAM) on an AWS account. Which recommendation complies with IAM security best practices?

**选项：**

- A. Use the account root user access keys for administrative tasks.
- B. Grant broad permissions so that all company employees can access the resources they need.
- C. Turn on multi-factor authentication (MFA) for added security during the login process.
- D. Avoid rotating credentials to prevent issues in production applications.

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `C`
**社区投票：** C 100%

### Q39.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q39.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Use the account root user access keys for administrative tasks. | Root User 拥有账号最高级权限，应强保护并避免日常使用。 | 题库记录为非正确选项 |
| B | Grant broad permissions so that all company employees can access the resources they need. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Turn on multi-factor authentication (MFA) for added security during the login process. | MFA：多因素认证，增强账号登录安全。 | 题库记录为正确选项 |
| D | Avoid rotating credentials to prevent issues in production applications. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q39.3-为什么题库会这样选

题库记录的正确选项定位为：MFA：多因素认证，增强账号登录安全。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q52-IAM-Role-Policy-MFA题

**题目：** A company is developing an application that uses multiple AWS services. The application needs to use temporary, limited- privilege credentials for authentication with other AWS APIs. Which AWS service or feature should the company use to meet these authentication requirements?

**选项：**

- A. Amazon API Gateway
- B. IAM users
- C. AWS Security Token Service (AWS STS)
- D. IAM instance profiles

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `C`
**社区投票：** C 100%

### Q52.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q52.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon API Gateway | Amazon API Gateway：托管 API 前门，用于发布、保护和管理 API。 | 题库记录为非正确选项 |
| B | IAM users | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| C | AWS Security Token Service (AWS STS) | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | IAM instance profiles | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |

### Q52.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q54-IAM-Role-Policy-MFA题

**题目：** Which AWS service is always provided at no charge?

**选项：**

- A. Amazon S3
- B. AWS Identity and Access Management (IAM)
- C. Elastic Load Balancers
- D. AWS WAF

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `B`
**社区投票：** B 94%, A 6%

### Q54.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q54.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon S3 | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | AWS Identity and Access Management (IAM) | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| C | Elastic Load Balancers | Elastic Load Balancing：在多个后端目标间分发流量并提高可用性。 | 题库记录为非正确选项 |
| D | AWS WAF | AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |

### Q54.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q94-IAM-Role-Policy-MFA题

**题目：** Using AWS Identity and Access Management (IAM) to grant access only to the resources needed to perform a task is a concept known as:

**选项：**

- A. restricted access.
- B. as-needed access.
- C. least privilege access.
- D. token access.

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `C`
**社区投票：** C 92%, D 8%

### Q94.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q94.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | restricted access. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | as-needed access. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | least privilege access. | 最小权限原则要求只授予完成任务所需的最少权限。 | 题库记录为正确选项 |
| D | token access. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q94.3-为什么题库会这样选

题库记录的正确选项定位为：最小权限原则要求只授予完成任务所需的最少权限。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q98-IAM-Role-Policy-MFA题

**题目：** A company wants to grant users in one AWS account access to resources in another AWS account. The users do not currently have permission to access the resources. Which AWS service will meet this requirement?

**选项：**

- A. IAM group
- B. IAM role
- C. IAM tag
- D. IAM Access Analyzer

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `B`
**社区投票：** B 91%, A 9%

### Q98.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q98.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | IAM group | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | IAM role | IAM Role：可被用户、AWS 服务或联合身份临时承担的权限身份。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| C | IAM tag | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| D | IAM Access Analyzer | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |

### Q98.3-为什么题库会这样选

题库记录的正确选项定位为：IAM Role：可被用户、AWS 服务或联合身份临时承担的权限身份。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q98.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q99-IAM-Role-Policy-MFA题

**题目：** Which task is the responsibility of AWS when using AWS services?

**选项：**

- A. Management of IAM user permissions
- B. Creation of security group rules for outbound access
- C. Maintenance of physical and environmental controls
- D. Application of Amazon EC2 operating system patches

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `C`
**社区投票：** C 99%

### Q99.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q99.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Management of IAM user permissions | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | Creation of security group rules for outbound access | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为非正确选项 |
| C | Maintenance of physical and environmental controls | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Application of Amazon EC2 operating system patches | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q99.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q106-IAM-Role-Policy-MFA题

**题目：** A developer has been hired by a large company and needs AWS credentials. Which are security best practices that should be followed? (Choose two.)

**选项：**

- A. Grant the developer access to only the AWS resources needed to perform the job.
- B. Share the AWS account root user credentials with the developer.
- C. Add the developer to the administrator’s group in AWS IAM.
- D. Configure a password policy that ensures the developer’s password cannot be changed.
- E. Ensure the account password policy requires a minimum length.

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `AE`
**社区投票：** AE 91%, AD 9%

### Q106.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q106.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Grant the developer access to only the AWS resources needed to perform the job. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Share the AWS account root user credentials with the developer. | Root User 拥有账号最高级权限，应强保护并避免日常使用。 | 题库记录为非正确选项 |
| C | Add the developer to the administrator’s group in AWS IAM. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| D | Configure a password policy that ensures the developer’s password cannot be changed. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| E | Ensure the account password policy requires a minimum length. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q106.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q106.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q108-IAM-Role-Policy-MFA题

**题目：** A user wants to allow applications running on an Amazon EC2 instance to make calls to other AWS services. The access granted must be secure. Which AWS service or feature should be used?

**选项：**

- A. Security groups
- B. AWS Firewall Manager
- C. IAM roles
- D. IAM user SSH keys

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `C`
**社区投票：** C 93%, A 7%

### Q108.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q108.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Security groups | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为非正确选项 |
| B | AWS Firewall Manager | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| C | IAM roles | IAM Role：可被用户、AWS 服务或联合身份临时承担的权限身份。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| D | IAM user SSH keys | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |

### Q108.3-为什么题库会这样选

题库记录的正确选项定位为：IAM Role：可被用户、AWS 服务或联合身份临时承担的权限身份。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q108.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q149-IAM-Role-Policy-MFA题

**题目：** A systems administrator created a new IAM user for a developer and assigned the user an access key instead of a user name and password. What is the access key used for?

**选项：**

- A. To access the AWS account as the AWS account root user
- B. To access the AWS account through the AWS Management Console
- C. To access the AWS account through a CLI
- D. To access all of a company’s AWS accounts

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `C`
**社区投票：** C 100%

### Q149.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q149.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | To access the AWS account as the AWS account root user | Root User 拥有账号最高级权限，应强保护并避免日常使用。 | 题库记录为非正确选项 |
| B | To access the AWS account through the AWS Management Console | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| C | To access the AWS account through a CLI | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | To access all of a company’s AWS accounts | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q149.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q160-IAM-Role-Policy-MFA题

**题目：** Which actions are best practices for an AWS account root user? (Choose two.)

**选项：**

- A. Share root user credentials with team members.
- B. Create multiple root users for the account, separated by environment.
- C. Enable multi-factor authentication (MFA) on the root user.
- D. Create an IAM user with administrator privileges for daily administrative tasks, instead of using the root user.
- E. Use programmatic access instead of the root user and password.

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `CD`
**社区投票：** CD 100%

### Q160.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q160.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Share root user credentials with team members. | Root User 拥有账号最高级权限，应强保护并避免日常使用。 | 题库记录为非正确选项 |
| B | Create multiple root users for the account, separated by environment. | Root User 拥有账号最高级权限，应强保护并避免日常使用。 | 题库记录为非正确选项 |
| C | Enable multi-factor authentication (MFA) on the root user. | MFA：多因素认证，增强账号登录安全。 | 题库记录为正确选项 |
| D | Create an IAM user with administrator privileges for daily administrative tasks, instead of using the root user. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| E | Use programmatic access instead of the root user and password. | Root User 拥有账号最高级权限，应强保护并避免日常使用。 | 题库记录为非正确选项 |

### Q160.3-为什么题库会这样选

题库记录的正确选项定位为：MFA：多因素认证，增强账号登录安全。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q165-IAM-Role-Policy-MFA题

**题目：** A company wants to identify Amazon S3 buckets that are shared with another AWS account. Which AWS service or feature will meet these requirements?

**选项：**

- A. AWS Lake Formation
- B. IAM credential report
- C. Amazon CloudWatch
- D. IAM Access Analyzer

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `D`
**需求/考点标签：** Object Storage
**社区投票：** D 100%

### Q165.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Object Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q165.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Lake Formation | AWS Lake Formation：帮助构建、管理和治理数据湖。 | 题库记录为非正确选项 |
| B | IAM credential report | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| C | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |
| D | IAM Access Analyzer | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |

### Q165.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q168-IAM-Role-Policy-MFA题

**题目：** Which action is a security best practice for access to sensitive data that is stored in an Amazon S3 bucket?

**选项：**

- A. Enable S3 Cross-Region Replication (CRR) on the S3 bucket.
- B. Use IAM roles for applications that require access to the S3 bucket.
- C. Configure AWS WAF to prevent unauthorized access to the S3 bucket.
- D. Configure Amazon GuardDuty to prevent unauthorized access to the S3 bucket.

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `B`
**需求/考点标签：** S3敏感数据发现
**社区投票：** B 100%

### Q168.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**S3敏感数据发现**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q168.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Enable S3 Cross-Region Replication (CRR) on the S3 bucket. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | Use IAM roles for applications that require access to the S3 bucket. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。；IAM Role：可被用户、AWS 服务或联合身份临时承担的权限身份。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| C | Configure AWS WAF to prevent unauthorized access to the S3 bucket. | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。；AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |
| D | Configure Amazon GuardDuty to prevent unauthorized access to the S3 bucket. | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。；Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |

### Q168.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。；IAM Role：可被用户、AWS 服务或联合身份临时承担的权限身份。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q170-IAM-Role-Policy-MFA题

**题目：** A company needs a central user portal so that users can log in to third-party business applications that support Security Assertion Markup Language (SAML) 2.0. Which AWS service will meet this requirement?

**选项：**

- A. AWS Identity and Access Management (IAM)
- B. Amazon Cognito
- C. AWS IAM Identity Center (AWS Single Sign-On)
- D. AWS CLI

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `C`
**社区投票：** C 52%, B 48%

### Q170.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q170.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Identity and Access Management (IAM) | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | Amazon Cognito | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。 | 题库记录为非正确选项 |
| C | AWS IAM Identity Center (AWS Single Sign-On) | AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| D | AWS CLI | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q170.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q170.4-⚠-争议/版本提示

- 社区投票分散，最高项仅 52%
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q177-IAM-Role-Policy-MFA题

**题目：** Which action will help increase security in the AWS Cloud?

**选项：**

- A. Enable programmatic access for all IAM users.
- B. Use IAM users instead of IAM roles to delegate permissions.
- C. Rotate access keys on a reoccurring basis.
- D. Use inline policies instead of customer managed policies.

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `C`
**社区投票：** C 100%

### Q177.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q177.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Enable programmatic access for all IAM users. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | Use IAM users instead of IAM roles to delegate permissions. | IAM Role：可被用户、AWS 服务或联合身份临时承担的权限身份。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| C | Rotate access keys on a reoccurring basis. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Use inline policies instead of customer managed policies. | 该选项描述 Shared Responsibility 中客户侧的管理/安全责任。 | 题库记录为非正确选项 |

### Q177.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q177.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q192-IAM-Role-Policy-MFA题

**题目：** A company hosts an application on multiple Amazon EC2 instances. The application uses Amazon Simple Notification Service (Amazon SNS) to send messages. Which AWS service or feature will give the application permission to access required AWS services?

**选项：**

- A. AWS Certificate Manager (ACM)
- B. IAM roles
- C. AWS Security Hub
- D. Amazon GuardDuty

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `B`
**需求/考点标签：** 一对多通知
**社区投票：** B 100%

### Q192.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**一对多通知**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q192.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Certificate Manager (ACM) | AWS Certificate Manager：供应和管理 TLS/SSL 证书。 | 题库记录为非正确选项 |
| B | IAM roles | IAM Role：可被用户、AWS 服务或联合身份临时承担的权限身份。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| C | AWS Security Hub | AWS Security Hub：聚合安全发现并提供安全态势管理。 | 题库记录为非正确选项 |
| D | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |

### Q192.3-为什么题库会这样选

题库记录的正确选项定位为：IAM Role：可被用户、AWS 服务或联合身份临时承担的权限身份。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q202-IAM-Role-Policy-MFA题

**题目：** Which AWS service or resource can be used to identify services that have been used by a user within a specified date range?

**选项：**

- A. Amazon S3 access control lists (ACLs)
- B. AWS Certificate Manager (ACM)
- C. Network Access Analyzer
- D. AWS Identity and Access Management Access Analyzer

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `D`
**社区投票：** D 100%

### Q202.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q202.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon S3 access control lists (ACLs) | Amazon S3：高耐久、可扩展的对象存储，以 Bucket/Object 组织数据。 | 题库记录为非正确选项 |
| B | AWS Certificate Manager (ACM) | AWS Certificate Manager：供应和管理 TLS/SSL 证书。 | 题库记录为非正确选项 |
| C | Network Access Analyzer | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Identity and Access Management Access Analyzer | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |

### Q202.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q216-IAM-Role-Policy-MFA题

**题目：** A company has teams that have different job roles and responsibilities. The company’s employees often change teams. The company needs to manage permissions for the employees so that the permissions are appropriate for the job responsibilities. Which IAM resource should the company use to meet this requirement with the LEAST operational overhead?

**选项：**

- A. IAM user groups
- B. IAM roles
- C. IAM instance profiles
- D. IAM policies for individual users

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `B`
**社区投票：** B 52%, A 48%

### Q216.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q216.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | IAM user groups | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | IAM roles | IAM Role：可被用户、AWS 服务或联合身份临时承担的权限身份。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| C | IAM instance profiles | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| D | IAM policies for individual users | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |

### Q216.3-为什么题库会这样选

题库记录的正确选项定位为：IAM Role：可被用户、AWS 服务或联合身份临时承担的权限身份。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q216.4-⚠-争议/版本提示

- 社区投票分散，最高项仅 52%
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q220-IAM-Role-Policy-MFA题

**题目：** A company wants to integrate its online shopping website with social media login credentials. Which AWS service can the company use to make this integration?

**选项：**

- A. AWS Directory Service
- B. AWS Identity and Access Management (IAM)
- C. Amazon Cognito
- D. AWS IAM Identity Center (AWS Single Sign-On)

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `C`
**需求/考点标签：** Block Storage
**社区投票：** C 100%

### Q220.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Block Storage**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q220.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Directory Service | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | AWS Identity and Access Management (IAM) | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| C | Amazon Cognito | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。 | 题库记录为正确选项 |
| D | AWS IAM Identity Center (AWS Single Sign-On) | AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |

### Q220.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q234-IAM-Role-Policy-MFA题

**题目：** Which AWS service or feature will search for and identify AWS resources that are shared externally?

**选项：**

- A. Amazon OpenSearch Service
- B. AWS Control Tower
- C. AWS IAM Access Analyzer
- D. AWS Fargate

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `C`
**社区投票：** C 100%

### Q234.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q234.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon OpenSearch Service | Amazon OpenSearch Service：托管搜索、日志分析与可观测性搜索引擎服务。 | 题库记录为非正确选项 |
| B | AWS Control Tower | AWS Control Tower：基于最佳实践建立和治理多账号 Landing Zone。 | 题库记录为非正确选项 |
| C | AWS IAM Access Analyzer | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| D | AWS Fargate | AWS Fargate：为 ECS/EKS 提供不需要管理底层服务器的容器计算能力。 | 题库记录为非正确选项 |

### Q234.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q279-IAM-Role-Policy-MFA题

**题目：** A developer wants AWS users to access AWS services by using temporary security credentials. Which AWS service or feature should the developer use to provide these credentials?

**选项：**

- A. IAM policies
- B. IAM user groups
- C. AWS Security Token Service (AWS STS)
- D. AWS IAM Identity Center (AWS Single Sign-On)

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `C`
**社区投票：** C 100%

### Q279.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q279.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | IAM policies | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | IAM user groups | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| C | AWS Security Token Service (AWS STS) | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | AWS IAM Identity Center (AWS Single Sign-On) | AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |

### Q279.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q283-IAM-Role-Policy-MFA题

**题目：** A company wants to verify if multi-factor authentication (MFA) is enabled for all users within its AWS accounts. Which AWS service or resource will meet this requirement?

**选项：**

- A. AWS Cost and Usage Report
- B. IAM credential reports
- C. AWS Artifact
- D. Amazon CloudFront reports

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `B`
**需求/考点标签：** MFA
**社区投票：** B 100%

### Q283.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**MFA**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q283.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Cost and Usage Report | AWS Cost and Usage Report：提供细粒度成本与使用明细数据。 | 题库记录为非正确选项 |
| B | IAM credential reports | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| C | AWS Artifact | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。 | 题库记录为非正确选项 |
| D | Amazon CloudFront reports | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。 | 题库记录为非正确选项 |

### Q283.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q288-IAM-Role-Policy-MFA题

**题目：** An external auditor has requested that a company provide a list of all its IAM users, including the status of users' credentials and access keys. What is the SIMPLEST way to provide this information?

**选项：**

- A. Create an IAM user account for the auditor, granting the auditor administrator permissions.
- B. Take a screenshot of each user's page in the AWS Management Console, then provide the screenshots to the auditor.
- C. Download the IAM credential report, then provide the report to the auditor.
- D. Download the AWS Trusted Advisor report, then provide the report to the auditor.

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `C`
**需求/考点标签：** Audit Trail
**社区投票：** C 100%

### Q288.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Audit Trail**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q288.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Create an IAM user account for the auditor, granting the auditor administrator permissions. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | Take a screenshot of each user's page in the AWS Management Console, then provide the screenshots to the auditor. | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| C | Download the IAM credential report, then provide the report to the auditor. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| D | Download the AWS Trusted Advisor report, then provide the report to the auditor. | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为非正确选项 |

### Q288.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q296-IAM-Role-Policy-MFA题

**题目：** A company has a managed IAM policy that does not grant the necessary permissions for users to accomplish required tasks. How can this be resolved?

**选项：**

- A. Enable AWS Shield Advanced.
- B. Create a custom IAM policy.
- C. Use a third-party web application firewall (WAF) managed rule from the AWS Marketplace.
- D. Use AWS Key Management Service (AWS KMS) to create a customer-managed key.

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q296.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q296.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Enable AWS Shield Advanced. | AWS Shield：AWS DDoS 防护服务。 | 题库记录为非正确选项 |
| B | Create a custom IAM policy. | IAM Policy：用 JSON 等形式定义允许/拒绝哪些 AWS 操作。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| C | Use a third-party web application firewall (WAF) managed rule from the AWS Marketplace. | AWS Marketplace：查找、购买和部署第三方软件、数据与服务的数字目录。；AWS WAF：Web 应用防火墙，过滤 HTTP(S) Web 请求。 | 题库记录为非正确选项 |
| D | Use AWS Key Management Service (AWS KMS) to create a customer-managed key. | AWS KMS：集中创建、控制和使用加密密钥。 | 题库记录为非正确选项 |

### Q296.3-为什么题库会这样选

题库记录的正确选项定位为：IAM Policy：用 JSON 等形式定义允许/拒绝哪些 AWS 操作。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q301-IAM-Role-Policy-MFA题

**题目：** Which of the following is a characteristic of the AWS account root user?

**选项：**

- A. The root user is the only user that can be configured with multi-factor authentication (MFA).
- B. The root user is the only user that can access the AWS Management Console.
- C. The root user is the first sign-in identity that is available when an AWS account is created.
- D. The root user has a password that cannot be changed.

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `C`
**社区投票：** C 100%

### Q301.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q301.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | The root user is the only user that can be configured with multi-factor authentication (MFA). | MFA：多因素认证，增强账号登录安全。 | 题库记录为非正确选项 |
| B | The root user is the only user that can access the AWS Management Console. | Root User 拥有账号最高级权限，应强保护并避免日常使用。 | 题库记录为非正确选项 |
| C | The root user is the first sign-in identity that is available when an AWS account is created. | Root User 拥有账号最高级权限，应强保护并避免日常使用。 | 题库记录为正确选项 |
| D | The root user has a password that cannot be changed. | Root User 拥有账号最高级权限，应强保护并避免日常使用。 | 题库记录为非正确选项 |

### Q301.3-为什么题库会这样选

题库记录的正确选项定位为：Root User 拥有账号最高级权限，应强保护并避免日常使用。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q306-IAM-Role-Policy-MFA题

**题目：** A company wants to quickly implement a continuous integration/continuous delivery (CI/CD) pipeline. Which AWS service will meet this requirement?

**选项：**

- A. AWS Config
- B. Amazon Cognito
- C. AWS DataSync
- D. AWS CodeStar

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `D`
**社区投票：** D 100%

### Q306.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q306.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |
| B | Amazon Cognito | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。 | 题库记录为非正确选项 |
| C | AWS DataSync | AWS DataSync：在线高速自动化传输文件/对象数据到、从 AWS 存储。 | 题库记录为非正确选项 |
| D | AWS CodeStar | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q306.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q336-IAM-Role-Policy-MFA题

**题目：** A company wants to generate a list of IAM users. The company also wants to view the status of various credentials that are associated with the users, such as password, access keys, and multi-factor authentication (MFA) devices. Which AWS service or feature will meet these requirements?

**选项：**

- A. IAM credential report
- B. AWS IAM Identity Center (AWS Single Sign-On)
- C. AWS Identity and Access Management Access Analyzer
- D. AWS Cost and Usage Report

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `A`
**需求/考点标签：** MFA
**社区投票：** A 100%

### Q336.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**MFA**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q336.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | IAM credential report | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| B | AWS IAM Identity Center (AWS Single Sign-On) | AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| C | AWS Identity and Access Management Access Analyzer | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| D | AWS Cost and Usage Report | AWS Cost and Usage Report：提供细粒度成本与使用明细数据。 | 题库记录为非正确选项 |

### Q336.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q339-IAM-Role-Policy-MFA题

**题目：** A company wants to allow users to authenticate and authorize multiple AWS accounts by using a single set of credentials. Which AWS service or resource will meet this requirement?

**选项：**

- A. AWS Organizations
- B. IAM user
- C. AWS IAM Identity Center (AWS Single Sign-On)
- D. AWS Control Tower

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `C`
**社区投票：** C 100%

### Q339.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q339.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Organizations | AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。 | 题库记录为非正确选项 |
| B | IAM user | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| C | AWS IAM Identity Center (AWS Single Sign-On) | AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| D | AWS Control Tower | AWS Control Tower：基于最佳实践建立和治理多账号 Landing Zone。 | 题库记录为非正确选项 |

### Q339.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q343-IAM-Role-Policy-MFA题

**题目：** A company is migrating its applications from on-premises to the AWS Cloud. The company wants to ensure that the applications are assigned only the minimum permissions that are needed to perform all operations. Which AWS service will meet these requirements?

**选项：**

- A. AWS Identity and Access Management (IAM)
- B. Amazon CloudWatch
- C. Amazon Macie
- D. Amazon GuardDuty

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `A`
**需求/考点标签：** Hybrid Cloud
**社区投票：** A 100%

### Q343.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Hybrid Cloud**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q343.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Identity and Access Management (IAM) | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| B | Amazon CloudWatch | Amazon CloudWatch：Metrics/Logs/Alarms 等运行时监控与可观测性服务。 | 题库记录为非正确选项 |
| C | Amazon Macie | Amazon Macie：发现和保护 S3 中的敏感数据。 | 题库记录为非正确选项 |
| D | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |

### Q343.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q348-IAM-Role-Policy-MFA题

**题目：** Which task requires a user to sign in as the AWS account root user?

**选项：**

- A. The deletion of IAM users
- B. The deletion of an AWS account
- C. The creation of an organization in AWS Organizations
- D. The deletion of Amazon EC2 instances

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `B`
**社区投票：** B 82%, C 18%

### Q348.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q348.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | The deletion of IAM users | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | The deletion of an AWS account | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | The creation of an organization in AWS Organizations | AWS Organizations：集中组织和治理多个 AWS Account，并支持 Consolidated Billing、SCP 等。 | 题库记录为非正确选项 |
| D | The deletion of Amazon EC2 instances | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |

### Q348.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q385-IAM-Role-Policy-MFA题

**题目：** Which AWS service or resource can identify and provide reports on IAM resources in one AWS account that is shared with another AWS account?

**选项：**

- A. IAM credential report
- B. AWS IAM Identity Center (AWS Single Sign-On)
- C. AWS Identity and Access Management Access Analyzer
- D. Amazon Cognito user pool

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `C`
**社区投票：** C 100%

### Q385.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q385.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | IAM credential report | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | AWS IAM Identity Center (AWS Single Sign-On) | AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| C | AWS Identity and Access Management Access Analyzer | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| D | Amazon Cognito user pool | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。 | 题库记录为非正确选项 |

### Q385.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q391-IAM-Role-Policy-MFA题

**题目：** A company wants to manage sign-in security for workforce users. The company needs to create workforce users and centrally manage their access across all the company's AWS accounts and applications. Which AWS service will meet these requirements?

**选项：**

- A. AWS Audit Manager
- B. Amazon Cognito
- C. AWS Security Hub
- D. AWS IAM Identity Center (AWS Single Sign-On)

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `D`
**社区投票：** D 90%, B 10%

### Q391.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q391.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Audit Manager | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| B | Amazon Cognito | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。 | 题库记录为非正确选项 |
| C | AWS Security Hub | AWS Security Hub：聚合安全发现并提供安全态势管理。 | 题库记录为非正确选项 |
| D | AWS IAM Identity Center (AWS Single Sign-On) | AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |

### Q391.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q392-IAM-Role-Policy-MFA题

**题目：** A company wants a report that lists the status of multi-factor authentication (MFA) devices that all users in the company's AWS account use. Which AWS feature or service will meet this requirement?

**选项：**

- A. AWS Cost and Usage Reports
- B. IAM credential reports
- C. Detailed Billing Reports -
- D. AWS Cost Explorer reports

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `B`
**需求/考点标签：** MFA
**社区投票：** B 100%

### Q392.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**MFA**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q392.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Cost and Usage Reports | AWS Cost and Usage Report：提供细粒度成本与使用明细数据。 | 题库记录为非正确选项 |
| B | IAM credential reports | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| C | Detailed Billing Reports - | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Cost Explorer reports | AWS Cost Explorer：分析历史/当前 AWS 成本和用量趋势。 | 题库记录为非正确选项 |

### Q392.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q394-IAM-Role-Policy-MFA题

**题目：** A company is launching a mobile app in the AWS Cloud. The company wants the app's users to sign in through social media identity providers (IdPs). Which AWS service will meet this requirement?

**选项：**

- A. AWS Lambda
- B. Amazon Cognito
- C. AWS Secrets Manager
- D. Amazon CloudFront

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q394.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q394.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Lambda | AWS Lambda：事件驱动的 Serverless 函数运行环境，无需管理服务器。 | 题库记录为非正确选项 |
| B | Amazon Cognito | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。 | 题库记录为正确选项 |
| C | AWS Secrets Manager | AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。 | 题库记录为非正确选项 |
| D | Amazon CloudFront | Amazon CloudFront：AWS CDN，利用 Edge Location 缓存和分发内容。 | 题库记录为非正确选项 |

### Q394.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q409-IAM-Role-Policy-MFA题

**题目：** Which task is the responsibility of a company that is using Amazon RDS?

**选项：**

- A. Provision the underlying infrastructure.
- B. Create IAM policies to control administrative access to the service.
- C. Install the cables to connect the hardware for compute and storage.
- D. Install and patch the RDS operating system.

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `B`
**需求/考点标签：** 关系数据库高可用
**社区投票：** B 75%, D 25%

### Q409.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**关系数据库高可用**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q409.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Provision the underlying infrastructure. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Create IAM policies to control administrative access to the service. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| C | Install the cables to connect the hardware for compute and storage. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Install and patch the RDS operating system. | Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。 | 题库记录为非正确选项 |

### Q409.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q428-IAM-Role-Policy-MFA题

**题目：** A company wants to provide one of its employees with access to Amazon RDS. The company also wants to limit the interaction to only the AWS CLI and AWS software development kits (SDKs). Which combination of actions should the company take to meet these requirements while following the principles of least privilege? (Choose two.)

**选项：**

- A. Create an IAM user and provide AWS Management Console access only.
- B. Create an IAM user and provide programmatic access only.
- C. Create an IAM role and provide AWS Management Console access only.
- D. Create an IAM policy with administrator access and attach it to the IAM user.
- E. Create an IAM policy with Amazon RDS access and attach it to the IAM user.

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `BE`
**需求/考点标签：** 关系数据库高可用
**社区投票：** BE 100%

### Q428.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**关系数据库高可用**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q428.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Create an IAM user and provide AWS Management Console access only. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | Create an IAM user and provide programmatic access only. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| C | Create an IAM role and provide AWS Management Console access only. | IAM Role：可被用户、AWS 服务或联合身份临时承担的权限身份。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| D | Create an IAM policy with administrator access and attach it to the IAM user. | IAM Policy：用 JSON 等形式定义允许/拒绝哪些 AWS 操作。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| E | Create an IAM policy with Amazon RDS access and attach it to the IAM user. | IAM Policy：用 JSON 等形式定义允许/拒绝哪些 AWS 操作。；Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |

### Q428.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。；IAM Policy：用 JSON 等形式定义允许/拒绝哪些 AWS 操作。；Amazon RDS：托管关系数据库服务，负责大量数据库基础设施运维。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q433-IAM-Role-Policy-MFA题

**题目：** A company wants to organize its users so that the company can grant permissions to the users as a group. Which AWS service or tool can the company use to meet this requirement?

**选项：**

- A. Security groups
- B. AWS Identity and Access Management (IAM)
- C. Resource groups
- D. AWS Security Hub

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q433.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q433.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Security groups | Security Group：资源/ENI 级有状态虚拟防火墙。 | 题库记录为非正确选项 |
| B | AWS Identity and Access Management (IAM) | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| C | Resource groups | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | AWS Security Hub | AWS Security Hub：聚合安全发现并提供安全态势管理。 | 题库记录为非正确选项 |

### Q433.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q447-IAM-Role-Policy-MFA题

**题目：** Which action should a company take to improve security in its AWS account?

**选项：**

- A. Require multi-factor authentication (MFA) for privileged users.
- B. Remove the root user account.
- C. Create an access key for the AWS account root user.
- D. Create an access key for each privileged user.

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `A`
**社区投票：** A 100%

### Q447.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q447.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Require multi-factor authentication (MFA) for privileged users. | MFA：多因素认证，增强账号登录安全。 | 题库记录为正确选项 |
| B | Remove the root user account. | Root User 拥有账号最高级权限，应强保护并避免日常使用。 | 题库记录为非正确选项 |
| C | Create an access key for the AWS account root user. | Root User 拥有账号最高级权限，应强保护并避免日常使用。 | 题库记录为非正确选项 |
| D | Create an access key for each privileged user. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q447.3-为什么题库会这样选

题库记录的正确选项定位为：MFA：多因素认证，增强账号登录安全。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q448-IAM-Role-Policy-MFA题

**题目：** Which of the following are ways to improve security on AWS? (Choose two.)

**选项：**

- A. Using AWS Artifact
- B. Granting the broadest permissions to all IAM roles
- C. Running application code with AWS Cloud
- D. Enabling multi-factor authentication (MFA) with Amazon Cognito
- E. Using AWS Trusted Advisor security checks

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `DE`
**社区投票：** DE 100%

### Q448.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q448.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Using AWS Artifact | AWS Artifact：按需访问 AWS 合规报告和部分协议的门户。 | 题库记录为非正确选项 |
| B | Granting the broadest permissions to all IAM roles | IAM Role：可被用户、AWS 服务或联合身份临时承担的权限身份。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| C | Running application code with AWS Cloud | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Enabling multi-factor authentication (MFA) with Amazon Cognito | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。；MFA：多因素认证，增强账号登录安全。 | 题库记录为正确选项 |
| E | Using AWS Trusted Advisor security checks | AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。 | 题库记录为正确选项 |

### Q448.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。；MFA：多因素认证，增强账号登录安全。；AWS Trusted Advisor：根据 AWS 最佳实践提供成本、安全、性能、可靠性等检查建议。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q474-IAM-Role-Policy-MFA题

**题目：** A company needs to manage multiple logins across AWS accounts within the same organization in AWS Organizations. Which AWS service should the company use to meet this requirement?

**选项：**

- A. Amazon VPC
- B. Amazon GuardDuty
- C. Amazon Cognito
- D. AWS IAM Identity Center

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `D`
**需求/考点标签：** Governance
**社区投票：** D 100%

### Q474.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**Governance**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q474.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon VPC | Amazon VPC：AWS 中用户定义的逻辑隔离虚拟网络。 | 题库记录为非正确选项 |
| B | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| C | Amazon Cognito | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。 | 题库记录为非正确选项 |
| D | AWS IAM Identity Center | AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |

### Q474.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q477-IAM-Role-Policy-MFA题

**题目：** A company uses a third-party identity provider (IdP). The company wants to provide its employees with access to AWS accounts and services without requiring another set of login credentials. Which AWS service will meet this requirement?

**选项：**

- A. AWS Directory Service
- B. Amazon Cognito
- C. AWS IAM Identity Center
- D. AWS Resource Access Manager (AWS RAM)

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `C`
**社区投票：** C 76%, B 18%, A 6%

### Q477.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q477.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Directory Service | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Amazon Cognito | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。 | 题库记录为非正确选项 |
| C | AWS IAM Identity Center | AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| D | AWS Resource Access Manager (AWS RAM) | AWS RAM：在账号/组织之间共享支持的 AWS 资源。 | 题库记录为非正确选项 |

### Q477.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q482-IAM-Role-Policy-MFA题

**题目：** Which of the following are AWS best practice recommendations for the use of AWS Identity and Access Management (IAM)? (Choose two.)

**选项：**

- A. Use the AWS account root user for daily access.
- B. Use access keys and secret access keys on Amazon EC2.
- C. Rotate credentials on a regular basis.
- D. Create a shared set of access keys for system administrators.
- E. Configure multi-factor authentication (MFA).

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `CE`
**社区投票：** CE 100%

### Q482.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q482.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Use the AWS account root user for daily access. | Root User 拥有账号最高级权限，应强保护并避免日常使用。 | 题库记录为非正确选项 |
| B | Use access keys and secret access keys on Amazon EC2. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| C | Rotate credentials on a regular basis. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Create a shared set of access keys for system administrators. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| E | Configure multi-factor authentication (MFA). | MFA：多因素认证，增强账号登录安全。 | 题库记录为正确选项 |

### Q482.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；MFA：多因素认证，增强账号登录安全。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q509-IAM-Role-Policy-MFA题

**题目：** Which AWS service supports user sign-up functionality and authentication to mobile and web applications?

**选项：**

- A. Amazon Cognito
- B. AWS Config
- C. Amazon GuardDuty
- D. AWS Systems Manager

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `A`
**社区投票：** A 100%

### Q509.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q509.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Cognito | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。 | 题库记录为正确选项 |
| B | AWS Config | AWS Config：记录资源配置与变化，并可按规则检查配置合规性。 | 题库记录为非正确选项 |
| C | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| D | AWS Systems Manager | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为非正确选项 |

### Q509.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q534-IAM-Role-Policy-MFA题

**题目：** A user has been granted permission to change their own IAM user password. Which AWS services can the user use to change the password? (Choose two.)

**选项：**

- A. AWS Command Line Interface (AWS CLI)
- B. AWS Key Management Sen/ice (AWS KMS)
- C. AWS Management Console
- D. AWS Resource Access Manager (AWS RAM)
- E. AWS Secrets Manager

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `AC`
**社区投票：** AC 100%

### Q534.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q534.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Command Line Interface (AWS CLI) | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | AWS Key Management Sen/ice (AWS KMS) | AWS KMS：集中创建、控制和使用加密密钥。 | 题库记录为非正确选项 |
| C | AWS Management Console | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为正确选项 |
| D | AWS Resource Access Manager (AWS RAM) | AWS RAM：在账号/组织之间共享支持的 AWS 资源。 | 题库记录为非正确选项 |
| E | AWS Secrets Manager | AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。 | 题库记录为非正确选项 |

### Q534.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q539-IAM-Role-Policy-MFA题

**题目：** Which guidelines are best practices for using AWS Identity and Access Management (IAM)? (Choose two.)

**选项：**

- A. Share access keys.
- B. Create individual IAM users.
- C. Use inline policies instead of customer managed policies.
- D. Grant maximum privileges to IAM users.
- E. Use groups to assign permissions to IAM users.

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `BE`
**社区投票：** BE 100%

### Q539.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q539.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Share access keys. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Create individual IAM users. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| C | Use inline policies instead of customer managed policies. | 该选项描述 Shared Responsibility 中客户侧的管理/安全责任。 | 题库记录为非正确选项 |
| D | Grant maximum privileges to IAM users. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| E | Use groups to assign permissions to IAM users. | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |

### Q539.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q571-IAM-Role-Policy-MFA题

**题目：** A company wants to centrally manage its employee's access to multiple AWS accounts. Which AWS service or feature should the company use to meet this requirement?

**选项：**

- A. AWS Identity and Access Management Access Analyzer
- B. AWS Secrets Manager
- C. AWS IAM Identity Center
- D. AWS Security Token Service (AWS STS)

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `C`
**社区投票：** C 100%

### Q571.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q571.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Identity and Access Management Access Analyzer | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | AWS Secrets Manager | AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。 | 题库记录为非正确选项 |
| C | AWS IAM Identity Center | AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| D | AWS Security Token Service (AWS STS) | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q571.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q582-IAM-Role-Policy-MFA题

**题目：** Which of the following actions are controlled with AWS Identity and Access Management (IAM)? (Choose two.)

**选项：**

- A. Control access to AWS service APIs and to other specific resources.
- B. Provide intelligent threat detection and continuous monitoring.
- C. Protect the AWS environment using multi-factor authentication (MFA).
- D. Grant users access to AWS data centers.
- E. Provide firewall protection for applications from common web attacks.

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `AC`
**社区投票：** AC 100%

### Q582.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q582.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Control access to AWS service APIs and to other specific resources. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Provide intelligent threat detection and continuous monitoring. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Protect the AWS environment using multi-factor authentication (MFA). | MFA：多因素认证，增强账号登录安全。 | 题库记录为正确选项 |
| D | Grant users access to AWS data centers. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| E | Provide firewall protection for applications from common web attacks. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q582.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；MFA：多因素认证，增强账号登录安全。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q584-IAM-Role-Policy-MFA题

**题目：** A company is using AWS Identity and Access Management (IAM). Who can manage the access keys of the AWS account root user?

**选项：**

- A. IAM users in the same account that have been granted permission
- B. IAM roles in any account that have been granted permission
- C. IAM users and roles that have been granted permission
- D. The AWS account owner

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `D`
**社区投票：** D 100%

### Q584.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q584.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | IAM users in the same account that have been granted permission | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| B | IAM roles in any account that have been granted permission | IAM Role：可被用户、AWS 服务或联合身份临时承担的权限身份。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| C | IAM users and roles that have been granted permission | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| D | The AWS account owner | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q584.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q595-IAM-Role-Policy-MFA题

**题目：** A company wants to manage access and permissions for its third-party software as a service (SaaS) applications. The company wants to use a portal where end users can access assigned AWS accounts and AWS Cloud applications. Which AWS service should the company use to meet these requirements?

**选项：**

- A. Amazon Cognito
- B. AWS IAM Identity Center (AWS Single Sign-On)
- C. AWS Identity and Access Management (IAM)
- D. AWS Directory Service for Microsoft Active Directory

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q595.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q595.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Cognito | Amazon Cognito：面向 Web/Mobile 应用终端用户的身份注册、登录与联合身份能力。 | 题库记录为非正确选项 |
| B | AWS IAM Identity Center (AWS Single Sign-On) | AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| C | AWS Identity and Access Management (IAM) | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| D | AWS Directory Service for Microsoft Active Directory | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q595.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM Identity Center：集中管理多 AWS Account 和业务应用的员工访问。；AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q620-IAM-Role-Policy-MFA题

**题目：** Which AWS service is used to temporarily provide federated security credentials to access AWS resources?

**选项：**

- A. Amazon GuardDuty
- B. AWS Simple Token Service (AWS STS)
- C. AWS Secrets Manager
- D. AWS Certificate Manager

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q620.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q620.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |
| B | AWS Simple Token Service (AWS STS) | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | AWS Secrets Manager | AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。 | 题库记录为非正确选项 |
| D | AWS Certificate Manager | AWS Certificate Manager：供应和管理 TLS/SSL 证书。 | 题库记录为非正确选项 |

### Q620.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q650-IAM-Role-Policy-MFA题

**题目：** Which AWS service is always available free of charge to users?

**选项：**

- A. Amazon Athena
- B. AWS Identity and Access Management (IAM)
- C. AWS Secrets Manager
- D. Amazon ElastiCache

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `B`
**社区投票：** B 100%

### Q650.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q650.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Athena | Amazon Athena：Serverless 交互式 SQL 查询服务，典型为直接查询 S3 数据。 | 题库记录为非正确选项 |
| B | AWS Identity and Access Management (IAM) | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| C | AWS Secrets Manager | AWS Secrets Manager：安全保存、检索和轮换数据库密码/API Key 等 Secret。 | 题库记录为非正确选项 |
| D | Amazon ElastiCache | Amazon ElastiCache：托管内存缓存，用于降低数据库压力并提高热点数据访问速度。 | 题库记录为非正确选项 |

### Q650.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q656-IAM-Role-Policy-MFA题

**题目：** In which situations should a company create an IAM user instead of an IAM role?

**选项：**

- A. When an application that runs on Amazon EC2 instances requires access to other AWS services
- B. When the company creates AWS access credentials for individuals
- C. When the company creates an application that runs on a mobile phone that makes requests to AWS
- D. When the company needs to add users to IAM groups
- E. When users are authenticated in the corporate network and want to be able to use AWS without having to sign in a

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `B`
**社区投票：** B 50%, D 50%

### Q656.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q656.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | When an application that runs on Amazon EC2 instances requires access to other AWS services | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| B | When the company creates AWS access credentials for individuals | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | When the company creates an application that runs on a mobile phone that makes requests to AWS | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | When the company needs to add users to IAM groups | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为非正确选项 |
| E | When users are authenticated in the corporate network and want to be able to use AWS without having to sign in a | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q656.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q656.4-⚠-争议/版本提示

- 社区投票分散，最高项仅 50%
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q716-IAM-Role-Policy-MFA题

**题目：** Which AWS service can manage permissions for AWS resources by using policies?

**选项：**

- A. Amazon Inspector
- B. Amazon Detective
- C. AWS Identity and Access Management (IAM)
- D. Amazon GuardDuty

**主分类：** C4-14 IAM-Role-Policy-MFA题
**题库记录答案：** `C`

### Q716.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q716.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Amazon Inspector | Amazon Inspector：持续漏洞管理与工作负载漏洞扫描。 | 题库记录为非正确选项 |
| B | Amazon Detective | Amazon Detective：基于安全数据帮助调查潜在安全事件和根因。 | 题库记录为非正确选项 |
| C | AWS Identity and Access Management (IAM) | AWS IAM：AWS 身份、认证授权与权限策略核心服务。 | 题库记录为正确选项 |
| D | Amazon GuardDuty | Amazon GuardDuty：基于多种日志与威胁情报进行持续威胁检测。 | 题库记录为非正确选项 |

### Q716.3-为什么题库会这样选

题库记录的正确选项定位为：AWS IAM：AWS 身份、认证授权与权限策略核心服务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---
