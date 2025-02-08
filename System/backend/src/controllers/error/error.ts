
import { Request, Response, NextFunction } from 'express';

interface CustomError extends Error {
    statusCode?: number;
    data?: any;
}

// Handle 404 errors
export const get404 = (req: Request, res: Response, next: NextFunction): void => {
    const error: CustomError = new Error('Not found.');
    error.statusCode = 404;
    next(error);
};

// Handle 500 errors
export const get500 = (error: CustomError, req: Request, res: Response, next: NextFunction): void => {
    const data = error.data;
    res.status(error.statusCode || 500);
    res.json({
        error: {
            message: error.message,
            data: data,
        },
    });
};
