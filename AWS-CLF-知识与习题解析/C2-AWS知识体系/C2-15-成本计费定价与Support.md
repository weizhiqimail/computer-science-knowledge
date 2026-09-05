# C2-15-成本、计费、定价与-Support

> 资料口径说明：本章延续当前 AWS CLF-C02 学习项目既有规则，主要依据用户提供的 719 题题库、`chatGPT会话1.md`、`chatGPT会话2.md`、`cmd1.md` 与前序 C2 章节的结构整理。题库中的答案与评论用于识别高频考点、业务场景和易混项，不自动视为当前 AWS 官方结论。涉及会随时间变化的产品状态、考试范围与 Support 体系时，本章只沿用项目资料中已经明确记录的状态；正式考试前仍应再对照 AWS 当前官方页面。

## 1-本章目标

云计算并不是“自动便宜”，而是把成本模型变得更可测量、更弹性。企业必须回答：上线前如何估算？、上线后钱花在哪里？、预算超标怎么提醒？、详细账单怎么导出分析？、稳定计算负载如何获得折扣？、多个 Account 的账单如何统一？、出现问题能获得什么 Support？项目资料粗略分类中 Cost / Pricing / Support 约 86 题，是 CLF-C02 大模块。

## 2-Cloud-Economics：从-CAPEX-到-OPEX

传统自建机房往往需要提前购买服务器，属于明显的 Capital Expenditure（CAPEX）特征。云资源更常体现 Operating Expenditure（OPEX）、Variable Expense 与 Pay-as-you-go。但“云 = 永远更便宜”是错误前提。真正优势来自：

- 减少长期固定容量猜测；
- 弹性扩缩；
- 按使用量计费；
- 大规模经济；
- 可持续成本可视化和优化。

## 3-★★★★★-AWS-Pricing-Calculator

定位：**部署前估算**。

```text
Before deployment
→ AWS Pricing Calculator
```
GlobalShop 双十一新架构还没上线，先输入预计 EC2、RDS、S3、流量等配置估算月成本。不要与 Cost Explorer 混：Calculator 是预测/估算，Explorer 是分析实际发生过的成本。

## 4-★★★★★-AWS-Cost-Explorer

定位：**部署后分析实际成本与使用趋势**。

```text
After deployment
→ Cost Explorer
```
可按服务、账号、Tag 等维度分析历史费用和趋势，并支持部分成本优化分析能力。

## 5-★★★★★-AWS-Budgets

定位：**阈值、预算与提醒**。例如：

```text
Monthly budget = $100,000
Actual / Forecast > threshold
        ↓
Alert
```
Cost Explorer 告诉你“钱花哪儿”；Budgets 告诉你“超过目标了吗”。

## 6-★★★★-AWS-Cost-and-Usage-Report（CUR）

CUR = Cost and Usage Report。用于获得非常详细的成本和使用数据，适合进入 S3 后用 Athena/BI 等进一步分析。

```text
Billing Data
   │
   ▼
CUR → S3 → Athena / QuickSight
```
## 7-Tags-与-Cost-Allocation

企业可以通过资源 Tag 建立成本归属：

```text
Project=GlobalShop
Environment=Prod
Team=Search
CostCenter=JP-ECOM
```
然后成本管理工具按 Tag 分析部门/项目费用。

## 8-EC2-/-Compute-购买模型再统一

### 8.1-★★★★★-On-Demand

- 无长期承诺；
- 需求不确定；
- 短期、开发、测试、新应用；
- 灵活，但长期稳定使用时通常不是最低价选项。

### 8.2-★★★★★-Reserved-Instances（RI）

项目题库对 RI 曝光很高。考试核心是：稳定、可预测、长期使用，以承诺换折扣。不要把 RI 与 Capacity Reservation 混为同一概念。

### 8.3-★★★★★-Savings-Plans

通过承诺一定水平的计算消费来换取折扣，并在一定范围内提供比传统特定绑定模型更灵活的使用方式。

### 8.4-★★★★★-Spot-Instances

利用 AWS 的闲置 EC2 Capacity，价格低，但实例可能被 AWS 中断。适合：Batch、stateless、fault-tolerant、can retry；不适合把唯一关键数据库直接放在“随时可中断”的 Spot 上。

### 8.5-★★★-Dedicated-Hosts-/-Dedicated-Instances

用于物理服务器隔离、License / compliance 等特殊需求。Dedicated Host 提供对底层物理主机更明确的可见性和控制。

## 9-★★★-Capacity-Reservation

