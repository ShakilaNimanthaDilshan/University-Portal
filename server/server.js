const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Load secret keys (like database URL) from .env file
dotenv.config();

const app = express();

// --- Middlewares ---
// This allows your frontend to send/receive JSON data
app.use(express.json());
// This allows your frontend (on a different port) to talk to this backend
app.use(cors());

// --- Test Route ---
// This is a test URL to see if our server is working
app.get('/', (req, res) => {
  res.send('University Portal API is running... OK!');
});

// --- Start The Server ---
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});