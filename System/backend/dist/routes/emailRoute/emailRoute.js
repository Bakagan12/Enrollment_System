"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// backend/src/routes/emailRoute/emailRoute.ts
const express_1 = __importDefault(require("express"));
const emailController_1 = require("../../controllers/emailController/emailController");
const router = express_1.default.Router();
// POST route to send email
router.post('/send', emailController_1.sendTestEmail);
exports.default = router;
