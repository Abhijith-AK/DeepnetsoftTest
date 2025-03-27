import React, { useContext, useEffect, useState } from 'react'
import { getAllMenuAPI } from '../services/allApi'
import { MenuContext } from '../context/MenuContext'

const Menu = ({ setIsMenuOpen }) => {
    const [menus, setMenus] = useState([])
    const { selectedMenu, setSelectedMenu } = useContext(MenuContext)
    const getMenus = async () => {
        try {
            const response = await getAllMenuAPI()
            if (response.status == "200") {
                setMenus(response.data)
                if(!selectedMenu) setSelectedMenu(response.data[0])
            } else {
                alert(response.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getMenus()
    }, [selectedMenu])
    return (
        <div className='w-full h-[60px] md:h-[79px] bg-[url("./menubg.png")] bg-contain'>
            <div className='h-full w-full flex justify-center items-center relative'>
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="z-10 flex items-center gap-[14px] overflow-x-auto">
                    {menus?.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedMenu(item)}
                            className={`px-[22px] md:px-[40px] py-[7px] md:py-[14px] h-fit ${selectedMenu?.name?.toUpperCase() === item?.name?.toUpperCase() ? "bg-[#0796EF]" :"bg-black"} border-[0.5px] border-[#0796EF] hover:border-[2px] hover:outline-[#0796EF]`}>
                            <h1 className='text-white text-[12px] md:text-[16px] drop-shadow-[1.3px_0.9px_0_#800020]'>{item?.name?.toUpperCase()}</h1>
                        </div>
                    ))}

                    {/* ADD MENU BUTTON */}
                    <div
                        onClick={() => { setIsMenuOpen(true) }}
                        className="px-[22px] md:px-[40px] py-[7px] md:py-[14px] bg-black border-[0.5px] border-[#0796EF] hover:outline-[2px] hover:outline-[#0796EF] flex items-center gap-2 cursor-pointer">
                        <i className='fa-solid fa-plus text-white'></i>
                        <h1 className='text-white text-[12px] md:text-[16px] drop-shadow-[1.3px_0.9px_0_#800020]'>ADD MENU</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu