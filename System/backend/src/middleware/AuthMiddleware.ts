import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import config from '../config/config.json';

const JWT_SECRET: string = config.JWT_SECRET || 'your_jwt_secret';

// Define an interface for the JWT payload
interface CustomJwtPayload extends JwtPayload {
    id: string;
    username: string;
}

// Extend the Request interface to include a user property
declare global {
    namespace Express {
        interface Request {
            user?: CustomJwtPayload;
        }
    }
}

// Middleware to authenticate JWT token
export const authenticateJWT = (req: Request, res: Response, next: NextFunction): void => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1]; // Expect 'Bearer <token>'

    if (!token) {
        res.status(403).json({ message: 'Token required' });
        return;
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(403).json({ message: 'Invalid token' });
            return;
        }

        req.user = decoded as CustomJwtPayload;
        next();
    });
};
