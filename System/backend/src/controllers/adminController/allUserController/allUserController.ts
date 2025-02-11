import { allUserService } from "../../../services/adminService/allUsers/allUsers";


export class allUserController{
    static async allUsersController(req: any, res: any):Promise<void>{
        try {
            const users = await allUserService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching users' });
        }
    }
}