import { registerNewDepartmentalUser } from "../../../services/adminService/allUsers/allUsersService";
import { Persons } from "../../../models/persons";
import { GenUser } from "../../../models/genUser";
import { StudentGuardian } from "../../../models/studenGuardian";
import { Mother } from "../../../models/mother";
import { Father } from "../../../models/father";
import { StudentEmergencyContact } from "../../../models/studentEmergencyContact";
import { Student } from "../../../models/students";
import { StudentMedicalHistory } from "../../../models/studentMedicalHistory";
import { Request, Response, NextFunction } from 'express';


// export class allUserController{
//     static async allUsersController(req: any, res: any):Promise<void>{
//         try {
//             const users = await allUserService.getAllUsers();
//             res.status(200).json(users);
//         } catch (error) {
//             res.status(500).json({ message: 'Error fetching users' });
//         }
//     }

// }
export const registerUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const person: Persons = req.body.person;
        const user: GenUser = req.body.user;

        // Call the service to register the user
        const result = await registerNewDepartmentalUser(person, user);

        res.status(201).json(result);
    } catch (err) {
        console.error('Error registering user:', err);
        // Send error response
        res.status(500).json({
            message: 'Error registering departmental user',
            error: (err instanceof Error) ? err.message : err,
        });
    }
}