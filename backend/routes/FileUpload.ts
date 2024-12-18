import { Request, Response, Router } from "express";
import { assetMiddleware, imageMiddleware, resumeMiddleware } from "../middleware/multer.middleware";
import { log } from "console";

const file = Router()

// image
file.post('/image',(req:Request,res:Response)=>{
    imageMiddleware(req, res, (err) => {
        log(req.file?.path)
        if (err) {
          console.error(err);
          return res.status(500).json({ error: err });
         }
        if (!req.file) {
           return res.status(400).json({ error: 'Please send file' });
         }
         console.log(req.file);
         res.send('File uploaded!');
     });
})

// resume
file.post('/resume',(req:Request,res:Response)=>{
    resumeMiddleware(req, res, (err) => {
        
        log(req.body)
        if (err) {
          console.error(err);
          return res.status(500).json({ error: err });
         }
        if (!req.file) {
           return res.status(400).json({ error: 'Please send file' });
         }
         console.log(req.file);
         res.send('File uploaded!');
     });
})

// assets
file.post('/assets',(req:Request,res:Response)=>{
    assetMiddleware(req, res, (err) => {
        log(req.body)
        if (err) {
          console.error(err);
          return res.status(500).json({ error: err });
         }
        if (!req.file) {
           return res.status(400).json({ error: 'Please send file' });
         }
         console.log(req.file);
         res.send('File uploaded!');
     });
})

export default file;