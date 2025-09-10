### GHz PCB Design And Signal Routing

Note: Other resources can be found under: Training/PCB_Design/

MIPI CSI-2 interface has 100 Ω differential impedance and 50 Ω single-ended impedance with estimates of acceptable tolerance varying from 10% to 25%.

##### 7 Essential Design Guidelines for Flex PCBs
Section 7. Validate Thickness and Impedance Requirement provides a useful Target Impedance table\
https://jlcpcb.com/blog/flex-pcb-design-guidelines

##### PCB Manufacturing & Assembly Capabilities - Flex PCBs
https://jlcpcb.com/capabilities/flex-pcb-capabilities
Note that as of September 2025 parameters for flexible PCBs seem to have to be entered manually rather than imported automatically.

##### Gold Fingers Polyimide(PI) Thickness Calculator
https://jlcpcb.com/gold-fingers-PI-thickness

A stiffner length of 8 mm seems to be normal. 6 mm minimum is specified by some connector manufacturers.\

For 0.5 mm pitch FFC Width is 0.5(n+1) where n is the number of contacts - the receptacle is 0.1 mm wider than this with +0.1/-0.05 mm tolerence.\

0.30 mm +- 0.02 mm total thickness is specified:
50 µm dielectric + 17.5 µm for 0.5 oz copper gives 67.5 µm
Yellow/black coverlay adds 50 µm giving 117.5 µm

##### Gold Fingers
https://jlcpcb.com/blog/pcb-gold-fingers-why-it-matters

##### Export Additional JLC Specific Layers
"Some boards you have manufactured will require additional layers in your Gerber. For example, when manufacturing flex PCBs with a stiffener, JLC requires a layer outlining the stiffener layer (top/bottom), dimensions and the stiffener material properties (material, thickness etc). Export these additional JLC speciific layers in your production files with a simple modification.
Additional layers can be exported by creating layers with JLC_ as the prefix of the layer name. You can access and edit the layer names in Board Setup/Board Stackup/Board Editor Layers
This tool will automatically export all additional layers with the JLC_ prefix and add them to the production files in GERBER-<projectname>.zip"
[https://github.com/Bouni/kicad-jlcpcb-tools](https://github.com/Bouni/kicad-jlcpcb-tools?tab=readme-ov-file#export-additional-jlc-specific-layers)

##### Texas Instruments High-Speed Interface Layout Guidelines
https://www.ti.com/lit/an/spraar7j/spraar7j.pdf

##### Texas Instruments Ethernet PHY PCB Design Layout Checklist
https://www.ti.com/lit/an/snla387/snla387.pdf

##### Renesas PCB Design Guidelines for MIPI-CSI, MIPI-DSI, USB2.0, and PCI Express Gen2

seems to provide detailed guidance on this with diagrams in sections - stating a 20% tolerance.:

1. Guidelines for MIPI-CSI and MIPI-DSI (RZ/G2L, RZ/G2LC, RZ/G2UL (MIPI-DSI not supported), RZ/V2L, and RZ/A3UL

and

1.2 Guidelines for PCB Signal Lines

https://www.renesas.com/en/document/apn/pcb-design-guidelines-mipi-csi-mipi-dsi-usb20-and-pci-express-gen2

##### i.MX 8M Plus Hardware Developer’s Guide

Section

3.5 Trace impedance recommendations
Table 24. Trace impedance recommendations

of

states a tolerance of 10% for impedance.

https://community.nxp.com/pwmxy87654/attachments/pwmxy87654/imx-processors/192210/1/IMX8MPHDG%20new.pdf

##### Toradex Carrier Board Design Guide

Section

7.13 Camera Serial Interface (MIPI/CSI-2 with D-PH

states "90Ω ±15% differential; 50Ω ±15% single ended" and specifies maximum skew.

https://docs.toradex.com/102492-layout-design-guide.pdf

##### AN-1337: Design Considerations for Connecting Analog Devices Video Decoders to MIPI CSI-2 Receivers

Section

Layout of MIPI CSI-2 Traces

gives a rule of thumb approach:

"As a general rule, space apart the line traces by a distance equal to twice the thickness of the PCB dielectric"

"Loosely couple the positive and negative lines of each lane (for example, Data Line 0 positive; Data Line 0 negative) because the positive and negative lines are differential in HS mode but are single-ended in LP mode. "

https://www.analog.com/en/resources/app-notes/an-1337.html

All files in this directory remain the intellectual property of their authors and are made available under the license terms specified by their authors.
