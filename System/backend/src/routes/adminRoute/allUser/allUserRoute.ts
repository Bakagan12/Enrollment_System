import { Router } from 'express';
import * as allUser from '../../../controllers/adminController/allUserController/allUserController'


const router: Router = Router();

// router.post('/signup', signupValidation, authController.signup);

router.post('/departmental/user',allUser.registerDepartmentalUser );
router.post('/student/user',allUser.registerStudentUser );

export default router;