---
title: "Điều kiện tiên quyết"
weight: 2
---

# Điều kiện tiên quyết

Trước khi bắt đầu workshop, hãy đảm bảo đã chuẩn bị đầy đủ các điều kiện dưới đây để quá trình triển khai diễn ra thuận lợi.

## 1. Tài khoản AWS

Người thực hiện cần có một tài khoản AWS đang hoạt động và có quyền tạo, chỉnh sửa cũng như xóa các tài nguyên sử dụng trong workshop.

Khuyến khích:

- Cấu hình AWS Budgets để theo dõi chi phí.
- Lựa chọn Region phù hợp và sử dụng thống nhất trong suốt quá trình triển khai.

---

## 2. Kiến thức cơ bản

Workshop giả định người thực hiện đã có kiến thức nền tảng về:

- ASP.NET Core Razor Pages.
- Ngôn ngữ lập trình C#.
- .NET 9.
- SQL Server.
- Entity Framework Core.
- Mô hình Client – Server.
- Các khái niệm cơ bản về điện toán đám mây AWS.

---

## 3. Công cụ phát triển

Chuẩn bị các công cụ sau trước khi bắt đầu:

| Công cụ | Mục đích |
|----------|----------|
| Visual Studio 2022 hoặc mới hơn | Phát triển và chỉnh sửa ứng dụng |
| .NET 9 SDK | Biên dịch và chạy dự án |
| SQL Server Management Studio (SSMS) | Quản lý cơ sở dữ liệu SQL Server |
| Git | Quản lý mã nguồn |
| AWS Toolkit for Visual Studio (khuyến khích) | Hỗ trợ triển khai ứng dụng lên AWS |
| Google Chrome hoặc Microsoft Edge | Truy cập AWS Management Console |

---

## 4. Mã nguồn dự án

Chuẩn bị sẵn mã nguồn của hệ thống Enterprise HelpDesk bao gồm:

- Ứng dụng ASP.NET Core Razor Pages.
- Entity Framework Core.
- ASP.NET Core Identity.
- File cấu hình ứng dụng.
- Script cơ sở dữ liệu (nếu có).

---

## 5. Dịch vụ AWS sử dụng

Workshop sẽ sử dụng các dịch vụ sau trong quá trình triển khai:

### Hạ tầng mạng

- Amazon VPC
- Internet Gateway
- Route Table
- Public Subnet
- Private Subnet
- Security Groups

### Triển khai ứng dụng

- AWS Elastic Beanstalk
- Amazon EC2
- Application Load Balancer
- Amazon CloudFront

### Cơ sở dữ liệu

- Amazon RDS for SQL Server

### Quản lý quyền và bảo mật

- AWS Identity and Access Management (IAM)
- AWS Secrets Manager
- AWS WAF

### Giám sát và quản trị

- Amazon CloudWatch
- AWS CloudTrail
- AWS Systems Manager

---

Sau khi đáp ứng đầy đủ các điều kiện trên, bạn có thể bắt đầu triển khai hệ thống Enterprise HelpDesk theo các bước được trình bày trong những phần tiếp theo của workshop.