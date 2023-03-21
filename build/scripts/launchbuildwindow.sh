#!/bin/bash

##First get the location of the running script and change to that directory
rundir=$(dirname "$0")
cd $rundir

##Launch a new terminal window to run the launchbuild script in so the results will be available to the user.
gnome-terminal -e ../../launchbuild.sh all