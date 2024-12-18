import { Request, Response, Router } from 'express';
import { createStaff, getALlStaff } from "../controllers/Staff.controller";


const staff = Router()

staff.get('/',getALlStaff)

staff.get('/:id',(req:Request,res:Response)=>{
        console.log(req.url)

    res.send("hello")
})

staff.post('/',createStaff)

staff.put('/',(req:Request,res:Response)=>{
        console.log(req.url)

    res.send("hello")
})

staff.delete('/',(req:Request,res:Response)=>{
        console.log(req.url)

    res.send("hello")
})



export default staff