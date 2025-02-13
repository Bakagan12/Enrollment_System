import db from '../util/database';

export class GenUser {
    username: string;
    password: string;
    user_role_id: number;

    constructor(username: string, password: string, user_role_id: number) {
        this.username = username;
        this.password = password;
        this.user_role_id = user_role_id;
    }


}
