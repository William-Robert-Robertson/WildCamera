
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

In /STM32N6570-DK_GettingStarted_ObjectDetection/Application/venc.c this is set to
800*480/8 = 48'000 bytes

```
uint32_t output_buffer[800*480/8] __NON_CACHEABLE __attribute__((aligned(8)));
```
