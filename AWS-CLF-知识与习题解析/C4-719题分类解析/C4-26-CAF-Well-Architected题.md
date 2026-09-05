# C4-26-CAF-Well-Architected题

> 资料口径：本模块以用户提供的 719 道 CLF-C02 题库与前序 C1/C2 项目资料为基础。题库的 `correct_answer`、社区投票与评论用于发现考点和争议，不自动等于当前 AWS 官方结论；本模块没有在生成过程中擅自用外部常识覆盖题库内容。凡现有项目已经明确标记为 `[UPDATED]`、`[LEGACY]`、`[CURRENT-OUT-OF-SCOPE]` 的内容，会继续保留这些状态提示。正式考试前，涉及当前产品状态和 Support 计划等时效信息仍应再对照 AWS 官方页面。

本文件共收录 **56** 道主分类题。范围：AWS CAF、Well-Architected、Pillars、Perspectives、云采用与架构方法论。

> 注意：这里的“正确”指题库 `correct_answer` 记录。若题目存在明显争议/历史差异，会明确标记并同时收入 C4-27。
## Q6-CAF-Well-Architected题

**题目：** Which option is a perspective that includes foundational capabilities of the AWS Cloud Adoption Framework (AWS CAF)?

**选项：**

- A. Sustainability
- B. Performance efficiency
- C. Governance
- D. Reliability

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `C`
**需求/考点标签：** 组织云采用准备度
**社区投票：** C 100%

### Q6.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q6.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Sustainability | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Performance efficiency | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Governance | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Reliability | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q6.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q6.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q23-CAF-Well-Architected题

**题目：** A company wants to protect its AWS Cloud information, systems, and assets while performing risk assessment and mitigation tasks. Which pillar of the AWS Well-Architected Framework is supported by these goals?

**选项：**

- A. Reliability
- B. Security
- C. Operational excellence
- D. Performance efficiency

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `B`
**需求/考点标签：** 工作负载架构评审
**社区投票：** B 100%

### Q23.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q23.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Reliability | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Security | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Operational excellence | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Performance efficiency | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q23.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q25-CAF-Well-Architected题

**题目：** A company is running a monolithic on-premises application that does not scale and is difficult to maintain. The company has a plan to migrate the application to AWS and divide the application into microservices. Which best practice of the AWS Well-Architected Framework is the company following with this plan?

**选项：**

- A. Integrate functional testing as part of AWS deployment.
- B. Use automation to deploy changes.
- C. Deploy the application to multiple locations.
- D. Implement loosely coupled dependencies.

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `D`
**需求/考点标签：** 工作负载架构评审
**社区投票：** D 100%

### Q25.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q25.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Integrate functional testing as part of AWS deployment. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Use automation to deploy changes. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Deploy the application to multiple locations. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Implement loosely coupled dependencies. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q25.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q30-CAF-Well-Architected题

**题目：** Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)

**选项：**

- A. Availability
- B. Reliability
- C. Scalability
- D. Responsive design
- E. Operational excellence

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `BE`
**需求/考点标签：** 工作负载架构评审
**社区投票：** BE 100%

### Q30.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q30.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Availability | 高可用关注组件故障时尽量维持服务可用。 | 题库记录为非正确选项 |
| B | Reliability | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Scalability | 可扩展性关注系统承载更大规模工作负载的能力。 | 题库记录为非正确选项 |
| D | Responsive design | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| E | Operational excellence | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q30.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q45-CAF-Well-Architected题

**题目：** Which AWS Cloud Adoption Framework (AWS CAF) capability belongs to the people perspective?

**选项：**

- A. Data architecture
- B. Event management
- C. Cloud fluency
- D. Strategic partnership

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `C`
**需求/考点标签：** 组织云采用准备度
**社区投票：** C 100%

### Q45.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q45.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Data architecture | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Event management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Cloud fluency | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Strategic partnership | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q45.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q93-CAF-Well-Architected题

**题目：** Which of the following is a recommended design principle of the AWS Well-Architected Framework?

**选项：**

- A. Reduce downtime by making infrastructure changes infrequently and in large increments.
- B. Invest the time to configure infrastructure manually.
- C. Learn to improve from operational failures.
- D. Use monolithic application design for centralization.

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `C`
**需求/考点标签：** 工作负载架构评审
**社区投票：** C 100%

### Q93.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q93.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Reduce downtime by making infrastructure changes infrequently and in large increments. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Invest the time to configure infrastructure manually. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Learn to improve from operational failures. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Use monolithic application design for centralization. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q93.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q101-CAF-Well-Architected题

**题目：** Which option is an AWS Cloud Adoption Framework (AWS CAF) platform perspective capability?

