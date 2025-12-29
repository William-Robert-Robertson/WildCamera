
The example projects for the STM32N6x7 place the RAM required by camera pipeline, ISP and NPU in the AXISRAM1_S region. \
Adding the RAM required by the VENC (Video ENCoder) in this region as well requires more RAM than is present in this region.

https://community.st.com/t5/stm32-mcus-embedded-software/stm32n6x7-memory-allocation-for-isp-npu-and-venc/td-p/866284

The .ld file /STM32N6570-DK_GettingStarted_ObjectDetection/STM32N657xx.ld \
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

AXISRAM is the fastest RAM on the STM32N6570 and deterministic.

SRAM is on-chip but not as fast as AXISRAM - marked NOLOAD

PSRAM off-chip RAM - marked NOLOAD

It appears that ST required NPU scratch buffers to be in AXI SRAM to give good NPU performence - NPU activations in PSRAM would lead to 10× slower inference (not confirmed).

It appears that ST may somptimes put framebuffers on PSRAM because of their size (not confitrmed).

main.c seems to define background and screen buffers with 2 bytes per pixel as large 1 dimensional arrays but the foreground buffer by contrast is a **double** buffer uint8_t lcd_fg_buffer[**2**] (will's emphasis) in main.c
```
/* Lcd Background Buffer */
__attribute__ ((aligned (32)))
uint8_t lcd_bg_buffer[LCD_BG_WIDTH * LCD_BG_HEIGHT * 2];
/* Lcd Foreground Buffer */
__attribute__ ((aligned (32)))
uint8_t lcd_fg_buffer[2][LCD_FG_WIDTH * LCD_FG_HEIGHT * 2];
static int lcd_fg_buffer_rd_idx;
/* screen buffer */
__attribute__ ((aligned (32)))
static uint8_t screen_buffer[LCD_FG_WIDTH * LCD_FG_HEIGHT * 2];
```
Inspecting these arrays via the debugger confirms the above.

A macro is defined for the foreground buffer in main.c which seems to allocate 2 bytes per pixel (similar macros weren't found for the background buffer or the screen buffer).
```
#define LCD_FG_FRAMEBUFFER_SIZE  (LCD_FG_WIDTH * LCD_FG_HEIGHT * 2)
```
It should in theory be possible to greatly reduce the SRAM consumed by the foreground double buffer by greatly reducing the colour depth of the foreground - only a small number of colours plus alpha transparency are used in the foreground layer (typically 1 colour for the box, one colour for the text and one for alpha transparency) so L8 with CLUT (Colour Look Up Table) supporting 256 colours would be more than adequate for the foreground. By using L8 the size of the buffer could be halved from 2 bytes per pixel to only 1 byte. (This should work because this specific example does **not** use TouchGFX - TouchGFX does not support L8.)

The question is whether it's simpler to adjust the example to reduce the colour depth of the foreground double buffer to free up SRAM to be used for the buffers required for the VENC to run smoothly or whether we should simply get rid of this foreground buffer since it won't be used in the finished WildCamera?

Or perhaps we just need to define a compiler directive which builds the code in a demonstration mode where the foreground double buffer is used or in production mode where the foreground double buffer is not used and so there's enough SRAM free for buffers for the VENC to be used instead?

Or perhaps put the frame buffers in external RAM - it seems to be fast enough:

https://github.com/William-Robert-Robertson/WildCamera/blob/main/Candidate%20Technologies/STM32N6x7_MCU/RAM_Transfer_Speed_and_Frame_Buffers.md

and power-efficient in Standby mode:

https://github.com/William-Robert-Robertson/WildCamera/blob/main/Candidate%20Technologies/Power_Budget/APS256XXN_PASR_PSRAM.md

https://github.com/STMicroelectronics/STM32N6-GettingStarted-ObjectDetection/blob/main/Doc/Boot-Overview.md#boot-from-flash-with-first-stage-boot-loader
states "STM32N6570-DK: 1MB of SRAM1 is reserved for the User App (see STM32N657xx.ld) and 1MB of SRAM2 is reserved for the network activations (see stm32n6-app2_STM32N6570-DK.mpool)."
More detail of the higher sections of memory is given in:

https://github.com/STMicroelectronics/STM32N6-GettingStarted-ObjectDetection/blob/main/Model/my_mpools/stm32n6-app2_STM32N6570-DK.mpool
which sets out seperate regions for use by the CPU and NPU:
```
AXISRAM2 cpuRAM2 1024 K,
AXISRAM3 npuRAM3 448 K,
AXISRAM4 npuRAM4 448 K,
AXISRAM5 npuRAM5 448 K,
AXISRAM6 npuRAM6 448K
```
giving a total of 1024 K of CPU SRAM and 1792 K of NPU SRAM defined in the .mpool file.

From the above: \
0x34180000 - 0x34000400 = 0x17FC00 = 1571840 = 1.57184 MB

NUCLEO-N657X0-Q anf STM32N6570-DK both have 4.2 MB SRAM

In /STM32N6570-DK_GettingStarted_ObjectDetection/Application/venc.c this is set to
800*480/8 = 48'000 bytes

```
uint32_t output_buffer[800*480/8] __NON_CACHEABLE __attribute__((aligned(8)));
```

https://github.com/STMicroelectronics/STM32N6-GettingStarted-ObjectDetection/blob/main/Doc/Boot-Overview.md#boot-from-flash-with-first-stage-boot-loader
states "STM32N6570-DK: 1MB of SRAM1 is reserved for the User App (see STM32N657xx.ld) and 1MB of SRAM2 is reserved for the network activations (see stm32n6-app2_STM32N6570-DK.mpool)."
