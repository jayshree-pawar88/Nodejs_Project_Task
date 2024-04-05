
import feedbackModel from "../models/feedback.model";
const getAllUsers = async() => {
    
    try {
         console.log("service");
        const users = await feedbackModel.getUser();
        return users;
        
    } catch (error) {
        console.log(error);
    }
  }

  const feedback = async(body:any) =>{
    const users = await feedbackModel.feedback(body);
    return users;
  }

 const feedbackMonitor = async(body:any) =>{
        // console.log(body);
        let data = {} as any;
        
        if(body.status)data.status = body.status;
        if(body.feedback_desc)data.feedback_desc = body.feedback_desc;
        if(body.user_id)data.user_id = body.user_id;
        if(body.rating)data.rating = body.rating;
    
        const user = await feedbackModel.feedbackMonitor(data,body.id);
      
        if(!user) throw new Error ('Error Occurred while updating user..!');
        return data;
    }

export default{ getAllUsers,feedback,feedbackMonitor}