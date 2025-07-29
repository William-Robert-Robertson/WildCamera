In the following fully expanded arguments are used for readability - for example, "--all" instead of "-a".

This doscument assumes that you're working from a Linux distribution based on Debian - setup of the development environment is described in our document INSERT LINK. When writing this document I'm using Ubuntu Linux 6.14 (the current release in July 2025) though for most users the current LTS (Long Term Support) release would be more appropriate.

In order to ensure that all dependencies are clearly documented, we carry out the build in a docker container. Users who prefer to have the option of managing and viewing docker containers via a graphical useer interface instead of the comand line can use portainer.io .

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


```

```
