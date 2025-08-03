To change the hostname of a device use hostnamectl hostname then reboot the device

```
hostnamectl hostname imx8mp-debix-2

reboot
```

nmap Network Mapper can be used to scan networks however note that scanning outside one's local network is illegal in some countries:

```
# First, find the IP address of the current machine including the subnet mask

ip a # short for ip address

# In one of the network connections this will show up something like
# 10.168.0.198/24

sudo apt install nmap

# To only ping the IP addresses:
nmap -sP 10.168.0.198/24

# To also scan ports up to 2024 (this takes longer):
sudo nmap -sS 10.168.0.198/24

```
net-tools can also be helpful:

```
sudo apt install net-tools
```
