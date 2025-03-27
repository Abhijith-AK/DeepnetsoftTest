import React from 'react'

const Footer = () => {
    return (
        <div className='w-full px-[50px] md:px-[147px] py-[13px] md:py-[15px] bg-[#161616] flex flex-col md:flex-row items-center md:justify-between text-[14px] text-[#857878]'>
            <h3 className=' hidden md:flex'>© 2024 Deepnetsoft Solutions. All rights reserved.</h3>
            <h3 className='flex md:hidden'>© 2024 42 Bar & Grill. Developed by Deepnetsoft Solutions.</h3>
            <div className='flex gap-[9px] md:gap-[20px]'>
                <h3>Terms & Conditions</h3>
                <h3>Privacy Policy</h3>
            </div>
        </div>
    )
}

export default Footer