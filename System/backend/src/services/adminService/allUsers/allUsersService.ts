import  db from "../../../config/db";
import { allUserRepo } from "../../../repository/adminRepository/allUsers";
import { Persons } from "../../../models/persons";
import { GenUser } from "../../../models/genUser";
import { StudentGuardian } from "../../../models/studenGuardian";
import { Mother } from "../../../models/mother";
import { Father } from "../../../models/father";
import { StudentEmergencyContact } from "../../../models/studentEmergencyContact";
import { Student } from "../../../models/students";
import { StudentMedicalHistory } from "../../../models/studentMedicalHistory";
import { v4 as uuidv4 } from 'uuid';

// export class allUserService{
//     static async getAllUsers():Promise<any>{
//         try{
//             const user = await allUserRepo.findAllUsers();
//             return user;
//         }catch(err){
//             console.error('Error fecthing all users:', err);
//             throw err;
//         }
//     }
// }
export const registerNewDepartmentalUser = async (person: Persons,  user: GenUser): Promise<{ message: string }> => {
    try {
        await allUserRepo.RegisterNewDepartmentalUser(user, person);

        return { message: 'User Registered!' };

    } catch (err) {
        throw new Error('Error creating departmental user: ' + (err as Error).message);
    }
};


