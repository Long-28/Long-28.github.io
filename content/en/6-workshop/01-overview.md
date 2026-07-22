---
title: "Overview"
weight: 1
---

# Overview

This workshop provides a step-by-step guide to deploying the **Enterprise HelpDesk** system on **Amazon Web Services (AWS)**, covering the complete deployment process from building the network infrastructure to deploying the application, monitoring the environment, and optimizing AWS resources.

The system is developed using **ASP.NET Core Razor Pages (.NET 9)** and follows a **multi-tier architecture**. Throughout this workshop, the application is deployed using **AWS Elastic Beanstalk**, hosted on **Amazon EC2**, and uses **Amazon RDS for SQL Server** as the relational database. **Application Load Balancer (ALB)** distributes incoming traffic across the application instances, while users securely access the application through **Amazon CloudFront** over HTTPS.

In addition to the core services, the workshop demonstrates how to configure several AWS services to improve security, operational management, and system monitoring, including:

- Amazon VPC
- AWS Identity and Access Management (IAM)
- AWS Secrets Manager
- Amazon CloudWatch
- AWS CloudTrail
- AWS Systems Manager
- AWS WAF

After completing this workshop, you will be able to:

- Successfully deploy the Enterprise HelpDesk system on AWS.
- Build a secure network infrastructure using Amazon VPC, subnets, route tables, and security groups.
- Deploy a relational database using Amazon RDS for SQL Server.
- Configure AWS Elastic Beanstalk to deploy an ASP.NET Core application.
- Securely manage sensitive information using AWS Secrets Manager.
- Monitor and audit the environment using Amazon CloudWatch and AWS CloudTrail.
- Administer Amazon EC2 instances using AWS Systems Manager.
- Protect the application with AWS WAF.
- Clean up AWS resources after completing the workshop to optimize costs.

The workshop is organized in a logical progression, starting with environment preparation, followed by infrastructure deployment, application configuration, testing, monitoring, security, and cost optimization. This structured approach enables learners to gain hands-on experience and confidently apply these deployment practices to real-world AWS projects.