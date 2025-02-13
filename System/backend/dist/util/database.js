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
exports.testDbConnection = testDbConnection;
const promise_1 = __importDefault(require("mysql2/promise"));
const config_json_1 = __importDefault(require("../config/config.json"));
// Create a MySQL connection pool
const pool = promise_1.default.createPool({
    host: config_json_1.default.host,
    user: config_json_1.default.user,
    database: config_json_1.default.database,
    password: config_json_1.default.password
});
// Function to test the database connection
function testDbConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connection = yield pool.getConnection();
            console.log('Database connected successfully!');
            connection.release();
        }
        catch (err) {
            console.error('Database connection failed:', err);
        }
    });
}
// Export the pool for use in other modules
exports.default = pool;
