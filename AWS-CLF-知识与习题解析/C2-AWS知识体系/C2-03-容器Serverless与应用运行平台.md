# C2-03-容器Serverless与应用运行平台

> 本章目标：承接 C2-02 的 EC2 与基础计算服务，从“应用是不是一定要运行在一整台虚拟机里”开始，建立 Container、Docker、Container Image、Registry、Amazon ECR、Amazon ECS、Amazon EKS、AWS Fargate、Serverless、AWS Lambda 之间的完整关系，并理解这些运行方式分别把多少基础设施管理责任交给 AWS。

---

## 1-本章在整套-AWS-知识体系中的位置

上一章建立的是：

```text
Physical Server
      ↓
Virtualization
      ↓
Virtual Machine
      ↓
Amazon EC2
```
这解决了：代码在哪里运行？但是现代应用还有另一个问题：是不是每个 Application、都需要一整台 Virtual Machine？答案是否定的。现代 AWS Compute 可以继续向上抽象：

```text
Physical Server
      ↓
Virtual Machine
      ↓
Container
      ↓
Container Orchestration
      ↓
Serverless Container / Serverless Function
```
在 AWS 中可以先建立下面这张总图：

```text
Compute
│
├── Virtual Machine
│   └── Amazon EC2
│
├── Container
│   ├── Amazon ECR     ← 存 Container Image
│   ├── Amazon ECS     ← AWS 原生容器编排
│   ├── Amazon EKS     ← Managed Kubernetes
│   └── AWS Fargate    ← 不自己管理容器服务器
│
├── Serverless Function
│   └── AWS Lambda
│
└── Managed Application Platform
    └── AWS Elastic Beanstalk
```
当前 CLF-C02 官方范围中明确包括：

- Containers：Amazon ECR、Amazon ECS、Amazon EKS
- Serverless：AWS Fargate、AWS Lambda
- Compute：Amazon EC2、AWS Elastic Beanstalk、Amazon Lightsail、AWS Batch 等

因此本章不是“额外的高级知识”，而是 CLF-C02 计算体系的核心组成。

---

## 2-719题中的粗略曝光度

按照本项目已经统一使用的统计口径：题干 + 所有选项、每道题同一服务最多计 1 次；粗略得到：

| 服务 | 约涉及题数 |
|---|---:|
| Amazon EC2 | 175 |
| AWS Lambda | 31 |
| AWS Fargate | 14 |
| Amazon ECS | 13 |
| Amazon EKS | 7 |
| Amazon ECR | 题库中几乎没有直接点名 |
| Elastic Beanstalk | 16 |

注意：曝光次数、≠、正确答案次数；例如某服务可能经常作为干扰项出现。C2 的目的也不是在这里逐题解析，而是先把这些技术真正理解清楚。

---

## 3-★★★★★-容器基础与镜像

### 3.1-为什么-Virtual-Machine-之后还会出现-Container？

先看传统 VM 的方式。假设 GlobalShop 有三个服务：Product Service、Order Service、Payment Service；如果每个服务都使用一台 VM：

```text
VM 1
├── Linux
├── Node.js
└── Product Service

VM 2
├── Linux
├── Java
└── Order Service

VM 3
├── Linux
├── Java
└── Payment Service
```
这样当然可以运行。但是问题是：每个 VM 都需要自己的：Guest OS、System Libraries、Runtime、Application；其中 Guest OS 本身就占用：CPU、Memory、Disk、Boot Time；如果一台物理服务器上运行很多小服务，重复的操作系统会带来额外开销。于是人们开始思考：

> 能不能不为每一个应用都准备一整套 Guest OS，而只隔离“应用 + 它需要的运行环境”？

这就是 Container 思想的重要来源之一。

---

### 3.2-★★★★★-Container

Container；中文通常翻译为：容器；在软件运行环境里，它不是现实中的运输集装箱。可以先理解成：

> 一个相对隔离的应用运行环境，把应用程序及其依赖打包在一起运行。

概念上：

```text
Host OS
│
├── Container A
│   ├── Node.js
│   └── Product Service
│
├── Container B
│   ├── Java Runtime
│   └── Order Service
│
└── Container C
    ├── Python
    └── Recommendation Service
```
与 VM 最大的学习层面区别是：

```text
VM
通常包含完整 Guest OS

Container
通常共享 Host OS Kernel，
主要隔离应用进程、文件系统、网络等运行环境
```
CLF-C02 不要求深入研究：Linux Namespace、cgroups、OverlayFS、Container Runtime Interface；但必须理解：

```text
VM
隔离粒度更像“一台机器”

Container
隔离粒度更像“一个应用运行单元”
```
---

### 3.3-为什么叫-Container？

这个名字可以用现实世界的集装箱帮助理解。传统运输：货物形状不同、包装方式不同、搬运方式不同；集装箱出现以后：

```text
货物
 ↓
装进标准 Container
 ↓
轮船 / 火车 / 卡车
都围绕标准 Container 搬运
```
软件中的 Container 也有类似思想：

```text
Application
+
Runtime
+
Libraries
+
Configuration
      ↓
Container Image
      ↓
在不同 Container Runtime 上运行
```
重点不是：

> Container 真的等于运输集装箱。

而是：

> 通过相对标准化的打包与运行方式，让应用更容易从开发环境移动到测试和生产环境。

---

### 3.4-VM-与-Container-的核心区别

先看 VM：

```text
Physical Server
      │
      ▼
Hypervisor
      │
 ┌────┼────┐
 ▼    ▼    ▼
VM1  VM2  VM3
 │    │    │
OS   OS   OS
 │    │    │
App  App  App
```
再看 Container：

```text
Physical / Virtual Server
          │
          ▼
       Host OS
          │
          ▼
Container Runtime
          │
   ┌──────┼──────┐
   ▼      ▼      ▼
Container Container Container
   App      App      App
```
学习层面可以先记：

