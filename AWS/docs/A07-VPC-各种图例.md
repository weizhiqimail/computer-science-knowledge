# 整个 AWS VPC 关系图——简化版

```text
Region
  │
  └── VPC                         ← 我的整个虚拟网络
       │
       ├── IGW                    ← 怎么连接 Internet
       │
       ├── AZ-A
       │    │
       │    └── Subnet            ← IP 地址分区
       │         │
       │         ├── Route Table  ← 往哪里走
       │         │
       │         ├── NACL         ← 这个子网层面放不放
       │         │
       │         └── EC2          ← 真正的服务器
       │              │
       │              └── SG      ← 这台服务器层面放不放
       │
       └── AZ-B
            └── Subnet
```

# 整个 AWS VPC 关系图——每个节点直接带解释

```text
AWS
│
│  （Amazon 整个云平台）
│
├────────────────────────────────────────────────────────────
│
└── Region：Tokyo / ap-northeast-1
     │
     │  （区域：东京 Region）
     │  （一个 Region 内有多个相互隔离的 Availability Zone）
     │  （VPC 是 Region 级资源，可以跨这个 Region 内多个 AZ）
     │
     │
     └── VPC：10.0.0.0/16
          │
          │  （Virtual Private Cloud）
          │  （你自己的虚拟私有网络）
          │  （10.0.0.0/16 是这个 VPC 的私有 IPv4 地址范围）
          │  （范围大致覆盖 10.0.0.0 ～ 10.0.255.255）
          │
          │
          │
          ├── Internet Gateway：IGW
          │      │
          │      │  （挂载到 VPC 上）
          │      │  （让 VPC 获得连接 Internet 的通道）
          │      │  （它主要解决“怎么连接互联网”，不是防火墙）
          │      │
          │      └──────────────────────────── Internet
          │
          │
          │
          ├── Availability Zone A：ap-northeast-1a
          │      │
          │      │  （东京 Region 内的一个可用区）
          │      │  （里面有计算、存储、网络等基础设施）
          │      │  （Subnet 必须完整地属于某一个 AZ）
          │      │
          │      │
          │      ├── Public Subnet：10.0.1.0/24
          │      │      │
          │      │      │  （从 VPC 10.0.0.0/16 中切出来的一小段）
          │      │      │  （理论地址范围 10.0.1.0 ～ 10.0.1.255）
          │      │      │  （因为它有通往 IGW 的默认路由，
          │      │      │   所以被称为 Public Subnet）
          │      │      │
          │      │      │
          │      │      ├── Route Table：Public-RT
          │      │      │      │
          │      │      │      │ （这个 Subnet 使用的“导航表”）
          │      │      │      │ （根据目标 IP 决定下一跳去哪）
          │      │      │      │
          │      │      │      ├── 10.0.0.0/16 → local
          │      │      │      │
          │      │      │      │   （目标在自己 VPC 内：
          │      │      │      │    不需要去 Internet，
          │      │      │      │    直接走 VPC 内部网络）
          │      │      │      │
          │      │      │      └── 0.0.0.0/0 → IGW
          │      │      │
          │      │      │          （除更具体路由外的所有 IPv4 地址）
          │      │      │          （例如访问公网网站）
          │      │      │          （下一跳交给 Internet Gateway）
          │      │      │
          │      │      │
          │      │      ├── NACL：Public-NACL
          │      │      │      │
          │      │      │      │ （Network ACL）
          │      │      │      │ （Subnet 级访问控制）
          │      │      │      │ （控制进入和离开这个 Subnet 的流量）
          │      │      │      │ （支持 Allow 和 Deny）
          │      │      │      │ （Stateless：进和出分别检查）
          │      │      │
          │      │      │
          │      │      ├── EC2：Web Server
          │      │      │      │
          │      │      │      │ （真正运行 Linux / Windows /
          │      │      │      │   Nginx / Node.js 等程序的服务器实例）
          │      │      │      │
          │      │      │      ├── Private IP：10.0.1.10
          │      │      │      │
          │      │      │      │   （VPC 内部通信使用）
          │      │      │      │
          │      │      │      ├── Public IPv4：例如 54.x.x.x
          │      │      │      │
          │      │      │      │   （如果需要直接通过 IPv4
          │      │      │      │    和 Internet 通信，则需要公网地址）
          │      │      │      │
          │      │      │      └── Security Group：SG-Web
          │      │      │
          │      │      │          （EC2/ENI 级虚拟防火墙）
          │      │      │          （相当于服务器家门口的门锁）
          │      │      │          （例如允许 443、拒绝未允许的 22）
          │      │      │          （只有 Allow 规则）
          │      │      │          （Stateful：会记住连接状态）
          │      │      │
          │      │      │
          │      │      └── NAT Gateway
          │      │
          │      │             （通常创建在 Public Subnet）
          │      │             （帮助 Private Subnet 的服务器
          │      │              主动访问 Internet）
          │      │             （Internet 不能借它主动连接
          │      │              Private EC2）
          │      │
          │      │
          │      └── Private Subnet：10.0.2.0/24
          │             │
          │             │  （也是 VPC 10.0.0.0/16 中的一小段）
          │             │  （地址范围 10.0.2.x）
          │             │  （没有直接指向 IGW 的默认路由）
          │             │
          │             │
          │             ├── Route Table：Private-RT
          │             │      │
          │             │      │ （Private Subnet 的导航表）
          │             │      │
          │             │      ├── 10.0.0.0/16 → local
          │             │      │
          │             │      │   （访问同 VPC 资源走内部网络）
          │             │      │
          │             │      └── 0.0.0.0/0 → NAT Gateway
          │             │
          │             │          （访问公网时不直接走 IGW）
          │             │          （而是先去 NAT Gateway）
          │             │
          │             │
          │             ├── NACL：Private-NACL
          │             │
          │             │      （控制整个 Private Subnet
          │             │       的入站/出站流量）
          │             │
          │             │
          │             └── EC2：App Server
          │                    │
          │                    ├── Private IP：10.0.2.20
          │                    │
          │                    │   （一般不需要公网 IP）
          │                    │
          │                    └── Security Group：SG-App
          │
          │                        （例如：
          │                         只允许 SG-Web
          │                         访问 TCP 8080）
          │
          │
          └── Availability Zone B：ap-northeast-1c
                 │
                 │ （另一个相对独立的可用区）
                 │ （用于高可用，避免一个 AZ 故障
                 │  导致所有服务不可用）
                 │
                 ├── Public Subnet：10.0.3.0/24
                 │
                 └── Private Subnet：10.0.4.0/24
```

