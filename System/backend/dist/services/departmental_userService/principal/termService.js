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
exports.selectAllTerm = exports.deleteTermbyUser = exports.updatedTermByUser = exports.createTerm = void 0;
const termRepo_1 = require("../../../repository/departmental_usersRepository/principal/termRepo");
const createTerm = (term) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield termRepo_1.TermRepo.saveTerm(term);
        return { message: 'New Term created!' };
    }
    catch (err) {
        throw new Error('Error creating Term: ' + err.message);
    }
});
exports.createTerm = createTerm;
const updatedTermByUser = (term) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield termRepo_1.TermRepo.updateTerm(term);
        return { message: 'Term updated!' };
    }
    catch (err) {
        throw new Error('Error Updating Term: ' + err.message);
    }
});
exports.updatedTermByUser = updatedTermByUser;
const deleteTermbyUser = (term) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield termRepo_1.TermRepo.deleteTerm(term);
        return { message: 'Term deleted successfully!' };
    }
    catch (err) {
        throw new Error('Error deleting term: ' + err.message);
    }
});
exports.deleteTermbyUser = deleteTermbyUser;
const selectAllTerm = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const term = yield termRepo_1.TermRepo.selectAllTerm();
        return term;
    }
    catch (err) {
        throw new Error('Error fetching all term: ' + err.message);
    }
});
exports.selectAllTerm = selectAllTerm;
