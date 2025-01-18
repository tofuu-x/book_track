import { Router } from "express";

const router=Router();

router.post('/login',(req,res)=>{
  const {username,password}=req.body
  console.log(username,password)
  res.json('OKsdfsd')
})

router.post('/register',(req,res)=>{
  const {username,password}=req.body
  console.log(username,password)
  res.json('Logged in')
})


export default router;