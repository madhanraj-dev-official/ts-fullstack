import { Router } from 'express';
import { createEvent, deleteEvent, getALlEvent, updateEvent } from '../controllers/Event.controller';

const event = Router()

event.get('/',getALlEvent)
event.post('/',createEvent)
event.put('/:id',updateEvent)
event.delete('/:id',deleteEvent)


export default event