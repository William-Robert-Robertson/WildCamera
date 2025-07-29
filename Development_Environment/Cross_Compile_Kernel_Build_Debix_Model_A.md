Cross Compile Kernel Build Debix Model A

Based on
https://github.com/debix-tech/linux-nxp-debix?tab=readme-ov-file#11-cross-compiling-the-kernel

```
sudo apt install git bc bison flex libssl-dev make libc6-dev libncurses5-dev

cd linux_build/

sudo mkdir /opt/toolchain
cd /opt/toolchain
sudo wget https://armkeil.blob.core.windows.net/developer/Files/downloads/gnu-a/9.2-2019.12/binrel/gcc-arm-9.2-2019.12-x86_64-aarch64-none-linux-gnu.tar.xz
tar xpf gcc-arm-9.2-2019.12-x86_64-aarch64-none-linux-gnu.tar.xz
export PATH=$PATH:/opt/toolchain/gcc-arm-9.2-2019.12-x86_64-aarch64-none-linux-gnu/bin

# Don't run this line twice export PATH=$PATH:/opt/toolchain/gcc-arm-9.2-2019.12-x86_64-aarch64-none-linux-gnu/bin

# What does the : in the above do?

```
