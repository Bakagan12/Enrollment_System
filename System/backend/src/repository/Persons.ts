
import { Persons } from '../models/persons';
import db from '../util/database';

export class PersonRepository {
    // static async find(username: string): Promise<any> {
    //     return db.execute('SELECT * FROM gen_users WHERE username = ?', [username]);
    // }

    static async save(persons: Persons): Promise<any> {
        return db.execute(
            'INSERT INTO persons (first_name, last_name, middle_name, suffix_id, date_of_birth, gender, address, email, contact_no, student_guardian_id, student_emergency_contact_name, student_emergency_contact_no, student_emergency_contact_address, student_emergency_contact_email, student_medical_history_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
                persons.first_name,
                persons.last_name,
                persons.middle_name,
                persons.suffix_id,
                persons.date_of_birth,
                persons.gender,
                persons.address,
                persons.email,
                persons.contact_no,
                persons.student_guardian_id,
                persons.student_emergency_contact_name,
                persons.student_emergency_contact_no,
                persons.student_emergency_contact_address,
                persons.student_emergency_contact_email,
                persons.student_medical_history_id
            ]
        );
    }
    static async findById(id:number):Promise<any>{
        const [rows] = await db.execute(
            'select * from persons Where id = ?',[id]
        );
        return rows;
    }

    static async updateById(id: number, updatedData: Partial<Persons>): Promise<any> {
        const setClause = Object.keys(updatedData)
            .map(key => `${key} = ?`)
            .join(', ');

        const values = Object.values(updatedData);

        const [result] = await db.execute(
            `UPDATE persons SET ${setClause} WHERE id = ?`,
            [...values, id]
        );

        return result;
    }
}
