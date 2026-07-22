---
title: "Kiến trúc"
weight: 3
description: "Kiến trúc"
---

## Kiến trúc

Sơ đồ dưới đây mô tả kiến trúc triển khai ứng dụng trên AWS với Amazon CloudFront, AWS WAF, Application Load Balancer, Amazon EC2, Amazon RDS for SQL Server và các dịch vụ bảo mật, giám sát.

![Sơ đồ kiến trúc hệ thống AWS](/images/workshop/architecture-overview.png)

### Luồng hoạt động chính

1. Người dùng truy cập ứng dụng thông qua Amazon CloudFront.
2. AWS WAF lọc và bảo vệ các yêu cầu trước khi chuyển tiếp vào hệ thống.
3. Internet Gateway đưa lưu lượng vào VPC và Application Load Balancer phân phối đến các EC2 Instance.
4. Các EC2 Instance chạy trong Private Subnet, kết nối đến Amazon RDS for SQL Server trong Private DB Subnet.
5. AWS IAM và AWS Secrets Manager quản lý danh tính, quyền truy cập và thông tin nhạy cảm.
6. AWS Systems Manager, Amazon CloudWatch và AWS CloudTrail hỗ trợ quản trị, giám sát và kiểm tra hoạt động hệ thống.
