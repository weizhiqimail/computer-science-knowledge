# C2-13-AI、ML、IoT-与业务应用

> 资料口径说明：本章延续当前 AWS CLF-C02 学习项目既有规则，主要依据用户提供的 719 题题库、`chatGPT会话1.md`、`chatGPT会话2.md`、`cmd1.md` 与前序 C2 章节的结构整理。题库中的答案与评论用于识别高频考点、业务场景和易混项，不自动视为当前 AWS 官方结论。涉及会随时间变化的产品状态、考试范围与 Support 体系时，本章只沿用项目资料中已经明确记录的状态；正式考试前仍应再对照 AWS 当前官方页面。

## 1-本章目标

AWS 的 AI/ML 服务不能记成“都是人工智能”。不同服务对应完全不同的输入与输出：

```text
Image / Video → Rekognition
Speech → Text → Transcribe
Text → Speech → Polly
Document → Structured Text → Textract
Language Understanding → Comprehend
Translation → Translate
Chatbot / Conversational Interface → Lex
Enterprise Search → Kendra
Build/Train/Deploy ML → SageMaker AI
IoT Devices → AWS IoT Core
```
本章先建立“输入是什么、要得到什么输出”的判断方式。

## 2-★★★-Amazon-Rekognition

**正式名称：** Amazon Rekognition；；；中文： 图像与视频分析服务

### 2.1-为什么需要它

应用希望识别图片或视频中的对象、人脸、文字、内容类别等，不想自己从零训练计算机视觉模型。

### 2.2-它是什么

Rekognition 提供托管 Computer Vision 能力，用 API 分析 Image/Video。

### 2.3-GlobalShop-场景

GlobalShop 审核商家上传商品图片是否包含不允许内容，或识别商品图中的对象标签。

### 2.4-常见组合

S3 image/video → Rekognition → application workflow。

### 2.5-容易混淆

Rekognition 处理图像/视频；Textract 主要从文档提取文本和结构。

### 2.6-题库通常怎么考

image recognition、face analysis、video analysis、computer vision → Rekognition。

## 3-★★★-Amazon-Transcribe

**正式名称：** Amazon Transcribe；；；中文： 语音转文字服务

### 3.1-为什么需要它

客服录音、会议音频、视频字幕需要自动转成文本。

### 3.2-它是什么

Transcribe 使用语音识别把 Speech/Audio 转换为 Text。

### 3.3-GlobalShop-场景

GlobalShop 客服电话录音自动生成文字，之后交给 Comprehend 做情感分析。

### 3.4-常见组合

Audio → Transcribe → Text → Comprehend/Search。

### 3.5-容易混淆

Transcribe = Speech to Text；Polly = Text to Speech。

### 3.6-题库通常怎么考

speech-to-text、audio transcription、subtitles → Transcribe。

## 4-★★★-Amazon-Polly

**正式名称：** Amazon Polly；；；中文： 文字转语音服务

### 4.1-为什么需要它

应用有文字内容，希望生成自然语音，例如读屏、语音播报。

### 4.2-它是什么

Polly 将 Text 转换成 lifelike Speech。

### 4.3-GlobalShop-场景

GlobalShop 无障碍功能把商品详情文字朗读给用户。

### 4.4-常见组合

Text → Polly → Audio。

### 4.5-容易混淆

Polly 与 Transcribe 方向完全相反。

### 4.6-题库通常怎么考

text-to-speech、lifelike voices → Polly。

## 5-★★★-Amazon-Textract

**正式名称：** Amazon Textract；；；中文： 文档文字与结构提取服务

### 5.1-为什么需要它

扫描件、发票、表单、PDF 中的文字和表格如果人工录入成本很高，需要自动抽取。

### 5.2-它是什么

Textract 用 ML 从扫描文档中提取文本、手写内容、表格、表单结构等。

### 5.3-GlobalShop-场景

GlobalShop 商家上传发票或物流单，Textract 抽取编号、金额、日期字段。

### 5.4-常见组合

S3 document → Textract → structured output → workflow/database。

### 5.5-容易混淆

Textract 不是通用图片对象识别；Rekognition 更偏视觉内容分析。

### 5.6-题库通常怎么考

extract text/forms/tables from scanned documents → Textract。

## 6-★★★-Amazon-Comprehend

**正式名称：** Amazon Comprehend；；；中文： 自然语言处理 NLP 服务

### 6.1-为什么需要它

企业有大量评论、客服文本和文章，希望识别情感、实体、关键词等语言信息。

### 6.2-它是什么

Comprehend 提供托管 NLP（Natural Language Processing）能力。

### 6.3-GlobalShop-场景

GlobalShop 对商品评价执行 sentiment analysis，识别用户负面反馈主题。

### 6.4-常见组合

Text → Comprehend → sentiment/entities/key phrases。

### 6.5-容易混淆

Comprehend 不是 Translation，也不是 Chatbot。

### 6.6-题库通常怎么考

sentiment、entities、key phrases、NLP → Comprehend。

## 7-★★★-Amazon-Translate

**正式名称：** Amazon Translate；；；中文： 机器翻译服务

### 7.1-为什么需要它

全球电商需要把商品说明、评论或客服文本自动翻译成其他语言。

