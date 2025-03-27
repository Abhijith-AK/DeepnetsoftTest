import React from 'react'

const Header = () => {
    return (
        <div className='bg-[#121618] w-full h-[40px] md:h-[100px] flex justify-end items-end pe-[10px] md:pe-[146px] relative'>
            <div className="logo flex text-white items-center absolute top-[18px] md:top-[55px] left-1/2 transform -translate-x-1/2 md:left-[168px] z-99">
                <img
                    src="./dns-logo.png"
                    alt="deepnetlogo"
                    className=' h-[44px] md:h-[76px]'
                />
                <div className="text-[35px] hidden md:flex flex-col">
                    <h2>
                        <span className='text-[#0796EF]'>DEEP</span> NET
                    </h2>
                    <h2 className='text-[#857878] -mt-4'>SOFT</h2>
                </div>
            </div>
            <nav className='text-white hidden md:flex text-[16px] gap-[30px] mb-[12px]'>
                <h2 className='hover:text-blue-500'>HOME</h2>
                <h2 className='text-[#0796EF] '>MENU</h2>
                <h2 className='hover:text-blue-500'>MAKE A RESERVATION</h2>
                <h2 className='hover:text-blue-500'>CONTACT US</h2>
            </nav>
            <div className='flex md:hidden'><i className="fa-solid fa-bars text-[#857878] mb-[12px]"></i></div>
        </div>
    )
}

export default Header