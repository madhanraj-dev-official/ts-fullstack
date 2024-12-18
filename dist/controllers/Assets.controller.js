"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getALlAssets = getALlAssets;
exports.getOneAsset = getOneAsset;
exports.createAsset = createAsset;
exports.updateAsset = updateAsset;
const client_1 = require("@prisma/client");
const multer_middleware_1 = require("../middleware/multer.middleware");
const fs_1 = require("fs");
const prisma = new client_1.PrismaClient();
function getALlAssets(req, res) {
    try {
        console.log(req.url);
        const result = async () => await prisma.asset.findMany();
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (e) {
        res.status(500).json({ success: false, data: " Asset failed" });
    }
}
function getOneAsset(req, res) {
    try {
        const { id } = req.params;
        const result = async () => await prisma.asset.findUnique({ where: { id: parseInt(id) } });
        result().then((DATA) => res.json({ success: true, data: DATA }));
    }
    catch (e) {
        res.status(500).json({ success: false, data: " Asset failed" });
    }
}
function createAsset(req, res) {
    try {
        let fileName = "";
        (0, multer_middleware_1.assetMiddleware)(req, res, (err) => {
            const { name } = req.body;
            if (err) {
                console.error(err);
                return res.status(500).json({ error: err });
            }
            if (!req.file) {
                return res.status(400).json({ error: "Please send file" });
            }
            fileName = req.file?.path;
            const result = async () => await prisma.asset.create({
                data: { image: fileName, name },
            });
            result().then((DATA) => res.json({ success: true, data: DATA }));
        });
    }
    catch (e) {
        res.status(500).json({ success: false, data: " Kid failed" });
    }
}
function updateAsset(req, res) {
    try {
        let fileName = "";
        (0, multer_middleware_1.assetMiddleware)(req, res, (err) => {
            const { id, image, name } = req.body;
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
            (0, fs_1.rename)(fileName, name, (err) => {
                console.log(err);
            });
            const result = async () => await prisma.asset.update({
                where: { id: parseInt(id) },
                data: { image: name, name },
            });
            result().then((DATA) => res.json({ success: true, data: DATA }));
        });
    }
    catch (e) {
        res.status(500).json({ success: false, data: " Asset failed" });
    }
}
