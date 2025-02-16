export class Father{
    first_name:string;
    middle_name:string;
    last_name:string;
    suffix_id:number;
    contact_no:string;
    address:string;
    email_address:string;
    occupation:string;
    occ_address:string;
    constructor(
        first_name:string,
        middle_name:string,
        last_name:string,
        suffix_id:number,
        contact_no: string,
        address: string,
        email_address: string,
        occupation:string,
        occ_address:string
    ){
        this.first_name = first_name;
        this.middle_name = middle_name;
        this.last_name = last_name;
        this.suffix_id = suffix_id;
        this.contact_no = contact_no;
        this.address = address;
        this.email_address = email_address;
        this.occupation = occupation;
        this.occ_address = occ_address;
    }
}