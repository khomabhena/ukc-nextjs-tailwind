import React, { useEffect } from 'react'
import { useStateContext } from '../Context/StateContext'
import Navbar from './Navbar'

const Container = ({children}) => {
  const {expanded} = useStateContext()

  return (
    <div className={`absolute h-screen top-0 w-full left-0
       ${expanded ? 'md:pl-60' : 'md:pl-0'}`}>
        <Navbar />
        {children}
    </div>
  )
}

export default Container