import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../../config/config.json';
import { authRepository } from '../../repository/authRepository/auth';

const JWT_SECRET: string = config.JWT_SECRET || 'your_jwt_secret';

interface User {
    id?: number;
    person_id:number;
    guardian_id:number;
    username: string;
    password: string;
    user_role_id: number;
    gen_user_email: string;
    status_id: number;
    is_emailed:boolean;
    is_deleted:number;
    is_deleted_by:number;
}

// Create a new user (register)
export const createUser = async (person_id: number, guardian_id:number,username: string, password: string, user_role_id:number, status_id:number = 1, is_emaild: boolean, is_deleted:number, is_deleted_by:number ): Promise<{ message: string }> => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user in the database
        const user: User = {
            person_id,
            guardian_id,
            username,
            password: hashedPassword,
            user_role_id, status_id,
            gen_user_email: '',
            is_emailed: false,
            is_deleted: 0,
            is_deleted_by: 0
        };
        await authRepository.save(user);

        return { message: 'User Registered!' };
    } catch (err) {
        throw new Error('Error creating user: ' + (err as Error).message);
    }
};

export const findUserByUsername = async (username: string): Promise<User | null> => {
    try {
        const result = await authRepository.find(username);

        if (!result || result.length === 0) {
            return null;
        }

        return result;
    } catch (err) {
        throw new Error('Error finding user: ' + (err as Error).message);
    }
};


export const generateToken = (user: User): string => {
    return jwt.sign(
        { id: user.id, username: user.username },
        JWT_SECRET,
        { expiresIn: '1h' }
    );
};
