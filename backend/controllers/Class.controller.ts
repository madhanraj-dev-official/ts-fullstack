import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export function getALlClass(req: Request, res: Response) {
    try{console.log(req.url);
    const result = async () => await prisma.class.findMany();
    result().then((DATA) => res.json({ success: true, data: DATA }));}catch (e) {
        res.status(500).json({ success: false, data: "class update failed" });
      }
}

export function createClass(req: Request, res: Response) {
    try{const { className, section } = req.body;
    const result = async () =>await prisma.class.create({ data: { className, section } });
    result().then((DATA) => res.json({ success: true, data: DATA }));}catch (e) {
        res.status(500).json({ success: false, data: "class update failed" });
      }
}

export function updateClass(req: Request, res: Response) {
    try {
        const { id, className, section } = req.body;
        const result = async () =>
            await prisma.class.update({
            where: { id: parseInt(id) },
            data: {id, className, section },
            });
        result().then((DATA) => res.json({ success: true, data: DATA }));
    } catch (error) {
        res.status(500).json({ success: false, data: "class update failed" });
    }
}

export function deleteClass(req: Request, res: Response) {
    try{const { id } = req.params;
    const result = async () =>
        await prisma.class.delete({ where: { id: parseInt(id) } });
    result().then((DATA) => res.json({ success: true, data: DATA }));}
    catch (e) {
        res.status(500).json({ success: false, data: "class update failed" });
      }
}
