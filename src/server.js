import express from 'express'
import path,{dirname} from 'path'
import { fileURLToPath } from 'url'
import authRouter from './Routes/authRoute.js'
import db from './db.js';

const app=express()
const PORT=5003||process.env.PORT

// Get the file path
const filePath=fileURLToPath(import.meta.url)
// Now get the dir name
const __dirname=dirname(filePath)

//! Middleware Starts
  app.use(express.static(path.join(__dirname,'../public'))) //* Telling our app to load static files from that location.

  app.use(express.json()) //* Parse all incoming JSON payloads and populate req.body with a JavaScript object.

//! Middleware Ends

//! Routes start
  app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/home.html'))
  })


//! Routes end


app.use('/auth',authRouter)


app.listen(PORT,()=>console.log("Server has started in port",PORT));