| 对比 | Virtual Machine | Container |
|---|---|---|
| 隔离单位 | 一台虚拟机器 | 一个应用运行环境 |
| OS | 通常每个 VM 有 Guest OS | 通常共享 Host Kernel |
| 启动 | 相对更重 | 通常更快、更轻 |
| 打包 | VM Image / AMI | Container Image |
| 常见 AWS | EC2 | ECS / EKS / Fargate |
| 控制能力 | 很高 | 更面向应用 |

但不能理解成：Container 永远比 VM 好；它们解决的是不同层级的问题。很多生产架构本身就是：

```text
EC2
  ↓
Container
```
即：Container 最终仍然运行在某种 Compute 上。

---

### 3.5-★★★★-Docker

Docker；不是 AWS 服务。它是现代 Container 生态中非常重要的一套容器构建与运行工具。学习 AWS 时经常看到：Docker Image、Docker Container、Dockerfile、docker build、docker push、docker pull；CLF-C02 不要求会写 Dockerfile。但需要知道：

```text
Developer
   │
   │ build
   ▼
Container Image
   │
   │ push
   ▼
Container Registry
   │
   │ pull
   ▼
ECS / EKS / Fargate
   │
   ▼
Running Container
```
AWS 题目如果写：Docker workload、containerized application、container image；就应该立即想到：ECR、ECS、EKS、Fargate；而不是先想到 RDS、S3、Athena。

---

### 3.6-★★★★★-Container-Image

Container Image；  中文：容器镜像；它可以理解为：

> 用来创建 Container 的只读应用模板。

例如 GlobalShop 的商品服务镜像：

```text
globalshop/product-service:2026-09

包含：
Node.js Runtime
Application Code
Dependencies
Configuration Template
```
然后可以从同一份 Image 启动很多 Container：

```text
Product Image
    │
    ├── Container #1
    ├── Container #2
    ├── Container #3
    └── Container #4
```
这与上一章的 AMI 有一点类似：

```text
AMI
  ↓
EC2 Instance

Container Image
  ↓
Container
```
但二者不是同一个东西。

---

### 3.7-AMI-vs-Container-Image

| 对比 | AMI | Container Image |
|---|---|---|
| 主要创建对象 | EC2 Instance | Container |
| 抽象层 | Machine / VM | Application |
| 通常是否包含完整 OS | 更接近完整机器环境 | 通常只包含应用所需用户空间 |
| 典型服务 | EC2 | ECS / EKS / Fargate |
| 重点问题 | “服务器应该长什么样” | “应用运行包应该长什么样” |

可以这样记：

```text
AMI
= Server Template

Container Image
= Application Runtime Package
```
---

## 4-★★★★★-镜像仓库与编排基础

### 4.1-Registry-是什么？

Registry；  中文：镜像注册表 / 镜像仓库服务；开发者构建 Container Image 以后，需要一个地方存放。不能只放在开发者电脑：

```text
Developer Laptop
     X
Production Cluster
```
更合理的是：

```text
Developer
   │
   │ push
   ▼
Image Registry
   │
   │ pull
   ▼
Production
```
常见公共技术中有 Docker Hub。AWS 自己提供：Amazon ECR

---

### 4.2-★★★★-Amazon-ECR

[CURRENT-IN-SCOPE]；正式名称：Amazon Elastic Container Registry；简称：Amazon ECR；中文可以理解为：Amazon 弹性容器镜像注册表；名称拆解：

```text
Elastic
弹性

Container
容器

Registry
注册表 / 镜像仓库
```
---

### 4.3-ECR-为什么存在？

如果 GlobalShop 有几十个微服务：product-service、order-service、payment-service、inventory-service、search-service、recommend-service；每个服务都有多个版本：v21、v22、v23、...；需要统一保存：Container Images；ECR 就负责这一层：

```text
Source Code
    │
    ▼
Build Image
    │
    ▼
Amazon ECR
    │
    ├── product-service:v23
    ├── order-service:v41
    └── payment-service:v18
```
然后 ECS / EKS 可以拉取这些 Image 来运行。

---

### 4.4-ECR-不负责运行-Container

这是一个非常重要的区分。

```text
ECR
= 存 Image

ECS / EKS
= 编排 Container

Fargate / EC2
= 提供运行 Container 的 Compute
```
错误理解：

```text
ECR
= 容器服务器
```
不对。ECR 更像：Container Image Warehouse；而不是应用执行平台。

---

### 4.5-为什么需要-Container-Orchestration？

在开发机上运行一个 Container 很简单：docker run；但是生产系统可能有：500 个 Product Container、300 个 Order Container、100 个 Payment Container这时问题变成：Container 放在哪台机器？、某台机器满了怎么办？、Container 挂了怎么办？、需要增加多少副本？、新版本怎么发布？、如何健康检查？、如何把网络流量送到正确 Container？这些问题统称为：

Container Orchestration；Orchestration；原意：编排 / 协调；就像乐团不是只有一件乐器，而是需要统一协调很多乐器。Container Orchestration：

```text
很多 Container
+
很多 Compute Node
+
Scheduling
+
Scaling
+
Health
+
Deployment
+
Networking
```
由一个系统统一协调。AWS 中最重要的两个方向：Amazon ECS、Amazon EKS

---

## 5-★★★★★-ECS与Fargate

### 5.1-★★★★-Cluster

Cluster；  中文：集群；最基本理解：

> 多个计算资源组成一个整体，共同承载工作负载。

例如：

```text
Container Cluster
│
├── Compute Node A
├── Compute Node B
├── Compute Node C
└── Compute Node D
```
然后容器编排系统负责：

```text
Workload
   ↓
Scheduler
   ↓
选择合适 Node
   ↓
运行 Container
```
ECS 和 EKS 都会经常出现 Cluster 这个词。

