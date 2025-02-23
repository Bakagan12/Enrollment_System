export class StudentEmergencyContact{
    first_name:string;
    middle_name: string;
    last_name: string;
    suffix_id: number;
    address: string;
    contact_no: string;
    email_address: string;
    constructor(
        first_name:string,
        middle_name:string,
        last_name: string,
        suffix_id:number,
        address:string,
        contact_no:string,
        email_address:string
    ){
        this.first_name = first_name,
        this.middle_name = middle_name,
        this.last_name = last_name,
        this.suffix_id = suffix_id,
        this. address = address,
        this.contact_no = contact_no,
        this.email_address = email_address
    }
}