In the following fully expanded arguments are used for readability - for example, "--all" instead of "-a".

This doscument assumes that you're working from a Linux distribution based on Debian - setup of the development environment is described in our document INSERT LINK. When writing this document I'm using Ubuntu Linux 6.14 (the current release in July 2025) though for most users the current LTS release would be more appropriate.

In order to ensure that all dependencies are clearly documented, we carry out the build in a docker container.

For Docker installed according to Docker's official instructions, docker commands have to be run as sudo.

We use the FISH shell rather than the BASH shell for readability.

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

Now, get the entire Linux repository - this will take time and require some disk space so is best done on a machine with a good internet connection and plenty of storage.

```
cd linux_build/
git clone git://git.kernel.org/pub/scm/linux/kernel/git/stable/linux-stable.git
```

On the target embedded system, find out which kernel is in use then find the ziped up configuration file used to build this kernel

```
ssh debix@imx8mp-debix

uname --kernel-release # Can be shortened to uname -r

cd /proc/

ls
# the config.gz file is there 🙂

```

```
uname --all # Can be shortened to uname -a
```
