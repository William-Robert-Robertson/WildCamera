## SD Card

File systems are covedred seperately here:\
https://github.com/William-Robert-Robertson/WildCamera/blob/main/Candidate%20Technologies/Filesystems.md

RTOSs FreeRTOS, ThreadX and Zephyr are ceovered seperately here:\
https://github.com/William-Robert-Robertson/WildCamera/blob/main/Candidate%20Technologies/STM32N6x7_MCU/RTOS.md

## Optimising SD Speed

### Bus width

To achieve full speed a 4 bit bus should be used - this should be auto-enabled during initial card configuration in the BSP_SD_Init function, right before speed negotiation.

### OTP Fuses for 1.8 V Interface

and OTP Fuses changed from 3.3 V to 1.8 V
```
Under HCONF1
HSLV_VDDIO5 for SDMMC2
HSLV_VDDIO4 for SDMMC1
```

### Sector Size and Cluster Size

For sustained good performence data must be written in blocks that are exact multiples of the **sector size** of **512 bytes**.

It may help to write in blocks which are exact multiples of the **cluster size** with which the SD is formatted - typically 4KB to 128 KB - this can be found using dosfsck with -v and -n options (fsck.fat in dosfstools or minfo in mtools) could also be used:
```
sudo dosfsck -v -n /dev/sde1
```
this is set by --cluster-size or -c when the card is formatted:
```
sudo mkfs.exfat -c <size> /dev/sdXn
```
If --cluster-size is not specified, mkfs.exfat chooses a default based on the SD size - full details are here:
https://man.archlinux.org/man/mkfs.exfat.8

A good description of performence implications of writing incomplete segments and of the difference between FAT clusters and SD allocation units is provided by Carl Kugler below:

>When an amount of data to be written is smaller than a segment, the segment is read, modified in memory, and then written again.

>The FAT "allocation unit" (not to be confused with the SD card "allocation unit"), also known as "cluster", is a unit of "disk" space allocation for files. These are identically sized small blocks of contiguous space that are indexed by the File Allocation Table
>The space efficiency of disk usage gets worse with increasing size of allocation unit, but, on the other hand, the read/write performance increases. Therefore the size of allocation unit is a trade-off between space efficiency and performance.

https://github.com/carlk3/FreeRTOS-FAT-CLI-for-RPi-Pico?tab=readme-ov-file#appendix-d-performance-tuning-tips

### SD Transceiver

For higher-speed operation the SD Transceiver can be enabled:
```
USE_SD_TRANSCEIVER
```

### Diagnosis

Searching for printf in the code finds lines which can be enabled by precomiler directives or by uncommenting them to provide more diagnostic information:

https://github.com/search?q=repo%3Asvogl%2Fvenc-sdcard-threadx+printf&type=code

### EXFat

EXFatshould be used:

https://github.com/svogl/STM32N6-GettingStarted-ObjectDetection/blob/feature/sdio-tests/Application/STM32N6570-DK/Inc/ffconf.h

## ThreadX / FileX / EXFat Specific Performance Tuning

### Pre-Allocation

To give good performance, space for the file should be pre-allocated
```
fx_file_allocate(&file, total_bytes_to_allocate);
```

https://github.com/eclipse-threadx/rtos-docs/blob/main/rtos-docs/filex/chapter4.md#fx_file_allocate

Carl Kugler describes long-term fragmentation resulting from not pre-allocating
>File fragmentation can lead to long access times. Fragmented files can result from multiple files being incrementally extended in an interleaved fashion. One strategy to avoid fragmentation is to pre-allocate files to their maximum expected size, then reuse these files at run time.

