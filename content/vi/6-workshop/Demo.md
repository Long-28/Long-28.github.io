---
title: "Demo"
weight: 10
description: "Kiểm tra hoạt động của hệ thống Enterprise HelpDesk sau khi triển khai trên AWS."
---

# Demo hệ thống Enterprise HelpDesk

Trong phần này, chúng ta sẽ kiểm tra hoạt động của hệ thống Enterprise HelpDesk sau khi triển khai thành công trên AWS. Các chức năng nghiệp vụ của ứng dụng cũng như các dịch vụ AWS sẽ được minh họa thông qua các tình huống thực tế nhằm chứng minh hệ thống hoạt động ổn định, an toàn và đáp ứng đúng kiến trúc đã thiết kế.

---

## Demo 1. Đăng nhập hệ thống

Người dùng nhập tài khoản và mật khẩu để xác thực. Sau khi đăng nhập thành công, hệ thống sẽ xác định vai trò của người dùng và hiển thị giao diện tương ứng.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/35-user-login.jpg" target="_blank">
        <img src="/images/workshop/35-user-login.jpg"
             alt="Đăng nhập hệ thống"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 35. Người dùng đăng nhập vào hệ thống Enterprise HelpDesk.</i></p>
</div>

---

## Demo 2. Xác thực người dùng với Amazon RDS

Thông tin tài khoản, quyền truy cập và dữ liệu nghiệp vụ được lưu trong Amazon RDS SQL Server. Khi người dùng đăng nhập, ứng dụng sẽ truy vấn dữ liệu từ cơ sở dữ liệu này để xác thực.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/36-rds-authentication.jpg" target="_blank">
        <img src="/images/workshop/36-rds-authentication.jpg"
             alt="Amazon RDS Authentication"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 36. Xác thực người dùng bằng dữ liệu lưu trong Amazon RDS.</i></p>
</div>

---

## Demo 3. AWS Secrets Manager

Thông tin đăng nhập cơ sở dữ liệu được lưu trong AWS Secrets Manager thay vì ghi trực tiếp trong mã nguồn. Điều này giúp tăng cường bảo mật và giảm nguy cơ lộ thông tin nhạy cảm.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/37-secrets-manager.jpg" target="_blank">
        <img src="/images/workshop/37-secrets-manager.jpg"
             alt="AWS Secrets Manager"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 37. Lưu trữ thông tin kết nối cơ sở dữ liệu trong AWS Secrets Manager.</i></p>
</div>

---

## Demo 4. IAM Instance Profile

EC2 sử dụng IAM Instance Profile để nhận quyền truy cập AWS Secrets Manager. Nhờ đó ứng dụng có thể lấy thông tin kết nối cơ sở dữ liệu một cách an toàn mà không cần sử dụng Access Key.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/38-iam-instance-profile.jpg" target="_blank">
        <img src="/images/workshop/38-iam-instance-profile.jpg"
             alt="IAM Instance Profile"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 38. EC2 sử dụng IAM Instance Profile để truy cập AWS Secrets Manager.</i></p>
</div>

---

## Demo 5. Tạo Ticket

Nhân viên nhập đầy đủ thông tin như tiêu đề, danh mục, mức độ ưu tiên và nội dung mô tả để tạo một yêu cầu hỗ trợ mới.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/39-create-ticket.jpg" target="_blank">
        <img src="/images/workshop/39-create-ticket.jpg"
             alt="Create Ticket"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 39. Tạo yêu cầu hỗ trợ mới trên hệ thống.</i></p>
</div>

---

## Demo 6. Ticket được lưu

Sau khi tạo thành công, hệ thống sinh mã Ticket và lưu thông tin vào cơ sở dữ liệu. Đồng thời một bản ghi lịch sử được tạo để phục vụ việc theo dõi quá trình xử lý.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/40-ticket-created.jpg" target="_blank">
        <img src="/images/workshop/40-ticket-created.jpg"
             alt="Ticket Created"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 40. Ticket được tạo thành công và lưu vào cơ sở dữ liệu.</i></p>
</div>

---

## Demo 7. Xử lý nghiệp vụ trên Elastic Beanstalk

