#!/bin/bash
# Quick Start Script for Portfolio Development

echo "🚀 Nouman Khan Portfolio - Quick Start"
echo "======================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install it from https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js version: $(node --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✓ Dependencies installed"
echo ""

# Setup .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "⚙️  Creating .env.local..."
    cat > .env.local << 'EOF'
# Database
MONGODB_URI=mongodb://localhost:27017/portfolio

# API
NEXT_PUBLIC_API_URL=http://localhost:3000

# Email (Optional)
RESEND_API_KEY=your_resend_api_key_here

# Admin (Optional)
ADMIN_PASSWORD=your_secure_admin_password_here
JWT_SECRET=your_jwt_secret_key_here
EOF
    echo "✓ .env.local created - Update with your actual values!"
    echo ""
fi

# Prisma setup
echo "🗄️  Setting up Prisma..."
npx prisma generate

if [ $? -ne 0 ]; then
    echo "⚠️  Prisma generation had an issue (this is usually ok)"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Update .env.local with your MongoDB URL"
echo "2. Run: npm run dev"
echo "3. Visit: http://localhost:3000"
echo ""
echo "💡 Useful commands:"
echo "   npm run dev      - Start development server"
echo "   npm run build    - Build for production"
echo "   npm run lint     - Check code quality"
echo "   npx prisma studio - View database in UI"
echo ""
echo "🌐 Documentation:"
echo "   - README.md for overview"
echo "   - DEPLOYMENT.md for deploying to Vercel"
echo ""
