import { Router } from 'express';
import { createCourse, deleteCourse, getALlCourse, getOneCourse, updateCourse } from '../controllers/Course.controller';

const course = Router()

course.get('/',getALlCourse);
course.get('/:id',getOneCourse)
course.post('/',createCourse)
course.put('/:id',updateCourse)
course.delete('/:id',deleteCourse)

export default course