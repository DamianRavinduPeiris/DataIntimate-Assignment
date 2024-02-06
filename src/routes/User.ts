import express,{Request,Response} from 'express';
import mysql from 'mysql';

const router = express.Router();
const userRouter = (connection : mysql.Connection | null)=>{
    router.post('/saveUser',(req:Request,res:Response)=>{
    
    }); 
    return router;

}

export default userRouter;


