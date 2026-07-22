---
title: "Workshop 01 - Xây dựng hạ tầng mạng với Amazon VPC"
weight: 1
date: 2026-07-22
description: "Hướng dẫn xây dựng hạ tầng mạng cho dự án Enterprise HelpDesk trên Amazon Web Services."
---

# Workshop 01 - Xây dựng hạ tầng mạng với Amazon VPC

## Giới thiệu

Trong workshop này, chúng ta sẽ xây dựng hạ tầng mạng cho hệ thống **Enterprise HelpDesk** trên Amazon Web Services (AWS). Đây là bước đầu tiên và cũng là nền tảng quan trọng trước khi triển khai cơ sở dữ liệu, ứng dụng và các dịch vụ khác.

Sau khi hoàn thành workshop, bạn sẽ có một môi trường mạng hoàn chỉnh bao gồm VPC, Public Subnet, Private Subnet, Internet Gateway, Route Table và các Security Group phục vụ cho việc triển khai hệ thống.

---

# Mục tiêu

- Tạo Amazon VPC cho dự án.
- Cấu hình Public Subnet và Private Subnet.
- Kết nối Internet Gateway với VPC.
- Thiết lập Route Table cho Public và Private Subnet.
- Tạo Security Group cho Application Load Balancer, EC2 và Amazon RDS.
- Chuẩn bị hạ tầng mạng cho các workshop tiếp theo.

---

# Điều kiện chuẩn bị

Trước khi bắt đầu, hãy đảm bảo:

- Đã có tài khoản AWS.
- Có quyền truy cập AWS Console.
- Đăng nhập vào Region sử dụng cho dự án.
- Đã chuẩn bị sơ đồ kiến trúc mạng của hệ thống.

---

# Bước 1. Tạo Amazon VPC

Truy cập **Amazon VPC** trên AWS Console và chọn **Create VPC**.

Khai báo tên VPC cùng dải địa chỉ IPv4 CIDR phù hợp với hệ thống Enterprise HelpDesk. Đây sẽ là mạng riêng dùng để triển khai toàn bộ tài nguyên AWS.

![Create VPC](images/01-create-vpc.jpg)

---

# Bước 2. Tạo Public Subnet và Private Subnet

Sau khi tạo VPC, tiếp tục tạo các Subnet.

Trong workshop này, hệ thống sử dụng:

- Public Subnet A
- Public Subnet B
- Private Subnet A
- Private Subnet B

Việc tách Public và Private Subnet giúp tăng tính bảo mật và tuân theo mô hình triển khai nhiều tầng trên AWS.

![Create Subnets](images/02-create-subnets.jpg)

---

# Bước 3. Tạo Internet Gateway

Để các tài nguyên trong Public Subnet có thể truy cập Internet, cần tạo Internet Gateway.

Trong AWS Console:

- Mở **Amazon VPC**
- Chọn **Internet Gateways**
- Nhấn **Create Internet Gateway**
- Đặt tên cho Internet Gateway
- Nhấn **Create**

![Create Internet Gateway](images/03-create-internet-gateway.jpg)

---

# Bước 4. Gắn Internet Gateway vào VPC

Sau khi tạo Internet Gateway, tiếp tục gắn Internet Gateway với VPC.

Thực hiện:

- Chọn Internet Gateway vừa tạo.
- Chọn **Actions → Attach to VPC**.
- Chọn VPC của dự án.
- Nhấn **Attach Internet Gateway**.

![Attach Internet Gateway](images/04-attach-internet-gateway.jpg)

---

# Bước 5. Cấu hình Public Route Table

Tiếp theo, mở **Route Tables** và chọn Route Table của VPC.

Đổi tên Route Table để dễ quản lý, sau đó thêm tuyến mặc định:

- Destination: **0.0.0.0/0**
- Target: **Internet Gateway**

![Public Route Table](images/05-public-route-table.jpg)

---

# Bước 6. Thêm tuyến mặc định

Sau khi mở Route Table, chọn **Edit Routes** và thêm tuyến mặc định để Public Subnet có thể truy cập Internet.

Sau khi hoàn thành, lưu cấu hình.

![Public Route](images/06-public-route.jpg)

---

# Bước 7. Liên kết Public Subnet

Chọn **Subnet Associations**.

Đánh dấu:

- Public Subnet A
- Public Subnet B

Sau đó lưu thay đổi.

![Public Subnet Association](images/07-public-subnet-association.jpg)

---

# Bước 8. Tạo Private Route Table

Tiếp tục tạo một Route Table mới dành cho Private Subnet.

Route Table này sẽ phục vụ các tài nguyên không cần truy cập Internet trực tiếp như Amazon RDS.

![Private Route Table](images/08-private-route-table.jpg)

---

# Bước 9. Liên kết Private Subnet

Mở **Subnet Associations** của Private Route Table.

Liên kết:

- Private Subnet A
- Private Subnet B

Sau đó lưu cấu hình.

![Private Subnet Association](images/09-private-subnet-association.jpg)

---

# Bước 10. Tạo Security Group cho Application Load Balancer

Mở **Security Groups** và tạo Security Group dành cho Application Load Balancer.

Cho phép:

- HTTP (80)
- HTTPS (443)

từ Internet.

![ALB Security Group](images/10-create-alb-security-group.jpg)

---

# Bước 11. Tạo Security Group cho Amazon EC2

Tiếp tục tạo Security Group cho EC2.

Chỉ cho phép nhận lưu lượng từ Security Group của Application Load Balancer nhằm tăng tính bảo mật.

![EC2 Security Group](images/11-create-ec2-security-group.jpg)

---

# Bước 12. Tạo Security Group cho Amazon RDS

Cuối cùng, tạo Security Group dành cho Amazon RDS.

Chỉ cho phép EC2 hoặc Elastic Beanstalk kết nối đến cơ sở dữ liệu, không mở truy cập trực tiếp từ Internet.

![RDS Security Group](images/12-create-rds-security-group.jpg)

---

# Kết quả đạt được

Sau khi hoàn thành workshop, bạn sẽ xây dựng được hạ tầng mạng cơ bản cho dự án Enterprise HelpDesk, bao gồm:

- 01 Amazon VPC.
- 02 Public Subnet.
- 02 Private Subnet.
- 01 Internet Gateway.
- Public Route Table.
- Private Route Table.
- Security Group cho Application Load Balancer.
- Security Group cho Amazon EC2.
- Security Group cho Amazon RDS.

Hạ tầng này là nền tảng để triển khai cơ sở dữ liệu, ứng dụng ASP.NET Core và các dịch vụ AWS khác trong những workshop tiếp theo.

---

# Kiến thức đạt được

Sau workshop này, bạn có thể:

- Hiểu cách xây dựng hạ tầng mạng trên AWS.
- Phân biệt Public Subnet và Private Subnet.
- Cấu hình Internet Gateway và Route Table.
- Thiết lập Security Group theo nguyên tắc bảo mật tối thiểu.
- Chuẩn bị môi trường triển khai cho các dịch vụ như Amazon RDS và AWS Elastic Beanstalk.