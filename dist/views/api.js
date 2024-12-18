"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api = (0, express_1.Router)();
//apis
const Staff_1 = __importDefault(require("../routes/Staff"));
const Requirement_1 = __importDefault(require("../routes/Requirement"));
const Branch_1 = __importDefault(require("../routes/Branch"));
const Class_1 = __importDefault(require("../routes/Class"));
const Student_1 = __importDefault(require("../routes/Student"));
const Course_1 = __importDefault(require("../routes/Course"));
const Event_1 = __importDefault(require("../routes/Event"));
const FileUpload_1 = __importDefault(require("../routes/FileUpload"));
const kids_1 = __importDefault(require("../routes/kids"));
const Assets_1 = __importDefault(require("../routes/Assets"));
// routes
api.use('/staff', Staff_1.default);
api.use('/requirement', Requirement_1.default);
api.use('/branch', Branch_1.default);
api.use('/class', Class_1.default);
api.use('/student', Student_1.default);
api.use('/course', Course_1.default);
api.use('/event', Event_1.default);
api.use('/upload', FileUpload_1.default);
api.use('/kids', kids_1.default);
api.use('/assets', Assets_1.default);
exports.default = api;
