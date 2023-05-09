import router from '../router.js';
import validateVideo from '../controllers/videoControllers/validationVideo.js';
import uploadVideo from '../controllers/videoControllers/post.js';

router.post('/videos', validateVideo, uploadVideo);

export {router as videoRouter} ;