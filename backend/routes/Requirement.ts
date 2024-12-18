import { Router } from 'express';
import { createRequirement, deleteRequirement, getALlRequirement, getOneRequirement } from '../controllers/Requirement.controller';

const requirement = Router()



requirement.get('/',getALlRequirement)
requirement.get('/:id',getOneRequirement)
requirement.post('/',createRequirement)
requirement.delete('/:id',deleteRequirement)

export default requirement