import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../../config/config.json';
import { authRepository } from '../../repository/authRepository/auth';

const JWT_SECRET: string = config.JWT_SECRET || 'your_jwt_secret';

interface User {
    id?: string;
    person_id:number;
    username: string;
    password: string;
    user_role_id: number;
    gen_user_email: string;
    status_id: number;
}

// Create a new user (Sign up)
export const createUser = async (person_id: number,username: string, password: string, user_role_id:number, status_id:number = 1 ): Promise<{ message: string }> => {
    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user in the database
        const user: User = {
            person_id, username, password: hashedPassword, user_role_id, status_id,
            gen_user_email: ''
        };
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

        // Check if the result is empty or undefined
        if (!result || result.length === 0) {
            return null;  // No user found
        }

        // Return the first user in the result (assuming the query returns an array of users)
        return result;
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
