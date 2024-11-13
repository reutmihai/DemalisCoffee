import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <div className='container'>
        <div className='navbar'><Navbar /></div>
        <Outlet />
    </div>
  )
}

export default SharedLayout