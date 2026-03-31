const { MongoClient } = require('mongodb');

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME || 'portfolio';
const COLLECTION_NAME = 'contacts';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'change_this_password';

// Connection caching for serverless functions
let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI environment variable is not set');
  }

  const client = new MongoClient(MONGODB_URI, {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  });

  cachedClient = await client.connect();
  return cachedClient;
}

exports.handler = async (event, context) => {
  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
      },
      body: '',
    };
  }

  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  // Basic authentication check
  const authHeader = event.headers.authorization || event.headers.Authorization;
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return {
      statusCode: 401,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'WWW-Authenticate': 'Basic realm="Admin Area"',
      },
      body: JSON.stringify({ error: 'Authentication required' }),
    };
  }

  // Decode Basic Auth credentials
  const base64Credentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');

  if (password !== ADMIN_PASSWORD) {
    return {
      statusCode: 401,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
      body: JSON.stringify({ error: 'Invalid credentials' }),
    };
  }

  let client;

  try {
    // Connect to MongoDB
    client = await connectToDatabase();
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Get query parameters
    const queryParams = event.queryStringParameters || {};
    const limit = parseInt(queryParams.limit) || 50;
    const skip = parseInt(queryParams.skip) || 0;
    const status = queryParams.status; // 'read', 'unread', or undefined for all

    // Build query
    const query = {};
    if (status) {
      query.status = status;
    }

    // Get contacts with pagination
    const contacts = await collection
      .find(query)
      .sort({ timestamp: -1 }) // Most recent first
      .skip(skip)
      .limit(limit)
      .toArray();

    // Get total count
    const totalCount = await collection.countDocuments(query);

    // Remove sensitive data from response
    const sanitizedContacts = contacts.map(contact => ({
      id: contact._id,
      name: contact.name,
      email: contact.email,
      message: contact.message,
      timestamp: contact.timestamp,
      status: contact.status,
      // Exclude IP and user agent for privacy
    }));

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
      },
      body: JSON.stringify({
        success: true,
        contacts: sanitizedContacts,
        pagination: {
          total: totalCount,
          limit,
          skip,
          hasMore: skip + limit < totalCount,
        },
      }),
    };

  } catch (error) {
    console.error('Error fetching contacts:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
      body: JSON.stringify({
        error: 'Internal server error. Please try again later.',
      }),
    };
  } finally {
    // Don't close the connection in serverless functions
  }
};