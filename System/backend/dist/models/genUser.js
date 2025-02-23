"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenUser = void 0;
class GenUser {
    constructor(id, username, gen_user_email, password, person_id, guardian_id, user_role_id, status_id, is_emailed, is_deleted, is_deleted_by) {
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
exports.GenUser = GenUser;
