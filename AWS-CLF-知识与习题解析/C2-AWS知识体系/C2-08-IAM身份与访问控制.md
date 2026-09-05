# C2-08-IAM-身份与访问控制

> 资料口径说明：本章延续当前 AWS CLF-C02 学习项目既有规则，主要依据用户提供的 719 题题库、`chatGPT会话1.md`、`chatGPT会话2.md`、`cmd1.md` 与前序 C2 章节的结构整理。题库中的答案与评论用于识别高频考点、业务场景和易混项，不自动视为当前 AWS 官方结论。涉及会随时间变化的产品状态、考试范围与 Support 体系时，本章只沿用项目资料中已经明确记录的状态；正式考试前仍应再对照 AWS 当前官方页面。


## 1-本章目标

安全的第一道问题不是“有没有防火墙”，而是：

```text
你是谁？
你如何证明你是谁？
你被允许做什么？
谁给了你这个权限？
应用访问 AWS 服务时用谁的身份？
多个 AWS Account 如何统一管理访问？
```

题库粗略曝光中 IAM 约 76 题，是整个 CLF-C02 最核心的服务之一。

## 2-Authentication-与-Authorization

**Authentication** = 身份验证 / 认证：证明“你是谁”。
**Authorization** = 授权：确定“你能做什么”。

```text
Login + MFA
→ Authentication

Policy says s3:GetObject allowed
→ Authorization
```

这两个概念不能混。

## 3-★★★★★-AWS-IAM

**正式名称：** AWS Identity and Access Management
**中文：** AWS 身份与访问管理

### 3.1-为什么需要它

企业不能让所有员工和应用共享 root 密码，也不能把所有人都设置成管理员。需要统一管理 AWS 身份、权限和策略。

### 3.2-它是什么

IAM 是 AWS 的身份与访问控制核心服务。它管理 IAM User、Group、Role、Policy 等对象，并执行权限授权。

### 3.3-GlobalShop-场景

GlobalShop 的开发、运维、财务、安全团队拥有不同权限；EC2/Lambda 也通过 Role 获取访问 S3、DynamoDB 等服务的权限。

### 3.4-常见组合

IAM User/Group/Role + Policy；IAM Role + EC2/Lambda；IAM + MFA；跨账号 Role。

### 3.5-容易混淆

IAM 不等于 Cognito。IAM 主要控制 AWS 资源访问；Cognito 更偏应用终端用户身份。

### 3.6-题库通常怎么考

least privilege、user/group/role/policy、AWS resource permissions 几乎都属于 IAM。



## 4-★★★★★-Root-User

AWS Account 创建时有 Root User。

Root 权限极高，因此最佳实践是：

- 日常工作不要使用 Root；
- 为 Root 启用 MFA；
- 不要创建 Root Access Key；
- 只有必须使用 Root 的少数任务才使用它。

考试中看到“protect root account”，MFA 与避免日常使用 root 往往是核心。

## 5-IAM-User、Group、Role

### 5.1-IAM-User

表示某个长期身份，可能对应员工或技术用户。可以有控制台凭证或 Access Key。

### 5.2-IAM-Group

把多个 IAM User 组织起来并统一附加权限策略。

```text
Developers Group
├── Alice
├── Bob
└── Carol
```

### 5.3-★★★★★-IAM-Role

Role 与 User 最大直觉区别：

```text
User
→ 长期身份

Role
→ 被某个可信主体 Assume
→ 获得临时凭证
```

应用访问 AWS 服务时，优先使用 Role，而不是把长期 Access Key 写进代码。

GlobalShop：

```text
EC2 Product Service
       │
       │ Assume attached role
       ▼
 IAM Role
       │ s3:GetObject
       ▼
      S3
```

## 6-★★★★★-Policy：权限到底写在哪里？

Policy = 策略。

IAM Policy 常以 JSON 表达权限，核心概念包括：

- Effect：Allow / Deny；
- Action：允许/拒绝什么 API；
- Resource：针对什么资源；
- Condition：在什么条件下。

教学示例：

```json
{
  "Effect": "Allow",
  "Action": "s3:GetObject",
  "Resource": "arn:aws:s3:::globalshop-images/*"
}
```

CLF 不要求手写复杂 JSON，但要读懂：这是“允许读取某 S3 Object”的权限思想。

## 7-Identity-based-与-Resource-based-Policy

### 7.1-Identity-based-Policy

