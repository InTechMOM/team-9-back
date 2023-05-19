import { Router } from "express";

//import router from '../router.js';
import validateVideo from '../controllers/videoControllers/validationVideo.js';
import uploadVideo from '../controllers/videoControllers/post.js';
import { getVideos, getVideoById } from "../controllers/videoControllers/getVideo.js";
import deleteVideo from "../controllers/videoControllers/deleteVideo.js";
import { videoQualificationById } from "../controllers/videoControllers/qualifications.js";
import { updateVideoSchema } from "../controllers/videoControllers/validationVideo.js";

const videoRouter = Router();
videoRouter.post('/videos', validateVideo, uploadVideo);
videoRouter.get("/videos/:id", getVideoById);
videoRouter.get('/videos', getVideos);
videoRouter.delete("/videos/:id", deleteVideo);
videoRouter.put("/videos/qualification/:id", videoQualificationById);


export default videoRouter ;