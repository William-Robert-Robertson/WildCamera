Native Kernel Build Debix Model A

Based On\
https://github.com/debix-tech/linux-nxp-debix?tab=readme-ov-file#10-building-the-kernel-locally

Run on 29 July 2025 on a Debix Model A with 2 GB of RAM the final step takes a long time...

```
sudo apt install -y git bc bison flex libssl-dev make

# This will simply get the current kernel version:
# git clone --depth=1 https://github.com/debix-tech/linux

# https://github.com/debix-tech/linux-nxp-debix
# The branch we want is lf_6.12.3-debix_model_ab
# https://github.com/debix-tech/linux-nxp-debix/tree/lf_6.12.3-debix_model_ab

git clone --depth=1 --branch lf_6.12.3-debix_model_ab https://github.com/debix-tech/linux

cd linux/
cd debix-kernel
make imx_v8_defconfig

make -j4 
sudo make INSTALL_MOD_STRIP=1 modules_install
sudo cp arch/arm64/boot/dts/freescale/*.dtb /boot/. 
sudo cp arch/arm64/boot/Image /boot/.

```
