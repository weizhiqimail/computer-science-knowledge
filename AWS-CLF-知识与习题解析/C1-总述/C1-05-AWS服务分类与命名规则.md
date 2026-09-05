# C1-05-AWS服务分类与命名规则

## 1-为什么-AWS-名字看起来这么乱？

AWS 产品名主要有三种形式：

```text
Amazon + 产品名

AWS + 产品名

单独品牌词
```
例如：

```text
Amazon EC2
Amazon S3
Amazon RDS
Amazon DynamoDB

AWS Lambda
AWS CloudFormation
AWS CloudTrail
AWS Config

Amazon Aurora
Amazon Athena
Amazon Redshift
```
这些名称不能简单认为：

> 带 Amazon 就是一类，带 AWS 就是另一类。

对于备考来说，最重要的是理解服务本身。

---

## 2-缩写型服务

一部分服务名由完整英文缩写而来。

---

### 2.1-★★★★★-EC2

**Amazon Elastic Compute Cloud**

```text
Elastic
弹性的

Compute
计算

Cloud
云
```
为什么是 `2`？因为：Compute、Cloud；两个单词都以 C 开头：

```text
EC²
→ EC2
```
---

### 2.2-★★★★★-S3

**Amazon Simple；Storage；Service**；三个 S：

```text
Simple
Storage
Service

S × 3
→ S3
```
---

### 2.3-★★★★★-RDS

**Amazon Relational Database Service**

```text
Relational
关系型

Database
数据库

Service
服务
```
---

### 2.4-★★★★-EBS

**Amazon Elastic Block Store**

```text
Elastic
弹性

Block
块

Store
存储
```
Block Storage：**块存储**

---

### 2.5-★★★-EFS

**Amazon Elastic File System**

```text
Elastic
弹性

File System
文件系统
```
---

### 2.6-★★★★★-VPC

**Amazon Virtual Private Cloud**

```text
Virtual
虚拟

Private
私有

Cloud
云
```
中文通常称：**虚拟私有云**；实际上学习时可以理解：

> 你在 AWS 中划出的逻辑隔离网络环境。

---

### 2.7-★★★★★-IAM

**AWS Identity and Access Management**

```text
Identity
身份

Access
访问

Management
管理
```
中文：**身份与访问管理**

---

### 2.8-★★★★-KMS

**AWS Key Management Service**；这里：Key；是：**Encryption Key，加密密钥**；不是：Primary Key、数据库主键

---

### 2.9-★★★★-SQS

**Amazon Simple Queue Service**；Queue、队列；；；；中文：**简单队列服务**

---

### 2.10-★★★-SNS

**Amazon Simple Notification Service**；Notification、通知；；；；中文：**简单通知服务**

---

### 2.11-★★★-ECS

**Amazon Elastic Container Service**；；；；中文：**弹性容器服务**

---

### 2.12-★★★-EKS

**Amazon Elastic Kubernetes Service**；Kubernetes：容器编排平台。

---

### 2.13-★★★-ECR

**Amazon Elastic Container Registry**；Registry：**镜像注册表 / 镜像仓库**；保存 Container Image。

---

### 2.14-★★★-DMS

**AWS Database Migration Service**；；；；中文：**数据库迁移服务**

---

### 2.15-★★-SCT

**AWS Schema Conversion Tool**

```text
Schema
数据库模式

Conversion
转换
```
数据库引擎迁移时帮助转换 Schema。

---

### 2.16-★★★-ACM

**AWS Certificate Manager**；Certificate：**数字证书**；主要与 HTTPS / TLS 证书相关。

---

### 2.17-★★★-RAM

**AWS Resource Access Manager**；注意：这里的 RAM 不是：Random Access Memory、随机存取存储器；而是：Resource Access Manager、资源访问管理器；所以必须结合 AWS 名称判断。

---

## 3-★★★★★-名称中经常出现的-Elastic

Elastic：**弹性的**；AWS 中到处出现：Elastic Compute Cloud、Elastic Block Store、Elastic File System、Elastic Load Balancing、Elastic Container Service、Elastic Kubernetes Service；它背后的 Cloud 思想是：

> 资源能够根据需求扩展、缩减或灵活配置。

但不能机械认为：

> 名字里有 Elastic = 一定自动扩容。

例如：EBS；名字里有 Elastic，但不代表任何 EBS Volume 自动随着 CPU 扩大。

---

## 4-Simple

例如：

```text
Simple；Storage；Service
S3

Simple Queue Service
SQS

Simple Notification Service
SNS

Simple Email Service
SES
```
这里 Simple 更多是产品命名传统。不能据此推导：

> 功能简单，所以不适合企业。

S3、SQS 都是非常核心的云基础服务。

