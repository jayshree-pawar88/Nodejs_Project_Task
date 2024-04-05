import  express  from "express"; 
import feedbackController from "../controller/feedback.controller";

const router = express.Router();

router.get('/getAllFeedback',feedbackController.getAllUsers);
router.post('/feedback',feedbackController.feedback);
router.put('/monitorFeedback',feedbackController.feedbackMonitor)

export default router;              

