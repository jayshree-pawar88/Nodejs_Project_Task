import { query } from "express";
import userModel  from "../models/user.model";
import Hashing from '../utilities/hashing';
import Encryption from "../utilities/Encryption";


const saveUser = async(body:any) => {
    const user = await userModel.addUser(body);
    if(!user) throw new Error ('Error Occurred while adding user..!');
    return true;

}

const addUser = async(req:any) => {
     try {
        req.password =  await Hashing.generateHash(req.password, 10);
        const users = await saveUser(req);
        return req;
        
    } catch (error) {
        console.log(error);
    }

}

const loginUser = async(body:any) =>{
        const users = await userModel.loginUser(body.email);
        console.log("User",users)
        if(!users.length)   throw new Error("user not found"); 
        const verifytPassword = await Hashing.verifypassword(body.password,users[0].password);
        if(!verifytPassword) throw new Error("password is Incoreect");
        console.log(verifytPassword);
        delete users[0].password;

        const JwtTokenGenerate = await Encryption.generateJwtToken({role_id:users[0].role_id,user_id:users[0].user_id});
        console.log(JwtTokenGenerate);
          return  JwtTokenGenerate 
   

  }

const getAllUsers = async() => {
    
    try {
         console.log("service");
        const users = await userModel.getUser();
        return users;
        
    } catch (error) {
        console.log(error);
    }

  }

  const getSingleUser = async(body:any) =>{
    try{
        const users = await userModel.getSingleUser(body.user_id);
        return users

    }catch(error){
        console.log(error);
    }
  }

  const fetchUser = async(req:any) =>{
    try{
        console.log(req.user);
        const users = await userModel.fetchUser(req.user.user_id);
        return users

    }catch(error){
        console.log(error);
    }
  }
  
const editUser = async(body:any) => {
    // console.log(body);
    let data = {} as any;
    
    if(body.name)data.name = body.name;
    if(body.email)data.email = body.email;
    if(body.password)data.password = body.password;
    
    const user = await userModel.editUser(data,body.id);
  
    if(!user) throw new Error ('Error Occurred while editing user..!');
    return data;

}

  const deleteUser = async(req:any) =>{
     console.log(req.query.user_id);
       
        const users = await userModel.deleteUser(req.query.user_id);
        console.log(users);
        if(users.length == 0){
            throw new Error("Failed to delete user");
        }
        return users;
    }
  
  

  
  
export default{ addUser,editUser,getAllUsers,deleteUser,loginUser,getSingleUser,fetchUser}