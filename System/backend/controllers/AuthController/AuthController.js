const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2');

// MySQL database connection (use your own database credentials)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  
  password: '', 
  database: 'sta_cruz' 
});

// Function to authenticate user
const authenticateUser = (username, password, callback) => {
  const query = 'SELECT * FROM users WHERE username = ?';
  
  db.query(query, [username], (err, results) => {
    if (err) {
      console.error('Database query error: ', err);
      return callback(err, null);
    }

    if (results.length === 0) {
      return callback(null, { message: 'Invalid credentials' });
    }

    const user = results[0];

    // Compare the password with the stored hashed password
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error('Error comparing password: ', err);
        return callback(err, null);
      }

      if (!isMatch) {
        return callback(null, { message: 'Invalid credentials' });
      }

      // Generate a JWT token if authentication is successful
      const token = jwt.sign(
        { userId: user.id, username: user.username },
        'your_jwt_secret',  // use a strong secret key
        { expiresIn: '1h' }
      );

      return callback(null, { message: 'Login successful', token });
    });
  });
};

module.exports = { authenticateUser };
