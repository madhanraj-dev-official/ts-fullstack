import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export function getALlBranch(req: Request, res: Response) {
    console.log(req.url);
    const result = async () => await prisma.branches.findMany();
    result().then((DATA) => res.json({ success: true, data: DATA }));
}

export function getOneBranch(req: Request, res: Response) {
    const { id } = req.params;
    const result = async () => await prisma.branches.findUnique({ where: { id: parseInt(id) } });
    result().then((DATA) => res.json({ success: true, data: DATA }));
}

export function createBranch(req: Request, res: Response) {
    const { name, description } = req.body;
    const result = async () =>await prisma.branches.create({ data: { name, description } });
    result().then((DATA) => res.json({ success: true, data: DATA }));
}

export function updateBranch(req: Request, res: Response) {
    try {
        const { id, name, description } = req.body;
        const result = async () =>
            await prisma.branches.update({
            where: { id: parseInt(id) },
            data: {id, name, description },
            });
        result().then((DATA) => res.json({ success: true, data: DATA }));
    } catch (error) {
        res.status(500).json({ success: false, data: "branch update failed" });
    }
}

export function deleteBranch(req: Request, res: Response) {
    const { id } = req.params;
    const result = async () =>
        await prisma.branches.delete({ where: { id: parseInt(id) } });
    result().then((DATA) => res.json({ success: true, data: DATA }));
}
