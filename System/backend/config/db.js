const mysql = require('mysql2');

// MySQL database connection (use your own database credentials)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  
  password: '', 
  database: 'sta_cruz' 
});