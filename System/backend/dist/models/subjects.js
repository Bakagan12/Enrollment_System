"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subject = void 0;
class Subject {
    constructor(id, subject_name, grade_level_id, term_id, is_current, is_deleted, is_deleted_by, created_by, updated_by) {
        this.id = id;
        this.subject_name = subject_name;
        this.grade_level_id = grade_level_id;
        this.term_id = term_id;
        this.is_current = is_current;
        this.is_deleted = is_deleted;
        this.is_deleted_by = is_deleted_by;
        this.created_by = created_by;
        this.updated_by = updated_by;
    }
}
exports.Subject = Subject;
