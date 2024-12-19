import { Router } from 'express';
import { createStudent, deleteStudent, getALlStudent, getOneStudent, updateStudent } from '../controllers/Student.controller';

const student = Router()

student.get('/',getALlStudent)
student.get('/:id',getOneStudent)
student.post('/',createStudent)
student.put('/:id',updateStudent)
student.delete("/:id",deleteStudent)



export default student