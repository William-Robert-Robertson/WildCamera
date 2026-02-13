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
No hardware debouncer apart from small internal capacitance of ESDALC6V1.\
No hardware pulldown resistor (pulldown marked DNF "Do Not Fit")\
https://community.st.com/t5/stm32-mcus-boards-and-hardware/nucleo-g431kb-what-does-quot-dnf-quot-mean/td-p/822780

USER1 PC13 goes direct to the STM32N657X0H3Q via F3 (sheet 3 of 21)

Digital and analog inuts are also made available via Arduino_UNO_R3 (sheet 3 of 21).

#### Power

5V Power Supply options

5V_STLK: 5V 500mA / 1.5A / 3A\
5V_USB_SNK: 5V 1.5A\
5V_VIN: 5V 0.8A

All the above are directly accessible via header JP2.

LD5 Green is powered direct from 5V but could be disabled by removing R129 820R 

"Internal SMPS and other MCU 1V8 POWER INPUT" is available to power VDD1V8 but not connected (DNF 0R resistor)

"3V3 POWER" provides VDD3V3

Both the above use ST1S31PUR 3 A DC step-down switching regulator\
2.8 V to 5.5 V input voltage\
https://www.st.com/en/power-management/st1s31.html \
https://www.st.com/resource/en/datasheet/st1s31.pdf

5V External POWER\
5V_VIN is derived from VIN via LD1117S50TR\
This looks like a linear regulator\
LD1117 Adjustable and fixed low drop positive voltage regulator\
Output current up to 800 mA\
Table 1. Absolute maximum ratings\
DC input voltage 15V\
Power dissipation 12W\
https://www.st.com/resource/en/datasheet/ld1117.pdf

VDDIO\
LD39020ADTPU33R LD39020 LD39020 200 mA very low quiescent current linear regulator IC\
Input voltage from 1.5 to 5.5 V\
https://www.st.com/resource/en/datasheet/ld39020.pdf

VDDA1V8_AON\
LD39020ADTPU18R LD39020 200 mA very low quiescent current linear regulator IC\
Input voltage from 1.5 to 5.5 V\
https://www.st.com/resource/en/datasheet/ld39020.pdf \
TP15 may provide a way of bringing VDDA1V8_AON onto the board without powering other supplies. R163 0R could be removed if need be.

1V8 POWER\
LD56100DPU18R - LD56100 1 A very low dropout fast transient ultra-low noise linear regulator\
Input voltage from 1.8 to 5.5 V\
https://www.st.com/resource/en/datasheet/ld56100.pdf

#### LCD

Sheet 8 of 12\
LCD_ON/OF PQ3 via SB5\
LCD_BL_CTR PG6

#### Transistors, etc.

Sheet 9 of 21\
BSN20BK\
60 V, N-channel Trench MOSFET\
drain-source on-state resistance R<sub>DSon</sub> quoted at V<sub>GS</sub> at 2.5 volts

#### SD

Power controlled via PWR_SD_EN
TPS22919DCKR\
TPS22919 5.5 V, 1.5 A, 90-mΩ Self-Protected Load Switch with Controlled Rise Time
>The TPS22919 device is a small, single channel load
>switch with controlled slew rate. The device contains
>an N-channel MOSFET that can operate over an
>input voltage range of 1.6 V to 5.5 V and can support
>a maximum continuous current of 1.5 A.

VDDIO_SD selected from VDD_SD or VDDA1V8 by NX3L1T3157GM

https://www.ti.com/lit/ds/symlink/tps22919.pdf

#### Ethernet

Sheet 13 of 21\
RTL8211F-CG Realtek integrated Ethernet transceiver\
The RTL8211F(I)-CG incorporates a state-of-the-art switching regulator\
Supports Link Down power saving\
https://www.realtek.com/Product/Index?id=3975&cate_id=786 \
Powered by 3V3_DVDD_GMII and 3V3_AVDD_GMII which are fed from VDD_ETH which is fed from VDD3V via SB3 (see sheet 13 of 21)

