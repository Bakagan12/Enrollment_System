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
const knex_1 = __importDefault(require("knex"));
const config_json_1 = __importDefault(require("../config/config.json")); // Your DB config
// Initialize Knex.js with MySQL2 client
const db = (0, knex_1.default)({
    client: 'mysql2',
    connection: {
        host: config_json_1.default.host,
        user: config_json_1.default.user,
        database: config_json_1.default.database,
        password: config_json_1.default.password,
    },
    pool: { min: 2, max: 10 } // You can configure pool size
});
// Function to test the database connection using Knex
function testDbConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Test a simple select query to check connection
            yield db.raw('SELECT 1 + 1 AS result');
            console.log('Database connected successfully!');
        }
        catch (err) {
            console.error('Database connection failed:', err);
        }
    });
}
// Export the Knex instance for use in other modules
exports.default = db;