Các chức năng tạo Ticket, tiếp nhận, cập nhật trạng thái, bình luận và lưu lịch sử xử lý đều được thực thi trên ứng dụng ASP.NET Core chạy trong Elastic Beanstalk. Dữ liệu được lưu tập trung trong Amazon RDS SQL Server.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/41-ticket-processing.jpg" target="_blank">
        <img src="/images/workshop/41-ticket-processing.jpg"
             alt="Ticket Processing"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 41. Elastic Beanstalk xử lý các nghiệp vụ của hệ thống Enterprise HelpDesk.</i></p>
</div>

---

## Demo 8. Môi trường Elastic Beanstalk

Elastic Beanstalk chịu trách nhiệm triển khai và quản lý ứng dụng ASP.NET Core. Toàn bộ request từ người dùng sẽ được chuyển đến môi trường này để xử lý.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/42-elastic-beanstalk-environment.jpg" target="_blank">
        <img src="/images/workshop/42-elastic-beanstalk-environment.jpg"
             alt="Elastic Beanstalk Environment"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 42. Môi trường AWS Elastic Beanstalk đang vận hành ứng dụng.</i></p>
</div>

---

## Demo 9. Máy chủ EC2

EC2 là máy chủ chạy ứng dụng Enterprise HelpDesk. Các chức năng như tạo Ticket, phân quyền và xử lý nghiệp vụ đều được thực thi trên EC2.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/43-ec2-instance.jpg" target="_blank">
        <img src="/images/workshop/43-ec2-instance.jpg"
             alt="Amazon EC2"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 43. Máy chủ Amazon EC2 thực thi ứng dụng Enterprise HelpDesk.</i></p>
</div>

---

## Demo 10. Amazon CloudWatch

Amazon CloudWatch ghi nhận số lượng request, thời gian phản hồi và các chỉ số hoạt động của hệ thống nhằm phục vụ việc giám sát và phát hiện sự cố.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/44-cloudwatch-monitoring.jpg" target="_blank">
        <img src="/images/workshop/44-cloudwatch-monitoring.jpg"
             alt="Amazon CloudWatch"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 44. Theo dõi hoạt động của hệ thống bằng Amazon CloudWatch.</i></p>
</div>
---

## Demo 11. Support Agent

Nhân viên hỗ trợ tiếp nhận Ticket, thay đổi trạng thái xử lý và bổ sung nội dung trao đổi trong quá trình giải quyết yêu cầu. Mọi thay đổi đều được cập nhật vào hệ thống nhằm đảm bảo quá trình xử lý được theo dõi đầy đủ.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/45-support-agent.jpg" target="_blank">
        <img src="/images/workshop/45-support-agent.jpg"
             alt="Support Agent"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 45. Nhân viên hỗ trợ tiếp nhận và xử lý Ticket.</i></p>
</div>

---

## Demo 12. Application Load Balancer

Application Load Balancer chỉ chuyển các request đến những EC2 đang ở trạng thái **Healthy**, giúp đảm bảo người dùng luôn được phục vụ bởi các máy chủ hoạt động ổn định và sẵn sàng xử lý yêu cầu.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/46-application-load-balancer.jpg" target="_blank">
        <img src="/images/workshop/46-application-load-balancer.jpg"
             alt="Application Load Balancer"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 46. Application Load Balancer phân phối request đến các EC2 hoạt động.</i></p>
</div>

---

## Demo 13. Auto Scaling Group

Auto Scaling Group quản lý số lượng EC2 theo cấu hình tối thiểu và tối đa, đồng thời tự động thay thế các instance gặp sự cố nhằm duy trì tính sẵn sàng và khả năng mở rộng của hệ thống.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/47-auto-scaling-group.jpg" target="_blank">
        <img src="/images/workshop/47-auto-scaling-group.jpg"
             alt="Auto Scaling Group"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 47. Auto Scaling Group quản lý và duy trì các EC2 trong môi trường.</i></p>
</div>

---

## Demo 14. Dashboard hệ thống

Dashboard hiển thị tổng quan tình trạng xử lý Ticket, số lượng Ticket theo từng trạng thái và các chỉ số SLA, giúp nhà quản lý theo dõi hiệu quả vận hành của hệ thống.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/48-dashboard-overview.jpg" target="_blank">
        <img src="/images/workshop/48-dashboard-overview.jpg"
             alt="Dashboard"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 48. Dashboard tổng quan của hệ thống Enterprise HelpDesk.</i></p>
