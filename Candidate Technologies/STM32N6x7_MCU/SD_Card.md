SD Card

File systems are covedred seperately here:\
https://github.com/William-Robert-Robertson/WildCamera/blob/main/Candidate%20Technologies/Filesystems.md

To achieve full speed a 4 bit bus should be set:

https://github.com/STMicroelectronics/STM32N6-GettingStarted-ObjectDetection/commit/c99f02c8ac867aa11e0bdb14f32ff7709336928f

EXFat used:

https://github.com/svogl/STM32N6-GettingStarted-ObjectDetection/blob/feature/sdio-tests/Application/STM32N6570-DK/Inc/ffconf.h

and OTP Fuses changed from 3.3 V to 1.8 V
```
Under HCONF1
HSLV_VDDIO5 for SDMMC2
HSLV_VDDIO4 for SDMMC1
```

Interface SD Card via SDIO (4Bit Mode & DMA) - Interface SD Card via SDIO (4Bit Mode & DMA) \
https://controllerstech.com/interface-sd-card-with-stm32-via-sdio-4bit-mode/

https://community.st.com/t5/stm32-mcus-embedded-software/stm32n6-threadx-filex-sdmmc2-fx-io-error-144-during-continuous/td-p/864230

references this:

https://github.com/STMicroelectronics/STM32CubeN6/tree/main/Projects/STM32N6570-DK/Applications/FileX/Fx_uSD_File_Edit

https://www.sdcard.org/wp-content/uploads/2020/11/Video_Speed_Class-The_new_capture_protocol_of_SD_5.0.pdf

ST Introduction to LEVELX - Note that this does not seem to be helpful in this situation \
https://wiki.st.com/stm32mcu/wiki/Introduction_to_LEVELX

ST AN5200 Getting started with the STM32H7 MCU SDMMC host controller \
AN5200 - Rev 3 - June 2025 \
http://www.st.com/resource/en/application_note/an5200-getting-started-with-the-stm32h7-mcu-sdmmc-host-controller-stmicroelectronics.pdf

ST HAL SD How to Use \
https://dev.st.com/stm32cube-docs/stm32u5-hal2/2.0.0-beta.1.1/docs/drivers/hal_drivers/sd/hal_sd_how_to_use.html

ST HAL SDIO How to Use \
https://dev.st.com/stm32cube-docs/stm32u5-hal2/2.0.0-beta.1.1/docs/drivers/hal_drivers/sdio/hal_sdio_how_to_use.html#hal-sdio-how-to-use

ST AN5519 Getting started with the SPC58EHx/SPC58NHx multimedia card host controller \
19-Nov-2020 \
https://www.st.com/resource/en/application_note/an5519-getting-started-with-the-spc58ehxspc58nhx-multimedia-card-host-controller-stmicroelectronics.pdf

AD AN-1443: Interfacing an SD Card Through the ADuCM3027/ADuCM3029 SPI Bus - Not Relevant Because SPI \
https://www.analog.com/en/resources/app-notes/an-1443.html

