"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.logout = exports.signup = exports.login = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const express_validator_1 = require("express-validator");
const userService = __importStar(require("../../services/UserService/userService"));
//Define routes on every role
const roleRoutes = {
    1: '/dashboard', // Admin
    2: '/owner', // Owner
    3: '/principal', // Principal
    4: '/principal', // Assistant Principal
    5: '/registrar', // Registrar
    6: '/registrar', // Assistant Registrar
    7: '/accounting', // Accountancy
    8: '/accounting', // Assistant Accountancy
    9: '/guidance', // Guidance Counselor
    10: '/guidance', // Assistant Guidance Counselor
    11: '/nurse', // Nurse
    12: '/student', // Student
    13: '/guardian', // Guardian
    14: '/teacher', // Teacher
};
//Login
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
    }
    const { username, password } = req.body;
    try {
        const user = yield userService.findUserByUsername(username);
        if (!user) {
            res.status(401).json({ message: 'Invalid username' });
            return;
        }
        const isMatch = yield bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            res.status(401).json({ message: 'Invalid password' });
            return;
        }
        // Generate JWT token with user data and role
        const token = userService.generateToken(user);
        // Get the role route based on the user's role
        const redirectUrl = roleRoutes[user.user_role_id] || '/default-route';
        // Send response with token and redirect URL
        res.json({
            message: 'Login successful',
            token,
            redirectUrl,
        });
    }
    catch (err) {
        const error = err;
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
});
exports.login = login;
// Sign up
const signup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
    }
    const { person_id, guardian_id, username, password, user_role_id, status_id, is_emailed, is_deleted, is_deleted_by } = req.body;
    try {
        const result = yield userService.createUser(person_id, guardian_id, username, password, user_role_id, status_id, is_emailed, is_deleted, is_deleted_by);
        res.status(201).json(result);
    }
    catch (err) {
        const error = err;
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error);
    }
});
exports.signup = signup;
// Login
// export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         res.status(422).json({ errors: errors.array() });
//         return;
//     }
//     const { username, password }: { username: string; password: string } = req.body;
//     try {
//         const user = await userService.findUserByUsername(username);
//         if (!user) {
//             res.status(401).json({ message: 'Invalid username' });
//             return;
//         }
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             res.status(401).json({ message: 'Invalid password' });
//             return;
//         }
//         const token = userService.generateToken(user);
//         res.json({
//             message: 'Login successful',
//             token,
//             redirectUrl: '/dashboard',
//         });
//     } catch (err) {
//         const error = err as CustomError;
//         if (!error.statusCode) {
//             error.statusCode = 500;
//         }
//         next(error);
//     }
// };
// Logout
const logout = (req, res) => {
    res.json({ message: 'Logged out successfully' });
};
exports.logout = logout;
