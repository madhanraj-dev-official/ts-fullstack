"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Class_controller_1 = require("../controllers/Class.controller");
const classes = (0, express_1.Router)();
classes.get('/', Class_controller_1.getALlClass);
classes.post('/', Class_controller_1.createClass);
classes.put('/:id', Class_controller_1.updateClass);
classes.delete("/:id", Class_controller_1.deleteClass);
exports.default = classes;
