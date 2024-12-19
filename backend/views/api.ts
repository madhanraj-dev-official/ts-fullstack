import { Router } from 'express';

const api = Router()

//apis
import staff from '../routes/Staff';
import requirement from '../routes/Requirement';
import branch from '../routes/Branch';
import student from '../routes/Student';
import course from '../routes/Course';
import event from '../routes/Event';
import file from '../routes/FileUpload';
import kids from '../routes/kids';
import assets from '../routes/Assets';
// import auth from '../routes/Auth';


// routes
api.use('/staff',staff)
api.use('/requirement',requirement)
api.use('/branch',branch)
api.use('/student',student)
api.use('/course',course)
api.use('/event',event)
api.use('/upload',file)
api.use('/kids',kids)
api.use('/assets',assets)
// api.use('/login',auth)

export default api