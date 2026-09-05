# C3-09-IAM、加密与完整安全体系

> 资料口径：本模块以用户提供的 719 道 CLF-C02 题库与前序 C1/C2 项目资料为基础。题库的 `correct_answer`、社区投票与评论用于发现考点和争议，不自动等于当前 AWS 官方结论；本模块没有在生成过程中擅自用外部常识覆盖题库内容。凡现有项目已经明确标记为 `[UPDATED]`、`[LEGACY]`、`[CURRENT-OUT-OF-SCOPE]` 的内容，会继续保留这些状态提示。正式考试前，涉及当前产品状态和 Support 计划等时效信息仍应再对照 AWS 官方页面。

## 1-本章目标

把身份、网络、加密、预防、检测、审计放在同一套 Defense in Depth 中。这一层已经不是“服务是什么”的 C2，而是要回答：**为什么把这些服务这样组合，以及需求变化时架构为什么也要变化。**

## 2-先看完整业务链路

```text
Identity
 Users / Workloads / Federation
          │
          ▼
          IAM
     Policy / Role / MFA
          │
          ▼
     AWS Resources
          │
   ┌──────┼──────────────┐
   ▼      ▼              ▼
 KMS   Secrets Manager   ACM
   │
Data Encryption

Detect/Protect：WAF/Shield → GuardDuty/Inspector/Macie → Security Hub/Detective
Audit：CloudTrail + Config
```
读这张图时建议沿四条线同时看：

1. **Request Path**：用户请求怎么进来、经过哪里、在哪里返回。

2. **Data Path**：数据在哪里读写、缓存、复制、分析。

3. **Failure Path**：某个节点失败后，流量和数据怎么继续。

4. **Control Path**：IAM、监控、审计、IaC、成本怎样横向控制整条链路。

## 3-服务在这条链路中的职责

| 层/服务 | 解决的问题 | 为什么放在这里 |
|---|---|---|
| IAM/Role/Policy | 身份与授权 | 先回答谁可以做什么 |
| MFA/Identity Center | 账号访问保护/员工集中登录 | 降低长期凭证和账号被盗风险 |
| KMS | 加密密钥管理 | 数据加密控制面 |
| Secrets Manager | 密码/API Secret | Secret 不是加密 Key 本身 |
| WAF/Shield | 入口防护 | Web 攻击与 DDoS |
| GuardDuty/Inspector/Macie | Threat/Vulnerability/Sensitive Data | 三个服务关注对象不同 |
| Security Hub | 聚合安全 Finding | 集中安全态势 |
| CloudTrail/Config | 审计与配置追踪 | Traceability / Compliance |

## 4-如果从最简单架构逐步演进

### 4.1-第一阶段：先让业务跑起来

最初实现通常会把组件尽量减少，例如单个应用节点、一个数据库、一个对象存储。这样开发快，但很快会暴露容量、单点、权限和运维问题。

### 4.2-第二阶段：把单点和性能瓶颈拆开

开始引入多实例、缓存、托管数据库、独立存储、异步组件等。此时最重要的变化不是“服务变多”，而是**职责被拆开**：计算不再承担持久化，数据库不再承担静态文件，核心事务不再等待外围任务。

### 4.3-第三阶段：让系统可以长期运营

再加入 Multi-AZ、监控告警、审计、加密、自动化部署、预算与治理。架构从“能运行”变成“能在故障、流量高峰、人员变化和合规要求下持续运行”。

### 4.4-第四阶段：只有业务真的需要时才增加更高复杂度

Multi-Region、复杂事件驱动、跨账号治理、数据湖、AI 等都不是“默认越多越好”。它们会带来额外成本、数据一致性和运维复杂度，应由明确业务约束驱动。

## 5-设计时真正要做的判断

### 5.1-Authentication-与-Authorization-分开

先验证你是谁，再判断你能做什么。

### 5.2-网络允许与-IAM-允许都需要吗？

很多访问同时受到网络路径和 IAM 权限影响；SG 开放不等于 API 有权限。

### 5.3-KMS-与-Secrets-Manager-怎么区分？

