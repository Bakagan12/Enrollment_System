export class Student{
    person_id: number;
    student_guardian_id: number;
    student_emergency_contact_id: number;
    student_medical_history_id:number;
    student_document_id: number;
    student_no:string;
    lrn_no:number;
    student_status_id:number;
    grade_level_id: number;
    section_id:number;
    subject_id:number;
    is_document_status:number;
    term_id: number;
    is_deleted:number;
    created_by:number;
    updated_by:number;
    constructor(
        person_id: number,
        student_guardian_id: number,
        student_emergency_contact_id: number,
        student_medical_history_id:number,
        student_document_id: number,
        student_no:string,
        lrn_no:number,
        student_status_id:number,
        grade_level_id: number,
        section_id:number,
        subject_id:number,
        is_document_status:number,
        term_id: number,
        is_deleted:number,
        created_by:number,
        updated_by:number
    ){
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