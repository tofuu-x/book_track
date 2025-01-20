import { Router } from "express";
import bcrypt from 'bcryptjs';

const router=Router();

//* Save the username and password to the database.
//Todo: Take the password and hash it. (one way, suitable for securely storing password)(DONE)
//Todo: Save the username and hashed password to the database.

router.post('/register',(req,res)=>{
  const {username,password}=req.body
  const hashedPassword=bcrypt.hashSync(password,12)
  console.log(hashedPassword);
  res.json({token:'successful'})
})

router.post('/login',(req,res)=>{
  const {username,password}=req.body
  res.json('OKsdfsd')
})



export default router;