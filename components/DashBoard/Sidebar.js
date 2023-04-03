import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import SidebarMenus from './SidebarMenus'
import { BsFillPersonFill } from 'react-icons/bs'
import { useStateContext } from '../Context/StateContext'
import { applicantMenu } from '../ApplicantData'

const Sidebar = () => {
    const {expanded, setExpanded} = useStateContext()
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.innerWidth >= 768 ? setExpanded(true) : setExpanded(false) 
        }
    }, [])

  return (
    <div className='flex z-10 fixed h-full w-full top-0 left-0'>
        <div className={`${expanded ? 'block' : 'hidden'} 
            bg-gradient-to-tr from-sky-900 to-sky-700
            w-3/4 md:w-60 h-full `}>
            <div className='mt-8 ml-4 w-32'>
                <img src='/ukc-logo-white.png' alt='logo' />
            </div>
            <SidebarMenus data={applicantMenu} />
        </div>

        <div onClick={() => setExpanded(prev => !prev)} className='text-slate-900 z-10 cursor-pointer px-2 py-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </div>
    </div>
  )
}

export default Sidebar