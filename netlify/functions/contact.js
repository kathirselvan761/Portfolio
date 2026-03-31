const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'All fields are required' }),
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid email format' }),
      };
    }

    // Create contact data object
    const contactData = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
      ip: event.headers['x-forwarded-for'] || event.headers['x-real-ip'] || 'unknown',
    };

    // Store in JSON file (in production, you'd use a database)
    const dataDir = path.join(__dirname, '..', '..', 'data');
    const contactsFile = path.join(dataDir, 'contacts.json');

    // Ensure data directory exists
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read existing contacts or create empty array
    let contacts = [];
    if (fs.existsSync(contactsFile)) {
      try {
        const fileContent = fs.readFileSync(contactsFile, 'utf8');
        contacts = JSON.parse(fileContent);
      } catch (error) {
        console.error('Error reading contacts file:', error);
        contacts = [];
      }
    }

    // Add new contact
    contacts.push(contactData);

    // Write back to file
    fs.writeFileSync(contactsFile, JSON.stringify(contacts, null, 2));

    // In a real application, you might want to send an email notification here
    console.log('New contact form submission:', contactData);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: JSON.stringify({
        success: true,
        message: 'Thank you for your message! I\'ll get back to you soon.',
      }),
    };

  } catch (error) {
    console.error('Error processing contact form:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({
        error: 'Internal server error. Please try again later.',
      }),
    };
  }
};