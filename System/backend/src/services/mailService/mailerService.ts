import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { EmailRepo } from '../../repository/emailRepository/emailRepo'; // Import EmailRepo

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send a new password to the user
export const sendEmail = async (email: string): Promise<void> => {
  try {
    // Query the database to get user details by email
    const user = await EmailRepo.find(email);

    if (!user) {
      throw new Error('Email not found in the database');
    }

    const { username, gen_user_email } = user;

    // Generate a new random password (e.g., 12 characters)
    const newPassword = crypto.randomBytes(8).toString('hex'); // 16-character password

    // Hash the new password with bcrypt
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password in the database with the new hashed password
    // Assuming you have a method to update the password in the repository
    await EmailRepo.updatePassword(gen_user_email, hashedPassword);

    // Construct the email text and HTML body
    const subject = 'Your New Account Details';
    const text = `Hello ${username},\n\nYour account has been reset. Your new password is: ${newPassword}. Please use this to log in.`;

    const html = `
      <p>Hello <strong>${username}</strong>,</p>
      <p>Your account has been reset. Your new password is: <strong>${newPassword}</strong>. Please use this to log in.</p>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: gen_user_email,
      subject: subject,
      text: text,
      html: html,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);

  } catch (error) {
    console.error('Error sending email:', error);
  }
};
