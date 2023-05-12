import { Router } from "express";

//import router from '../router.js';
import validateVideo from '../controllers/videoControllers/validationVideo.js';
import uploadVideo from '../controllers/videoControllers/post.js';
import { getVideos, getVideoById } from "../controllers/videoControllers/getVideo.js";
import deleteVideo from "../controllers/videoControllers/deleteVideo.js";

const router = Router();
router.post('/videos', validateVideo, uploadVideo);
router.get("/videos/:id", getVideoById);
router.get('/videos', getVideos);
router.delete("/videos/:id", deleteVideo);

export default router ;