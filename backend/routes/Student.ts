import { Router } from 'express';
import { createStudent, deleteStudent, getALlStudent, getOneStudent, updateStudent } from '../controllers/Student.controller';

const student = Router()

student.get('/:classId',getALlStudent)
student.get('/:classId/:roll',getOneStudent)
student.post('/',createStudent)
student.put('/:roll',updateStudent)
student.delete("/:roll",deleteStudent)



export default student