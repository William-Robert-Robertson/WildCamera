In the following fully expanded arguments are used for readability - for example, "--all" instead of "-a".

#### Cross-Compile Image Sensor Integration

This document assumes that you're working from a Linux distribution based on Debian - setup of the development environment is described in our document INSERT LINK. When writing this document I'm using Ubuntu Linux 6.14 (the current release in July 2025) though for most users the current LTS (Long Term Support) release would be more appropriate.

In order to ensure that all dependencies are clearly documented, we can carry out the build in a docker container. Users who prefer to have the option of managing and viewing docker containers via a graphical useer interface instead of the comand line can use portainer.io .

For Docker installed according to Docker's official instructions, docker commands have to be run as sudo.

We use the FISH (Friendly Interactive SHell) shell rather than the BASH shell for readability.

```
sudo fish
```

List all Docker containers including those which are not currently running

```
docker container ls --all
```

We'll create a persistent volume so that our work can persist new containers, etc.

```
docker volume create peristent_volume_for_yocto
```

```
docker run \
--name yocto_build_container_01_instance_04 \
--mount source=peristent_volume_for_yocto,target=/linux_build/ \
--interactive \
--tty \
yocto_build_container_01:latest
```

The --interactive and --tty options are usually shortened to -it and we'll use this abbreviation in future.

Now, get the entire Linux repository - this will take time and require some disk space (just over 5 GB in July 2025) so is best done on a machine with a good internet connection and plenty of storage.

```
cd linux_build/
git clone git://git.kernel.org/pub/scm/linux/kernel/git/stable/linux-stable.git
```

On the target embedded system, find out which kernel is in use then find the ziped up configuration file used to build this kernel

```
ssh debix@imx8mp-debix

uname --kernel-release # Can be shortened to uname -r

# uname --all which can be shortened to uname -a can be used to get complete information on the Linux version

cd /proc/

ls
# the config.gz file is there 🙂

```

In this case, this returns kernel release 6.1.22 so we can search for this in the clone of the Linux repository that we created above on our build machine:

```
cd linux-stable/
git tag -l | grep 6.1.22

git checkout -b imx8mp_6.1.22 v6.1.22 # -b creaes a new branch
# GIT will create the new branch and switch to it with the message:
# Switched to a new branch 'imx8mp_6.1.22'

```
#### Cross Compile Try 2
```
sudo apt install git bc bison flex libssl-dev make libc6-dev libncurses5-dev
sudo mkdir /opt/toolchain
cd /opt/toolchain
sudo wget https://armkeil.blob.core.windows.net/developer/Files/downloads/gnu-a/9.2-2019.12/binrel/gcc-arm-9.2-2019.12-x86_64-aarch64-none-linux-gnu.tar.xz
# sudo is missed out below in the Debix instructions
sudo tar xpf gcc-arm-9.2-2019.12-x86_64-aarch64-none-linux-gnu.tar.xz
export PATH=$PATH:/opt/toolchain/gcc-arm-9.2-2019.12-x86_64-aarch64-none-linux-gnu/bin

sudo git clone https://github.com/svogl/linux-nxp-debix

cd linux-nxp-debix/

sudo git branch -a

sudo git checkout lf_6.12.3-debix_model_ab_4w

# A backup of the existing .config isn't required for cross-compile
# sudo cp .config .config_backup_6_August

sudo scp debix@imx8mpevk:/proc/config.gz .
sudo gzip -d config.gz
# Creates a file named "config" not ".config" so rename it
sudo mv config .config
sudo make menuconfig
sudo echo $(nproc)
sudo make modules -j$(( $(nproc) * 2 ))

```

#### Local Image Sensor integration

Using Debian and working from Simon's Fork:

