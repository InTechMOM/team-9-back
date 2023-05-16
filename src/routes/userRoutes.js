import {Router} from 'express';
import *as userControllers from '../controllers/users/userControllers.js';
import {createUserSchema, updateUserSchema} from '../models/schema.js';

const router = Router();

router.post('/', createUserSchema, userControllers.createUsers);

router.get('/', userControllers.getUsers);

router.get('/:usersId', userControllers.getUsersById);

router.put('/:usersId', updateUserSchema, userControllers.updateUsersById);

router.delete('/:userId', userControllers.deleteUsersById);

export default router;