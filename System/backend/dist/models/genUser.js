"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenUser = void 0;
class GenUser {
    constructor(username, gen_user_email, password, person_id, guardian_id, user_role_id, status_id) {
        this.username = username;
        this.gen_user_email = gen_user_email;
        this.password = password;
        this.person_id = person_id;
        this.guardian_id = guardian_id;
        this.user_role_id = user_role_id;
        this.status_id = status_id;
    }
}
exports.GenUser = GenUser;
