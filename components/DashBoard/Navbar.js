import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-slate-50 h-24 shadow-md px-10 flex items-center justify-between'>
        <div className='hidden md:block font-semibold text-slate-500 text-2xl'>Applicant Dashboard</div>
        <div className='flex gap-8 w-full md:w-auto justify-between'>
            <div className='flex items-center gap-4'>
                <img className='h-10 w-10 bg-cover bg-slate-900 rounded-full' src='/ukc-favicon-color.png' alt='image'  />
                <span className='fon font-medium text-slate-500'>Hi, Kholwani</span>
            </div>
            <button className='cursor-pointer border border-sky-500 
            rounded-lg px-4 md:px-8 font-medium text-xs md:text-sm text-slate-500 '>Logout</button>
        </div>
    </div>
  )
}

export default Navbar