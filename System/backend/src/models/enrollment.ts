export class Enrollment{
        id?: number;
        student_id: string;
        student_document: string;
        course_id: number;
        enrollment_date: Date;
        semester_level_id:number;
        enrollment_status_id: number;
        past_grade_level_id:number;
        upcoming_grade_level_id:number;
        section_id: number;
        term_id:number;
        is_approved_docu:number;
        status_id: number;
        is_deleted:number;
        is_deleted_by:number;
        is_deleted_at:Date;
        updated_by:number;
        constructor(
            id:number,
            student_id:string,
            student_document:string,
            course_id: number,
            enrollment_date: Date,
            semester_level_id: number,
            enrollment_status_id:number,
            past_grade_level_id:number,
            upcoming_grade_level_id:number,
            section_id:number,
            term_id:number,
            is_approved_docu:number,
            status_id:number,
            is_deleted:number,
            is_deleted_by:number,
            is_deleted_at:Date,
            updated_by:number
        ){
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