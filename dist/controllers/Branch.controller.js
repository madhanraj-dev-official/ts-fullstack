"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getALlBranch = getALlBranch;
exports.getOneBranch = getOneBranch;
exports.createBranch = createBranch;
exports.updateBranch = updateBranch;
exports.deleteBranch = deleteBranch;
const client_1 = require("@prisma/client");
const multer_middleware_1 = require("../middleware/multer.middleware");
const fs_1 = require("fs");
const prisma = new client_1.PrismaClient();
function getALlBranch(req, res) {
    try {
        console.log(req.url);
        const result = async () => await prisma.branches.findMany();
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (e) {
        res.status(500).json({ success: false, data: "class update failed" });
    }
}
function getOneBranch(req, res) {
    try {
        const { id } = req.params;
        const result = async () => await prisma.branches.findUnique({ where: { id: parseInt(id) } });
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (e) {
        res.status(500).json({ success: false, data: "class update failed" });
    }
}
function createBranch(req, res) {
    try {
        let fileName = "";
        (0, multer_middleware_1.imageMiddleware)(req, res, (err) => {
            const { name, description } = req.body;
            if (err) {
                console.error(err);
                return res.status(500).json({ error: err });
            }
            if (!req.file) {
                return res.status(400).json({ error: "Please send file" });
            }
            fileName = req.file?.path;
            const result = async () => await prisma.branches.create({
                data: { name, description, image: fileName },
            });
            result().then((DATA) => res.json({ success: true, data: DATA }));
        });
    }
    catch (e) {
        res.status(500).json({ success: false, data: "class update failed" });
    }
}
function updateBranch(req, res) {
    try {
        let fileName = "";
        (0, multer_middleware_1.imageMiddleware)(req, res, (err) => {
            const { id, name, description } = req.body;
            if (err) {
                console.error(err);
                return res.status(500).json({ error: err });
            }
            if (!req.file) {
                return res.status(400).json({ error: "Please send file" });
            }
            fileName = req.file?.path;
            const result = async () => await prisma.branches.update({
                where: { id: parseInt(id) },
                data: { name, description, image: fileName },
            });
            result().then((DATA) => res.json({ success: true, data: DATA }));
        });
    }
    catch (e) {
        res.status(500).json({ success: false, data: "class update failed" });
    }
}
function deleteBranch(req, res) {
    try {
        const { id } = req.params;
        const result = async () => await prisma.branches.delete({ where: { id: parseInt(id) } });
        result().then((DATA) => {
            (0, fs_1.unlink)(DATA.image, (err) => { console.log(err); });
            res.json({ success: true, data: DATA });
        });
    }
    catch (e) {
        res.status(500).json({ success: false, data: "class update failed" });
    }
}
