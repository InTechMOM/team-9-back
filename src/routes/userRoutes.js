import {Router} from 'express';
import *as userControllers from '../controllers/users/userControllers.js';
import {createUserSchema, updateUserSchema} from '../controllers/users/validator.js';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Validator:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 * 
 *     createUserSchema:
 *       type: object
 *       required:
 *         - name
 *         - lastName
 *         - email
 *         - rol
 *       properties:
 *         name:
 *           type: string
 *         lastName:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *         rol:
 *           type: string
 *           enum: [student, teacher]
 *       example:
 *         name: Tatiana
 *         lastName: Martinez
 *         email: tmartinez@email.com
 *         rol: teacher
 * 
 *     updateUserSchema:
 *       type: object
 *       required:
 *         - name
 *         - lastName
 *       properties:
 *         name:
 *           type: string
 *         lastName:
 *           type: string
 *       example:
 *         name: Tatiana
 *         lastName: Martinez
 * 
 *     Users:
 *       type: object
 *       required:
 *         - name
 *         - lastName
 *         - email
 *         - rol
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated in MongoDb
 *         name:
 *           type: string
 *         lasName:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *         rol:
 *           type: string
 *           enum: [student, teacher]
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The update dates
 *       example:
 *         _id: 64653b8df9a4cb7645465e79
 *         name: Salome
 *         lastName: Bedoya
 *         email: Salomediferente32@correo.com
 *         rol: student
 *         createdAt: 2023-05-17T20:39:41.641Z
 *         updatedAt: 2023-05-17T20:39:41.641Z
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API for users
 * 
 * /users/:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createUserSchema'
 *     responses:
 *       200:
 *         description: New User created!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Internal Server Error
 */

router.post('/', createUserSchema, userControllers.createUsers);

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API for users
 * 
 * /users/:
 *   get:
 *     summary: Return all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: All users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items: 
 *                 $ref: '#/components/schemas/Users'
 */

router.get('/', userControllers.getUsers);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Return a user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: User
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Users'
 *       404:
 *         description: User not found
 *       422: 
 *         description: Invalid Id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Validator'
 */

router.get('/:usersId', userControllers.getUsersById);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update Users
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updateUserSchema'
 *     responses:
 *       200:
 *         description: User upload
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       404:
 *         description: User not found
 *       422: 
 *         description: Invalid Id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Validator'
 */

router.put('/:usersId', updateUserSchema, userControllers.updateUsersById);

/**
* @swagger
* /users/{id}:
*   delete:
*     summary: Delete user
*     tags: [Users]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: The user id
*     responses:
*       200:
*         description: User deleted
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Users'
*/

router.delete('/:userId', userControllers.deleteUsersById);

export default router;