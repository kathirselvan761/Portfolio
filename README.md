# Portfolio with Express.js Backend

A modern, responsive portfolio website with a full-stack contact form system using Express.js, Node.js, and MongoDB.

## 🚀 Features

### Frontend
- **React + Vite**: Modern, fast development experience
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Framer Motion**: Smooth animations and transitions
- **Contact Form**: Real-time validation and submission feedback
- **Modern UI**: Glassmorphism design with dark theme

### Backend
- **Express.js**: Robust REST API server
- **MongoDB**: NoSQL database for contact storage
- **Security**: Rate limiting, CORS, input validation, helmet
- **Admin Dashboard**: Web interface for managing submissions
- **Authentication**: Basic auth for admin access
- **Statistics**: Real-time metrics and analytics

## 📋 Prerequisites

- **Node.js** (v18 or higher)
- **MongoDB Atlas** account (free tier available)
- **Git** for version control

## 🛠️ Quick Start

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd portfolio
npm install
```

### 2. Set up Backend

```bash
cd backend
npm install
cp .env.example .env
```

Edit `backend/.env` with your MongoDB connection:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
ADMIN_PASSWORD=your_secure_password
```

### 3. Set up MongoDB Atlas

1. Create account at [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create free cluster
3. Create database user
4. Get connection string
5. Update `.env` file

### 4. Run Both Services

**Windows:**
```bash
start.bat
```

**Manual (any OS):**
```bash
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend
npm run dev
```

### 5. Access Your Portfolio

- **Portfolio**: http://localhost:5173
- **Admin Dashboard**: http://localhost:5173/admin.html?user=admin&pass=YOUR_PASSWORD
- **Backend API**: http://localhost:5000/api/health

## 📁 Project Structure

```
portfolio/
├── backend/                 # Express.js API server
│   ├── server.js           # Main server file
│   ├── package.json        # Backend dependencies
│   ├── .env.example        # Environment template
│   └── README.md           # Backend documentation
├── src/                    # React frontend
│   ├── components/         # React components
│   ├── App.jsx            # Main app component
│   └── main.jsx           # App entry point
├── admin.html              # Admin dashboard
├── package.json           # Frontend dependencies
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🔧 Configuration

### Environment Variables

#### Backend (.env)
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/portfolio
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password
```

#### Frontend
The frontend automatically connects to `http://localhost:5000` for API calls.

## 📊 API Endpoints

### Public Endpoints
- `GET /api/health` - Health check
- `POST /api/contact` - Submit contact form

### Admin Endpoints (Basic Auth Required)
- `GET /api/admin/contacts` - List contacts with pagination
- `PATCH /api/admin/contacts/:id/status` - Update contact status
- `DELETE /api/admin/contacts/:id` - Delete contact
- `GET /api/admin/stats` - Get statistics

## 🎨 Customization

### Styling
- **Global styles**: `src/index.css`
- **Component styles**: `src/components/*.css`
- **Admin styles**: Inline in `admin.html`

### Content
- **Personal info**: Update components in `src/components/`
- **Contact details**: Modify `src/components/Contact.jsx`
- **Portfolio items**: Edit `src/components/Projects.jsx`

## 🚀 Deployment

### Quick Deploy (Windows)
```bash
deploy.bat
```

### Frontend Deployment (Netlify)
1. **Push to GitHub**: Commit all changes
2. **Connect to Netlify**: https://netlify.com
3. **Deploy Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Environment variable: `VITE_API_URL=https://your-backend-url.com`

### Backend Deployment (Railway/Render)
1. **Choose Platform**:
   - **Railway** (Easiest): https://railway.app
   - **Render** (Free tier): https://render.com
2. **Connect Repository**: Link your GitHub repo
3. **Set Environment Variables**:
   ```
   NODE_ENV=production
   FRONTEND_URL=https://your-netlify-site.netlify.app
   MONGODB_URI=your_mongodb_atlas_connection_string
   ADMIN_PASSWORD=your_secure_password
   ```

### Environment Setup
1. **Copy environment template**: `cp .env.example .env`
2. **Update with your values**:
   ```env
   VITE_API_URL=https://your-backend-domain.com
   ```
3. **For backend**: Update `backend/.env` with production MongoDB URI

## 🛡️ Security

- **Rate Limiting**: 100 requests per 15 minutes
- **Input Validation**: Comprehensive validation
- **CORS Protection**: Configured for your domain
- **Helmet**: Security headers
- **Basic Auth**: Admin endpoint protection
- **Data Sanitization**: XSS protection

## 📈 Monitoring

- **Health Check**: `GET /api/health`
- **Logs**: Server logs all activities
- **Statistics**: Admin dashboard shows metrics
- **Error Handling**: Comprehensive error responses

## 🐛 Troubleshooting

### Common Issues

1. **Backend won't start**
   - Check MongoDB connection string
   - Verify environment variables
   - Check Node.js version (`node --version`)

2. **Contact form not working**
   - Ensure backend is running on port 5000
   - Check browser console for errors
   - Verify CORS settings

3. **Admin login fails**
   - Check ADMIN_PASSWORD in .env
   - Verify Basic Auth format

4. **MongoDB connection fails**
   - Check IP whitelist in MongoDB Atlas
   - Verify connection string format
   - Test connection with MongoDB Compass

### Debug Commands

```bash
# Check backend health
curl http://localhost:5000/api/health

# Test contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello"}'

# Check MongoDB connection
cd backend && node -e "require('./server.js').testConnection()"
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Make changes and test thoroughly
4. Commit: `git commit -m 'Add feature'`
5. Push: `git push origin feature-name`
6. Create Pull Request

## 📝 License

MIT License - feel free to use this project for your portfolio!

## 📞 Support

- **Issues**: GitHub Issues
- **Discussions**: GitHub Discussions
- **Email**: Your contact form (once set up!)

---

**Happy coding! 🎉**

Built with ❤️ using React, Express.js, and MongoDB
