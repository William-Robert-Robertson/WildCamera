
AN1709 EMC design guide for STM8, STM32 and legacy MCUs
https://www.st.com/resource/en/application_note/an1709-emc-design-guide-for-stm8-stm32-and-legacy-mcus-stmicroelectronics.pdf

AN5967 - **Rev 4** - December 2025

> Flexible memory controller (FMC) interface covers high frequency routing for PSRAM

> Extended-SPI interface (XSPI)

>"For technical reasons, it is mandatory to use a multilayer PCB"

>**I/O speed** settings... The role of bits in OTP124 is to bypass the TT protection (3.3 V tolerant) and to make the I/O levels compatible
>with voltages below 2.5 V (namely 1.8 V):

>To increase the EMC performance, **unused** clocks, counters, or I/Os must not be left free. For example, I/Os must
>be set to "0" or "1" (external or internal pull-up or pull-down to the unused I/O pins) and unused features must be
>"frozen" or disabled.

> **SD Card**... As boot is always done in "Standard" mode (3-V IOs), if the card is used by the application in UHS-I, a power
>cycle on the card supply is required after a Reset or Standby mode. NRSTC1MS can be used for this.
>Good signal integrity is dependent on the board, GPIO strength settings (GPIO_OSPEEDR registers), and VDD
>voltage
> See also:
> SDMMC bus interface

>Camera serial interface

>14 Recommended PCB routing guidelines for STM32N6x5 and STM32N6x7
>14.1 PCB stack-up
