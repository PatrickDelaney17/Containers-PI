<h3>Let's Go</h3>
<p>Build a custom DNS server within a container</p>

---

## Step 1. Update the Pi using the terminal
  1. In the terminal ```sudo apt-get update```
  2. Then run ```sudo apt-get upgrade -y``` (__-y__ will accept the space needed for the upgrade if the pi needs patches so you skip getting prompted)
  3. Once done you should reboot the pi ```sudo shutdown -r```  (__-r__ = reboot)
  
## Step 2. Install Docker on your Pi 
 - 5 Steps to Installing and running a test container https://dev.to/rohansawant/installing-docker-and-docker-compose-on-the-raspberry-pi-in-5-simple-steps-3mgl 
  
 # Step 3. Run pi-hole on docker
  -__base command__```docker pull pihole/pihole```
  <br />
  <p>Give the container a second to spin up. </p>
  
  - Once it loads verify the container is running: ```docker stats pihole``` (should display performance data) __CTRL "C"__ to exit
 
 ## Step 4. Go to the Pi-Hole Admin Portal
  - "{Your PI IP}/admin"
    - Example: 192.168.1.X/admin
  
 ## Step 5. Configure a device to use your custom DNS server

# Add useful tips
 - getting rid of the portal password
 - restarting the container
 
 <br /> <br />
 <a href="http://www.youtube.com/watch?feature=player_embedded&v=HT4Eu57kZt0
" target="_blank"><img src="http://img.youtube.com/vi/HT4Eu57kZt0/0.jpg" 
alt="quick demo" width="240" height="180" border="10" /></a>
 
 
