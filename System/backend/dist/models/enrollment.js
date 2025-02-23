"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enrollment = void 0;
class Enrollment {
    constructor(id, student_id, student_document, course_id, enrollment_date, semester_level_id, enrollment_status_id, past_grade_level_id, upcoming_grade_level_id, section_id, term_id, is_approved_docu, status_id, is_deleted, is_deleted_by, is_deleted_at, updated_by) {
        this.id = id;
        this.student_id = student_id;
        this.student_document = student_document;
        this.course_id = course_id;
        this.enrollment_date = enrollment_date;
        this.semester_level_id = semester_level_id;
        this.enrollment_status_id = enrollment_status_id;
        this.past_grade_level_id = past_grade_level_id;
        this.upcoming_grade_level_id = upcoming_grade_level_id;
        this.section_id = section_id;
        this.term_id = term_id;
        this.is_approved_docu = is_approved_docu;
        this.status_id = status_id;
        this.is_deleted = is_deleted;
        this.is_deleted_by = is_deleted_by;
        this.is_deleted_at = is_deleted_at;
        this.updated_by = updated_by;
    }
}
exports.Enrollment = Enrollment;
