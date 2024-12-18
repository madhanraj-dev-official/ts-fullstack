import { Router } from 'express';
import { createClass, deleteClass, getALlClass, updateClass } from '../controllers/Class.controller';

const classes = Router()

classes.get('/',getALlClass)
classes.post('/',createClass)
classes.put('/:id',updateClass)
classes.delete("/:id",deleteClass)

export default classes