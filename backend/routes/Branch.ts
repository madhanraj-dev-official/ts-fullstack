import { Router } from 'express';

const branch = Router()

branch.get('/',(req,res)=>{
    console.log(req.url)
    res.send("hello")
})


export default branch