import mysql from "../utilities/dbConnection";
import BaseModel from "./baseModel"

 class userModel extends BaseModel{
     role_id: any;
     user_id: any;
    constructor(){
    super();  
    }
   
    async addUser(data:any) {
        return await this._executeQuery(`INSERT INTO user SET ?`, [data]);
    }

    async loginUser(email:any){
        return await this._executeQuery(`SELECT * FROM user WHERE email =?`,[email]);
    }

    async getUser(){
        return await this._executeQuery(`SELECT * FROM user`,[])
    }

    async editUser(data:any,id:any){
        return await this._executeQuery(`UPDATE user SET ? WHERE user_id = ?`,[data,id]);
    }

    async deleteUser(user_id:any){
        return await this._executeQuery(`UPDATE user SET status=0 WHERE user_id = ?`,[user_id]);
    }
   
    async getSingleUser(user_id:any){
        return await this._executeQuery(`SELECT * FROM user WHERE user_id = ?`,[user_id]);
    }

    async fetchUser(user_id:any){
        return await this._executeQuery(`SELECT * FROM user WHERE user_id = ?`,[user_id]);
    }

     
}

export default new userModel();
