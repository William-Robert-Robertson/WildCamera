Suspend To RAM

Note that self-consumption of MPPT solar charge controllers must also be considered - see Prior-Jones _et al._ 2025.

Power Consumption

NXP AN13054 i.MX 8M Plus Power Consumption Measurement\
https://community.nxp.com/pwmxy87654/attachments/pwmxy87654/imx-processors/195119/1/AN13054.pdfn-notes/AN13054.pdf\
"4.1.1 Suspend mode"\
"This mode is called either “Dormant mode” or “Deep sleep mode” in the Linux BSP."\
"Total P(mW) 15.14"

Verdin iMX8M Plus Power Consumption\
"Suspend mode to RAM" "0.15 W"\
https://developer.toradex.com/hardware/hardware-resources/power-consumption/verdin-imx8m-plus-power-consumption/

Dave\
Power (mW) (SOM)\
215 Suspend to RAM\
Power (mW) (SBC ORCA)\
1089 Suspend to RAM\
https://wiki.dave.eu/index.php/ORCA_SOM/ORCA_Hardware/Electrical_Thermal_and_Mechanical_Features/Operational_characteristics

Phytec\
phyCORE-i.MX 8M Plus Power Consumption\
lists power consumption in all scenarios as "TBD" as of September 2025\
https://www.phytec.de/cdocuments/?doc=fAC7E

Phytec documentation includes an important warning:\
"It is necessary to avoid voltages at the IO pins of the phyCORE-i.MX 8M Plus which are sourced from the supply voltage of peripheral devices attached to the SOM during power-up or power-down. These voltages can cause a current flow into the controller, especially if peripheral devices attached to the interfaces of the i.MX 8M Plus are supposed to be powered while the phyCORE‑i.MX 8M Plus is in suspend mode or turned off. To avoid this, bus switches either supplied by VDD_3V3 on the phyCORE side or having their output enabled to the SOM controlled by the X_nPWR_READY signal (see Supply Voltage for External Logic) must be used."
https://www.phytec.de/cdocuments/?doc=fAC7E
