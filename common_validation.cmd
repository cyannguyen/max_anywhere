@echo off

set CANCEL_SCRIPT=false

if not exist "%JAVA_HOME%" (
  goto setJAVAHOME
)

goto ant

:setJAVAHOME
echo "The environment variable JAVA_HOME is not set in the environment. This process uses the JAVA_HOME value that is set by the JAVA_HOME property in the build.properties file."
FOR /F "tokens=2 delims==" %%i IN ('findstr /i "JAVA_HOME" build.properties') DO set JAVA_HOME=%%i
if not exist "%JAVA_HOME%\bin\java.exe" (
	goto showJAVAErrorMessage
)

:ant
rem ------------- set Ant specific settings --------------
rem 
set ANT_HOME=.\build\tools\ant
set ANT_OPTS=%ANT_OPTS% -Xmx256m -Dcom.ibm.worklight.allow-100-continue=false
rem 
rem ------------------------------------------------------

:curl
rem ------------- set Curl specific settings --------------
rem 
set batdir=%~dp0
echo %batdir%build\tools\curl\win64
setx path "%path%;%batdir%\build\tools\curl\win64
rem 
rem ------------------------------------------------------

goto end

:showJAVAErrorMessage
echo "The JAVA_HOME property is not defined properly in the build.properties file. Set the Oracle JDK JAVA_HOME environment variable in the system environment variables or in the build.properties file."
set CANCEL_SCRIPT=true 

:continue
CALL %*

:end