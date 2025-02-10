import db from '../util/database';
import { GenUser } from '../models/genUser';

export class authRepository{
    static async find(username: string): Promise<any> {
        return db.execute('SELECT * FROM gen_users WHERE username = ?', [username]);
    }

    static async save(user: GenUser): Promise<any> {
        return db.execute(
            'INSERT INTO gen_users (username, password) VALUES (?, ?)',
            [user.username, user.password]
        );
    }
}
