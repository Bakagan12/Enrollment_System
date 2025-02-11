import bcrypt from 'bcryptjs';
import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import * as userService from '../../services/UserService/userService';

interface CustomError extends Error {
    statusCode?: number;
}

// Sign up
export const signup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
    }

    const { username, password }: { username: string; password: string } = req.body;

    try {
        const result = await userService.createUser(username, password);
        res.status(201).json(result);
    } catch (err) {
        const error = err as CustomError;
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
};

// Login
export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
    }

    const { username, password }: { username: string; password: string } = req.body;

    try {
        const user = await userService.findUserByUsername(username);

        if (!user) {
            res.status(401).json({ message: 'Invalid username' });
            return;
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            res.status(401).json({ message: 'Invalid password' });
            return;
        }

        const token = userService.generateToken(user);

        res.json({
            message: 'Login successful',
            token,
            redirectUrl: '/dashboard',
        });
    } catch (err) {
        const error = err as CustomError;
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
};

// Logout
export const logout = (req: Request, res: Response): void => {
    res.json({ message: 'Logged out successfully' });
};
