import { db } from './backend/config/db.js';  // Add the .js extension
const express = require('express');
const app = express();

// Test connection to the database using the pool
db.getConnection((err, connection) => {
  if (err) {
    console.log('Error Connecting to Database:', err.stack);
    return;
  }
  console.log('YEAH You are connected to Me, Do not leave me ah');
  
  // Always release the connection back to the pool
  connection.release();
});

// Example route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
