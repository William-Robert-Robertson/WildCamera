STM32N6 GettingStarted ObjectDetection Notes

These notes are for the STM32N6-GettingStarted-ObjectDetection example project:

https://github.com/STMicroelectronics/STM32N6-GettingStarted-ObjectDetection \

https://github.com/svogl/STM32N6-GettingStarted-ObjectDetection (under active development - may not be stable)

```
git clone https://github.com/svogl/STM32N6-GettingStarted-ObjectDetection
cd STM32N6-GettingStarted-ObjectDetection/
git checkout feature/video-enc
git submodule update --init
ls Middlewares/ST/stm32-mw-fatfs/
```

Optionally, Claude can be installed:
```
curl -fsSL https://claude.ai/install.sh | bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc && source ~/.bashrc
```

[Documentaion](https://github.com/STMicroelectronics/STM32N6-GettingStarted-ObjectDetection/tree/main/Doc)

[Deploy your TFLite Model STM32N6570-DK](https://github.com/STMicroelectronics/STM32N6-GettingStarted-ObjectDetection/blob/main/Doc/Deploy-your-tflite-Model-STM32N6570-DK.md)

*These notes were written in December 2025 using Debian 13 trixie, STM32CubeIDE 2.0.0 and STM32CubeProgrammer 2.21.0 installed to their default locations.* \
*The "7" not the "N" in "STM32N6x7" indicates presence of a hardware NPU.*

### DIP Switches - Boot Source

To run the software from external non-volatile memory, boot from flash should be selected:

| DIP       | Setting |
| --------- | ---------- |
| Boot 0    | L        |
| Boot 1    | L        |

To debug from the IDE development boot - from internal volatlie RAM. :

| DIP       | Setting |
| --------- | ---------- |
| Boot 0    | x        |
| Boot 1    | H        |

x = doesn't matter - L or H

The DIP switches selecting boot source are:

| Boot0     | Boot1      | Boot Source     | 
| --------- | ---------- | --------------- | 
| x         | H          | Development boot - from internal volatlie RAM.| 
| L         | L          | Flash boot - from external flash.     | 
| H         | L          | Serial boot | 

Development boot or Serial boot can both program flash from USB when the FSBL is damaged.

More detail on this can be found [here](https://community.st.com/t5/stm32-mcus-boards-and-hardware/stm32n6-boot-pins/td-p/815621)

With a full explaination of how this interacts with the boot ROM [here](https://community.st.com/t5/stm32-mcus/stm32n6-boot-rom-explained/ta-p/763648)

### Power Supply Selection - JP2

| JP2           | 5 V is supplied from        |
| ------------- | --------------------------- |
| 1-2 5V_STLK   | USB STLK (CN6)              |
| 3-4 USB_SNK   | USB1 (CN18)                 |
| 4-5 5V_VIN    | ARDUINO connector (CN8)     |

Writing firmware to flash from a computer with inadequate power available from the USB port can result in writes which appear to succeed but fail to write firmware to flash - to handle this situation JP2 3-4 USB_SNK was used with a power bank connected to USB1 - a powered USB hub may be another option.

When 3-4 USB_SNK is selected, power must be supplied from **both** USB C sockets - STLINK and USB1 - for the board to boot.

From 7.4.1 Power source selection of UM3300 Discovery kit with STM32N657X0 MCU

[USB-A to USB-C cable connecting between on board ST-LINK/V3EC port and laptop is not enough to provide the needed current](https://community.st.com/t5/stm32-mcus-boards-and-hardware/stm32n6570-dk-ai-demo-not-working/td-p/755464)

### STM32CubeIDE Installation

Download STM32CubeIDE, STM32CubeProgrammer and STMCubeMX via a browser

[STM32CubeIDE](https://www.st.com/content/st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-ides/stm32cubeide.html) \
[STM32CubeProgrammer](https://www.st.com/en/development-tools/stm32cubeprog.html) \
[STMCubeMX](https://www.st.com/en/development-tools/stm32cubemx.html)

and install - for example:
```
sudo ./st-stm32cubeide_2.0.0_26820_20251114_1348_amd64.deb_bundle.sh
sudo ./SetupSTM32CubeProgrammer-2.21.0.linux
unzip stm32cubemx-lin-v6-16-1.zip
chmod +x SetupSTM32CubeMX-6.16.1
./SetupSTM32CubeMX-6.16.1
```

*(Note: If STM32CubeIDE is upgraded to 2.0.0 from a prior version of STM32CubeIDE, the upgrade on Debian has to be done by removing the old IDE and installing 2.0.0 as a fresh install. The steps for removal of the old IDE depend on the old IDE version.)*

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
# make -j8 # For a 4 core processor.
make clean
make -j$(nproc)

STM32_SigningTool_CLI -bin build/Application/STM32N6570-DK/Project.bin -nk -of 0x8000000 -t fsbl -o build/Application/STM32N6570-DK/Project-Trusted.bin -hv 2.3 -dump "build/Application/STM32N6570-DK/Project-Trusted.bin"
```

### VSCode Installation

Optionally, VSCode can also be used:
```
# https://wiki.debian.org/VisualStudioCode
# Run the following one line at a time:
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg
sudo install -o root -g root -m 644 microsoft.gpg /etc/apt/keyrings/microsoft-archive-keyring.gpg
sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/microsoft-archive-keyring.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'

sudo apt-get update

sudo apt-get install code # or code-insiders

# In VSCode install STM32CubeIDE
```

### Build Output

Build generates the following files
| file       | function |
| ---------- | ---------- |
| .bin       | Binary        |
| .hex       | Includes addresses - can be sparse       |
| .elf       | Executable Linkable File - stays on the host and is used for OpenOCD debugging     |

### Troubleshooting

RAM Allocation \
https://github.com/William-Robert-Robertson/WildCamera/blob/main/Candidate%20Technologies/STM32N6x7_MCU/Thanks_For_The_Memory.md

If the board has an inadequate power supply
```
Error in initializing ST-LINK device.
Reason: No device found on target.
```
This is the case if power from a laptop USB port alone is used -  provide a 2nd power supply to the board and check that jumper JP2 is in 3-4 position.

To list USB ports:
```
lsusb
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -w build/Application/STM32N6570-DK/Project-Trusted.bin 0x70100000

```

### VENC_SDCard

https://github.com/STMicroelectronics/STM32CubeN6/tree/main/Projects/STM32N6570-DK/Applications/VENC/VENC_SDCard

### Notes
In STM32CubeProgrammer the ISP is listed as:
DCMIPP Digital Camera Memory Interface Pixel Processor


### Thanks
With thanks to Simon Vogl and Kadir Güzel \
https://web.voxel.at/vx11/%3Flanguage%3Dde/node/5 \
https://web.voxel.at/vx11/%3Flanguage%3Den/node/5 \
https://github.com/svogl

