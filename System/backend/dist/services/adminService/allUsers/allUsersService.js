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
exports.registerNewDepartmentalUser = void 0;
const allUsers_1 = require("../../../repository/adminRepository/allUsers");
// export class allUserService{
//     static async getAllUsers():Promise<any>{
//         try{
//             const user = await allUserRepo.findAllUsers();
//             return user;
//         }catch(err){
//             console.error('Error fecthing all users:', err);
//             throw err;
//         }
//     }
// }
const registerNewDepartmentalUser = (person, user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield allUsers_1.allUserRepo.RegisterNewDepartmentalUser(user, person);
        return { message: 'User Registered!' };
    }
    catch (err) {
        throw new Error('Error creating departmental user: ' + err.message);
    }
});
exports.registerNewDepartmentalUser = registerNewDepartmentalUser;
