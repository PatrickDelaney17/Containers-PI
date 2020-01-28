# Getting Started
 - Why Portainer - 2 minute video at the bottom of the home page [https://www.portainer.io/](https://www.portainer.io/)
 
# Step 1. Manage containers with the CLI
  1. Add another container: ```docker run -dit --name my-apache-app -p 8080:80 -v "$PWD":/usr/local/apache2/htdocs/ httpd:2.4 ```
---
- List containers: ```docker container ls -a```

- Remove a container not in use ```docker container rm -f {container name}```

- List Images: ```docker image ls -a```

- Remove an image ```docker image rm -f {repository}```
---
# Step 2. Get Portainer and Manage Containers
  __First repeat steps in pulling the containers originally removed to see the diff__
  - [Pull Portainer info](https://wiki.brewpi.com/getting-started/raspberry-pi-docker-install#deploy-the-portainer-docker-image)
  




