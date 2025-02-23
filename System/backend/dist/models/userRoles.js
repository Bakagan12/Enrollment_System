"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoles = void 0;
class UserRoles {
    constructor(role_name, is_active, is_deleted, is_deleted_by, created_by, updated_by) {
        this.role_name = role_name;
        this.is_active = is_active;
        this.is_deleted = is_deleted;
        this.is_deleted_by = is_deleted_by;
        this.created_by = created_by;
        this.updated_by = updated_by;
    }
}
exports.UserRoles = UserRoles;
