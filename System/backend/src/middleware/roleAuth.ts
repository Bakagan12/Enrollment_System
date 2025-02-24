import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config.json';

const JWT_SECRET: string = config.JWT_SECRET || 'your_jwt_secret';

interface DecodedToken {
    id: number;
    role: number;
}

export const roleAuth = (allowedRoles: number[]) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const authHeader = req.headers.authorization;

        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            res.status(403).json({ message: 'Token required' });
            return;
        }

        try {
            const decoded = jwt.verify(token, JWT_SECRET) as unknown as DecodedToken;

            if (!decoded || !allowedRoles.includes(decoded.role)) {
                res.status(403).json({ message: 'Access denied' });
                return;
            }
            // Added role-based check here
            if (allowedRoles.includes(decoded.role)) {
                console.log('User has required role');
            }
            next();
        } catch (err) {
            res.status(403).json({ message: 'Invalid token' });
            return;
        }
    };
};
