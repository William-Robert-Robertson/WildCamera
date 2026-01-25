SD Card

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

ST Introduction to LEVELX \
https://wiki.st.com/stm32mcu/wiki/Introduction_to_LEVELX

ST AN5200 Getting started with the STM32H7 MCU SDMMC host controller \
http://www.st.com/resource/en/application_note/an5200-getting-started-with-the-stm32h7-mcu-sdmmc-host-controller-stmicroelectronics.pdf

ST AN5519 Getting started with the SPC58EHx/SPC58NHx multimedia card host controller \
19-Nov-2020 \
https://www.st.com/resource/en/application_note/an5519-getting-started-with-the-spc58ehxspc58nhx-multimedia-card-host-controller-stmicroelectronics.pdf

AD AN-1443: Interfacing an SD Card Through the ADuCM3027/ADuCM3029 SPI Bus \
https://www.analog.com/en/resources/app-notes/an-1443.html

