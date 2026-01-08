STM32N6570 - RAM Transfer Speed and Frame Buffers

| Parameter | Value | Units |
| ----- | ----- | ----- |
| #define SCREEN_HEIGHT (480)	| 400	| Pixels |
| #define SCREEN_WIDTH  (800)	| 800 |	Pixels |
| #define LCD_FG_FRAMEBUFFER_SIZE  (LCD_FG_WIDTH * LCD_FG_HEIGHT * 2)	| 2 | Bytes	per pixel | 
| This gives a buffer size per frame per buffer for 1 byte L8 pixels of: | 320000 | Bytes |
| or: | 312.5 | Kilobytes |
| or: | 0.3051757813 | Megabytes |
| Assuming 30 fps for one buffer one-way this would be | 9375 | Kilobytes per Second |
| or: | 9.155273438 | Megabytes per Second |

The STM32N6570-DK board uses a PSRAM chip marked "apmemory APS256XXN-OBR" U26. - the "R" on "OBR"

Nicolas Santini refers to https://stm32ai-cs.st.com/assets/embedded-docs/stneuralart_programming_model.html#ref_npu_memory_sub_system stating "0.8 GB/s" - 0.8 Gigabytes per second per second for 200 MHz hyperRAM external RAM.

For the STM32N6570 to reach the fastest possible speeds interacting with external RAM and flash (200 MHz clock) it's neccessarry to set OTP fuses **HSLV_VDIO3** and **HSLV_VDIO2** - this seems to be done by ST example software but is also described in [How to program the OTP fuse bits in the STM32N6... changing the VDDIOs' voltage to 1.8 V instead of 3.3 V using STM32CubeProgrammer. This allows the STM32N6570-DK to achieve the nominal speed with the external memories.](https://community.st.com/t5/stm32-mcus/how-to-program-the-otp-fuse-bits-in-the-stm32n6/ta-p/782353) - taking note that [Write latency, WLC, is default to 5 after power up... When operating frequency exceeding Fmax listed in the table will result in write data corruption.](https://community.st.com/t5/stm32-mcus-embedded-software/stm32h7s78-dk-examples-exceed-external-ram-chip-aps256xxn-obr-bg/td-p/779620)

In this article "SB" means Solder Bridge - on the board SB35 and SB36 are two small zero ohm resistors beside U26.

>This article provides a quick guide on what the STM32N6’s OTP bits are and how to program them. It includes step-by-step instructions and explanation on configuring the OTP124, responsible for changing the VDDIOs' voltage to 1.8 V instead of 3.3 V using STM32CubeProgrammer. This allows the STM32N6570-DK to achieve the nominal speed with the external memories.

HSLV_VDIO3 and HSLV_VDIO2 already being set it described at the bottom of the above article.

[A newer alternative to the APS256XXN-OBR can also be used - referring to AN5050 "Octo-SPI, Hexadeca-SPI, and XSPI interface can operate in two different low-level protocols: Regular-command and HyperBus"](https://community.st.com/t5/others-stm32-mcus-related/stm32n65-dk-alternative-for-ddram-aps256xxn-obr-bg/td-p/813330)

APS256XXN-OBx9 OPI/HPI Xccela PSRAM - Double-Data-Rate OPI/HPI Xccela PSRAM \
https://www.apmemory.com/en/downloadFiles/0324112221tz581562 \
Performance: Clock rate up to 250MHz,
|  |  |  |
| ----- | ----- | ----- |
| 500MBps read/write throughput – X8 | 500 | Megabytes per second theoretical maximum for external RAM
| 1000MBps read/write throughput – X16| 1000 | Megabytes per second theoretical maximum for external RAM

In X8/X16 mode ADQ0 to ADQ7 and DQ8 to DQ15 - ball pitch 1.0mm, ball size 0.4mm - package code BG (in X8 mode A/DQ[7:0] is a shared address and data bus and DQ8 to DQ15 are not used while in X16 mode DQ[15:8] are used as a data bus).

[Some details of how the external PSRAM is configured are referred to here "Write latency, WLC, is default to 5 after power up. Use MR Write to set write latencies according to write latency table. When operating frequency exceeding Fmax listed in the table will result in write data corruption."](https://community.st.com/t5/stm32-mcus-embedded-software/stm32h7s78-dk-examples-exceed-external-ram-chip-aps256xxn-obr-bg/td-p/779620)

>"Write latency, WLC, is default to 5 after power up. Use MR Write to set write latencies according to write
>latency table. When operating frequency exceeding Fmax listed in the table will result in write data corruption."

High frequency routing for PSRAM is covered by AN5967 - **Rev 4** - December 2025 - Flexible memory controller (FMC) interface - Rev 4 covers the STM32N6 - see EMC.md

Very approximate calculations for the above are in this sreadsheet:

STM32N6570 - RAM Transfer Speed and Frame Buffers \
https://docs.google.com/spreadsheets/d/1zHCg8qn93S9lHy3G4bqTosCGL2THcWPjX7wv3NXdutA/edit?usp=sharing

For power consumption of external RAM:

https://github.com/William-Robert-Robertson/WildCamera/blob/main/Candidate%20Technologies/Power_Budget/APS256XXN_PASR_PSRAM.md

