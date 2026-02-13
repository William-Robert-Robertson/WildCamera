Follow the instructions here: https://github.com/STMicroelectronics/STM32CubeN6/blob/main/README.md#how-to-use

Please see also the ST x-cube-n6... repositories:\
https://github.com/STMicroelectronics/x-cube-n6-ai-h264-usb-uvc \
Documneted here:\
https://github.com/William-Robert-Robertson/WildCamera/blob/main/Candidate%20Technologies/STM32N6x7_MCU/ST_x-cube-n6_Repositories.md

STM32CubeN6 uses submodules - it has to be cloned, submodules updated and the correct version (in January 2026 v1.3.0) chosen:

```
cd ~/STM32CubeIDE # For now, clone this to ~/STM32CubeIDE not ~/STM32CubeIDE/workspace_2.0.0
git clone --recursive https://github.com/STMicroelectronics/STM32CubeN6.git
cd STM32CubeN6/
git pull
git submodule update --init --recursive
git checkout v1.3.0

git clone --recursive https://github.com/svogl/venc-sdcard-threadx
cd venc-sdcard-threadx/
git pull
git submodule update --init --recursive
git checkout main # The main branch gives a fx_media_open ERROR 2 FAILED TO OPEN CARD error - use the feature/filex-bsp-integration branch below
git checkout feature/filex-bsp-integration

git clone --recursive https://github.com/svogl/disco-recorder
cd disco-recorder/
git pull
git submodule update --init --recursive
git checkout main # Not needed - only one branch.

git clone --recursive https://github.com/svogl/stm32-fx-usd-file-edit

# Stashed changes can be displayed using:
git stash show -p

```
The STM32N6570-DK board exposes the serial port at 115200 baud - not the default 9600 baud.\
It appears in Linux as ttyACM0 and in Windows as COM3
```
ls -l /dev/ttyACM0
sudo putty -serial /dev/ttyACM0 -sercfg 115200

# Other Linux serial consoles
sudo minicom -s --color=on --device
ckermit
picocom
```

Windows serial consoles 

TeraTerm

See [PowerShell.md](PowerShell.md)

If the user belongs to the 'dialout' user group they have accesss to serial ports and sudo isn't needed.

this can be found immediately after connecting using
```
sudo dmesg
```

This can then be imported into CubeIDE e.g.
```
/home/will/STM32CubeIDE/STM32CubeN6/Projects/STM32N6570-DK/Applications/VENC/VENC_SDCard/STM32CubeIDE
# CubeIDE seems to work with paths in the above form but not with ~/STM32CubeIDE/STM32CubeN6/Projects/STM32N6570-DK/Applications/VENC/VENC_SDCard/STM32CubeIDE/Appli/Middlewares/VideoEncoder for example
```

The .project file used by STMCubeIDE is a hidden file:
```
.project
```
and so listed only with -a \
CubeIDE also genrates other hidden directories and files:
```
.medadata/
.log
```

The repository contains some onomatopoeically named _ew_ and _ic_ files provided for other toolchains (_"IAR Embedded Workbench (EWARM)"_ 🙈 ) - these files are ignored by CubeIDE and VSCode:
```
.icf
.ew...anything
.ewd
.ewp
.eww
```
