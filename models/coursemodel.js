const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    durationInMonths: {
        type: Number,
        required: true,
        default: 6,
    },
}, { timeStamp: true })

const CourseModel = mongoose.model("cources", CourseSchema)

module.exports = CourseModel;