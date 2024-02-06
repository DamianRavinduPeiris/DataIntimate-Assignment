import express, { Request, Response } from "express";
import mysql from "mysql";
import readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
const dbConfig = require("./SqlConfig/MySqlConfig");
const app = express();
const connection = mysql.createConnection(dbConfig);


app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
connection.connect((err: Error) => {
  if (err) {
    console.log(err.message);
    
  } else {
    console.log("Connected to the database!");
    rl.question("Enter the host : ",(hostname:string)=>{
        rl.question("Enter the user : ",(username:string)=>{
            rl.question("Enter the password : ",(pw:string)=>{
                rl.question("Enter the database name : ",(dbName:string)=>{
                    const dbConfig = {
                        host : hostname,
                        user : username,
                        password:pw,
                        database:dbName
                    }
                    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`,(er,result)=>{
                        if(er){
                            console.log(er.message);

                        }else{
                            console.log("Database created successfully!");
                            connection.query(`USE ${dbName}`,(e,r)=>{
                                if(e){
                                    console.log(e.message);
                                }else{
                                    console.log("Database selected successfully!");
                                }
                            })
                        }
                    })

                })

            })

        })

        
    })
  }
});

app.get("/", (req, res) => {
  res.json({ msg: "Hello!" });
});
