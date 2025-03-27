import commonAPI from "./commonApi"
import { SERVERURL } from "./ServerURL"

export const createMenuAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/api/menus`, reqBody)
}

export const getAllMenuAPI = async () => {
    return await commonAPI("GET", `${SERVERURL}/api/menus`, {})
}

export const createItemAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/api/menu-items`, reqBody)
}

export const getAllMenuItemsAPI = async (menuId) => {
    return await commonAPI("GET", `${SERVERURL}/api/menu-items/${menuId}`, {})
}