---

### 5.2-★★★★★-Amazon-ECS

[CURRENT-IN-SCOPE]；正式名称：Amazon Elastic Container Service；简称：Amazon ECS；中文通常称：Amazon 弹性容器服务；AWS 当前把 ECS 定义为：

> Fully Managed Container Orchestration Service

也就是：完全托管的容器编排服务

---

### 5.3-为什么叫-Elastic-Container-Service？

拆开看：

```text
Elastic
= 弹性

Container
= 容器

Service
= 服务
```
核心不是“它能存 Container”。而是：

> AWS 提供一套原生的 Container 管理与编排能力，使你能够部署、管理和扩展容器化应用。

---

### 5.4-ECS-到底管理什么？

概念上：

```text
Amazon ECS
     │
     ├── 我要运行哪些 Container？
     ├── 每个 Container 要多少 CPU / Memory？
     ├── 我要多少个副本？
     ├── Container 挂了是否重建？
     ├── 如何滚动部署？
     └── Container 应该放到哪些 Compute 上？
```
它不是数据库。不是镜像仓库。也不是单纯的一台服务器。它是：Container Orchestration Layer

---

### 5.5-ECS-的几个核心概念

CLF-C02 不要求深入配置，但理解这些词会非常有帮助。

#### 5.5.1-ECS-Cluster

ECS Cluster；可以理解成：

> ECS 管理 Container Workload 的逻辑集群。

---

#### 5.5.2-Task-Definition

Task Definition；  中文：任务定义；可以理解成：

> ECS 运行任务时使用的“运行说明书”。

里面会描述类似：使用哪个 Container Image、CPU、Memory、Port、Environment Variables、IAM Role、Log Configuration；概念上：

```text
Task Definition
      ↓
Task
```
类似：

```text
Recipe
  ↓
Actual Dish
```
不是完全等价，只是帮助理解。

---

#### 5.5.3-ECS-Task

Task；  中文：任务；在 ECS 中可以理解为：

> 按 Task Definition 真正启动出来的一份运行实例。

例如：

```text
Task Definition:
product-service:23

      ↓

Task #1
Task #2
Task #3
```
一个 Task 中可以包含一个或多个紧密关联的 Container。

---

#### 5.5.4-ECS-Service

ECS Service；这里的 Service 不是泛指 AWS Service。它是 ECS 内的一个概念。它主要用于：

> 保持某类长期运行 Task 的期望数量，并帮助进行部署和恢复。

例如：

```text
Desired Count = 6

ECS Service
    │
    ├── Task 1
    ├── Task 2
    ├── Task 3
    ├── Task 4
    ├── Task 5
    └── Task 6
```
如果 Task 3 挂了：

```text
5 Running
   ↓
ECS Service
   ↓
再启动 1 个
   ↓
6 Running
```
这就是编排系统的重要价值。

---

### 5.6-ECS-最终仍然需要-Compute

ECS 是编排层。Container 真正运行时仍然需要：CPU、Memory、Network；所以必须有 Compute。典型两种思路：

```text
ECS
├── EC2
│   └── 你管理底层 EC2 Capacity
│
└── Fargate
    └── AWS 帮你提供底层容器 Compute
```
这也是 ECS 与 Fargate 最容易混淆的地方。

---

### 5.7-ECS-on-EC2

如果使用：ECS、+、EC2；概念上：

```text
Amazon ECS
     │
     ▼
EC2 Cluster Capacity
     │
 ┌───┼────┐
 ▼   ▼    ▼
EC2 EC2  EC2
 │   │    │
Tasks / Containers
```
你仍然需要关注：EC2 Instance Type、EC2 Capacity、OS、Patching、Scaling Nodes；虽然 ECS 帮你管理 Container Orchestration，但底层服务器仍然有较多客户责任。

---

### 5.8-★★★★★-AWS-Fargate

[CURRENT-IN-SCOPE]；正式名称：AWS Fargate；Fargate 不是一个缩写。它是 AWS 给产品起的名称。最重要的定义：

> Fargate 是为 Container 提供按需计算能力的 Serverless Compute 技术，使你不需要自己 Provision、配置和扩展用于运行 Container 的 VM 集群。

---

### 5.9-Fargate-到底解决什么？

如果不用 Fargate：

```text
ECS
 ↓
EC2 Nodes
 ↓
Containers
```
你需要想：需要多少台 EC2？、用什么 Instance Type？、EC2 不够了怎么办？、机器利用率太低怎么办？、OS 要不要 Patch？、Node Group 怎么扩缩？使用 Fargate：

```text
ECS / EKS
     │
     ▼
   Fargate
     │
     ▼
Containers / Pods
```
你主要声明：这个 Workload、需要多少 CPU？、需要多少 Memory？底层服务器 Capacity 由 AWS 管理。

---

### 5.10-Fargate-不是-Container-Orchestrator

非常重要。错误理解：

```text
Fargate
=
ECS
```
不对。更准确：

```text
ECS / EKS
= Orchestration

Fargate
= Serverless Compute for Containers
```
组合：ECS + Fargate；或者：EKS + Fargate

---

### 5.11-为什么-Fargate-也叫-Serverless？

Serverless；中文经常翻译：无服务器；但是上一章已经建立过一个重要原则：Serverless、≠、物理世界没有 Server；真正意思是：

> 客户不再直接 Provision 和管理服务器。

Fargate 背后当然仍然有：Physical Server、Compute Capacity、Network、Storage；只不过这些基础设施被 AWS 抽象掉。所以：

```text
Serverless
=
No Server Management for Customer
```
比：No Server Exists；更准确。

---

### 5.12-题库中的典型-Fargate-场景

题库中有一道非常典型的场景：

