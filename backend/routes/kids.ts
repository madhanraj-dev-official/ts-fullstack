import { Router } from 'express';
import { createKid, deleteKid, getALlKids, getOneKid, updateKid } from '../controllers/kids.controller';

const kids = Router()



kids.get('/',getALlKids)
kids.get('/:id',getOneKid)
kids.post('/',createKid)
kids.put('/:id',updateKid)
kids.delete('/:id',deleteKid)

export default kids