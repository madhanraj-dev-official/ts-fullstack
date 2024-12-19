import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export async function getALlCourse(req: Request, res: Response) {
  console.log(req.url);
  try {
    const result = await prisma.courses.findMany();
    res.json({ success: true, data: result })
  } catch (e) {
    res.status(400).json({ success: false, data: "no data" });
  }
}

export async function getOneCourse(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const result = await prisma.courses.findUnique({ where: { id: parseInt(id) } });
    res.json({ success: true, data: result })
  } catch (error) {
    res.status(400).json({ success: false, data: "no data" });
  }
}

export async function createCourse(req: Request, res: Response) {
  const { name, description } = req.body;
  try {
    const result = await prisma.courses.create({ data: { name, description } });
    res.json({ success: true, data: result })
  } catch (error) {
    res.status(400).json({ success: false, data: "no data" });
  }
}

export async function updateCourse(req: Request, res: Response) {
  const { id } = req.params
  try {
    const { name, description } = req.body;
    const result = await prisma.courses.update({
        where: { id: parseInt(id) },
        data: { name, description },
      });
    res.json({ success: true, data: result })
  } catch (error) {
    res.status(400).status(400).json({ success: false, data: "course update failed" });
  }
}

export async function deleteCourse(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const result = await prisma.courses.delete({ where: { id: parseInt(id) } });
    res.json({ success: true, data: result })
  } catch (error) {
    res.status(400).json({ success: false, data: "no data" });
  }
}
