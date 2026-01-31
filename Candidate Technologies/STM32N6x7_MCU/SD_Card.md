## SD Card

File systems are covedred seperately here:\
https://github.com/William-Robert-Robertson/WildCamera/blob/main/Candidate%20Technologies/Filesystems.md

## Optimising SD Speed

### Bus width

To achieve full speed a 4 bit bus should be set:

https://github.com/STMicroelectronics/STM32N6-GettingStarted-ObjectDetection/commit/c99f02c8ac867aa11e0bdb14f32ff7709336928f

### EXFat

EXFatshould be used:

https://github.com/svogl/STM32N6-GettingStarted-ObjectDetection/blob/feature/sdio-tests/Application/STM32N6570-DK/Inc/ffconf.h

### OTP Fuses for 1.8 V Interface

and OTP Fuses changed from 3.3 V to 1.8 V
```
Under HCONF1
HSLV_VDDIO5 for SDMMC2
HSLV_VDDIO4 for SDMMC1
```

### Pre-Allocation

To give good performance, space for the file should be pre-allocated
```
fx_file_allocate(&file, total_bytes_to_allocate);
```

https://github.com/eclipse-threadx/rtos-docs/blob/main/rtos-docs/filex/chapter4.md#fx_file_allocate

(Some sources seem to suggest that fx_file_allocate places the file pointer at the end of the file so fx_file_seek should be used to return it to the beginning but other sources said that this wasn't needed in FileX.)

### Sector Size and Cluster Size

For sustained good performence data must be written in blocks that are exact multiples of the **sector size** of **512 bytes**.

It may help to write in blocks which are exact multiples of the **cluster size** with which the SD is formatted - typically 4KB to 128 KB - this is set by --cluster-size or -c when the card is formatted:
```
sudo mkfs.exfat -c <size> /dev/sdXn
```
If --cluster-size is not specified, mkfs.exfat chooses a default based on the SD size - full details are here:
https://man.archlinux.org/man/mkfs.exfat.8

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
https://github.com/svogl/venc-sdcard-threadx/blob/6580b74ad25a7e58abde708830a27687af65e13b/Middlewares/ST/filex/common/inc/fx_api.h#L414

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

### FileX Buffer Fush
This person suspects that on the STM32H750 the FileX buffer could be being flushed far too frequently - resulting in the bedia buffer not being fully utilised and write performence that is much slower than read performence:
>What I have I seen until now is that FILEX seems tell every time SD card's driver to write only into 1 block and It never tries a multi blocks write ( so I don't understand if there are advantages from using a media buffer with size greater than 512 bytes) 
https://community.st.com/t5/stm32-mcus-embedded-software/filex-writing-performance/td-p/750618

### STM32N6570-DK SDMMC2

On the STM32N6570-DK board the SD card is connected to SDMMC2 not SDMMC1
>A slot (CN13) for microSD™ card (UHS-I supported) is available on the STM32N6570-DK board and is connected to the SDMMC2 interface of STM32N657X0H3Q.\
https://www.st.com/resource/en/user_manual/um3300-discovery-kit-with-stm32n657x0-mcu-stmicroelectronics.pdf

### Regression Tests

Automated Regression Tests are found here:

https://github.com/STMicroelectronics/STM32CubeN6/tree/main/Middlewares/ST/filex/test/regression_test

There are some tests that seem to test writing large amounts of data but only in the context of fault tolerance - named

>filex_fault_tolerant_write_large_data...

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

### Simple case of writing a small file
https://community.st.com/t5/stm32-mcus/how-to-use-filex-with-emmc-for-file-system-management/ta-p/634300

ST AN5519 Getting started with the SPC58EHx/SPC58NHx multimedia card host controller - this appears to be an older version of the IP in **AN5200** above\
19-Nov-2020 \
https://www.st.com/resource/en/application_note/an5519-getting-started-with-the-spc58ehxspc58nhx-multimedia-card-host-controller-stmicroelectronics.pdf

ST Introduction to LEVELX - Note that this does not seem to be helpful in this situation \
https://wiki.st.com/stm32mcu/wiki/Introduction_to_LEVELX

AD AN-1443: Interfacing an SD Card Through the ADuCM3027/ADuCM3029 SPI Bus - Not Relevant Because SPI \
https://www.analog.com/en/resources/app-notes/an-1443.html