---

## 5-★★★★-Managed

**Managed Service**；；；；中文：**托管服务**；这是 AWS 最重要的词之一。传统：

```text
自己安装MySQL
↓
自己管理服务器
自己Patch
自己备份
自己处理硬件
```
Managed Database：

```text
使用RDS

底层大量数据库基础设施工作
由AWS承担
```
注意：

> Managed 不等于“客户什么都不用负责”。

权限、数据、数据库设计等责任仍可能属于客户。

---

## 6-Fully-Managed

**Fully Managed**；；；；中文：**完全托管**；通常强调：

> AWS 进一步承担底层基础设施运维。

但是依然不能理解为：

> 客户没有任何责任。

例如：DynamoDB、Fully Managed；客户仍然要管理：谁能访问 Table、应用如何使用数据、权限策略；题库第 5 题就直接考客户对 DynamoDB Table Access 的责任。

---

## 7-★★★★★-Serverless

**Serverless**；；；；中文：**无服务器**；含义：

> 用户不直接配置和管理底层服务器。

不是：

> 没有服务器。

典型：

```text
Lambda

DynamoDB

Athena
```
都具有 Serverless 特征。当前 CLF-C02 官方甚至单独将 Fargate 与 Lambda 放在 Serverless 类别中。([AWS Documentation](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/clf-02-in-scope-services.html))

---

## 8-★★★★★-Instance

**Instance**；；；；中文：**实例**；AWS 中经常说：EC2 Instance、RDS DB Instance；Instance 可以理解为：

> 某个服务实际创建出来并运行的一个具体资源实例。

例如：

```text
EC2
服务

↓

i-012345...
EC2 Instance
具体的一台云服务器实例
```
---

## 9-★★★★★-Resource

**Resource**；；；；中文：**资源**；AWS 中的：EC2 Instance、S3 Bucket、RDS Database、VPC、Security Group、Lambda Function；都可以被笼统称为：**AWS Resources**

---

## 10-★★★★★-Workload

**Workload**；中文常译：**工作负载**；这个中文很容易让初学者觉得抽象。它其实可以理解为：

> 为实现某个业务目的而运行的一组应用、服务、数据和基础设施。

例如：GlobalShop Order System；整个订单系统可以被称为：Order workload；AWS Well-Architected 经常使用这个词。

---

## 11-★★★★★-Gateway

**Gateway**；；；；中文：**网关**；最原始的概念：

> 两个不同网络、系统或边界之间的“入口/出口/中转点”。

所以 AWS 有大量 Gateway：Internet Gateway、NAT Gateway、Transit Gateway、Storage Gateway、API Gateway、Virtual Private Gateway；它们共同只有一个抽象：

> 都在某种边界之间提供连接/转发能力。

但业务完全不同：

```text
Internet Gateway
VPC ↔ Internet

NAT Gateway
Private Subnet → Internet

Transit Gateway
多VPC / On-Prem 中央网络Hub

Storage Gateway
On-Prem Storage ↔ AWS Storage

API Gateway
Client ↔ Backend API
```
后续网络章节会完全拆解。

---

## 12-★★★★-Endpoint

**Endpoint**；；；；中文：**端点**；可以理解：

> 网络通信所要连接的一个目标入口。

比如：

```text
API Endpoint
API访问地址

VPC Endpoint
VPC中的私有访问入口
```
考试中：VPC Endpoint；尤其重要。

---

## 13-★★★★★-Region

**Region**；；；；中文：**区域**；AWS 中是一个独立地理区域。例如：Asia Pacific (Tokyo)、ap-northeast-1

---

## 14-★★★★★-Availability-Zone

