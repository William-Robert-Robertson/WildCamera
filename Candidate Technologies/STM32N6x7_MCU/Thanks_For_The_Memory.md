
The example projects for the STM32N6x7 place the RAM required by camera pipeline, ISP and NPU in the AXISRAM1_S region. \
Adding the RAM required by the VENC (Video ENCoder) in this region as well requires more RAM than is present in this region.

https://community.st.com/t5/stm32-mcus-embedded-software/stm32n6x7-memory-allocation-for-isp-npu-and-venc/td-p/866284

/STM32N6570-DK_GettingStarted_ObjectDetection/STM32N657xx.ld \
https://github.com/svogl/STM32N6-GettingStarted-ObjectDetection/blob/main/Application/STM32N6570-DK/STM32CubeIDE/STM32N657xx.ld \
Defines a region AXISRAM1_S which contains only 1'536 MB of the STM32N6x7's 4.2 MB
```
/* Memories definition */
MEMORY
{
  AXISRAM1_S (xrw)      : ORIGIN = 0x34000400, LENGTH =  1536K
  PSRAM (xrw)           : ORIGIN = 0x91000000, LENGTH =  16M
}
```
https://github.com/STMicroelectronics/STM32N6-GettingStarted-ObjectDetection/blob/main/Doc/Boot-Overview.md#boot-from-flash-with-first-stage-boot-loader
states "STM32N6570-DK: 1MB of SRAM1 is reserved for the User App (see STM32N657xx.ld) and 1MB of SRAM2 is reserved for the network activations (see stm32n6-app2_STM32N6570-DK.mpool)."

From the above: \
0x34180000 - 0x34000400 = 0x17FC00 = 1571840 = 1.57184 MB

NUCLEO-N657X0-Q anf STM32N6570-DK both have 4.2 MB SRAM

In /STM32N6570-DK_GettingStarted_ObjectDetection/Application/venc.c this is set to
800*480/8 = 48'000 bytes

```
uint32_t output_buffer[800*480/8] __NON_CACHEABLE __attribute__((aligned(8)));
```
