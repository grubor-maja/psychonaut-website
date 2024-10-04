import express from 'express';
import {getAllContactMessages,createContactMessage,deleteContactMessage} from '../controllers/contactMessage.controller.js';
const router = express.Router();

router.get('/',getAllContactMessages);
router.post('/',createContactMessage);
router.delete('/:id',deleteContactMessage);

export default router;