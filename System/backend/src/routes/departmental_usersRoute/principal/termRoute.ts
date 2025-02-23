import { Router } from "express";
import * as termController from '../../../controllers/departmental_usersController/principal/termController';

const router: Router = Router();


router.post('/term/create',termController.createTermByUser);
router.post('/term/update',termController.updatedTermByUser );
router.post('/term/delete',termController.deletedTermByUser );
router.get('/term/get_all_terms',termController.selectAllTermByUser );

export default router;