const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth/authRoutes');
const errorController = require('./controllers/error/error');

// Import the testDbConnection function from the database module
const { testDbConnection } = require('./util/database'); // Import testDbConnection
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

// CORS middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Test the database connection when the server starts
async function initializeServer() {
    await testDbConnection(); // Test the DB connection

    const port = process.env.PORT || 3000;

    // Routes
    app.use('/auth', authRoutes);

    // Error handling middleware
    app.use(errorController.get404);
    app.use(errorController.get500);

    // Basic route
    app.get('/', (req, res) => {
        res.send('Hello World');
    });

    // Start the server
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
}

// Initialize the server and test the database connection
initializeServer();
