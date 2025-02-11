import { allUserRepo } from "../../../repository/adminRepository/allUsers";

export class allUserService{
    static async getAllUsers():Promise<any>{
        try{
            const user = await allUserRepo.findAllUsers();
            return user;
        }catch(err){
            console.error('Error fecthing all users:', err);
            throw err;
        }
    }
}