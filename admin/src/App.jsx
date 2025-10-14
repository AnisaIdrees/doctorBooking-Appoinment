import React, { useContext } from 'react'
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import { AdminContext } from './context/AdminContext';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DashboardRoutes from './routes/DashboardRoutes';

function App() {

  const { token } = useContext(AdminContext)

  return (
    <>

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

      {token ? (
        // Dashboard layout
        <>
          <div className='bg-[#F8F9FD]'>
            <Navbar />
          </div>

          <div className='flex items-start'>
            <Sidebar />
            <DashboardRoutes />
          </div>

        </>
      ) : (
        <Login />
      )}

    </>
  )

}

export default App
