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
const genUser_1 = require("../models/genUser"); // Assuming this is also TypeScript now
const config_json_1 = __importDefault(require("../config/config.json"));
const JWT_SECRET = config_json_1.default.JWT_SECRET || 'your_jwt_secret';
// Create a new user (Sign up)
const createUser = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Hash the password
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        // Save user in the database
        const user = { username, password: hashedPassword };
        yield genUser_1.GenUser.save(user);
        return { message: 'User Registered!' };
    }
    catch (err) {
        throw new Error('Error creating user: ' + err.message);
    }
});
exports.createUser = createUser;
// Find a user by username (for login)
const findUserByUsername = (username) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield genUser_1.GenUser.find(username);
        return result[0][0] || null;
    }
    catch (err) {
        throw new Error('Error finding user: ' + err.message);
    }
});
exports.findUserByUsername = findUserByUsername;
// Generate JWT token after successful login
const generateToken = (user) => {
    return jsonwebtoken_1.default.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
};
exports.generateToken = generateToken;
