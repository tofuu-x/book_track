import { Router } from "express";
import db from '../db.js';

const router=Router();

router.get('/',(req,res)=>{
  try{
    const dataStatement=db.prepare(`SELECT * FROM books WHERE user_id=(?)`)
    const data=dataStatement.all(req.id)
    res.json(data)
  }catch(error){
    console.log(error)
  }
  
})

router.post('/',(req,res)=>{
  const {book_name}=req.body
  console.log(book_name)
  try{
    const insertStatement=db.prepare(`INSERT INTO books (book_name,user_id) VALUES (?,?)`)
    const book=insertStatement.run(book_name,req.id)
    console.log(book)
    res.json({message:'successful'})
  }catch(error){
    console.log(error)
  }
})



export default router;