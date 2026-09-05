# C4-27-旧题、争议题与当前-AWS-差异

> 资料口径：本模块以用户提供的 719 道 CLF-C02 题库与前序 C1/C2 项目资料为基础。题库的 `correct_answer`、社区投票与评论用于发现考点和争议，不自动等于当前 AWS 官方结论；本模块没有在生成过程中擅自用外部常识覆盖题库内容。凡现有项目已经明确标记为 `[UPDATED]`、`[LEGACY]`、`[CURRENT-OUT-OF-SCOPE]` 的内容，会继续保留这些状态提示。正式考试前，涉及当前产品状态和 Support 计划等时效信息仍应再对照 AWS 官方页面。

## 1-为什么这是-Overlay

本文件不抢走题目的正常技术分类，而是额外收集需要复核的题。识别规则只基于用户提供题库及项目中已经明确的历史状态提示。

## 2-自动识别出的争议/版本风险题

共 **94** 题。

### Q3-（主分类-C4-07）

A company has a centralized group of users with large file storage requirements that have exceeded the space available on premises. The company wants to extend its file storage capabilities for this group while retaining the performance benefit of sharing content locally. What is the MOST operationally efficient AWS solution for this scenario?

题库答案： `B`

- 涉及项目资料已提示需关注当前状态的词：workdocs

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q6-（主分类-C4-26）

Which option is a perspective that includes foundational capabilities of the AWS Cloud Adoption Framework (AWS CAF)?；题库答案： `C`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q17-（主分类-C4-03）

A developer wants to deploy an application quickly on AWS without manually creating the required resources. Which AWS service will meet these requirements?；题库答案： `B`

- 涉及项目资料已提示需关注当前状态的词：amazon personalize
- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q19-（主分类-C4-20）

Which AWS service provides the ability to manage infrastructure as code?；题库答案： `D`

- 涉及项目资料已提示需关注当前状态的词：codedeploy

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q33-（主分类-C4-04）

A company runs thousands of simultaneous simulations using AWS Batch. Each simulation is stateless, is fault tolerant, and runs for up to 3 hours. Which pricing model enables the company to optimize costs and meet these requirements?

题库答案： `B`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q47-（主分类-C4-22）

A company wants to migrate its on-premises relational databases to the AWS Cloud. The company wants to use infrastructure as close to its current geographical location as possible. Which AWS service or resource should the company use to select its Amazon RDS deployment area?

题库答案： `C`

- 涉及项目资料已提示需关注当前状态的词：wavelength

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q50-（主分类-C4-01）

Which option is a benefit of the economies of scale based on the advantages of cloud computing?；题库答案： `C`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q64-（主分类-C4-12）

A company wants to provide managed Windows virtual desktops and applications to its remote employees over secure network connections. Which AWS services can the company use to meet these requirements? (Choose two.)；题库答案： `BC`

- 社区投票分散，最高项仅 66%

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q67-（主分类-C4-04）

A company is deploying a machine learning (ML) research project that will require a lot of compute power over several months. The ML processing jobs do not need to run at specific times. Which Amazon EC2 instance purchasing option will meet these requirements at the lowest cost?

题库答案： `B`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q69-（主分类-C4-01）

Which AWS service provides command line access to AWS tools and resources directly from a web browser?；题库答案： `B`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q71-（主分类-C4-25）

A company wants to assess its operational readiness. It also wants to identify and mitigate any operational risks ahead of a new product launch. Which AWS Support plan offers guidance and support for this kind of event at no additional charge?

题库答案： `D`

- 涉及项目资料已提示需关注当前状态的词：developer support, business support

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q78-（主分类-C4-20）

A developer needs to maintain a development environment infrastructure and a production environment infrastructure in a repeatable fashion. Which AWS service should the developer use to meet these requirements?；题库答案： `D`

- 涉及项目资料已提示需关注当前状态的词：iot device defender

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q82-（主分类-C4-24）

What are the benefits of consolidated billing for AWS Cloud services? (Choose two.)；题库答案： `AC`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q88-（主分类-C4-03）

Which responsibility belongs to AWS when a company hosts its databases on Amazon EC2 instances?；题库答案： `D`

- 社区投票分散，最高项仅 60%

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q92-（主分类-C4-03）

Which tool should a developer use to integrate AWS service features directly into an application?；题库答案： `A`

- 涉及项目资料已提示需关注当前状态的词：codedeploy

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q98-（主分类-C4-14）

A company wants to grant users in one AWS account access to resources in another AWS account. The users do not currently have permission to access the resources. Which AWS service will meet this requirement?；题库答案： `B`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q106-（主分类-C4-14）

