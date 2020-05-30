import { Router } from 'express';
import StatController from './../controllers/StatController';

const router = Router();

router.get('/', StatController.getAllPlayers);
router.get('/count', StatController.countAllPlayers);
router.get('/player/:id', StatController.getAPlayer);
router.get('/:id', StatController.getAStat);

export default router;
