Cross Compile Kernel Build Debix Model A

Based on\
https://github.com/debix-tech/linux-nxp-debix?tab=readme-ov-file#11-cross-compiling-the-kernel

Note - the above may not be the best documentation to follow - try\
https://github.com/debix-tech/linux-nxp-debix/tree/lf_6.12.3-debix_model_ab?tab=readme-ov-file#1-download-debix-kernel-source-code
```
sudo apt install git bc bison flex libssl-dev make libc6-dev libncurses5-dev

cd linux_build/

sudo mkdir /opt/toolchain
cd /opt/toolchain
sudo wget https://armkeil.blob.core.windows.net/developer/Files/downloads/gnu-a/9.2-2019.12/binrel/gcc-arm-9.2-2019.12-x86_64-aarch64-none-linux-gnu.tar.xz
tar xpf gcc-arm-9.2-2019.12-x86_64-aarch64-none-linux-gnu.tar.xz
## In SH or BASH shells run this
export PATH=$PATH:/opt/toolchain/gcc-arm-9.2-2019.12-x86_64-aarch64-none-linux-gnu/bin
## The : in the above separates PATH entries in BASH and SH but causes severe problems in FISH
## in FISH shell run this
PATH="$PATH /opt/toolchain/gcc-arm-9.2-2019.12-x86_64-aarch64-none-linux-gnu/bin"

mkdir linux_build_debix
cd linux_build_debix/

git clone --depth=1 --branch lf_6.12.3-debix_model_ab https://github.com/debix-tech/linux

```
