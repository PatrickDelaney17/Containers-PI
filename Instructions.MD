<h3>Let's Go</h3>

<p>Build a custom DNS server within a container</p>

---

## Step 1. Update the Pi using the terminal
  1. In the terminal ```sudo apt-get update```
  2. Then run ```sudo apt-get dist-upgrade -y``` (__dist__ will install or remove packages as necessary to complete the upgrade. __-y__ will accept the space needed for the upgrade if the pi needs patches so you skip getting prompted)
  3. Once done you should reboot the pi, one way to do it ```sudo shutdown -r```  (__-r__ = reboot)
  
## Step 2. Install Docker on your Pi 
 1. Install Docker ```curl -fsSL get.docker.com -o get-docker.sh && sh get-docker.sh```
 
 *When the install has completed you should see similar output as below* <br />
  <a href="https://github.com/PatrickDelaney17/Containers-PI/blob/master/DockerInstalled-Capture.PNG 
" target="_blank"><img src="https://github.com/PatrickDelaney17/Containers-PI/blob/master/DockerInstalled-Capture.PNG" 
alt="TerminalScreenShot" width="395" height="400" border="10" /></a>
 
 2. Add the pi user to the docker group, so it can run docker commands ```sudo usermod -aG docker pi```
 3. *Reboot* the pi ```sudo reboot``` 
 4. Open terminal and test Docker is installed ```docker --help``` should list usage options and commands.
   - To learn more about docker commands/options just follow the pattern ```docker {command} --help``` or drill down further into options ```docker {command} {option} --help```
 
 # Step 3. Pull your first image
  1. Log into [hub.docker.com](hub.docker.com)
  2. Type in the Search bar "hello world"
  3. Locate the command to pull the image ```docker pull {image name}```
  4. On your pi terminal type the docker pull command.
  
 # Step 4. Run pi-hole on docker
  -__base command__```docker pull pihole/pihole```
  - __Image info:_ [https://hub.docker.com/r/pihole/pihole](https://hub.docker.com/r/pihole/pihole)
  <br />
  <p>Give the container a second to spin up. </p>
  
  - Once it loads verify the container is running: ```docker stats pihole``` (should display performance data) __CTRL "C"__ to exit
  ---
  ```
  Example    
  - If you needed to first find container commands then veiw what options come with that command 
    - Get help on Container COMMANDS: "docker container --help"
    - Get help on Container command OPTIONS: "docker container ls --help" 
  ```  
  ---
  
 ## Step 5 Go to the Pi-Hole Admin Portal
  - "{Your PI IP}/admin"
    - Example: 192.168.1.X/admin
  
  ---
  #### Issues Getting to the portal? Try these steps within the CLI
  ##### Reconfiguring your app 
    - Throw away your container: "docker rm -f Container_Name" 
    - Add in Arguments to ensure all dependencies are set: "docker run -p 53 -p 80:80 -p 67:67 -p 443:443 --restart=unless-stopped -v $(pwd)/etc-pihole:/etc/pihole -v $(pwd)/etc-dnsmasq.d:/etc/dnsmasq.d --cap-add=NET_ADMIN --dns=127.0.0.1 --dns=1.1.1.1 pihole/pihole" 
    - Once running Reset your password: "docker exec -it Container_Name pihole -a -p"
  ---
 
 ## Step 6 Configure a device to use your custom DNS server

# Add useful tips
 - getting rid of the portal password
 - restarting the container
 
 <br /> <br />
 <a href="http://www.youtube.com/watch?feature=player_embedded&v=HT4Eu57kZt0
" target="_blank"><img src="http://img.youtube.com/vi/HT4Eu57kZt0/0.jpg" 
alt="quick demo" width="240" height="180" border="10" /></a>
 
 
