import { Persons } from '../../models/persons';
import db from '../../util/database';

export class PersonDataRepository {

    // Save a person using Knex
    static async save(persons: Persons): Promise<any> {
        return db('persons').insert({
            first_name: persons.first_name,
            last_name: persons.last_name,
            middle_name: persons.middle_name,
            suffix_id: persons.suffix_id,
            date_of_birth: persons.date_of_birth,
            gender: persons.gender,
            address: persons.address,
            email: persons.email,
            contact_no: persons.contact_number,
            student_guardian_id: persons.student_guardian_id,
            student_emergency_contact_name: persons.student_emergency_contact_name,
            student_emergency_contact_no: persons.student_emergency_contact_no,
            student_emergency_contact_address: persons.student_emergency_contact_address,
            student_emergency_contact_email: persons.student_emergency_contact_email,
            student_medical_history_id: persons.student_medical_history_id
        });
    }

    // Find a person by ID using Knex
    static async findById(id: number): Promise<any> {
        return db('persons')
            .where({ id }) // Equivalent to `WHERE id = ?`
            .first(); // Only return the first matching row
    }

    // Update a person by ID using Knex
    static async updateById(id: number, updatedData: Partial<Persons>): Promise<any> {
        return db('persons')
            .where({ id }) // Specify the row to update using `id`
            .update(updatedData); // Knex automatically generates the `SET` clause based on `updatedData`
    }
}
