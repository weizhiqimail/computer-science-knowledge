# C2-06-VPC-与基础网络

> 资料口径说明：本章延续当前 AWS CLF-C02 学习项目既有规则，主要依据用户提供的 719 题题库、`chatGPT会话1.md`、`chatGPT会话2.md`、`cmd1.md` 与前序 C2 章节的结构整理。题库中的答案与评论用于识别高频考点、业务场景和易混项，不自动视为当前 AWS 官方结论。涉及会随时间变化的产品状态、考试范围与 Support 体系时，本章只沿用项目资料中已经明确记录的状态；正式考试前仍应再对照 AWS 当前官方页面。


## 1-本章目标

这一章先不讨论“全球网络加速”或“本地机房专线”，而只解决 AWS 内部最基础的网络问题：

```text
一台 EC2 / ECS / RDS 为什么能互相通信？
谁可以直接访问 Internet？
谁只能待在私网？
流量从哪里进、从哪里出？
安全边界放在哪里？
多个 VPC 怎么连接？
访问 S3 等 AWS 服务时，能不能不经过公网？
```

上一章计算与数据库已经回答“应用在哪里运行、数据放在哪里”；这一章回答的是：

> 这些资源如何被放进一个可控、可路由、可隔离的网络空间里。

题库粗略曝光统计中，VPC 约 37 题，Security Group 约 30 题，Network ACL 约 16 题；“Gateway”家族整体在约 43 道不同题中出现，是典型混淆点。

## 2-从传统网络开始

传统数据中心通常会有：

```text
Internet
   │
Router
   │
Firewall
   │
Switch
   │
├── Web Server
├── App Server
└── Database Server
```

云上并没有取消这些概念，而是把很多能力软件定义化、服务化。

在 AWS 中可以先建立一张概念映射：

| 传统概念 | AWS 中常见对应 |
|---|---|
| 企业私有网络 | Amazon VPC |
| 网段 | Subnet |
| 路由器规则 | Route Table |
| 公网出口/入口 | Internet Gateway |
| 私网实例出网 | NAT Gateway |
| 实例级虚拟防火墙 | Security Group |
| 子网级访问控制 | Network ACL |
| 固定公网 IPv4 | Elastic IP |
| 私网访问 AWS 服务 | VPC Endpoint / PrivateLink |


## 3-★★★★★-Amazon-VPC

**正式名称：** Amazon Virtual Private Cloud
**中文：** Amazon 虚拟私有云

### 3.1-为什么需要它

公司把系统迁到公有云后，仍然需要一个逻辑上隔离的网络边界，不能把所有服务器、数据库和内部服务直接暴露在 Internet 上。

### 3.2-它是什么

VPC 是 AWS 中由用户定义的逻辑隔离网络。你可以为它规划 IP 地址范围、Subnet、Route、Gateway 与安全规则。Virtual Private Cloud 里的 Virtual 表示这不是你独占一套物理交换机，而是由 AWS 网络基础设施提供逻辑隔离。

### 3.3-GlobalShop-场景

GlobalShop 可以把 Web/API、应用服务、数据库分别放入不同 Subnet，再通过路由和安全控制规定谁能访问谁。

### 3.4-常见组合

VPC + Subnet + Route Table + Internet Gateway + NAT Gateway + Security Group + NACL。

### 3.5-容易混淆

VPC 不是 VPN；VPC 是云内网络空间，VPN 是连接两个网络的一种隧道技术。

### 3.6-题库通常怎么考

看到 logically isolated network、private network、custom IP range，首先想到 VPC。



## 4-★★★★-CIDR、IP-与地址规划

CIDR = Classless Inter-Domain Routing，中文常说无类别域间路由。

CLF-C02 不要求手算复杂子网，但必须理解：VPC 与 Subnet 都需要 IP 地址范围。

例如：

```text
VPC: 10.0.0.0/16
│
├── Public Subnet A:  10.0.1.0/24
├── Private Subnet A: 10.0.2.0/24
├── Public Subnet B:  10.0.3.0/24
└── Private Subnet B: 10.0.4.0/24
```

地址规划的核心不是考试算术，而是理解：

> Subnet 是 VPC 地址空间的进一步划分。

## 5-★★★★★-Subnet

Subnet = Subnetwork = 子网。

