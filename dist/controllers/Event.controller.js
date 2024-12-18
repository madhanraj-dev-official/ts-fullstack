"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getALlEvent = getALlEvent;
exports.createEvent = createEvent;
exports.updateEvent = updateEvent;
exports.deleteEvent = deleteEvent;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getALlEvent(req, res) {
    console.log(req.url);
    try {
        const result = async () => await prisma.event.findMany();
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (e) {
        res.json({ success: false, data: "no data" });
    }
}
function createEvent(req, res) {
    const { name, description } = req.body;
    try {
        const result = async () => await prisma.event.create({ data: { name, description } });
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (error) {
        res.json({ success: false, data: "no data" });
    }
}
function updateEvent(req, res) {
    try {
        const { id, name, description } = req.body;
        const result = async () => await prisma.event.update({
            where: { id: parseInt(id) },
            data: { id, name, description },
        });
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (error) {
        res.status(500).json({ success: false, data: "branch update failed" });
    }
}
function deleteEvent(req, res) {
    const { id } = req.params;
    try {
        const result = async () => await prisma.event.delete({ where: { id: parseInt(id) } });
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (error) {
        res.json({ success: false, data: "no data" });
    }
}
