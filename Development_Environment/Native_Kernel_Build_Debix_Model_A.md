Native Kernel Build Debix Model A

Based On\
https://github.com/debix-tech/linux-nxp-debix?tab=readme-ov-file#10-building-the-kernel-locally

Run on 29 July 2025 on a Debix Model A with 2 GB of RAM the final step takes a long time...

```
# This can be run from the default "debix" user's home directory:
cd ~

# Run apt update and apt upgrade is these have not been run recently:
sudo apt update
sudo apt upgrade
sudo reboot

sudo apt install -y git bc bison flex libssl-dev make

# This will simply get the current kernel version:
# git clone --depth=1 https://github.com/debix-tech/linux

# https://github.com/debix-tech/linux-nxp-debix
# The branch we want is lf_6.12.3-debix_model_ab
# https://github.com/debix-tech/linux-nxp-debix/tree/lf_6.12.3-debix_model_ab

git clone --depth=1 --branch lf_6.12.3-debix_model_ab https://github.com/debix-tech/linux

# this will create the directory named linux and clone the 6.12.3 kernel into it.

cd linux/
# On older distributions this directory had a different name
# cd debix-kernel
sudo make imx_v8_defconfig

# To run the build process over 4 threads 
sudo make -j4
# The maximum numbwer of threads available is double the number of CPU cores so depending on the memory availabe, the build time can usually be optimised using the following (beware though that on systems with insufficient RAM the system may run out of RAM):
sudo make -j$(nproc)
sudo make INSTALL_MOD_STRIP=1 modules_install
sudo cp arch/arm64/boot/dts/freescale/*.dtb /boot/.
sudo cp arch/arm64/boot/Image /boot/.

```
