import React from 'react'
import Sidebar from '../components/dashboard-components/Sidebar'
import Desktop_Link_1 from '../components/dashboard-components/pages/Desktop_Link_1'
import { Outlet } from 'react-router-dom'

const Desktop = () => {

  return (
    <div className='max-h-screen w-full flex overflow-hidden '>
      <Sidebar />
      <Outlet/>
    </div>
  )
}

export default Desktop
