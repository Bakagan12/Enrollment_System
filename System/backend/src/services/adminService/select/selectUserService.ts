import { selectUsers } from "../../../repository/adminRepository/select/selectUserRepo";

export const getAllStudents = async (): Promise<any[]> => {
    try {
        const students = await selectUsers.getAllStudents();
        return students;
    } catch (err) {
        throw new Error('Error fetching students: ' + (err as Error).message);
    }
};

export const getAllTeachers = async (): Promise<any[]> => {
    try {
        const teachers = await selectUsers.getAllTeachers();
        return teachers;
    } catch (err) {
        throw new Error('Error fetching teachers: ' + (err as Error).message);
    }
};