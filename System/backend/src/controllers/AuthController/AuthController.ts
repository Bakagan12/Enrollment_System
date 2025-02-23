import bcrypt from 'bcryptjs';
import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import * as userService from '../../services/UserService/userService';

interface CustomError extends Error {
    statusCode?: number;
}

//Define routes on every role
const roleRoutes: { [key: number]: string } = {
    1: '/dashboard',           // Admin
    2: '/owner',               // Owner
    3: '/principal',           // Principal
    4: '/principal',           // Assistant Principal
    5: '/registrar',           // Registrar
    6: '/registrar',           // Assistant Registrar
    7: '/accounting',          // Accountancy
    8: '/accounting',          // Assistant Accountancy
    9: '/guidance',            // Guidance Counselor
    10: '/guidance',           // Assistant Guidance Counselor
    11: '/nurse',              // Nurse
    12: '/student',            // Student
    13: '/guardian',           // Guardian
    14: '/teacher',            // Teacher
};

//Login
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

        // Generate JWT token with user data and role
        const token = userService.generateToken(user);

        // Get the role route based on the user's role
        const redirectUrl = roleRoutes[user.user_role_id] || '/auth/login';

        // Send response with token and redirect URL
        res.json({
            message: 'Login successful',
            token,
            redirectUrl,
        });
    } catch (err) {
        const error = err as CustomError;
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
};


// Sign up
export const signup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
    }

    const { person_id, guardian_id, username, password, user_role_id, status_id, is_emailed, is_deleted, is_deleted_by }: { person_id:number; guardian_id:number, username: string; password: string, user_role_id:number, status_id:number, is_emailed:boolean, is_deleted:number, is_deleted_by:number} = req.body;

    try {
        const result = await userService.createUser(person_id, guardian_id, username, password, user_role_id, status_id, is_emailed, is_deleted, is_deleted_by);
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
// export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         res.status(422).json({ errors: errors.array() });
//         return;
//     }

//     const { username, password }: { username: string; password: string } = req.body;

//     try {
//         const user = await userService.findUserByUsername(username);

//         if (!user) {
//             res.status(401).json({ message: 'Invalid username' });
//             return;
//         }

//         const isMatch = await bcrypt.compare(password, user.password);

//         if (!isMatch) {
//             res.status(401).json({ message: 'Invalid password' });
//             return;
//         }

//         const token = userService.generateToken(user);

//         res.json({
//             message: 'Login successful',
//             token,
//             redirectUrl: '/dashboard',
//         });
//     } catch (err) {
//         const error = err as CustomError;
//         if (!error.statusCode) {
//             error.statusCode = 500;
//         }
//         next(error);
//     }
// };

// Logout
export const logout = (req: Request, res: Response): void => {
    res.json({ message: 'Logged out successfully' });
};
