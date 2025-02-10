"use strict";
// backend/validator/validation.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = exports.signupValidation = void 0;
const express_validator_1 = require("express-validator");
// Validation for sign up
exports.signupValidation = [
    (0, express_validator_1.body)('username').trim().not().isEmpty().withMessage('Username is required.'),
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
    (0, express_validator_1.body)('password')
        .trim()
        .isLength({ min: 7 })
        .withMessage('Password must be at least 7 characters long.')
];
// Validation for login
exports.loginValidation = [
    (0, express_validator_1.body)('username').trim().not().isEmpty().withMessage('Please enter a correct username'),
    (0, express_validator_1.body)('password')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Password is required')
];
