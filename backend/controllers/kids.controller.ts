import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { TestimonialAssetsMiddleware } from "../middleware/multer.middleware";
import { unlink } from "fs";

const prisma = new PrismaClient();

export function getALlKids(req: Request, res: Response) {
  try {
    console.log(req.url);
    const result = async () => await prisma.kids.findMany();
    result().then((DATA) => res.json({ success: true, data: DATA }));
  } catch (e) {
    res.status(500).json({ success: false, data: " Kid failed" });
  }
}

export function getOneKid(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const result = async () =>
      await prisma.kids.findUnique({ where: { id: parseInt(id) } });
    result().then((DATA) => res.json({ success: true, data: DATA }));
  } catch (e) {
    res.status(500).json({ success: false, data: " Kid failed" });
  }
}

export function createKid(req: Request, res: Response) {
  try {
    let fileName = "";
    TestimonialAssetsMiddleware(req, res, (err) => {
      const { testimonial } = req.body;

      if (err) {
        console.error(err);
        return res.status(500).json({ error: err });
      }
      if (!req.file) {
        return res.status(400).json({ error: "Please send file" });
      }
      fileName = req.file?.path;
      const result = async () =>
        await prisma.kids.create({
          data: { image: fileName, testimonial },
        });
      result().then((DATA) => res.json({ success: true, data: DATA }));
    });
  } catch (e) {
    res.status(500).json({ success: false, data: " Kid failed" });
  }
}

export function updateKid(req: Request, res: Response) {
  try {
    let fileName = "";
    TestimonialAssetsMiddleware(req, res, (err) => {
      const { id, image, testimonial } = req.body;
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
      const result = async () =>
        await prisma.kids.update({
          where: { id: parseInt(id) },
          data: { image: fileName, testimonial },
        });
      result().then((DATA) => res.json({ success: true, data: DATA }));
    });
  } catch (e) {
    res.status(500).json({ success: false, data: " Kid failed" });
  }
}

export function deleteKid(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const result = async () =>
      await prisma.kids.delete({ where: { id: parseInt(id) } });
    result().then((DATA) => {
      unlink(DATA.image, (err) => {
        console.log(err);
      });
      res.json({ success: true, data: DATA });
    });
  } catch (e) {
    res.status(500).json({ success: false, data: " Kid failed" });
  }
}