**选项：**

- A. Data architecture
- B. Data protection
- C. Data governance
- D. Data science

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `A`
**需求/考点标签：** 组织云采用准备度
**社区投票：** A 79%, C 20%

### Q101.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q101.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Data architecture | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Data protection | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Data governance | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Data science | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q101.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q114-CAF-Well-Architected题

**题目：** A company is planning its migration to the AWS Cloud. The company is identifying its capability gaps by using the AWS Cloud Adoption Framework (AWS CAF) perspectives. Which phase of the cloud transformation journey includes these identification activities?

**选项：**

- A. Envision
- B. Align
- C. Scale
- D. Launch

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `B`
**需求/考点标签：** 组织云采用准备度
**社区投票：** B 83%, A 17%

### Q114.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q114.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Envision | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Align | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Scale | 可扩展性关注系统承载更大规模工作负载的能力。 | 题库记录为非正确选项 |
| D | Launch | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q114.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q127-CAF-Well-Architected题

**题目：** Which perspective in the AWS Cloud Adoption Framework (AWS CAF) includes capabilities for configuration management and patch management?

**选项：**

- A. Platform
- B. Operations
- C. Security
- D. Governance

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `B`
**需求/考点标签：** 组织云采用准备度
**社区投票：** B 100%

### Q127.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q127.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Platform | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Operations | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Security | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Governance | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q127.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q134-CAF-Well-Architected题

**题目：** Which option is an AWS Cloud Adoption Framework (AWS CAF) business perspective capability?

**选项：**

- A. Culture evolution
- B. Event management
- C. Data monetization
- D. Platform architecture

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `C`
**需求/考点标签：** 组织云采用准备度
**社区投票：** C 88%, A 12%

### Q134.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q134.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Culture evolution | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Event management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Data monetization | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Platform architecture | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q134.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q137-CAF-Well-Architected题

**题目：** Which options are AWS Cloud Adoption Framework (AWS CAF) security perspective capabilities? (Choose two.)

**选项：**

- A. Observability
- B. Incident and problem management
- C. Incident response
- D. Infrastructure protection
- E. Availability and continuity

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `CD`
**需求/考点标签：** 组织云采用准备度
**社区投票：** CD 100%

### Q137.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q137.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Observability | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Incident and problem management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Incident response | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Infrastructure protection | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| E | Availability and continuity | 高可用关注组件故障时尽量维持服务可用。 | 题库记录为非正确选项 |

### Q137.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q142-CAF-Well-Architected题

**题目：** A company plans to migrate to the AWS Cloud. The company wants to use the AWS Cloud Adoption Framework (AWS CAF) to define and track business outcomes as part of its cloud transformation journey. Which AWS CAF governance perspective capability will meet these requirements?

**选项：**

- A. Benefits management
- B. Risk management
- C. Application portfolio management
- D. Cloud financial management

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `A`
**需求/考点标签：** 组织云采用准备度
**社区投票：** A 76%, C 18%, D 6%

### Q142.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q142.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Benefits management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Risk management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Application portfolio management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Cloud financial management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q142.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q145-CAF-Well-Architected题

**题目：** Which cloud transformation journey phase of the AWS Cloud Adoption Framework (AWS CAF) focuses on demonstrating how the cloud helps accelerate business outcomes?

**选项：**

- A. Scale
- B. Envision
- C. Align
- D. Launch

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `B`
**需求/考点标签：** 组织云采用准备度
**社区投票：** B 100%

### Q145.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q145.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Scale | 可扩展性关注系统承载更大规模工作负载的能力。 | 题库记录为非正确选项 |
| B | Envision | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Align | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Launch | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q145.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q164-CAF-Well-Architected题

**题目：** Which pillar of the AWS Well-Architected Framework refers to the ability of a system to recover from infrastructure or service disruptions and dynamically acquire computing resources to meet demand?

**选项：**

- A. Security
- B. Reliability
- C. Performance efficiency
- D. Cost optimization

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `B`
**需求/考点标签：** 工作负载架构评审
**社区投票：** B 100%

### Q164.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q164.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Security | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Reliability | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Performance efficiency | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Cost optimization | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q164.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q178-CAF-Well-Architected题

**题目：** A company is planning to migrate its application to the AWS Cloud. Which AWS tool or set of resources should the company use to analyze and assess its readiness for migration?

**选项：**

- A. AWS Cloud Adoption Framework (AWS CAF)
- B. AWS Pricing Calculator
- C. AWS Well-Architected Framework
- D. AWS Budgets

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `A`
**需求/考点标签：** 组织云采用准备度
**社区投票：** A 79%, C 21%

