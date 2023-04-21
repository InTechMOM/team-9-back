import {Router} from 'express';
import *as userControllers from '../controllers/userControllers.js';
import {createUserSchema, updateUserSchema} from '../models/schema.js';

const router = Router();

router.post('/', createUserSchema, userControllers.createusers);

router.get('/', userControllers.getusers);

router.get('/:usersId', userControllers.getusersById);

router.put('/:usersId', updateUserSchema, userControllers.updateusersById);

router.delete('/:userId', userControllers.deleteusersById);

export default router;