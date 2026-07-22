---
title: "Tổng quan"
weight: 1
---

# Tổng quan

Workshop này hướng dẫn triển khai hệ thống **Enterprise HelpDesk** trên nền tảng **Amazon Web Services (AWS)** thông qua quy trình triển khai từng bước, từ xây dựng hạ tầng mạng đến triển khai ứng dụng, giám sát hệ thống và tối ưu tài nguyên.

Hệ thống được phát triển bằng **ASP.NET Core Razor Pages (.NET 9)** và áp dụng kiến trúc nhiều tầng (Multi-tier Architecture). Trong workshop, ứng dụng sẽ được triển khai bằng **AWS Elastic Beanstalk**, sử dụng **Amazon EC2** để vận hành ứng dụng, **Amazon RDS for SQL Server** để lưu trữ dữ liệu và **Application Load Balancer** để phân phối lưu lượng truy cập đến các máy chủ ứng dụng. Người dùng sẽ truy cập hệ thống thông qua **Amazon CloudFront** với kết nối HTTPS.

Bên cạnh các dịch vụ chính, workshop còn hướng dẫn cấu hình nhiều dịch vụ AWS nhằm tăng cường tính bảo mật, khả năng quản lý và giám sát hệ thống, bao gồm:

- Amazon VPC
- AWS Identity and Access Management (IAM)
- AWS Secrets Manager
- Amazon CloudWatch
- AWS CloudTrail
- AWS Systems Manager
- AWS WAF

Sau khi hoàn thành workshop, người thực hiện sẽ có thể:

- Triển khai thành công hệ thống Enterprise HelpDesk trên AWS.
- Xây dựng hạ tầng mạng với Amazon VPC, Subnet, Route Table và Security Group.
- Triển khai cơ sở dữ liệu bằng Amazon RDS for SQL Server.
- Cấu hình AWS Elastic Beanstalk để triển khai ứng dụng ASP.NET Core.
- Quản lý thông tin nhạy cảm bằng AWS Secrets Manager.
- Giám sát và theo dõi hệ thống thông qua Amazon CloudWatch và AWS CloudTrail.
- Quản trị máy chủ EC2 bằng AWS Systems Manager.
- Bảo vệ ứng dụng bằng AWS WAF.
- Dọn dẹp tài nguyên AWS sau khi hoàn thành workshop nhằm tối ưu chi phí.

Workshop được xây dựng theo trình tự từ chuẩn bị môi trường, triển khai hạ tầng, cấu hình ứng dụng, kiểm thử, giám sát đến bảo mật và tối ưu chi phí, giúp người học có thể dễ dàng thực hành và áp dụng vào các dự án triển khai thực tế trên AWS.