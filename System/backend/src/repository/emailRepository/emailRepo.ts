import db from '../../util/database';
import { GenUser } from '../../models/genUser';

export class EmailRepo{
// Find user by username
    static async find(email: string): Promise<any> {
        try {
            const user = await db('gen_users').where({ gen_user_email: email }).select('username', 'gen_user_email', 'password').first();
            return user;
        } catch (error) {
            throw new Error('Error querying the database');
        }
    }
    static async updatePassword(email: string, newPassword: string): Promise<any> {
        try {
          const updatedUser = await db('gen_users')
            .where({ gen_user_email: email })
            .update({ password: newPassword });
          return updatedUser;
        } catch (error) {
          throw new Error('Error updating the password');
        }
      }
}