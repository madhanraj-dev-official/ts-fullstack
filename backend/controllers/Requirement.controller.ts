import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import {resumeMiddleware } from "../middleware/multer.middleware";
import { unlink } from "fs";

const prisma = new PrismaClient();

export function getALlRequirement(req: Request, res: Response) {
  try {
    console.log(req.url);
    const result = async () => await prisma.requirement.findMany();
    result().then((DATA) => res.json({ success: true, data: DATA }));
  } catch (e) {
    res.status(500).json({ success: false, data: " Requirement failed" });
  }
}

export function getOneRequirement(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const result = async () =>
      await prisma.requirement.findUnique({ where: { id: parseInt(id) } });
    result().then((DATA) => res.json({ success: true, data: DATA }));
  } catch (e) {
    res.status(500).json({ success: false, data: " Requirement failed" });
  }
}

export function createRequirement(req: Request, res: Response) {
  try {
    let fileName = "";
    resumeMiddleware(req, res, (err) => {
      const { name, email, phone, apply, experience, interest1, interest2} = req.body;

      if (err) {
        console.error(err);
        return res.status(500).json({ error: err });
      }
      if (!req.file) {
        return res.status(400).json({ error: "Please send file" });
      }
      fileName = req.file?.path;
      const result = async () =>
        await prisma.requirement.create({
          data: { name, email, phone, apply, experience, interest1, interest2, cover:fileName},
        });
      result().then((DATA) => res.json({ success: true, data: DATA }));
    });
  } catch (e) {
    res.status(500).json({ success: false, data: " Requirement failed" });
  }
}


export function deleteRequirement(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const result = async () =>
      await prisma.requirement.delete({ where: { id: parseInt(id) } });
    result().then((DATA) =>{
      unlink(DATA.cover,(err)=>{console.log(err)})
      res.json({ success: true, data: DATA })});
  } catch (e) {
    res.status(500).json({ success: false, data: " Requirement failed" });
  }
}
