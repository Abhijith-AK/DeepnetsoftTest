const mongoose = require("mongoose")
require("dotenv").config()

const URL = process.env.DBCONNECTIONSTRING

mongoose.connect(URL).then(() => {
    console.log("DB connected succesfully with Atlas")
}).catch((error) => {
    console.log("DB connection failed!!", error)
})