
These notes are for the STM32N6-GettingStarted-ObjectDetection example project:

https://github.com/STMicroelectronics/STM32N6-GettingStarted-ObjectDetection
https://github.com/svogl/STM32N6-GettingStarted-ObjectDetection

*These notes were written in December 2025 using Debian, STM32CubeIDE 2.0.0 and STM32CubeProgrammer 2.21.0 installed to their default locations.*

### Installation

Download STM32CubeIDE and STM32CubeProgrammer via a browser

[STM32CubeIDE](https://www.st.com/content/st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-ides/stm32cubeide.html)
[STM32CubeProgrammer](https://www.st.com/en/development-tools/stm32cubeprog.html)

and instal - for example:
```
sudo ./st-stm32cubeide_2.0.0_26820_20251114_1348_amd64.deb_bundle.sh
sudo ./SetupSTM32CubeProgrammer-2.21.0.linux
```

*(Note: If STM32CubeIDE is upgraded from a prior version of STM32CubeIDE, the upgrade on Debian has to be done by removing the old IDE and installing 2.0.0 as a fresh install. The steps for removal of the old IDE depend on the old IDE version.)*

The STM32CubeIDE instal automatically installs all neccessarry tools but does not automatically put htem on the path - this can be done using

'''
export PATH=$PATH:/opt/st/stm32cubeide_2.0.0/plugins/com.st.stm32cube.ide.mcu.externaltools.stlink-gdb-server.linux64_2.2.300.202509021040/tools/bin/
export PATH=$PATH:/opt/st/stm32cubeide_2.0.0/plugins/com.st.stm32cube.ide.mcu.externaltools.gnu-tools-for-stm32.13.3.rel1.linux64_1.0.100.202509120712/tools/bin/

export PATH=$PATH:/opt/st/stm32cubeide_2.0.0/plugins/com.st.stm32cube.ide.mcu.externaltools.cubeprogrammer.linux64_2.2.300.202508131133/tools/bin/

export CUBEPROG=/opt/st/stm32cubeide_2.0.0/plugins/com.st.stm32cube.ide.mcu.externaltools.cubeprogrammer.linux64_2.2.300.202508131133/tools/bin/

export LOCALCP=/usr/local/STMicroelectronics/STM32Cube/STM32CubeProgrammer/bin/
'''

### Thanks
With thanks to Simon Vogl and Kadir Güzel
https://web.voxel.at/vx11/%3Flanguage%3Dde/node/5
https://web.voxel.at/vx11/%3Flanguage%3Den/node/5
https://github.com/svogl

