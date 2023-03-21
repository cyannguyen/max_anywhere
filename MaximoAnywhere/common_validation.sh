#!/bin/bash

if [ -z "$JAVA_HOME" ]; then

	PROPERTY_FILE=build.properties

	java_home_from_properties=`sed '/^\#/d' $PROPERTY_FILE | grep 'JAVA_HOME'  | tail -n 1 | cut -d "=" -f2- | sed 's/^[[:space:]]*//;s/[[:space:]]*$//'`
	export JAVA_HOME=$java_home_from_properties

	echo "The environment variable JAVA_HOME is not set in the environment. This process uses the JAVA_HOME value that is set by the JAVA_HOME property in the build.properties file."
fi

if [ ! -f "$JAVA_HOME/bin/java" ]; then
	echo "The JAVA_HOME property is not defined properly in the build.properties file. Set the Oracle JDK JAVA_HOME environment variable in the system environment variables or in the build.properties file."
	
	#return to script has called this one, without force current terminal to be closed
	return
fi

if [ -z "$ANT_HOME" ]; then
        export ANT_HOME=./build/tools/ant
        echo "The ANT_HOME environment variable is not defined properly in the system environment variables. This process uses the ANT_HOME=$ANT_HOME."
fi
