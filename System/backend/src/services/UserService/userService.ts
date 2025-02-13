import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { GenUser } from '../../models/genUser';
import { Persons } from '../../models/persons';
import config from '../../config/config.json';
import { authRepository } from '../../repository/authRepository/auth';

const JWT_SECRET: string = config.JWT_SECRET || 'your_jwt_secret';

interface User {
    id?: string;
    username: string;
    password: string;
}

// Create a new user (Sign up)
export const createUser = async (username: string, password: string): Promise<{ message: string }> => {
    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user in the database
        const user: User = {username, password: hashedPassword };
        await authRepository.save(user);

        return { message: 'User Registered!' };
    } catch (err) {
        throw new Error('Error creating user: ' + (err as Error).message);
    }
};

// Find a user by username (for login)
export const findUserByUsername = async (username: string): Promise<User | null> => {
    try {
        const result = await authRepository.find(username);
        return result[0][0] || null;
    } catch (err) {
        throw new Error('Error finding user: ' + (err as Error).message);
    }
};

// Generate JWT token after successful login
export const generateToken = (user: User): string => {
    return jwt.sign(
        { id: user.id, username: user.username },
        JWT_SECRET,
        { expiresIn: '1h' }
    );
};
