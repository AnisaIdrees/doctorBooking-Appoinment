import React, { useContext } from 'react'
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import { AdminContext } from './context/AdminContext';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DashboardRoutes from './routes/DashboardRoutes';
import DashboardLayout from './pages/admin/layout/DashboardLayout';

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
          <DashboardLayout />
        </>
      ) : (
        <Login />
      )}

    </>
  )

}

export default App
