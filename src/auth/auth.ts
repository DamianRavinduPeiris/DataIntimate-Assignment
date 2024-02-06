import jwt from 'jsonwebtoken';
import { Request,Response ,NextFunction} from 'express';
import dotenv from 'dotenv';
dotenv.config();

export function generateJWT(req:Request,res:Response,user:any){
    const token = jwt.sign(user,process.env.JWT_ACCESS_TOKEN as string);
    return res.status(200).json({message : "User Successfully Signed Up!",jwt :token});

}
export function authenticateToken(req:Request,res:Response,next:NextFunction){
    const authHeader = req.header('Authorization');
    const token = authHeader?.split(' ')[1];
    if(token==null)return res.status(401).json({"msg":"Token not found!"});
    jwt.verify(token,process.env.JWT_ACCESS_TOKEN as string,(err:Error,user:any)=>{
        if(err)return res.status(403).json({"msg":"Token not verified!",err});
        // Making user info available in the next middleware.
        req.body.user = user;
        next();
    })

}