import {Request,Response} from "express"
import db from "../models";

const uploadContoller=async (req:Request,res:Response)=>{
    try{
      const {userName,language,sourceCode,input}=req.body;
      
      const data=await db.code.create({userName,language,sourceCode,input});
      

      return res.status(201).json({
        status:"success",
        data:data
       });
    }catch(error){
       return res.status(500).json({
        status:"fail",
        error:error.message || "Internal server error"
       })
    }
}

export default uploadContoller;