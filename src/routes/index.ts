import { Router } from "express";
const router = Router();
import userRoute from '../routes/user.routes';
import feedbackRoute from '../routes/feedback.routes';

router.use('/feedback',feedbackRoute);
router.use('/user',userRoute);

export default router;