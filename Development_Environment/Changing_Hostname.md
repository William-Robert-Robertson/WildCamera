To change the hostname of a device use hostnamectl hostname then reboot the device

```
hostnamectl hostname imx8mp-debix-2

reboot
```

nmap Network Mapper can be used to scan networks however note that scanning outside one's local network is illegal in some countries:

```
sudo apt install net-tools

route -n | grep 'UG[ \t]' | awk '{print $2}'
## This reports the IP of the default gateway.

sudo apt install nmap

nmap -sP 192.168.1.0/24 -F

nmap -sP 192.168.1.0/24

```
