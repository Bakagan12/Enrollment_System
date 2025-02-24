"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_json_1 = __importDefault(require("../config/config.json"));
const JWT_SECRET = config_json_1.default.JWT_SECRET || 'your_jwt_secret';
const roleAuth = (allowedRoles) => {
    return (req, res, next) => {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            res.status(403).json({ message: 'Token required' });
            return;
        }
        try {
            const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
            if (!decoded || !allowedRoles.includes(decoded.role)) {
                res.status(403).json({ message: 'Access denied' });
                return;
            }
            // Added role-based check here
            if (allowedRoles.includes(decoded.role)) {
                console.log('User has required role');
            }
            next();
        }
        catch (err) {
            res.status(403).json({ message: 'Invalid token' });
            return;
        }
    };
};
exports.roleAuth = roleAuth;
