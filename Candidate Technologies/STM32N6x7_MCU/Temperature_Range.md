Temperature Range

A temperature range for the STM32N6570-DK could not be found but a temperature range for the STM32N657I0 is stated:

>The devices offer an extensive range of enhanced I/Os and peripherals, and operate in the **-40 to +125°C temperature range**, from 1.71 to 3.6 V power supply. A comprehensive set of low-power modes (Sleep, Stop, and Standby) allows the design of low-power applications.

https://www.st.com/en/microcontrollers-microprocessors/stm32n657i0.html

In Sheet 5 of 21 Power of the STM32N6570-DK the largest capacitor that could be found was 22uF (for larger capacitances multiples of 2 or 4 22uF capacitors are used in parallel)

https://www.st.com/resource/en/schematic_pack/mb1939-n6570-c02-schematic.pdf

"Board Manufacturing Specifications (5 of 8)" and "Bill of Materials (4)" are under CAD Resources as zip files here:

https://www.st.com/en/evaluation-tools/stm32n6570-dk.html#cad-resources

ST provide seperate BOMs for the boards in the STM32N6570-DK

In both MB1854-CSI-B01_BOM and MB1854-CSI-B02_BOM for MB1854 all capacitors are listed as "MLCC" (Multi Layer Ceramic Capacitor)

For Bill of Material for other boards in the STM32N6570-DK

mb1939 - MB1939-N6570-C02_BOM - all capcitors are MLCC\
mb1860:\
MB1860-RK050HR18C-A02_BOM - all capcitors are MLCC or Tantalum\
MB1860-RK050HR18C-B01_BOM - all capcitors are MLCC or Tantalum\
mb1280:\
MB1280-A0x_BOM - 100nF 1uF and 10nF capacitor comments only\
MB1280-B01_BOM - all capcitors are MLCC except 1uF CC0603KRX5R9BB105 which digiKey reports as ceramic and 10nF CC0603KRX7R9BB103 which digiKey reports as ceramic\
MB1280-3V3-C01_BOM - as above - all capcitors are MLCC except 1uF CC0603KRX5R9BB105 which digiKey reports as ceramic and 10nF CC0603KRX7R9BB103 which digiKey reports as ceramic

No traditional electrolytic capacitors could be found in the BOMs for the boards in the STM32N6570-DK - only ceramic and tantalum capacitors - so problems due to decreases in capacitance at temperatures below freezing are not expected.
