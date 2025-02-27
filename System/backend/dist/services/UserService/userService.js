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
exports.generateToken = exports.findUserByUsername = exports.createUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_json_1 = __importDefault(require("../../config/config.json"));
const auth_1 = require("../../repository/authRepository/auth");
const JWT_SECRET = config_json_1.default.JWT_SECRET || 'your_jwt_secret';
// Create a new user (register)
const createUser = (person_id_1, guardian_id_1, username_1, password_1, user_role_id_1, ...args_1) => __awaiter(void 0, [person_id_1, guardian_id_1, username_1, password_1, user_role_id_1, ...args_1], void 0, function* (person_id, guardian_id, username, password, user_role_id, status_id = 1, is_emaild, is_deleted, is_deleted_by) {
    try {
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        // Save user in the database
        const user = {
            person_id,
            guardian_id,
            username,
            password: hashedPassword,
            user_role_id, status_id,
            gen_user_email: '',
            is_emailed: false,
            is_deleted: 0,
            is_deleted_by: 0
        };
        yield auth_1.authRepository.save(user);
        return { message: 'User Registered!' };
    }
    catch (err) {
        throw new Error('Error creating user: ' + err.message);
    }
});
exports.createUser = createUser;
const findUserByUsername = (username) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield auth_1.authRepository.find(username);
        if (!result || result.length === 0) {
            return null;
        }
        return result;
    }
    catch (err) {
        throw new Error('Error finding user: ' + err.message);
    }
});
exports.findUserByUsername = findUserByUsername;
const generateToken = (user) => {
    return jsonwebtoken_1.default.sign({ id: user.id, username: user.username, user_role_id: user.user_role_id }, JWT_SECRET, { expiresIn: '1h' });
};
exports.generateToken = generateToken;
