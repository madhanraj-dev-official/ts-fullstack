import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export async function getALlStudent(req: Request, res: Response) {
  let result = [];
  try {
    const { Class, section } = req.query;
    result = await prisma.student.findMany({
      where: {
        section: section ? `${section}` : undefined,
        className: Class ? `${Class}` : undefined,
      },
    });

    res.json({ success: true, data: result });
  } catch (exceptions) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}

export async function getOneStudent(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const result = await prisma.student.findUnique({
      where: { id: parseInt(id) },
    });
    let result1 = await JSON.parse(`${result?.mark}`)
    console.log(result1)
    res.json({ success: true, data: {...result,...{mark:result1}} });
  } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}

export async function createStudent(req: Request, res: Response) {
  try {
    const { roll, name, mark, attendance, section, className } = req.body;
    const keys = ["roll", "name", "mark", "attendance", "section", "className"];
    let check = true;
    keys.forEach((key) => {
      if (req.body[key] == undefined) {
        check = false;
        throw new Error();
      }
    });
    const result1 = await prisma.student.findUnique({
      where: { roll: parseInt(roll) },
    });

    if (!result1 && check) {
      try {
        let mark1 = await JSON.stringify(mark)
        const result = await prisma.student.create({
          data: {
            roll: parseInt(roll),
            name: name,
            mark: mark1,
            attendance: parseFloat(attendance),
            className,
            section,
          },
        });
        res.json({ success: true, data: result });
      } catch (e) {
        res.status(400).json({ success: false, data: "student create failed" });
      }
    } else {
      res.status(400).json({ success: false, data: "student create failed" });
    }
  } catch (e) {
    res.status(500).json({ success: false, data: "student create failed" });
  }
}

export async function updateStudent(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const { name, mark, attendance, section, className } = req.body;
    const keys = ["roll", "name", "mark", "attendance", "section", "className"];
    let check = true;
    keys.forEach((key) => {
      if (req.body[key] == undefined) {
        check = false;
      }
    });
    if (check) {
      try {
        let mark1 = await JSON.stringify(mark)
        const result = await prisma.student.update({
          where: { id: parseInt(id) },
          data: {
            roll: parseInt(id),
            name: name,
            mark: mark1,
            attendance: parseFloat(attendance),
            section,
            className,
          },
        });
        res.json({ success: true, data: result });
      } catch (e) {
        res.status(500).json({ success: false, data: "student update failed" });
      }
    } else {
      res.status(500).json({ success: false, data: "student update failed" });
    }
  } catch (e) {
    res.status(500).json({ success: false, data: "student update failed" });
  }
}

export async function deleteStudent(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const result = await prisma.student.delete({ where: { id: parseInt(id) } });
    res.json({ success: true, data: result });
  } catch (e) {
    res.status(500).json({ success: false, data: "class update failed" });
  }
}
