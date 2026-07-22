---
title: "Demo"
weight: 10
description: "Verify the functionality of the Enterprise HelpDesk system after deployment on AWS."
---

# Enterprise HelpDesk System Demo

In this section, you will verify the functionality of the Enterprise HelpDesk system after it has been successfully deployed on AWS. The application's business features and AWS services are demonstrated through real-world scenarios to validate that the system operates reliably, securely, and according to the designed architecture.

---

## Demo 1. User Sign-In

Users enter their username and password to authenticate. After a successful sign-in, the system identifies the user's role and displays the appropriate interface.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/35-user-login.jpg" target="_blank">
        <img src="/images/workshop/35-user-login.jpg"
             alt="User Sign-In"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 35. User signing in to the Enterprise HelpDesk system.</i></p>
</div>

---

## Demo 2. User Authentication with Amazon RDS

User accounts, access permissions, and business data are stored in **Amazon RDS for SQL Server**. During sign-in, the application queries the database to authenticate the user.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/36-rds-authentication.jpg" target="_blank">
        <img src="/images/workshop/36-rds-authentication.jpg"
             alt="Amazon RDS Authentication"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 36. Authenticating users using data stored in Amazon RDS.</i></p>
</div>

---

## Demo 3. AWS Secrets Manager

Database credentials are securely stored in **AWS Secrets Manager** instead of being embedded in the application source code. This approach enhances security and reduces the risk of exposing sensitive information.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/37-secrets-manager.jpg" target="_blank">
        <img src="/images/workshop/37-secrets-manager.jpg"
             alt="AWS Secrets Manager"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 37. Storing database connection information in AWS Secrets Manager.</i></p>
</div>

---

## Demo 4. IAM Instance Profile

The Amazon EC2 instances use an **IAM instance profile** to obtain permission to access **AWS Secrets Manager**. This enables the application to retrieve database connection information securely without using access keys.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/38-iam-instance-profile.jpg" target="_blank">
        <img src="/images/workshop/38-iam-instance-profile.jpg"
             alt="IAM Instance Profile"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 38. Amazon EC2 using an IAM instance profile to access AWS Secrets Manager.</i></p>
</div>

---

## Demo 5. Create a Ticket

An employee enters the required information, including the ticket title, category, priority, and description, to create a new support request.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/39-create-ticket.jpg" target="_blank">
        <img src="/images/workshop/39-create-ticket.jpg"
             alt="Create a Ticket"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 39. Creating a new support request in the system.</i></p>
</div>

---

## Demo 6. Ticket Saved

After the ticket is successfully created, the system generates a ticket ID and stores the information in the database. At the same time, a history record is created to support tracking throughout the ticket lifecycle.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/40-ticket-created.jpg" target="_blank">
        <img src="/images/workshop/40-ticket-created.jpg"
             alt="Ticket Created"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 40. The ticket is successfully created and stored in the database.</i></p>
</div>

---

## Demo 7. Business Logic Running on AWS Elastic Beanstalk

Business operations such as creating tickets, assigning requests, updating ticket status, adding comments, and maintaining processing history are executed by the ASP.NET Core application running on **AWS Elastic Beanstalk**. All application data is stored centrally in **Amazon RDS for SQL Server**.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/41-ticket-processing.jpg" target="_blank">
        <img src="/images/workshop/41-ticket-processing.jpg"
             alt="Ticket Processing"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 41. AWS Elastic Beanstalk processing the Enterprise HelpDesk application's business operations.</i></p>
</div>

---

## Demo 8. AWS Elastic Beanstalk Environment

AWS Elastic Beanstalk is responsible for deploying and managing the ASP.NET Core application. All incoming user requests are routed to this environment for processing.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/42-elastic-beanstalk-environment.jpg" target="_blank">
        <img src="/images/workshop/42-elastic-beanstalk-environment.jpg"
             alt="AWS Elastic Beanstalk Environment"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 42. The AWS Elastic Beanstalk environment hosting the application.</i></p>
</div>

---

## Demo 9. Amazon EC2 Instances

Amazon EC2 instances host the Enterprise HelpDesk application. Business operations such as ticket creation, authorization, and request processing are executed on these instances.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/43-ec2-instance.jpg" target="_blank">
        <img src="/images/workshop/43-ec2-instance.jpg"
             alt="Amazon EC2"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 43. Amazon EC2 instances running the Enterprise HelpDesk application.</i></p>
</div>

---

## Demo 10. Amazon CloudWatch

Amazon CloudWatch collects metrics such as request count, response time, and system performance to support monitoring and operational visibility.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/44-cloudwatch-monitoring.jpg" target="_blank">
        <img src="/images/workshop/44-cloudwatch-monitoring.jpg"
             alt="Amazon CloudWatch"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 44. Monitoring the system with Amazon CloudWatch.</i></p>
