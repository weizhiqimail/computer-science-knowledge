# C2-10-监控、运维、治理与-IaC

> 资料口径说明：本章延续当前 AWS CLF-C02 学习项目既有规则，主要依据用户提供的 719 题题库、`chatGPT会话1.md`、`chatGPT会话2.md`、`cmd1.md` 与前序 C2 章节的结构整理。题库中的答案与评论用于识别高频考点、业务场景和易混项，不自动视为当前 AWS 官方结论。涉及会随时间变化的产品状态、考试范围与 Support 体系时，本章只沿用项目资料中已经明确记录的状态；正式考试前仍应再对照 AWS 当前官方页面。


## 1-本章目标

一个系统部署完成后，真正的长期问题才开始：

```text
CPU 高不高？
错误率多少？
谁改了 Security Group？
资源配置是否合规？
上百台服务器怎么打补丁？
基础设施能不能用代码重复创建？
多 Account 怎么统一治理？
资源规格是不是买大了？
```

题库粗略曝光中 Trusted Advisor 约 41、CloudWatch 29、CloudTrail 27、Config 25、CloudFormation 25、Organizations 24、Systems Manager 22，是高频混淆组。

## 2-★★★★★-Amazon-CloudWatch

**正式名称：** Amazon CloudWatch
**中文：** AWS 监控与可观测性服务

### 2.1-为什么需要它

应用运行后需要持续获取指标、日志、告警与运行状态，否则出了故障只能靠用户投诉。

### 2.2-它是什么

CloudWatch 负责收集和观察 Metrics、Logs，并可建立 Alarm、Dashboard 等。

### 2.3-GlobalShop-场景

GlobalShop 监控 EC2 CPU、ALB 请求量、Lambda Errors、应用日志，并在错误率过高时 Alarm。

### 2.4-常见组合

CloudWatch Metrics/Logs/Alarm + Auto Scaling；CloudWatch + SNS 告警。

### 2.5-容易混淆

CloudWatch ≠ CloudTrail。CloudWatch 关注系统运行；CloudTrail 关注 AWS API 活动审计。

### 2.6-题库通常怎么考

CPU utilization、metrics、logs、alarm、dashboard、runtime monitoring → CloudWatch。



## 3-★★★★★-AWS-CloudTrail

**正式名称：** AWS CloudTrail
**中文：** AWS API 活动审计日志服务

### 3.1-为什么需要它

企业需要知道谁在什么时间调用了什么 AWS API，例如谁删除了 S3 Bucket、谁修改了 Security Group。

### 3.2-它是什么

CloudTrail 记录 AWS Account 中的 API / 控制面活动等事件，用于审计、治理和安全调查。

### 3.3-GlobalShop-场景

GlobalShop 发现 Security Group 被开放到 0.0.0.0/0，通过 CloudTrail 查询是谁执行了修改 API。

### 3.4-常见组合

CloudTrail logs → S3/CloudWatch Logs；CloudTrail + Security investigation。

### 3.5-容易混淆

CloudTrail 不是 CPU/内存性能监控；那是 CloudWatch。

### 3.6-题库通常怎么考

who did what、API activity、audit trail、user activity → CloudTrail。



## 4-★★★★★-AWS-Config

**正式名称：** AWS Config
**中文：** AWS 资源配置记录与合规评估

### 4.1-为什么需要它

即使知道谁做了 API，也还需要知道资源当前配置是什么、过去如何变化、是否符合企业规则。

### 4.2-它是什么

AWS Config 记录受支持资源的配置状态和变化，并可通过 Config Rules 评估配置是否合规。

### 4.3-GlobalShop-场景

GlobalShop 要求所有 S3 Bucket 禁止公开访问、所有安全组不得开放 SSH 给全网，Config 可持续评估。

### 4.4-常见组合

Config + Rules + remediation；Config + Organizations 多账号治理。

### 4.5-容易混淆

Config ≠ CloudTrail：Config 看“资源配置状态/变化”，CloudTrail 看“API 谁调用了”。

### 4.6-题库通常怎么考

configuration history、compliance rules、resource configuration → Config。



## 5-CloudWatch-/-CloudTrail-/-Config：考试最高频三分法

```text
CloudWatch
→ 现在运行得怎么样？

CloudTrail
→ 谁对 AWS 做了什么？

Config
→ 资源被配置成什么样，是否合规？
```

例如：

```text
EC2 CPU 95%
→ CloudWatch

谁改了 Security Group
→ CloudTrail

Security Group 是否允许 0.0.0.0/0:22
→ Config
```

## 6-★★★★-AWS-Systems-Manager

**正式名称：** AWS Systems Manager
**中文：** AWS 集中运维管理服务

### 6.1-为什么需要它

规模化环境中，管理员不能每天逐台 SSH 到数百台 EC2/本地服务器执行命令、补丁或收集清单。

### 6.2-它是什么

Systems Manager 提供一组集中管理节点与运维任务的能力，例如 Session Manager、Run Command、Patch Manager、Parameter Store、Inventory 等。

### 6.3-GlobalShop-场景

GlobalShop 运维团队统一给应用服务器打补丁、执行运维命令，不需要暴露 SSH 到 Internet。

### 6.4-常见组合

