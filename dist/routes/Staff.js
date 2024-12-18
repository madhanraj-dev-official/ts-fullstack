"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Staff_controller_1 = require("../controllers/Staff.controller");
const staff = (0, express_1.Router)();
staff.get('/', Staff_controller_1.getALlStaff);
staff.get('/:id', (req, res) => {
    console.log(req.url);
    res.send("hello");
});
staff.post('/', Staff_controller_1.createStaff);
staff.put('/', (req, res) => {
    console.log(req.url);
    res.send("hello");
});
staff.delete('/', (req, res) => {
    console.log(req.url);
    res.send("hello");
});
exports.default = staff;
