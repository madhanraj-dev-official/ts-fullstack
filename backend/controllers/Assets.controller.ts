import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { imageMiddleware } from "../middleware/multer.middleware";
import { unlink } from "fs";

const prisma = new PrismaClient();

export async function getALlAssets(req: Request, res: Response) {
  try {
    console.log(req.url);
    const result = await prisma.asset.findMany();
    res.json({ success: true, data: result });
  } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}

export async function getOneAsset(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const result = await prisma.asset.findUnique({
      where: { id: parseInt(id) },
    });
    res.json({ success: true, data: result });
  } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}

export async function createAsset(req: Request, res: Response) {
  try {
    let filePath = "";
    let fileName = "";
    imageMiddleware(req, res, async (err) => {
      const { name } = req.body;

      if (err) {
        console.error(err);
        return res.status(500).json({ error: err });
      }
      if (!req.file) {
        return res.status(400).json({ error: "Please send file" });
      }
      filePath = req.file?.path;
      filePath = req.file?.filename;
      console.log(req.body.name);
      const result = await prisma.asset.create({
        data: { name, image: fileName, path: filePath },
      });
      res.json({ success: true, data: result });
    });
  } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}

export async function updateAsset(req: Request, res: Response) {
  try {
    let filePath = "";
    let fileName = "";
    imageMiddleware(req, res, async (err) => {
      const { id, name, path, image } = req.body;

      if (err) {
        console.error(err);
        return res.status(500).json({ error: err });
      }
      if (req.file) {
        filePath = req.file?.path;
        fileName = req.file?.filename;
      } else {
        filePath = path;
        fileName = image;
      }
      const result = await prisma.asset.update({
        where: { id: parseInt(id) },
        data: { name, image: fileName, path: filePath },
      });
      res.json({ success: true, data: result });
    });
  } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}

export async function deleteAsset(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const result = await prisma.asset.delete({ where: { id: parseInt(id) } });

    unlink(result.path, (err) => {
      console.log(err);
    });
    res.json({ success: true, data: result });
  } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}
