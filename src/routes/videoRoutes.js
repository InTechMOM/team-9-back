import { Router } from "express";

//import router from '../router.js';
import validateVideo from '../controllers/videos/validationVideo.js';
import uploadVideo from '../controllers/videos/post.js';
import { getVideos, getVideoById } from "../controllers/videos/getVideo.js";
import deleteVideo from "../controllers/videos/deleteVideo.js";
import { patchVideo } from "../controllers/videos/qualifications.js";
import { validateUpdateVideo } from "../controllers/videos/validationVideo.js";

const videoRouter = Router();
videoRouter.post('/videos', validateVideo, uploadVideo);
videoRouter.get("/videos/:id", getVideoById);
videoRouter.get('/videos', getVideos);
videoRouter.delete("/videos/:id", deleteVideo);
videoRouter.patch("/videos/:id/qualification", validateUpdateVideo, patchVideo);


export default videoRouter ;