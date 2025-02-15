export class Term{
    term_name: string;
    date_start: Date;
    date_end: Date;
    is_current:number;
    is_active:number;
    is_deleted:number;
    created_by:number;
    updated_by:number;
    constructor(
        term_name:string,
        date_start: Date,
        date_end: Date,
        is_current:number,
        is_active:number,
        is_deleted:number,
        created_by:number,
        updated_by:number
    ){
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