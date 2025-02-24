// backend/src/routes/emailRoute/emailRoute.ts
import express from 'express';
import { sendTestEmail } from '../../controllers/emailController/emailController';

const router = express.Router();

// POST route to send email
router.post('/send', sendTestEmail);

export default router;
