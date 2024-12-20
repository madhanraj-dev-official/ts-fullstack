import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { TestimonialAssetsMiddleware } from "../middleware/multer.middleware";
import { unlink } from "fs";


const prisma = new PrismaClient();
const stringToBool = (str:string) => str.toLowerCase() === 'true';
export async function getALlKids(req: Request, res: Response) {
  const {kid} = req.query
  try {
    console.log(req.url);
    const result =  await prisma.kids.findMany({where:{testimonial:stringToBool(`${kid}`)}});
    res.json({ success: true, data: result });
  } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}

export async function getOneKid(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const result = await prisma.kids.findUnique({ where: { id: parseInt(id) } });
    res.json({ success: true, data: result });

  } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}

export async function createKid(req: Request, res: Response) {
  try {
    let filePath = "";
    let fileName = "";
    TestimonialAssetsMiddleware(req, res, async (err) => {
      const { testimonial,name } = req.body;

      if (err) {
        console.error(err);
        return res.status(500).json({ error: err });
      }
      if (!req.file) {
        return res.status(400).json({ error: "Please send file" });
      }
      filePath = req.file?.path;
      fileName = req.file?.filename;
      console.log(req.body.testimonial)
      const result = await prisma.kids.create({
          data: { testimonial:stringToBool(testimonial), image: fileName,path:filePath ,name},
        });
        res.json({ success: true, data: result });

      });
  } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}

export async function updateKid(req: Request, res: Response) {
  const {id} = req.params
  try {
    let filePath = "";
    let fileName = "";
    TestimonialAssetsMiddleware(req, res, async (err) => {
      const { testimonial,path,image ,name} = req.body;

      if (err) {
        console.error(err);
        return res.status(500).json({ error: err });
      }
      if (req.file) {
        filePath = req.file?.path;
        fileName = req.file?.filename;
      }else{
      filePath = path;
      fileName = image;
    }
      const result = await prisma.kids.update({
          where:{id:parseInt(id)},
          data: { testimonial:stringToBool(testimonial), image: fileName ,path: filePath,name},
        });
        res.json({ success: true, data: result });

      });
    } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}

export async function deleteKid(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const result = await prisma.kids.delete({ where: { id: parseInt(id) } });
      unlink(result.path,(err)=>{console.log(err)})
      res.json({ success: true, data: result });
    } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}
