import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout() {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'> 
        <Sidebar/>
      <div className=' p-4 flex flex-col flex-1 overflow-auto'>
          <Header/>
          <div>{<Outlet/>}</div>
      </div>
    </div>
  )
}