```
sudo apt update
sudo apt upgrade
sudo reboot

sudo apt-get -y install libncurses-dev

sudo apt install -y git bc bison flex libssl-dev make libc6-dev libncurses5-dev

mkdir simon
cd simon

git clone https://github.com/svogl/linux-nxp-debix

cd linux-nxp-debix/

git branch -a

git checkout lf_6.12.3-debix_model_ab_4w

zcat /proc/config.gz > .config

# For cross compile:
sudo apt install -y libelf-dev
cp .config .config_backup_6_August
# This is abandonned due to problems:
# sudo ssh debix@imx8mpevk 'zcat /proc/config.gz' must be run before ssh debix@imx8mpevk 'zcat /proc/config.gz' > .config
# otherwise permissions error occurrs.
# sudo ssh debix@imx8mpevk 'zcat /proc/config.gz'
# sudo ssh debix@imx8mpevk 'zcat /proc/config.gz' > .config
# Use this instead:
sudo scp debix@imx8mpevk:/proc/config.gz .
sudo gzip -d config.gz
# Creates config file
sudo mv config .config
sudo make menuconfig
sudo echo $(nproc)
sudo make modules -j$(( $(nproc) * 2 ))
#

# To monitor resource usage during compilation
sudo apt install -y htop
htop
#

# Note that ls does not display .config files - instead ls -all or ls -a for short is needed

sudo make menuconfig

In menuconfig hit / to search and add IMX219 then 1 to select and M to add as a Module

# Make modules takes some time on NXP Debian with 6.6 kernel so a cross-compile rather than a native build is reccomended:
# sudo make modules

# For cross-compile:
# sudo make modules # Gives inefficient use of processor cores.
# To make much more efficient use of processor cores on native compile or cross compile 🙂:
# To get the number of processor cores :
echo $(nproc)
sudo make modules -j$(( $(nproc) * 2 ))
# Native:
# The above gives 100 % CPU usage on all 4 cores while consuming up to 1.29 GB of 1.59 GB RAM - occassionally running out of RAM if GNOME is running at the same time so use this instead:
sudo make modules -j$(( ($(nproc) -1) * 2 )) # Makes full use of all 4 CPU cores without running out of RAM.
# During CC drivers/extcon/extcon-usb-gpio.o memory usage went up to 1.43 G and the compile appeared to crash but spontaneously started going again.
# Cross compile
# The above gives 100 % CPU usage on all 12 cores while consuming up to 9.1 GB of 32 GB RAM
# Cross compile started at 18:23 hrs on development machine 

# Modules are located in the lib directory in the root file system of the OS (lib is an abbreviation of library)
# Create a backup of the modules subdirectory
sudo cp -rp /lib/modules /lib/modules-original-backup-6-Aug-2025

sudo make modules_install

# The above ends with:
#  INSTALL /lib/modules/6.12.3/kernel/net/qrtr/qrtr-tun.ko
#  DEPMOD  /lib/modules/6.12.3
#  Warning: modules_install: missing 'System.map' file. Skipping depmod.

sudo depmod -a

sudo modprobe imx291

```

This uses the Linux kernel source repository that we got into the /linux/ directory in https://github.com/William-Robert-Robertson/WildCamera/blob/main/Development_Environment/Native_Kernel_Build_Debix_Model_A.md

```
sudo apt-get -y install libncurses-dev
sudo apt install git bc bison flex libssl-dev make libc6-dev libncurses5-dev

cd ~/linux/

zcat /proc/config.gz > .config

# Note that ls does not display .config files - instead ls -all or ls -a for short is needed

sudo make menuconfig

in menuconfig hit / to search

Add IMX219

 Symbol: VIDEO_IMX219 [=m]                                               │  
  │ Type  : tristate                                                        │  
  │ Defined at drivers/media/i2c/Kconfig:150                                │  
  │   Prompt: Sony IMX219 sensor support                                    │  
  │   Depends on: MEDIA_SUPPORT [=y] && VIDEO_DEV [=y] && VIDEO_CAMERA_SENS │  
  │   Location:                                                             │  
  │     -> Device Drivers                                                   │  
  │       -> Multimedia support (MEDIA_SUPPORT [=y])                        │  
  │         -> Media ancillary drivers                                      │  
  │           -> Camera sensor devices (VIDEO_CAMERA_SENSOR [=y])           │  
  │ (1)         -> Sony IMX219 sensor support (VIDEO_IMX219 [=m])           │  
  │ Selects: V4L2_CCI_I2C [=y]              

Hit 1 to add this

M for Module is selcted by default

.config - Linux/arm64 6.12.3 Kernel Configuration
 > Search (IMX219) > Camera sensor devices ────────────────────────────────────
  ┌───────────────────────── Camera sensor devices ─────────────────────────┐
  │  Arrow keys navigate the menu.  <Enter> selects submenus ---> (or empty │  
  │  submenus ----).  Highlighted letters are hotkeys.  Pressing <Y>        │  
  │  includes, <N> excludes, <M> modularizes features.  Press <Esc><Esc> to │  
  │  exit, <?> for Help, </> for Search.  Legend: [*] built-in  [ ]         │  
  │ ┌────^(-)─────────────────────────────────────────────────────────────┐ │  
  │ │    < >   Hynix Hi-556 sensor support                                │ │  
  │ │    < >   Hynix Hi-846 sensor support                                │ │  
  │ │    < >   Hynix Hi-847 sensor support                                │ │  
  │ │    < >   Sony IMX208 sensor support                                 │ │  
  │ │    < >   Sony IMX214 sensor support                                 │ │  
  │ │    <M>   Sony IMX219 sensor support                                 │ │  
  │ │    < >   Sony IMX258 sensor support                                 │ │  
  │ │    < >   Sony IMX274 sensor support                                 │ │  
  │ │    < >   Sony IMX283 sensor support                                 │ │  
  │ │    < >   Sony IMX290 sensor support                                 │ │  
  │ └────v(+)─────────────────────────────────────────────────────────────┘ │  
  ├─────────────────────────────────────────────────────────────────────────┤  
  │        <Select>    < Exit >    < Help >    < Save >    < Load >         │  
  └─────────────────────────────────────────────────────────────────────────┘   Symbol: VIDEO_IMX219 [=m]                                               │  
  │ Type  : tristate                                                        │  
  │ Defined at drivers/media/i2c/Kconfig:150                                │  
  │   Prompt: Sony IMX219 sensor support                                    │  
  │   Depends on: MEDIA_SUPPORT [=y] && VIDEO_DEV [=y] && VIDEO_CAMERA_SENS │  
  │   Location:                                                             │  
  │     -> Device Drivers                                                   │  
  │       -> Multimedia support (MEDIA_SUPPORT [=y])                        │  
  │         -> Media ancillary drivers                                      │  
  │           -> Camera sensor devices (VIDEO_CAMERA_SENSOR [=y])           │  
  │ (1)         -> Sony IMX219 sensor support (VIDEO_IMX219 [=m])           │  
  │ Selects: V4L2_CCI_I2C [=y]              
```

