"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getALlStudent = getALlStudent;
exports.getOneStudent = getOneStudent;
exports.createStudent = createStudent;
exports.updateStudent = updateStudent;
exports.deleteStudent = deleteStudent;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getALlStudent(req, res) {
    try {
        const { classId } = req.params;
        console.log(req.url);
        const result = async () => await prisma.student.findMany({
            where: { classId: parseInt(`${classId}`) },
        });
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (exceptions) {
        res.status(500).json({ success: false, data: "class update failed" });
    }
}
function getOneStudent(req, res) {
    try {
        const { roll } = req.params;
        const result = async () => await prisma.student.findUnique({ where: { roll: parseInt(roll) } });
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (e) {
        res.status(500).json({ success: false, data: "class update failed" });
    }
}
function createStudent(req, res) {
    try {
        const { roll, name, mark, attendance, classId } = req.body;
        const result = async () => await prisma.student.create({
            data: {
                roll: parseInt(roll),
                name,
                mark,
                attendance: parseFloat(attendance),
                classId: parseInt(classId),
            },
        });
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (e) {
        res.status(500).json({ success: false, data: "class update failed" });
    }
}
function updateStudent(req, res) {
    try {
        const { roll, name, mark, attendance, classId } = req.body;
        const result = async () => await prisma.student.update({
            where: { roll: parseInt(roll) },
            data: { roll, name, mark, attendance, classId: parseInt(classId) },
        });
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (error) {
        res.status(500).json({ success: false, data: "class update failed" });
    }
}
function deleteStudent(req, res) {
    try {
        const { roll } = req.params;
        const result = async () => await prisma.student.delete({ where: { roll: parseInt(roll) } });
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (e) {
        res.status(500).json({ success: false, data: "class update failed" });
    }
}
