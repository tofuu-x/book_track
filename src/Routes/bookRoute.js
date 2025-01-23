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
    insertStatement.run(book_name,req.id)
    
    res.json({message:'successful'})
  }catch(error){
    console.log(error)
  }
})

router.delete('/:id',(req,res)=>{
  const {id}=req.params
  console.log(id)
  try{
    const deleteStatement=db.prepare(`DELETE FROM books WHERE id=(?)`)
    deleteStatement.run(id)
    res.status(200).send()
  }catch(error){
    console.log(error)
    res.status(500).send()
  }
  

})



export default router;