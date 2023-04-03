import React, { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext()

export const StateContext = ({children}) => {
    const [expanded, setExpanded] = useState(false)
    const [windowSize, setWindowSize] = useState(0)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowSize(window.innerWidth)
        }
    }, [windowSize])

  return (
    <Context.Provider
        value={{expanded, setExpanded, windowSize}}
    >{children}</Context.Provider>  
  )
}

export const useStateContext = () => useContext(Context)