```text
公司自己在 EC2 上管理 Docker 环境
↓
不想继续管理：
Cluster Size
Scheduling
Environment Maintenance
```
这种题的核心不是：需要数据库；也不是：需要分析 S3 数据；而是：Container、+、减少底层服务器 / 集群管理；因此 Fargate 会成为重要候选。题库中 Fargate 的曝光度不如 EC2，但它是非常典型的“场景型”考点。

---

## 6-★★★★★-Kubernetes与EKS

### 6.1-★★★★-Kubernetes-是什么？

Kubernetes；常写：K8s；为什么是 K8s？

```text
K u b e r n e t e s
  └── 8 个中间字母 ──┘

K8s
```
Kubernetes 不是 AWS 发明的。它是开源的：Container Orchestration Platform；也就是容器编排平台。它可以管理：

```text
Cluster
Node
Pod
Deployment
Service
Config
Secret
Scaling
Scheduling
Health
Rolling Update
```
CLF-C02 不要求学会完整 Kubernetes。但必须知道：

```text
Kubernetes
→ Container Orchestration

Amazon EKS
→ AWS Managed Kubernetes
```
---

### 6.2-为什么企业会使用-Kubernetes？

假设一家公司希望：AWS、Azure、Google Cloud、On-Premises；都使用相似的 Container Orchestration 模型。Kubernetes 因为是开放生态，具有：标准化、生态丰富、可移植性较强、大量工具支持；所以很多大型系统选择 Kubernetes。但代价是：概念多、复杂度高、运维学习成本高；因此：Kubernetes、不是“因为更高级，所以所有项目都应该用”；如果系统并不需要 Kubernetes 生态，ECS 往往更简单。

---

### 6.3-Pod-是什么？

Pod；是 Kubernetes 中非常重要的最小调度单位之一。不要简单记成：

```text
Pod = Container
```
更准确：

```text
Pod
  ├── Container A
  └── Container B
```
一个 Pod 可以有一个或多个紧密关联的 Container。最常见场景往往是：

```text
1 Pod
  └── 1 Main Container
```
于是初学时很容易觉得二者一样。但概念上：Kubernetes 调度 Pod、Pod 内运行 Container

---

### 6.4-★★★★★-Amazon-EKS

[CURRENT-IN-SCOPE]；正式名称：Amazon Elastic Kubernetes Service；简称：Amazon EKS；中文通常理解：Amazon 弹性 Kubernetes 服务；AWS 当前将 EKS 定义为：

> Fully Managed Kubernetes Service

核心：Kubernetes、+、AWS Managed Service

---

### 6.5-EKS-为什么存在？

如果企业自己搭 Kubernetes：

```text
EC2
  ↓
Install Kubernetes
  ↓
Control Plane
  ↓
etcd
  ↓
API Server
  ↓
Scheduler
  ↓
Controller
  ↓
Worker Nodes
```
维护成本不低。EKS 的核心价值是：

> AWS 帮你托管 Kubernetes 的重要控制平面能力，并与 AWS 网络、IAM、负载均衡、存储等服务集成。

于是：

```text
Developer / Platform Team
        │
        ▼
      EKS
        │
        ▼
 Kubernetes API
        │
        ▼
     Workloads
```
---

### 6.6-EKS-并不等于“不需要任何-Compute”

EKS 是 Kubernetes 服务。工作负载仍需要运行在 Compute 上。典型：

```text
EKS
├── EC2 Worker Nodes
│
└── Fargate
```
所以：EKS、≠、Fargate；同样：EKS、≠、EC2；三者是不同层。

---

### 6.7-ECS-vs-EKS

这是本章最重要的对比之一。

| 对比 | Amazon ECS | Amazon EKS |
|---|---|---|
| 核心 | AWS 原生 Container Orchestration | Managed Kubernetes |
| 是否 Kubernetes | 否 | 是 |
| 学习复杂度 | 通常更低 | 通常更高 |
| AWS 集成 | 很直接 | 很强，同时保留 Kubernetes 生态 |
| 可移植生态 | AWS 原生模型 | Kubernetes 标准生态 |
| 典型题目关键词 | AWS-native container | Kubernetes |

最简单的考试判断：

```text
题目明确写 Kubernetes
→ 优先想到 EKS

只说 AWS 上管理 Containers
→ ECS 可能更直接
```
不能反过来背：EKS 一定比 ECS 好；这是错误的。

---

### 6.8-ECS-vs-EKS-vs-Fargate

这三个服务经常同时出现。

```text
             Container Workload
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
         ECS                 EKS
   AWS Orchestration   Kubernetes Orchestration
          │                   │
          └─────────┬─────────┘
                    ▼
             Compute Choice
              ┌─────┴─────┐
              ▼           ▼
             EC2       Fargate
```
一句话：

```text
ECS / EKS
回答：
“谁来编排？”

EC2 / Fargate
回答：
“容器在哪种 Compute 上运行？”
```
这是理解容器体系最重要的一张图。

---

### 6.9-ECR-+-ECS-+-Fargate-的完整关系

GlobalShop 的 Product Service：

```text
Developer
    │
    ▼
Source Code
    │
    ▼
Docker Build
    │
    ▼
Container Image
    │
    ▼
Amazon ECR
    │
    │ pull image
    ▼
Amazon ECS
    │
    │ schedule
    ▼
AWS Fargate
    │
    ▼
Product Container
```
分别解决：

```text
ECR
→ Image 存哪里

ECS
→ Container 怎么编排

Fargate
→ Container 底层 Compute 谁管理
```
---

## 7-★★★★★-Serverless与Lambda

### 7.1-★★★★★-Serverless

Serverless；  中文：无服务器架构 / 无服务器计算；再次强调：

