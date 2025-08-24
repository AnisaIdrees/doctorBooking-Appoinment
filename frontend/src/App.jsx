import React from 'react'
import { Outlet } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';


function App() {
  return (
    <>
      <Outlet />
      <ToastContainer />
    </>
  )
}

export default App