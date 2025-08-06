
```
sudo fdisk -l

# As of summer 2025, NXP's Ubuntu distribution is nolonger being updated and so is not reccomended for WildCamera.
sudo dd if=Downloads/ModelA-L6.1.22-TF-V3.12-20250326.img of=/dev/sda

# Yocto 6.1 kernel
sudo dd if=Downloads/imx-image-full-imx8mpevk.rootfs-1.03_20241114.wic of=/dev/sda

# Yocto 6.12 kernel
sudo dd if=Downloads/ModelABInfinity-Y6.12.3-BootfromSDCard-V1.01_20250427.wic of=/dev/sda

# Debian
unzip Downloads/Model_A_B_Infinity_D12.6_V1.1_20240822.zip
sudo dd if=Downloads/Model_A_B_Infinity_D12.6_V1.1_20240822.wic of=/dev/sda
```
