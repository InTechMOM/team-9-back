import { Router } from "express";

//import router from '../router.js';
import validateVideo from '../controllers/videoControllers/validationVideo.js';
import uploadVideo from '../controllers/videoControllers/post.js';
import { getVideos, getVideoById } from "../controllers/videoControllers/getVideo.js";
import deleteVideo from "../controllers/videoControllers/deleteVideo.js";

const videoRouter = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     ValidatorVideo:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 * 
 *     createVideoSchema:
 *       type: object
 *       required:
 *         - url
 *         - title
 *         - studentEmail
 *         - teacherEmail
 *       properties:
 *         url:
 *           type: string
 *         title:
 *           type: string
 *         studentEmail:
 *           type: string
 *           format: email
 *         teacherEmail:
 *           type: string
 *           format: email
 *       example:
 *         url: www.youtube.com
 *         title: Video
 *         studentEmail: student@email.com
 *         teacherEmail: teacter@email.com
 * 
 *     Video:
 *       type: object
 *       required:
 *         - url
 *         - title
 *         - emailStudent
 *         - emailTeacher
 *         - description
 *         - timestamps
 *       properties:
 *         url:
 *           type: string
 *         title:
 *           type: string
 *         studentEmail:
 *           type: string
 *           format: email
 *         teacherEmail:
 *           type: string
 *           format: email
 *         description:
 *           type: string
 *         timestamps:
 *           description: The date automatic was added
 *       example:
 *         url: www.youtube.com
 *         title: Video
 *         emailStudent: student@email.com 
 *         emailTeacher: teacter@email.com
 *         description: video activity 3
 *         timestamps: 2023-05-17T20:39:41.641Z
 */

/**
 * @swagger
 * tags:
 *   name: Video
 *   description: API for Video
 * 
 * /Video/:
 *   post:
 *     summary: Create a new video
 *     tags: [Video]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createVideoSchema'
 *     responses:
 *       200:
 *         description: videoSaved
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Video'
 */

videoRouter.post('/videos', validateVideo, uploadVideo);

/**
 * @swagger
 * /Video/{id}:
 *   get:
 *     summary: Return the video of a student
 *     tags: [Video]
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
 *               $ref: '#/components/schemas/Video'
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ValidatorVideo'
 */

videoRouter.get("/videos/:id", getVideoById);

/**
 * @swagger
 * tags:
 *   name: Video
 *   description: API for video
 * 
 * /Video/:
 *   get:
 *     summary: Return all videos
 *     tags: [Video]
 *     responses:
 *       200:
 *         description: All video
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items: 
 *                 $ref: '#/components/schemas/Video'
 */

videoRouter.get('/videos', getVideos);

/**
* @swagger
* /Video/{id}:
*   delete:
*     summary: Delete user
*     tags: [Video]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*         description: The video with user id
*     responses:
*       200:
*         description: Video deleted
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Video'
*/
videoRouter.delete("/videos/:id", deleteVideo);

export default videoRouter ;