```text
Serverless
不是没有服务器

而是：
开发者不再直接管理服务器
```
典型 Serverless 的特点：No Server Provisioning、Managed Scaling、Usage-based Billing、Event-driven Friendly、Higher Infrastructure Abstraction；在 CLF-C02 中最重要的两个方向：AWS Lambda、AWS Fargate；但二者运行模型不同：

```text
Lambda
→ Function

Fargate
→ Container
```
---

### 7.2-★★★★★-AWS-Lambda

[CURRENT-IN-SCOPE]；正式名称：AWS Lambda；Lambda 不是缩写。名称来自希腊字母：λ、Lambda；在计算机科学中，Lambda 常与函数、匿名函数等概念相关。因此 AWS Lambda 的命名和：Function Execution；非常契合。

---

### 7.3-Lambda-到底是什么？

AWS 当前将 Lambda 定义为：

> Serverless Compute Service

经典 CLF-C02 需要掌握的是 Lambda；Function：

> 你提供 Function Code，并把它连接到 Trigger；事件发生时 AWS Lambda 自动准备执行环境、运行代码并按需求扩展。

最简单：

```text
Event
  │
  ▼
Lambda；Function
  │
  ▼
Execute Code
  │
  ▼
Result
```
你不需要先：Launch EC2、Install Linux、Patch OS、Configure Auto Scaling Group、Manage Server Fleet

---

### 7.4-Function-是什么？

Function；  中文：函数；例如：resizeImage()、sendOrderEmail()、processPaymentEvent()、generateThumbnail()；Lambda 的思想是：

> 把一段业务逻辑作为独立可触发的计算单元运行。

例如：

```text
S3 上传图片
     │
     ▼
Lambda
     │
     ▼
生成缩略图
```
而不是：24 小时一直运行一台 EC2、等待“也许会发生”的图片上传

---

### 7.5-Event-Driven：事件驱动

Event；  中文：事件；例如：S3 Object Created、SQS Message Arrived、DynamoDB Item Changed、API Request、Scheduled Event；Event-Driven Architecture：

```text
某件事发生
   ↓
触发另外一个动作
```
例如：

```text
User uploads product image
          │
          ▼
         S3
          │ ObjectCreated Event
          ▼
       Lambda
          │
          ▼
Resize Image
          │
          ▼
         S3
```
这就是非常典型的 Lambda 使用方式。

---

### 7.6-★★★★-Lambda-Trigger

Trigger；  中文：触发器；它回答：

> 什么事情发生时，应该调用这个 Lambda；Function？

常见来源：API Gateway、S3、SQS、EventBridge、DynamoDB Streams、SNS；CLF-C02 不要求掌握每一种 Trigger 配置。但需要建立：

```text
Event Source
     ↓
Trigger
     ↓
Lambda
```
---

### 7.7-GlobalShop-中-Lambda-适合什么？

#### 7.7.1-场景-A：图片处理

```text
Merchant
   │ upload
   ▼
S3 Original Image
   │
   ▼
Lambda
   │
   ├── Resize
   ├── Compress
   └── Generate Thumbnail
```
---

#### 7.7.2-场景-B：异步订单处理

```text
Order Created
    │
    ▼
Event / Queue
    │
    ▼
Lambda
    │
    ├── Send Email
    ├── Update Analytics
    └── Notify Logistics
```
---

#### 7.7.3-场景-C：API

```text
Client
  │
  ▼
API Gateway
  │
  ▼
Lambda
  │
  ▼
DynamoDB
```
可以形成一套典型 Serverless API。

---

### 7.8-Lambda-不适合什么？

不能把 Lambda 理解为：所有程序都应该改成 Lambda；经典 Lambda；Function 更适合：Event-driven、Short-lived、Stateless-friendly、Burst Traffic、Automation、API Backend、Data Processing；如果应用：长期持续运行、需要完整 OS 控制、需要特殊系统软件、需要持续驻留进程、需要传统 Server Runtime；EC2 或 Container 往往更自然。

---

### 7.9-Stateless-是什么？

Stateless；  中文：无状态；意思不是：应用完全没有数据；而是：

> 不应该把关键业务状态依赖在某个具体计算实例的本地内存或临时磁盘中。

例如错误思路：

```text
Lambda A
Memory:
User Cart = ...
```
下一次请求可能由另一个执行环境处理。应该：

```text
Lambda
  │
  ├── DynamoDB
  ├── S3
  ├── RDS
  └── ElastiCache
```
把业务状态存到专门的数据服务中。这也是云原生应用很重要的设计思想。

---

### 7.10-Lambda-的自动扩展直觉

传统：

```text
Traffic ↑
   ↓
手动增加 Server
```
Auto Scaling：

```text
Traffic ↑
   ↓
增加 EC2
```
Lambda：

```text
Events ↑
   ↓
Lambda 自动增加执行并发
```
所以 Lambda 的计算粒度进一步从：Server；变成：Function Invocation

---

### 7.11-Lambda-的计费直觉

CLF 层面主要理解：Pay for Usage；而不是：必须 24x7 为一台 Server 付运行费；经典 Lambda；Function 通常围绕：Request / Invocation、+、Execution Duration / Allocated Resources；计费。具体价格、免费额度和区域价格会变化，不应死背静态数字。完整成本思想在 C2-15 统一处理。

---

### 7.12-Lambda-运行时间边界

经典 Lambda；Function 不是无限时长的传统服务器进程。当前 AWS Lambda；Functions 的单次 Invocation 有最大执行时长限制。CLF-C02 学习时最重要的不是死背所有 Limits，而是理解：

```text
Lambda
→ 有明确的 Function Invocation 生命周期

EC2
→ 可以长期运行 Server Process
```
如果题目写：long-running persistent server；不要条件反射选 Lambda。

---

### 7.13-【AWS-当前】【UPDATED】Lambda-产品已经继续扩展

