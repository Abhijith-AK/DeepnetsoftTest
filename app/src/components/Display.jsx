import React, { useContext, useEffect, useState } from 'react'
import { MenuContext } from '../context/MenuContext'
import { getAllMenuItemsAPI } from '../services/allApi'

const Display = ({ setIsItemOpen }) => {
    const [items, setItems] = useState([])
    const { selectedMenu, selectedItem } = useContext(MenuContext)
    // console.log(selectedMenu)
    const getItems = async () => {
        try {
            const response = await getAllMenuItemsAPI(selectedMenu?._id)
            if (response.status == "200") {
                setItems(response.data)
            } else {
                alert(response.response.data.message)
            }
        } catch (error) {
            // alert(error)
            console.log(error)
        }
    }
    useEffect(() => {
        if(selectedMenu) getItems()
    }, [selectedMenu, selectedItem])
    return (
        <div
            style={{ backgroundImage: 'url("./display.png")'}}
            className='w-full md:min-h-[672px] bg-cover bg-center'>
            <div className='h-full w-full relative'>
                <div className="absolute h-full w-full inset-0 bg-black/80 pointer-events-none"></div>

                <div className='w-full h-full flex relative justify-between items-center z-10 py-10 md:pt-[54px]'>
                    {/* LEFT FRAME */}
                    <div
                        style={{ backgroundImage: "url('./frame1.png')"}}
                        className="hidden md:flex h-[672px] w-[150px] bg-cover bg-no-repeat bg-center"></div>

                    {/* CENTER CONTENT */}
                    <div className="md:flex-1 flex items-center justify-center p-4">
                        <div className='border border-white p-[12px] py-[35px] md:p-[62px] relative w-full h-full md:h-fit'>
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex md:gap-[24px] items-center text-center">
                                    <div className="h-[3px] w-[50px] md:w-[68px] bg-[#857878]"></div>
                                    <h1 className='text-white w-[140px] md:w-full text-[30px] md:text-[50px] drop-shadow-[4px_3px_0_#800020]'>
                                        {selectedMenu?.name}
                                    </h1>
                                    <div className="h-[3px] w-[50px] md:w-[68px] bg-[#857878]"></div>
                                </div>

                                {/* Images on the sides */}
                                <img
                                    className='w-[76px] md:w-[190px] md:h-[281px] absolute top-[-14px] left-0 md:top-[-145px] md:left-[-55px]'
                                    src="./juice.png"
                                    alt="Juice"
                                />
                                <img
                                    className='w-[74px] md:w-[192px] absolute right-0 bottom-[-24px] md:bottom-[-44px]'
                                    src="./cocktail.png"
                                    alt="Cocktail"
                                />

                                {/* Drinks Menu List */}
                                <div className="flex justify-around gap-[13px] md:gap-[16px] flex-wrap text-white mt-[34px] md:mt-[48px]">
                                    {items?.length > 0 ?
                                        items?.map((item, i) => (
                                            <div key={i} className='w-[462px] min-h-[78px] max-w-[462px] '>
                                                <h2 className='text-[16px] md:text-[26px] flex w-full'>
                                                    <span>{item?.name?.toUpperCase()}</span>
                                                    <span className="flex-grow border-b-3 border-dotted border-white mx-2 my-2"></span>
                                                    <span>${item?.price}</span>
                                                </h2>
                                                <p className='text-white/75 text-[14px] md:text-[18px]'>
                                                    {item?.description}
                                                </p>
                                            </div>
                                        )) :
                                        <div className='w-[350px] max-w-[462px]'>
                                            <h2 className='text-[16px] md:text-[26px] flex w-full'> No Items Added in the Menu. </h2>
                                        </div>
                                    }
                                    <button
                                        onClick={() => { setIsItemOpen(true) }}
                                        className="max-w-[462px]  md:w-[462px] border border-dashed border-white  text-[#FFFFF] text-[16px] md:text-[26px] flex justify-center items-center gap-2 hover:bg-[#FFFF]/20 transition">
                                        <i className="fa-solid fa-plus"></i>
                                        <span>ADD ITEM</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT FRAME */}
                    <div
                        style={{ backgroundImage: "url('./frame2.png')"}}
                        className="hidden md:flex h-[672px] w-[150px] bg-cover bg-no-repeat bg-center"></div>
                </div>
            </div>
        </div>
    )
}

export default Display
