# Backend Deployment Guide

## 🚀 Deploying Your Express.js Backend

Choose one of the platforms below based on your preference:

### Option 1: Railway (Recommended - Easiest)
Railway provides free tier and automatic deployments from GitHub.

1. **Create Railway Account**: https://railway.app
2. **Connect GitHub**: Link your repository
3. **Deploy**: Railway will auto-detect and deploy your backend
4. **Environment Variables**: Set in Railway dashboard:
   ```
   NODE_ENV=production
   PORT=8080
   FRONTEND_URL=https://your-frontend-domain.netlify.app
   MONGODB_URI=your_mongodb_atlas_connection_string
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=your_secure_password
   ```

### Option 2: Render (Free tier available)
Render offers free web services with generous limits.

1. **Create Render Account**: https://render.com
2. **New Web Service**: Connect your GitHub repo
3. **Configure Build**:
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
4. **Environment Variables**: Add in Render dashboard

### Option 3: Heroku
Classic choice with reliable performance.

1. **Install Heroku CLI**: `npm install -g heroku`
2. **Login**: `heroku login`
3. **Create App**: `heroku create your-app-name`
4. **Set Environment Variables**:
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set FRONTEND_URL=https://your-frontend-domain.netlify.app
   heroku config:set MONGODB_URI=your_mongodb_atlas_connection_string
   heroku config:set ADMIN_PASSWORD=your_secure_password
   ```
5. **Deploy**: `git push heroku main`

## 🔧 Production Environment Setup

### MongoDB Atlas Configuration
1. **IP Whitelist**: Add `0.0.0.0/0` for all IPs (or specific server IPs)
2. **Database User**: Create with read/write permissions
3. **Connection String**: Use the format:
   ```
   mongodb+srv://username:password@cluster.mongodb.net/portfolio
   ```

### Environment Variables Checklist
- [ ] `NODE_ENV=production`
- [ ] `PORT` (usually auto-assigned by platform)
- [ ] `FRONTEND_URL` (your Netlify domain)
- [ ] `MONGODB_URI` (Atlas connection string)
- [ ] `ADMIN_USERNAME=admin`
- [ ] `ADMIN_PASSWORD` (strong password)

## 🌐 Frontend Deployment (Netlify)

1. **Push to GitHub**: Ensure all changes are committed
2. **Connect to Netlify**: https://netlify.com
3. **Deploy Settings**:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **Environment Variables**: `VITE_API_URL=https://your-backend-url.com`

## ✅ Post-Deployment Checklist

- [ ] Frontend loads correctly
- [ ] Contact form submits successfully
- [ ] Admin dashboard accessible
- [ ] MongoDB connection working
- [ ] CORS configured properly
- [ ] Environment variables set correctly

## 🐛 Troubleshooting

### Common Issues:

1. **CORS Errors**: Check FRONTEND_URL in backend env vars
2. **MongoDB Connection**: Verify Atlas IP whitelist and connection string
3. **Admin Login**: Ensure ADMIN_PASSWORD is set correctly
4. **Build Failures**: Check Node.js version compatibility

### Testing Your Deployment:

```bash
# Test backend health
curl https://your-backend-url.com/api/health

# Test contact form
curl -X POST https://your-backend-url.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
```