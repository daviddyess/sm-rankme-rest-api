import { Router } from 'express';
import SteamController from './../controllers/SteamController';

const router = Router();

router.get('/player', SteamController.getPlayerSummary);
router.get('/player/steamid', SteamController.getPlayerSteamID);

export default router;
