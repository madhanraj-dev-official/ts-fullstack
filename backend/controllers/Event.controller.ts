import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export function getALlEvent(req: Request, res: Response) {
  console.log(req.url);
  try {
    const result = async () => await prisma.event.findMany();
    result().then((DATA) => res.json({ success: true, data: DATA }));
  } catch (e) {
    res.json({ success: false, data: "no data" });
  }
}


export function createEvent(req: Request, res: Response) {
  const { name, description } = req.body;
  try {
    const result = async () =>
      await prisma.event.create({ data: { name, description } });
    result().then((DATA) => res.json({ success: true, data: DATA }));
  } catch (error) {
    res.json({ success: false, data: "no data" });
  }
}

export function updateEvent(req: Request, res: Response) {
  try {
    const { id, name, description } = req.body;
    const result = async () =>
      await prisma.event.update({
        where: { id: parseInt(id) },
        data: { id, name, description },
      });
    result().then((DATA) => res.json({ success: true, data: DATA }));
  } catch (error) {
    res.status(500).json({ success: false, data: "branch update failed" });
  }
}

export function deleteEvent(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const result = async () =>
      await prisma.event.delete({ where: { id: parseInt(id) } });
    result().then((DATA) => res.json({ success: true, data: DATA }));
  } catch (error) {
    res.json({ success: false, data: "no data" });
  }
}
