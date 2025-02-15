export class Section{
    section_name: string;
    grade_level_id: number;
    term_id:number;
    is_active:number;
    is_current:number;
    is_deleted:number;
    created_by:number;
    updated_by:number;
    constructor(
        section_name:string,
        grade_level_id:number,
        term_id:number,
        is_active: number,
        is_current:number,
        is_deleted:number,
        created_by:number,
        updated_by:number
    ){
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