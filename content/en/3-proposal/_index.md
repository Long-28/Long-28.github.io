---
title: "Project Proposal"
weight: 3
description: "Project Proposal - Enterprise HelpDesk on Amazon Web Services (AWS)"
---

# Enterprise HelpDesk

## Project Proposal

---

# 1. Project Overview

Enterprise HelpDesk is an internal IT HelpDesk ticket management system developed using **ASP.NET Core Razor Pages (.NET 9)** and deployed on **Amazon Web Services (AWS)**.

The system is designed to digitize the process of receiving, managing, and tracking IT support requests between employees and the IT department. Instead of relying on email, instant messaging applications, or phone calls, Enterprise HelpDesk provides a centralized platform for managing the entire lifecycle of support tickets—from creation to resolution.

The solution follows a **cloud-native architecture**, leveraging AWS services to improve scalability, security, high availability, and operational efficiency while simplifying infrastructure management.

---

# 2. Project Objectives

The project aims to achieve the following objectives:

- Develop an internal enterprise HelpDesk system.
- Standardize the IT support request workflow.
- Track ticket resolution time based on Service Level Agreements (SLAs).
- Manage users and access permissions.
- Manage ticket status throughout the support lifecycle.
- Provide dashboards and reporting capabilities.
- Export data to Microsoft Excel.
- Deploy the application on AWS using a cloud-native architecture.

---

# 3. Background

In many small and medium-sized enterprises (SMEs), IT support requests are still handled through email, Zalo, Microsoft Teams, or phone calls.

This approach introduces several challenges:

- Difficulty tracking ticket status.
- Risk of missing or overlooking support requests.
- No centralized ticket history.
- Limited visibility into IT staff performance.
- Lack of SLA management.
- Difficult reporting and analytics.
- Increased administrative overhead.

In addition, deploying applications on on-premises servers requires organizations to manage infrastructure, maintain servers, perform software updates, and handle operational issues internally.

---

# 4. Proposed Solution

Enterprise HelpDesk is designed to address all of the challenges described above.

Employees submit support tickets directly through the application.

The IT department receives, assigns, and resolves tickets using a centralized workflow.

All ticket information is securely stored in a centralized database.

The system automatically tracks SLA compliance, generates reports, and provides operational statistics.

The entire solution is deployed on AWS to reduce infrastructure management overhead while improving scalability, availability, and security.

---

# 5. System Architecture

In this architecture:

- Amazon CloudFront provides HTTPS support and accelerates content delivery.
- AWS WAF protects the web application.
- Application Load Balancer distributes incoming traffic.
- AWS Elastic Beanstalk manages application deployment.
- Amazon EC2 hosts the ASP.NET Core application.
- Amazon RDS for SQL Server stores application data.
- AWS Secrets Manager securely stores database connection strings.
- Amazon CloudWatch monitors system health and performance.
- AWS CloudTrail records management and API activities for auditing.
- AWS Systems Manager simplifies Amazon EC2 administration.

---

# 6. AWS Services Used

| AWS Service | Purpose |
|-------------|---------|
| Amazon VPC | Network infrastructure |
| Public and Private Subnets | Network segmentation |
| Security Groups | Network access control |
| AWS Identity and Access Management (IAM) | Identity and access management |
| AWS Elastic Beanstalk | Application deployment |
| Amazon EC2 | Application hosting |
| Amazon RDS for SQL Server | Relational database |
| Application Load Balancer (ALB) | Traffic distribution |
| Amazon CloudFront | HTTPS and content delivery network (CDN) |
| AWS WAF | Web application protection |
| AWS Secrets Manager | Secrets management |
| Amazon CloudWatch | Monitoring and observability |
| AWS CloudTrail | Auditing and activity logging |
| AWS Systems Manager | Amazon EC2 administration |

---

# 7. System Features

The system provides the following features:

- Ticket management.
- User management.
- Department management.
- Ticket category management.
- SLA monitoring.
- Dashboard.
- Reports.
- Microsoft Excel export.
- Ticket status management.
- Ticket history management.

---

# 8. Implementation Plan

## Phase 1

Requirements Analysis

- Business requirements analysis.
- Database design.
- Use case design.
- User interface design.

## Phase 2

Application Development

- ASP.NET Core Razor Pages.
- ASP.NET Core Identity.
- CRUD operations.
- Dashboard.
- Reports.

## Phase 3

AWS Deployment

- Amazon VPC.
- Amazon EC2.
- AWS Elastic Beanstalk.
- Amazon RDS.
- AWS IAM.
- AWS Secrets Manager.
- Amazon CloudWatch.
- AWS CloudTrail.
- AWS Systems Manager.
- Amazon CloudFront.
- AWS WAF.

## Phase 4

Testing

- User authentication.
- Ticket workflow.
- SLA validation.
- Reports.
- Monitoring.

## Phase 5

Production Deployment

- System demonstration.
- Amazon CloudWatch monitoring.
- AWS billing review.
- Resource cleanup.

---

# 9. Risk Assessment

| Risk | Mitigation |
|------|------------|
| Amazon EC2 cannot connect to Amazon RDS | Verify security groups and Amazon VPC configuration |
| Database access is lost | Use IAM roles and AWS Secrets Manager |
| Deployment failures | Monitor AWS Elastic Beanstalk events |
| Performance degradation | Monitor Amazon CloudWatch metrics |
| Increasing AWS costs | Configure AWS Budgets |
| Unauthorized access | Protect the application with AWS WAF, HTTPS, and security groups |

---

# 10. Business Value

After deployment, the system will provide the following benefits:

- Standardized HelpDesk processes.
- Centralized support request management.
- SLA tracking.
- Interactive reporting and dashboards.
- Reduced ticket resolution time.
- Improved IT team productivity.
- Lower infrastructure management costs.
- High scalability.
- Enhanced security.
- Simplified maintenance.

---

# 11. Expected Outcomes

Upon completion, the system will support:

- Ticket management.
- SLA monitoring.
- User management.
- Department management.
- Dashboard.
- Reports.
- Microsoft Excel export.
- Monitoring.
- Logging.
- Fully deployed production environment on AWS.

---

# 12. Future Enhancements

The system can be extended with the following features:

- Email notifications.
- SMS notifications.
- File attachment uploads.
- Amazon Simple Email Service (Amazon SES).
- Single Sign-On (SSO).
- Multi-tenant architecture.
- Amazon QuickSight dashboards.
- CI/CD pipeline.
- AI-assisted ticket classification.
- AI-powered support chatbot.