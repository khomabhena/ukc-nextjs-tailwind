import React from 'react'
import Container from './Container'
import Sidebar from './Sidebar'

const DashBoardLayout = ({children}) => {
  return (
    <div className='flex min-h-screen bg-slate-200 relative'>
      <Sidebar />
      <Container />
    </div>
  )
}

export default DashBoardLayout