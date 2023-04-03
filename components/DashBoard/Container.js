import React, { useEffect } from 'react'
import { useStateContext } from '../Context/StateContext'

const Container = ({children}) => {
  const {expanded} = useStateContext()

  return (
    <div className={`absolute h-full w-full left-0 top-0 ${expanded ? 'md:pl-60' : 'md:pl-0'}`}>
        {children}
    </div>
  )
}

export default Container