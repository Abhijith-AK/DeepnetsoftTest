const express = require("express")
const cors = require("cors")
const router = require("./routers/router")
require("dotenv").config()
require("./config/dbConnection")

// creating instance of express Application
const app = express()

// enabling cors
app.use(cors())
// initializing json middleware
app.use(express.json())
// using router
app.use("/api", router)

// intializing PORT
const PORT = 5000

// starting server on defined PORT
app.listen(PORT, () => {
    console.log(`Server Started running on PORT: ${PORT}`)
})