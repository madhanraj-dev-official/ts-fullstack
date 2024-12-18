"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const rootDir_1 = __importDefault(require("../../rootDir"));
const client = express_1.default.Router();
// Serve React client under `/`
client.use('', express_1.default.static(path_1.default.join(rootDir_1.default, 'frontend', 'client')));
client.get('/*', (req, res) => {
    console.log(req.url);
    res.sendFile(path_1.default.join(rootDir_1.default, 'frontend', 'client', 'index.html'));
});
exports.default = client;
