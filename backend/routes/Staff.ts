import { Router } from 'express';
import { createStaff, deleteStaff, getALlStaff, getOneStaff, updateStaff } from "../controllers/Staff.controller";


const staff = Router()

staff.get('/',getALlStaff)

staff.get('/:id',getOneStaff)

staff.post('/',createStaff)

staff.put('/:id',updateStaff)

staff.delete('/:id',deleteStaff)



export default staff