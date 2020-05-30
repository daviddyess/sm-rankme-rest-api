import { Router } from 'express';
import StatusController from './../controllers/StatusController';

const router = Router();

router.get('/', StatusController.getServerStatus);

export default router;
