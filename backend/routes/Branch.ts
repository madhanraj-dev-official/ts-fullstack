import { Router } from 'express';
import { createBranch, deleteBranch, getALlBranch, getOneBranch, updateBranch } from '../controllers/Branch.controller';

const branch = Router()

branch.get('/',getALlBranch)
branch.get('/:id',getOneBranch)
branch.post('/',createBranch)
branch.put('/:id',updateBranch)
branch.delete('/:id',deleteBranch)

export default branch