# 外部用户访问 AWS 里的服务器——更准确的概念模型

- Route Table 是路由决策规则，NACL 和 SG 是访问控制规则。

```text
             一个网络数据包
                    │
          ┌─────────┼─────────┐
          │         │         │
          ▼         ▼         ▼

      Routing      NACL       SG
          │         │         │
          │         │         │
      应该去哪    子网放不放  实例放不放
```


# 外部用户访问 AWS 里的服务器

```text
用户电脑
公网 IP：203.x.x.x

       │
       │
       │ https://www.example.com
       │ TCP 443
       ▼

DNS
       │
       │
       │ 最终找到 AWS 上对应的公网入口
       ▼

Internet
       │
       │
       │ 目标：
       │ 例如 EC2 对应的 Public IPv4
       ▼

======================================================

AWS Tokyo Region
│
└── VPC：10.0.0.0/16
     │
     │
     ▼
Internet Gateway（IGW）
     │
     │  （VPC 和 Internet 之间的连接点）
     │
     │  （公网地址与实例私网地址之间的相关转换
     │   由 AWS VPC 网络基础设施处理）
     │
     ▼
Public Subnet：10.0.1.0/24
     │
     │
     ├── NACL
     │      │
     │      │ 检查：
     │      │
     │      │ Source：203.x.x.x
     │      │ Destination：10.0.1.10
     │      │ TCP 443
     │      │
     │      ├── Allow → 继续
     │      │
     │      └── Deny  → 丢弃
     │
     ▼
EC2 的网络接口 ENI
     │
     │
     ├── Security Group：SG-Web
     │      │
     │      │ Inbound：
     │      │ TCP 443
     │      │ Source 0.0.0.0/0
     │      │
     │      ├── Allow → 继续
     │      └── 没有匹配 Allow → 丢弃
     │
     ▼
EC2
Private IP：10.0.1.10
     │
     ▼
Linux
     │
     ▼
Nginx
     │
     ▼
Node.js / Java / Python
     │
     ▼
应用程序处理请求
```

# EC2 怎么把 Response 返回给用户

```text
应用程序
Node.js / Java
      │
      │
      │ HTTP Response
      │ 200 OK
      ▼
Nginx
      │
      ▼
EC2
10.0.1.10
      │
      ▼
Security Group
      │
      │
      │ Stateful
      │
      │ “这个 Response 属于刚才
      │  已经允许进入的连接”
      │
      │ → 返回流量自动允许
      │
      ▼
Subnet
      │
      ▼
NACL
      │
      │
      │ Stateless
      │
      │ 出站流量仍然需要
      │ Outbound Rule 允许
      │
      ▼
Route Table
      │
      │
      │ 目标 IP：
      │ 203.x.x.x
      │
      ├── 10.0.0.0/16 → local
      │
      │        × 不匹配
      │
      └── 0.0.0.0/0 → IGW
                       │
                       │ ✓ 匹配
                       ▼
               Internet Gateway
                       │
                       ▼
                    Internet
                       │
                       ▼
              用户：203.x.x.x
                       │
                       ▼
                    Browser
                       │
                       ▼
                页面显示成功
```

