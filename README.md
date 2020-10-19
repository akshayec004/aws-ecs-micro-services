# aws-ecs-micro-services
Code for Micro-services

Creation of Micro-services with AWS ECS involves two steps :

Step 1 : Creation of docker containers

i). Create a docker registry repo in ECS (called ECR) in AWS

ii). Clone the repository and go inside the folder sample-nodejs-docker-app-1

iii). Build a docker image using below command :
   docker build -t sample-nodejs-app .
   
iv). Authenticate to the docker registry.

v). Tag the image built in step (iii) using the below command :
    docker tag sample-nodejs-app:latest 668239621066.dkr.ecr.ap-south-1.amazonaws.com/node-js-repo:sample-nodejs-app    
    
vi). Push the image to the registry.
    docker push 668239621066.dkr.ecr.ap-south-1.amazonaws.com/node-js-repo:sample-nodejs-app
    
	
	
Step 2 : Creation of Micro-Services in AWS ECS

i). Create 3 task definitions for each of the micro-services. The network mode should be 'Bridge'. Set the host port to 0 and container port to the port defined in the corresponding server.js code. Setting the port 0 on the host enables dynamic host port mapping to use an ALB.

ii). Create 3 services for each of the task definitions created in step (i).

iii). Map the ALB listener port 80 to the corresponding port numbers defined in each of the task definitions. Create new target groups on the same listener 80 and set the path pattern.

iv). Get the DNS name of the ALB and test by giving different patterns at the end - service-1/2/3
