@echo off

set CURRENTDIR=%CD%
set MXANYWHEREDIR=%~dp0

chdir /d %MXANYWHEREDIR%

CALL build.cmd %*

chdir /d %CURRENTDIR% 

PAUSE