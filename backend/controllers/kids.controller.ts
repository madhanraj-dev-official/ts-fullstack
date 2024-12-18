import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { imageMiddleware } from "../middleware/multer.middleware";
import { unlink } from "fs";

const prisma = new PrismaClient();

export function getALlKids(req: Request, res: Response) {
  try {
    console.log(req.url);
    const result = async () => await prisma.kids.findMany();
    result().then((DATA) => res.json({ success: true, data: DATA }));
  } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}

export function getOneKids(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const result = async () =>
      await prisma.kids.findUnique({ where: { id: parseInt(id) } });
    result().then((DATA) => res.json({ success: true, data: DATA }));
  } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}

export function createKids(req: Request, res: Response) {
  try {
    let filePath = "";
    let fileName = "";
    imageMiddleware(req, res, (err) => {
      const { testimonial } = req.body;

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
      const result = async () =>
        await prisma.kids.create({
          data: { testimonial, image: fileName,path:filePath },
        });
      result().then((DATA) => res.json({ success: true, data: DATA }));
    });
  } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}

export function updateKids(req: Request, res: Response) {
  try {
    let filePath = "";
    let fileName = "";
    imageMiddleware(req, res, (err) => {
      const { id ,testimonial,path,image } = req.body;

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
      const result = async () =>
        await prisma.kids.update({
          where:{id:parseInt(id)},
          data: { testimonial, image: fileName ,path: filePath},
        });
      result().then((DATA) => res.json({ success: true, data: DATA }));
    });
  } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}

export function deleteKids(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const result = async () =>
      await prisma.kids.delete({ where: { id: parseInt(id) } });
    result().then((DATA) =>{
      unlink(DATA.path,(err)=>{console.log(err)})
      res.json({ success: true, data: DATA })});
  } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}
