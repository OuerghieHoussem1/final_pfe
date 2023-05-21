import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'
export default function Dashboard() {
  return (
    <div className='flex'>
        <Sidebar/>
          <div className='flex-grow bg-gray-100'>
          <Outlet/>
        </div>
    </div>
  )
}