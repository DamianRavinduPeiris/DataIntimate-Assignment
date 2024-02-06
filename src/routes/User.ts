import express,{Request,Response} from 'express';
import mysql from 'mysql';

const router = express.Router();
const userRouter = (connection : mysql.Connection | null)=>{
    router.post('/saveUser',(req:Request,res:Response)=>{
        console.log('Request received to save the user : ',req.body)
        console.log(connection==null?'No connection':'Connection exists')
        connection?.query(`INSERT INTO user (id,name,username) VALUES ('${req.body.id}','${req.body.name}','${req.body.username}')`,(er,result)=>{
            if(er)res.json({message : `An error occurred while saving the user : ${er}`})
            else res.json({message : 'User saved successfully!'})

        })
    
    }); 
    return router;

}

export default userRouter;