### Q178.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q178.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Cloud Adoption Framework (AWS CAF) | AWS CAF：帮助组织规划和推进云采用与业务/组织转型，包含六个 Perspectives。 | 题库记录为正确选项 |
| B | AWS Pricing Calculator | AWS Pricing Calculator：部署前估算计划架构成本。 | 题库记录为非正确选项 |
| C | AWS Well-Architected Framework | AWS Well-Architected Framework：以六大 Pillars 评估和设计安全、可靠、高效、成本优化、可持续的 Workload。 | 题库记录为非正确选项 |
| D | AWS Budgets | AWS Budgets：设置成本/用量预算阈值和告警。 | 题库记录为非正确选项 |

### Q178.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CAF：帮助组织规划和推进云采用与业务/组织转型，包含六个 Perspectives。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q185-CAF-Well-Architected题

**题目：** Which design principles support the reliability pillar of the AWS Well-Architected Framework? (Choose two.)

**选项：**

- A. Perform operations as code.
- B. Enable traceability.
- C. Automatically scale to meet demand.
- D. Deploy resources globally to improve response time.
- E. Automatically recover from failure.

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `CE`
**需求/考点标签：** 工作负载架构评审
**社区投票：** CE 73%, AE 27%

### Q185.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q185.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Perform operations as code. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Enable traceability. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Automatically scale to meet demand. | 可扩展性关注系统承载更大规模工作负载的能力。 | 题库记录为正确选项 |
| D | Deploy resources globally to improve response time. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| E | Automatically recover from failure. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q185.3-为什么题库会这样选

题库记录的正确选项定位为：可扩展性关注系统承载更大规模工作负载的能力。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q257-CAF-Well-Architected题

**题目：** A company wants to monitor its workload performance. The company wants to ensure that the cloud services are delivered at a level that meets its business needs. Which AWS Cloud Adoption Framework (AWS CAF) perspective will meet these requirements?

**选项：**

- A. Business
- B. Governance
- C. Platform
- D. Operations

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `D`
**需求/考点标签：** 组织云采用准备度
**社区投票：** D 93%, A 7%

### Q257.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q257.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Business | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Governance | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Platform | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Operations | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q257.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q258-CAF-Well-Architected题

**题目：** A company wants to migrate its applications to the AWS Cloud. The company plans to identify and prioritize any business transformation opportunities and evaluate its AWS Cloud readiness. Which AWS service or tool should the company use to meet these requirements?

**选项：**

- A. AWS Cloud Adoption Framework (AWS CAF)
- B. AWS Managed Services (AMS)
- C. AWS Well-Architected Framework
- D. AWS Migration Hub

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `A`
**需求/考点标签：** 组织云采用准备度
**社区投票：** A 100%

### Q258.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q258.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS Cloud Adoption Framework (AWS CAF) | AWS CAF：帮助组织规划和推进云采用与业务/组织转型，包含六个 Perspectives。 | 题库记录为正确选项 |
| B | AWS Managed Services (AMS) | 该选项描述 Shared Responsibility 中 AWS 侧的基础设施责任。 | 题库记录为非正确选项 |
| C | AWS Well-Architected Framework | AWS Well-Architected Framework：以六大 Pillars 评估和设计安全、可靠、高效、成本优化、可持续的 Workload。 | 题库记录为非正确选项 |
| D | AWS Migration Hub | AWS Migration Hub：集中跟踪多个迁移工具和应用迁移进度。 | 题库记录为非正确选项 |

### Q258.3-为什么题库会这样选

题库记录的正确选项定位为：AWS CAF：帮助组织规划和推进云采用与业务/组织转型，包含六个 Perspectives。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q261-CAF-Well-Architected题

**题目：** A company wants to set up its workloads to perform their intended functions and recover quickly from failure. Which pillar of the AWS Well-Architected Framework aligns with these goals?

**选项：**

- A. Performance efficiency
- B. Sustainability
- C. Reliability
- D. Security

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `C`
**需求/考点标签：** 工作负载架构评审
**社区投票：** C 96%

### Q261.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q261.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Performance efficiency | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Sustainability | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Reliability | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Security | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q261.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q268-CAF-Well-Architected题

**题目：** Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)

**选项：**

- A. High availability
- B. Performance efficiency
- C. Cost optimization
- D. Going global in minutes
- E. Continuous development

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `B`
**需求/考点标签：** 工作负载架构评审
**社区投票：** B 65%, C 23%, A 13%

### Q268.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q268.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | High availability | 高可用关注组件故障时尽量维持服务可用。 | 题库记录为非正确选项 |
| B | Performance efficiency | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Cost optimization | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Going global in minutes | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| E | Continuous development | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q268.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q268.4-⚠-争议/版本提示

