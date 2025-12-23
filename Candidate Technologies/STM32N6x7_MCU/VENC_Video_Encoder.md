STM32N6x7 VENC Video Encoder

https://github.com/STMicroelectronics/STM32CubeN6/tree/main/Projects/STM32N6570-DK/Applications/VENC/VENC_SDCard

Introduction to Hardware Video Encoding with STM32
https://wiki.st.com/stm32mcu/wiki/Introduction_to_Hardware_Video_Encoding_with_STM32

It looks like - in theory - the VENC can do H264 encoding without a buffer by using a hardware handshake with the DCMIPP - as of December 2025 we haven't tested this yet thought:

"The VENC peripheral on the N6 boasts a hardware handshake path with the DCMIPP peripheral, potentially allowing full compression of each frame to occur with very little active RAM. From what I can find, the DCMIPP capture starts, then the VENC is told to start encoding, and the application only then receives notifications when a frame is complete. "

https://community.st.com/t5/stm32-mcus-products/stm32n6-venc-hardware-handshake-with-mjpeg-encoding/m-p/837174
