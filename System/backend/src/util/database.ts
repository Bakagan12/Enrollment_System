
import mysql, { Pool } from 'mysql2/promise';
import config from '../config/config.json';

// Create a MySQL connection pool
const pool: Pool = mysql.createPool({
    host: config.host,
    user: config.user,
    database: config.database,
    password: config.password
});

// Function to test the database connection
export async function testDbConnection(): Promise<void> {
    try {
        const connection = await pool.getConnection();
        console.log('Database connected successfully!');
        connection.release();
    } catch (err) {
        console.error('Database connection failed:', err);
    }
}

// Export the pool for use in other modules
export default pool;
