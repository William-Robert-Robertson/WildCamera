From Paul Fertser
12 August 2025

Judging by /boot/buildinfo , uname -r and quick search on the Internet I decided to try this NXP source: "mkdir linux; cd linux; git init; git fetch --depth=1 https://github.com/nxp-imx/linux-imx refs/tags/lf-6.6.3-1.0.0; git checkout FETCH_HEAD" , of course you can do same thing in many different ways, but you get the idea.

```
# Run on Ubuntu development machine 12 august 2025
# uname -a
# ...6.14.0-27-generic #27~24.04.1-Ubuntu...

mkdir paul;
cd paul;
mkdir linux;
cd linux;
git init;
git fetch --depth=1 https://github.com/nxp-imx/linux-imx refs/tags/lf-6.6.3-1.0.0; git checkout FETCH_HEAD
```

Then I did "zcat config.gz > .config" (and btw, checked that it's identical to /boot/config-6.6.3 from the board)

```
# /proc/config.gz and /boot/config-6.6.3/config.gz should have the same contents.
# Copy the config.gz file from the Debix Model A board to the build machine then unzip it:

# scp <source> <destination>
scp debix@imx8mpevk:/proc/config.gz config.gz
zcat config.gz > .config
```

Then I run "make ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- -j`nproc` Image modules" and it asked me /few/ questions about config (so apparently I wasn't exactly correct in choosing the kernel source and it didn't fully match what was the author of the image using) and I pressed Enter few times to pick defaults.

```
# Image with a capital I not a lower case i.
make ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- INSTALL_MOD_PATH=build-modules LOCALVERSION="" -j$(nproc) Image 
make ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- INSTALL_MOD_PATH=build-modules LOCALVERSION="" -j$(nproc) modules
make ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- INSTALL_MOD_PATH=build-modules LOCALVERSION="" -j$(nproc) dtbs
make ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- INSTALL_MOD_PATH=build-modules LOCALVERSION="" INSTALL_DTBS_PATH=build-dtbs -j$(nproc) modules_install
make ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- INSTALL_MOD_PATH=build-modules LOCALVERSION="" INSTALL_DTBS_PATH=build-dtbs -j$(nproc) dtbs_install
# Select the following:
# > 1. Don't compress debug information (DEBUG_INFO_COMPRESSED_NONE)
```

The command finished, then I changed .config to have "CONFIG_VIDEO_IMX219=m", run "make ARCH=arm64 oldconfig" and again built the modules.

```
nano .config
# Ctrl W then find CONFIG_VIDEO_IMX219
# We find this:
# CONFIG_VIDEO_IMX219 is not set
# Change it to:
CONFIG_VIDEO_IMX219=m
# Ctrl O, Ctrl X

# Now re-run the above:
make ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- INSTALL_MOD_PATH=build-modules LOCALVERSION="" -j$(nproc) Image 
make ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- INSTALL_MOD_PATH=build-modules LOCALVERSION="" -j$(nproc) modules
make ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- INSTALL_MOD_PATH=build-modules LOCALVERSION="" -j$(nproc) dtbs
make ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- INSTALL_MOD_PATH=build-modules LOCALVERSION="" INSTALL_DTBS_PATH=build-dtbs -j$(nproc) modules_install
make ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- INSTALL_MOD_PATH=build-modules LOCALVERSION="" INSTALL_DTBS_PATH=build-dtbs -j$(nproc) dtbs_install
```

Copied drivers/media/v4l2-core/v4l2-cci.ko and drivers/media/i2c/imx219.ko to the target and manually insmod'd them for testing while observing "dmesg -w".

```
# Both these files exist 🙂
ls drivers/media/v4l2-core/v4l2-cci.ko
ls drivers/media/i2c/imx219.ko

scp drivers/media/v4l2-core/v4l2-cci.ko debix@imx8mpevk:/tmp/
scp drivers/media/i2c/imx219.ko         debix@imx8mpevk:/tmp/

ssh debix@imx8mpevk

sudo cp /tmp/v4l2-cci.ko               /lib/modules/6.6.3/updates/
sudo cp /tmp/imx219.ko                 /lib/modules/6.6.3/updates/

# Update the index used by modprobe - important!
sudo depmod

# modprob automatically scans the index for lib/modules/ created by depmod above abd finds dependencies.
sudo modprobe imx219

# sysfs path for camera - not a command, a directory to look around in
# /sys/devices/platform/soc@0/30800000.bus/30a30000.i2c/i2c-1/1-0010

# module initially refuses:
#[34721.144764] imx219 1-0010: link-frequency property not found in DT
# kernel source has, for 2 lanes (other values would be rejected):
# #define IMX219_DEFAULT_LINK_FREQ        456000000

# missing bit in devicetree:
#			i2c@30a30000 {
#				imx219_mipi@10 {
#					port {
#						endpoint {
#							nr-link-frequencies = <1>;            /* THIS */
#							link-frequencies = <0 456000000>;     /* AND THIS */

```

In general no matter what kernel source was used and what build system was used (be it Debian, OpenEmbedded or Buildroot) if I have information about how any specific image was built I can extract it and reproduce with manual compilation of the kernel to get the same version, compatible modules etc.


