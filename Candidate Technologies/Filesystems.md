Filesystems - File Systems

Please see also \
https://github.com/William-Robert-Robertson/WildCamera/blob/main/Candidate%20Technologies/STM32N6x7_MCU/SD_Card.md

https://github.com/STMicroelectronics/stm32-mw-fatfs

VENC_SDCard example:

https://github.com/STMicroelectronics/STM32CubeN6/tree/main/Projects/STM32N6570-DK/Applications/VENC/VENC_SDCard

FatFs - Generic FAT Filesystem Module \
https://elm-chan.org/fsw/ff/

AsyncFatFS \
https://github.com/thenickdude/asyncfatfs

https://wiki.st.com/stm32mpu/wiki/Introduction_to_FILEX

FileX slow because of FAT cache misses - on STM32H7B0
https://learn.microsoft.com/en-gb/answers/questions/919417/filex-slow-because-of-fat-cache-misses

https://electronics.stackexchange.com/questions/705979/stm32-writing-to-sd-card-using-fatfs-sometimes-takes-longer-than-normally

UM1721 Developing applications on STM32Cube™ with FatFs \
https://www.st.com/resource/en/user_manual/um1721-developing-applications-on-stm32cube-with-fatfs-stmicroelectronics.pdf

The Middleware FileX component is a STM32 tailored fork of the AzureRTOS FileX. \
Middleware FileX Component stm32-mw-filex \
https://github.com/STMicroelectronics/stm32-mw-filex
documentation: \
https://wiki.st.com/stm32mcu/index.php?title=Introduction_to_FILEX&sfr=stm32mcu

FileX documentation \
https://github.com/eclipse-threadx/rtos-docs/blob/main/rtos-docs/filex/index.md
(Prior versions existed under "Azure RTOS FileX User Guide")

VENC_SDCard_ThreadX example integrating AzureRTOS FileX above - writing to FAT32 \
https://github.com/STMicroelectronics/STM32CubeN6/tree/main/Projects/STM32N6570-DK/Applications/VENC/VENC_SDCard_ThreadX

For small cores, littlefs for a wear-levelling storage, works quite nice for the one or other config file.

With thanks to Simon Vogl.
