"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getALlStaff = getALlStaff;
exports.getOneStaff = getOneStaff;
exports.createStaff = createStaff;
exports.updateStaff = updateStaff;
exports.deleteStaff = deleteStaff;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getALlStaff(req, res) {
    try {
        console.log(req.url);
        const result = async () => await prisma.staff.findMany();
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (e) {
        res.status(500).json({ success: false, data: "class update failed" });
    }
}
function getOneStaff(req, res) {
    try {
        const { id } = req.params;
        const result = async () => await prisma.staff.findUnique({ where: { id: parseInt(id) } });
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (e) {
        res.status(500).json({ success: false, data: "class update failed" });
    }
}
function createStaff(req, res) {
    try {
        const { name, username, password, admin } = req.body;
        const result = async () => await prisma.staff.create({ data: { name, username, password, admin } });
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (e) {
        res.status(500).json({ success: false, data: "class update failed" });
    }
}
function updateStaff(req, res) {
    try {
        const { id, name, username, password, admin } = req.body;
        const result = async () => await prisma.staff.update({
            where: { id: parseInt(id) },
            data: { id, name, username, password, admin },
        });
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (error) {
        res.status(500).json({ success: false, data: "class update failed" });
    }
}
function deleteStaff(req, res) {
    try {
        const { id } = req.params;
        const result = async () => await prisma.staff.delete({ where: { id: parseInt(id) } });
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (e) {
        res.status(500).json({ success: false, data: "class update failed" });
    }
}
