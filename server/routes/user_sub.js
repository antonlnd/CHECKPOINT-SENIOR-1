
import express from 'express';
import db from '../models';
const Message = db.model('message');
const User = db.model('user');

const router = express.Router();



export default router;