# 完整请求 + 响应

```text
━━━━━━━━━━━━ 用户请求 AWS ━━━━━━━━━━━━

User
 │
 ▼
Internet
 │
 ▼
IGW
 │
 ▼
NACL
 │
 ▼
Security Group
 │
 ▼
EC2
 │
 ▼
Application


━━━━━━━━━━━━ AWS 返回用户 ━━━━━━━━━━━━

Application
 │
 ▼
EC2
 │
 ▼
Security Group
 │
 ▼
NACL
 │
 ▼
Route Table
 │
 │ 0.0.0.0/0 → IGW
 ▼
IGW
 │
 ▼
Internet
 │
 ▼
User
```

# Public EC2 → Internet

## 请求访问

```text
EC2
10.0.1.10
Public IPv4：54.x.x.x
     │
     │
     │ 发起 HTTPS 请求
     │ Destination = 某公网 IP
     │ TCP 443
     ▼
Security Group
     │
     │ 检查 Outbound Rule
     │
     │ 例如：
     │ 0.0.0.0/0
     │ TCP 443
     │
     ▼
NACL
     │
     │ 检查 Subnet Outbound
     │
     ▼
Route Table
     │
     │
     │ Destination = 公网 IP
     │
     ├── 10.0.0.0/16 → local
     │         ×
     │
     └── 0.0.0.0/0 → IGW
                      │
                      │ ✓
                      ▼
              Internet Gateway
                      │
                      ▼
                   Internet
                      │
                      ▼
              外部 API Server
```

## 请求响应

```text
外部 API Server
       │
       ▼
Internet
       │
       ▼
IGW
       │
       ▼
NACL
       │
       ▼
Security Group
       │
       │ Stateful：
       │ 识别为刚才 EC2 主动建立
       │ 的连接返回流量
       ▼
EC2
```

# Private EC2 主动访问 Internet

## 假设

```text
VPC
10.0.0.0/16

Public Subnet
10.0.1.0/24

Private Subnet
10.0.2.0/24

App EC2
10.0.2.20

---------------------------------------------

Private Route Table：

10.0.0.0/16 → local

0.0.0.0/0 → NAT Gateway

---------------------------------------------

Public Route Table：

10.0.0.0/16 → local

0.0.0.0/0 → IGW

```

## 请求访问

```text
Private EC2
10.0.2.20
      │
      │
      │ npm install
      │ apt update
      │ 调用公网 API
      │
      ▼
Security Group
      │
      │ Outbound 是否允许？
      ▼
Private Subnet NACL
      │
      │ Outbound 是否允许？
      ▼
Private Route Table
      │
      │
      │ Destination = 公网 IP
      │
      ├── 10.0.0.0/16 → local
      │       ×
      │
      └── 0.0.0.0/0 → NAT Gateway
                           │
                           ▼
                  ┌─────────────────────┐
                  │ Public Subnet       │
                  │ 10.0.1.0/24         │
                  │                     │
                  │ NAT Gateway         │
                  │ + Elastic IP        │
                  └──────────┬──────────┘
                             │
                             ▼
                   Public Route Table
                             │
                             │
                             │ 0.0.0.0/0
                             │     ↓
                             │    IGW
                             ▼
                   Internet Gateway
                             │
                             ▼
                         Internet
                             │
                             ▼
                       外部服务器
```

## 请求响应

```text
外部 API
    │
    │ Response
    ▼
Internet
    │
    ▼
IGW
    │
    ▼
NAT Gateway
    │
    │
    │ “这是刚才 10.0.2.20
    │  主动发出的那个连接”
    │
    ▼
Private Subnet
    │
    ▼
NACL
    │
    ▼
Security Group
    │
    │ Stateful
    │
    ▼
Private EC2
10.0.2.20
```

## 整个 Private Server Internet 模型压缩成

```text
━━━━━━━━━━━━ 出去 ━━━━━━━━━━━━

Private EC2
     │
     ▼
Private Route Table
     │
     │ 0.0.0.0/0
     ▼
NAT Gateway
     │
     ▼
IGW
     │
     ▼
Internet


━━━━━━━━━━━━ 回来 ━━━━━━━━━━━━

Internet
     │
     ▼
IGW
     │
     ▼
NAT Gateway
     │
     ▼
NACL
     │
     ▼
SG
     │
     ▼
Private EC2
```
