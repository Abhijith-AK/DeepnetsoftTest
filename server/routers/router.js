const express = require("express")
const controller = require("../controllers/controller")

const router = express.Router()

// post menu
router.post("/menus", controller.createMenuController)
// get all menu
router.get("/menus", controller.getAllMenuController)

// post menu item
router.post("/menu-items", controller.createMenuItemController)
// get all menu items
router.get("/menu-items/:menuId", controller.getAllMenuItemsController)

module.exports = router