- 题干要求选择 2 项，但题库 correct_answer 记录为 `B`
- 社区投票分散，最高项仅 65%
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q277-CAF-Well-Architected题

**题目：** Which of the following is an AWS Well-Architected Framework design principle for operational excellence in the AWS Cloud?

**选项：**

- A. Go global in minutes.
- B. Make frequent, small, reversible changes.
- C. Implement a strong foundation of identity and access management
- D. Stop spending money on hardware infrastructure for data center operations.

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `B`
**需求/考点标签：** 工作负载架构评审
**社区投票：** B 100%

### Q277.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q277.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Go global in minutes. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Make frequent, small, reversible changes. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Implement a strong foundation of identity and access management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Stop spending money on hardware infrastructure for data center operations. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q277.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q285-CAF-Well-Architected题

**题目：** A company wants to run its workloads in the AWS Cloud effectively, reduce management overhead, and improve processes. Which AWS Well-Architected Framework pillar represents these requirements?

**选项：**

- A. Reliability
- B. Operational excellence
- C. Performance efficiency
- D. Cost optimization

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `B`
**需求/考点标签：** 工作负载架构评审
**社区投票：** B 100%

### Q285.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q285.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Reliability | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Operational excellence | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Performance efficiency | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Cost optimization | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q285.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q292-CAF-Well-Architected题

**题目：** Which capabilities are in the platform perspective of the AWS Cloud Adoption Framework (AWS CAF)? (Choose two.)

**选项：**

- A. Performance and capacity management
- B. Data engineering
- C. Continuous integration and continuous delivery (CI/CD)
- D. Infrastructure protection
- E. Change and release management

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `BC`
**需求/考点标签：** 组织云采用准备度
**社区投票：** BC 72%, AD 12%, Other 16%

### Q292.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q292.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Performance and capacity management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Data engineering | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Continuous integration and continuous delivery (CI/CD) | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Infrastructure protection | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| E | Change and release management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q292.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q292.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q295-CAF-Well-Architected题

**题目：** Which options are AWS Cloud Adoption Framework (AWS CAF) security perspective capabilities? (Choose two.)

**选项：**

- A. Observability
- B. Incident and problem management
- C. Incident response
- D. Infrastructure protection
- E. Availability and continuity

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `CD`
**需求/考点标签：** 组织云采用准备度
**社区投票：** CD 88%, Other 12%

### Q295.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q295.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Observability | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Incident and problem management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Incident response | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Infrastructure protection | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| E | Availability and continuity | 高可用关注组件故障时尽量维持服务可用。 | 题库记录为非正确选项 |

### Q295.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q303-CAF-Well-Architected题

**题目：** A company's application developers need to quickly provision and manage AWS services by using scripts. Which AWS offering should the developers use to meet these requirements?

**选项：**

- A. AWS CLI
- B. AWS CodeBuild
- C. AWS Cloud Adoption Framework (AWS CAF)
- D. AWS Systems Manager Session Manager

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `A`
**社区投票：** A 100%

### Q303.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q303.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | AWS CLI | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | AWS CodeBuild | AWS CodeBuild：托管代码构建与测试服务。 | 题库记录为非正确选项 |
| C | AWS Cloud Adoption Framework (AWS CAF) | AWS CAF：帮助组织规划和推进云采用与业务/组织转型，包含六个 Perspectives。 | 题库记录为非正确选项 |
| D | AWS Systems Manager Session Manager | AWS Systems Manager：集中运维和自动化管理 AWS/混合环境中的节点与资源。 | 题库记录为非正确选项 |

### Q303.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q315-CAF-Well-Architected题

**题目：** A company wants to transform its workforce by attracting and developing a digitally fluent high-performance workforce. The company wants to attract a diverse and inclusive workforce with appropriate mix of technical and non-technical skills. Which AWS Cloud Adoption Framework (AWS CAF) perspective will meet these requirements?

**选项：**

- A. Business
- B. People
- C. Platform
- D. Operations

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `B`
**需求/考点标签：** 组织云采用准备度
**社区投票：** B 100%

### Q315.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q315.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Business | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | People | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Platform | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Operations | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q315.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q325-CAF-Well-Architected题

**题目：** A company is migrating to the AWS Cloud. The company wants to understand and identify potential security misconfigurations or unexpected behaviors. The company wants to prioritize any protective controls it might need. Which AWS Cloud Adoption Framework (AWS CAF) security perspective capability will meet these requirements?

**选项：**

- A. Identity and access management
- B. Threat detection
- C. Platform engineering
- D. Availability and continuity management

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `B`
**需求/考点标签：** 组织云采用准备度
**社区投票：** B 100%