A developer has been hired by a large company and needs AWS credentials. Which are security best practices that should be followed? (Choose two.)；题库答案： `AE`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q107-（主分类-C4-24）

A company has multiple AWS accounts that include compute workloads that cannot be interrupted. The company wants to obtain billing discounts that are based on the company’s use of AWS services. Which AWS feature or purchasing option will meet these requirements?

题库答案： `B`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q108-（主分类-C4-14）

A user wants to allow applications running on an Amazon EC2 instance to make calls to other AWS services. The access granted must be secure. Which AWS service or feature should be used?；题库答案： `C`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q112-（主分类-C4-04）

A company has an uninterruptible application that runs on Amazon EC2 instances. The application constantly processes a backlog of files in an Amazon Simple Queue Service (Amazon SQS) queue. This usage is expected to continue to grow for years. What is the MOST cost-effective EC2 instance purchasing model to meet these requirements?

题库答案： `C`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q113-（主分类-C4-23）

A company wants an AWS service to provide product recommendations based on its customer data. Which AWS service will meet this requirement?；题库答案： `B`

- 涉及项目资料已提示需关注当前状态的词：amazon personalize

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q118-（主分类-C4-03）

A company needs to perform data processing once a week that typically takes about 5 hours to complete. Which AWS service should the company use for this workload?；题库答案： `B`

- 涉及项目资料已提示需关注当前状态的词：wavelength, codedeploy

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q121-（主分类-C4-03）

A company plans to deploy containers on AWS. The company wants full control of the compute resources that host the containers. Which AWS service will meet these requirements?；题库答案： `C`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q129-（主分类-C4-04）

Which Amazon EC2 pricing model is the MOST cost efficient for an uninterruptible workload that runs once a year for 24 hours?；题库答案： `A`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q132-（主分类-C4-15）

Which task is a responsibility of AWS, according to the AWS shared responsibility model?；题库答案： `D`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q133-（主分类-C4-01）

Which option is a benefit of using AWS for cloud computing?；题库答案： `B`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q135-（主分类-C4-25）

A company is assessing its AWS Business Support plan to determine if the plan still meets the company’s needs. The company is considering switching to AWS Enterprise Support. Which additional benefit will the company receive with AWS Enterprise Support?

题库答案： `C`

- 社区投票分散，最高项仅 52%
- 涉及项目资料已提示需关注当前状态的词：business support
- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q138-（主分类-C4-04）

A company wants to run its workload on Amazon EC2 instances for more than 1 year. This workload will run continuously. Which option offers a discounted hourly rate compared to the hourly rate of On-Demand Instances?；题库答案： `C`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q140-（主分类-C4-21）

Which AWS services can a company use to achieve a loosely coupled architecture? (Choose two.)；题库答案： `BE`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q148-（主分类-C4-01）

A company wants to modernize and convert a monolithic application into microservices. The company wants to move the application to AWS. Which migration strategy should the company use?；题库答案： `D`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q170-（主分类-C4-14）

A company needs a central user portal so that users can log in to third-party business applications that support Security Assertion Markup Language (SAML) 2.0. Which AWS service will meet this requirement?；题库答案： `C`

- 社区投票分散，最高项仅 52%

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q171-（主分类-C4-20）

Which AWS service should users use to learn about AWS service availability and operations?；题库答案： `D`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q177-（主分类-C4-14）

Which action will help increase security in the AWS Cloud?；题库答案： `C`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q186-（主分类-C4-02）

A company that uses AWS needs to transfer 2 TB of data. Which type of transfer of that data would result in no cost for the company?；题库答案： `A`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q201-（主分类-C4-05）

A company is storing data that will not be frequently accessed in the AWS Cloud. If the company needs to access the data, the data needs to be retrieved within 12 hours. The company wants a solution that is cost-effective for storage costs for each gigabyte. Which Amazon S3 storage class will meet these requirements?

题库答案： `B`

- 社区投票分散，最高项仅 67%

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q212-（主分类-C4-20）

Which AWS service allows users to model and provision AWS resources using common programming languages?；题库答案： `C`

- 社区投票分散，最高项仅 69%

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q216-（主分类-C4-14）

A company has teams that have different job roles and responsibilities. The company’s employees often change teams. The company needs to manage permissions for the employees so that the permissions are appropriate for the job responsibilities. Which IAM resource should the company use to meet this requirement with the LEAST operational overhead?

题库答案： `B`