截至本章编写时，AWS 当前 Lambda 文档已经把 Lambda 描述为包含不同 Serverless Compute Primitive，其中除传统 Lambda；Functions 外，还出现了 Lambda MicroVMs 等新的运行形态。但对本项目来说：CLF-C02 核心、+、719 题题库；仍然主要围绕经典：Lambda；Function、Event、Trigger、Serverless、Automatic Scaling、Pay-per-use；展开。

因此本章把 Lambda；Function 作为考试和基础架构学习主线。不要因为 AWS 产品继续演化，就把旧题里的：

```text
Lambda = Serverless Function
```
理解完全推翻。正确做法是区分：当前产品完整形态、vs、CLF-C02 核心考察抽象

---

## 8-★★★★★-计算模式与责任边界对比

### 8.1-Lambda-vs-Fargate

二者都常被称作 Serverless Compute。但运行单元不同。

| 对比 | AWS Lambda | AWS Fargate |
|---|---|---|
| 主要运行单元 | Function | Container |
| 典型模型 | Event-driven | Long-running Container / Service / Job |
| 需要 Container Image 吗 | 不一定 | 是 Container Workload |
| 是否自己管 Server | 否 | 否 |
| 编排 | Lambda 自身函数执行模型 | 通常配 ECS / EKS |
| 适合 | API、事件处理、自动化、短任务 | 容器服务、微服务、容器 Job |

一句话：

```text
想运行函数
→ Lambda

想运行容器但不管服务器
→ Fargate
```
---

### 8.2-EC2-vs-Fargate-vs-Lambda

可以用“你想控制到哪一层”理解。

```text
EC2
你管理：
OS
Runtime
Application
Scaling configuration
大量 Server Operations

Fargate
你管理：
Container Image
Application
Container-level configuration

Lambda
你管理：
Function Code
Application Logic
```
抽象程度：

```text
低                                              高
│                                                │
EC2 ───────── Container on EC2 ───── Fargate ─── Lambda
│                                                │
控制更多                                      管理更少
```
但不能理解成：

```text
抽象越高 = 永远越好
```
抽象越高通常意味着：更省运维；同时也可能意味着：运行模型约束更多、底层控制更少

---

### 8.3-Shared-Responsibility：管理责任如何上移？

这可以和 AWS Shared Responsibility Model 联系起来。

#### 8.3.1-自建机房

你管理：Physical Hardware、Hypervisor、OS、Runtime、Application、Data

---

#### 8.3.2-EC2

AWS 管：Physical Infrastructure、Hypervisor；你仍然管：Guest OS、Patch、Runtime、Application、Data

---

#### 8.3.3-Container-on-ECS-+-EC2

AWS / ECS 帮助管理：Container Orchestration Control；你仍管理：EC2 Fleet、OS、Container Image、Application

---

#### 8.3.4-ECS/EKS-+-Fargate

AWS 进一步管理：Server Fleet、Capacity、Host OS、Container Compute；你主要管理：Container、Application、Data、Permissions、Configuration

---

#### 8.3.5-Lambda

AWS 再进一步管理：Server、OS、Runtime Infrastructure、Scaling Infrastructure、Execution Environment；你主要关注：Function Code、Permissions、Application Configuration、Data；这就是：Higher-level Managed Service；带来的核心价值之一。

---

## 9-★★★★★-GlobalShop应用运行平台

### 9.1-Application-Platform：应用运行平台是什么？

Application Platform；  中文：应用运行平台；它位于：

```text
Application
      ↑
Platform
      ↑
Infrastructure
```
平台帮助你处理：Deployment、Runtime、Scaling、Health、Environment、Configuration；在 AWS 基础考试中，Elastic Beanstalk 是非常典型的 Managed Application Platform。

---

### 9.2-Elastic-Beanstalk-与本章的关系

Elastic Beanstalk 已在 C2-02 正式讲过。这里只把它放回 Compute 抽象层对比。

```text
EC2
→ “给我 Server”

ECS / EKS
→ “帮我编排 Container”

Fargate
→ “Container 要运行，但 Server 不想管”

Lambda
→ “我要运行 Function”

Elastic Beanstalk
→ “这是 Web Application，帮我建立常见运行环境”
```
Beanstalk 底层可能使用：EC2、Auto Scaling、Load Balancer、CloudWatch；它不是“另一种虚拟化技术”。而是更高层的应用部署与运行平台。

---

### 9.3-GlobalShop：什么时候用-ECS？

假设 GlobalShop 已经把业务拆成微服务：Product、Order、Inventory、Payment、Logistics；团队希望：使用 Docker、AWS 原生编排、不需要 Kubernetes 生态；可以考虑：

```text
                ALB
                 │
       ┌─────────┼─────────┐
       ▼         ▼         ▼
   ECS Service ECS Service ECS Service
    Product      Order      Inventory
       │          │          │
       └──────────┴──────────┘
                  │
              Fargate
```
---

### 9.4-GlobalShop：什么时候用-EKS？

如果平台团队已经统一使用 Kubernetes：Kubernetes YAML、Helm、GitOps、Kubernetes Operators；并希望在 AWS 继续使用同一套 Kubernetes 生态：

```text
               ALB
                │
                ▼
              EKS
                │
       ┌────────┼────────┐
       ▼        ▼        ▼
     Pod      Pod      Pod
   Product   Order   Inventory
```
这时 EKS 更自然。

---

### 9.5-GlobalShop：什么时候用-Lambda？

例如商品图片上传：

```text
Merchant
  │
  ▼
S3
  │ event
  ▼
Lambda
  │
  ├── Resize
  ├── Watermark
  └── Thumbnail
```
这是：事件来了才需要运行；不需要：24 小时保持一个 Server 进程等待

---

### 9.6-GlobalShop：现代系统往往不是“四选一”

真实系统常常同时存在：EC2、ECS、EKS、Fargate、Lambda；例如：

