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
exports.registerUser = void 0;
const allUsersService_1 = require("../../../services/adminService/allUsers/allUsersService");
// export class allUserController{
//     static async allUsersController(req: any, res: any):Promise<void>{
//         try {
//             const users = await allUserService.getAllUsers();
//             res.status(200).json(users);
//         } catch (error) {
//             res.status(500).json({ message: 'Error fetching users' });
//         }
//     }
// }
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const person = req.body.person;
        const user = req.body.user;
        // Call the service to register the user
        const result = yield (0, allUsersService_1.registerNewDepartmentalUser)(person, user);
        res.status(201).json(result);
    }
    catch (err) {
        console.error('Error registering user:', err);
        // Send error response
        res.status(500).json({
            message: 'Error registering departmental user',
            error: (err instanceof Error) ? err.message : err,
        });
    }
});
exports.registerUser = registerUser;
