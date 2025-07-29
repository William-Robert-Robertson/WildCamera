In the following fully expanded arguments are used for readability - for example, "--all" instead of "-a".

This doscument assumes that you're working from a Linux distribution based on Debian - setup of the development environment is described in our document INSERT LINK. When writing this document I'm using Ubuntu Linux 6.14 (the current release in July 2025) though for most users the curreent LTS release would be more appropriate.

For Docker installed according to Docker's official instructions, docker comands have to be run as sudo.

We use the FISH shell rather than the BASH shell for readability.

```
sudo fish
```

List all Docker containers including those which are not working

```
docker container ls --all
```

```
docker volume create peristent_volume_for_yocto
```

```
docker run yocto_build_container_01:latest --name yocto_build_container_01_instance_04
```


