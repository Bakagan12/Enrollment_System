import db from '../util/database';

export class GenUser {
    id?:number;
    username: string;
    gen_user_email:string;
    password: string;
    person_id:number;
    guardian_id: number;
    user_role_id: number;
    status_id:number;
    is_emailed:boolean;
    is_deleted:number;
    is_deleted_by:number;

    constructor(id:number, username: string,gen_user_email:string, password: string, person_id:number,guardian_id: number, user_role_id: number, status_id:number, is_emailed:boolean, is_deleted:number, is_deleted_by:number) {
        this.id = id;
        this.username = username;
        this.gen_user_email = gen_user_email;
        this.password = password;
        this.person_id = person_id;
        this.guardian_id = guardian_id;
        this.user_role_id = user_role_id;
        this.status_id = status_id;
        this.is_emailed = is_emailed;
        this.is_deleted = is_deleted;
        this.is_deleted_by = is_deleted_by;
    }
}
