export class Subject{
    subject_name: string;
    grade_level_id: number;
    term_id:number;
    is_current:number;
    is_deleted:number;
    created_by:number;
    updated_by:number;
    constructor(
        subject_name: string,
        grade_level_id: number,
        term_id:number,
        is_current:number,
        is_deleted:number,
        created_by:number,
        updated_by:number
    ){
        this.subject_name = subject_name;
        this.grade_level_id = grade_level_id;
        this.term_id = term_id;
        this.is_current = is_current;
        this.is_deleted = is_deleted;
        this.created_by = created_by;
        this.updated_by = updated_by;
    }
}