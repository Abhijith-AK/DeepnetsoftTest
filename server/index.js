const express = require("express")
const cors = require("cors")
const router = require("./routers/router")
require("dotenv").config()
require("./config/dbConnection")
const path = require("path")

// creating instance of express Application
const app = express()

// enabling cors
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
// initializing json middleware
app.use(express.json())
// using router
app.use("/api", router)

// intializing PORT
const PORT = 5000

// hosting
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../app/dist")))
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../app", "dist", "index.html"))
    })
}

// starting server on defined PORT
app.listen(PORT, () => {
    console.log(`Server Started running on PORT: ${PORT}`)
})
