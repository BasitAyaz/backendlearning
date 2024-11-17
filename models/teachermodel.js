const mongoose = require('mongoose');
const TeacherSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "firstName is Required"],
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    contact: {
        type: String,
        unique: true,
    },
}, { timeStamps: true })

const TeacherModel = mongoose.model("Teachers", TeacherSchema)

module.exports = TeacherModel;