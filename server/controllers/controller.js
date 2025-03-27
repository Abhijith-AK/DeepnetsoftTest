const Item = require("../models/itemModel")
const Menu = require("../models/menuModel")

// creating menu controller
exports.createMenuController = async (req, res) => {
    const { name, description } = req.body
    // validate input
    if (!name || !description) return res.status(400).json({ message: "All Fields are required!!" })
    try {
        // checking for duplicates
        const existingMenu = await Menu.findOne({ name })
        if (existingMenu) return res.status(409).json({ message: "Menu already Exists!" })
        // creating menu
        const newMenu = new Menu({ name, description })
        await newMenu.save()
        return res.status(201).json(newMenu)
    } catch (error) {
        res.status(500).json({ message: `Server error: ${error.message}` })
        console.log("Error inside createMenuController", error)
    }
}

// get all menu controller
exports.getAllMenuController = async (req, res) => {
    try {
        const allMenu = await Menu.find()
        return res.status(200).json(allMenu)
    } catch (error) {
        res.status(500).json({ message: `Server error: ${error.message}` })
        console.log("Error inside getAllMenuController", error)
    }
}

// creating menu item controller
exports.createMenuItemController = async (req, res) => {
    const { name, description, price, menuId } = req.body
    // validate input
    if (!name || !description || !price || !menuId) return res.status(400).json({ message: "All Fields are required!!" })
    try {
        // validating menuId
        const existingMenu = await Menu.findById(menuId)
        if(!existingMenu) return res.status(404).json({message: "Menu Not Found!"})
        // checking for duplicates
        const existingItem = await Item.findOne({ name, menuId })
        if (existingItem) return res.status(409).json({ message: "Item already Exists!" })
        // creating item
        const newItem = new Item({ name, description, price, menuId })
        await newItem.save()
        return res.status(201).json(newItem)
    } catch (error) {
        res.status(500).json({ message: `Server error: ${error.message}` })
        console.log("Error inside createMenuItemController", error)
    }
}

// fetch menu items controller
exports.getAllMenuItemsController = async (req, res) => {
    const { menuId } = req.params
    // validate menuId
    if(!menuId) return res.status(400).json({message: "Bad request! Menu ID is required"})
    try {
        // Check if the menu exists
        const menuExists = await Menu.findById(menuId);
        if (!menuExists) return res.status(404).json({ message: "Menu not found!" })
        const allMenuItems = await Item.find({menuId})
        return res.status(200).json(allMenuItems)
    } catch (error) {
        res.status(500).json({ message: `Server error: ${error.message}` })
        console.log("Error inside getAllMenuItemsController", error)
    }
}
