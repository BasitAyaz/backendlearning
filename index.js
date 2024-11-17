require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose");
const courserouter = require("./routers/courserouter");
const teacherrouter = require("./routers/teacherroute");

const App = express()
App.use(express.json());

App.use("/cources", courserouter)
App.use("/teachers", teacherrouter)



mongoose.connect(process.env.MONGO_URI)
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

