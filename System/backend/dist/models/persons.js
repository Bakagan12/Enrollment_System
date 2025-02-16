"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persons = void 0;
class Persons {
    constructor(id, first_name, last_name, middle_name, suffix_id, age, date_of_birth, place_of_birth, gender, citizenship, address, email, contact_number, student_guardian_id, student_emergency_contact_name, student_emergency_contact_no, student_emergency_contact_address, student_emergency_contact_email, student_medical_history_id) {
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
exports.Persons = Persons;
