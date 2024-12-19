import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export async function getALlEvent(req: Request, res: Response) {
  console.log(req.url);
  try {
    const result =  await prisma.event.findMany();
     res.json({ success: true, data: result })
  } catch (e) {
    res.json({ success: false, data: "no data" });
  }
}

export async function createEvent(req: Request, res: Response) {
  const { name, description } = req.body;
  try {
    const result = await prisma.event.create({ data: { name, description } });
     res.json({ success: true, data: result })
  } catch (error) {
    res.json({ success: false, data: "no data" });
  }
}

export async function updateEvent(req: Request, res: Response) {
  const { id } = req.params
  try {
    const { name, description } = req.body;
    const result = await prisma.event.update({
        where: { id: parseInt(id) },
        data: { name, description },
      });
     res.json({ success: true, data: result })
  } catch (error) {
    res.status(400).json({ success: false, data: "event update failed" });
  }
}

export async function deleteEvent(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const result = await prisma.event.delete({ where: { id: parseInt(id) } });
     res.json({ success: true, data: result })
  } catch (error) {
    res.status(400).json({ success: false, data: "no data" });
  }
}