### Q325.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q325.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Identity and access management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Threat detection | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Platform engineering | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Availability and continuity management | 高可用关注组件故障时尽量维持服务可用。 | 题库记录为非正确选项 |

### Q325.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q335-CAF-Well-Architected题

**题目：** Which options are AWS Cloud Adoption Framework (AWS CAF) cloud transformation journey recommendations? (Choose two.)

**选项：**

- A. Envision phase
- B. Align phase
- C. Assess phase
- D. Mobilize phase
- E. Migrate and modernize phase

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `AB`
**需求/考点标签：** 组织云采用准备度
**社区投票：** AB 72%, AD 28%

### Q335.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q335.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Envision phase | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Align phase | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Assess phase | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Mobilize phase | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| E | Migrate and modernize phase | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q335.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q337-CAF-Well-Architected题

**题目：** A company is designing its AWS workloads so that components can be updated regularly and so that changes can be made in small, reversible increments. Which pillar of the AWS Well-Architected Framework does this design support?

**选项：**

- A. Security
- B. Performance efficiency
- C. Operational excellence
- D. Reliability

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `C`
**需求/考点标签：** 工作负载架构评审
**社区投票：** C 100%

### Q337.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q337.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Security | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Performance efficiency | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Operational excellence | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Reliability | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q337.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q344-CAF-Well-Architected题

**题目：** Which options are AWS Cloud Adoption Framework (AWS CAF) governance perspective capabilities? (Choose two.)

**选项：**

- A. Identity and access management
- B. Cloud financial management
- C. Application portfolio management
- D. Innovation management
- E. Product management

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `BC`
**需求/考点标签：** 组织云采用准备度
**社区投票：** BC 78%, AB 22%

### Q344.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q344.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Identity and access management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Cloud financial management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Application portfolio management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Innovation management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| E | Product management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q344.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q354-CAF-Well-Architected题

**题目：** Which guideline is a well-architected design principle for building cloud applications?

**选项：**

- A. Keep static data closer to compute resources.
- B. Provision resources for peak capacity.
- C. Design for automated recovery from failure.
- D. Use tightly coupled components.

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `C`
**需求/考点标签：** 工作负载架构评审
**社区投票：** C 100%

### Q354.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q354.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Keep static data closer to compute resources. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Provision resources for peak capacity. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Design for automated recovery from failure. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Use tightly coupled components. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q354.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q356-CAF-Well-Architected题

**题目：** Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)

**选项：**

- A. Resource scalability
- B. Performance efficiency
- C. System elasticity
- D. Agile development
- E. Operational excellence

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `BE`
**需求/考点标签：** 工作负载架构评审
**社区投票：** BE 100%

### Q356.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q356.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Resource scalability | 可扩展性关注系统承载更大规模工作负载的能力。 | 题库记录为非正确选项 |
| B | Performance efficiency | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | System elasticity | 弹性是资源随当前负载自动扩大或缩小。 | 题库记录为非正确选项 |
| D | Agile development | Agility 强调快速获取资源、实验和交付业务。 | 题库记录为非正确选项 |
| E | Operational excellence | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q356.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q358-CAF-Well-Architected题

**题目：** Which design principles should a company apply to AWS Cloud workloads to maximize sustainability and minimize environmental impact? (Choose two.)

**选项：**

- A. Maximize utilization of Amazon EC2 instances.
- B. Minimize utilization of Amazon EC2 instances.
- C. Minimize usage of managed services.
- D. Force frequent application reinstallations by users.
- E. Reduce the need for users to reinstall applications.

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `AE`
**社区投票：** AE 100%

### Q358.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q358.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Maximize utilization of Amazon EC2 instances. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为正确选项 |
| B | Minimize utilization of Amazon EC2 instances. | Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。 | 题库记录为非正确选项 |
| C | Minimize usage of managed services. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Force frequent application reinstallations by users. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| E | Reduce the need for users to reinstall applications. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q358.3-为什么题库会这样选

题库记录的正确选项定位为：Amazon EC2：可配置虚拟服务器，适合需要 OS/实例级控制的计算工作负载。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q379-CAF-Well-Architected题

**题目：** Which AWS Cloud Adoption Framework (AWS CAF) capability belongs to the business perspective?

**选项：**

- A. Program and project management
- B. Data science
- C. Observability
- D. Change and release management

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `B`
**需求/考点标签：** 组织云采用准备度
**社区投票：** B 90%, A 10%

### Q379.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q379.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Program and project management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Data science | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Observability | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Change and release management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q379.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q381-CAF-Well-Architected题

