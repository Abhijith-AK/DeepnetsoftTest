import React from 'react'

const Hero = () => {

    return (
        <div
            style={{ backgroundImage: 'url("./hero.jpg")'}}
            className='w-full h-[231px] md:h-[311px] relative flex justify-center items-center bg-[length:200%_auto] bg-[top_left] md:bg-cover'>
            <div className="absolute inset-0 bg-gradient-to-l from-black/71 to-black/51"></div>
            <div className="text-center z-5">
                <h1 className='text-white text-[40px] md:text-[75px] drop-shadow-[4px_3px_0_#800020]'>MENU</h1>
                <p className='text-[#BBBBBB] text-[16px] text-[18px] max-w-[400px] md:max-w-[681px] '>Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.</p>
            </div>
        </div>
    )
}

export default Hero