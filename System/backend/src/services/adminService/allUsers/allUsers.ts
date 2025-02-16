import { allUserRepo } from "../../../repository/adminRepository/allUsers";
import { Persons } from "../../../models/persons";
import { GenUser } from "../../../models/genUser";
import { StudentGuardian } from "../../../models/studenGuardian";
import { StudentEmergencyContact } from "../../../models/studentEmergencyContact";
import { Student } from "../../../models/students";
import { StudentMedicalHistory } from "../../../models/studentMedicalHistory";

export class allUserService{
    static async getAllUsers():Promise<any>{
        try{
            const user = await allUserRepo.findAllUsers();
            return user;
        }catch(err){
            console.error('Error fecthing all users:', err);
            throw err;
        }
    }

    static async RegisterNewStudent(
        user: GenUser,
        person: Persons,
        student: Student,
        guardian: StudentGuardian,
        contact: StudentEmergencyContact
      ): Promise<any> {
        try {
          const result = await allUserRepo.RegisterNewStudent(user, person, student, guardian, contact);
          return result;
        } catch (error:unknown) {
            if (error instanceof Error) {
                throw new Error(`Error creating User: ${error.message}`);
            } else {
                throw new Error('An unknown error occurred');
            }
        }
      }
}