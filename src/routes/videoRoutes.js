import { Router } from "express";



//import router from '../router.js';
import validateVideo from '../controllers/videoControllers/validationVideo.js';
import uploadVideo from '../controllers/videoControllers/post.js';

const router = Router();
router.post('/videos', validateVideo, uploadVideo);

export default router ;