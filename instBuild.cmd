@echo off
set JAVA_HOME=C:\Java\jdk1.8.0_102
IF true == true ( build.cmd %* ) ELSE ( echo "build skipped" )
