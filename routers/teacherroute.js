const express = require('express');
const TeacherModel = require('../models/teachermodel');
const TeacherController = require('../controller/teachercontroller');
const Route = express.Router();


Route.get("/", TeacherController.get)
Route.get("/:id", TeacherController.getById)
Route.post("/", TeacherController.add)
Route.put("/:id", TeacherController.edit)
Route.delete("/:id", TeacherController.del)

module.exports = Route;