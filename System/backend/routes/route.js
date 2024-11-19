// backend/routes/route.js

const express = require('express');
const { authenticateUser } = require('../controllers/Authcontroller/AuthController'); // Import the authenticateUser function

const router = express.Router();

// Login API route
router.post('/auth/login', (req, res) => {
  const { username, password } = req.body;

  // Call the authenticateUser function
  authenticateUser(username, password, (err, result) => {
    if (err) {
      return res.status(500).send('Internal server error');
    }

    if (result.message === 'Invalid credentials') {
      return res.status(401).json(result);
    }

    return res.json(result); // { message: 'Login successful', token }
  });
});

module.exports = router;
