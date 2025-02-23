import { Request, Response, NextFunction, request } from 'express';
import { validationResult } from 'express-validator';
import * as termService from '../../../services/departmental_userService/principal/termService';
import { Term } from '../../../models/term';

export const createTermByUser = async (req:Request, res:Response, next:NextFunction): Promise<void> =>{
    try{
        const term:Term = req.body;

        const result = await termService.createTerm(term);

        res.status(201).json(result);
    }catch (err){
        console.error('Error creating Term:', err);
        res.status(500).json({
            message: 'Error creating Term!',
            error: (err instanceof Error) ? err.message : err,
        });

    }
}

export const updatedTermByUser = async (req:Request, res:Response, next:NextFunction): Promise<void> => {
    try{
        const term:Term = req.body;
        const result = await termService.updatedTermByUser(term);
        res.status(201).json(result);
    }catch (err){
        console.error('Error Updating Term; ', err);
        res.status(500).json({
            message: 'Error Updating Term',
            error: (err instanceof Error) ? err.message:err,
        });

    }
}
export const deletedTermByUser = async (req:Request, res: Response, next: NextFunction): Promise <void> => {
    try{
        const term:Term = req.body;

        const result = await termService.deleteTermbyUser(term);

        res.status(201).json(result);

    }catch (err){
        console.error('Error Deleting Term; ', err);
        res.status(500).json({
            message: 'Error Deleting Term',
            error: (err instanceof Error) ? err.message:err,
        });
    }
}

export const selectAllTermByUser = async (req:Request, res:Response, next:NextFunction): Promise<void> => {
    try{
        const terms = await termService.selectAllTerm();
        res.status(201).json(terms);
    }catch(err){
        res.status(500).json({ message:'Error Fetching Terms', error: (err instanceof Error) ? err.message:err });
    }
}

