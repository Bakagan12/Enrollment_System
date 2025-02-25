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
// Function to send a new password to the user
const sendEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield emailRepo_1.EmailRepo.find(email);
        if (!user) {
            throw new Error('Email not found in the database');
        }
        const { username, gen_user_email } = user;
        const subject = 'Your New Account Details';
        const html = `<!DOCTYPE html>
                  <html lang="en">
                  <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>Account Reset</title>
                      <style>
                          body {
                              font-family: Arial, sans-serif;
                              margin: 0;
                              padding: 0;
                              display: flex;
                              justify-content: center;
                              align-items: center;
                              height: 100vh;
                              background-color: #f7f7f7;
                          }
                  
                          .container {
                              background-color: #f7f7f7;
                              border-radius: 8px;
                              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                              width: 90%;
                              max-width: 600px;
                              padding: 20px;
                              text-align: center;
                          }
                  
                          p {
                              font-size: 16px;
                              line-height: 1.6;
                              color: #333;
                          }
                  
                          strong {
                              color: #007BFF;
                          }
                  
                          .header {
                              font-size: 20px;
                              margin-bottom: 20px;
                              color: #444;
                          }
                  
                          .footer {
                              margin-top: 20px;
                              font-size: 14px;
                              color: #777;
                          }
                      </style>
                  </head>
                  <body>
                      <div class="container">
                          <p class="header">Hello <strong>${gen_user_email}</strong>,</p>
                          <p>Your account has verified. Your Username is: <strong>${username}</strong> and continue the process to change your password immediately.</p>
                          <p>Please make sure to change your password as soon as possible.</p>
                          <div class="footer">
                              <p>If you did not request this change, please contact support immediately.</p>
                          </div>
                      </div>
                  </body>
                  </html>

    `;
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: gen_user_email,
            subject: subject,
            // text: text,
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
