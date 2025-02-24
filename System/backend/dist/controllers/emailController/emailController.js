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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTestEmail = void 0;
const mailerService_1 = require("../../services/mailService/mailerService"); // Importing sendEmail service
// Controller to send email based on user details from the database
const sendTestEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body; // Get email from request body
    try {
        // Call sendEmail with the provided email
        yield (0, mailerService_1.sendEmail)(email);
        // Send a success response if email is sent successfully
        res.status(200).send({ message: 'Email sent successfully' });
    }
    catch (error) {
        // Handle errors in case the email wasn't sent
        console.error('Error sending email:', error);
        res.status(500).json({
            message: 'Error Sending Email',
            error: (error instanceof Error) ? error.message : error,
        });
    }
});
exports.sendTestEmail = sendTestEmail;
