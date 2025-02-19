import  db from "../../../config/db";
import { v4 as uuidv4 } from 'uuid';

export class selectUsers{
    static async getAllStudents(){
        return db('students').leftJoin('persons', 'students.person_id', 'persons.id')
                            .leftJoin('gen_users', 'gen_users.person_id', 'persons.id')
                            .leftJoin('suffix', 'persons.suffix_id', 'suffix.id')
                            .select(
                                'gen_users.username',
                                'gen_users.gen_user_email',
                                'gen_users.password',
                                'persons.first_name',
                                'persons.middle_name',
                                'persons.last_name',
                                'suffix.suffix_name'
                            ).where('gen_users.user_role_id', '=', 12);
    }
    static async getAllTeachers(){
        return db('gen_users').leftJoin('persons', 'gen_users.person_id', 'persons.id')
                            .leftJoin('suffix', 'persons.suffix_id', 'suffix.id')
                            .select(
                                'gen_users.username',
                                'gen_users.gen_user_email',
                                'gen_users.password',
                                'persons.first_name',
                                'persons.middle_name',
                                'persons.last_name',
                                'suffix.suffix_name'
                            ).where('gen_users.user_role_id', '=', 13);
    }
}