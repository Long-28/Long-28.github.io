---
title: "Deployment"
weight: 4
description: "Deploying the Enterprise HelpDesk System on AWS"
---

# Deploying the Enterprise HelpDesk System on AWS

In this section, you will build the network infrastructure for the Enterprise HelpDesk system using **Amazon VPC**. After completing this section, the environment will be ready for deploying the **Amazon RDS for SQL Server** database and the application using **AWS Elastic Beanstalk**.

---

## Deployment Sections

- [Part 1. Amazon VPC](#part-1-amazon-vpc)
- [Part 2. Amazon RDS](#part-2-amazon-rds)
- [Part 3. AWS Elastic Beanstalk](#part-3-aws-elastic-beanstalk)

---

<h2 id="part-1-amazon-vpc"
    style="text-align:center; font-size:36px; margin:50px 0 30px 0;">
    Part 1. Building the Network Infrastructure with Amazon VPC
</h2>

Amazon Virtual Private Cloud (Amazon VPC) enables you to create an isolated virtual network on AWS for deploying your application resources. In this workshop, you will configure an Amazon VPC that includes public subnets, private subnets, an internet gateway, route tables, and security groups.

---

## Step 1. Create an Amazon VPC

Sign in to the **AWS Management Console**.

Complete the following steps:

1. Search for and open the **Amazon VPC** service.
2. Choose **Your VPCs**.
3. Choose **Create VPC**.
4. Enter **EnterpriseHelpDesk-VPC** as the VPC name.
5. Specify an appropriate IPv4 CIDR block.
6. Choose **Create VPC**.

After the VPC is created, it will serve as the isolated network for all resources used by the Enterprise HelpDesk system.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/01-create-vpc.jpg"
         alt="Create an Amazon VPC"
         style="width:65%;">
</div>

---

## Step 2. Create Public and Private Subnets

After creating the VPC, create the required subnets.

This workshop uses the following subnets:

- Public-Subnet-A
- Public-Subnet-B
- Private-Subnet-A
- Private-Subnet-B

Separating public and private subnets improves security and follows a multi-tier architecture best practice on AWS.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/02-create-subnets.jpg"
         alt="Create Public and Private Subnets"
         style="width:65%;">
</div>

---

## Step 3. Create an Internet Gateway

To allow resources in the public subnets to access the internet, create an internet gateway.

Complete the following steps:

1. Open the **Amazon VPC** console.
2. Choose **Internet Gateways**.
3. Choose **Create internet gateway**.
4. Enter the following value:

| Property | Value |
|----------|-------|
| Name tag | EnterpriseHelpDesk-IGW |

5. Choose **Create internet gateway**.

After it is created, the internet gateway will be in the **Available** state, but it cannot be used until it is attached to a VPC.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/03-create-internet-gateway.jpg"
         alt="Create an Internet Gateway"
         style="width:65%;">
</div>

---

## Step 4. Attach the Internet Gateway to the VPC

After creating the internet gateway, attach it to the VPC.

Complete the following steps:

1. Select the internet gateway you created.
2. Choose **Actions → Attach to VPC**.
3. Select **EnterpriseHelpDesk-VPC**.
4. Choose **Attach internet gateway**.

After this step, the internet gateway provides internet connectivity for the public subnets.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/04-attach-internet-gateway.jpg"
         alt="Attach the Internet Gateway to the VPC"
         style="width:65%;">
</div>

---

## Step 5. Configure the Public Route Table

Next, configure routing for the public subnets.

Complete the following steps:

1. Open **Route Tables**.
2. Select the route table associated with the VPC.
3. Rename it to **EnterpriseHelpDesk-Public-RT**.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/05-public-route-table.jpg"
         alt="Configure the Public Route Table"
         style="width:65%;">
</div>

---

## Step 6. Add the Default Route

In the public route table:

1. Choose **Routes**.
2. Choose **Edit routes**.
3. Choose **Add route**.
4. Enter the following values:

| Destination | Target |
|-------------|--------|
| 0.0.0.0/0 | EnterpriseHelpDesk-IGW |

5. Choose **Save changes**.

This route allows resources in the public subnets to access the internet through the internet gateway.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/06-public-route.jpg"
         alt="Add the Default Route to the Public Route Table"
         style="width:65%;">
</div>

---

## Step 7. Associate the Public Subnets

Associate the public route table with the public subnets.

Complete the following steps:

1. Choose the **Subnet Associations** tab.
2. Choose **Edit subnet associations**.
3. Select:
   - Public-Subnet-A
   - Public-Subnet-B
4. Choose **Save associations**.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/07-public-subnet-association.jpg"
         alt="Associate the Public Subnets"
         style="width:65%;">
</div>

---

## Step 8. Create a Private Route Table

Create a dedicated route table for the private subnets.

Complete the following steps:

1. Choose **Create route table**.
2. Enter the following name:

**EnterpriseHelpDesk-Private-RT**

3. Select the project VPC.
4. Choose **Create route table**.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/08-private-route-table.jpg"
         alt="Create a Private Route Table"
         style="width:65%;">
</div>

---

## Step 9. Associate the Private Subnets

After creating the private route table:

1. Choose **Subnet Associations**.
2. Choose **Edit subnet associations**.
3. Select:
   - Private-Subnet-A
   - Private-Subnet-B
4. Choose **Save associations**.

Using a private route table ensures that resources such as Amazon RDS are not directly accessible from the internet.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/09-private-subnet-association.jpg"
         alt="Associate the Private Subnets"
         style="width:65%;">
</div>

---

## Step 10. Create a Security Group for the Application Load Balancer

Open **Security Groups**.

Choose **Create Security Group**.

Create a security group for the Application Load Balancer with the following inbound rules:

| Type | Port | Source |
|------|------|--------|
| HTTP | 80 | 0.0.0.0/0 |
| HTTPS | 443 | 0.0.0.0/0 |

After completing the configuration, choose **Create Security Group**.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/10-create-alb-security-group.jpg"
         alt="Create a Security Group for the Application Load Balancer"
         style="width:65%;">
</div>

---

## Step 11. Create a Security Group for Amazon EC2

Create a new security group for the Amazon EC2 instances.

Allow access only from the Application Load Balancer to the application servers.

This configuration prevents direct internet access to the Amazon EC2 instances.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/11-create-ec2-security-group.jpg"
         alt="Create a Security Group for Amazon EC2"
         style="width:65%;">
</div>

---

## Step 12. Create a Security Group for Amazon RDS

Create a security group for the Amazon RDS for SQL Server database.

Allow database connections only from the Amazon EC2 instances or the AWS Elastic Beanstalk environment through the SQL Server port.

Do not allow direct access from the internet.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/12-create-rds-security-group.jpg"
         alt="Create a Security Group for Amazon RDS"
         style="width:65%;">
</div>

---

# Result

After completing the Amazon VPC deployment, the environment includes:

- One Amazon VPC.
- Two public subnets.
- Two private subnets.
- One internet gateway.
- One public route table.
- One private route table.
- A security group for the Application Load Balancer.
- A security group for the Amazon EC2 instances.
- A security group for Amazon RDS.

This network infrastructure will be used in the next sections to deploy **Amazon RDS for SQL Server** and the **Enterprise HelpDesk** application using **AWS Elastic Beanstalk**.

---
<h2 id="part-2-amazon-rds"
    style="text-align:center; font-size:36px; margin:50px 0 30px 0;">
    Part 2. Deploying the Database with Amazon RDS
</h2>

Amazon Relational Database Service (Amazon RDS) is a fully managed relational database service on AWS. In this workshop, Amazon RDS is used to deploy a **Microsoft SQL Server** database for the Enterprise HelpDesk application.

After completing this section, the database will be deployed in private subnets and will be accessible only to resources within the Amazon VPC through the security group configured in the previous section.

### Step 1. Create a DB Subnet Group

A DB subnet group allows Amazon RDS to deploy the database across multiple private subnets, improving availability while ensuring that the database is not directly accessible from the internet.

Complete the following steps:

1. Sign in to the **AWS Management Console**.
2. Search for and open the **Amazon RDS** service.
3. Choose **Subnet groups**.
4. Choose **Create DB subnet group**.
5. Enter **EnterpriseHelpDesk-DBSubnetGroup** as the name.
6. Select the **EnterpriseHelpDesk-VPC**.
7. Select the two private subnets created in the Amazon VPC section.
8. Choose **Create**.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/13-create-db-subnet-group.jpg"
       target="_blank"
       rel="noopener noreferrer">
        <img src="/images/workshop/13-create-db-subnet-group.jpg"
             alt="Create a DB Subnet Group"
             title="Click the image to view the full size"
             style="width:65%; cursor:zoom-in; border-radius:6px;">
    </a>
    <p style="margin-top:8px; font-size:14px; color:#666;">
        Click the image to view the full size.
    </p>
</div>

---

### Step 2. Create an Amazon RDS Database

After creating the DB subnet group, create a new database.

Complete the following steps:

1. Choose **Databases**.
2. Choose **Create database**.
3. Select **Standard Create**.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/14-create-database.jpg"
         alt="Create an Amazon RDS Database"
         style="width:65%;">
</div>

---

### Step 3. Select Microsoft SQL Server

Continue configuring the database.

Complete the following steps:

1. Select **Microsoft SQL Server**.
2. Choose the appropriate SQL Server engine version.
3. Select the **Free tier** or **Dev/Test** deployment template (if available).

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/15-select-sql-server-engine.jpg"
         alt="Select the Microsoft SQL Server Engine"
         style="width:65%;">
</div>

---

### Step 4. Configure the DB Instance

Configure the database instance settings.

Complete the following steps:

1. Enter the **DB instance identifier**.
2. Specify the **Master username**.
3. Enter and confirm the **Master password**.
4. Select an appropriate instance class.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/16-configure-db-instance.jpg"
         alt="Configure the DB Instance"
         style="width:65%;">
</div>

---

### Step 5. Configure Storage

Configure the database storage settings.

Complete the following steps:

1. Select the storage type.
2. Specify the allocated storage size.
3. Enable or disable **Storage Autoscaling** as needed.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/17-configure-storage.jpg"
         alt="Configure Database Storage"
         style="width:65%;">
</div>

---

### Step 6. Configure Networking

Configure the network settings for the database.

Complete the following steps:

1. Select **EnterpriseHelpDesk-VPC**.
2. Select **EnterpriseHelpDesk-DBSubnetGroup**.
3. Set **Public access** to **No**.
4. Keep the remaining settings at their default values.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/18-configure-network.jpg"
         alt="Configure Database Networking"
         style="width:65%;">
</div>

---

### Step 7. Select the Security Group

Finally, configure the security group for the Amazon RDS database.

Complete the following steps:

1. Select the security group created in the Amazon VPC section.
2. Review all configuration settings.
3. Choose **Create database** to begin provisioning the database.

<div style="text-align:center; margin:20px 0;">
    <img src="/images/workshop/19-select-rds-security-group.png"
         alt="Select the Amazon RDS Security Group"
         style="width:65%;">
</div>

---
<h2 id="part-3-aws-elastic-beanstalk"
    style="text-align:center; font-size:36px; margin:50px 0 30px 0;">
    Part 3. Deploying the Application with AWS Elastic Beanstalk
</h2>

AWS Elastic Beanstalk is an AWS service that simplifies application deployment and management without requiring you to manually provision and configure the underlying infrastructure. In this workshop, AWS Elastic Beanstalk is used to deploy the **Enterprise HelpDesk** application on the **.NET** platform and connect it to the **Amazon RDS** database created in the previous section.

After completing this section, the application will be successfully deployed and accessible through the URL provided by AWS Elastic Beanstalk.

---

### Step 1. Create the Service Role

The service role allows AWS Elastic Beanstalk to manage AWS resources and monitor the health of the deployment environment.

Complete the following steps:

1. Sign in to the **AWS Management Console**.
2. Open the **IAM** service.
3. Choose **Roles**.
4. Choose **Create role**.
5. For **Trusted entity type**, select **AWS service**.
6. For **Service or use case**, select **Elastic Beanstalk**.
7. Choose **Elastic Beanstalk – Environment**.
8. Choose **Next**.
9. Verify that the following managed policies are attached:
   - **AWSElasticBeanstalkEnhancedHealth**
   - **AWSElasticBeanstalkManagedUpdatesCustomerRolePolicy**
10. Name the role **aws-elasticbeanstalk-service-role**.
11. Choose **Create role**.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/20-create-service-role.jpg" target="_blank">
        <img src="/images/workshop/20-create-service-role.jpg"
             alt="Create the Elastic Beanstalk Service Role"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 20. Creating the Elastic Beanstalk service role.</i></p>
</div>

---

### Step 2. Create the EC2 Instance Profile Role

The EC2 instance profile role allows the Amazon EC2 instances in the Elastic Beanstalk environment to access AWS services based on the assigned permissions.

Complete the following steps:

1. In the **IAM** console, choose **Roles**.
2. Choose **Create role**.
3. Select **AWS service**.
4. Select **Elastic Beanstalk**.
5. Choose **Elastic Beanstalk – Compute**.
6. Keep the following default managed policies:
   - **AWSElasticBeanstalkWebTier**
   - **AWSElasticBeanstalkWorkerTier**
   - **AWSElasticBeanstalkMulticontainerDocker**
7. Name the role **aws-elasticbeanstalk-ec2-role**.
8. Choose **Create role**.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/21-create-ec2-role.jpg" target="_blank">
        <img src="/images/workshop/21-create-ec2-role.jpg"
             alt="Create the EC2 Instance Profile Role"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 21. Creating the EC2 instance profile role.</i></p>
</div>

---

### Step 3. Grant Permission to Read AWS Secrets Manager

To allow the application to retrieve the database connection information from AWS Secrets Manager, grant the required permissions to the EC2 instance profile role.

Complete the following steps:

1. Open the **aws-elasticbeanstalk-ec2-role** role.
2. Choose the **Permissions** tab.
3. Choose **Add permissions**.
4. Select **Create inline policy**.
5. Open the **JSON** tab.
6. Delete the default policy content.
7. Paste the prepared IAM policy.
8. Choose **Next**.
9. Complete the creation of the inline policy.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/22-create-inline-policy.jpg" target="_blank">
        <img src="/images/workshop/22-create-inline-policy.jpg"
             alt="Create an Inline Policy"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 22. Granting permission to access AWS Secrets Manager.</i></p>
</div>

---

### Step 4. Create the AWS Elastic Beanstalk Application

After completing the IAM configuration, create the Elastic Beanstalk application.

Complete the following steps:

1. Open the **AWS Elastic Beanstalk** service.
2. Choose **Create application**.
3. Enter **EnterpriseHelpDesk** as the application name.
4. Under **Application code**, select **Sample application**.
5. Select **aws-elasticbeanstalk-service-role** as the **Service role**.
6. Select **aws-elasticbeanstalk-ec2-role** as the **EC2 instance profile**.
7. Choose **Next**.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/23-create-application.jpg" target="_blank">
        <img src="/images/workshop/23-create-application.jpg"
             alt="Create an AWS Elastic Beanstalk Application"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 23. Creating the AWS Elastic Beanstalk application.</i></p>
</div>

---

### Step 5. Configure the VPC

Next, configure the networking settings for the Elastic Beanstalk environment.

Complete the following steps:

1. For **VPC**, select **EnterpriseHelpDesk-VPC**.
2. Wait for AWS to load the available subnets.
3. Keep the **System default** option.
4. Expand the **Tags** section.
5. Add the following tag:
   - **Key:** Project
   - **Value:** EnterpriseHelpDesk

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/25-configure-vpc.jpg" target="_blank">
        <img src="/images/workshop/25-configure-vpc.jpg"
             alt="Configure the VPC"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 24. Configuring the VPC for the Elastic Beanstalk environment.</i></p>
</div>

---

### Step 6. Select the Security Group

To secure the deployment environment, assign the security group created in the Amazon VPC section.

Complete the following steps:

1. Choose **Choose security groups**.
2. Select **EnterpriseHelpDesk-App-SG**.
3. Choose **Next**.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/26-select-security-group.jpg" target="_blank">
        <img src="/images/workshop/26-select-security-group.jpg"
             alt="Select the Security Group"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 25. Selecting the security group.</i></p>
</div>

---

### Step 7. Configure Capacity

Configure the compute resources for the Elastic Beanstalk environment.

Complete the following steps:

1. Keep the instance type as **t3.micro**.
2. If AWS automatically adds **t3.small**, remove that instance type.
3. Choose **Next** to continue.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/27-configure-capacity.jpg" target="_blank">
        <img src="/images/workshop/27-configure-capacity.jpg"
             alt="Configure Capacity"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 26. Configuring capacity.</i></p>
</div>

---

### Step 8. Deploy the Application

After the environment has been created, deploy the Enterprise HelpDesk application.

Complete the following steps:

1. Choose **Upload and deploy**.
2. Select the published **.zip** package of the Enterprise HelpDesk application.
3. Choose **Deploy**.
4. Wait for the deployment to complete.
5. Open the URL provided by AWS Elastic Beanstalk to verify that the application is running successfully.

<div style="text-align:center; margin:20px 0;">
    <a href="/images/workshop/29-upload-and-deploy.jpg" target="_blank">
        <img src="/images/workshop/29-upload-and-deploy.jpg"
             alt="Upload and Deploy the Application"
             style="width:65%; cursor:zoom-in;">
    </a>
    <p><i>Figure 27. Uploading and deploying the application.</i></p>
</div>