Subnet 本质上是 VPC 内的一段 IP 地址范围，并且属于一个 Availability Zone。

```text
VPC
├── AZ-A
│   ├── Public Subnet A
│   └── Private Subnet A
└── AZ-B
    ├── Public Subnet B
    └── Private Subnet B
```

### 5.1-Public-与-Private-不是名字决定的

一个 Subnet 是否“公网”，关键看它的路由与资源公网地址能力，而不是你给它取名叫 public。

典型理解：

```text
Public Subnet
Route Table:
0.0.0.0/0 → Internet Gateway

Private Subnet
通常没有直接指向 Internet Gateway 的公网路由
```

数据库通常更适合放在 Private Subnet。

## 6-★★★★★-Route-Table

Route Table = 路由表。

它回答：

> “去往某个目标网段的流量，下一跳应该送到哪里？”

概念示例：

```text
Destination      Target
10.0.0.0/16      local
0.0.0.0/0        igw-xxxx
```

`local` 让 VPC 内部地址之间能够按规则通信；默认路由 `0.0.0.0/0` 则经常代表其他 IPv4 目标。

## 7-★★★★★-Internet-Gateway

**正式名称：** Internet Gateway
**中文：** 互联网网关

### 7.1-为什么需要它

VPC 内的资源如果要与公网 Internet 直接通信，需要一个连接 VPC 与 Internet 的网关能力。

### 7.2-它是什么

Internet Gateway（IGW）是附加到 VPC 的网关组件，为具备合适路由和公网地址的资源提供 Internet 连接路径。

### 7.3-GlobalShop-场景

GlobalShop 的 ALB 或真正需要公网访问的 Web 层可以位于具备 IGW 路由的 Public Subnet。

### 7.4-常见组合

Public Subnet Route Table → Internet Gateway；资源通常还需要 public IPv4 / Elastic IP 等公网可达条件。

### 7.5-容易混淆

Internet Gateway 不等于 NAT Gateway。IGW 是 VPC 与 Internet 的连接点；NAT Gateway 常用来让私网资源主动访问外网。

### 7.6-题库通常怎么考

题目强调 public subnet、direct internet access、internet-facing workload 时要识别 IGW。



## 8-★★★★★-NAT-Gateway

**正式名称：** NAT Gateway
**中文：** 网络地址转换网关

### 8.1-为什么需要它

数据库或内部应用不应该被 Internet 主动访问，但它们仍可能需要下载补丁、访问外部 API。此时需要“能出去，但不接受互联网直接发起连接”的典型出网方式。

### 8.2-它是什么

NAT = Network Address Translation。NAT Gateway 提供托管的网络地址转换能力，常用于 Private Subnet 中的 IPv4 资源访问外部网络。

### 8.3-GlobalShop-场景

GlobalShop 私有应用服务器需要访问第三方支付接口或系统更新站点，可以通过 NAT Gateway 出网，而数据库本身仍不暴露公网。

### 8.4-常见组合

Private Subnet Route → NAT Gateway；NAT Gateway 通常部署在 Public Subnet，并借助 IGW 访问 Internet。

### 8.5-容易混淆

NAT Gateway ≠ Internet Gateway。前者解决私网出站地址转换，后者是 VPC 与公网的网关。

### 8.6-题库通常怎么考

private subnet instances need outbound internet access without inbound public exposure，是 NAT Gateway 高频场景。



## 9-Security-Group-与-Network-ACL：最重要的双层安全边界

### 9.1-★★★★★-Security-Group

Security Group = 安全组。

可以把它理解成：

> 附着在 ENI / 实例等资源上的有状态虚拟防火墙。

核心：

```text
Stateful
有状态
```

允许请求进入后，与该请求对应的返回流量不需要再单独写一条完全对称的返回规则。

Security Group 主要使用 Allow 规则。

GlobalShop：

```text
Internet
   │  HTTPS 443
   ▼
ALB-SG
   │  只允许来自 ALB-SG
   ▼
App-SG
   │  只允许数据库端口
   ▼
DB-SG
```

这种“Security Group 引用另一个 Security Group”的思路，比把数据库开放给一大片 IP 更清晰。

### 9.2-★★★★-Network-ACL

NACL = Network Access Control List = 网络访问控制列表。

