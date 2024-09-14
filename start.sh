#!/bin/sh

echo "START Running Mountebank on `date`"
echo "mb args=$@"

bun start $@