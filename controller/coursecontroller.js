const CourseModel = require("../models/coursemodel")

const CourseController = {
    get: async (req, res) => {
        try {
            const result = await CourseModel.find({})
            res.status(200).send({
                isSuccessfully: true,
                data: result
            })
        } catch (error) {
            console.log(error)
            res.status(400).send({
                isSuccessfull: false,
                message: error.message,
                data: error
            })
        }
    },
    getById: async (req, res) => {
        try {
            const id = req.params.id
            const result = await CourseModel.findById(id)
            res.status(200).send({
                isSuccessfully: true,
                data: result
            })
        } catch (error) {
            console.log(error)
            res.status(400).send({
                isSuccessfull: false,
                message: error.message,
                data: error
            })
        }
    },
    add: (req, res) => {
        try {
            const body = req.body;
            const courseObj = {
                name: body.name,
                durationInMonths: body.durationInMonths
            }
            const resObj = new CourseModel({ ...courseObj })

            resObj.save().then((dbRes) => {
                res.status(201).send({
                    isSuccessfull: true,
                    data: dbRes,
                    message: 'Course Added successfully'
                })
            }).catch((err) => {
                throw err
            })

        } catch (error) {
            console.log(error)
            res.status(400).send({
                isSuccessfull: false,
                message: error.message,
                data: error
            })
        }
    },
    edit: async (req, res) => {
        try {
            const id = req.params.id
            const body = req.body;

            const result = await CourseModel.findByIdAndUpdate(id, body, { new: true });
            res.status(200).send({
                isSuccessfull: true,
                message: 'Record Updated Successfully',
                data: result
            })

        } catch (error) {
            console.log(error)
            res.status(400).send({
                isSuccessfull: false,
                message: error.message,
                data: error
            })
        }
    },
    del: async (req, res) => {
        try {
            const id = req.params.id;
            const result = await CourseModel.findByIdAndDelete(id);

            res.status(200).send({
                isSuccessfull: true,
                message: 'Data Deleted Successfully'
            })

        } catch (error) {
            console.log(error)
            res.status(400).send({
                isSuccessfull: false,
                message: error.message,
                data: error
            })
        }
    },
}

module.exports = CourseController;