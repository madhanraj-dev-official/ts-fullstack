import { Router } from 'express';
import { login } from '../controllers/Auth.controller';

const auth = Router()



auth.post('/',login)


export default auth