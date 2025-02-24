// backend/src/controllers/emailController.ts
import { Request, Response } from 'express';
import { sendEmail } from '../../services/mailService/mailerService';  // Importing sendEmail service

// Controller to send email based on user details from the database
export const sendTestEmail = async (req: Request, res: Response) => {
  const { email } = req.body;  // Get email from request body

  try {
    // Call sendEmail with the provided email
    await sendEmail(email);

    // Send a success response if email is sent successfully
    res.status(200).send({ message: 'Email sent successfully' });

  } catch (error) {
    // Handle errors in case the email wasn't sent
    console.error('Error sending email:', error);
    res.status(500).json({
        message: 'Error Sending Email',
        error: (error instanceof Error) ? error.message:error,
    });
  }
};
