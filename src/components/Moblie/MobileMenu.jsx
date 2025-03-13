import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../../redux/features/MobileMenu'
import { category, header } from '../../constant/landingpage'
import { NavLink } from 'react-router-dom'

function MobileMenu() {
    const currentRef = useRef(null)
    const dispatch = useDispatch()
    const { isOpen } = useSelector(state=>state.moblieMenu)

    useEffect(() => {
        const handleClick = (e) => {
            if (currentRef.current && !currentRef.current.contains(e.target)) {
                dispatch(closeMenu())
            }

        }
        document.addEventListener('mousedown', handleClick)
        return () => {
            document.removeEventListener('mousedown', handleClick)
        }

    }, [])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        };
    }, [isOpen]);
    return (
       <div className=''>
         <div className='w-full flex h-screen bg-black/50 fixed justify-end top-0 left-0 z-50 '>
            <div ref={currentRef}
                className='  flex flex-col  h-screen w-[60%] bg-[#353839] text-amber-600 p-3 right-0 '>
                <div 
                onClick={()=>dispatch(closeMenu())}
                className='flex right-0 justify-end p-2 text-[40px]'>
                    {header.close}</div>
                <div>
                    {category.map((itm) => (
                        <NavLink
                        onClick={()=>{
                            dispatch(closeMenu())
                        }}
                            to={itm.url}
                            key={itm.id}
                            className={({ isActive }) => `flex flex-col font-oswald rounded-3xl text-[20px] font-bold mt-2 px-5 py-2 ${isActive ? "bg-gray-300 ": ""} `}>
                            {itm.title}

                        </NavLink>

                    ))}
                </div>
            </div>

        </div>
       </div>
    )
}

export default MobileMenu
