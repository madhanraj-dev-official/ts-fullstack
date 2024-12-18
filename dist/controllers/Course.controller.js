"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getALlCourse = getALlCourse;
exports.getOneCourse = getOneCourse;
exports.createCourse = createCourse;
exports.updateCourse = updateCourse;
exports.deleteCourse = deleteCourse;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getALlCourse(req, res) {
    console.log(req.url);
    try {
        const result = async () => await prisma.courses.findMany();
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (e) {
        res.json({ success: false, data: "no data" });
    }
}
function getOneCourse(req, res) {
    const { id } = req.params;
    try {
        const result = async () => await prisma.courses.findUnique({ where: { id: parseInt(id) } });
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (error) {
        res.json({ success: false, data: "no data" });
    }
}
function createCourse(req, res) {
    const { name, description } = req.body;
    try {
        const result = async () => await prisma.courses.create({ data: { name, description } });
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (error) {
        res.json({ success: false, data: "no data" });
    }
}
function updateCourse(req, res) {
    try {
        const { id, name, description } = req.body;
        const result = async () => await prisma.courses.update({
            where: { id: parseInt(id) },
            data: { id, name, description },
        });
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (error) {
        res.status(500).json({ success: false, data: "branch update failed" });
    }
}
function deleteCourse(req, res) {
    const { id } = req.params;
    try {
        const result = async () => await prisma.courses.delete({ where: { id: parseInt(id) } });
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (error) {
        res.json({ success: false, data: "no data" });
    }
}