- 社区投票分散，最高项仅 52%

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q219-（主分类-C4-05）

Which encryption types can be used to protect objects at rest in Amazon S3? (Choose two.)；题库答案： `AB`

- 社区投票分散，最高项仅 67%

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q222-（主分类-C4-03）

A customer runs an On-Demand Amazon Linux EC2 instance for 3 hours, 5 minutes, and 6 seconds. For how much time will the customer be billed?；题库答案： `B`

- 社区投票分散，最高项仅 56%

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q231-（主分类-C4-06）

Who enables encryption of data at rest for Amazon Elastic Block Store (Amazon EBS)?；题库答案： `B`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q236-（主分类-C4-25）

At what support level do users receive access to a support concierge?；题库答案： `D`

- 涉及项目资料已提示需关注当前状态的词：developer support, business support

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q247-（主分类-C4-20）

A company wants to launch multiple workloads on AWS. Each workload is related to a different business unit. The company wants to separate and track costs for each business unit. Which solution will meet these requirements with the LEAST operational overhead?

题库答案： `A`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q249-（主分类-C4-15）

Which option is a shared control between AWS and the customer, according to the AWS shared responsibility model?；题库答案： `A`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q253-（主分类-C4-20）

A company wants to provision and manage its AWS infrastructure by using the common programming languages Typescript, Python, Java, and .NET. Which AWS service will meet this requirement?；题库答案： `D`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q256-（主分类-C4-25）

A company is using the AWS Free Tier for several AWS services for an application. What will happen if the Free Tier usage period expires or if the application use exceeds the Free Tier usage limits?；题库答案： `A`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q259-（主分类-C4-22）

A company need an AWS service that provides a clear baseline of what the company runs in its on-premises data centers. The company needs the projected cost to run its on-premises workloads in the AWS Cloud. What AWS service or tool will meet these requirements?

题库答案： `D`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q260-（主分类-C4-20）

A company acquired another corporation. The company now has two AWS accounts. Which AWS service or tool can the company use to consolidate the billing for these two accounts?；题库答案： `B`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q264-（主分类-C4-24）

A company wants to receive alerts to monitor its overall operating costs for its AWS public cloud infrastructure. Which AWS offering will meet these requirements?；题库答案： `C`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q266-（主分类-C4-04）

A company wants to run a simulation for 3 years without interruptions. Which Amazon EC2 instance purchasing option will meet these requirements MOST cost-effectively?；题库答案： `B`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q268-（主分类-C4-26）

Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)；题库答案： `B`

- 题干要求选择 2 项，但题库 correct_answer 记录为 `B`
- 社区投票分散，最高项仅 65%

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q289-（主分类-C4-03）

Which task can a company perform by using security groups in the AWS Cloud?；题库答案： `A`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q291-（主分类-C4-10）

Which of the following are features of network ACLs as they are used in the AWS Cloud? (Choose two.)；题库答案： `AD`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q292-（主分类-C4-26）

Which capabilities are in the platform perspective of the AWS Cloud Adoption Framework (AWS CAF)? (Choose two.)；题库答案： `BC`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q298-（主分类-C4-25）

A company needs to run a pre-installed third-party firewall on an Amazon EC2 instance. Which AWS service or feature can provide this solution?；题库答案： `C`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q321-（主分类-C4-13）

Which AWS services make use of global edge locations? (Choose two.)；题库答案： `BC`

- 涉及项目资料已提示需关注当前状态的词：wavelength

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q323-（主分类-C4-03）

A company needs to deploy applications in the AWS Cloud as quickly as possible. The company also needs to minimize the complexity that is related to the management of AWS resources. Which AWS service should the company use to meet these requirements?

题库答案： `B`

- 涉及项目资料已提示需关注当前状态的词：amazon personalize

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q342-（主分类-C4-24）

A company wants a web application to interact with various AWS services. Which AWS service or resource will meet this requirement?；题库答案： `C`

- 社区投票分散，最高项仅 68%

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q360-（主分类-C4-22）

A company wants to deploy some of its resources in the AWS Cloud. To meet regulatory requirements, the data must remain local and on premises. There must be low latency between AWS and the company resources. Which AWS service or feature can be used to meet these requirements?

题库答案： `C`

- 涉及项目资料已提示需关注当前状态的词：wavelength

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q403-（主分类-C4-24）

Which statements represent the cost-effectiveness of the AWS Cloud? (Choose two.)；题库答案： `AE`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q404-（主分类-C4-26）

A company wants to design its cloud architecture so that it can support development innovations, and continuously improve processes and procedures. This is an example of which pillar of the AWS Well-Architected Framework?；题库答案： `C`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q407-（主分类-C4-25）

