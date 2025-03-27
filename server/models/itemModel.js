const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    menuId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "menus",
        required: true
    }
})

const items = mongoose.model("items", itemSchema)

module.exports = items