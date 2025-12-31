STM32N6x7 VENC Video Encoder

The STM32N6x7 uses the Verisilicon Hantro VC8000NanoE VENC and the following is © Verisilicon

>4 Memory Requirements \
>A.1 Input Picture Buffer \
>The input picture buffer is a memory buffer for hardware use only which must be allocated by external means (i.e., \
>it is not allocated by the encoder software). \
>... \
>4.2 Output Stream Buffer \
>Output buffer of the encoder is externally allocated memory area where the produced stream data is available to \
>the application. In all encoding modes the output buffer must be linear and contiguous, and allocated in a memory \
>area accessible by the hardware.  \
>... \
>4.3.1 Hardware Internal Buffers \
>The hardware internal buffers store the internal reference picture used by the hardware for motion estimation. \
>The buffers must be linear and contiguous, and allocated in a memory area accessible by the hardware. They also \
>must be 64-bit aligned. The buffer size depends on the encoded picture resolution. \
>... \
>4.3.4 Overall Memory Usage \
>Table 13. H.264 HW/SW Shared Memory Size in Bytes \
>720p Total Buffer Size 194'256 bytes \
>... \
>4.3.4 Overall Memory Usage \
>Table 16. Memory Usage of H.264 Encoder With Different Picture Sizes \
>Total default Buffer Size **4'244 Kbytes** \
>... \
>... \
>6.7 Recommendations for Memory Allocation/Optimization \
>Because the memory busload during the encoding can get very high, it makes sense to allocate the hardware \
>related buffers to the fastest memory area. \
>For the reference picture memory, the chrominance data is the most critical. Therefore, it is recommended to give \
>chrominance data a higher priority for using faster memory areas \

https://github.com/STMicroelectronics/STM32CubeN6/tree/main/Projects/STM32N6570-DK/Applications/VENC/VENC_SDCard

[1.2.2. Encode Data Flow Example↑](https://wiki.st.com/stm32mcu/wiki/Introduction_to_Hardware_Video_Encoding_with_STM32#Encode_Data_Flow_Example)

>VENC Reads Reference Frame from memory (YUV 4:2:0)
>
>    Note that VENC reads Chrominance (UV) data twice resulting in a average bandwidth of 16bpp

```
git clone https://github.com/STMicroelectronics/STM32CubeN6.git
cd STM32CubeN6/Projects/STM32N6570-DK/Applications/VENC/VENC_SDCard
```

File -> Import -> STM32CubeMX/STM32CubeIDE -> navigate to local user workspace_2.0.0/STM32CubeN6/Projects/STM32N6570-DK/Applications/VENC/VENC_SDCard

Introduction to Hardware Video Encoding with STM32 \
https://wiki.st.com/stm32mcu/wiki/Introduction_to_Hardware_Video_Encoding_with_STM32 states:
>Frame mode
>
>In this mode, DCMIPP captures a complete frame and stores it in external memory. When the software is signaled for frame completion, it is responsible for calling VENC and providing it with the frame location in memory.
>
>Slices mode / Hardware Handshake
>
>In this mode, DCMIPP captures a certain number of lines (typically 32 lines). When done, it directly signals VENC, which in turn encodes this set of lines. This capture/encode sequence is reiterated until the frame is fully encoded. The software is signaled when the whole frame is finished being encoded. This mode does not require storing the complete input frame.
>Uncompressed frame may be located in Internal or external memory depending on encoding mode (HW handshake, frame resolution,) and memory available.

It appears that internal or external memory can be used by the VENC:

[H264 Hardware Handshake encoding](https://wiki.st.com/stm32mcu/wiki/H264_Hardware_Handshake_encoding)

Sourece code and documentation are in the subdirectories here:

https://github.com/STMicroelectronics/STM32CubeN6/tree/main/Middlewares/Third_Party/VideoEncoder

source for features including denoise seems to be here 

https://github.com/STMicroelectronics/STM32CubeN6/tree/main/Middlewares/Third_Party/VideoEncoder/source/h264

It looks like - in theory - the VENC can do H264 encoding without a buffer by using a hardware handshake with the DCMIPP - as of December 2025 we haven't tested this yet thought:

"The VENC peripheral on the N6 boasts a hardware handshake path with the DCMIPP peripheral, potentially allowing full compression of each frame to occur with very little active RAM. From what I can find, the DCMIPP capture starts, then the VENC is told to start encoding, and the application only then receives notifications when a frame is complete. "

https://community.st.com/t5/stm32-mcus-products/stm32n6-venc-hardware-handshake-with-mjpeg-encoding/m-p/837174

STM32 Developers on Facebook

https://www.facebook.com/groups/STM32Developers/


