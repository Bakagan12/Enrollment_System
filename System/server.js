const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { authenticateUser } = require('./backend/controllers/AuthController/AuthController'); // Import authenticateUser

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Parse incoming JSON requests
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:4200',
  methods: 'GET,POST',
  credentials: true
}));


// Login API route
app.post('/auth/login', (req, res) => {
  const { username, password } = req.body;

  // Call the authenticateUser function from authLogin.js
  authenticateUser(username, password, (err, result) => {
    if (err) {
      return res.status(500).send('Internal server error');
    }

    if (result.message === 'Invalid credentials') {
      return res.status(401).json(result);
    }

    // Send back the success message and token if authentication succeeds
    return res.json(result);  // { message: 'Login successful', token }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
