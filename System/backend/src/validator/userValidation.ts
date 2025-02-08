// backend/validator/validation.ts

import { body } from 'express-validator';
import * as GenUser from '../models/genUser';

// Validation for sign up
export const signupValidation = [
    body('username').trim().not().isEmpty().withMessage('Username is required.'),
    // Uncomment and adjust if needed for email validation
    // body('email')
    //     .isEmail()
    //     .withMessage('Please enter a valid email.')
    //     .custom(async (email) => {
    //         const user = await GenUser.find(email);
    //         if (user[0].length > 0) {
    //             return Promise.reject('Email address already exists!');
    //         }
    //     })
    //     .normalizeEmail(),
    body('password')
        .trim()
        .isLength({ min: 7 })
        .withMessage('Password must be at least 7 characters long.')
];

// Validation for login
export const loginValidation = [
    body('username').trim().not().isEmpty().withMessage('Please enter a correct username'),
    body('password')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Password is required')
];