附加到 User / Group / Role，回答：

> 这个身份可以做什么？

### 7.2-Resource-based-Policy

附加到资源，例如 S3 Bucket Policy，回答：

> 谁可以对这个资源做什么？

## 8-Explicit-Deny-与权限评估

考试层面需要记住一个非常重要的安全原则：

> Explicit Deny（显式拒绝）优先于 Allow。

但真实 IAM 权限评估还可能涉及 SCP、Permissions Boundary、Session Policy 等多层限制，因此不要把“看到一个 Allow 就一定能访问”当成完整规则。

## 9-★★★★★-Least-Privilege

Least Privilege = 最小权限原则。

```text
需要读商品图片
→ 给 s3:GetObject

不需要删 Bucket
→ 不给 s3:DeleteBucket
```

不要为了方便直接授予 `AdministratorAccess`。

## 10-★★★★★-MFA

MFA = Multi-Factor Authentication = 多因素认证。

密码属于“你知道的东西”，MFA 再增加另一个因素，提高账号被盗后的防护能力。

Root 和高权限用户尤其应启用 MFA。

## 11-Access-Key-与临时凭证

Access Key 通常包括 Access Key ID 与 Secret Access Key，用于程序化访问。

危险做法：

```text
const accessKey = "AKIA..."
const secret = "..."
```

写死在代码仓库、AMI、脚本里。

更好的 AWS 原生方式通常是：

```text
Compute Service
→ IAM Role
→ Temporary Credentials
```

## 12-★★★★-AWS-STS

STS = Security Token Service = 安全令牌服务。

它与 AssumeRole、临时安全凭证紧密相关。

跨账号访问典型结构：

```text
Account A User/Role
      │
      │ AssumeRole
      ▼
Account B Role
      │
      ▼
Resource in Account B
```

## 13-★★★★-Federation-与-IAM-Identity-Center

企业通常已经有 Microsoft Entra ID、Okta、企业目录等身份系统，不希望每个员工再单独创建一个长期 IAM User。

Federation = 联合身份。

AWS IAM Identity Center 可用于集中管理员工对多个 AWS Account 和应用的访问，并结合外部身份源。

## 14-★★★-Amazon-Cognito

Cognito 的定位与 IAM 不同。

```text
IAM
→ 管 AWS 资源访问身份

Cognito
→ App 的 Customer / End User 身份
```

GlobalShop 的消费者登录、注册、Social Login 等场景更接近 Cognito。

## 15-★★★★★-AWS-Organizations-与-SCP

Organizations 用来组织多个 AWS Account。

```text
Organization
├── Management Account
├── Production OU
│   ├── Account A
│   └── Account B
└── Sandbox OU
    └── Account C
```

SCP = Service Control Policy = 服务控制策略。

它是组织级权限边界工具之一。最关键的理解：

> SCP 不是给 IAM User “增加权限”的普通 IAM Policy；它主要限制成员账号中身份可获得的最大权限范围。

## 16-IAM-与-Organizations-的位置关系

```text
Organizations / SCP
→ Account / OU 治理边界

IAM
→ Account 内具体身份与权限
```

两者经常一起出现，但层级不同。

## 17-GlobalShop-身份体系

```text
Employees
   │
Identity Center / Federation
   │
   ├── Dev Account
   ├── Prod Account
   └── Security Account

Applications
EC2 / Lambda / ECS
   │
   ▼
IAM Role
   │
   ├── S3
   ├── DynamoDB
   └── SQS

Customers
   │
   ▼
Cognito
   │
   ▼
GlobalShop App
```

## 18-高频对比

| 概念 | 核心定位 |
|---|---|
| IAM User | 长期 AWS 身份 |
| IAM Group | 用户集合与权限管理 |
| IAM Role | 可被 Assume 的临时权限身份 |
| Policy | 权限规则 |
| STS | 临时安全凭证 |
| MFA | 多因素认证 |
| Identity Center | Workforce 多账号集中访问 |
| Cognito | 应用终端用户身份 |
| Organizations | 多 AWS Account 组织治理 |
| SCP | Organizations 级权限边界 |

## 19-本章最后要形成的判断方式

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

## 20-与后续章节的关系

C2 负责建立技术体系本身；完整业务架构组合会在 C3 中继续展开；719 道题的逐题选项解析放在 C4；频率排名与强化学习放在 C5；考前压缩复习放在 C6。
