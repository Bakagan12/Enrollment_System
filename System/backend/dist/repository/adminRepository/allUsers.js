"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allUserRepo = void 0;
const db_1 = __importDefault(require("../../config/db"));
const uuid_1 = require("uuid");
class allUserRepo {
    static findAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, db_1.default)('gen_users')
                .join('persons', 'gen_users.person_id', 'persons.id')
                .join('suffix', 'persons.suffix_id', 'suffix.id')
                .select('gen_users.username', 'gen_users.gen_user_email', 'gen_users.password', 'persons.first_name', 'persons.middle_name', 'persons.last_name', 'suffix.suffix_name');
        });
    }
    static RegisterNewDepartmentalUser(user, person) {
        return __awaiter(this, void 0, void 0, function* () {
            let baseUsername = `${person.first_name.toLowerCase()}.${person.last_name.toLowerCase()}`;
            const generatedPassword = (0, uuid_1.v4)();
            let username = baseUsername;
            let counter = 1;
            // Ensure unique username
            while (yield (0, db_1.default)('gen_users').where('username', username).first()) {
                username = `${baseUsername}${counter}`;
                counter++;
            }
            // Ensure unique gen_user_email and the person_email
            while (yield (0, db_1.default)('gen_users').where('gen_user_email', person.email).first()) {
                console.log('Email already exists: ', person.email);
                throw new Error('Email already exists');
            }
            try {
                // Insert the person record first
                const userdetails = yield (0, db_1.default)('persons').insert({
                    first_name: person.first_name,
                    middle_name: person.middle_name,
                    last_name: person.last_name,
                    suffix_id: person.suffix_id,
                    age: person.age,
                    date_of_birth: person.date_of_birth,
                    place_of_birth: person.place_of_birth,
                    gender: person.gender,
                    citizenship: person.citizenship,
                    address: person.address,
                    email: person.email,
                    contact_no: person.contact_number,
                });
                // Get the ID of the inserted person
                const personId = userdetails[0];
                // Ensure you extract the id properly from the result
                // const personIdValue = personId.id;
                // Insert the user record using the personId
                const userResult = yield (0, db_1.default)('gen_users').insert({
                    person_id: personId,
                    gen_user_email: person.email,
                    username: username,
                    password: generatedPassword,
                    user_role_id: user.user_role_id,
                    status_id: user.status_id,
                });
                console.log("Inserted user with person_id:", personId);
                return userResult;
            }
            catch (err) {
                if (err instanceof Error) {
                    console.error('Error creating User: ', err.message);
                    throw new Error('Error creating User: ' + err.message);
                }
                else {
                    console.error('An unknown error occurred');
                    throw new Error('An unknown error occurred');
                }
            }
        });
    }
    static RegisterNewStudent(user, person, student, guardian, contact, mother, father) {
        return __awaiter(this, void 0, void 0, function* () {
            let baseUsername = `${person.first_name.toLowerCase()}.${person.last_name.toLowerCase()}`;
            const generatedPassword = (0, uuid_1.v4)();
            let username = baseUsername;
            let counter = 1;
            // Ensure unique username
            while (yield (0, db_1.default)('gen_users').where('username', username).first()) {
                username = `${baseUsername}${counter}`;
                counter++;
            }
            try {
                // Insert person record
                const personResult = yield (0, db_1.default)('persons').insert({
                    first_name: person.first_name,
                    middle_name: person.middle_name,
                    last_name: person.last_name,
                    suffix_id: person.suffix_id,
                    age: person.age,
                    date_of_birth: person.date_of_birth,
                    place_of_birth: person.place_of_birth,
                    gender: person.gender,
                    citizenship: person.citizenship,
                    address: person.address,
                    email: person.email,
                    contact_no: person.contact_number,
                }).returning('*');
                const personId = personResult[0].id;
                //Insert Mother record
                const motherResult = yield (0, db_1.default)('mother').insert({
                    first_name: mother.first_name,
                    middle_name: mother.middle_name,
                    last_name: mother.middle_name,
                    suffix_id: mother.suffix_id,
                    contact_no: mother.contact_no,
                    address: mother.address,
                    email_address: mother.email_address,
                    occupation: mother.occupation,
                    occ_address: mother.occ_address,
                }).returning('*');
                const motherId = motherResult[0].id;
                //Insert Mother record
                const fatherResult = yield (0, db_1.default)('father').insert({
                    first_name: mother.first_name,
                    middle_name: mother.middle_name,
                    last_name: mother.middle_name,
                    suffix_id: mother.suffix_id,
                    contact_no: mother.contact_no,
                    address: mother.address,
                    email_address: mother.email_address,
                    occupation: mother.occupation,
                    occ_address: mother.occ_address,
                }).returning('*');
                const fatherId = fatherResult[0].id;
                // Insert user record
                const userResult = yield (0, db_1.default)('gen_users').insert({
                    person_id: personId,
                    username: username,
                    password: generatedPassword,
                    user_role_id: user.user_role_id
                }).returning('*');
                // Insert guardian record
                const guardianResult = yield (0, db_1.default)('student_guardian').insert({
                    first_name: guardian.first_name,
                    middle_name: guardian.middle_name,
                    last_name: guardian.last_name,
                    suffix_id: guardian.suffix_id,
                    address: guardian.address,
                    contact_no: guardian.contact_no,
                    email_address: guardian.email_address,
                    occupation: guardian.occupation,
                    occ_address: guardian.occ_address,
                }).returning('*');
                const guardianId = guardianResult[0].id;
                // Insert emergency contact record
                const contactResult = yield (0, db_1.default)('student_emergency_contact').insert({
                    first_name: contact.first_name,
                    middle_name: contact.middle_name,
                    last_name: contact.last_name,
                    suffix_id: contact.suffix_id,
                    address: contact.address,
                    contact_no: contact.contact_no,
                    email_address: contact.email_address,
                    // occupation: contact.occupation,
                    // occ_address: contact.occ_address,
                }).returning('*');
                const contactId = contactResult[0].id;
                // Insert student record
                const studentResult = yield (0, db_1.default)('students').insert({
                    person_id: personId,
                    guardian_id: guardianId,
                    emergency_contact_id: contactId
                }).returning('*');
                return studentResult;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(`Error creating User: ${error.message}`);
                }
                else {
                    throw new Error('An unknown error occurred');
                }
            }
        });
    }
}
exports.allUserRepo = allUserRepo;