Capacity Reservation 重点是预留某 AZ 中 EC2 Capacity，本身不等同于 RI 的计费折扣概念。考试如果说：Need guaranteed EC2 capacity in specific AZ；应想到 Capacity Reservation，而不是只凭“reservation”就选 RI。

## 10-Data-Transfer-Cost-基本规律

不要死背所有价格数字，因为价格随 Region 和服务变化。CLF 更重要的是理解：

- Inbound data transfer 经常较便宜或免费，但具体服务需查定价；
- Internet outbound 往往是重要成本项；
- 跨 AZ / 跨 Region 通信可能产生额外数据传输费用；
- CloudFront 等服务可改变数据传输路径和成本结构。

题库 Snowball Edge 第 1 题也体现了“数据导入 AWS 与设备使用费用需要分开判断”的思路。

## 11-★★★★★-AWS-Organizations-与-Consolidated-Billing

多 Account 企业通过 Organizations 可实现集中组织管理和 Consolidated Billing（合并计费）。核心价值包括：

- 一个组织级账单视图；
- 账号成本集中管理；
- 某些服务的用量可在组织范围聚合以获得规模价格优势（依具体计费规则）。

## 12-Cost-Optimization-的过程

```text
Measure
→ Cost Explorer / CUR

Set target
→ Budgets

Right-size
→ Compute Optimizer / Trusted Advisor

Purchase wisely
→ Savings Plans / RI / Spot

Architect
→ Auto Scaling / Serverless / Storage Lifecycle
```
成本优化不是“选择最便宜实例”这么简单，而是业务 SLA、性能、弹性与成本之间的综合工程。

## 13-AWS-Support：项目资料中的当前状态提醒-[UPDATED]

项目交接资料明确记录：AWS Support 体系在 2025-12-02 后发生调整，旧的 Developer Support、Business Support 等旧套餐已进入不再接受新订阅/过渡阶段，并记录了新的 Support 体系名称：Basic、Business Support+、Enterprise Support、Unified Operations；同时项目资料提醒：旧题库中的 Support Plan 题必须标记为历史题 / 当前规则变化。

因此本章不把 719 题里旧 Support Plan 的所有功能矩阵当成 2026 年永久事实。

### 13.1-处理方式

```text
[QUESTION-BANK / LEGACY]
旧题可能仍写：Developer / Business / Enterprise On-Ramp / Enterprise

[UPDATED]
当前套餐结构已经变化
```
正式考试前，Support 名称、响应时间、TAM/服务能力等细节必须再以 AWS 当前官方 Support 页面和 CLF-C02 In-Scope 内容确认。

## 14-Support-题真正应该理解什么

无论套餐名称如何调整，题目长期考察的思想包括：

- 免费基础支持与付费技术支持的区别；
- 支持级别越高，通常能获得更强的生产事件响应和专家协助；
- 企业级支持强调更主动、战略、运营型协作；
- Technical Account Manager、Support API、响应时间等旧题细节可能受套餐更新影响。

不要只背 2023 年的表格。

## 15-★★★-AWS-Marketplace

Marketplace 是第三方软件、数据和服务的数字目录，可购买并部署合作伙伴产品，并把部分费用整合到 AWS Billing 中。题目说“find/buy/deploy third-party software”时考虑 Marketplace。

## 16-GlobalShop-成本管理

```text
Before launch
Pricing Calculator
      │
      ▼
Deployment
      │
      ├── Cost Explorer → analyze spend
      ├── Budgets → threshold alerts
      ├── CUR → detailed billing data
      ├── Tags → cost allocation
      └── Compute Optimizer / Trusted Advisor
                    │
                    ▼
              Rightsizing

Stable compute
→ Savings Plans / RI

Interruptible batch
→ Spot

Many accounts
→ Organizations + Consolidated Billing
```
## 17-高频对比

| 问题 | 工具/模型 |
|---|---|
| 上线前估算 | Pricing Calculator |
| 上线后分析 | Cost Explorer |
| 预算阈值提醒 | Budgets |
| 最详细成本使用数据 | CUR |
| 计算资源规格建议 | Compute Optimizer |
| 最佳实践建议 | Trusted Advisor |
| 稳定长期计算折扣 | RI / Savings Plans |
| 可中断超低成本计算 | Spot |
| 多账号统一账单 | Organizations / Consolidated Billing |

## 18-本章最后要形成的判断方式

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

## 19-与后续章节的关系

C2 负责建立技术体系本身；完整业务架构组合会在 C3 中继续展开；719 道题的逐题选项解析放在 C4；频率排名与强化学习放在 C5；考前压缩复习放在 C6。
