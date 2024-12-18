"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getALlClass = getALlClass;
exports.createClass = createClass;
exports.updateClass = updateClass;
exports.deleteClass = deleteClass;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getALlClass(req, res) {
    try {
        console.log(req.url);
        const result = async () => await prisma.class.findMany();
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (e) {
        res.status(500).json({ success: false, data: "class update failed" });
    }
}
function createClass(req, res) {
    try {
        const { className, section } = req.body;
        const result = async () => await prisma.class.create({ data: { className, section } });
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (e) {
        res.status(500).json({ success: false, data: "class update failed" });
    }
}
function updateClass(req, res) {
    try {
        const { id, className, section } = req.body;
        const result = async () => await prisma.class.update({
            where: { id: parseInt(id) },
            data: { id, className, section },
        });
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (error) {
        res.status(500).json({ success: false, data: "class update failed" });
    }
}
function deleteClass(req, res) {
    try {
        const { id } = req.params;
        const result = async () => await prisma.class.delete({ where: { id: parseInt(id) } });
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (e) {
        res.status(500).json({ success: false, data: "class update failed" });
    }
}
