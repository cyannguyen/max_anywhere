#!/bin/bash

current_dir=$(pwd)
maxanywhere_dir=$(dirname $0)

cd $maxanywhere_dir 

. ./build.sh $@

cd $current_dir

printf 'Press Enter to continue.'
read _