import { Request, Response } from 'express';
import UserService from '../services/user.service';

const addUser = async(req: Request, res: Response)=> {
    try {
      const users = await UserService.addUser(req.body);
      res.status(200).json({ status:200, message : 'insert data succesfully', data : users});
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }

  const editUser = async(req: Request, res:Response)=>{
    try{
        const users = await UserService.editUser(req.body);
        res.status(200).json({status:200, message : 'edit successfully',data : users });
    }catch(error){
        // console.log(error);
      res.status(400).json({ error : error});
    }
  }

  const getAllUsers = async(req: Request,res: Response) =>{
   try{
    console.log("getallroute");
     const users = await UserService.getAllUsers();
     res.status(200).json({status:200, message:'fetch all users successfully',data : users});
   }catch(error){
    res.status(400).json({error : error})
   }
  }

  const getSingleUser = async(req: Request, res: Response)=>{
      try{
         const users = await UserService.getSingleUser(req.query);
         console.log(users)
         res.status(200).json({status:200, message:'fetch user successfully',data : users})
      }catch(error){
        res.status(400).json({error: error})
      }
  }

  const fetchUser = async(req: Request, res: Response)=>{
    try{
      //@ts-ignore
      console.log(req.user)
       const users = await UserService.fetchUser(req);
       console.log(users)
       res.status(200).json({status:200, message:'fetch user successfully',data : users})
    }catch(error){
      res.status(400).json({error: error})
    }
}

  const deleteUser = async(req:Request,res : Response) =>{
    try{
       const users = await UserService.deleteUser(req);
       res.status(200).json({status:200, message:'user delete successfully',data : users});
    }catch(error){
        res.status(400).json({error : error});
    }
  }

  const loginUser = async(req: Request, res: Response)=> {
    try {
      const users = await UserService.loginUser(req.body);
      res.status(200).json({ status:200, message : 'login succesfully', data : users});
    } catch (error) {
      res.status(400).json({ error: error.message, statusCode:400 });
    }
  }

  export default {addUser,editUser,getAllUsers,deleteUser,loginUser,getSingleUser,fetchUser}