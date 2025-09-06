import React from 'react'
import { Outlet } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Navbar from './components/Navbar'

function App() {
  return (
    <>
     <Navbar/>
      <Outlet />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
        toastClassName="custom-toast"
      />
    </>
  )
}

export default App