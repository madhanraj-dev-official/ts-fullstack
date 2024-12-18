"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_middleware_1 = require("../middleware/multer.middleware");
const console_1 = require("console");
const file = (0, express_1.Router)();
// image
file.post('/image', (req, res) => {
    (0, multer_middleware_1.imageMiddleware)(req, res, (err) => {
        (0, console_1.log)(req.file?.path);
        if (err) {
            console.error(err);
            return res.status(500).json({ error: err });
        }
        if (!req.file) {
            return res.status(400).json({ error: 'Please send file' });
        }
        console.log(req.file);
        res.send('File uploaded!');
    });
});
// resume
file.post('/resume', (req, res) => {
    (0, multer_middleware_1.resumeMiddleware)(req, res, (err) => {
        (0, console_1.log)(req.body);
        if (err) {
            console.error(err);
            return res.status(500).json({ error: err });
        }
        if (!req.file) {
            return res.status(400).json({ error: 'Please send file' });
        }
        console.log(req.file);
        res.send('File uploaded!');
    });
});
// assets
file.post('/assets', (req, res) => {
    (0, multer_middleware_1.assetMiddleware)(req, res, (err) => {
        (0, console_1.log)(req.body);
        if (err) {
            console.error(err);
            return res.status(500).json({ error: err });
        }
        if (!req.file) {
            return res.status(400).json({ error: 'Please send file' });
        }
        console.log(req.file);
        res.send('File uploaded!');
    });
});
exports.default = file;
