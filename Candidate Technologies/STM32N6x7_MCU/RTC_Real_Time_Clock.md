RTC Real Time Clock

Please see ST AN4759 Introduction to using the hardware real-time clock (RTC) and the tamper
management unit (TAMP) with STM32 MCUs

>RTC calibration basics
>where To = 25 °C ± 5 °C and K = –0.032 ppm/°C
>Note: The K variable is crystal-dependent. The value indicated here is for the crystal mounted on the STM32L476RG-
>Nucleo board. Refer to the crystal manufacturer for more details on this parameter.

>The RTC clock can be calibrated with a resolution of about 0.954 ppm with a range from -487.1 ppm
to +488.5 ppm.

0.954 ppm would be about 0.0824 seconds per day - however actual value would depend on temperature variations.
