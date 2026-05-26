# Deployment Guide - Nouman Khan Portfolio

This guide walks you through deploying your portfolio to Vercel.

## Prerequisites

- A GitHub account with your portfolio repository
- A Vercel account (free)
- MongoDB database URL

## Step 1: Push to GitHub

```bash
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

## Step 2: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub repositories

## Step 3: Import Project to Vercel

1. In Vercel dashboard, click "New Project"
2. Select your portfolio repository
3. Click "Import"

## Step 4: Environment Variables

In the Vercel project settings, add these environment variables:

```
MONGODB_URI = mongodb+srv://username:password@cluster.mongodb.net/portfolio
NEXT_PUBLIC_API_URL = https://your-domain.vercel.app
```

**Where to add:**
1. Go to Project Settings → Environment Variables
2. Add each variable with the correct value
3. Save changes

## Step 5: Deploy

1. Click "Deploy"
2. Vercel will build and deploy your project
3. You'll get a live URL: `https://your-project.vercel.app`

## Step 6: Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `noumanakhan.com`)
3. Follow DNS configuration steps
4. Wait for DNS propagation (up to 24 hours)

## MongoDB Atlas Setup

### Create Database

1. Go to [mongodb.com/cloud](https://www.mongodb.com/cloud)
2. Sign up or log in
3. Create a new project
4. Create a cluster (free tier available)
5. Create database user with strong password
6. Add connection string to IP whitelist (allow all: 0.0.0.0/0)
7. Copy connection string

### Connection String Format

```
mongodb+srv://username:password@cluster.mongodb.net/portfolio
```

Replace:
- `username`: Your database user
- `password`: User password
- `cluster`: Your cluster name

## Vercel Troubleshooting

### Build Fails

**Check logs:**
1. Go to Deployments tab
2. Click on failed deployment
3. Check "Build Logs" for errors

**Common fixes:**
- Ensure all environment variables are set
- Check MongoDB connection string
- Verify all dependencies in package.json
- Clear Vercel cache: Settings → General → Clear Cache

### Environment Variables Not Working

1. Make sure variables are prefixed correctly:
   - `NEXT_PUBLIC_*` → Available in browser
   - Other variables → Server-side only
2. Redeploy after adding variables
3. Wait 5 minutes for cache clear

### MongoDB Connection Error

1. Check connection string is correct
2. Verify IP whitelist in MongoDB Atlas (add 0.0.0.0/0)
3. Try connecting locally first to test URL
4. Check username/password don't have special characters (encode if needed)

## Post-Deployment

### Verify Deployment

1. Visit your live URL
2. Check all pages load:
   - Home (`/`)
   - About (`/about`)
   - Projects (`/projects`)
   - Services (`/services`)
   - Contact (`/contact`)
3. Test contact form
4. Test dark mode toggle
5. Test responsive design (mobile)

### Analytics (Optional)

1. Enable Vercel Analytics in Project Settings
2. Go to Analytics tab to track usage

### Custom Domain Setup

After adding domain in Vercel:

**For Namecheap:**
1. Go to Domain Management
2. Click "Advanced DNS"
3. Add CNAME record pointing to Vercel

**For GoDaddy:**
1. Go to DNS Management
2. Add CNAME record pointing to Vercel

Vercel provides exact DNS records in the Domains settings.

## Monitoring

### Check Deployment Status

1. Go to "Deployments" tab
2. Click any deployment to see logs
3. Check "Function Logs" for API errors

### Monitor API Endpoint

Contact form endpoint: `/api/contact`

To test:
```bash
curl -X POST https://your-domain.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
```

## Updating Your Portfolio

### After Making Changes

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Vercel will automatically redeploy when you push to `main`.

## Performance Tips

1. Use image optimization (Next.js Image component)
2. Monitor bundle size
3. Enable compression in Vercel settings
4. Use Vercel Analytics to find slow pages
5. Cache static content appropriately

## Security

- Never commit `.env.local` to GitHub
- Use Vercel's environment variables for secrets
- Enable HTTPS (automatic with Vercel)
- Keep dependencies updated: `npm audit fix`
- Review MongoDB user permissions

## Scaling

### If You Need More

**MongoDB:**
- Upgrade from Free to Shared tier
- Upgrade from Shared to Dedicated tier
- Add more database replicas

**Vercel:**
- Upgrade to Pro plan for better performance
- Add edge functions for lower latency
- Increase build minutes if needed

---

**Happy Deploying! 🚀**

For more help:
- Vercel Docs: https://vercel.com/docs
- MongoDB Docs: https://docs.mongodb.com
- Next.js Docs: https://nextjs.org/docs