简称：**AZ**；；；；中文：**可用区**AWS 官方定义一个 AZ 可以由一个或多个独立数据中心组成。([AWS Documentation](https://docs.aws.amazon.com/global-infrastructure/latest/regions/aws-regions-availability-zones.html?utm_source=chatgpt.com))所以：

```text
Tokyo
不是AZ

Tokyo
是Region
```
Region 内部才有多个 AZ。

---

## 15-Zone

**Zone**；；；；中文：**区域 / 分区**；AWS 中不同的 Zone 不一定代表同一种东西：Availability Zone、Local Zone、Wavelength Zone；所以看到 Zone 不能直接翻译完就结束，需要看前面的限定词。

---

## 16-★★★-Cluster

**Cluster**；；；；中文：**集群**；多个计算节点、数据库节点或其他资源组合成一个逻辑整体。例如：EKS Cluster；不能把 Cluster 简单理解成“一台服务器”。

---

## 17-★★★★★-Bucket

S3 中：**Bucket**；中文常译：**桶 / 存储桶**；可以理解为 S3 Object 的顶层容器。

```text
Bucket
│
├── image1.jpg
├── video1.mp4
└── logs/...
```
---

## 18-★★★★★-Object

**Object**；；；；中文：**对象**；S3 中的数据基本单位。一个 Object 大致包含：

```text
Data
实际数据

Metadata
元数据

Key
对象标识
```
所以 S3 叫：**Object Storage**；对象存储。

---

## 19-★★★★-Volume

**Volume**；；；；中文：**卷**；EBS 中：EBS Volume；可以先理解成：

> 一块逻辑云磁盘。

---

## 20-★★★★-Snapshot

**Snapshot**；；；；中文：**快照**；用于记录某个时间点的数据状态。最经典：

```text
EBS Volume
   │
   ▼
EBS Snapshot
```
用于备份和恢复。

---

## 21-★★★★★-Policy

**Policy**；；；；中文：**策略**；AWS IAM 中 Policy 用于表达：谁、是否允许、执行什么Action、访问什么Resource、满足什么Condition；不是公司员工手册意义上的普通 Policy。

---

## 22-★★★★★-Role

**Role**；；；；中文：**角色**；IAM Role 不是：

> “职位名称”。

而是：

> 一个可以被人、AWS Service 或其他身份临时承担的权限身份。

这是以后 IAM 最核心的概念之一。

---

## 23-★★★-Principal

**Principal**；；；；中文：**主体**；在 AWS Security 中表示：

> 谁在发起请求。

可能是：IAM User、IAM Role、AWS Service、Federated User

---

## 24-★★★★★-Authentication-与-Authorization

极容易混。

### 24.1-Authentication

中文：**身份认证**；回答：

> 你是谁？

例如：Password、MFA

---

### 24.2-Authorization

中文：**授权**；回答：

> 你允许做什么？

例如：

```text
User Alice
已登录

但：
能不能删除S3？
```
这是 Authorization。

---

## 25-★★★★-Encryption

**Encryption**；；；；中文：**加密**；两个高频短语：

### 25.1-Encryption-at-Rest

**静态数据加密 / 静态加密**；数据存着的时候加密。

### 25.2-Encryption-in-Transit

**传输中加密**；数据在网络传输的时候加密。

---

## 26-★★★★-Latency

**Latency**；；；；中文：**延迟**；通常表示一次通信/请求需要多久。例如：

```text
Japan User
→ Tokyo

通常比：

Japan User
→ Virginia
```
有更低的网络传播延迟。

---

## 27-★★★-Throughput

**Throughput**；；；；中文：**吞吐量**；不是“一个请求有多快”。而更接近：

> 单位时间可以处理/传输多少数据。

例如：GB/s、requests/second

---

## 28-★★★★★-Availability、Reliability、Durability

三者不要混。

### 28.1-Availability

**可用性**；系统现在能不能正常提供服务。

---

### 28.2-Reliability

**可靠性**；系统能够持续按预期正确工作的能力。

---

### 28.3-Durability

**持久性 / 数据耐久性**；更多关心：

> 数据会不会丢。

S3 中经常出现 Durability。

---

## 29-Scalability-与-Elasticity

再次统一：

```text
Scalability
可扩展性
→ 能不能承受更大规模

Elasticity
弹性
→ 能不能随需求动态扩大和缩小
```
---

## 30-★★★★★-API

**API = Application Programming Interface**；；；；中文：**应用程序编程接口**；AWS 的所有资源并不是只有 Console 能操作。实际上可以：Management Console、CLI、SDK、API；来调用 AWS 能力。

---

## 31-★★★-CLI

**CLI = Command Line Interface**；；；；中文：**命令行界面**；AWS CLI：**AWS Command Line Interface**；通过命令操作 AWS。

---

## 32-★★★-SDK

**SDK = Software Development Kit**；；；；中文：**软件开发工具包**；例如：AWS SDK for JavaScript、AWS SDK for Java、AWS SDK for Python；允许程序调用 AWS API。

---

## 33-★★★★-IaC

**IaC = Infrastructure as Code**；；；；中文：**基础设施即代码**；核心思想：

```text
基础设施
不要只靠人手点Console

↓

写成代码 / Template
```
AWS 代表：**CloudFormation**

---

## 34-本章小结

AWS 名字表面很多，真正需要熟悉的是一套反复出现的语言：

```text
Elastic
Managed
Serverless
Instance
Resource
Workload
Gateway
Endpoint
Region
Zone
Cluster
Bucket
Object
Volume
Snapshot
Policy
Role
Authentication
Authorization
Encryption
Latency
Scalability
Elasticity
API
CLI
SDK
IaC
```
一旦这些基础词真正理解，后续服务名会容易很多。
