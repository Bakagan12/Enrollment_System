import db from '../util/database';

export class GenUser {
    username: string;
    password: string;
    person_id:number;
    user_role_id: number;

    constructor(username: string, password: string, person_id:number, user_role_id: number) {
        this.username = username;
        this.password = password;
        this.person_id = person_id;
        this.user_role_id = user_role_id;
    }
}
