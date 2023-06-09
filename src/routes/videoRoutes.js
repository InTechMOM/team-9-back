import { Router } from "express";

//import router from '../router.js';
import validateVideo from '../controllers/videos/validationVideo.js';
import uploadVideo from '../controllers/videos/post.js';
import { getVideos, getVideoById } from "../controllers/videos/getVideo.js";
import deleteVideo from "../controllers/videos/deleteVideo.js";
import { patchVideo } from "../controllers/videos/qualifications.js";
import { validateUpdateVideo } from "../controllers/videos/validationVideo.js";

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
 *         description:
 *           type: string
 *       example:
 *         url: www.youtube.com
 *         title: Video
 *         studentEmail: student@email.com
 *         teacherEmail: teacter@email.com
 *         description: Activity done correctly
 * 
 *     videos:
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
 *   name: videos
 *   description: API for Video
 * 
 * /videos/:
 *   post:
 *     summary: Create a new video
 *     tags: [videos]
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
 *               $ref: '#/components/schemas/videos'
 */

videoRouter.post('/videos', validateVideo, uploadVideo);

/**
 * @swagger
 * /videos/{id}:
 *   get:
 *     summary: Return the video of a student
 *     tags: [videos]
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
 *               $ref: '#/components/schemas/videos'
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
 *   name: videos
 *   description: API for video
 * 
 * /videos/:
 *   get:
 *     summary: Return all videos
 *     tags: [videos]
 *     responses:
 *       200:
 *         description: All video
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items: 
 *                 $ref: '#/components/schemas/videos'
 */

videoRouter.get('/videos', getVideos);

/**
* @swagger
* /videos/{id}:
*   delete:
*     summary: Delete user
*     tags: [videos]
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
*               $ref: '#/components/schemas/videos'
*/
videoRouter.delete("/videos/:id", deleteVideo);
videoRouter.patch("/videos/:id/qualification", validateUpdateVideo, patchVideo);


export default videoRouter;