(Some sources seem to suggest that fx_file_allocate places the file pointer at the end of the file so fx_file_seek should be used to return it to the beginning but other sources said that this wasn't needed in FileX.)

### Maximum Sector Cache
Consider increasing FX_MAX_SECTOR_CACHE 
```
#ifndef FX_MAX_SECTOR_CACHE
#define FX_MAX_SECTOR_CACHE                    256      /* Maximum size of logical sector cache,
                                                           minimum value of 2 all other values must
                                                           be a power of 2.  */
                                                        /* Example: 128KB cache (256 * 512 bytes) */
#endif
```
https://github.com/svogl/venc-sdcard-threadx/blob/6580b74ad25a7e58abde708830a27687af65e13b/Middlewares/ST/filex/common/inc/fx_api.h#L414 \
This does not apply in Fat32 file systems where FX_MAX_FAT_CACHE sets the FAT table sectors that FileX can cache concurrently.

### FileX Metadata Cache
Consider increasing the maximum metadata cache size for ExFAT:
```
/* Define bitmap cache size for exFAT. Size should be minimum one sector size and maximum 4096.
For applications using multiple media devices with varying sector size, the value should be :
set to the size of largest sector size.
The FX_EXFAT_MAX_CACHE_SIZE is 2 power of FX_EXFAT_MAX_CACHE_SIZE_NB_BIT. */
/* #define FX_EXFAT_MAX_CACHE_SIZE         512 */
```

### FileX Media memory_size
fx_media_open allows the size of the cache to be set - the bigger the cache the better the performance is likely to be in theory - again, this should be an exact multiple of the sector size of **512 bytes** - it may help to make this an exact multiple of the cluster size. fx_app_byte_pool must be large enough to allow for this.
```
UINT _fx_media_open(FX_MEDIA *media_ptr, CHAR *media_name,
                                     VOID (*media_driver)(FX_MEDIA *), VOID *driver_info_ptr,
                                     VOID *memory_ptr, ULONG memory_size);
```
https://github.com/eclipse-threadx/rtos-docs/blob/main/rtos-docs/filex/chapter4.md#fx_media_open
https://wiki.st.com/stm32mcu/wiki/Introduction_to_FILEX#How_to_use \
In our example this is set here\
https://github.com/svogl/venc-sdcard-threadx/blob/6580b74ad25a7e58abde708830a27687af65e13b/Appli/Src/app_filex.c#L75 \
https://github.com/svogl/venc-sdcard-threadx/blob/6580b74ad25a7e58abde708830a27687af65e13b/Appli/Src/app_filex.c#L315

### FileX Disable Cache
FX_DISABLE_CACHE should not be defined.

### FX_SINGLE_THREAD
FX_SINGLE_THREAD may improve performence slightly provided that FileX is only ever called from one thread but may cause problems if interupts are used.

## FreeRTOS Specific Performance Tuning

### FreeRTOS-Plus-FAT
https://www.freertos.org/Documentation/03-Libraries/05-FreeRTOS-labs/04-FreeRTOS-plus-FAT/01-FreeRTOS-plus-FAT

### Performance Tuning Tips from Carl Kugler
https://github.com/carlk3/FreeRTOS-FAT-CLI-for-RPi-Pico?tab=readme-ov-file#appendix-d-performance-tuning-tips

### FreeRTOS Plus FAT slow - Reccomendations
from Carl Kugler, David Crocker and Hein Tibosch\
https://forums.freertos.org/t/freertos-plus-fat-extrem-slow-compared-to-fatfs/23922/3

### ST Community STM32L496 - SD Card SDIO Write Speeds with FreeRTOS
```
  hsd1.Init.HardwareFlowControl = SDMMC_HARDWARE_FLOW_CONTROL_ENABLE; ///< It was set to DISABLE!
```
https://community.st.com/t5/stm32-mcus-products/stm32l496-sd-card-sdio-write-speeds-freertos-fatfs-and-usb-how/td-p/227955

### STM32N6570-DK SDMMC2

On the STM32N6570-DK board the SD card is connected to SDMMC2 not SDMMC1
>A slot (CN13) for microSD™ card (UHS-I supported) is available on the STM32N6570-DK board and is connected to the SDMMC2 interface of STM32N657X0H3Q.\
https://www.st.com/resource/en/user_manual/um3300-discovery-kit-with-stm32n657x0-mcu-stmicroelectronics.pdf

### MBR and FAT Table Deletion by VENC_SDCard Example
ST's VENC_SDCard example deletes the first part of an SD card - the partition table and the filesystem - making the card unusable until it's reformatted:
```
  /* Erase beginning of SDCard */
  if (BSP_SD_Erase(0, 0, NB_BLOCKS_ERASED) != BSP_ERROR_NONE)
```
https://github.com/STMicroelectronics/STM32CubeN6/tree/main/Projects/STM32N6570-DK/Applications/VENC/VENC_SDCard

### Regression Tests

FileX Automated Regression Tests are found here:

https://github.com/STMicroelectronics/STM32CubeN6/tree/main/Middlewares/ST/filex/test/regression_test

There are some tests that seem to test writing large amounts of data but only in the context of fault tolerance - named

>filex_fault_tolerant_write_large_data...

https://github.com/STMicroelectronics/STM32CubeN6/blob/main/Middlewares/ST/filex/test/regression_test/filex_fault_tolerant_write_large_data_fat_interrupt_test.c

without any automated performance tests there's no way of keeping track of what performance is actually like.

### STM32H7 - SDMMC

The STM32H7 seems to use the same SDMMC as the STM32N6
https://www.st.com/content/ccc/resource/training/technical/product_training/group0/06/8b/84/d3/16/f6/4b/95/STM32H7-Peripheral-SDMMC_interface_SDMMC/files/STM32H7-Peripheral-SDMMC_interface_SDMMC.pdf/_jcr_content/translations/en.STM32H7-Peripheral-SDMMC_interface_SDMMC.pdf

Interface SD Card via SDIO (4Bit Mode & DMA) - Interface SD Card via SDIO (4Bit Mode & DMA) \
https://controllerstech.com/interface-sd-card-with-stm32-via-sdio-4bit-mode/

### FileX and HAL via GPDMA (General Purpose DMA controller)

https://community.st.com/t5/stm32-mcus-embedded-software/stm32n6-threadx-filex-sdmmc2-fx-io-error-144-during-continuous/td-p/864230

references this:

https://github.com/STMicroelectronics/STM32CubeN6/tree/main/Projects/STM32N6570-DK/Applications/FileX/Fx_uSD_File_Edit

TI Application Note - MMCSD Debug Guidelines (eMMC/SD)\
https://www.ti.com/lit/an/sprad38/sprad38.pdf

### SD Latency and Throughput from Sjors de Wit for Comparrison

Sjors de Wit - MicroSD performance on memory-constrained devices\
Industrial grade gives **10x less** maximum latency than standard.\
Open a file, append 512 bytes, close the file, repeat.
| MicroSD Card | Max block latency (ms) | Avg throughput (KB/s) |
| --- | --- | --- | 
| Sandisk Edge (8GB, class 4) | 340 | 148.4 |
| Sandisk Industrial (8GB) | 24 | 112.3 |

open a file once and write 8MB to it in blocks of 512
| MicroSD Card | Max block latency (ms) | Avg throughput (KB/s) |
| --- | --- | --- | 
| Sandisk Edge (8GB, class 4) | 211 | 436.2 | 
| Sandisk Industrial (8GB) | 15 | 390.9 | 

Block size 2048
Let's increase the buffer size to 2KiB and the total data transfer to 32MiB
| MicroSD Card | Max block latency (ms) | Avg throughput (KB/s) |
| --- | --- | --- | 
| Sandisk Edge (8GB, class 4) | 151 | 1169 | 
| Sandisk Industrial (8GB) | 16 | 1148 | 

https://jitter.nl/blog/2019/07/31/microsd-performance-on-memory-constrained-devices/

https://www.sdcard.org/wp-content/uploads/2020/11/Video_Speed_Class-The_new_capture_protocol_of_SD_5.0.pdf

### Optimizing File Writes

Optimizing File Writes - CalSol UC Berkeley Solar Vehicle Team \
file write speeds at around 600kByte/s - FAT32 - SD 10 MHz - CPU 20 MHz
>In most (if not all) SD cards, read and write operations must occur in blocks of 512 bytes. On our microcontroller, the SPI module which communicates with the SD card has a maximum speed of 10 MHz while the processor runs at 20 MHz. Since SPI shifts out one bit at a time, each block takes up to 512 bytes * 8 bits/byte * 2 processor cycles / bit = 8192 processor cycles, and that doesn’t even take account the time waiting for the card to complete the operation. That’s certainly not very efficient – now if only there was some way to move these boring data transfer operations into the background…
>
>Enter DMA.
>
>DMA – meaning Direct Memory Access – is a hardware feature allowing memory-to-peripheral transfers to occur independent of the processor. Essentially, code that involved repeatedly waiting for transmissions to complete before sending the next byte can now be reduced to loading a pointer to the beginning of the data, loading the length of the data, and requesting a DMA transfer. Afterwards, the DMA module continues the block transfer in the background while the processor is free to do other tasks.
>
>One simple approach to writes would be to just write file data and allocate clusters as needed. However, whenever we allocate clusters, we need to perform writes in 3 different locations on disk to keep the filesystem consistent, and this random-access pattern is expensive compared to writing data sequentially. Therefore, it would make sense to allocate clusters as rarely as possible.
>One optimization around that is to pre-allocate the entire file. This operation takes advantage of the fact that cluster pointers are stored sequentially, allowing a large amount of clusters to be allocated at once. However, this is inadequate for our needs, as we don’t know what size our file will be nor do we want a excessively long start-up delay.
>
>So, we compromise. Instead of pre-allocating the whole file, we write one block’s (512 bytes, for SD cards) worth of cluster pointers at a time, allocating 128 clusters or 512 kBytes of space.
>
https://calsol.berkeley.edu/2011/06/12/optimizing-file-writes

### Random high write times on SD card with STM32 and FileX
https://www.eevblog.com/forum/microcontrollers/random-high-write-times-on-sd-card-with-stm32-and-filex/

### ST AN5200 Getting started with the STM32H7 MCU SDMMC host controller
AN5200 - Rev 3 - June 2025 \
http://www.st.com/resource/en/application_note/an5200-getting-started-with-the-stm32h7-mcu-sdmmc-host-controller-stmicroelectronics.pdf

### ST HAL SD How to Use
https://dev.st.com/stm32cube-docs/stm32u5-hal2/2.0.0-beta.1.1/docs/drivers/hal_drivers/sd/hal_sd_how_to_use.html

### ST HAL SDIO How to Use
https://dev.st.com/stm32cube-docs/stm32u5-hal2/2.0.0-beta.1.1/docs/drivers/hal_drivers/sdio/hal_sdio_how_to_use.html#hal-sdio-how-to-use

### Reading File Genreated by VENC_SDCard_ThreadX
```
ffmpeg -f h264 -framerate 30 -i [extracted file] -c copy [output file]
```
https://community.st.com/t5/stm32-mcus-embedded-software/venc-sdcard-threadx-example/m-p/860986#M70641

ST AN5519 Getting started with the SPC58EHx/SPC58NHx multimedia card host controller - this appears to be an older version of the IP in **AN5200** above\
19-Nov-2020 \
https://www.st.com/resource/en/application_note/an5519-getting-started-with-the-spc58ehxspc58nhx-multimedia-card-host-controller-stmicroelectronics.pdf

Infineon How to get the best performance from the SDMMC module\
https://community.infineon.com/t5/Knowledge-Base-Articles/AURIX-MCU-How-to-get-the-best-performance-from-the-SDMMC-module/ta-p/448202#. \
References SD- and eMMC Interface (SDMMC) in:\
https://www.infineon.com/assets/row/public/documents/10/44/infineon-aurix-tc3xx-part2-usermanual-en.pdf

ST Introduction to LEVELX - Note that this does not seem to be helpful in this situation \
https://wiki.st.com/stm32mcu/wiki/Introduction_to_LEVELX

AD AN-1443: Interfacing an SD Card Through the ADuCM3027/ADuCM3029 SPI Bus - Not Relevant Because SPI \
https://www.analog.com/en/resources/app-notes/an-1443.html

