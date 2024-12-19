import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export async function getALlStaff(req: Request, res: Response) {
  try {
    console.log(req.url);
    const result = await prisma.staff.findMany();
    res.json({ success: true, data: result });
  } catch (e) {
    res.status(400).json({ success: false, data: "staff get all failed" });
  }
}

export async function getOneStaff(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const result = await prisma.staff.findUnique({
      where: { id: parseInt(id) },
    });
    res.json({ success: true, data: result });
  } catch (e) {
    res.status(400).json({ success: false, data: "staff get one failed" });
  }
}

export async function createStaff(req: Request, res: Response) {
  try {
    const { name, username, password, admin } = req.body;
    const hashData = await hash(password, 10);
    const result = await prisma.staff.create({
      data: { name, username, password: hashData, admin },
    });
    res.json({ success: true, data: result });
  } catch (e) {
    res.status(400).json({ success: false, data: "staff create failed" });
  }
}

export async function updateStaff(req: Request, res: Response) {
  const {id} = req.params
  try {
    const { name, username, password, admin } = req.body;
    const hashData = await hash(password, 10);

    const result = await prisma.staff.update({
      where: { id: parseInt(id) },
      data: { name, username, password: hashData, admin },
    });
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, data: "staff update failed" });
  }
}

export async function deleteStaff(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const result = await prisma.staff.delete({ where: { id: parseInt(id) } });
    res.json({ success: true, data: result });
  } catch (e) {
    res.status(400).json({ success: false, data: "staff delete failed" });
  }
}