Systems Manager + EC2 IAM Role/Agent；Systems Manager + Hybrid nodes。

### 6.5-容易混淆

Systems Manager 是运维平台，不是 CloudWatch 的监控替代，也不是 CloudFormation 的 IaC 替代。

### 6.6-题库通常怎么考

patch fleet、run commands at scale、session without SSH、operations management → Systems Manager。



## 7-★★★★★-AWS-CloudFormation

**正式名称：** AWS CloudFormation
**中文：** AWS 基础设施即代码 IaC 服务

### 7.1-为什么需要它

手工在 Console 创建 VPC、Subnet、EC2、RDS 很难重复、审计和一致化，多环境更容易配置漂移。

### 7.2-它是什么

CloudFormation 通过 Template 定义 AWS 资源和依赖，再创建/更新 Stack，实现 Infrastructure as Code。

### 7.3-GlobalShop-场景

GlobalShop 用同一套 Template 为 dev/staging/prod 创建标准 VPC、ALB、Auto Scaling 等基础设施。

### 7.4-常见组合

CloudFormation Stack + IAM；CloudFormation + CI/CD。

### 7.5-容易混淆

CloudFormation ≠ Systems Manager：前者定义/部署基础设施，后者做持续运维。

### 7.6-题库通常怎么考

template、stack、repeatable infrastructure、IaC → CloudFormation。



## 8-Infrastructure-as-Code（IaC）

IaC = Infrastructure as Code = 基础设施即代码。

核心价值：

- repeatable：可重复；
- version controlled：可版本管理；
- auditable：可审查；
- automated：可自动化；
- reduce configuration drift：减少手工漂移。

## 9-★★★★★-AWS-Trusted-Advisor

Trusted Advisor 基于 AWS 最佳实践对账号环境进行检查并给出建议，常见类别包括成本、性能、安全、容错、Service Quotas 等方向。

考试最容易与下面服务混淆：

```text
Trusted Advisor
→ Best-practice recommendations

Compute Optimizer
→ Rightsizing / resource configuration recommendations

Config
→ Compliance against resource configuration rules
```

## 10-★★★★-AWS-Compute-Optimizer

Compute Optimizer 分析资源配置与历史利用情况，为受支持的计算资源提供 rightsizing 建议。

例如：

```text
EC2 m5.4xlarge
长期 CPU 5%
        ↓
Compute Optimizer
        ↓
建议更合适规格
```

它不是预算工具；预算阈值属于 AWS Budgets。

## 11-★★★★★-AWS-Organizations

Organizations 管理多 AWS Account，提供组织结构、OU、SCP、Consolidated Billing 等企业级能力。

```text
Organization
├── Security OU
├── Production OU
├── Development OU
└── Sandbox OU
```

Organizations 既是治理服务，也会在 C2-15 的统一计费中再次出现。

## 12-★★★-AWS-Control-Tower

当企业需要快速建立遵循最佳实践的多账号 Landing Zone，并持续应用 Guardrail/Control 思想时，可以使用 Control Tower。

粗略区分：

```text
Organizations
→ 多 Account 基础组织能力

Control Tower
→ 在 Organizations 等能力之上构建更标准化的多账号治理 Landing Zone
```

## 13-★★★-AWS-Service-Catalog

Service Catalog 允许企业管理员发布“批准过的 IT 产品/模板”，让团队在受控范围内自助部署。

例如只允许开发者创建经过安全团队批准的标准三层 Web Stack。

## 14-★★★-AWS-Resource-Access-Manager（RAM）

RAM = Resource Access Manager。

用于在 Account 之间共享某些 AWS 资源，常与 Organizations、多账号架构配合。

## 15-AWS-Health-/-Service-Health

CLF 层级需要区分：

- AWS Service Health：AWS 服务整体事件；
- AWS Health Dashboard 的账号相关视角：与你账号资源相关的事件和建议。

不要把它们与 CloudWatch 的业务指标监控混淆。

## 16-GlobalShop-运维治理图

```text
Runtime
EC2 / Lambda / ALB
      │
      ├── Metrics / Logs ─────→ CloudWatch
      ├── API Activity ───────→ CloudTrail
      └── Configuration ──────→ Config

Fleet Operations
      └───────────────────────→ Systems Manager

Infrastructure Definition
      └───────────────────────→ CloudFormation

Best Practice
      ├───────────────────────→ Trusted Advisor
      └── Rightsizing ────────→ Compute Optimizer

Multi Account
Organizations → Control Tower / SCP / RAM / Service Catalog
```

## 17-本章最后要形成的判断方式

不要把本章记成一串 AWS 产品名，而要形成下面的思考路径：

```text
业务需求是什么？
        ↓
它属于哪一层问题？
        ↓
需要什么技术能力？
        ↓
哪些 AWS 服务提供这类能力？
        ↓
为什么某一个更贴合场景？
        ↓
其他相似服务为什么不合适？
```

真正稳定的考试能力不是“看到关键词就背答案”，而是能够从业务要求推导到技术能力，再从技术能力推导到 AWS 服务。

---

## 18-与后续章节的关系

C2 负责建立技术体系本身；完整业务架构组合会在 C3 中继续展开；719 道题的逐题选项解析放在 C4；频率排名与强化学习放在 C5；考前压缩复习放在 C6。
