const express = require('express');

const {body} = require('express-validator');

const router = express.Router();

const GenUser = require('../../models/genUser');

const authController = require('../../controllers/AuthController/AuthController');

router.post('/signup', [
    body('username').trim().not().isEmpty(),
    body('email').isEmail().withMessage('Please enter a valid email.').custom(async (email) => {
        const user = await GenUser.find(email);
        if(user[0].length > 0){
            return Promise.reject('Email address already exist!')
        }
    }).normalizeEmail(),
    body('password').trim().isLength({min: 7}),
], authController.signup);


module.exports = router;
