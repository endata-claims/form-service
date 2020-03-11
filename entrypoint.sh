#!/bin/sh

if [[ $? == 0 ]]; then
  cd /root/app
  /usr/sbin/sshd
  yarn prisma:deploy
  yarn prisma:generate
  yarn start
fi