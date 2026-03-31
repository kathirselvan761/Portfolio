@echo off
echo 🚀 Portfolio Deployment Script
echo ================================

echo.
echo 📋 Prerequisites Check:
echo - MongoDB Atlas account and connection string
echo - GitHub repository pushed
echo - Netlify/Render/Railway account
echo.

set /p DEPLOY_FRONTEND="Deploy frontend to Netlify? (y/n): "
set /p DEPLOY_BACKEND="Deploy backend to Railway/Render? (y/n): "

if "%DEPLOY_FRONTEND%"=="y" (
    echo.
    echo 🌐 Frontend Deployment Steps:
    echo 1. Go to https://netlify.com
    echo 2. Connect your GitHub repository
    echo 3. Set build settings:
    echo    - Build command: npm run build
    echo    - Publish directory: dist
    echo 4. Add environment variable:
    echo    - VITE_API_URL: https://your-backend-url.com
    echo 5. Deploy!
    echo.
    echo 📝 Don't forget to update VITE_API_URL after backend deployment
)

if "%DEPLOY_BACKEND%"=="y" (
    echo.
    echo ⚙️ Backend Deployment Steps:
    echo.
    echo Option 1 - Railway (Recommended):
    echo 1. Go to https://railway.app
    echo 2. Connect your GitHub repository
    echo 3. Railway will auto-detect and deploy
    echo 4. Set environment variables in Railway dashboard
    echo.
    echo Option 2 - Render:
    echo 1. Go to https://render.com
    echo 2. Create new Web Service from Git
    echo 3. Configure:
    echo    - Runtime: Node
    echo    - Build: npm install
    echo    - Start: npm start
    echo 4. Add environment variables
    echo.
    echo 🔧 Required Environment Variables:
    echo - NODE_ENV=production
    echo - FRONTEND_URL=https://your-netlify-site.netlify.app
    echo - MONGODB_URI=your_mongodb_atlas_string
    echo - ADMIN_PASSWORD=your_secure_password
)

echo.
echo ✅ Deployment Checklist:
echo - [ ] MongoDB Atlas configured
echo - [ ] Frontend deployed to Netlify
echo - [ ] Backend deployed to Railway/Render
echo - [ ] Environment variables set
echo - [ ] VITE_API_URL updated in Netlify
echo - [ ] Test contact form submission
echo - [ ] Test admin dashboard access
echo.

echo 🎉 Ready to deploy! Follow the steps above.
pause