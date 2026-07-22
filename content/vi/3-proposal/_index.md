---
title: "Đề xuất dự án"
weight: 3
description: "Project Proposal - Enterprise HelpDesk trên nền tảng AWS"
---

# Enterprise HelpDesk

## Đề xuất dự án

---

## 1. Giới thiệu dự án

Enterprise HelpDesk là hệ thống quản lý yêu cầu hỗ trợ công nghệ thông tin (IT HelpDesk) dành cho doanh nghiệp nội bộ, được phát triển bằng **ASP.NET Core Razor Pages (.NET 9)** và triển khai trên nền tảng **Amazon Web Services (AWS)**.

Hệ thống được xây dựng nhằm số hóa quy trình tiếp nhận, xử lý và theo dõi các yêu cầu hỗ trợ CNTT giữa nhân viên và bộ phận IT. Thay vì quản lý thủ công qua email hoặc các ứng dụng nhắn tin, Enterprise HelpDesk cung cấp một nền tảng tập trung giúp quản lý toàn bộ vòng đời của Ticket từ khi được tạo cho đến khi hoàn thành.

Giải pháp được thiết kế theo kiến trúc **Cloud-Native**, tận dụng các dịch vụ của AWS nhằm tăng khả năng mở rộng, bảo mật, tính sẵn sàng và đơn giản hóa công tác quản trị hạ tầng.

---

# 2. Mục tiêu dự án

Dự án hướng đến các mục tiêu sau:

- Xây dựng hệ thống HelpDesk phục vụ doanh nghiệp nội bộ.
- Chuẩn hóa quy trình tiếp nhận và xử lý yêu cầu hỗ trợ.
- Theo dõi thời gian xử lý theo SLA.
- Quản lý người dùng và phân quyền.
- Quản lý Ticket theo trạng thái.
- Hỗ trợ Dashboard và báo cáo.
- Xuất dữ liệu Excel.
- Triển khai trên nền tảng AWS theo mô hình Cloud-Native.

---

# 3. Bối cảnh

Tại nhiều doanh nghiệp vừa và nhỏ, bộ phận CNTT vẫn tiếp nhận yêu cầu hỗ trợ thông qua Email, Zalo, Microsoft Teams hoặc điện thoại.

Điều này dẫn đến nhiều khó khăn:

- Không theo dõi được trạng thái xử lý.
- Dễ bỏ sót yêu cầu.
- Không có lịch sử xử lý tập trung.
- Khó đánh giá hiệu suất nhân viên IT.
- Không có cơ chế SLA.
- Khó tổng hợp báo cáo.
- Tốn nhiều thời gian quản lý.

Ngoài ra, khi triển khai trên máy chủ nội bộ, doanh nghiệp còn phải tự quản trị máy chủ, cập nhật phần mềm và xử lý các vấn đề về hạ tầng.

---

# 4. Giải pháp đề xuất

Enterprise HelpDesk được xây dựng nhằm giải quyết toàn bộ các vấn đề trên.

Người dùng gửi Ticket trực tiếp trên hệ thống.

Bộ phận IT tiếp nhận, phân công và xử lý Ticket.

Toàn bộ quá trình được lưu trữ tập trung trong cơ sở dữ liệu.

Hệ thống tự động theo dõi SLA, thống kê và sinh báo cáo.

Toàn bộ ứng dụng được triển khai trên AWS nhằm giảm chi phí quản trị hạ tầng và tăng tính sẵn sàng của hệ thống.

---

# 5. Kiến trúc hệ thống



Trong kiến trúc này:

- CloudFront cung cấp HTTPS và tăng tốc truy cập.
- AWS WAF bảo vệ ứng dụng.
- Load Balancer phân phối lưu lượng.
- Elastic Beanstalk quản lý việc triển khai.
- EC2 chạy ứng dụng ASP.NET Core.
- RDS lưu trữ dữ liệu.
- Secrets Manager lưu chuỗi kết nối.
- CloudWatch giám sát hệ thống.
- CloudTrail ghi nhận thao tác quản trị.
- Systems Manager hỗ trợ quản trị EC2.

---

