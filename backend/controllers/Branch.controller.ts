import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { imageMiddleware } from "../middleware/multer.middleware";
import { unlink } from "fs";

const prisma = new PrismaClient();

export async function getALlBranch(req: Request, res: Response) {
  try {
    console.log(req.url);
    const result = await prisma.branches.findMany();
    res.json({ success: true, data: result })
  } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}

export async function getOneBranch(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const result = await prisma.branches.findUnique({ where: { id: parseInt(id) } });
    res.json({ success: true, data: result })
  } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}

export async function createBranch(req: Request, res: Response) {
  try {
    let filePath = "";
    let fileName = "";
    imageMiddleware(req, res, async (err) => {
      const { name, description } = req.body;

      if (err) {
        console.error(err);
        return res.status(500).json({ error: err });
      }
      if (!req.file) {
        return res.status(400).json({ error: "Please send file" });
      }
      filePath = req.file?.path;
      fileName = req.file?.filename;
      console.log(req.body.name)
      const result = await prisma.branches.create({
          data: { name, description, image: fileName,path:filePath },
        });
      res.json({ success: true, data: result })
    });
  } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}

export async function updateBranch(req: Request, res: Response) {
  try {
    let filePath = "";
    let fileName = "";
    const {id }= req.params
    imageMiddleware(req, res, async (err) => {
      const { name, description,path,image } = req.body;

      if (err) {
        console.error(err);
        return res.status(500).json({ error: err });
      }
      if (req.file) {
        filePath = req.file?.path;
        fileName = req.file?.filename;
        const del =   await prisma.branches.findUnique({
            where:{id:parseInt(id)},
          });
      unlink(`${del?.path}`,(err)=>{if(err){console.log(err)}})
      }else{
      filePath = path;
      fileName = image;
    }
      const result = await prisma.branches.update({
          where:{id:parseInt(id)},
          data: {id:parseInt(id), name, description, image: fileName ,path: filePath},
        });
      res.json({ success: true, data: result })
    });
  } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}

export async function deleteBranch(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const result = await prisma.branches.delete({ where: { id: parseInt(id) } });
      unlink(result.path,(err)=>{console.log(err)})
      res.json({ success: true, data: result })
  } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}
