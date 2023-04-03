import React from 'react'
import {BsFillPersonFill, BsBriefcaseFill, BsFillPenFill} from 'react-icons/bs'
import {MdOutlineUpdate} from 'react-icons/md'
import {FaGraduationCap} from 'react-icons/fa'
import {TbNurse} from 'react-icons/tb'

const SidebarMenus = ({data}) => {
    const applicantMenu = [
        {
            icon: <BsFillPersonFill />,
            name: 'Profile',
            link: ''
        },
        {
            icon: <BsBriefcaseFill />,
            name: 'Jobs',
            link: ''
        },
        {
            icon: <BsFillPenFill />,            
            name: 'Applications',
            link: ''
        },
        {
            icon: <MdOutlineUpdate />,
            name: 'Update',
            link: ''
        },
        {
            icon: <FaGraduationCap />,
            name: 'Qualifications',
            link: ''
        },
        {
            icon: <TbNurse />,
            name: 'Experience',
            link: ''
        }
    ]

  return (
    <div className='flex flex-col gap-4 mx-2 mt-12 text-slate-200'>
      {data.map((item, index) => (
        <div className='flex items-center py-2 px-2 rounded-md 
        gap-4 hover:bg-slate-900 hover:bg-opacity-30
        transition-all ' key={index}>
            <span className='text-sky-300 text-xl '>{item.icon}</span>
            <span className='text-lg font-light'>{item.name}</span>
        </div>
      ))}
    </div>
  )
}

export default SidebarMenus