const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const GenUser = require('../../models/genUser');

exports.signup = async (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  try {
    const hashedPassword = await bcrypt.hash(password, 15);

    const GenUserDetails = {
      username: username,
      email: email,
      password: hashedPassword
    }

    const result = await GenUser.save(GenUserDetails);

    res.status(201).json({ message: 'User Registered!' });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