```text
GlobalShop
│
├── Legacy ERP
│   └── EC2
│
├── Product Microservices
│   └── ECS + Fargate
│
├── Data Platform
│   └── EKS
│
└── Event Processing
    └── Lambda
```
所以真正的问题不是：

> 哪个 AWS Compute 服务“最强”？

而是：

> 当前 Workload 的运行模型是什么？

---

## 10-★★★★★-工作负载与运行机制

### 10.1-★★★★★-Workload

Workload；  中文：工作负载；它是 AWS 文档和考试中极其常见的词。不是“员工工作量”。而是：

> 在计算系统中需要运行的一组应用、服务、任务和数据处理活动。

例如：Web Workload、Batch Workload、Database Workload、Container Workload、Machine Learning Workload；选择 AWS 服务，本质上是在问：这个 Workload、需要什么运行模型？

---

### 10.2-Runtime-是什么？

Runtime；  中文：运行时 / 运行环境；例如：Node.js Runtime、Java Runtime、Python Runtime、.NET Runtime；Application Code 不能凭空执行。它需要 Runtime。在不同 Compute 抽象中：

```text
EC2
你自己安装 Runtime

Container
Runtime 通常打进 Image

Lambda
使用 Lambda 支持的 Runtime 或自定义运行方式
```
---

### 10.3-Scheduling-是什么？

Scheduling；  中文：调度；这里不是：日历预约；而是：

> 决定某个 Workload 应该在哪个计算资源上运行。

例如：

```text
Task
  │
  ▼
Scheduler
  │
  ├── Node A：满
  ├── Node B：有资源
  └── Node C：不满足条件
  │
  ▼
Run on Node B
```
ECS / Kubernetes 都涉及 Scheduling。题目如果强调：container scheduling、cluster management；就已经进入 Container Orchestration 领域。

---

### 10.4-Scaling-在-Container-世界里有两层

很多初学者会把两层混在一起。

#### 10.4.1-第一层：Workload-Scaling

```text
Product Tasks:
10
↓
100
```
也就是 Container / Pod 副本增加。

---

#### 10.4.2-第二层：Compute-Capacity-Scaling

如果 Container 运行在 EC2：

```text
EC2 Nodes:
3
↓
20
```
这是底层 Capacity 增加。因此：Container 副本够不够；和：底层机器够不够；是两个不同问题。Fargate 的价值之一就是让客户少操心第二层。

---

### 10.5-Container-的状态与数据

Container 经常被设计成：Disposable、Replaceable、Stateless-friendly；即：

```text
坏了
↓
重建一个
```
所以关键业务数据通常不应该只存在 Container 本地临时文件里。更常见：

```text
Container
  │
  ├── S3
  ├── EFS
  ├── RDS
  ├── DynamoDB
  └── ElastiCache
```
下一章 C2-04 会正式进入 Storage。C2-05 会正式进入 Database / Cache。

---

## 11-★★★★★-高频服务对比与决策

### 11.1-ECR、S3-都能“存东西”，为什么不是一回事？

ECR：专门管理 Container Image；S3：通用 Object Storage；虽然 Container Image 底层也是一种数字数据，但架构语义不同。题目写：Docker images、OCI images、container registry；优先：ECR；题目写：object storage、backup、static assets、data lake；优先：S3

---

### 11.2-ECS、EKS-与-Elastic-Beanstalk-的区别

| 服务 | 你主要提交什么 | 平台核心 |
|---|---|---|
| Elastic Beanstalk | Application Code / Application Package | Managed Web App Environment |
| ECS | Container Workload | AWS-native Container Orchestration |
| EKS | Kubernetes Workload | Managed Kubernetes |
| Lambda | Function Code | Serverless Function |
| Fargate | Container Resource Requirements | Serverless Container Compute |

注意：Elastic Beanstalk 与 ECS/EKS 都可能最终运行 Web Application。但抽象和操作模型不同。

---

### 11.3-ECS、EKS-与-Batch-的区别

AWS Batch 已在 C2-02 介绍。Batch 解决：大量 Job、排队、调度、自动获得 Compute、运行完成后退出；ECS/EKS 解决更广义的：Container Orchestration；AWS Batch 自身也可以利用 Container Compute。因此：Batch、不等于、ECS；但底层技术可以组合。

---

### 11.4-高频英文词汇

| 英文 | 中文 | 本章含义 |
|---|---|---|
| Container | 容器 | 隔离的应用运行环境 |
| Image | 镜像 | 创建 Container 的模板 |
| Registry | 镜像注册表 | 存储和分发 Image |
| Orchestration | 编排 | 管理大量 Container |
| Cluster | 集群 | 一组共同工作的计算资源 |
| Node | 节点 | Cluster 中的计算节点 |
| Task | 任务 | ECS 中的运行单元 |
| Task Definition | 任务定义 | ECS Task 的运行说明 |
| Service | 服务 | ECS 中维持长期 Task 的逻辑对象 |
| Pod | Pod | Kubernetes 的重要调度单位 |
| Runtime | 运行时 | 代码执行环境 |
| Scheduling | 调度 | 决定 Workload 在哪里运行 |
| Trigger | 触发器 | 触发 Lambda 的事件来源 |
| Invocation | 调用 | 一次 Function 执行 |
| Stateless | 无状态 | 不依赖单一实例本地状态 |
| Serverless | 无服务器 | 客户不直接管理服务器 |
| Workload | 工作负载 | 需要运行的应用/任务集合 |

---

### 11.5-高频服务选择决策树

