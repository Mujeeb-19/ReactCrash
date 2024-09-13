import React from 'react'
import NavBar from '../components/Navbar'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
const MainLayout = () => {
  return (
<>
<Navbar/>
<Outlet/>

<ToastContainer/>
</>
  )
}

export default MainLayout