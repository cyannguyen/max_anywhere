#!/bin/bash

. ./common_validation.sh

if [ -z "$TEMP" ]; then
        export TEMP=/tmp
        echo "Using TEMP=$TEMP as temp path"
fi

$ANT_HOME/bin/ant $@
