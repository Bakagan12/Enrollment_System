"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
// backend/src/services/mailerService.ts
const nodemailer_1 = __importDefault(require("nodemailer"));
const emailRepo_1 = require("../../repository/emailRepository/emailRepo"); // Import EmailRepo
const transporter = nodemailer_1.default.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
// Function to send email
const sendEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Query the database to get user details by email
        const user = yield emailRepo_1.EmailRepo.find(email);
        if (!user) {
            throw new Error('Email not found in the database');
        }
        const { username, gen_user_email, password } = user;
        // Construct the email text and HTML body
        const subject = 'Your Account Details';
        const text = `Hello ${gen_user_email}, your username is ${username} and your password is ${password}.`;
        const html = `<p>Hello ${gen_user_email}, your username is <strong>${username}</strong> and your password is <strong>${password}</strong>.</p>`;
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: gen_user_email,
            subject: subject,
            text: text,
            html: html,
        };
        // Send the email
        const info = yield transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
});
exports.sendEmail = sendEmail;