</div>

---

## Demo 15. Giám sát Amazon RDS

Amazon RDS cung cấp các chỉ số như mức sử dụng CPU, số lượng kết nối và dung lượng lưu trữ để hỗ trợ việc theo dõi hiệu năng và đánh giá tình trạng hoạt động của cơ sở dữ liệu.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/49-rds-monitoring.jpg" target="_blank">
        <img src="/images/workshop/49-rds-monitoring.jpg"
             alt="Amazon RDS Monitoring"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 49. Theo dõi các chỉ số hoạt động của Amazon RDS.</i></p>
</div>

---

## Demo 16. Quản lý người dùng

Quản trị viên có thể tạo mới, cập nhật hoặc vô hiệu hóa tài khoản, đồng thời phân quyền và gán phòng ban cho từng người dùng nhằm đảm bảo việc quản lý tài khoản được thực hiện tập trung.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/50-user-management.jpg" target="_blank">
        <img src="/images/workshop/50-user-management.jpg"
             alt="User Management"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 50. Quản trị viên quản lý tài khoản và phân quyền người dùng.</i></p>
</div>

---

## Demo 17. AWS WAF

AWS WAF sử dụng các Managed Rules để kiểm tra và lọc những request có dấu hiệu tấn công trước khi chuyển tiếp đến Application Load Balancer, góp phần nâng cao khả năng bảo vệ ứng dụng.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/51-aws-waf.jpg" target="_blank">
        <img src="/images/workshop/51-aws-waf.jpg"
             alt="AWS WAF"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 51. AWS WAF bảo vệ ứng dụng trước các request không hợp lệ.</i></p>
</div>

---

## Demo 18. AWS CloudTrail

AWS CloudTrail ghi nhận toàn bộ thao tác quản trị trên hạ tầng AWS như triển khai Elastic Beanstalk, thay đổi IAM Role hoặc cập nhật Security Group. Các bản ghi này hỗ trợ kiểm toán và truy vết sự kiện khi cần thiết.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/52-cloudtrail-events.jpg" target="_blank">
        <img src="/images/workshop/52-cloudtrail-events.jpg"
             alt="AWS CloudTrail"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 52. AWS CloudTrail ghi nhận các hoạt động quản trị trên hạ tầng AWS.</i></p>
</div>

---

## Demo 19. Security Group

Hệ thống sử dụng Security Group để phân tách quyền truy cập giữa Application Load Balancer, EC2 và Amazon RDS. Chỉ những kết nối hợp lệ mới được phép đi qua từng tầng của kiến trúc, góp phần tăng cường khả năng bảo mật cho toàn bộ hệ thống.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/53-security-groups.jpg" target="_blank">
        <img src="/images/workshop/53-security-groups.jpg"
             alt="Security Groups"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Hình 53. Security Group kiểm soát luồng truy cập giữa các thành phần của hệ thống.</i></p>
</div>

---

# Kết quả

Sau khi hoàn thành phần Demo, hệ thống **Enterprise HelpDesk** đã được kiểm chứng hoạt động thành công trên nền tảng AWS.

Các chức năng nghiệp vụ như đăng nhập, tạo Ticket, tiếp nhận và xử lý yêu cầu hỗ trợ đều hoạt động ổn định trên ứng dụng ASP.NET Core được triển khai bằng AWS Elastic Beanstalk. Dữ liệu được lưu trữ tập trung trong Amazon RDS SQL Server, trong khi AWS Secrets Manager hỗ trợ quản lý thông tin kết nối cơ sở dữ liệu một cách an toàn.

Bên cạnh đó, các dịch vụ như Application Load Balancer, Auto Scaling Group, Amazon CloudWatch, AWS WAF và AWS CloudTrail đã được cấu hình và hoạt động đúng vai trò trong kiến trúc, góp phần đảm bảo khả năng mở rộng, giám sát, bảo mật và tính sẵn sàng của hệ thống.

Thông qua quá trình triển khai và kiểm thử, có thể thấy kiến trúc AWS được xây dựng đáp ứng tốt yêu cầu của hệ thống Enterprise HelpDesk, đồng thời tạo nền tảng thuận lợi cho việc mở rộng và vận hành ứng dụng trong môi trường thực tế.