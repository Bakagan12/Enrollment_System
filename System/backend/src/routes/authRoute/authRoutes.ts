import { Router } from 'express';
import { signupValidation, loginValidation } from '../../validator/userValidation';
import * as authController from '../../controllers/AuthController/AuthController';

const router: Router = Router();

// Sign up route
router.post('/signup', signupValidation, authController.signup);

// Login route
router.post('/login', loginValidation, authController.login);

// Logout route
router.post('/logout', authController.logout);

export default router;

