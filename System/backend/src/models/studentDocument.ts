export class studentDocuments{
    document_name:string;
    document_type:string;
    document_image:string;
    is_deleted:number;
    constructor(
        document_name:string,
        document_type:string,
        document_image:string,
        is_deleted:number

    ){
        this.document_name = document_name;
        this.document_type = document_type;
        this.document_image = document_image;
        this.is_deleted = is_deleted;
    }
}