Hit 1 to add this

M for Module is selcted by default

```
.config - Linux/arm64 6.12.3 Kernel Configuration
 > Search (IMX219) > Camera sensor devices ────────────────────────────────────
  ┌───────────────────────── Camera sensor devices ─────────────────────────┐
  │  Arrow keys navigate the menu.  <Enter> selects submenus ---> (or empty │  
  │  submenus ----).  Highlighted letters are hotkeys.  Pressing <Y>        │  
  │  includes, <N> excludes, <M> modularizes features.  Press <Esc><Esc> to │  
  │  exit, <?> for Help, </> for Search.  Legend: [*] built-in  [ ]         │  
  │ ┌────^(-)─────────────────────────────────────────────────────────────┐ │  
  │ │    < >   Hynix Hi-556 sensor support                                │ │  
  │ │    < >   Hynix Hi-846 sensor support                                │ │  
  │ │    < >   Hynix Hi-847 sensor support                                │ │  
  │ │    < >   Sony IMX208 sensor support                                 │ │  
  │ │    < >   Sony IMX214 sensor support                                 │ │  
  │ │    <M>   Sony IMX219 sensor support                                 │ │  
  │ │    < >   Sony IMX258 sensor support                                 │ │  
  │ │    < >   Sony IMX274 sensor support                                 │ │  
  │ │    < >   Sony IMX283 sensor support                                 │ │  
  │ │    < >   Sony IMX290 sensor support                                 │ │  
  │ └────v(+)─────────────────────────────────────────────────────────────┘ │  
  ├─────────────────────────────────────────────────────────────────────────┤  
  │        <Select>    < Exit >    < Help >    < Save >    < Load >         │  
  └─────────────────────────────────────────────────────────────────────────┘  

sudo make modules

```

in menuconfig hit / to search

IMX219 is mainline and is found (the RPi V2 camera)

IMX500 is not mainline and is not found.

```
 Symbol: VIDEO_IMX219 [=m]                                               │  
  │ Type  : tristate                                                        │  
  │ Defined at drivers/media/i2c/Kconfig:150                                │  
  │   Prompt: Sony IMX219 sensor support                                    │  
  │   Depends on: MEDIA_SUPPORT [=y] && VIDEO_DEV [=y] && VIDEO_CAMERA_SENS │  
  │   Location:                                                             │  
  │     -> Device Drivers                                                   │  
  │       -> Multimedia support (MEDIA_SUPPORT [=y])                        │  
  │         -> Media ancillary drivers                                      │  
  │           -> Camera sensor devices (VIDEO_CAMERA_SENSOR [=y])           │  
  │ (1)         -> Sony IMX219 sensor support (VIDEO_IMX219 [=m])           │  
  │ Selects: V4L2_CCI_I2C [=y]              
```

Hit 1 to add this

M for Module is selcted by default

Building the modules takes about 5 to 10 minutes:

```
sudo make modules
# Completes without errors.
```

```
# Go into the lib directory in the root file system of the OS (lib is an abbreviation of library)
cd /lib

# Create a backup of the modules subdirectory
sudo cp -rp modules modules-original-backup-2-Aug-2025
sudo cp -rp modules modules-original-backup-4-Aug-2025

```
Now back to the directory where we 

```
cd ~/linux/
sudo make modules_install
# Throws this error - when this error occurrs allow sudo make modules_install to continue running - it appears that this error can be ignored:
# debix@imx8mp-debix:~/linux$ sudo make modules_install
#   DEPMOD  /lib/modules/6.12.3
# depmod: ERROR: /lib/depmod.d/exclude.conf:1: ignoring bad line starting with 'exclude'

sudo depmod -a
# Also throuws the above error - allow it to continue running.

sudo modprobe imx291
# modprobe: FATAL: Module imx291 not found in directory /lib/modules/6.12.3

sudo lsmod
# imx219 isn't listed

sudo dmesg | tail -n30
# No sign of anything related to this

# sudo make modules_install -d
# More info but not much help

# debix@imx8mp-debix:/$ cat /lib/depmod.d/exclude.conf
# exclude .debug
# debix@imx8mp-debix:/$ 

cd ~/linux/arch/arm64/boot/dts/freescale/
cp imx8mp-debix-core-ov5640.dts mx8mp-debix-core-ov5640-backup-copy-4-August.dts

nano imx8mp-debix-core-ov5640.dts

```
