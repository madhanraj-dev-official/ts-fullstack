import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { resumeMiddleware } from "../middleware/multer.middleware";
import { unlink } from "fs";

const prisma = new PrismaClient();

export async function getALlRequirement(req: Request, res: Response) {
  try {
    console.log(req.url);
    const result = await prisma.requirement.findMany();
    res.json({ success: true, data: result });
  } catch (e) {
    res.status(400).json({ success: false, data: " Requirement get failed" });
  }
}

export async function getOneRequirement(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const result = await prisma.requirement.findUnique({
      where: { id: parseInt(id) },
    });
    res.json({ success: true, data: result });
  } catch (e) {
    res
      .status(400)
      .json({ success: false, data: " Requirement get one failed" });
  }
}

export async function createRequirement(req: Request, res: Response) {
  try {
    let filePath = "";
    let fileName = "";
    resumeMiddleware(req, res, async (err) => {
      const { name, email, phone, apply, experience, interest1, interest2 } =
        req.body;

      if (err) {
        console.error(err);
        return res.status(400).json({ error: err });
      }
      if (!req.file) {
        return res.status(400).json({ error: "Please send file" });
      }
      filePath = req.file?.path;
      fileName = req.file?.filename;
      console.log(req.body.testimonial);
      const result = await prisma.requirement.create({
        data: {
          name,
          email,
          phone,
          apply,
          experience,
          interest1,
          interest2,
          pdf: fileName,
          path: filePath,
        },
      });
      res.json({ success: true, data: result });
    });
  } catch (e) {
    res
      .status(400)
      .json({ success: false, data: " Requirement create failed" });
  }
}

export async function deleteRequirement(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const result = await prisma.requirement.delete({
      where: { id: parseInt(id) },
    });
    unlink(result.path, (err) => {
      console.log(err);
    });
    res.json({ success: true, data: result });
  } catch (e) {
    res
      .status(400)
      .json({ success: false, data: " Requirement delete failed" });
  }
}
