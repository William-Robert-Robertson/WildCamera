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
