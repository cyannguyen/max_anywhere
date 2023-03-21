@echo off

setlocal

CALL common_validation.cmd %*

if NOT %CANCEL_SCRIPT% == true (
	%ANT_HOME%\bin\ant %*
)

endlocal