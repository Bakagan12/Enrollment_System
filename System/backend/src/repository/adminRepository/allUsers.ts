import  db from "../../config/db";

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
}