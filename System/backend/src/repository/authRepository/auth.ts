import db from '../../util/database';
import { GenUser } from '../../models/genUser';

export class authRepository {
    static async find(username: string): Promise<any> {
        // Use Knex to find the user
        return db('gen_users').where({ username }).select('*').first();
    }

    static async save(user: GenUser): Promise<any> {
        // Use Knex to insert user data
        return db('gen_users').insert({
            username: user.username,
            password: user.password
        });
    }
}
