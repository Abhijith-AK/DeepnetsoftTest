import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuContextProvider = (props) => {
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    const value = { selectedMenu, setSelectedMenu, selectedItem, setSelectedItem };
    return (
        <MenuContext.Provider value={value}>{props.children}</MenuContext.Provider>
    );
}