APT Advanced Package Tool

To see all apt comands in the logs on a system:
```
zcat /var/log/apt/history.log.*.gz | cat - /var/log/apt/history.log | grep -Po '^Commandline:(?= apt(-get)?)(?=.* install ) \K.*'
```

To see everything that's been installed without including the dependencies
```
apt-mark showmanual

```

To see everything that's been installed - including all dependencies - which makes the list very long:

```
apt list --installed
```
