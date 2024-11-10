const express = require("express")
const mongoose = require("mongoose");
const CourseModel = require("./models/coursemodel");

const App = express()
App.use(express.json());

App.get("/cources", async (req, res) => {
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
})
App.get("/cources/:id", async (req, res) => {
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
})
App.post('/cources', (req, res) => {
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
})
App.delete('/cources/:id', async (req, res) => {
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
})
App.put("/cources/:id", async (req, res) => {
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
})



mongoose.connect("mongodb+srv://backendlearning:backendlearning1234@cls1.1pidq.mongodb.net/")
    .then(() => {
        App.listen(5000, (err) => {
            if (err) {
                console.error("Error starting server", err)
            } else {
                console.log("Mongo DB Connected and Server is listening on http://localhost:5000");
            }
        })
    })
    .catch((err) => {
        console.log(err)
    })