Which AWS Support plans provide access to an AWS technical account manager (TAM)? (Choose two.)；题库答案： `DE`

- 涉及项目资料已提示需关注当前状态的词：developer support, business support, enterprise on-ramp

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q419-（主分类-C4-25）

A company wants to enhance security by launching a third-party ISP intrusion detection system from its AWS account. Which AWS service or resource should the company use to meet this requirement?；题库答案： `B`

- 社区投票分散，最高项仅 60%
- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q421-（主分类-C4-21）

Which AWS service or tool gives a company the ability to release application changes in an automated way?；题库答案： `B`

- 涉及项目资料已提示需关注当前状态的词：codedeploy

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q429-（主分类-C4-04）

A company is running a reporting web server application on Amazon EC2 instances. The application runs once every week and once again at the end of the month. The EC2 instances can be shut down when they are not in use. What is the MOST cost-effective billing model for this use case?

题库答案： `D`

- 社区投票分散，最高项仅 67%

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q446-（主分类-C4-05）

A company stores a large amount of data that auditors access only twice each year. Which Amazon S3 storage class should the company use to store the data with the LOWEST cost?；题库答案： `B`

- 社区投票分散，最高项仅 65%

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q451-（主分类-C4-03）

A company is using AWS for all its IT infrastructure. The company's developers are allowed to deploy applications on their own. The developers want to deploy their applications without having to provision the infrastructure themselves. Which AWS service should the developers use to meet these requirements?

题库答案： `C`

- 涉及项目资料已提示需关注当前状态的词：codedeploy

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q459-（主分类-C4-22）

A company wants to use AWS. The company has stringent requirements about low-latency access to on-premises systems and data residency. Which AWS service should the company use to design a solution that meets these requirements?；题库答案： `D`

- 涉及项目资料已提示需关注当前状态的词：wavelength

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q460-（主分类-C4-22）

A company runs an on-premises contact center for customers. The company needs to migrate to a cloud-based solution that can deliver artificial intelligence features to improve user experience. Which AWS service will meet these requirements?

题库答案： `D`

- 涉及项目资料已提示需关注当前状态的词：wavelength

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q467-（主分类-C4-03）

A company plans to migrate its custom marketing application and order-processing application to AWS. The company needs to deploy the applications on different types of instances with various configurations of CPU, memory, storage, and networking capacity. Which AWS service should the company use to meet these requirements?

题库答案： `D`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q481-（主分类-C4-22）

A company is planning to migrate applications to the AWS Cloud. During a system audit, the company finds that its content management system (CMS) application is incompatible with cloud environments. Which migration strategies will help the company to migrate the CMS application with the LEAST effort? (Choose two.)

题库答案： `BC`

- 社区投票分散，最高项仅 32%
- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q485-（主分类-C4-23）

Which AWS service provides machine learning capability to detect and analyze content in images and videos?；题库答案： `D`

- 涉及项目资料已提示需关注当前状态的词：amazon personalize

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q487-（主分类-C4-20）

Which AWS service gives users the ability to deploy highly repeatable infrastructure configurations?；题库答案： `A`

- 涉及项目资料已提示需关注当前状态的词：codedeploy

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q517-（主分类-C4-20）

Which AWS service supports a company's ability to treat infrastructure as code?；题库答案： `D`

- 涉及项目资料已提示需关注当前状态的词：codedeploy

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q520-（主分类-C4-25）

Which AWS Support plan provides the full set of AWS Trusted Advisor checks at the LOWEST cost?；题库答案： `B`

- 涉及项目资料已提示需关注当前状态的词：developer support, business support, enterprise on-ramp

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q521-（主分类-C4-04）

A company's application is running on Amazon EC2 instances. The company is planning a partial migration to a serverless architecture in the next year and wants to pay for resources up front. Which AWS purchasing option will optimize the company's costs?

题库答案： `D`

- 社区投票分散，最高项仅 57%

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q556-（主分类-C4-25）

Which benefit is always free of charge with AWS, regardless of a user’s AWS Support plan?；题库答案： `B`

- 涉及项目资料已提示需关注当前状态的词：developer support

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q563-（主分类-C4-20）

Which AWS service can companies use to subscribe to RSS feeds for updates about all AWS service issues?；题库答案： `B`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q567-（主分类-C4-25）

A new AWS user needs to interact with AWS Support by using API calls. Which AWS Support plan will meet this requirement MOST cost-effectively?；题库答案： `C`

