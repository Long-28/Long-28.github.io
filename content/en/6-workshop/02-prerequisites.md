---
title: "Prerequisites"
weight: 2
---

# Prerequisites

Before starting this workshop, ensure that you have completed the following prerequisites to ensure a smooth deployment experience.

## 1. AWS Account

You must have an active AWS account with sufficient permissions to create, modify, and delete the AWS resources used throughout this workshop.

**Recommendations:**

- Configure AWS Budgets to monitor and control AWS costs.
- Choose an AWS Region before you begin and use the same Region throughout the entire workshop.

---

## 2. Prerequisite Knowledge

This workshop assumes you have a basic understanding of the following topics:

- ASP.NET Core Razor Pages
- C# programming
- .NET 9
- Microsoft SQL Server
- Entity Framework Core
- Client-server architecture
- Fundamental concepts of Amazon Web Services (AWS)

---

## 3. Development Tools

Prepare the following tools before starting the workshop:

| Tool | Purpose |
|------|---------|
| Visual Studio 2022 or later | Develop and modify the application |
| .NET 9 SDK | Build and run the project |
| SQL Server Management Studio (SSMS) | Manage the SQL Server database |
| Git | Source code management |
| AWS Toolkit for Visual Studio (recommended) | Simplify application deployment to AWS |
| Google Chrome or Microsoft Edge | Access the AWS Management Console |

---

## 4. Project Source Code

Prepare the Enterprise HelpDesk project source code, including:

- ASP.NET Core Razor Pages application
- Entity Framework Core
- ASP.NET Core Identity
- Application configuration files
- Database scripts (if available)

---

## 5. AWS Services Used

This workshop uses the following AWS services throughout the deployment process.

### Networking

- Amazon VPC
- Internet Gateway
- Route Table
- Public Subnet
- Private Subnet
- Security Groups

### Application Deployment

- AWS Elastic Beanstalk
- Amazon EC2
- Application Load Balancer (ALB)
- Amazon CloudFront

### Database

- Amazon RDS for SQL Server

### Identity, Security, and Access Management

- AWS Identity and Access Management (IAM)
- AWS Secrets Manager
- AWS WAF

### Monitoring and Management

- Amazon CloudWatch
- AWS CloudTrail
- AWS Systems Manager

---

After completing all of the prerequisites above, you are ready to begin deploying the Enterprise HelpDesk system by following the step-by-step instructions provided in the remaining sections of this workshop.