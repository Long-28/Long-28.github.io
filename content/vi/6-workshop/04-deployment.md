---
title: "Triển khai"
weight: 4
description: "Triển khai hệ thống Enterprise HelpDesk trên AWS"
---

# Triển khai hệ thống Enterprise HelpDesk trên AWS

Trong phần này, chúng ta sẽ tiến hành xây dựng hạ tầng mạng cho hệ thống Enterprise HelpDesk bằng Amazon VPC. Sau khi hoàn thành, môi trường sẽ sẵn sàng để triển khai cơ sở dữ liệu Amazon RDS và ứng dụng bằng AWS Elastic Beanstalk.

---
## Nội dung triển khai

- [Phần 1. Amazon VPC](#phan-1-amazon-vpc)
- [Phần 2. Amazon RDS](#phan-2-amazon-rds)
- [Phần 3. AWS Elastic Beanstalk](#phan-3-aws-elastic-beanstalk)

---
<h2 id="phan-1-amazon-vpc"
    style="text-align:center; font-size:36px; margin:50px 0 30px 0;">
    Phần 1. Xây dựng hạ tầng mạng với Amazon VPC
</h2>

Amazon Virtual Private Cloud (Amazon VPC) cho phép tạo một mạng riêng trên AWS để triển khai các tài nguyên của hệ thống. Trong workshop này, chúng ta sẽ cấu hình một VPC gồm Public Subnet, Private Subnet, Internet Gateway, Route Table và Security Group.



---

## Bước 1. Tạo Amazon VPC

Đăng nhập vào **AWS Management Console**.

Thực hiện:

1. Tìm và mở dịch vụ **Amazon VPC**.
2. Chọn **Your VPCs**.
3. Nhấn **Create VPC**.
4. Đặt tên VPC là **EnterpriseHelpDesk-VPC**.
5. Chọn dải địa chỉ IPv4 CIDR phù hợp.
6. Nhấn **Create VPC**.

Sau khi hoàn thành, AWS sẽ tạo một mạng riêng dùng để triển khai toàn bộ tài nguyên của hệ thống.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/01-create-vpc.jpg"
         alt="Tạo Amazon VPC"
         style="width:65%;">
</div>

---

## Bước 2. Tạo Public Subnet và Private Subnet

Sau khi tạo VPC, tiếp tục tạo các Subnet.

Trong workshop này sẽ sử dụng:

- Public-Subnet-A
- Public-Subnet-B
- Private-Subnet-A
- Private-Subnet-B

Việc tách Public và Private Subnet giúp tăng tính bảo mật và tuân theo mô hình triển khai nhiều tầng trên AWS.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/02-create-subnets.jpg"
         alt="Tạo Public Subnet và Private Subnet"
         style="width:65%;">
</div>

---

## Bước 3. Tạo Internet Gateway

Để các tài nguyên trong Public Subnet có thể truy cập Internet, cần tạo Internet Gateway.

Thực hiện:

1. Mở **Amazon VPC**.
2. Chọn **Internet Gateways**.
3. Nhấn **Create internet gateway**.
4. Nhập:

| Thuộc tính | Giá trị |
|------------|---------|
| Name tag | EnterpriseHelpDesk-IGW |

5. Nhấn **Create internet gateway**.

Sau khi tạo thành công, Internet Gateway sẽ ở trạng thái **Available**, tuy nhiên vẫn chưa được sử dụng cho đến khi gắn với VPC.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/03-create-internet-gateway.jpg"
         alt="Tạo Internet Gateway"
         style="width:65%;">
</div>

---

## Bước 4. Gắn Internet Gateway vào VPC

Sau khi tạo Internet Gateway, cần kết nối với VPC.

Thực hiện:

1. Chọn Internet Gateway vừa tạo.
2. Chọn **Actions → Attach to VPC**.
3. Chọn **EnterpriseHelpDesk-VPC**.
4. Nhấn **Attach internet gateway**.

Sau khi hoàn thành, Internet Gateway sẽ được sử dụng để cung cấp kết nối Internet cho các Public Subnet.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/04-attach-internet-gateway.jpg"
         alt="Gắn Internet Gateway vào VPC"
         style="width:65%;">
</div>

---

## Bước 5. Cấu hình Public Route Table

Tiếp tục cấu hình định tuyến cho Public Subnet.

Thực hiện:

1. Mở **Route Tables**.
2. Chọn Route Table của VPC.
3. Đổi tên thành **EnterpriseHelpDesk-Public-RT**.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/05-public-route-table.jpg"
         alt="Cấu hình Public Route Table"
         style="width:65%;">
</div>

---

## Bước 6. Thêm tuyến mặc định

Trong Public Route Table:

1. Chọn **Routes**.
2. Nhấn **Edit routes**.
3. Chọn **Add route**.
4. Nhập:

| Destination | Target |
|-------------|--------|
| 0.0.0.0/0 | EnterpriseHelpDesk-IGW |

5. Nhấn **Save changes**.

Route này cho phép Public Subnet truy cập Internet thông qua Internet Gateway.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/06-public-route.jpg"
         alt="Thêm tuyến mặc định cho Public Route Table"
         style="width:65%;">
</div>

---

## Bước 7. Liên kết Public Subnet

Tiếp tục gắn Public Route Table cho các Public Subnet.

Thực hiện:

1. Chọn tab **Subnet Associations**.
2. Nhấn **Edit subnet associations**.
3. Chọn:
   - Public-Subnet-A
   - Public-Subnet-B
4. Nhấn **Save associations**.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/07-public-subnet-association.jpg"
         alt="Liên kết Public Subnet"
         style="width:65%;">
</div>

---

## Bước 8. Tạo Private Route Table

Tiếp tục tạo Route Table dành riêng cho Private Subnet.

Thực hiện:

1. Chọn **Create route table**.
2. Đặt tên:

**EnterpriseHelpDesk-Private-RT**

3. Chọn VPC của dự án.
4. Nhấn **Create route table**.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/08-private-route-table.jpg"
         alt="Tạo Private Route Table"
         style="width:65%;">
</div>

---

## Bước 9. Liên kết Private Subnet

Sau khi tạo Private Route Table:

1. Chọn **Subnet Associations**.
2. Nhấn **Edit subnet associations**.
3. Chọn:
   - Private-Subnet-A
   - Private-Subnet-B
4. Nhấn **Save associations**.

Việc sử dụng Private Route Table giúp các tài nguyên như Amazon RDS không thể truy cập trực tiếp từ Internet.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/09-private-subnet-association.jpg"
         alt="Liên kết Private Subnet"
         style="width:65%;">
</div>

---

## Bước 10. Tạo Security Group cho Application Load Balancer

Mở **Security Groups**.

Nhấn **Create Security Group**.

Tạo Security Group dành cho Application Load Balancer và cấu hình:

| Type | Port | Source |
|------|------|--------|
| HTTP | 80 | 0.0.0.0/0 |
| HTTPS | 443 | 0.0.0.0/0 |

Sau khi hoàn thành, nhấn **Create Security Group**.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/10-create-alb-security-group.jpg"
         alt="Tạo Security Group cho Application Load Balancer"
         style="width:65%;">
</div>

---

## Bước 11. Tạo Security Group cho Amazon EC2

Tiếp tục tạo Security Group mới dành cho EC2.

Chỉ cho phép Application Load Balancer truy cập vào máy chủ ứng dụng.

Điều này giúp ngăn chặn truy cập trực tiếp từ Internet đến EC2.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/11-create-ec2-security-group.jpg"
         alt="Tạo Security Group cho Amazon EC2"
         style="width:65%;">
</div>

---

## Bước 12. Tạo Security Group cho Amazon RDS

Tạo Security Group dành cho Amazon RDS SQL Server.

Chỉ cho phép EC2 hoặc Elastic Beanstalk kết nối tới cơ sở dữ liệu thông qua cổng SQL Server.

Không nên mở quyền truy cập trực tiếp từ Internet.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/12-create-rds-security-group.jpg"
         alt="Tạo Security Group cho Amazon RDS"
         style="width:65%;">
</div>

---

# Kết quả đạt được

Sau khi hoàn thành phần triển khai Amazon VPC, hệ thống sẽ có:

- 01 Amazon VPC.
- 02 Public Subnet.
- 02 Private Subnet.
- 01 Internet Gateway.
- 01 Public Route Table.
- 01 Private Route Table.
- Security Group cho Application Load Balancer.
- Security Group cho Amazon EC2.
- Security Group cho Amazon RDS.

Hạ tầng mạng này sẽ được sử dụng trong các bước tiếp theo để triển khai Amazon RDS SQL Server và ứng dụng Enterprise HelpDesk bằng AWS Elastic Beanstalk.

---

<h2 id="phan-2-amazon-rds"
    style="text-align:center; font-size:36px; margin:50px 0 30px 0;">
    Phần 2. Triển khai cơ sở dữ liệu với Amazon RDS
</h2>

Amazon Relational Database Service (Amazon RDS) là dịch vụ cơ sở dữ liệu được quản lý trên AWS. Trong workshop này, Amazon RDS được sử dụng để triển khai cơ sở dữ liệu Microsoft SQL Server phục vụ cho hệ thống Enterprise HelpDesk.

Sau khi hoàn thành phần này, cơ sở dữ liệu sẽ được triển khai trong Private Subnet và chỉ cho phép các tài nguyên trong VPC truy cập thông qua Security Group đã cấu hình ở phần trước.

### Bước 1. Tạo DB Subnet Group

DB Subnet Group cho phép Amazon RDS triển khai cơ sở dữ liệu trên nhiều Private Subnet nhằm tăng tính sẵn sàng và đảm bảo cơ sở dữ liệu không được truy cập trực tiếp từ Internet.

Thực hiện các bước sau:

1. Đăng nhập **AWS Management Console**.
2. Tìm và mở dịch vụ **Amazon RDS**.
3. Chọn **Subnet groups**.
4. Nhấn **Create DB subnet group**.
5. Đặt tên **EnterpriseHelpDesk-DBSubnetGroup**.
6. Chọn VPC **EnterpriseHelpDesk-VPC**.
7. Chọn hai Private Subnet đã tạo ở phần Amazon VPC.
8. Nhấn **Create**.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/13-create-db-subnet-group.jpg"
       target="_blank"
       rel="noopener noreferrer">
        <img src="/images/workshop/13-create-db-subnet-group.jpg"
             alt="Tạo DB Subnet Group"
             title="Bấm vào hình để xem kích thước đầy đủ"
             style="width:65%; cursor:zoom-in; border-radius:6px;">
    </a>
    <p style="margin-top:8px; font-size:14px; color:#666;">
        Bấm vào hình để xem kích thước đầy đủ
    </p>
</div>

---

### Bước 2. Tạo cơ sở dữ liệu Amazon RDS

Sau khi tạo DB Subnet Group, tiến hành tạo cơ sở dữ liệu mới.

Thực hiện các bước sau:

1. Chọn **Databases**.
2. Nhấn **Create database**.
3. Chọn **Standard Create**.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/14-create-database.jpg"
         alt="Create Database"
         style="width:65%;">
</div>

---

### Bước 3. Chọn Microsoft SQL Server

Tiếp tục cấu hình cơ sở dữ liệu.

Thực hiện các bước sau:

1. Chọn **Microsoft SQL Server**.
2. Chọn phiên bản SQL Server phù hợp.
3. Chọn mẫu triển khai **Free tier** hoặc **Dev/Test** (nếu có).

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/15-select-sql-server-engine.jpg"
         alt="Select SQL Server Engine"
         style="width:65%;">
</div>

---

### Bước 4. Cấu hình DB Instance

Thiết lập thông tin cho cơ sở dữ liệu.

Thực hiện các bước sau:

1. Nhập **DB instance identifier**.
2. Nhập **Master username**.
3. Nhập và xác nhận **Master password**.
4. Chọn loại Instance phù hợp.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/16-configure-db-instance.jpg"
         alt="Configure DB Instance"
         style="width:65%;">
</div>

---

### Bước 5. Cấu hình Storage

Tiếp tục cấu hình dung lượng lưu trữ.

Thực hiện các bước sau:

1. Chọn loại Storage.
2. Thiết lập dung lượng lưu trữ.
3. Bật hoặc tắt Storage Autoscaling theo yêu cầu.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/17-configure-storage.jpg"
         alt="Configure Storage"
         style="width:65%;">
</div>

---

### Bước 6. Cấu hình mạng

Tiếp tục cấu hình kết nối mạng.

Thực hiện các bước sau:

1. Chọn **EnterpriseHelpDesk-VPC**.
2. Chọn **EnterpriseHelpDesk-DBSubnetGroup**.
3. Chọn **No** tại mục **Public Access**.
4. Giữ nguyên các thiết lập còn lại.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/18-configure-network.jpg"
         alt="Configure Network"
         style="width:65%;">
</div>

---

### Bước 7. Chọn Security Group

Cuối cùng, cấu hình Security Group cho Amazon RDS.

Thực hiện các bước sau:

1. Chọn Security Group đã tạo ở phần Amazon VPC.
2. Kiểm tra lại toàn bộ thông tin cấu hình.
3. Nhấn **Create database** để bắt đầu triển khai.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/19-select-rds-security-group.png"
         alt="Select RDS Security Group"
         style="width:65%;">
</div>

---

<h2 id="phan-3-aws-elastic-beanstalk"
    style="text-align:center; font-size:36px; margin:50px 0 30px 0;">
    Phần 3. Triển khai ứng dụng với AWS Elastic Beanstalk
</h2>

AWS Elastic Beanstalk là dịch vụ của Amazon Web Services hỗ trợ triển khai và quản lý ứng dụng một cách nhanh chóng mà không cần cấu hình thủ công toàn bộ hạ tầng. Trong workshop này, Elastic Beanstalk được sử dụng để triển khai ứng dụng **Enterprise HelpDesk** trên nền tảng .NET, đồng thời kết nối với cơ sở dữ liệu Amazon RDS đã được tạo ở phần trước.

Sau khi hoàn thành phần này, ứng dụng sẽ được triển khai thành công và có thể truy cập thông qua địa chỉ URL do AWS Elastic Beanstalk cung cấp.

---

### Bước 1. Tạo Service Role

Service Role cho phép AWS Elastic Beanstalk quản lý các tài nguyên AWS và theo dõi trạng thái của môi trường triển khai.

Thực hiện các bước sau:

1. Đăng nhập **AWS Management Console**.
2. Mở dịch vụ **IAM**.
3. Chọn **Roles**.
4. Nhấn **Create role**.
5. Tại **Trusted entity type**, chọn **AWS service**.
6. Tại **Service or use case**, chọn **Elastic Beanstalk**.
7. Chọn **Elastic Beanstalk – Environment**.
8. Nhấn **Next**.
9. Kiểm tra hai Policy đã được chọn:
   - **AWSElasticBeanstalkEnhancedHealth**
   - **AWSElasticBeanstalkManagedUpdatesCustomerRolePolicy**
10. Đặt tên Role là **aws-elasticbeanstalk-service-role**.
11. Nhấn **Create role**.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/20-create-service-role.jpg" target="_blank">
        <img src="/images/workshop/20-create-service-role.jpg"
             alt="Create Service Role"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 20. Tạo Service Role cho Elastic Beanstalk.</i></p>
</div>

---

### Bước 2. Tạo EC2 Instance Profile Role

EC2 Instance Profile Role cho phép các máy chủ EC2 trong môi trường Elastic Beanstalk truy cập các dịch vụ AWS theo quyền đã được cấp.

Thực hiện các bước sau:

1. Trong dịch vụ **IAM**, chọn **Roles**.
2. Nhấn **Create role**.
3. Chọn **AWS service**.
4. Chọn **Elastic Beanstalk**.
5. Chọn **Elastic Beanstalk – Compute**.
6. Giữ nguyên các Policy mặc định:
   - **AWSElasticBeanstalkWebTier**
   - **AWSElasticBeanstalkWorkerTier**
   - **AWSElasticBeanstalkMulticontainerDocker**
7. Đặt tên Role là **aws-elasticbeanstalk-ec2-role**.
8. Nhấn **Create role**.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/21-create-ec2-role.jpg" target="_blank">
        <img src="/images/workshop/21-create-ec2-role.jpg"
             alt="Create EC2 Role"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 21. Tạo EC2 Instance Profile Role.</i></p>
</div>

---

### Bước 3. Cấp quyền đọc Secrets Manager

Để ứng dụng có thể đọc thông tin kết nối cơ sở dữ liệu từ AWS Secrets Manager, cần cấp quyền cho EC2 Instance Profile Role.

Thực hiện các bước sau:

1. Mở Role **aws-elasticbeanstalk-ec2-role**.
2. Chọn tab **Permissions**.
3. Nhấn **Add permissions**.
4. Chọn **Create inline policy**.
5. Chọn tab **JSON**.
6. Xóa nội dung mặc định.
7. Dán Policy đã chuẩn bị.
8. Nhấn **Next**.
9. Hoàn tất việc tạo Inline Policy.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/22-create-inline-policy.jpg" target="_blank">
        <img src="/images/workshop/22-create-inline-policy.jpg"
             alt="Create Inline Policy"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 22. Cấp quyền đọc Secrets Manager.</i></p>
</div>

---

### Bước 4. Tạo Elastic Beanstalk Application

Sau khi hoàn tất cấu hình IAM, tiến hành tạo Application trên Elastic Beanstalk.

Thực hiện các bước sau:

1. Mở dịch vụ **Elastic Beanstalk**.
2. Chọn **Create application**.
3. Nhập tên Application là **EnterpriseHelpDesk**.
4. Tại mục **Application code**, chọn **Sample application**.
5. Chọn **Service Role** là **aws-elasticbeanstalk-service-role**.
6. Chọn **EC2 Instance Profile** là **aws-elasticbeanstalk-ec2-role**.
7. Nhấn **Next**.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/23-create-application.jpg" target="_blank">
        <img src="/images/workshop/23-create-application.jpg"
             alt="Create Elastic Beanstalk Application"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 23. Tạo Elastic Beanstalk Application.</i></p>
</div>

---

### Bước 5. Cấu hình VPC

Tiếp tục cấu hình mạng cho môi trường Elastic Beanstalk.

Thực hiện các bước sau:

1. Tại mục **VPC**, chọn **EnterpriseHelpDesk-VPC**.
2. Chờ AWS tải danh sách Subnets.
3. Giữ nguyên tùy chọn **System default**.
4. Mở phần **Tags**.
5. Thêm Tag với:
   - **Key:** Project
   - **Value:** EnterpriseHelpDesk

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/25-configure-vpc.jpg" target="_blank">
        <img src="/images/workshop/25-configure-vpc.jpg"
             alt="Configure VPC"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 24. Cấu hình VPC cho Elastic Beanstalk.</i></p>
</div>

---

### Bước 6. Chọn Security Group

Để bảo vệ môi trường triển khai, cần gán Security Group đã tạo ở phần Amazon VPC.

Thực hiện các bước sau:

1. Chọn **Choose security groups**.
2. Chọn **EnterpriseHelpDesk-App-SG**.
3. Nhấn **Next**.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/26-select-security-group.jpg" target="_blank">
        <img src="/images/workshop/26-select-security-group.jpg"
             alt="Select Security Group"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 25. Chọn Security Group.</i></p>
</div>

---

### Bước 7. Cấu hình Capacity

Tiếp tục cấu hình tài nguyên cho môi trường Elastic Beanstalk.

Thực hiện các bước sau:

1. Giữ loại Instance là **t3.micro**.
2. Nếu AWS tự động thêm **t3.small**, hãy xóa lựa chọn này.
3. Nhấn **Next** để tiếp tục.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/27-configure-capacity.jpg" target="_blank">
        <img src="/images/workshop/27-configure-capacity.jpg"
             alt="Configure Capacity"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 26. Cấu hình Capacity.</i></p>
</div>

---

### Bước 8. Triển khai ứng dụng

Sau khi hoàn tất việc tạo môi trường, tiến hành triển khai ứng dụng Enterprise HelpDesk.

Thực hiện các bước sau:

1. Chọn **Upload and deploy**.
2. Chọn file Publish (.zip) của ứng dụng Enterprise HelpDesk.
3. Nhấn **Deploy**.
4. Chờ quá trình triển khai hoàn tất.
5. Truy cập URL do AWS Elastic Beanstalk cung cấp để kiểm tra ứng dụng.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/29-upload-and-deploy.jpg" target="_blank">
        <img src="/images/workshop/29-upload-and-deploy.jpg"
             alt="Upload and Deploy"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 27. Upload và triển khai ứng dụng.</i></p>
</div>