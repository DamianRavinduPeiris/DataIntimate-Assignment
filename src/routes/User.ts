import express,{Request,Response} from 'express';
export const router = express.Router();
router.post('/saveUser',(req:Request,res:Response)=>{
    console.log('Request received!');
}); 