KMS 管加密 Key；Secrets Manager 管密码/API Key 等 Secret，并可使用 KMS 加密。

### 5.4-GuardDuty/Inspector/Macie-怎么选？

威胁检测 / 漏洞管理 / S3 敏感数据发现。

## 6-同一架构还必须从四个横向视角检查

### 6.1-Security-/-Identity

- 谁在访问？Human、Application、AWS Service 还是外部系统？
- 能否使用 IAM Role / Federation / 临时凭证，避免长期硬编码 Access Key？
- 数据是否需要 KMS 加密、Secrets Manager 管理 Secret、TLS 保护传输？
- 网络开放是否遵循最小暴露原则？

### 6.2-Observability-/-Operations

- CloudWatch 是否能看到关键 Metrics、Logs 和 Alarm？
- CloudTrail 是否能回答“谁修改了 AWS 资源”？
- AWS Config 是否能看到关键配置变化/合规状态？
- 是否有清晰的 Runbook、重试、恢复和 IaC 方式？

### 6.3-Reliability-/-Recovery

- 单实例、单 AZ、单数据库、单 Region 中哪些仍然是 SPOF？
- 数据恢复依赖 Backup、Replication 还是重新计算？
- RTO/RPO 是否由业务明确，而不是架构师凭感觉决定？

### 6.4-Cost-/-Efficiency

- 哪些资源必须 24x7，哪些可以随需求扩缩？
- 哪些数据是热数据、冷数据、归档数据？
- 是否存在因为“为了保险”长期保留的过度配置？
- 成本是否能够通过 Account/Tag/Cost Explorer 归属到业务？

## 7-故障、风险与替代路径

- 硬编码 Access Key：使用 Role/临时凭证。
- 过宽 IAM 权限：Least Privilege。
- Secret 长期不轮换：Secrets Manager/流程治理。
- 只有预防没有检测：CloudTrail/GuardDuty/Security Hub 等形成检测与调查能力。
- 安全工具 Finding 没有响应流程：Security Hub 不是自动替你修完所有问题。

### 7.1-一个通用故障推理模板

```text
组件 X 失败
   ↓
它是有状态还是无状态？
   ↓
是否存在冗余实例 / AZ / Region？
   ↓
流量如何发现故障并绕开？
   ↓
数据从哪里恢复？
   ↓
CloudWatch / CloudTrail / Config 能否解释发生了什么？
   ↓
恢复后如何避免再次发生？
```
## 8-与-C2-知识的连接

- C2-08：IAM
- C2-09：KMS/Secrets/Threat Detection/WAF/Shield
- C2-10：CloudTrail/Config
- C2-16：Security Pillar/Shared Responsibility

## 9-与后续-C4-题库解析的关系

C3 不以背题库答案为目标。进入 C4 后，同一个场景会被拆成很多单点选择题。例如架构图里只有一条“用户访问链路”，考试可能分别问 DNS、CDN、WAF、Load Balancer、Auto Scaling、数据库、Cache、监控。正确复习方式是先能在 C3 中解释完整链路，再去 C4 看题目把哪个局部切出来考。

## 10-本章检查清单

- [ ] 我能不看图，按顺序说出请求/数据经过哪些层。
- [ ] 我能解释每个服务为什么存在，而不只是说服务定义。
- [ ] 我能指出至少一个 SPOF，并说出如何缓解。
- [ ] 我能区分性能优化与高可用优化。
- [ ] 我能区分网络访问控制与 IAM 权限。
- [ ] 我能指出哪些数据是 Source of Truth，哪些只是 Cache/派生数据。
- [ ] 我能说明出现故障后去 CloudWatch / CloudTrail / Config 分别查什么。
- [ ] 我能说出一个成本优化点，同时说明它不能破坏什么业务约束。
- [ ] 我能说明如果业务规模缩小，哪些组件可以被简化。
- [ ] 我能说明如果 RTO/RPO 变严格，架构为什么会更复杂/更贵。

## 11-本章最后要形成的架构直觉

> 不要问“这个架构用了哪些 AWS 服务”，而要问：每一层正在解决什么业务约束、故障模式和运维责任；如果约束变化，服务选择是否也应该变化。
