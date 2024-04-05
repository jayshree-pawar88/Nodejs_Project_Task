import { Request, Response } from 'express';
import feedbackService from '../services/feedback.service';

  const getAllUsers = async(req: Request,res: Response) =>{
   try{
     const users = await feedbackService.getAllUsers();
     res.status(200).json({status:200, message:'fetch all users successfully',data : users});
   }catch(error){
    res.status(400).json({error : error})
   }
  }
  
  const feedback = async(req: Request,res: Response) =>{
    try{
      const users = await feedbackService.feedback(req.body);
      res.status(200).json({status:200, message:'Getting feedback successfully',data : users});
    }catch(error){
     res.status(400).json({error : error})
    }
   }

   const feedbackMonitor = async(req: Request, res: Response)=> {
    try {
      const users = await feedbackService.feedbackMonitor(req.body);
      res.status(200).json({ status:200, message : 'insert data succesfully', data : users});
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }

  export default {getAllUsers,feedback,feedbackMonitor}