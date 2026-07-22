---
title: "Dọn dẹp tài nguyên"
weight: 9
description: "Dọn dẹp tài nguyên"
---

# Dọn dẹp tài nguyên

Sau khi hoàn thành workshop, cần xóa toàn bộ tài nguyên đã tạo trên AWS để tránh phát sinh chi phí không cần thiết. Trong phần này, chúng ta sẽ lần lượt xóa môi trường Elastic Beanstalk, AWS WAF, Amazon RDS, Secrets Manager và các Security Group đã tạo.

---

### Bước 1. Xóa môi trường Elastic Beanstalk

Trước tiên, cần xóa môi trường Elastic Beanstalk để giải phóng các tài nguyên như EC2, Load Balancer và Auto Scaling Group.

Thực hiện các bước sau:

1. Mở dịch vụ **Elastic Beanstalk**.
2. Chọn môi trường **EnterpriseHelpDesk**.
3. Nhấn **Actions**.
4. Chọn **Terminate environment**.
5. Xác nhận việc xóa môi trường.
6. Chờ AWS hoàn tất quá trình dọn dẹp.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/30-terminate-environment.jpg" target="_blank">
        <img src="/images/workshop/30-terminate-environment.jpg"
             alt="Terminate Elastic Beanstalk Environment"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 30. Xóa môi trường Elastic Beanstalk.</i></p>
</div>

---

### Bước 2. Xóa Web ACL của AWS WAF

Sau khi môi trường Elastic Beanstalk đã được xóa, tiếp tục xóa Web ACL đã tạo trong AWS WAF.

Thực hiện các bước sau:

1. Mở dịch vụ **AWS WAF**.
2. Chọn Web ACL **EnterpriseHelpDesk-WAF**.
3. Nhấn **Actions**.
4. Chọn **Delete protection pack (web ACL)**.
5. Xác nhận thao tác xóa.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/31-delete-web-acl.jpg" target="_blank">
        <img src="/images/workshop/31-delete-web-acl.jpg"
             alt="Delete AWS WAF Web ACL"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 31. Xóa Web ACL trong AWS WAF.</i></p>
</div>

---

### Bước 3. Xóa cơ sở dữ liệu Amazon RDS

Sau khi không còn ứng dụng sử dụng cơ sở dữ liệu, tiến hành xóa Amazon RDS.

Thực hiện các bước sau:

1. Mở dịch vụ **Amazon RDS**.
2. Chọn cơ sở dữ liệu **enterprisehelpdesk-db**.
3. Nhấn **Actions**.
4. Chọn **Delete**.
5. Bỏ chọn **Create final snapshot** (nếu không cần sao lưu dữ liệu).
6. Xác nhận việc xóa cơ sở dữ liệu.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/32-delete-rds.jpg" target="_blank">
        <img src="/images/workshop/32-delete-rds.jpg"
             alt="Delete Amazon RDS"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 32. Xóa cơ sở dữ liệu Amazon RDS.</i></p>
</div>

---

### Bước 4. Xóa Secret trong AWS Secrets Manager

Sau khi Amazon RDS đã được xóa, tiếp tục xóa Secret lưu thông tin kết nối cơ sở dữ liệu.

Thực hiện các bước sau:

1. Mở dịch vụ **AWS Secrets Manager**.
2. Chọn Secret của hệ thống **EnterpriseHelpDesk**.
3. Nhấn **Actions**.
4. Chọn **Delete secret**.
5. Xác nhận việc xóa Secret.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/33-delete-secret.jpg" target="_blank">
        <img src="/images/workshop/33-delete-secret.jpg"
             alt="Delete Secret"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 33. Xóa Secret trong AWS Secrets Manager.</i></p>
</div>

---

### Bước 5. Xóa Security Groups

Cuối cùng, xóa các Security Group đã tạo trong phần Amazon VPC.

Thực hiện các bước sau:

1. Mở dịch vụ **Amazon EC2**.
2. Chọn **Security Groups**.
3. Chọn lần lượt các Security Group sau:
   - **EnterpriseHelpDesk-ALB-SG**
   - **EnterpriseHelpDesk-App-SG**
   - **EnterpriseHelpDesk-RDS-SG**
4. Nhấn **Actions**.
5. Chọn **Delete security groups**.
6. Xác nhận thao tác xóa.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/34-delete-security-groups.jpg" target="_blank">
        <img src="/images/workshop/34-delete-security-groups.jpg"
             alt="Delete Security Groups"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 34. Xóa các Security Group.</i></p>
</div>

---

## Kết quả

Sau khi hoàn thành các bước trên, toàn bộ tài nguyên được tạo trong workshop sẽ được dọn dẹp, bao gồm:

- Môi trường AWS Elastic Beanstalk.
- AWS WAF Web ACL.
- Cơ sở dữ liệu Amazon RDS.
- Secret trong AWS Secrets Manager.
- Các Security Group.

Việc dọn dẹp tài nguyên sau khi hoàn thành workshop giúp tránh phát sinh chi phí không cần thiết và giữ cho tài khoản AWS luôn gọn gàng, sẵn sàng cho các lần triển khai tiếp theo.
