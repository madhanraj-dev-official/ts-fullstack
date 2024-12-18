import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export function getALlStudent(req: Request, res: Response) {
    const {classId } = req.params
    console.log(req.url);
    const result = async () => await prisma.student.findMany({where:{classId:parseInt(`${classId}`)}});
    result().then((DATA) => res.json({ success: true, data: DATA }));
}

export function getOneStudent(req: Request, res: Response) {
    const { roll } = req.params;
    const result = async () => await prisma.student.findUnique({ where: { roll: parseInt(roll) } });
    result().then((DATA) => res.json({ success: true, data: DATA }));
}

export function createStudent(req: Request, res: Response) {
    const { roll, name , mark , attendance , classId } = req.body;
    const result = async () =>await prisma.student.create({ data: { roll: parseInt(roll), name , mark , attendance:parseFloat(attendance) , classId:parseInt(classId) } });
    result().then((DATA) => res.json({ success: true, data: DATA }));
}

export function updateStudent(req: Request, res: Response) {
    try {
        const { roll , name , mark , attendance , classId } = req.body;
        const result = async () =>
            await prisma.student.update({
            where: { roll: parseInt(roll) },
            data: { roll, name , mark , attendance , classId:parseInt(classId) },
            });
        result().then((DATA) => res.json({ success: true, data: DATA }));
    } catch (error) {
        res.status(500).json({ success: false, data: "class update failed" });
    }
}

export function deleteStudent(req: Request, res: Response) {
    const { roll } = req.params;
    const result = async () =>
        await prisma.student.delete({ where: { roll: parseInt(roll) } });
    result().then((DATA) => res.json({ success: true, data: DATA }));
}