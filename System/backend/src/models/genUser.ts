import db from '../util/database';

export class GenUser {
    username: string;
    gen_user_email:string;
    password: string;
    person_id:number;
    user_role_id: number;
    status_id:number;

    constructor(username: string,gen_user_email:string, password: string, person_id:number, user_role_id: number, status_id:number) {
        this.username = username;
        this.gen_user_email = gen_user_email;
        this.password = password;
        this.person_id = person_id;
        this.user_role_id = user_role_id;
        this.status_id = status_id;
    }
}
