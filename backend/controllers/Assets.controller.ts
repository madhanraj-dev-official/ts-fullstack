import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { assetMiddleware } from "../middleware/multer.middleware";
import { rename } from "fs";

const prisma = new PrismaClient();

export function getALlAssets(req: Request, res: Response) {
  try {
    console.log(req.url);
    const result = async () => await prisma.asset.findMany();
    result().then((DATA) => res.json({ success: true, data: DATA }));
  } catch (e) {
    res.status(500).json({ success: false, data: " Asset failed" });
  }
}

export function getOneAsset(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const result = async () =>
      await prisma.asset.findUnique({ where: { id: parseInt(id) } });
    result().then((DATA) => res.json({ success: true, data: DATA }));
  } catch (e) {
    res.status(500).json({ success: false, data: " Asset failed" });
  }
}

export function createAsset(req: Request, res: Response) {
  try {
    let fileName = "";
    assetMiddleware(req, res, (err) => {
      const { name } = req.body;

      if (err) {
        console.error(err);
        return res.status(500).json({ error: err });
      }
      if (!req.file) {
        return res.status(400).json({ error: "Please send file" });
      }
      fileName = req.file?.path;
      const result = async () =>
        await prisma.asset.create({
          data: { image: fileName, name },
        });
      result().then((DATA) => res.json({ success: true, data: DATA }));
    });
  } catch (e) {
    res.status(500).json({ success: false, data: " Kid failed" });
  }
}


export function updateAsset(req: Request, res: Response) {
  try {
    let fileName = "";
    assetMiddleware(req, res, (err) => {
      const { id, image, name } = req.body;
      if (err) {
        console.error(err);
        return res.status(500).json({ error: err });
      }
      if (image) {
        fileName = image;
      }
      if (!req.file) {
        fileName = image;
      } else {
        fileName = req.file?.path;
      }
      rename(fileName,name,(err)=>{
        console.log(err)
      })
      const result = async () =>
        await prisma.asset.update({
          where: { id: parseInt(id) },
          data: { image: name, name },
        });
      result().then((DATA) => res.json({ success: true, data: DATA }));
    });
  } catch (e) {
    res.status(500).json({ success: false, data: " Asset failed" });
  }
}
