import { Router } from 'express';
import * as selectUsers from '../../../controllers/adminController/selectUserController/selectUserController'

const router: Router = Router();

router.get('/select/all_students',selectUsers.fetchAllStudents );
router.get('/select/all_teachers',selectUsers.fetchAllTeachers );

export default router;