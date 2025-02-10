import db from '../util/database';

export class Persons {
    first_name: string;
    last_name: string;
    middle_name: string;
    suffix_id: number;
    date_of_birth: Date;
    gender: string;
    address: number;
    email: string;
    contact_no: string;
    student_guardian_id: number;
    student_emergency_contact_name: string;
    student_emergency_contact_no: string;
    student_emergency_contact_address: string;
    student_emergency_contact_email: string;
    student_medical_history_id: number;

    constructor(
        first_name: string,
        last_name: string,
        middle_name: string,
        suffix_id: number,
        date_of_birth: Date,
        gender: string,
        address: number,
        email: string,
        contact_no: string,
        student_guardian_id: number,
        student_emergency_contact_name: string,
        student_emergency_contact_no: string,
        student_emergency_contact_address: string,
        student_emergency_contact_email: string,
        student_medical_history_id: number
    ) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.middle_name = middle_name;
        this.suffix_id = suffix_id;
        this.date_of_birth = date_of_birth;
        this.gender = gender;
        this.address = address;
        this.email = email;
        this.contact_no = contact_no;
        this.student_guardian_id = student_guardian_id;
        this.student_emergency_contact_name = student_emergency_contact_name;
        this.student_emergency_contact_no = student_emergency_contact_no;
        this.student_emergency_contact_address = student_emergency_contact_address;
        this.student_emergency_contact_email = student_emergency_contact_email;
        this.student_medical_history_id = student_medical_history_id;
    }

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
