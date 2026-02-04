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
