# C6-01-AWS-完整架构总图

> 资料口径：本模块以用户提供的 719 道 CLF-C02 题库与前序 C1/C2 项目资料为基础。题库的 `correct_answer`、社区投票与评论用于发现考点和争议，不自动等于当前 AWS 官方结论；本模块没有在生成过程中擅自用外部常识覆盖题库内容。凡现有项目已经明确标记为 `[UPDATED]`、`[LEGACY]`、`[CURRENT-OUT-OF-SCOPE]` 的内容，会继续保留这些状态提示。正式考试前，涉及当前产品状态和 Support 计划等时效信息仍应再对照 AWS 官方页面。

```text
Global Users
   │
Route 53 → CloudFront → WAF/Shield → ALB/API Gateway
                                  │
                   ┌──────────────┼──────────────┐
                   ▼              ▼              ▼
                  EC2          ECS/EKS         Lambda
                   │              │              │
                   └──────────────┼──────────────┘
                                  ▼
                ElastiCache / RDS-Aurora / DynamoDB
                                  │
             ┌────────────────────┼───────────────────┐
             ▼                    ▼                   ▼
             S3               SQS/SNS/EventBridge   Analytics
             │                    │                   │
          Lifecycle             Workers          Kinesis→S3→Glue
                                                     │
                                              Athena/Redshift
                                                     │
                                                QuickSight/AI

Network: VPC/Subnet/Route/IGW/NAT/Endpoint/DirectConnect/VPN/TGW
Security: IAM/KMS/Secrets/WAF/GuardDuty/Inspector/Macie
Operations: CloudWatch/CloudTrail/Config/SystemsManager/CloudFormation
Governance/Cost: Organizations/ControlTower/CostExplorer/Budgets
```
## 1-读图方法

从上到下是用户请求与数据链路；横向能力不是“旁枝”，而是每一层都依赖的身份、安全、监控、治理与成本控制。
