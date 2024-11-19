// server.js

const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
// const routes = require('./backend/routes/route');
const dotenv = require('dotenv');
const db = require('./backend/config/db');
// const authRoutes = require('./backend/routes/auth');

dotenv.config();

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Parse incoming JSON requests
app.use(bodyParser.json());

// Enable CORS for Angular frontend (running on localhost:4200)
app.use(cors({
  origin: 'http://localhost:4200',
  methods: 'GET,POST',
  credentials: true
}));

// Define the path to the Angular build folder
const angularDistPath = path.join(__dirname, 'enrollment', 'dist', 'enrollment', 'browser');

// Serve static files from the Angular dist folder
app.use(express.static(angularDistPath));

// Use the routes from the routes file
// app.use(routes);

// Serve the Angular index.html for all routes (handle SPA routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(angularDistPath, 'index.csr.html')); // Serve CSR index.html for all routes
});

const checkDbConnection = async () => {
  try {
    await db.query('SELECT 1'); // Simple query to check DB connection
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1); // Exit the process if DB connection fails
  }
};

// Check the database connection when the server starts
checkDbConnection();

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});