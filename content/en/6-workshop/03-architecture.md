---
title: "Architecture"
weight: 3
description: "Architecture"
---

## Architecture

The diagram below presents an AWS application architecture using Amazon CloudFront, AWS WAF, an Application Load Balancer, Amazon EC2, Amazon RDS for SQL Server, and supporting security and monitoring services.

![AWS system architecture diagram](/images/workshop/architecture-overview.png)

### Main request flow

1. Users access the application through Amazon CloudFront.
2. AWS WAF filters and protects requests before forwarding them to the system.
3. The Internet Gateway routes traffic into the VPC, while the Application Load Balancer distributes it across EC2 instances.
4. The EC2 instances run in Private Subnets and connect to Amazon RDS for SQL Server in the Private DB Subnets.
5. AWS IAM and AWS Secrets Manager manage identities, permissions, and sensitive information.
6. AWS Systems Manager, Amazon CloudWatch, and AWS CloudTrail support administration, monitoring, and activity auditing.
