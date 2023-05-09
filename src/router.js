import { Router } from "express";
import { videoRouter }  from '../src/routes/videoRoutes.js';



const router = Router();

router.use('/', videoRouter);

export default router;
