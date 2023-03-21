#!/bin/bash

##First get the location of the running script and change to that directory
rundir=$(dirname "$0")
cd $rundir

##Launch a new terminal window to run the admin-config-loader script in so the results will be available to the user.
gnome-terminal -e ../../admin-config-loader.sh