### 7.2-它是什么

Translate 提供神经机器翻译能力，将一种语言文本翻译成另一种语言。

### 7.3-GlobalShop-场景

GlobalShop 把日文商品描述翻译成英文供美国用户查看。

### 7.4-常见组合

Text → Translate → translated text。

### 7.5-容易混淆

Translate 不做情感分析；Comprehend 做语言理解。

### 7.6-题库通常怎么考

language translation、translate text → Amazon Translate。

## 8-★★★-Amazon-Lex

**正式名称：** Amazon Lex；；；中文： 对话式 AI / Chatbot 构建服务

### 8.1-为什么需要它

应用希望构建文字或语音 Chatbot，需要识别 Intent、Slot 并驱动后端流程。

### 8.2-它是什么

Lex 提供对话式界面构建能力，支持语音和文本交互。

### 8.3-GlobalShop-场景

GlobalShop 客服机器人识别“查询订单状态”Intent，然后调用订单 API。

### 8.4-常见组合

User → Lex → Lambda/API → business service。

### 8.5-容易混淆

Lex ≠ Polly/Transcribe：Lex 是对话理解与 Bot；Polly/Transcribe 是单向语音转换。

### 8.6-题库通常怎么考

chatbot、conversational interface、intent、voice/text bot → Lex。

## 9-★★★-Amazon-Kendra

**正式名称：** Amazon Kendra；；；中文： 企业智能搜索服务

### 9.1-为什么需要它

企业内部知识库、FAQ、文档分散在多个数据源中，希望用自然语言进行统一搜索。

### 9.2-它是什么

Kendra 是企业搜索服务，通过 ML 改善文档/知识内容检索。

### 9.3-GlobalShop-场景

GlobalShop 客服员工搜索退货政策、内部手册和产品知识。

### 9.4-常见组合

Enterprise documents → Kendra index → search application。

### 9.5-容易混淆

Kendra 不是 OpenSearch 的同义词。Kendra 更偏智能企业知识搜索；OpenSearch 是通用搜索/分析引擎。

### 9.6-题库通常怎么考

enterprise search、search internal documents、natural-language search → Kendra。

## 10-★★★★-Amazon-SageMaker-AI

**正式名称：** Amazon SageMaker AI；；；中文： 托管机器学习平台

### 10.1-为什么需要它

预构建 AI API 不够时，数据科学团队需要自己准备数据、训练模型、调优、部署推理 Endpoint 并管理 MLOps。

### 10.2-它是什么

SageMaker AI 提供构建、训练、部署和管理 ML 模型的一整套托管能力。

### 10.3-GlobalShop-场景

GlobalShop 数据团队训练个性化需求预测或风控模型，并部署为在线推理 Endpoint。

### 10.4-常见组合

S3/Data → SageMaker training → model → endpoint/batch inference。

### 10.5-容易混淆

SageMaker AI 是 ML Platform；Rekognition/Polly/Textract 等是开箱即用 AI 服务。

### 10.6-题库通常怎么考

build/train/deploy custom ML models、managed machine learning platform → SageMaker AI。

## 11-Generative-AI-与-Amazon-Q

项目资料当前把 Amazon Q 列入 AI/ML 范围。CLF 层级应把它理解为 AWS 的生成式 AI 助手/企业助手产品家族，而不是传统数据库、监控或 IAM 服务。由于生成式 AI 产品更新较快，本章不固定易过期的产品版本、套餐和具体功能清单，考试前应按当前官方范围复核。

## 12-★★★-AWS-IoT-Core

IoT = Internet of Things = 物联网。IoT Core 让大量设备安全连接 AWS，并进行消息交换、规则处理和后端集成。GlobalShop 物流仓库可能有温度传感器：

```text
Sensors
  │ MQTT / device messages
  ▼
AWS IoT Core
  │
  ├── Rules → Lambda
  ├── Storage → S3
  └── Analytics / Alerts
```
IoT Core 重点是“设备连接与消息”，不是传统 Web 用户身份，也不是普通服务器 VPN。

## 13-AI-服务快速判断法

先看输入：

| 输入/需求 | 服务 |
|---|---|
| Image / Video | Rekognition |
| Speech → Text | Transcribe |
| Text → Speech | Polly |
| Document → text/forms/tables | Textract |
| Text sentiment/entities | Comprehend |
| Text language conversion | Translate |
| Chatbot | Lex |
| Enterprise knowledge search | Kendra |
| Custom ML lifecycle | SageMaker AI |
| IoT device connectivity | IoT Core |

## 14-GlobalShop-AI-链路

```text
Product Image ──→ Rekognition
Customer Call ──→ Transcribe ──→ Comprehend
Product Text  ──→ Translate / Polly
Invoices      ──→ Textract
Support Bot   ──→ Lex
Knowledge     ──→ Kendra
Custom Models ──→ SageMaker AI
Warehouse IoT ──→ IoT Core
```
## 15-本章最后要形成的判断方式

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

## 16-与后续章节的关系

C2 负责建立技术体系本身；完整业务架构组合会在 C3 中继续展开；719 道题的逐题选项解析放在 C4；频率排名与强化学习放在 C5；考前压缩复习放在 C6。
