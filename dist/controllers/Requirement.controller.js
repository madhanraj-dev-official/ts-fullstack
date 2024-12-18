"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getALlRequirement = getALlRequirement;
exports.getOneRequirement = getOneRequirement;
exports.createRequirement = createRequirement;
exports.deleteRequirement = deleteRequirement;
const client_1 = require("@prisma/client");
const multer_middleware_1 = require("../middleware/multer.middleware");
const fs_1 = require("fs");
const prisma = new client_1.PrismaClient();
function getALlRequirement(req, res) {
    try {
        console.log(req.url);
        const result = async () => await prisma.requirement.findMany();
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (e) {
        res.status(500).json({ success: false, data: " Requirement failed" });
    }
}
function getOneRequirement(req, res) {
    try {
        const { id } = req.params;
        const result = async () => await prisma.requirement.findUnique({ where: { id: parseInt(id) } });
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (e) {
        res.status(500).json({ success: false, data: " Requirement failed" });
    }
}
function createRequirement(req, res) {
    try {
        let fileName = "";
        (0, multer_middleware_1.resumeMiddleware)(req, res, (err) => {
            const { name, email, phone, apply, experience, interest1, interest2 } = req.body;
            if (err) {
                console.error(err);
                return res.status(500).json({ error: err });
            }
            if (!req.file) {
                return res.status(400).json({ error: "Please send file" });
            }
            fileName = req.file?.path;
            const result = async () => await prisma.requirement.create({
                data: { name, email, phone, apply, experience, interest1, interest2, cover: fileName },
            });
            result().then((DATA) => res.json({ success: true, data: DATA }));
        });
    }
    catch (e) {
        res.status(500).json({ success: false, data: " Requirement failed" });
    }
}
function deleteRequirement(req, res) {
    try {
        const { id } = req.params;
        const result = async () => await prisma.requirement.delete({ where: { id: parseInt(id) } });
        result().then((DATA) => {
            (0, fs_1.unlink)(DATA.cover, (err) => { console.log(err); });
            res.json({ success: true, data: DATA });
        });
    }
    catch (e) {
        res.status(500).json({ success: false, data: " Requirement failed" });
    }
}
