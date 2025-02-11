import db from '../../util/database';
import { Student } from '../../models/students';
import { Persons } from '../../models/persons';

export class getAllStudent{
    static async saveInfo(person: Persons): Promise<any> {
        return db('persons').insert({
            first_name: person.first_name,
            middle_name: person.middle_name,
            last_name: person.last_name
        });
    }

    // static async save(user: GenUser): Promise<any> {
    //     return db.execute(
    //         'INSERT INTO gen_users (username, password) VALUES (?, ?)',
    //         [user.username, user.password]
    //     );
    // }
}
