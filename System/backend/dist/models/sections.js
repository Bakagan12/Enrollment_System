"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
class Section {
    constructor(section_name, grade_level_id, term_id, is_active, is_current, is_deleted, created_by, updated_by) {
        this.section_name = section_name;
        this.grade_level_id = grade_level_id;
        this.term_id = term_id;
        this.is_active = is_active;
        this.is_current = is_current;
        this.is_deleted = is_deleted;
        this.created_by = created_by;
        this.updated_by = updated_by;
    }
}
exports.Section = Section;
