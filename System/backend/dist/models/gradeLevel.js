"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradeLevel = void 0;
class GradeLevel {
    constructor(level_name, term_id, is_active, is_deleted, created_by, updated_by) {
        this.level_name = level_name;
        this.term_id = term_id;
        this.is_active = is_active;
        this.is_deleted = is_deleted;
        this.created_by = created_by;
        this.updated_by = updated_by;
    }
}
exports.GradeLevel = GradeLevel;
