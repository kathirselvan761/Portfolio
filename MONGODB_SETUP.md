# MongoDB Setup Guide for Portfolio Contact Form

## 🚀 Quick Setup with MongoDB Atlas (Free)

### Step 1: Create MongoDB Atlas Account

1. Go to [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Click "Try Free" → Sign up with Google/GitHub or email
3. Choose the **FREE** tier (M0 Sandbox)

### Step 2: Create Database & Collection

1. Click "Create" → "M0 Cluster"
2. Choose any provider (AWS/Azure/Google) and region
3. Cluster name: `PortfolioCluster` (or any name)
4. Wait for cluster creation (~5-10 minutes)

### Step 3: Create Database User

1. Go to "Database Access" (left sidebar)
2. Click "Add New Database User"
3. Authentication Method: "Password"
4. Username: `portfolio_user`
5. Password: Choose a strong password (save it!)
6. Built-in Role: Select "Read and write to any database"

### Step 4: Get Connection String

1. Go to "Clusters" → Click "Connect"
2. Choose "Connect your application"
3. Driver: "Node.js"
4. Version: Latest version
5. Copy the connection string

### Step 5: Update Netlify Environment Variables

1. Go to your Netlify dashboard
2. Select your site → "Site settings" → "Environment variables"
3. Add these variables:

```
MONGODB_URI = mongodb+srv://portfolio_user:YOUR_PASSWORD@portfolio.XXXXX.mongodb.net/?retryWrites=true&w=majority
DB_NAME = portfolio
```

**Replace:**

- `YOUR_PASSWORD` with your actual password
- `portfolio.XXXXX.mongodb.net` with your cluster URL

### Step 6: Test the Connection

After deployment, test your contact form. Check MongoDB Atlas dashboard → Collections to see submitted data.

## 🔧 Database Schema

The contact form creates documents with this structure:

```json
{
  "_id": ObjectId("..."),
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in your work...",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "ip": "192.168.1.1",
  "userAgent": "Mozilla/5.0...",
  "status": "unread"
}
```

## 🛡️ Security Notes

- ✅ Database user has limited permissions (read/write only)
- ✅ IP addresses are logged for spam prevention
- ✅ Input validation prevents malicious data
- ✅ Connection string is encrypted in Netlify

## 📊 Monitoring

- View submissions in MongoDB Atlas → Collections
- Monitor function logs in Netlify dashboard
- Set up alerts for new submissions if needed

## 💰 Cost

- **FREE**: Up to 512MB storage
- **Upgrade**: $9/month for 5GB (if needed)

---

**Need help?** Check the MongoDB Atlas documentation or contact support!
