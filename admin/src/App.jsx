import React, { useContext } from 'react'
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import { AdminContext } from './context/AdminContext';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/admin/Dashboard';
import AddDoctors from './pages/admin/AddDoctors';
import AllAppoinments from './pages/admin/AllAppoinments';
import DoctorsList from './pages/admin/DoctorsList';
import DashboardLayout from './pages/admin/layout/DashboardLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
        <Routes>
          {/* Parent Layout */}
          <Route path="/" element={<DashboardLayout />}>
            {/* Nested Routes */}
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="add-doctor" element={<AddDoctors />} />
            <Route path="appointments" element={<AllAppoinments />} />
            <Route path="doctors-list" element={<DoctorsList />} />
          </Route>
        </Routes>
      ) : (
        <Login />
      )}

    </>
  )

}

export default App
