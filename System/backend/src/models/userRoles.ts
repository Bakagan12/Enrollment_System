export class UserRoles{
    role_name:string;
    is_active:number;
    is_deleted:number;
    created_by:number;
    updated_by:number;

    constructor(
        role_name:string,
        is_active:number,
        is_deleted:number,
        created_by:number,
        updated_by:number,
    ){
        this.role_name = role_name;
        this.is_active = is_active;
        this.is_deleted = is_deleted;
        this.created_by = created_by;
        this.updated_by = updated_by;
    }
}