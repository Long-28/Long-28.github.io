---
title: "AWS IAM - Nền tảng đầu tiên khi bắt đầu học Amazon Web Services"
weight: 1
date: 2026-07-22
description: "Chia sẻ kiến thức cơ bản về AWS Identity and Access Management (IAM) và lý do đây là dịch vụ đầu tiên nên học khi bắt đầu với AWS."
---

# AWS IAM - Nền tảng đầu tiên khi bắt đầu học Amazon Web Services

Xin chào mọi người!

Khi bắt đầu tìm hiểu về Amazon Web Services (AWS), mình từng nghĩ rằng nên học ngay những dịch vụ phổ biến như Amazon EC2 hoặc Amazon S3. Tuy nhiên, sau quá trình học tập và thực hành, mình nhận ra rằng **AWS Identity and Access Management (IAM)** mới là nền tảng quan trọng nhất.

Lý do rất đơn giản: gần như mọi dịch vụ trên AWS đều liên quan đến việc quản lý quyền truy cập. Nếu không hiểu IAM, rất dễ gặp các lỗi về phân quyền hoặc vô tình tạo ra những rủi ro bảo mật.

Trong bài viết này, mình sẽ chia sẻ những kiến thức cơ bản về IAM cũng như những điều mình học được trong quá trình tìm hiểu.

---

# IAM là gì?

AWS Identity and Access Management (IAM) là dịch vụ giúp quản lý danh tính và quyền truy cập đối với các tài nguyên trên AWS.

IAM giúp trả lời ba câu hỏi quan trọng:

- Ai được phép truy cập hệ thống?
- Người đó được phép thực hiện những hành động nào?
- Người đó được phép truy cập những tài nguyên nào?

Thay vì sử dụng tài khoản Root cho mọi thao tác, AWS khuyến nghị sử dụng IAM User hoặc IAM Role với các quyền phù hợp nhằm tăng tính bảo mật.

---

# Các thành phần chính của IAM

## IAM User

IAM User đại diện cho một người dùng hoặc một ứng dụng cần truy cập AWS.

Mỗi người dùng nên có một tài khoản riêng để:

- Dễ dàng quản lý.
- Theo dõi lịch sử hoạt động.
- Thu hồi quyền khi không còn sử dụng.

---

## IAM Group

IAM Group là tập hợp nhiều User có cùng quyền truy cập.

Ví dụ:

- Developers
- DevOps
- Administrators

Khi một User được thêm vào Group, người dùng đó sẽ tự động nhận toàn bộ quyền đã được cấu hình cho Group.

Điều này giúp việc quản lý trở nên đơn giản hơn so với việc cấp quyền riêng lẻ cho từng User.

---

## IAM Policy

IAM Policy là tập hợp các quyền được định nghĩa dưới dạng JSON.

Một Policy có thể cho phép:

- Đọc dữ liệu từ Amazon S3.
- Khởi động hoặc dừng Amazon EC2.
- Xem log trên Amazon CloudWatch.

Policy có thể được gắn vào User, Group hoặc Role để kiểm soát quyền truy cập.

---

## IAM Role

Khác với IAM User, IAM Role không đại diện cho một người dùng cụ thể mà được sử dụng để cấp quyền tạm thời cho dịch vụ hoặc ứng dụng.

Ví dụ:

- Amazon EC2 cần đọc dữ liệu từ Amazon S3.
- AWS Lambda cần ghi log lên Amazon CloudWatch.

Thay vì lưu Access Key trong ứng dụng, EC2 hoặc Lambda sẽ sử dụng IAM Role để lấy quyền truy cập một cách an toàn hơn.

---

# Nguyên tắc Least Privilege

Một trong những nguyên tắc quan trọng nhất khi sử dụng IAM là **Least Privilege** (quyền tối thiểu cần thiết).

Điều này có nghĩa là chỉ cấp đúng những quyền mà người dùng hoặc dịch vụ thực sự cần để hoàn thành công việc.

Ví dụ:

- Lập trình viên chỉ cần triển khai ứng dụng thì không nên có quyền xóa Amazon S3 Bucket.
- Nhân viên phân tích dữ liệu chỉ cần quyền đọc dữ liệu, không cần quyền chỉnh sửa hoặc xóa.

Việc áp dụng nguyên tắc này giúp giảm thiểu rủi ro khi tài khoản bị lộ hoặc bị sử dụng sai mục đích.

---

# Những điều mình học được

Sau quá trình thực hành IAM, mình nhận thấy đây không chỉ là dịch vụ để tạo tài khoản người dùng mà còn là nền tảng để xây dựng một hệ thống an toàn và dễ quản lý.

Một số kinh nghiệm mình rút ra:

- Không sử dụng tài khoản Root cho công việc hằng ngày.
- Phân quyền thông qua Group thay vì cấp trực tiếp cho từng User.
- Chỉ cấp đúng những quyền cần thiết.
- Sử dụng IAM Role thay cho Access Key khi ứng dụng chạy trên AWS.
- Thường xuyên rà soát và loại bỏ các quyền không còn sử dụng.

Đây cũng là những Best Practices được AWS khuyến nghị áp dụng trong môi trường thực tế.

---

# Kết luận

IAM là dịch vụ đầu tiên mình lựa chọn khi bắt đầu học AWS vì đây là nền tảng của hầu hết các dịch vụ trên nền tảng đám mây.

Hiểu rõ IAM không chỉ giúp quản lý người dùng và quyền truy cập hiệu quả mà còn tạo tiền đề để tiếp cận các dịch vụ khác như Amazon EC2, Amazon S3, Amazon RDS, AWS Lambda hay Amazon CloudWatch.

Trong bài viết tiếp theo, mình sẽ chia sẻ về **AWS CloudTrail** – dịch vụ giúp ghi lại toàn bộ hoạt động trên tài khoản AWS, hỗ trợ theo dõi, kiểm tra và điều tra các sự cố bảo mật.

Cảm ơn mọi người đã dành thời gian đọc bài viết. Nếu có góp ý hoặc kinh nghiệm về AWS IAM, mình rất mong được trao đổi trong phần bình luận.

---

https://www.facebook.com/groups/awsstudygroupfcj/permalink/2219720912126202/?rdid=yUch2Eicv7H4YBwW#