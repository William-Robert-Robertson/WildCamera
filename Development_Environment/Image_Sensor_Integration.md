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
#### Local Image Sensor integration

This uses the Linux kernel source repository that we got into the /linux/ directory in https://github.com/William-Robert-Robertson/WildCamera/blob/main/Development_Environment/Native_Kernel_Build_Debix_Model_A.md

```
sudo apt-get -y install libncurses-dev

cd linux

zcat /proc/config.gz > .config

# Note that ls does not display .config files - instead ls -all or ls -a for short is needed

make menuconfig

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
```
Building the modules takes about 5 minutes:

```
make modules
```

```
# Go into the lib directory of the OS (lib is an abbreviation of library)
cd /lib

# Create a backup of the modules subdirectory
sudo cp -rp modules modules-original-backup-2-Aug-2025

```
Now back to the directory where we 

```
cd ~/linux/
sudo make modules_install
```


