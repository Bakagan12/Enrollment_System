import * as selectUsers from '../../../services/adminService/select/selectUserService'
import { Request, Response, NextFunction } from 'express';

export const fetchAllStudents = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        // Call the service to fetch students
        const students = await selectUsers.getAllStudents();

        res.status(200).json(students);
    } catch (err) {
        console.error('Error fetching students:', err);
        // Send error response
        res.status(500).json({
            message: 'Error fetching students',
            error: (err instanceof Error) ? err.message : err,
        });
    }
};

export const fetchAllTeachers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        // Call the service to fetch teachers
        const teachers = await selectUsers.getAllTeachers();

        res.status(200).json(teachers);
    } catch (err) {
        console.error('Error fetching teachers:', err);
        // Send error response
        res.status(500).json({
            message: 'Error fetching teachers',
            error: (err instanceof Error) ? err.message : err,
        });
    }
};