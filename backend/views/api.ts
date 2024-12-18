import { Router } from 'express';

const api = Router()

//apis
import staff from '../routes/Staff';
import requirement from '../routes/Requirement';
import branch from '../routes/Branch';
import classes from '../routes/Class';
import student from '../routes/Student';
import course from '../routes/Course';
import event from '../routes/Event';
import file from '../routes/FileUpload';
import kids from '../routes/kids';
import assets from '../routes/Assets';


// routes
api.use('/staff',staff)
api.use('/requirement',requirement)
api.use('/branch',branch)
api.use('/class',classes)
api.use('/student',student)
api.use('/course',course)
api.use('/event',event)
api.use('/upload',file)
api.use('/kids',kids)
api.use('/assets',assets)


export default api