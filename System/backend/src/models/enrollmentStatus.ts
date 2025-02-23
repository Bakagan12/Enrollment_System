export class EnrollmentStatus{
    id?:number;
    name:string;
    is_deleted: number;

    constructor(
        id:number,
        name:string,
        is_deleted:number
    ){
        this.id = id;
        this.name = name;
        this.is_deleted = is_deleted;
    }
    
}