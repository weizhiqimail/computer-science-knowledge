# C3-16-AWS-高频服务选择决策树

> 资料口径：本模块以用户提供的 719 道 CLF-C02 题库与前序 C1/C2 项目资料为基础。题库的 `correct_answer`、社区投票与评论用于发现考点和争议，不自动等于当前 AWS 官方结论；本模块没有在生成过程中擅自用外部常识覆盖题库内容。凡现有项目已经明确标记为 `[UPDATED]`、`[LEGACY]`、`[CURRENT-OUT-OF-SCOPE]` 的内容，会继续保留这些状态提示。正式考试前，涉及当前产品状态和 Support 计划等时效信息仍应再对照 AWS 官方页面。

## 1-使用方法

先识别题目真正的“需求动词”，再选择服务。不要从服务名反推题意。

## 2-核心决策树

| 需求/关键词 | 优先考虑 | 最常见混淆 |
|---|---|---|
| 需要虚拟服务器控制 OS | Amazon EC2 | 不是 Lambda/Fargate |
| 事件驱动短时函数 | AWS Lambda | 不管理服务器 |
| 容器编排且 AWS 原生 | Amazon ECS | EKS 是 Kubernetes |
| 需要 Kubernetes | Amazon EKS | Fargate 是计算层，不是编排器 |
| 容器但不想管理底层节点 | AWS Fargate | 配合 ECS/EKS |
| 海量对象/图片/备份 | Amazon S3 | 不是 EBS/EFS |
| EC2 持久块盘 | Amazon EBS | AZ 级 Volume |
| 共享 NFS 文件系统 | Amazon EFS | Linux/NFS 思维 |
| Windows SMB 文件系统 | Amazon FSx for Windows | 不是 EFS |
| 关系数据库 | Amazon RDS / Aurora | 事务/关系/SQL |
| 高规模 Key-Value NoSQL | DynamoDB | Access Pattern 驱动 |
| 内存缓存 | ElastiCache | 不是主数据库替代 |
| 数据仓库 | Redshift | 不是 OLTP |
| 私有逻辑网络 | VPC | 不是 VPN |
| Private Subnet 出互联网 | NAT Gateway | IGW 是 VPC 公网连接 |
| 私网访问 S3 等 AWS 服务 | VPC Endpoint | 避免公网路径 |
| 两个 VPC 点到点 | VPC Peering | 多 VPC Hub → TGW |
| 多 VPC + On-Prem Hub | Transit Gateway | 中心路由 |
| 本地专线到 AWS | Direct Connect | VPN 是 Internet 加密隧道 |
| DNS | Route 53 | CDN 是 CloudFront |
| 全球 CDN 缓存 | CloudFront | Global Accelerator 不以缓存为核心 |
| HTTP Web 攻击 | WAF | DDoS → Shield |
| DDoS | Shield | WAF 过滤 Web 请求 |
| 威胁检测 | GuardDuty | 漏洞 → Inspector；敏感数据 → Macie |
| 漏洞扫描 | Inspector | 不是 CloudTrail |
| S3 敏感数据 | Macie | 不是 GuardDuty |
| 加密密钥 | KMS | Secret → Secrets Manager |
| 密码/API Key | Secrets Manager | 加密 key → KMS |
| 运行指标/日志/告警 | CloudWatch | API 审计 → CloudTrail |
| 谁做了 AWS API 操作 | CloudTrail | 配置合规 → Config |
| 资源配置变化/合规 | Config | 不是 CloudWatch |
| IaC | CloudFormation | 不是 Systems Manager |
| 异步队列 | SQS | 扇出 → SNS |
| 一对多通知 | SNS | 事件总线 → EventBridge |
| 事件规则路由 | EventBridge | Queue → SQS |
| 工作流状态机 | Step Functions | 不是单纯 Queue |
| S3 上 SQL | Athena | ETL → Glue |
| ETL/Catalog | Glue | Warehouse → Redshift |
| 实时流 | Kinesis | 不是 SQS 的普通任务队列 |
| 服务器迁移 | Application Migration Service | 数据库 → DMS |
| 数据库迁移 | DMS | 文件 → DataSync |
| 文件在线迁移 | DataSync | 离线大数据 → Snow |
| 离线大规模数据 | Snow Family | 不是 Direct Connect |
| 部署前估算 | Pricing Calculator | 事后分析 → Cost Explorer |
| 事后成本分析 | Cost Explorer | 阈值 → Budgets |
| 预算告警 | Budgets | 详细明细 → CUR |
| 规格优化 | Compute Optimizer | 最佳实践综合 → Trusted Advisor |
| 组织迁云准备度 | AWS CAF | 工作负载评审 → Well-Architected |
| 工作负载架构最佳实践 | Well-Architected Framework | 组织转型 → CAF |

## 3-五步推理法

```text
1. 这是 Compute / Storage / Database / Network / Security / Management / Integration / Analytics / Migration / Cost / Framework 哪一类？
2. 题目要求的是性能、可用性、安全、成本、运维简化，还是迁移？
3. 是否明确出现协议/数据模型/访问模式，例如 NFS、SMB、SQL、NoSQL、Queue、DNS？
4. 是否强调 managed / serverless / no infrastructure management？
5. 最后才在同类服务里做比较。
```

## 4-先按“对象”而不是服务名分类

### 4.1-代码在哪里运行
EC2 / ECS / EKS / Fargate / Lambda 的区别首先是运行抽象层和管理责任。

### 4.2-数据是什么形态
Object → S3；Block → EBS；File → EFS/FSx；Relational → RDS/Aurora；Key-Value/NoSQL → DynamoDB；Cache → ElastiCache。

### 4.3-流量正在去哪儿
Internet/VPC/On-Prem/AWS Service/Global User 是五种完全不同的网络问题。

### 4.4-安全问题发生在哪一层
Identity → IAM；Encryption → KMS/Secrets；Web Protection → WAF/Shield；Detection → GuardDuty/Inspector/Macie；Audit → CloudTrail/Config。

### 4.5-时间发生在什么时候
部署前估算 → Pricing Calculator；运行中监控 → CloudWatch；事后成本分析 → Cost Explorer；达到阈值 → Budgets。

## 5-Gateway-家族单独决策

```text
Internet Gateway  → VPC ↔ Internet
NAT Gateway       → Private IPv4 主动出网
VPC Endpoint      → VPC 私网访问支持的 AWS Service
Transit Gateway   → 多 VPC / On-Prem 中央 Hub
Storage Gateway   → On-Prem 存储协议 ↔ AWS Storage
API Gateway       → API 前门/管理
```

## 6-Managed-/-Serverless-不能机械背

题目出现“无需管理服务器”时，还要继续问：它运行的是函数、容器、数据库、分析查询，还是 ETL。Lambda、Fargate、DynamoDB、Athena、Glue 都可能具有较高托管/Serverless 特征，但解决的问题完全不同。

## 7-反关键词背题提醒

同一个词可能出现在多个服务中，例如 `Gateway`、`Managed`、`Serverless`。必须先看它连接什么、处理什么数据、解决哪层问题。

## 8-做完一道题后的复盘

不要只记录答案字母。至少写下：题目对象、核心约束、正确选项定位、最强干扰项为什么不对。这样题目换写法以后仍能推出答案。
