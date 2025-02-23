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
exports.TermRepo = void 0;
const database_1 = __importDefault(require("../../../util/database"));
class TermRepo {
    static saveTerm(term) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingTerm = yield TermRepo.findTermByName(term.term_name);
            if (existingTerm) {
                throw new Error(`Term with name "${term.term_name}" already exists.`);
            }
            return (0, database_1.default)('term')
                .insert({
                term_name: term.term_name,
                date_start: term.date_start,
                date_end: term.date_end,
                is_current: term.is_current,
                is_active: term.is_active,
                is_deleted: term.is_deleted,
                created_by: term.created_by
            });
        });
    }
    static updateTerm(term) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, database_1.default)('term')
                .where({ id: term.id })
                .update({
                term_name: term.term_name,
                date_start: term.date_start,
                date_end: term.date_end,
                is_current: term.is_current,
                is_active: term.is_active,
                is_deleted: term.is_deleted,
                updated_at: new Date(),
                updated_by: term.updated_by
            });
        });
    }
    static deleteTerm(term) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, database_1.default)('term')
                .where({ id: term.id })
                .update({
                is_deleted: 1,
                is_deleted_at: new Date(),
                is_deleted_by: term.is_deleted_by
            });
        });
    }
    static selectAllTerm() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, database_1.default)('term')
                .select('*')
                .where({
                is_active: 1,
                is_current: 1
            })
                .andWhere({ is_deleted: 0 });
        });
    }
    static findTermByName(term_name) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, database_1.default)('term')
                .select('*')
                .where({ term_name })
                .first();
            return result ? result : null;
        });
    }
}
exports.TermRepo = TermRepo;
