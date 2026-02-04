### Tree

Trees are definitly a very good thing. 🌲🌳

Debian comes without the tree comand - to install it using APT (Advanced Package Tool):

```
sudo apt install tree
```

Tree can also be used with -a to display all files including hidden files and piped to grep 🌲🌳🙂
```
tree | grep STM32

tree -a STM32CubeN6/Projects/STM32N6570-DK/Applications/VENC/VENC_SDCard | grep .projec
```
PowerShell comes with tree but without grep - Select-String can be used in place of grep.
```
tree | Select-String STM32

New-Alias -Name grep -Value Select-String -Description “grep Select-String alias”
```
