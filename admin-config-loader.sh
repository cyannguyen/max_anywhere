#!/bin/bash

CURRENT_DIR=$(pwd)
BASEDIR=$(dirname "$0")

cd $BASEDIR

. ./common_validation.sh $@

if [ -n "$JAVA_HOME" ] && [ -x "$JAVA_HOME/bin/java" ]; then

	PROPERTY_FILE=./build.properties
	
	username=`sed '/^\#/d' $PROPERTY_FILE | grep 'adapter.connection.user'  | tail -n 1 | cut -d "=" -f2- | sed 's/^[[:space:]]*//;s/[[:space:]]*$//'`
	
	readFromTerminal=false
	
	if [ -z "$username" ]; then
	    echo "What is the user name for the Maximo server to which the admin loader script should be applied?"
	    read username
	    readFromTerminal=true
	else
	    echo "The user name set in the build.properties file for the Maximo server to which the admin loader script will apply: ${username}"
	fi
	
	userpwd=`sed '/^\#/d' $PROPERTY_FILE | grep 'adapter.connection.password'  | tail -n 1 | cut -d "=" -f2- | sed 's/^[[:space:]]*//;s/[[:space:]]*$//'`
	
	if [ -z "$userpwd" ]; then
	    echo "What is the password for the Maximo server to which the admin loader script should be applied?"
	    
	    # Disable echo.
	    stty -echo
	    
	    read userpwd
	    
	    # Enable echo.
	    stty echo
	    
	    readFromTerminal=true
	else
	    echo "The password set by the property adapter.connection.password in the build.properties file is used to connect to the Maximo server."
	fi
	
	if [ "$readFromTerminal" = true ]; then
		$ANT_HOME/bin/ant -f ./admin-config-loader.xml allApps -Dadapter.connection.user=$username -Dadapter.connection.password=$userpwd
	else
		$ANT_HOME/bin/ant -f ./admin-config-loader.xml allApps
	fi

fi

cd $CURRENT_DIR

printf 'Press Enter to continue.'
read _
