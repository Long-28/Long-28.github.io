---
title: "Clean Up Resources"
weight: 9
description: "Clean Up Resources"
---

# Clean Up Resources

After completing this workshop, you should delete all AWS resources that were created to avoid unnecessary charges. In this section, you will remove the AWS Elastic Beanstalk environment, AWS WAF Web ACL, Amazon RDS database, AWS Secrets Manager secret, and the security groups created during the workshop.

---

### Step 1. Terminate the AWS Elastic Beanstalk Environment

Begin by terminating the AWS Elastic Beanstalk environment. This automatically releases the associated resources, including Amazon EC2 instances, the Application Load Balancer, and the Auto Scaling group.

Complete the following steps:

1. Open the **AWS Elastic Beanstalk** console.
2. Select the **EnterpriseHelpDesk** environment.
3. Choose **Actions**.
4. Select **Terminate environment**.
5. Confirm the termination.
6. Wait for AWS to complete the cleanup process.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/30-terminate-environment.jpg" target="_blank">
        <img src="/images/workshop/30-terminate-environment.jpg"
             alt="Terminate AWS Elastic Beanstalk Environment"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 30. Terminating the AWS Elastic Beanstalk environment.</i></p>
</div>

---

### Step 2. Delete the AWS WAF Web ACL

After the Elastic Beanstalk environment has been terminated, delete the AWS WAF Web ACL that was created for the application.

Complete the following steps:

1. Open the **AWS WAF** console.
2. Select the **EnterpriseHelpDesk-WAF** Web ACL.
3. Choose **Actions**.
4. Select **Delete protection pack (web ACL)**.
5. Confirm the deletion.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/31-delete-web-acl.jpg" target="_blank">
        <img src="/images/workshop/31-delete-web-acl.jpg"
             alt="Delete AWS WAF Web ACL"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 31. Deleting the AWS WAF Web ACL.</i></p>
</div>

---

### Step 3. Delete the Amazon RDS Database

After the application no longer requires the database, delete the Amazon RDS database instance.

Complete the following steps:

1. Open the **Amazon RDS** console.
2. Select the **enterprisehelpdesk-db** database.
3. Choose **Actions**.
4. Select **Delete**.
5. Clear the **Create final snapshot** option if you do not need to back up the database.
6. Confirm the deletion.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/32-delete-rds.jpg" target="_blank">
        <img src="/images/workshop/32-delete-rds.jpg"
             alt="Delete Amazon RDS Database"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 32. Deleting the Amazon RDS database.</i></p>
</div>

---

### Step 4. Delete the Secret in AWS Secrets Manager

After the Amazon RDS database has been deleted, remove the secret that stores the database connection information.

Complete the following steps:

1. Open the **AWS Secrets Manager** console.
2. Select the **EnterpriseHelpDesk** secret.
3. Choose **Actions**.
4. Select **Delete secret**.
5. Confirm the deletion.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/33-delete-secret.jpg" target="_blank">
        <img src="/images/workshop/33-delete-secret.jpg"
             alt="Delete Secret in AWS Secrets Manager"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 33. Deleting the secret in AWS Secrets Manager.</i></p>
</div>

---

### Step 5. Delete the Security Groups

Finally, delete the security groups that were created in Amazon VPC for this workshop.

Complete the following steps:

1. Open the **Amazon EC2** console.
2. Choose **Security Groups**.
3. Select the following security groups:
   - **EnterpriseHelpDesk-ALB-SG**
   - **EnterpriseHelpDesk-App-SG**
   - **EnterpriseHelpDesk-RDS-SG**
4. Choose **Actions**.
5. Select **Delete security groups**.
6. Confirm the deletion.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/34-delete-security-groups.jpg" target="_blank">
        <img src="/images/workshop/34-delete-security-groups.jpg"
             alt="Delete Security Groups"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 34. Deleting the security groups.</i></p>
</div>

---

## Result

After completing the steps above, all resources created during this workshop will have been removed, including:

- The AWS Elastic Beanstalk environment.
- The AWS WAF Web ACL.
- The Amazon RDS database.
- The secret stored in AWS Secrets Manager.
- The security groups.

Cleaning up resources after completing the workshop helps prevent unnecessary AWS charges and keeps your AWS account organized and ready for future deployments.