</div>

---

## Demo 11. Support Agent

Support agents receive tickets, update their processing status, and add discussion notes while resolving user requests. All changes are recorded to ensure complete traceability throughout the support process.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/45-support-agent.jpg" target="_blank">
        <img src="/images/workshop/45-support-agent.jpg"
             alt="Support Agent"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 45. A support agent receiving and processing support tickets.</i></p>
</div>

---

## Demo 12. Application Load Balancer

The **Application Load Balancer (ALB)** routes requests only to healthy Amazon EC2 instances, ensuring that users are always served by available and healthy application servers.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/46-application-load-balancer.jpg" target="_blank">
        <img src="/images/workshop/46-application-load-balancer.jpg"
             alt="Application Load Balancer"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 46. The Application Load Balancer distributing requests to healthy Amazon EC2 instances.</i></p>
</div>

---

## Demo 13. Amazon EC2 Auto Scaling

**Amazon EC2 Auto Scaling** manages the number of Amazon EC2 instances based on the configured minimum and maximum capacity. It also automatically replaces unhealthy instances to maintain application availability and scalability.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/47-auto-scaling-group.jpg" target="_blank">
        <img src="/images/workshop/47-auto-scaling-group.jpg"
             alt="Amazon EC2 Auto Scaling"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 47. Amazon EC2 Auto Scaling managing the application's EC2 instances.</i></p>
</div>

---

## Demo 14. System Dashboard

The dashboard provides an overview of ticket processing, ticket distribution by status, and SLA metrics, enabling administrators to monitor operational performance.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/48-dashboard-overview.jpg" target="_blank">
        <img src="/images/workshop/48-dashboard-overview.jpg"
             alt="System Dashboard"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 48. The Enterprise HelpDesk system dashboard.</i></p>
</div>

---

## Demo 15. Amazon RDS Monitoring

Amazon RDS provides metrics such as CPU utilization, database connections, and storage usage to help monitor database performance and operational health.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/49-rds-monitoring.jpg" target="_blank">
        <img src="/images/workshop/49-rds-monitoring.jpg"
             alt="Amazon RDS Monitoring"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 49. Monitoring Amazon RDS performance metrics.</i></p>
</div>

---

## Demo 16. User Management

Administrators can create, update, or disable user accounts, assign roles, and associate users with departments to ensure centralized account administration.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/50-user-management.jpg" target="_blank">
        <img src="/images/workshop/50-user-management.jpg"
             alt="User Management"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 50. Administrators managing user accounts and permissions.</i></p>
</div>

---

## Demo 17. AWS WAF

AWS WAF uses managed rules to inspect and filter potentially malicious requests before forwarding them to the **Application Load Balancer**, improving the security of the application.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/51-aws-waf.jpg" target="_blank">
        <img src="/images/workshop/51-aws-waf.jpg"
             alt="AWS WAF"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 51. AWS WAF protecting the application from malicious requests.</i></p>
</div>

---

## Demo 18. AWS CloudTrail

AWS CloudTrail records administrative activities performed within the AWS environment, such as deploying Elastic Beanstalk environments, modifying IAM roles, and updating security groups. These audit logs support governance, compliance, and operational troubleshooting.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/52-cloudtrail-events.jpg" target="_blank">
        <img src="/images/workshop/52-cloudtrail-events.jpg"
             alt="AWS CloudTrail"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 52. AWS CloudTrail recording administrative activities across the AWS infrastructure.</i></p>
</div>

---

## Demo 19. Security Groups

The system uses security groups to isolate network access between the **Application Load Balancer**, **Amazon EC2**, and **Amazon RDS**. Only authorized connections are allowed between each layer of the architecture, strengthening the overall security of the application.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/53-security-groups.jpg" target="_blank">
        <img src="/images/workshop/53-security-groups.jpg"
             alt="Security Groups"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 53. Security groups controlling network traffic between the system components.</i></p>
</div>

---

# Result

After completing this demonstration, the **Enterprise HelpDesk** system has been successfully validated on the AWS platform.

Core business functions—including user authentication, ticket creation, request assignment, and support request processing—operate reliably within the ASP.NET Core application deployed on **AWS Elastic Beanstalk**. Application data is centrally stored in **Amazon RDS for SQL Server**, while **AWS Secrets Manager** securely manages the database connection credentials.

In addition, AWS services including the **Application Load Balancer**, **Amazon EC2 Auto Scaling**, **Amazon CloudWatch**, **AWS WAF**, and **AWS CloudTrail** have been configured and are functioning as intended within the solution architecture, providing scalability, monitoring, security, and high availability.

Through deployment and functional validation, the AWS architecture has demonstrated its ability to meet the operational requirements of the Enterprise HelpDesk system while providing a solid foundation for future growth and production workloads.