```text
我要运行应用
   │
   ├── 需要完整虚拟服务器控制？
   │      │
   │      └── 是 → EC2
   │
   ├── 已经 Containerized？
   │      │
   │      ├── Kubernetes？
   │      │      └── 是 → EKS
   │      │
   │      └── AWS 原生容器编排
   │             └── ECS
   │
   ├── Container 不想管理底层 Server？
   │      └── Fargate
   │
   ├── Event-driven Function？
   │      └── Lambda
   │
   └── 只是想快速部署常见 Web App Environment？
          └── Elastic Beanstalk
```
注意：ECS/EKS、与、Fargate、不是互斥关系；所以真正架构可能是：ECS + Fargate、EKS + Fargate

---

### 11.6-最容易混淆的五组关系

#### 11.6.1-ECR-vs-ECS

```text
ECR
存 Image

ECS
运行 / 编排 Container
```
---

#### 11.6.2-ECS-vs-EKS

```text
ECS
AWS-native container orchestration

EKS
Managed Kubernetes
```
---

#### 11.6.3-ECS-vs-Fargate

```text
ECS
Orchestrator

Fargate
Compute
```
---

#### 11.6.4-Lambda-vs-Fargate

```text
Lambda
Function

Fargate
Container
```
---

#### 11.6.5-EC2-vs-Container

```text
EC2
Machine-level compute

Container
Application-level packaging/runtime
```
Container 可以运行在 EC2 上。不是必须二选一。

---

### 11.7-719-题中常见的题目语言

看到下面这些词，应形成第一反应，但不要机械背答案。

#### 11.7.1-Docker-/-Container

Docker、containerized application、container image、container orchestration、cluster、scheduling；候选：ECR、ECS、EKS、Fargate

---

#### 11.7.2-Kubernetes

Kubernetes、K8s、managed Kubernetes；候选：EKS

---

#### 11.7.3-不想管理-Container-Server

without managing servers、without managing EC2 cluster、serverless containers；候选：Fargate

---

#### 11.7.4-Event-driven-Code

run code in response to events、without provisioning servers、event-driven、function；候选：Lambda

---

#### 11.7.5-Container-Image-Repository

store Docker images、container registry、OCI image；候选：ECR

---

## 12-★★★★★-GlobalShop架构与本章总结

### 12.1-本章最重要的-GlobalShop-架构

```text
                         Global Users
                              │
                              ▼
                         CloudFront
                              │
                              ▼
                            ALB
                              │
          ┌───────────────────┼───────────────────┐
          ▼                   ▼                   ▼
      ECS Service         EKS Workload        API Gateway
      Product API         Search Platform          │
          │                   │                    ▼
          ▼                   ▼                  Lambda
       Fargate            EC2 / Fargate        Event/API
          │                   │                    │
          └──────────────┬────┴──────────────┬────┘
                         │                   │
                         ▼                   ▼
                     RDS/DynamoDB           S3

Container Images:
Developer
   │
   ▼
Amazon ECR
   │
   ├──→ ECS
   └──→ EKS
```
横向支撑：IAM、KMS、CloudWatch、CloudTrail；后续章节会逐步把这些部分补齐。

---

### 12.2-本章最终必须记住的抽象层

```text
最底层控制更多
        │
        ▼
      EC2
        │
        ▼
Container on EC2
        │
        ▼
ECS / EKS + Fargate
        │
        ▼
      Lambda
        │
        ▼
更高层抽象、少管 Server
```
这不是严格的“技术先进度排名”。而是：Infrastructure Management Responsibility；逐步交给 AWS 的程度不同。

---

### 12.3-本章学习检查

如果下面问题能够自己回答，本章核心就已经掌握。

1. VM 和 Container 的主要区别是什么？

2. Container Image 和运行中的 Container 有什么区别？

3. ECR 为什么不是 Container Runtime？

4. ECS 和 EKS 都解决什么问题？

5. 为什么 Kubernetes 题通常想到 EKS？

6. Fargate 为什么不是 ECS 的同义词？

7. ECS + Fargate 是怎样组合的？

8. EKS + Fargate 又是什么关系？

9. Serverless 为什么不等于“没有服务器”？

10. Lambda 为什么适合 Event-driven Workload？

11. Lambda 与 Fargate 的运行单元有什么不同？

12. EC2、Container、Fargate、Lambda 的客户管理责任怎样逐步变化？

---

### 12.4-AWS-官方资料

当前 CLF-C02 考试范围：[AWS 官方：CLF-C02 In-Scope AWS Services](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html)；CLF-C02 Compute 考察要求：

[AWS 官方：CLF-C02 Domain 3 - Cloud Technology and Services](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02-domain3.html)；Amazon ECS：

[AWS 官方文档：What is Amazon Elastic Container Service?](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html)；Amazon ECR：

[AWS 官方文档：What is Amazon Elastic Container Registry?](https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html)；Amazon EKS：[AWS 官方文档：What is Amazon EKS?](https://docs.aws.amazon.com/eks/latest/userguide/)；Kubernetes Concepts：

[AWS 官方文档：Kubernetes concepts for Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/kubernetes-concepts.html)；AWS Fargate：[AWS 官方文档：AWS Fargate with Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/fargate.html)

AWS Lambda：[AWS 官方文档：What is AWS Lambda?](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)；Elastic Beanstalk：[AWS 官方文档：What is AWS Elastic Beanstalk?](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html)

---

### 12.5-下一章

现在计算层已经从：

```text
EC2
↓
Container
↓
ECS / EKS
↓
Fargate
↓
Lambda
```
建立起来。但应用一旦真正运行，就马上需要解决：文件放哪里？、系统盘放哪里？、多个 Server 如何共享文件？、图片、日志、备份放哪里？、数据需要保存多久？、低频数据如何降低成本？因此下一章进入：C2-04-存储体系.md；核心主线：

```text
Storage
│
├── Object Storage → S3
├── Block Storage  → EBS
├── File Storage   → EFS / FSx
├── Local Ephemeral Storage → Instance Store
├── Hybrid Storage → Storage Gateway
└── Backup → AWS Backup
```
