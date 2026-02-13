### STM32N6570-DK Schematic

https://www.st.com/resource/en/schematic_pack/mb1939-n6570-c02-schematic.pdf

#### User Switches
Sheet 8 of 21

|  |  |  |
| --- | --- | --- |
| USER1 | PC13 | B4 |
| TAMP | PE0 | B2 |
| RESET | NRST | B1 |

All the above are normally closed to logic high\
Protection via ESDALC6V1-1U2\
No hardware debouncer.\
No hardware pulldown resistor (pulldown marked DNF "Do Not Fit")\
https://community.st.com/t5/stm32-mcus-boards-and-hardware/nucleo-g431kb-what-does-quot-dnf-quot-mean/td-p/822780

#### LCD

Sheet 8 of 12\
LCD_ON/OF PQ3

#### Transistors, etc.

Sheet 9 of 21\
BSN20BK\
60 V, N-channel Trench MOSFET\
drain-source on-state resistance R<sub>DSon</sub> quoted at V<sub>GS</sub> at 2.5 volts

#### SD

TPS22919DCKR\
TPS22919 5.5 V, 1.5 A, 90-mΩ Self-Protected Load Switch with Controlled Rise Time
>The TPS22919 device is a small, single channel load
>switch with controlled slew rate. The device contains
>an N-channel MOSFET that can operate over an
>input voltage range of 1.6 V to 5.5 V and can support
>a maximum continuous current of 1.5 A.

https://www.ti.com/lit/ds/symlink/tps22919.pdf

#### Ethernet

Sheet 13 of 21\
RTL8211F-CG Realtek integrated Ethernet transceiver\
The RTL8211F(I)-CG incorporates a state-of-the-art switching regulator\
Supports Link Down power saving\
https://www.realtek.com/Product/Index?id=3975&cate_id=786 \
Powered by 3V3_DVDD_GMII and 3V3_AVDD_GMII whichare fed from VDD_ETH which is fed from VDD3V via SB3 (see sheet 13 of 21)

