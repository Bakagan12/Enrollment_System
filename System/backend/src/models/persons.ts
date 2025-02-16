export class Persons {
    id?:number;
    first_name: string;
    last_name: string;
    middle_name: string;
    suffix_id: number;
    age: number;
    date_of_birth: Date;
    place_of_birth: string;
    gender: string;
    citizenship: string;
    address: number;
    email: string;
    contact_number: string;
    student_guardian_id: number;
    student_emergency_contact_name: string;
    student_emergency_contact_no: string;
    student_emergency_contact_address: string;
    student_emergency_contact_email: string;
    student_medical_history_id: number;

    constructor(
        id:number,
        first_name: string,
        last_name: string,
        middle_name: string,
        suffix_id: number,
        age: number,
        date_of_birth: Date,
        place_of_birth: string,
        gender: string,
        citizenship: string,
        address: number,
        email: string,
        contact_number: string,
        student_guardian_id: number,
        student_emergency_contact_name: string,
        student_emergency_contact_no: string,
        student_emergency_contact_address: string,
        student_emergency_contact_email: string,
        student_medical_history_id: number
    ) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.middle_name = middle_name;
        this.suffix_id = suffix_id;
        this.age = age;
        this.date_of_birth = date_of_birth;
        this.place_of_birth = place_of_birth;
        this.gender = gender;
        this.citizenship = citizenship;
        this.address = address;
        this.email = email;
        this.contact_number = contact_number;
        this.student_guardian_id = student_guardian_id;
        this.student_emergency_contact_name = student_emergency_contact_name;
        this.student_emergency_contact_no = student_emergency_contact_no;
        this.student_emergency_contact_address = student_emergency_contact_address;
        this.student_emergency_contact_email = student_emergency_contact_email;
        this.student_medical_history_id = student_medical_history_id;
    }


}
