// backend/server.js
const { app, testDbConnection } = require('./dist/index');
require('dotenv').config();

// Test the database connection when the server starts
async function initializeServer() {
    try {
        // Test DB connection
        await testDbConnection();

        const port = process.env.PORT || 3000;

        // Start the server
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Error initializing server:', error.message);
        process.exit(1);  // Exit the process with an error code
    }
}

// Initialize the server
initializeServer();
