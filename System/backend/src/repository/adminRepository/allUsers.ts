import  db from "../../config/db";
import { v4 as uuidv4 } from 'uuid';
import { Persons } from "../../models/persons";
import { Suffix} from "../../models/suffix";
import { GenUser } from "../../models/genUser";
import { Status } from "../../models/status";
import { UserRoles } from "../../models/userRoles";
import { StudentGuardian } from "../../models/studenGuardian";
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
    
        while (await db('gen_users').where('username', username).first()) {
            username = `${baseUsername}${counter}`;
            counter++;
        }
    
        return db('persons')
            .insert({
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
            })
            .returning('*')
            .then((result) => {
                const personId = result[0].id;
    
                return db('gen_users')
                    .insert({
                        person_id: personId,
                        username: username,
                        password: generatedPassword,
                        user_role_id:user.user_role_id
                    })
                    .returning('*');
            })
            .then((result) => {
                return result;
            })
            .catch((error) => {
                throw new Error(`Error saving creating User: ${error.message}`);
            });
        }

        static async RegisterNewStudent(user: GenUser, person: Persons, student:Student, guardian:StudentGuardian,contact:StudentEmergencyContact, medical:StudentMedicalHistory): Promise<any> {
            let baseUsername = `${person.first_name.toLowerCase()}.${person.last_name.toLowerCase()}`;
            const generatedPassword = uuidv4();

            let username = baseUsername;
            let counter = 1;
        
            while (await db('gen_users').where('username', username).first()) {
                username = `${baseUsername}${counter}`;
                counter++;
            }
        
            return db('persons')
                .insert({
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
                })
                .returning('*')
                .then((result) => {
                    const personId = result[0].id;
        
                    return db('gen_users')
                        .insert({
                            person_id: personId,
                            username: username,
                            password: generatedPassword,
                            user_role_id:user.user_role_id
                        })
                        .returning('*');
                })
                .then((result) => {
                    return result;
                })
                .catch((error) => {
                    throw new Error(`Error saving creating User: ${error.message}`);
                });
            }
}