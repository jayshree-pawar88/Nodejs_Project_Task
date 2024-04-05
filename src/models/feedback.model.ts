import mysql from "../utilities/dbConnection";
import BaseModel from "./baseModel"

 class feedbackModel extends BaseModel{
     feedback_id: any;
     user_id: any;
    constructor(){
    super();  
    }
   
    async getUser(){
        return await this._executeQuery(`SELECT * FROM feedback`,[])
    }

    async feedback(data:any) {
        return await this._executeQuery(`INSERT INTO feedback SET ?`, [data])
    }

    async feedbackMonitor(data:any,id:any) {
        return await this._executeQuery(`UPDATE feedback SET ? WHERE feedback_id = ?`,[data,id]);
    }
  
}

export default new feedbackModel();
