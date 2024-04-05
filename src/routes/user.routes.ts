import  express  from "express"; 
import UserController from '../controller/user.controller';
const router = express.Router();

//console.log("inside route");
router.post('/addUser',UserController.addUser);
router.put('/editUser',UserController.editUser);
router.get('/viewAllUser',UserController.getAllUsers);
router.delete('/deleteUser',UserController.deleteUser);
router.post('/login',UserController.loginUser);
router.get('/getUser',UserController.getSingleUser);
router.get('/fetchUserDetail',UserController.fetchUser);

export default router;              

