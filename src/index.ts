import express, { Request, Response } from "express";
import mysql from "mysql";
import readline from "readline";
import dotenv from 'dotenv';
dotenv.config();

import router  from './routes/User';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

const app = express();
let conncetion :null|mysql.Connection =null;
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
  
   

});

rl.question("Enter the host : ",(hostname:string)=>{
    rl.question("Enter the user : ",(username:string)=>{
        rl.question("Enter the password : ",(pw:string)=>{
            rl.question("Enter the database name : ",(dbName:string)=>{
               const dbConfig = {
                    host: hostname,
                    user: username,
                    password: pw,
                    database: dbName
                };


                conncetion = mysql.createConnection(dbConfig);
                conncetion.connect((er: Error) => {
                    if (er) console.log('An error occurred while connecting to the database : ', er.message);
                    else console.log('Connected to the database successfully!');
                    createAndUseDatabase(dbName, conncetion);
                });
                

            })

        })

    })

    
})

function createAndUseDatabase(dbName :string,connection:null|mysql.Connection){
    connection?.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`,(er,result)=>{
        if(er){
            console.log(er.message);

        }else{
            console.log("Database created successfully!");
            connection.query(`USE ${dbName}`,(e,r)=>{
                if(e){
                    console.log(e.message);
                }else{
                    console.log("Database selected successfully!");
                    connection.query(`CREATE TABLE IF NOT EXISTS user (id VARCHAR(255) PRIMARY KEY,name VARCHAR(255),username VARCHAR(255),password VARCHAR(255))`,(er,result)=>{
                        if(er){
                            console.log(er.message);

                        }else{
                            console.log('Table created successfully!')
                            app.use('/user',router(conncetion));
                            console.log('Request to the /user endpoint to interact with the database')
                        }
                    })
                }
            })
        }
    })

}