- 社区投票分散，最高项仅 52%
- 涉及项目资料已提示需关注当前状态的词：developer support, business support

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q575-（主分类-C4-25）

A company needs access to checks and recommendations that help the company follow AWS best practices for cost optimization, security, fault tolerance, performance, and service quotas. Which combination of an AWS service and AWS Support plan on the AWS account will meet these requirements?

题库答案： `C`

- 涉及项目资料已提示需关注当前状态的词：developer support, business support, enterprise on-ramp

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q602-（主分类-C4-25）

A company runs its production workload in the AWS Cloud. The company needs to choose one of the AWS Support Plans. Which of the AWS Support Plans will meet these requirements at the LOWEST cost?；题库答案： `D`

- 涉及项目资料已提示需关注当前状态的词：enterprise on-ramp

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q640-（主分类-C4-25）

A company has an AWS Business Support plan. The company needs to gain access to the AWS DDoS Response Team (DRT) to help mitigate DDoS events. Which AWS service or resource must the company use to meet these requirements?；题库答案： `D`

- 涉及项目资料已提示需关注当前状态的词：business support

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q645-（主分类-C4-21）

A company wants an AWS service that can automate software deployment in Amazon EC2 instances and on-premises instances. Which AWS service will meet this requirement?；题库答案： `C`

- 涉及项目资料已提示需关注当前状态的词：codedeploy

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q651-（主分类-C4-22）

A company needs to run some of its workloads on premises to comply with regulatory guidelines. The company wants to use the AWS Cloud to run workloads that are not required to be on premises. The company also wants to be able to use the same API calls for the on-premises workloads and the cloud workloads. Which AWS service or feature should the company use to meet these requirements?

题库答案： `B`

- 涉及项目资料已提示需关注当前状态的词：wavelength

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q656-（主分类-C4-14）

In which situations should a company create an IAM user instead of an IAM role?；题库答案： `B`

- 社区投票分散，最高项仅 50%

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q668-（主分类-C4-23）

A company has data lakes designed for high performance computing (HPC) workloads. Which Amazon EC2 instance type should the company use to meet these requirements?；题库答案： `B`

- 社区投票分散，最高项仅 67%

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q681-（主分类-C4-23）

A company wants to build, train, and deploy machine learning (ML) models. Which AWS service can the company use to meet this requirement?；题库答案： `D`

- 涉及项目资料已提示需关注当前状态的词：amazon personalize

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q687-（主分类-C4-26）

Which design principle aligns with performance efficiency pillar of the AWS Well-Architected Framework?；题库答案： `A`

- 社区投票分散，最高项仅 64%

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q691-（主分类-C4-04）

For which use case are Amazon EC2 On-Demand Instances MOST cost-effective?；题库答案： `B`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q698-（主分类-C4-25）

A company is releasing a business-critical application. Before the release, the company needs strategic planning assistance from AWS. During the release, the company needs AWS infrastructure event management and real-time support. What should the company do to meet these requirements?

题库答案： `C`

- 社区投票分散，最高项仅 67%

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q700-（主分类-C4-05）

A company wants an Amazon S3 solution that provides access to object storage within single-digit milliseconds. Which solution will meet these requirements?；题库答案： `A`

- 社区投票分散，最高项仅 56%

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q701-（主分类-C4-04）

A company runs an uninterruptible Amazon EC2 workload on AWS 24 hours a day, 7 days a week. The company will require the same instance family and instance type to run the workload for the next 12 months. Which combination of purchasing options should the company choose to MOST optimize costs? (Choose two.)

题库答案： `AE`

- 社区评论存在明显质疑/版本差异信号

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q702-（主分类-C4-03）

A company wants to run its application's code without having to provision and manage servers. Which AWS service will meet this requirement?；题库答案： `B`

- 涉及项目资料已提示需关注当前状态的词：codedeploy

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q706-（主分类-C4-24）

A company plans to launch an ecommerce website that contains many images for a product catalog. The company wants to keep the cost of running the website within a specific budget. Which AWS service or tool should the company use to monitor the ongoing costs of the website?

题库答案： `A`

- 社区投票分散，最高项仅 67%

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---

### Q718-（主分类-C4-08）

A company wants to deploy an application that stores data in a relational database. The company wants database tasks, such as automated backups and database snapshots, to be managed by AWS. Which AWS service will meet these requirements?

题库答案： `B`

- 社区投票分散，最高项仅 67%

处理建议：保留题库答案用于理解旧题，但正式考试前应对照当前 AWS 官方资料确认该服务/规则状态。

---
