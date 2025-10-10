@echo off
echo Deploying to GitHub Pages...

REM Build the project
call npm run build

REM Create gh-pages branch
git checkout -B gh-pages

REM Remove all files except dist and .git
for /d %%i in (*) do (
    if not "%%i"=="dist" if not "%%i"==".git" rd /s /q "%%i"
)
for %%i in (*) do (
    if not "%%i"=="deploy.bat" del "%%i"
)

REM Copy dist contents to root
xcopy dist\* . /E /Y

REM Remove dist folder
rd /s /q dist

REM Add and commit
git add .
git commit -m "Deploy to GitHub Pages"

echo.
echo Deployment prepared! Now run:
echo git push origin gh-pages --force
echo.
echo Then go to GitHub Settings > Pages and select gh-pages branch