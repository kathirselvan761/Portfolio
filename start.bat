@echo off
echo Starting Portfolio with Backend...

REM Start backend server in background
cd backend
start "Portfolio Backend" cmd /c "npm run dev"

REM Wait a moment for backend to start
timeout /t 3 /nobreak > nul

REM Start frontend
cd ..
npm run dev

pause