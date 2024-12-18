"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getALlKids = getALlKids;
exports.getOneKid = getOneKid;
exports.createKid = createKid;
exports.updateKid = updateKid;
exports.deleteKid = deleteKid;
const client_1 = require("@prisma/client");
const multer_middleware_1 = require("../middleware/multer.middleware");
const fs_1 = require("fs");
const prisma = new client_1.PrismaClient();
function getALlKids(req, res) {
    try {
        console.log(req.url);
        const result = async () => await prisma.kids.findMany();
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (e) {
        res.status(500).json({ success: false, data: " Kid failed" });
    }
}
function getOneKid(req, res) {
    try {
        const { id } = req.params;
        const result = async () => await prisma.kids.findUnique({ where: { id: parseInt(id) } });
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (e) {
        res.status(500).json({ success: false, data: " Kid failed" });
    }
}
function createKid(req, res) {
    try {
        let fileName = "";
        (0, multer_middleware_1.TestimonialAssetsMiddleware)(req, res, (err) => {
            const { testimonial } = req.body;
            if (err) {
                console.error(err);
                return res.status(500).json({ error: err });
            }
            if (!req.file) {
                return res.status(400).json({ error: "Please send file" });
            }
            fileName = req.file?.path;
            const result = async () => await prisma.kids.create({
                data: { image: fileName, testimonial },
            });
            result().then((DATA) => res.json({ success: true, data: DATA }));
        });
    }
    catch (e) {
        res.status(500).json({ success: false, data: " Kid failed" });
    }
}
function updateKid(req, res) {
    try {
        let fileName = "";
        (0, multer_middleware_1.TestimonialAssetsMiddleware)(req, res, (err) => {
            const { id, image, testimonial } = req.body;
            if (err) {
                console.error(err);
                return res.status(500).json({ error: err });
            }
            if (image) {
                fileName = image;
            }
            if (!req.file) {
                fileName = image;
            }
            else {
                fileName = req.file?.path;
            }
            const result = async () => await prisma.kids.update({
                where: { id: parseInt(id) },
                data: { image: fileName, testimonial },
            });
            result().then((DATA) => res.json({ success: true, data: DATA }));
        });
    }
    catch (e) {
        res.status(500).json({ success: false, data: " Kid failed" });
    }
}
function deleteKid(req, res) {
    try {
        const { id } = req.params;
        const result = async () => await prisma.kids.delete({ where: { id: parseInt(id) } });
        result().then((DATA) => {
            (0, fs_1.unlink)(DATA.image, (err) => {
                console.log(err);
            });
            res.json({ success: true, data: DATA });
        });
    }
    catch (e) {
        res.status(500).json({ success: false, data: " Kid failed" });
    }
}
