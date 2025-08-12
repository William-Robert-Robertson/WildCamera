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
make ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- -j$(nproc) Image modules
# Select the following:
# > 1. Don't compress debug information (DEBUG_INFO_COMPRESSED_NONE)

```

The command finished, then I changed .config to have "CONFIG_VIDEO_IMX219=m", run "make ARCH=arm64 oldconfig" and again built the modules.

Copied drivers/media/v4l2-core/v4l2-cci.ko and drivers/media/i2c/imx219.ko to the target and manually insmod'd them for testing while observing "dmesg -w".

In general no matter what kernel source was used and what build system was used (be it Debian, OpenEmbedded or Buildroot) if I have information about how any specific image was built I can extract it and reproduce with manual compilation of the kernel to get the same version, compatible modules etc.


