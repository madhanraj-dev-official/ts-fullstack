import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export function getALlStaff(req: Request, res: Response) {
  try {
    console.log(req.url);
    const result = async () => await prisma.staff.findMany();
    result().then((DATA) => res.json({ success: true, data: DATA }));
  } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}

export function getOneStaff(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const result = async () =>
      await prisma.staff.findUnique({ where: { id: parseInt(id) } });
    result().then((DATA) => res.json({ success: true, data: DATA }));
  } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}

export function createStaff(req: Request, res: Response) {
  try {
    const { name, username, password, admin } = req.body;
    const result = async () =>
      await prisma.staff.create({ data: { name, username, password, admin } });
    result().then((DATA) => res.json({ success: true, data: DATA }));
  } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}

export function updateStaff(req: Request, res: Response) {
  try {
    const { id, name, username, password, admin } = req.body;
    const result = async () =>
      await prisma.staff.update({
        where: { id: parseInt(id) },
        data: { id, name, username, password, admin },
      });
    result().then((DATA) => res.json({ success: true, data: DATA }));
  } catch (error) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}

export function deleteStaff(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const result = async () =>
      await prisma.staff.delete({ where: { id: parseInt(id) } });
    result().then((DATA) => res.json({ success: true, data: DATA }));
  } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}
