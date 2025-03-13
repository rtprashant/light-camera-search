import React, { useState } from 'react'

import { header } from '../constant/landingpage';
import MobileMenu from '../components/Moblie/MobileMenu';
import { useDispatch, useSelector } from 'react-redux';
import { openMenu } from '../redux/features/MobileMenu';

function Header() {
    const { isOpen } = useSelector(state=>state.moblieMenu)
    const dispatch = useDispatch()
    const handleClick = ()=>{
        dispatch(openMenu())

    }
   
    return (

       <div className='w-full bg-[#353839] flex justify-between pr-2 fixed z-50 '>
         <div className=' gap-3 lg:gap-5 md:gap-3  p-5 text-[20px] flex sm:text-[30px] md:text-[40px] lg:text-[50px] text-amber-600 font-shadows font-extrabold bold'>
            <div>
                {header.title}
            </div>
            <div className='mt-1 lg:mt-2 md:mt-2 sm:mt-2'>
                {header.icon}
            </div>
        </div>
        <div 
        onClick={handleClick}
        className='sm:hidden block text-white text-[40px] justify-center items-center mt-4 mr-3'>
           {header.menu}
        </div>
        {
            isOpen && (
                <MobileMenu/>
            )
        }
       </div>




    )
}

export default Header