**题目：** Which perspective in the AWS Cloud Adoption Framework (AWS CAF) includes a capability for well-designed data and analytics architecture?

**选项：**

- A. Security
- B. Governance
- C. Operations
- D. Platform

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `D`
**需求/考点标签：** 组织云采用准备度
**社区投票：** D 100%

### Q381.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q381.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Security | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Governance | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Operations | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Platform | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q381.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q382-CAF-Well-Architected题

**题目：** Which options are AWS Cloud Adoption Framework (AWS CAF) people perspective capabilities? (Choose two.)

**选项：**

- A. Organizational alignment
- B. Portfolio management
- C. Organization design
- D. Risk management
- E. Modern application development

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `AC`
**需求/考点标签：** 组织云采用准备度
**社区投票：** AC 100%

### Q382.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q382.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Organizational alignment | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Portfolio management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Organization design | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Risk management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| E | Modern application development | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q382.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q383-CAF-Well-Architected题

**题目：** A company needs a bridge between technology and business to help evolve to a culture of continuous growth and learning. Which perspective in the AWS Cloud Adoption Framework (AWS CAF) serves as this bridge?

**选项：**

- A. People
- B. Governance
- C. Operations
- D. Security

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `A`
**需求/考点标签：** 组织云采用准备度
**社区投票：** A 100%

### Q383.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q383.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | People | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Governance | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Operations | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Security | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q383.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q386-CAF-Well-Architected题

**题目：** Which AWS Well-Architected Framework pillar focuses on structured and streamlined allocation of computing resources?

**选项：**

- A. Reliability
- B. Operational excellence
- C. Performance efficiency
- D. Sustainability

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `C`
**需求/考点标签：** 工作负载架构评审
**社区投票：** C 100%

### Q386.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q386.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Reliability | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Operational excellence | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Performance efficiency | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Sustainability | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q386.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q387-CAF-Well-Architected题

**题目：** Which AWS Cloud Adoption Framework (AWS CAF) capabilities belong to the governance perspective? (Choose two.)

**选项：**

- A. Program and project management
- B. Product management
- C. Portfolio management
- D. Risk management
- E. Event management

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `AD`
**需求/考点标签：** 组织云采用准备度
**社区投票：** AD 100%

### Q387.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q387.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Program and project management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Product management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Portfolio management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Risk management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| E | Event management | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q387.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q404-CAF-Well-Architected题

**题目：** A company wants to design its cloud architecture so that it can support development innovations, and continuously improve processes and procedures. This is an example of which pillar of the AWS Well-Architected Framework?

**选项：**

- A. Security
- B. Performance efficiency
- C. Operational excellence
- D. Reliability

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `C`
**需求/考点标签：** 工作负载架构评审
**社区投票：** C 83%, D 17%

### Q404.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q404.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Security | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Performance efficiency | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Operational excellence | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Reliability | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q404.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q404.4-⚠-争议/版本提示

- 社区评论存在明显质疑/版本差异信号
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q422-CAF-Well-Architected题

**题目：** Which AWS Cloud Adoption Framework (AWS CAF) perspective focuses on managing identities and permissions at scale?

**选项：**

- A. Operations
- B. Platform
- C. Governance
- D. Security

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `D`
**需求/考点标签：** 组织云采用准备度
**社区投票：** D 100%

### Q422.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q422.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Operations | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Platform | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Governance | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Security | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q422.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q424-CAF-Well-Architected题

**题目：** Which pillar of the AWS Well-Architected Framework aligns with the ability to make frequent, small, and reversible changes to AWS Cloud architecture?

**选项：**

- A. Security
- B. Cost optimization
- C. Operational excellence
- D. Performance efficiency

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `C`
**需求/考点标签：** 工作负载架构评审
**社区投票：** C 100%

### Q424.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q424.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Security | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Cost optimization | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Operational excellence | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Performance efficiency | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q424.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q439-CAF-Well-Architected题

**题目：** Which options are AWS Cloud Adoption Framework (AWS CAF) perspectives? (Choose two.)

**选项：**

- A. Cloud fluency
- B. Security
- C. Change acceleration
- D. Architecture
- E. Business

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `BE`
**需求/考点标签：** 组织云采用准备度
**社区投票：** BE 100%

### Q439.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q439.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Cloud fluency | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Security | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Change acceleration | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Architecture | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| E | Business | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q439.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q461-CAF-Well-Architected题

**题目：** A company needs the ability to acquire resources when the resources are needed. The company also needs the ability to release the resources when the resources are no longer needed. Which AWS concept represents the company's goals?

**选项：**

