import { allUserRepo } from "../../../repository/adminRepository/allUsersRegistration";
import { Persons } from "../../../models/persons";
import { GenUser } from "../../../models/genUser";
import { StudentGuardian } from "../../../models/studenGuardian";
import { Mother } from "../../../models/mother";
import { Father } from "../../../models/father";
import { StudentEmergencyContact } from "../../../models/studentEmergencyContact";
import { Student } from "../../../models/students";
import { StudentMedicalHistory } from "../../../models/studentMedicalHistory";

export const registerNewDepartmentalUser = async (person: Persons,  user: GenUser): Promise<{ message: string }> => {
    try {
        await allUserRepo.RegisterNewDepartmentalUser(user, person);

        return { message: 'User Registered!' };

    } catch (err) {
        throw new Error('Error creating departmental user: ' + (err as Error).message);
    }
};
export const registerNewStudent = async (
    user: GenUser,
    person: Persons,
    student: Student,
    guardian: StudentGuardian,
    contact: StudentEmergencyContact,
    mother: Mother,
    father:Father): Promise<{ message: string }> => {
    try {
        await allUserRepo.RegisterNewStudent(user, person, student, guardian, contact, mother, father);

        return { message: 'Student Registered!' };

    } catch (err) {
        throw new Error('Error creating Student and Guardian Account: ' + (err as Error).message);
    }
};


