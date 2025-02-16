import  db from "../../config/db";
import { v4 as uuidv4 } from 'uuid';
import { Persons } from "../../models/persons";
import { GenUser } from "../../models/genUser";
import { StudentGuardian } from "../../models/studenGuardian";
import { Mother } from "../../models/mother";
import { Father } from "../../models/father";
import { StudentEmergencyContact } from "../../models/studentEmergencyContact";
import { Student } from "../../models/students";
import { StudentMedicalHistory } from "../../models/studentMedicalHistory";


export class allUserRepo{
    static async findAllUsers(): Promise<any> {
        return db('gen_users')
            .join('persons', 'gen_users.person_id', 'persons.id')
            .join('suffix', 'persons.suffix_id', 'suffix.id')
            .select(
                'gen_users.username',
                'gen_users.gen_user_email',
                'gen_users.password',
                'persons.first_name',
                'persons.middle_name',
                'persons.last_name',
                'suffix.suffix_name',
            );
    }
    static async RegisterNewDepartmentalUser(user: GenUser, person: Persons): Promise<any> {
        let baseUsername = `${person.first_name.toLowerCase()}.${person.last_name.toLowerCase()}`;
        const generatedPassword = uuidv4();
    
        let username = baseUsername;
        let counter = 1;
    
        // Ensure unique username
        while (await db('gen_users').where('username', username).first()) {
            username = `${baseUsername}${counter}`;
            counter++;
        }
    
        try {
            // Insert the person record first
            await db('persons').insert({
                first_name: person.first_name,
                middle_name: person.middle_name,
                last_name: person.last_name,
                suffix_id: person.suffix_id,
                age: person.age,
                date_of_birth: person.date_of_birth,
                place_of_birth: person.place_of_birth,
                gender: person.gender,
                citizenship: person.citizenship,
                address: person.address,
                email: person.email,
                contact_no: person.contact_number,
            });
    
            // Get the ID of the inserted person
            const personId = await db.raw('SELECT LAST_INSERT_ID() as id');
            
            // Ensure you extract the id properly from the result
            const personIdValue = personId[0].id;

            // Insert the user record using the personId
            const userResult = await db('gen_users').insert({
                person_id: person.id,  // Foreign key to the person
                gen_user_email: person.email, // Store email from person
                username: username,
                password: generatedPassword,
                user_role_id: user.user_role_id,
                status_id: user.status_id, // Store the status ID
            });
            console.log("Inserted user with person_id:", personIdValue);

            // Return the inserted user details or relevant info
            return userResult;
        } catch (err: unknown) {
            if (err instanceof Error) {
                // Now `err` is guaranteed to be an instance of `Error`
                console.error('Error creating User: ', err.message);
                throw new Error('Error creating User: ' + err.message);
            } else {
                // Handle other error types if needed
                console.error('An unknown error occurred');
                throw new Error('An unknown error occurred');
            }
        }
    }


        static async RegisterNewStudent(
            user: GenUser, 
            person: Persons, 
            student: Student,
            guardian: StudentGuardian, 
            contact: StudentEmergencyContact,
            mother: Mother,
            father:Father
        ): Promise<any> {
            let baseUsername = `${person.first_name.toLowerCase()}.${person.last_name.toLowerCase()}`;
            const generatedPassword = uuidv4();
        
            let username = baseUsername;
            let counter = 1;
        
            // Ensure unique username
            while (await db('gen_users').where('username', username).first()) {
                username = `${baseUsername}${counter}`;
                counter++;
            }
        
            try {
                // Insert person record
                const personResult = await db('persons').insert({
                    first_name: person.first_name,
                    middle_name: person.middle_name,
                    last_name: person.last_name,
                    suffix_id: person.suffix_id,
                    age: person.age,
                    date_of_birth: person.date_of_birth,
                    place_of_birth: person.place_of_birth,
                    gender: person.gender,
                    citizenship: person.citizenship,
                    address: person.address,
                    email: person.email,
                    contact_no: person.contact_number,
                }).returning('*');
                const personId = personResult[0].id;

                //Insert Mother record
                const motherResult = await db('mother').insert({
                    first_name: mother.first_name,
                    middle_name:mother.middle_name,
                    last_name:mother.middle_name,
                    suffix_id:mother.suffix_id,
                    contact_no: mother.contact_no,
                    address:mother.address,
                    email_address:mother.email_address,
                    occupation:mother.occupation,
                    occ_address:mother.occ_address,
                }).returning('*');
                const motherId = motherResult[0].id;
                //Insert Mother record
                const fatherResult = await db('father').insert({
                    first_name: mother.first_name,
                    middle_name:mother.middle_name,
                    last_name:mother.middle_name,
                    suffix_id:mother.suffix_id,
                    contact_no: mother.contact_no,
                    address:mother.address,
                    email_address:mother.email_address,
                    occupation:mother.occupation,
                    occ_address:mother.occ_address,
                }).returning('*');
                const fatherId = fatherResult[0].id;
        
                // Insert user record
                const userResult = await db('gen_users').insert({
                    person_id: personId,
                    username: username,
                    password: generatedPassword,
                    user_role_id: user.user_role_id
                }).returning('*');
        
                // Insert guardian record
                const guardianResult = await db('student_guardian').insert({
                    first_name: guardian.first_name,
                    middle_name: guardian.middle_name,
                    last_name: guardian.last_name,
                    suffix_id: guardian.suffix_id,
                    address: guardian.address,
                    contact_no: guardian.contact_no,
                    email_address: guardian.email_address,
                    occupation: guardian.occupation,
                    occ_address: guardian.occ_address,
                }).returning('*');
                const guardianId = guardianResult[0].id;
        
                // Insert emergency contact record
                const contactResult = await db('student_emergency_contact').insert({
                    first_name: contact.first_name,
                    middle_name: contact.middle_name,
                    last_name: contact.last_name,
                    suffix_id: contact.suffix_id,
                    address: contact.address,
                    contact_no: contact.contact_no,
                    email_address: contact.email_address,
                    // occupation: contact.occupation,
                    // occ_address: contact.occ_address,
                }).returning('*');
                const contactId = contactResult[0].id;
        
                // Insert student record
                const studentResult = await db('students').insert({
                    person_id: personId,
                    guardian_id: guardianId,
                    emergency_contact_id: contactId
                }).returning('*');

                return studentResult;

            } catch (error: unknown) {
                if (error instanceof Error) {
                    throw new Error(`Error creating User: ${error.message}`);
                } else {
                    throw new Error('An unknown error occurred');
                }
            }
        }
}