- A. Scalability
- B. Sustainability
- C. Elasticity
- D. Operational excellence

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `C`
**社区投票：** C 100%

### Q461.1-题干怎么拆

现有题库没有提供独立 explanation；这里按题干中的动作、对象和所有选项的服务定位进行比较。

### Q461.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Scalability | 可扩展性关注系统承载更大规模工作负载的能力。 | 题库记录为非正确选项 |
| B | Sustainability | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Elasticity | 弹性是资源随当前负载自动扩大或缩小。 | 题库记录为正确选项 |
| D | Operational excellence | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q461.3-为什么题库会这样选

题库记录的正确选项定位为：弹性是资源随当前负载自动扩大或缩小。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q507-CAF-Well-Architected题

**题目：** A company is planning to migrate to the AWS Cloud. The company is conducting organizational transformation and wants to become more responsive to customer inquiries and feedback. Which task should the company perform to meet these requirements, according to the AWS Cloud Adoption Framework (AWS CAF)?

**选项：**

- A. Realign teams to focus on products and value streams.
- B. Create new value propositions with new products and services.
- C. Use a new data and analytics platform to create actionable insights.
- D. Migrate and modernize legacy infrastructure.

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `A`
**需求/考点标签：** 组织云采用准备度
**社区投票：** A 100%

### Q507.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q507.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Realign teams to focus on products and value streams. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Create new value propositions with new products and services. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Use a new data and analytics platform to create actionable insights. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Migrate and modernize legacy infrastructure. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q507.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q559-CAF-Well-Architected题

**题目：** Which design principles are included in the reliability pillar of the AWS Well-Architected Framework? (Choose two.)

**选项：**

- A. Automatically recover from failure.
- B. Grant everyone access to increase AWS service quotas.
- C. Stop guessing capacity.
- D. Design applications to run in a single Availability Zone.
- E. Plan to increase AWS service quotas first in a secondary AWS Region.

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `AC`
**需求/考点标签：** 工作负载架构评审
**社区投票：** AC 100%

### Q559.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q559.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Automatically recover from failure. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Grant everyone access to increase AWS service quotas. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Stop guessing capacity. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Design applications to run in a single Availability Zone. | Availability Zone 是 Region 内相互隔离的故障域/部署位置。 | 题库记录为非正确选项 |
| E | Plan to increase AWS service quotas first in a secondary AWS Region. | Region 是 AWS 独立的地理区域，内部包含多个 Availability Zone。 | 题库记录为非正确选项 |

### Q559.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q601-CAF-Well-Architected题

**题目：** Which AWS Cloud Adoption Framework (AWS CAF) perspective focuses on organizing an inventory of data products in a data catalog?

**选项：**

- A. Operations
- B. Governance
- C. Business
- D. Platform

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `B`
**需求/考点标签：** ETL与数据目录 / 组织云采用准备度
**社区投票：** B 100%

### Q601.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**ETL与数据目录、组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q601.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Operations | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Governance | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Business | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Platform | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q601.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q619-CAF-Well-Architected题

**题目：** A company is designing workloads in the AWS Cloud. The company wants the workloads to perform their intended function correctly and consistently throughout their lifecycle. Which pillar of the AWS Well-Architected Framework does this goal represent?

**选项：**

- A. Operational excellence
- B. Security
- C. Reliability
- D. Performance efficiency

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `C`
**需求/考点标签：** 工作负载架构评审
**社区投票：** C 100%

### Q619.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q619.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Operational excellence | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Security | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Reliability | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Performance efficiency | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q619.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q647-CAF-Well-Architected题

**题目：** A company wants to continuously improve processes and procedures to deliver business value. Which pillar of the AWS Well-Architected Framework does this goal represent?

**选项：**

- A. Performance efficiency
- B. Operational excellence
- C. Reliability
- D. Sustainability

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `B`
**需求/考点标签：** 工作负载架构评审
**社区投票：** B 100%

### Q647.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q647.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Performance efficiency | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Operational excellence | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| C | Reliability | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Sustainability | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q647.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q659-CAF-Well-Architected题

**题目：** Which design principle is related to the reliability pillar according to the AWS Well-Architected Framework?

**选项：**

- A. Test recovery procedures
- B. Experiment more often
- C. Go global in minutes
- D. Analyze and attribute to expenditure

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `A`
**需求/考点标签：** 工作负载架构评审

### Q659.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q659.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Test recovery procedures | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Experiment more often | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Go global in minutes | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Analyze and attribute to expenditure | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q659.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q670-CAF-Well-Architected题

**题目：** A company is planning to migrate to the AWS Cloud. The company is conducting organizational transformation and wants to become more responsive to customer inquiries and feedback. Which task should the company perform to meet these requirements, according to the AWS Cloud Adoption Framework (AWS CAF)? (Choose two.)

