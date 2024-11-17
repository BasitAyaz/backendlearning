const express = require('express');
const CourseController = require('../controller/coursecontroller');

const Route = express.Router();

Route.get("/", CourseController.get)
Route.get("/:id", CourseController.getById)
Route.post("/", CourseController.add)
Route.put("/:id", CourseController.edit)
Route.delete("/:id", CourseController.del)

module.exports = Route;