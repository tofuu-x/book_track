import { Router } from "express";
import bcrypt from 'bcryptjs';
import db from '../db.js'
import jwt from 'jsonwebtoken'

const router=Router();

//* Save the username and password to the database.
//Todo: See if the username is taken or not
//Todo: Take the password and hash it. (one way, suitable for securely storing password)(DONE)
//Todo: Save the username and hashed password to the database.

router.post('/register',(req,res)=>{
  const {username,password}=req.body

  try{
    const lookupStatement=db.prepare('SELECT * FROM users WHERE username=(?)')
    const lookupResult=lookupStatement.get(username)
    if(lookupResult){
       return res.status(400).json({error:"Username already in use"})
    }
    const hashedPassword=bcrypt.hashSync(password,12)
    const registerStatement=db.prepare(`INSERT INTO users(username,password) VALUES (?,?)`)
    const insertedUser=registerStatement.run(username,hashedPassword);
    const token=jwt.sign({id:insertedUser.lastInsertRowid},process.env.JWT_SECRET_KEY,{expiresIn:'1d'})
    console.log(token)
    res.json({token:'successful'})
  }catch(error){
    console.log(error);
  }
  
})

router.post('/login',(req,res)=>{
  const {username,password}=req.body
  res.json('OKsdfsd')
})



export default router;