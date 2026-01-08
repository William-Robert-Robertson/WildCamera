Follow the instructions here: https://github.com/STMicroelectronics/STM32CubeN6/blob/main/README.md#how-to-use

STM32CubeN6 uses submodules - it has to be cloned, submodules updated and the correct version (in January 2026 v1.3.0) chosen:

```
cd ~/STM32CubeIDE # For now, clone this to ~/STM32CubeIDE not ~/STM32CubeIDE/workspace_2.0.0
git clone --recursive https://github.com/STMicroelectronics/STM32CubeN6.git
cd STM32CubeN6/
git pull
git submodule update --init --recursive
git checkout v1.3.0
```

This can then be imported into CubeIDE e.g.
```
/home/will/STM32CubeIDE/STM32CubeN6/Projects/STM32N6570-DK/Applications/VENC/VENC_SDCard/STM32CubeIDE
```