# 6. Các dịch vụ AWS sử dụng

| Dịch vụ | Vai trò |
|---------|----------|
| Amazon VPC | Hạ tầng mạng |
| Public & Private Subnet | Phân tách vùng mạng |
| Security Group | Kiểm soát truy cập |
| AWS IAM | Quản lý quyền |
| Elastic Beanstalk | Triển khai ứng dụng |
| Amazon EC2 | Chạy ứng dụng |
| Amazon RDS SQL Server | Cơ sở dữ liệu |
| Application Load Balancer | Phân phối request |
| Amazon CloudFront | HTTPS và CDN |
| AWS WAF | Bảo vệ Web |
| AWS Secrets Manager | Quản lý Secret |
| Amazon CloudWatch | Monitoring |
| AWS CloudTrail | Audit |
| AWS Systems Manager | Quản trị EC2 |

---

# 7. Chức năng của hệ thống

Hệ thống cung cấp các chức năng:

- Quản lý Ticket.
- Quản lý người dùng.
- Quản lý phòng ban.
- Quản lý danh mục Ticket.
- SLA Monitoring.
- Dashboard.
- Reports.
- Export Excel.
- Quản lý trạng thái Ticket.
- Quản lý lịch sử xử lý.

---

# 8. Quy trình triển khai

## Giai đoạn 1

Phân tích yêu cầu.

- Khảo sát nghiệp vụ.
- Thiết kế Database.
- Thiết kế Use Case.
- Thiết kế giao diện.

## Giai đoạn 2

Phát triển hệ thống.

- ASP.NET Core Razor Pages.
- Identity.
- CRUD.
- Dashboard.
- Reports.

## Giai đoạn 3

Triển khai AWS.

- VPC.
- EC2.
- Elastic Beanstalk.
- RDS.
- IAM.
- Secrets Manager.
- CloudWatch.
- CloudTrail.
- Systems Manager.
- CloudFront.
- WAF.

## Giai đoạn 4

Kiểm thử.

- Login.
- Ticket Workflow.
- SLA.
- Reports.
- Monitoring.

## Giai đoạn 5

Đưa vào vận hành.

- Demo.
- Theo dõi CloudWatch.
- Kiểm tra Billing.
- Dọn dẹp tài nguyên.

---

# 9. Đánh giá rủi ro

| Rủi ro | Giải pháp |
|---------|-----------|
| EC2 không kết nối RDS | Kiểm tra Security Group và VPC |
| Mất quyền truy cập Database | Sử dụng IAM Role và Secrets Manager |
| Lỗi triển khai | Theo dõi Elastic Beanstalk Events |
| Hiệu năng giảm | Theo dõi CloudWatch Metrics |
| Chi phí tăng | Thiết lập AWS Budgets |
| Truy cập trái phép | AWS WAF, HTTPS và Security Group |

---

# 10. Giá trị mang lại

Sau khi triển khai, hệ thống mang lại nhiều lợi ích:

- Chuẩn hóa quy trình HelpDesk.
- Quản lý tập trung.
- Theo dõi SLA.
- Báo cáo trực quan.
- Giảm thời gian xử lý Ticket.
- Tăng hiệu suất làm việc.
- Giảm chi phí quản trị hạ tầng.
- Khả năng mở rộng cao.
- Bảo mật tốt hơn.
- Dễ dàng bảo trì.

---

# 11. Kết quả mong đợi

Sau khi hoàn thành, hệ thống có thể:

- Quản lý Ticket.
- Theo dõi SLA.
- Quản lý người dùng.
- Quản lý phòng ban.
- Dashboard.
- Reports.
- Export Excel.
- Monitoring.
- Logging.
- Triển khai hoàn chỉnh trên AWS.

---

# 12. Hướng phát triển

Trong tương lai hệ thống có thể mở rộng thêm:

- Email Notification.
- SMS Notification.
- Upload Attachment.
- Amazon SES.
- Single Sign-On (SSO).
- Multi-Tenant.
- Amazon QuickSight Dashboard.
- CI/CD Pipeline.
- AI hỗ trợ phân loại Ticket.
- Chatbot hỗ trợ người dùng.