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
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerNewStudent = exports.registerNewDepartmentalUser = void 0;
const allUsersRegistration_1 = require("../../../repository/adminRepository/allUsersRegistration");
const registerNewDepartmentalUser = (person, user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield allUsersRegistration_1.allUserRepo.RegisterNewDepartmentalUser(user, person);
        return { message: 'User Registered!' };
    }
    catch (err) {
        throw new Error('Error creating departmental user: ' + err.message);
    }
});
exports.registerNewDepartmentalUser = registerNewDepartmentalUser;
const registerNewStudent = (user, person, student, guardian, contact, mother, father) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield allUsersRegistration_1.allUserRepo.RegisterNewStudent(user, person, student, guardian, contact, mother, father);
        return { message: 'Student Registered!' };
    }
    catch (err) {
        throw new Error('Error creating Student and Guardian Account: ' + err.message);
    }
});
exports.registerNewStudent = registerNewStudent;
