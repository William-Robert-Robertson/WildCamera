https://github.com/STMicroelectronics/STM32CubeN6/blob/main/README.md#how-to-use

STM32CubeN6 uses submodules - it has to be cloned, submodules updated and the correct version (in January 2026 v1.3.0) chosen:

```
git clone --recursive https://github.com/STMicroelectronics/STM32CubeN6.git
cd STM32CubeN6/
git pull
git submodule update --init --recursive
git checkout v1.3.0
```
