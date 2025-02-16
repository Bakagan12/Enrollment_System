"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Term = void 0;
class Term {
    constructor(term_name, date_start, date_end, is_current, is_active, is_deleted, created_by, updated_by) {
        this.term_name = term_name;
        this.date_start = date_start;
        this.date_end = date_end;
        this.is_current = is_current;
        this.is_active = is_active;
        this.is_deleted = is_deleted;
        this.created_by = created_by;
        this.updated_by = updated_by;
    }
}
exports.Term = Term;
