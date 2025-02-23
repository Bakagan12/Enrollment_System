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
exports.PersonDataRepository = void 0;
const database_1 = __importDefault(require("../../util/database"));
class PersonDataRepository {
    // Save a person using Knex
    static save(persons) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, database_1.default)('persons').insert({
                first_name: persons.first_name,
                last_name: persons.last_name,
                middle_name: persons.middle_name,
                suffix_id: persons.suffix_id,
                date_of_birth: persons.date_of_birth,
                gender: persons.gender,
                address: persons.address,
                email: persons.email,
                contact_no: persons.contact_number,
                student_guardian_id: persons.student_guardian_id,
                student_emergency_contact_name: persons.student_emergency_contact_name,
                student_emergency_contact_no: persons.student_emergency_contact_no,
                student_emergency_contact_address: persons.student_emergency_contact_address,
                student_emergency_contact_email: persons.student_emergency_contact_email,
                student_medical_history_id: persons.student_medical_history_id
            });
        });
    }
    // Find a person by ID using Knex
    static findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, database_1.default)('persons')
                .where({ id }) // Equivalent to `WHERE id = ?`
                .first(); // Only return the first matching row
        });
    }
    // Update a person by ID using Knex
    static updateById(id, updatedData) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, database_1.default)('persons')
                .where({ id }) // Specify the row to update using `id`
                .update(updatedData); // Knex automatically generates the `SET` clause based on `updatedData`
        });
    }
}
exports.PersonDataRepository = PersonDataRepository;
