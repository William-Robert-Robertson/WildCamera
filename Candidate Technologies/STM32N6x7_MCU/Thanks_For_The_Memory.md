
The example projects for the STM32N6x7 place the RAM required by camera pipeline and ISP in the AXISRAM1_S region. \
Adding the RAM required by the VENC (Video ENCoder) in this region as well requires more RAM than is present in this region.

/STM32N6-GettingStarted-ObjectDetection/Middlewares/ST/VideoEncoder_EWL/ewl_impl.c puts the reference frame for the VENC on the **heap** using **malloc** 🙈:
```
/**
  * @brief  Allocate a frame buffer (contiguous linear RAM memory)
  * @param  instance     EWL instance associated with the buffer to allocate
  * @param  size         size in bytes of the requested memory
  * @param  info         structure containing the allocated memory buffer parameters
  * @retval i32          0 for success or a negative error code
  */
__weak i32 EWLMallocRefFrm(const void *instance, u32 size, EWLLinearMem_t *info)
{
  return EWLMallocLinear(instance, size, info);
}
```
that leads us to
```
**
  * @brief  Allocate a contiguous, linear RAM  memory buffer
  * @note   implementation depends on the OS compatibility setup in ewl_conf.h
  * @param  instance     EWL instance associated with the buffer to allocate
  * @param  size         size in bytes of the requested memory
  * @param  info         structure containing the allocated memory buffer parameters
  * @retval i32          0 for success or a negative error code
  */
__weak i32 EWLMallocLinear(const void *instance, u32 size, EWLLinearMem_t *info)
{
  if (instance == NULL)
  {
    return EWL_ERROR;
  }
  VENC_EWL_TypeDef *inst = (VENC_EWL_TypeDef *) instance;
  /* make size 8-byte aligned */
  u32 size_aligned = ALIGNED_SIZE(size);
  info->size = size_aligned;

#if (EWL_ALLOC_API == EWL_USE_MALLOC_MM)
  /* allocate using malloc and check return */
  inst->chunks[inst->totalChunks] = (u32 *)malloc(size_aligned);
  if (inst->chunks[inst->totalChunks] == NULL)
  {
    return EWL_ERROR;
  }
```
That'll work fine as long as that's the only thing on the heap - if there's much else on the heap then it'll run out of SARM for the heap. \
Lower down there's
```
#elif (EWL_ALLOC_API == EWL_USER_MM)
  return EWL_ERROR;
#else
```
>EWL = Encoder Wrapper Layer\
>MM = Memory Manager

So likely best to implemnt a user MM (Memory Manager) for the EWL that specifies PSRAM for the VENC reference frame and buffers or to override the above functions wiht an implementation that does this.

Note that for the STM32N6570 to reach the fastest possible speeds interacting with external RAM (200 MHz clock) it would be neccessarry to set OTP fuses as described in [How to program the OTP fuse bits in the STM32N6... changing the VDDIOs' voltage to 1.8 V instead of 3.3 V using STM32CubeProgrammer. This allows the STM32N6570-DK to achieve the nominal speed with the external memories.](https://community.st.com/t5/stm32-mcus/how-to-program-the-otp-fuse-bits-in-the-stm32n6/ta-p/782353) - taking note that [Write latency, WLC, is default to 5 after power up... When operating frequency exceeding Fmax listed in the table will result in write data corruption.](https://community.st.com/t5/stm32-mcus-embedded-software/stm32h7s78-dk-examples-exceed-external-ram-chip-aps256xxn-obr-bg/td-p/779620)

In this article "SB" means Solder Bridge - on the board SB35 and SB36 are two small zero ohm resistors beside U26.

>This article provides a quick guide on what the STM32N6’s OTP bits are and how to program them. It includes step-by-step instructions and explanation on configuring the OTP124, responsible for changing the VDDIOs' voltage to 1.8 V instead of 3.3 V using STM32CubeProgrammer. This allows the STM32N6570-DK to achieve the nominal speed with the external memories.

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
