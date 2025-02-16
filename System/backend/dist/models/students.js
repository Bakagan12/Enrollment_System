"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(person_id, student_guardian_id, student_emergency_contact_id, student_medical_history_id, student_document_id, student_no, lrn_no, student_status_id, grade_level_id, section_id, subject_id, is_document_status, term_id, is_deleted, created_by, updated_by) {
        this.person_id = person_id;
        this.student_guardian_id = student_guardian_id;
        this.student_emergency_contact_id = student_emergency_contact_id;
        this.student_medical_history_id = student_medical_history_id;
        this.student_document_id = student_document_id;
        this.student_no = student_no;
        this.lrn_no = lrn_no;
        this.student_status_id = student_status_id;
        this.grade_level_id = grade_level_id;
        this.section_id = section_id;
        this.subject_id = subject_id;
        this.is_document_status = is_document_status;
        this.term_id = term_id;
        this.is_deleted = is_deleted;
        this.created_by = created_by;
        this.updated_by = updated_by;
    }
}
exports.Student = Student;
