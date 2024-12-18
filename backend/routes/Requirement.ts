import { Router } from 'express';

const requirement = Router()

requirement.get('/',(req,res)=>{
    console.log(req.url)

    res.send("hello")
})


export default requirement