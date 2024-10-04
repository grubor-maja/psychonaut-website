import express from 'express';
import {getAllFreeSessions,createFreeSession,deleteFreeSession} from '../controllers/freeSession.controller.js';

const router = express.Router();

router.get('/',getAllFreeSessions);
router.post('/',createFreeSession);
router.delete('/:id',deleteFreeSession);

export default router;