它工作在 Subnet 层，属于无状态访问控制。

```text
Security Group
→ Resource / ENI level
→ Stateful
→ Allow-oriented

Network ACL
→ Subnet level
→ Stateless
→ Allow + Deny
```

考试如果强调 explicit deny、subnet boundary，NACL 的优先级会明显提高。

## 10-ENI-与-Elastic-IP

ENI = Elastic Network Interface = 弹性网络接口。

可以粗略理解成 AWS 中的虚拟网卡。EC2 网络通信最终会落到网络接口与私有 IP 等概念上。

Elastic IP（EIP）是可分配的静态公网 IPv4 地址。它不是“自动等于高可用”，只是提供一个可重新映射的公网地址资源。

## 11-★★★★-VPC-Peering

VPC Peering 用于把两个 VPC 直接连接起来，使双方可通过私有 IP 通信。

```text
VPC-A  <──── Peering ────>  VPC-B
```

核心特点：

- 点对点关系；
- 不是自动传递式路由中心；
- 规模变大时，很多两两 Peering 会越来越难管理。

所以：

```text
少量 VPC 点对点
→ VPC Peering

大量 VPC / 本地网络集中互联
→ Transit Gateway（C2-07 深入）
```

## 12-★★★★★-VPC-Endpoint：为什么不想走公网？

假设 Private Subnet 中的 EC2 要访问 S3：

```text
EC2
 │
 ├── NAT / Internet path → S3 public endpoint
```

技术上可能可行，但很多企业希望：

> 访问 AWS 服务时，不依赖公网路径。

这就引出 VPC Endpoint。

### 12.1-Gateway-Endpoint

经典 CLF 考点主要是：

```text
S3
DynamoDB
```

通过 Gateway Endpoint 可让 VPC 内资源以私有方式访问这些服务。

### 12.2-Interface-Endpoint-/-AWS-PrivateLink

Interface Endpoint 通常基于 AWS PrivateLink，在 VPC 内提供私有 IP 的网络接口来访问支持的服务。

```text
Private EC2
    │
    ▼
Interface Endpoint
    │
    ▼
AWS Service / Endpoint Service
```

## 13-Gateway-家族不要混

| Gateway | 解决的问题 |
|---|---|
| Internet Gateway | VPC 与 Internet |
| NAT Gateway | 私网 IPv4 资源向外访问 |
| Transit Gateway | 多 VPC / 本地网络集中互联 |
| Storage Gateway | 本地环境与 AWS 存储整合 |
| API Gateway | 对外提供和管理 API |
| Virtual Private Gateway | Site-to-Site VPN 的 AWS 侧网关概念之一 |

“Gateway”只是“连接/转发边界”的通用名字，绝不意味着这些产品属于同一种服务。

## 14-GlobalShop-基础-VPC-架构

```text
                         Internet
                            │
                     Internet Gateway
                            │
                ┌───────────┴───────────┐
                ▼                       ▼
        Public Subnet A          Public Subnet B
              ALB                     ALB
                │                       │
                ▼                       ▼
       Private Subnet A        Private Subnet B
            App EC2                 App EC2
                │                       │
                └───────────┬───────────┘
                            ▼
                          RDS
                    Private Subnets

Private App outbound:
App → NAT Gateway → IGW → Internet

Private AWS service access:
App → VPC Endpoint → S3 / DynamoDB
```

## 15-高频对比表

| 需求 | 优先考虑 |
|---|---|
| 创建逻辑隔离网络 | VPC |
| 划分 AZ 内网络 | Subnet |
| 决定流量下一跳 | Route Table |
| 公网直接连接路径 | Internet Gateway |
| 私网主动访问 Internet | NAT Gateway |
| 实例级有状态访问控制 | Security Group |
| 子网级、支持 Deny | NACL |
| 两个 VPC 点对点连接 | VPC Peering |
| 私网访问 S3/DynamoDB | Gateway Endpoint |
| 私网访问支持 PrivateLink 的服务 | Interface Endpoint |

## 16-本章最后要形成的判断方式

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

## 17-与后续章节的关系

C2 负责建立技术体系本身；完整业务架构组合会在 C3 中继续展开；719 道题的逐题选项解析放在 C4；频率排名与强化学习放在 C5；考前压缩复习放在 C6。