**选项：**

- A. Realign teams to focus on products and value streams.
- B. Create new value propositions with new products and services.
- C. Use agile methods to rapidly iterate and evolve.
- D. Use a new data and analytics platform to create actionable insights.
- E. Migrate and modernize legacy infrastructure.

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `AC`
**需求/考点标签：** 组织云采用准备度
**社区投票：** AC 100%

### Q670.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q670.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Realign teams to focus on products and value streams. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Create new value propositions with new products and services. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Use agile methods to rapidly iterate and evolve. | Agility 强调快速获取资源、实验和交付业务。 | 题库记录为正确选项 |
| D | Use a new data and analytics platform to create actionable insights. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| E | Migrate and modernize legacy infrastructure. | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q670.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。；Agility 强调快速获取资源、实验和交付业务。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q676-CAF-Well-Architected题

**题目：** Which AWS Cloud Adoption Framework (AWS CAF) perspective focuses on real-time insights and answers questions about strategy?

**选项：**

- A. Operations
- B. People
- C. Business
- D. Platform

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `C`
**需求/考点标签：** 组织云采用准备度
**社区投票：** C 100%

### Q676.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q676.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Operations | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | People | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Business | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Platform | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q676.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q678-CAF-Well-Architected题

**题目：** Which AWS Well-Architected Framework concept represents a system's ability to remain functional when the system encounters operational problems?

**选项：**

- A. Consistency
- B. Elasticity
- C. Durability
- D. Latency

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `C`
**需求/考点标签：** 工作负载架构评审

### Q678.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q678.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Consistency | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Elasticity | 弹性是资源随当前负载自动扩大或缩小。 | 题库记录为非正确选项 |
| C | Durability | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| D | Latency | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q678.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q679-CAF-Well-Architected题

**题目：** Which pillar of the AWS Well-Architected Framework focuses on the ability to recover automatically from service interruptions?

**选项：**

- A. Security
- B. Performance efficiency
- C. Operational excellence
- D. Reliability

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `D`
**需求/考点标签：** 可中断低成本计算 / 工作负载架构评审
**社区投票：** D 100%

### Q679.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**可中断低成本计算、工作负载架构评审**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q679.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Security | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| B | Performance efficiency | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Operational excellence | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Reliability | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |

### Q679.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---

## Q687-CAF-Well-Architected题

**题目：** Which design principle aligns with performance efficiency pillar of the AWS Well-Architected Framework?

**选项：**

- A. Using serverless architectures
- B. Scaling horizontally
- C. Measuring the cost of workloads
- D. Using managed services

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `A`
**需求/考点标签：** 工作负载架构评审
**社区投票：** A 64%, B 36%

### Q687.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**工作负载架构评审**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q687.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Using serverless architectures | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | Scaling horizontally | 可扩展性关注系统承载更大规模工作负载的能力。 | 题库记录为非正确选项 |
| C | Measuring the cost of workloads | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Using managed services | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q687.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

### Q687.4-⚠-争议/版本提示

- 社区投票分散，最高项仅 64%
- 本题同时收录到 `C4-27-旧题争议题与当前AWS差异.md`，不在这里强行替题库修正答案。

---

## Q709-CAF-Well-Architected题

**题目：** A company is learning about the perspectives of the AWS Cloud Adoption Framework (AWS CAF). Which perspective of the AWS CAF addresses the strategy management capability?

**选项：**

- A. Business perspective
- B. People perspective
- C. Governance perspective
- D. Operations perspective

**主分类：** C4-26 CAF-Well-Architected题
**题库记录答案：** `A`
**需求/考点标签：** 组织云采用准备度

### Q709.1-题干怎么拆

这道题先识别的不是某个服务名，而是这些约束：**组织云采用准备度**。判断时应该先找到与这些约束同层、同数据模型或同运维目标的服务，再排除“看起来也属于 AWS，但解决的是另一个层面问题”的选项。

### Q709.2-每个选项的定位

| 选项 | 题库内容 | 服务/概念定位 | 题库答案关系 |
|---|---|---|---|
| A | Business perspective | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为正确选项 |
| B | People perspective | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| C | Governance perspective | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |
| D | Operations perspective | 该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。 | 题库记录为非正确选项 |

### Q709.3-为什么题库会这样选

题库记录的正确选项定位为：该选项是题库中的概念/服务描述；现有源资料未提供独立 explanation，需要结合题干目标与其他选项定位比较。。它与题干要求的对象/约束直接对应。其余选项虽然可能也属于同一大类，但主要解决不同问题。

---
