@echo off
echo Building project...
npm run build

echo Copying dist files to root...
xcopy /E /Y dist\* .

echo Committing changes...
git add .
git commit -m "Deploy to GitHub Pages"

echo Pushing to GitHub...
git push origin main

echo Deployment complete!
pause