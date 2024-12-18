"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestimonialAssetsMiddleware = exports.assetMiddleware = exports.resumeMiddleware = exports.imageMiddleware = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = require("path");
const rootDir_1 = __importDefault(require("../../rootDir"));
const console_1 = require("console");
const upload = (0, path_1.join)(rootDir_1.default, "storage", "upload");
const images = (0, path_1.join)(upload, "images");
const resume = (0, path_1.join)(upload, "resume");
const assets = (0, path_1.join)(upload, "assets");
const kids = (0, path_1.join)(upload, "kids");
const imageStorage = multer_1.default.diskStorage({
    destination: images,
    filename: (req, file, cb) => {
        (0, console_1.log)(req.url);
        cb(null, file.fieldname + "-" + Date.now() + (0, path_1.extname)(file.originalname));
    },
});
const resumeStorage = multer_1.default.diskStorage({
    destination: resume,
    filename: (req, file, cb) => {
        (0, console_1.log)(req.url);
        cb(null, file.fieldname + "-" + Date.now() + (0, path_1.extname)(file.originalname));
    },
});
const assetsStorage = multer_1.default.diskStorage({
    destination: assets,
    filename: (req, file, cb) => {
        (0, console_1.log)(req.url);
        cb(null, file.fieldname + "-" + Date.now() + (0, path_1.extname)(file.originalname));
    },
});
const TestimonialAssetsStorage = multer_1.default.diskStorage({
    destination: kids,
    filename: (req, file, cb) => {
        (0, console_1.log)(req.url);
        cb(null, file.fieldname + "-" + Date.now() + (0, path_1.extname)(file.originalname));
    },
});
// Initialize image middleware and add file size limit
exports.imageMiddleware = (0, multer_1.default)({
    storage: imageStorage,
}).single("image"); // 'image' is the name attribute of the file input field
// Initialize resume middleware and add file size limit
exports.resumeMiddleware = (0, multer_1.default)({
    storage: resumeStorage,
}).single("resume"); // 'resume' is the name attribute of the file input field
// Initialize assets middleware and add file size limit
exports.assetMiddleware = (0, multer_1.default)({
    storage: assetsStorage,
}).single("assets"); // 'assets' is the name attribute of the file input field
// Initialize assets middleware and add file size limit
exports.TestimonialAssetsMiddleware = (0, multer_1.default)({
    storage: TestimonialAssetsStorage,
}).single("kids"); // 'assets' is the name attribute of the file input field
