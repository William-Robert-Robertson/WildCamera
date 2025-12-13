STM32N6 GettingStarted ObjectDetection Notes

These notes are for the STM32N6-GettingStarted-ObjectDetection example project:

https://github.com/STMicroelectronics/STM32N6-GettingStarted-ObjectDetection \
https://github.com/svogl/STM32N6-GettingStarted-ObjectDetection

*These notes were written in December 2025 using Debian, STM32CubeIDE 2.0.0 and STM32CubeProgrammer 2.21.0 installed to their default locations.* \
*The "7" not the "N" in "STM32N6x7" indicates presence of a hardware NPU.*

### Installation

Download STM32CubeIDE and STM32CubeProgrammer via a browser

[STM32CubeIDE](https://www.st.com/content/st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-ides/stm32cubeide.html) \
[STM32CubeProgrammer](https://www.st.com/en/development-tools/stm32cubeprog.html)

and install - for example:
```
sudo ./st-stm32cubeide_2.0.0_26820_20251114_1348_amd64.deb_bundle.sh
sudo ./SetupSTM32CubeProgrammer-2.21.0.linux
```

*(Note: If STM32CubeIDE is upgraded from a prior version of STM32CubeIDE, the upgrade on Debian has to be done by removing the old IDE and installing 2.0.0 as a fresh install. The steps for removal of the old IDE depend on the old IDE version.)*

The STM32CubeIDE install automatically installs all necessary tools but does ***not*** automatically put them on the path - this can be done using

```
export PATH=$PATH:/opt/st/stm32cubeide_2.0.0/plugins/com.st.stm32cube.ide.mcu.externaltools.stlink-gdb-server.linux64_2.2.300.202509021040/tools/bin/
export PATH=$PATH:/opt/st/stm32cubeide_2.0.0/plugins/com.st.stm32cube.ide.mcu.externaltools.gnu-tools-for-stm32.13.3.rel1.linux64_1.0.100.202509120712/tools/bin/

export PATH=$PATH:/opt/st/stm32cubeide_2.0.0/plugins/com.st.stm32cube.ide.mcu.externaltools.cubeprogrammer.linux64_2.2.300.202508131133/tools/bin/

export CUBEPROG=/opt/st/stm32cubeide_2.0.0/plugins/com.st.stm32cube.ide.mcu.externaltools.cubeprogrammer.linux64_2.2.300.202508131133/tools/bin/

export LOCALCP=/usr/local/STMicroelectronics/STM32Cube/STM32CubeProgrammer/bin/
```
```
cd ~/STM32CubeIDE/workspace_2.0.0/STM32N6-GettingStarted-ObjectDetection/Application/STM32N6570-DK
```
Set the DKEL - Development Kit External Loader - to the external flash loader for the STM32N6570-DK board and its [MX66UW1G45G](https://github.com/William-Robert-Robertson/WildCamera/blob/main/Candidate%20Technologies/ICs/Data%20Sheets/MX66U1G45G%2C%201.8V%2C%201Gb%2C%20v1.4.pdf) flash memory chip.
```
export DKEL=/usr/local/STMicroelectronics/STM32Cube/STM32CubeProgrammer/bin/ExternalLoader/MX66UW1G45G_STM32N6570-DK.stldr

```
```
make -j8 # For a 4 core processor.

STM32_SigningTool_CLI -bin build/Application/STM32N6570-DK/Project.bin -nk -of 0x8000000 -t fsbl -o build/Application/STM32N6570-DK/Project-Trusted.bin -hv 2.3 -dump "build/Application/STM32N6570-DK/Project-Trusted.bin"
```

### Thanks
With thanks to Simon Vogl and Kadir Güzel \
https://web.voxel.at/vx11/%3Flanguage%3Dde/node/5 \
https://web.voxel.at/vx11/%3Flanguage%3Den/node/5 \
https://github.com/svogl

