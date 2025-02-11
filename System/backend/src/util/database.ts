import knex from 'knex';
import config from '../config/config.json'; // Your DB config

// Initialize Knex.js with MySQL2 client
const db = knex({
    client: 'mysql2',
    connection: {
        host: config.host,
        user: config.user,
        database: config.database,
        password: config.password,
    },
    pool: { min: 2, max: 10 } // You can configure pool size
});

// Function to test the database connection using Knex
export async function testDbConnection(): Promise<void> {
    try {
        // Test a simple select query to check connection
        await db.raw('SELECT 1 + 1 AS result');
        console.log('Database connected successfully!');
    } catch (err) {
        console.error('Database connection failed:', err);
    }
}

// Export the Knex instance for use in other modules
export default db;
