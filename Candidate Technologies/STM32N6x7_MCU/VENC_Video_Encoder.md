STM32N6x7 VENC Video Encoder

https://github.com/STMicroelectronics/STM32CubeN6/tree/main/Projects/STM32N6570-DK/Applications/VENC/VENC_SDCard

Introduction to Hardware Video Encoding with STM32 \
https://wiki.st.com/stm32mcu/wiki/Introduction_to_Hardware_Video_Encoding_with_STM32
States
>Frame mode
>
>In this mode, DCMIPP captures a complete frame and stores it in external memory. When the software is signaled for frame completion, it is responsible for calling VENC and providing it with the frame location in memory.
>
>Slices mode / Hardware Handshake
>
>In this mode, DCMIPP captures a certain number of lines (typically 32 lines). When done, it directly signals VENC, which in turn encodes this set of lines. This capture/encode sequence is reiterated until the frame is fully encoded. The software is signaled when the whole frame is finished being encoded. This mode does not require storing the complete input frame.

It looks like - in theory - the VENC can do H264 encoding without a buffer by using a hardware handshake with the DCMIPP - as of December 2025 we haven't tested this yet thought:

"The VENC peripheral on the N6 boasts a hardware handshake path with the DCMIPP peripheral, potentially allowing full compression of each frame to occur with very little active RAM. From what I can find, the DCMIPP capture starts, then the VENC is told to start encoding, and the application only then receives notifications when a frame is complete. "

https://community.st.com/t5/stm32-mcus-products/stm32n6-venc-hardware-handshake-with-mjpeg-encoding/m-p/837174
