import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { imageMiddleware } from "../middleware/multer.middleware";
import { unlink } from "fs";

const prisma = new PrismaClient();

export function getALlBranch(req: Request, res: Response) {
  try {
    console.log(req.url);
    const result = async () => await prisma.branches.findMany();
    result().then((DATA) => res.json({ success: true, data: DATA }));
  } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}

export function getOneBranch(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const result = async () =>
      await prisma.branches.findUnique({ where: { id: parseInt(id) } });
    result().then((DATA) => res.json({ success: true, data: DATA }));
  } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}

export function createBranch(req: Request, res: Response) {
  try {
    let fileName = "";
    imageMiddleware(req, res, (err) => {
      const { name, description } = req.body;

      if (err) {
        console.error(err);
        return res.status(500).json({ error: err });
      }
      if (!req.file) {
        return res.status(400).json({ error: "Please send file" });
      }
      fileName = req.file?.path;
      console.log(req.body.name)
      const result = async () =>
        await prisma.branches.create({
          data: { name, description, image: fileName },
        });
      result().then((DATA) => res.json({ success: true, data: DATA }));
    });
  } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}

export function updateBranch(req: Request, res: Response) {
  try {
    let fileName = "";
    imageMiddleware(req, res, (err) => {
      const { id ,name, description } = req.body;

      if (err) {
        console.error(err);
        return res.status(500).json({ error: err });
      }
      if (!req.file) {
        return res.status(400).json({ error: "Please send file" });
      }
      fileName = req.file?.path;
      const result = async () =>
        await prisma.branches.update({
          where:{id:parseInt(id)},
          data: { name, description, image: fileName },
        });
      result().then((DATA) => res.json({ success: true, data: DATA }));
    });
  } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}

export function deleteBranch(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const result = async () =>
      await prisma.branches.delete({ where: { id: parseInt(id) } });
    result().then((DATA) =>{
      unlink(DATA.image,(err)=>{console.log(err)})
      res.json({ success: true, data: DATA })});
  } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}
