import React from 'react'
import { Outlet, useNavigation } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Navbar from './components/Navbar'
import Footer from './components/Footer';

function App() {

  const navigate = useNavigation()
  if (navigate.state === 'loading') {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
        loading
        <div className="w-14 h-14 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
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