### Serial Debugging From Linux

Plug the serial debugging port (J10 on the Debix I/O board) in to the Linux machine.

Make sure that switch SW2 on the Debix I/O board is set to Debug (this is not it's default factory setting!).

On the Linux development machine, search for USB to serial adapters

```
ll /sys/class/tty/ttyUSB*
```
```
sudo apt install -y minicom

sudo minicom -s --color=on --device /dev/ttyUSB0
```

Now restart the Debix board and the sreults should appear in minicom.
