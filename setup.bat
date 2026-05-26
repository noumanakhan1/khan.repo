@echo off
REM Quick Start Script for Portfolio Development (Windows)

echo.
echo 🚀 Nouman Khan Portfolio - Quick Start
echo ======================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed. Please install it from https://nodejs.org/
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✓ Node.js version: %NODE_VERSION%
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Failed to install dependencies
    exit /b 1
)
echo ✓ Dependencies installed
echo.

REM Setup .env.local if it doesn't exist
if not exist .env.local (
    echo ⚙️  Creating .env.local...
    (
        echo # Database
        echo MONGODB_URI=mongodb://localhost:27017/portfolio
        echo.
        echo # API
        echo NEXT_PUBLIC_API_URL=http://localhost:3000
        echo.
        echo # Email (Optional^)
        echo RESEND_API_KEY=your_resend_api_key_here
        echo.
        echo # Admin (Optional^)
        echo ADMIN_PASSWORD=your_secure_admin_password_here
        echo JWT_SECRET=your_jwt_secret_key_here
    ) > .env.local
    echo ✓ .env.local created - Update with your actual values!
    echo.
)

REM Prisma setup
echo 🗄️  Setting up Prisma...
call npx prisma generate
if %ERRORLEVEL% NEQ 0 (
    echo ⚠️  Prisma generation had an issue (this is usually ok^)
)

echo.
echo ✅ Setup complete!
echo.
echo 📝 Next steps:
echo 1. Update .env.local with your MongoDB URL
echo 2. Run: npm run dev
echo 3. Visit: http://localhost:3000
echo.
echo 💡 Useful commands:
echo    npm run dev      - Start development server
echo    npm run build    - Build for production
echo    npm run lint     - Check code quality
echo    npx prisma studio - View database in UI
echo.
echo 🌐 Documentation:
echo    - README.md for overview
echo    - DEPLOYMENT.md for deploying to Vercel
echo.
pause
