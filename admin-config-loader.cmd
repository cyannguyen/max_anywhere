@echo off

if not defined in_subprocess (cmd /k set in_subprocess=y ^& %0 %*) & exit )

set BASEDIR=%~dp0
set CURRENTDIR=%CD%

chdir /d %BASEDIR%

setlocal

CALL common_validation.cmd %*

if %CANCEL_SCRIPT% == true (
	goto end
)

FOR /F "tokens=2 delims==" %%i IN ('findstr /i "adapter.connection.user" %BASEDIR%/build.properties') DO set user_name=%%i

if /I "%user_name%" == "" ( 
	set /p user_name= "What is the user name for the Maximo server to which the admin loader script should be applied?"

) ELSE ( 
	echo "The user name set in the build.properties file for the Maximo server to which the admin loader script will apply: %user_name%" 
)


FOR /F "tokens=2 delims==" %%u IN ('findstr /i "adapter.connection.password" %BASEDIR%/build.properties') DO set user_pwd=%%u

if /I "%user_pwd%" == "" ( 
	echo "What is the password for the Maximo server to which the admin loader script should be applied?"

	GOTO :passwordRequest
) ELSE ( 
	echo "The password set by the property adapter.connection.password in the build.properties file is used to connect to the Maximo server."
)

GOTO :Loader

:passwordRequest
set "psCommand=powershell -Command "$pword = read-host 'Enter the Password' -AsSecureString ; ^
    $BSTR=[System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($pword); ^
        [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($BSTR)""
for /f "usebackq delims=" %%p in (`%psCommand%`) do set user_pwd=%%p

GOTO :Loader

:Loader
%ANT_HOME%\bin\ant -f %BASEDIR%/admin-config-loader.xml allApps -Dadapter.connection.user=%user_name% -Dadapter.connection.password=%user_pwd%

:end

endlocal

chdir /d %CURRENTDIR%

PAUSE