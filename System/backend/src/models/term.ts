export class Term{
    id?: number;
    term_name: string;
    date_start: Date;
    date_end: Date;
    is_current:number;
    is_active:number;
    is_deleted:number;
    is_deleted_at?:string;
    is_deleted_by?:number;
    created_by:number;
    updated_by:number;
    constructor(
        id:number,
        term_name:string,
        date_start: Date,
        date_end: Date,
        is_current:number,
        is_active:number,
        is_deleted:number,
        is_deleted_by:number,
        is_deleted_at:string,
        created_by:number,
        updated_by:number
    ){
        this.id= id;
        this.term_name = term_name;
        this.date_start = date_start;
        this.date_end = date_end;
        this.is_current = is_current;
        this.is_active = is_active;
        this.is_deleted = is_deleted;
        this.is_deleted_at = is_deleted_at;
        this.is_deleted_by = is_deleted_by;
        this.created_by = created_by;
        this.updated_by = updated_by;
    }
}