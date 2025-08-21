# (C) Copyright 2025 Will Robertson, OpenWildlife WildCamera
# 
# SPDX-License-Identifier: AGPL-3.0-or-later

## To create a persistent volume for this:
#  cd ~
#  cd Dockerfiles
#  sudo docker volume create debix-volume
#  sudo docker build -t debix-build -f linux-build/debix-build.Dockerfile .

# Ubuntu 24.04 LTS (Noble Numbat) is the most recent LTS in June 2025.
FROM ubuntu:24.04

LABEL maintainer="Will Robertson, OpenWildlife" \
 vendor="OpenWildlife" \
 description="Docker image for Debix build."

RUN apt update -y
RUN apt-get update -y

# Based on instructions in July 2025 here:
# https://github.com/debix-tech/linux-nxp-debix/tree/lf_6.6.36-debix_model_ab

RUN apt install -y \
git \
bc \
bison \
flex \
libssl-dev \
make \
libc6-dev \
libncurses5-dev

RUN git clone https://github.com/debix-tech/linux-nxp-debix.git

 # Nano, Sudo and apt added for OpenWildlife.
 RUN apt-get install -y \
 apt \
 nano \
 sudo
 
# Install FISH - FInally, a command SHell for the 90s added for OpenWildlife.
RUN apt-get install -y software-properties-common
RUN apt-add-repository -y ppa:fish-shell/release-4
RUN apt install -y fish

RUN apt -y autoremove
RUN apt -y clean

# The following lines set FISH as the default shell and are based on:
# https://github.com/dideler/docker-fish-shell/blob/main/Dockerfile

SHELL ["fish", "--command"]

RUN chsh -s /usr/bin/fish

ENV SHELL=/usr/bin/fish
ENV LANG=C.UTF-8 LANGUAGE=C.UTF-8 LC_ALL=C.UTF-8

ENTRYPOINT [ "fish" ]
