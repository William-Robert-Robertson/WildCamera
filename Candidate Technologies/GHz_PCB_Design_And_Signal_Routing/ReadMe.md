
MIPI CSI-2 interface has 100 Ω differential impedance and 50 Ω single-ended impedance with estimates of acceptable tolerance varying from 10% to 25%.

7 Essential Design Guidelines for Flex PCBs\
Section 7. Validate Thickness and Impedance Requirement provides a useful Target Impedance table\
https://jlcpcb.com/blog/flex-pcb-design-guidelines

Texas Instruments High-Speed Interface Layout Guidelines\
https://www.ti.com/lit/an/spraar7j/spraar7j.pdf?ts=1756456220970&ref_url=https%253A%252F%252Fwww.bing.com%252F

Texas Instruments Ethernet PHY PCB Design Layout Checklist\
https://www.ti.com/lit/an/snla387/snla387.pdf?ts=1756454051471&ref_url=https%253A%252F%252Fwww.google.com%252F

Sections

1. Guidelines for MIPI-CSI and MIPI-DSI (RZ/G2L, RZ/G2LC, RZ/G2UL (MIPI-DSI not supported), RZ/V2L, and RZ/A3UL

and

1.2 Guidelines for PCB Signal Lines

of

Renesas PCB Design Guidelines for MIPI-CSI, MIPI-DSI, USB2.0, and PCI Express Gen2

seems to provide detailed guidance on this with diagrams:

https://www.renesas.com/en/document/apn/pcb-design-guidelines-mipi-csi-mipi-dsi-usb20-and-pci-express-gen2

the above states a 20% tolerance.

Other documents also suggest that we've got fairly wide tolerance for this:

Section

3.5 Trace impedance recommendations
Table 24. Trace impedance recommendations

of

i.MX 8M Plus Hardware Developer’s Guide

states a tolerance of 10% for impedance.

https://community.nxp.com/pwmxy87654/attachments/pwmxy87654/imx-processors/192210/1/IMX8MPHDG%20new.pdf

Section

7.13 Camera Serial Interface (MIPI/CSI-2 with D-PH

of

Toradex Carrier Board Design Guide

states "90Ω ±15% differential; 50Ω ±15% single ended" and specifies maximum skew.

https://docs.toradex.com/102492-layout-design-guide.pdf

Section

Layout of MIPI CSI-2 Traces

of this document by AD:

AN-1337: Design Considerations for Connecting Analog Devices Video Decoders to MIPI CSI-2 Receivers

gives a rule of thumb approach:

"As a general rule, space apart the line traces by a distance equal to twice the thickness of the PCB dielectric"

"Loosely couple the positive and negative lines of each lane (for example, Data Line 0 positive; Data Line 0 negative) because the positive and negative lines are differential in HS mode but are single-ended in LP mode. "

https://www.analog.com/en/resources/app-notes/an-1337.html

All files in this directory remain the intellectual property of their authors and are made available under the license terms specified by their authors.
