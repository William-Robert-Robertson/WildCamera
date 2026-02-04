PowerShell??? Yup - a lot of engineers at ST seem to use Windows as their desktop OS...

Windows installers for STM32CubeIDE and STM32CubeMX can be downloaded from:\
https://www.st.com/en/development-tools/stm32cubeide.html \
https://www.st.com/en/development-tools/stm32cubemx.html

```
winget install --id Git.Git -e --source winget
winget install -e --id Microsoft.VisualStudioCode
winget install -e --id TeraTermProject.teraterm
```
VSCode Extensions:\
STM32CubeIDE for Visual Studio Code

To list all serial ports including the UART USB bridge on the STM32N6570-DK:
```
Get-CimInstance -Class Win32_SerialPort | Select-Object Name, Description, DeviceID
# or
[System.IO.Ports.SerialPort]::getportnames()
```
The STM32N6570-DK board exposes the serial port at 115200 baud - not the default 9600 baud - and on COM3 in Windows.\
To run TeraTerm if it isn't on the path
```
& "C:\Program Files (x86)\teraterm5\ttermpro.exe"

& "C:\Program Files (x86)\teraterm5\ttermpro.exe" /BAUD=115200 /C=COM3
```
```
cd C:\Users\wrobe\STM32CubeIDE\
# git comands can be used to get source code from here. Please see:
https://github.com/William-Robert-Robertson/WildCamera/blob/main/Candidate%20Technologies/STM32N6x7_MCU/STM32CubeN6_Example_Projects.md
```
