"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const rootDir_1 = __importDefault(require("../../rootDir"));
const admin = express_1.default.Router();
// Serve React admin under `/admin/v2/`
admin.use('', express_1.default.static(path_1.default.join(rootDir_1.default, 'frontend', 'admin')));
admin.get('/*', (req, res) => {
    console.log(req.url);
    res.sendFile(path_1.default.join(rootDir_1.default, 'frontend', 'admin', 'index.html'));
});
exports.default = admin;
