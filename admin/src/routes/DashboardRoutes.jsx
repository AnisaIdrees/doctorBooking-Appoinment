import React from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Dashboard from '../pages/admin/Dashboard'
import AllAppoinments from '../pages/admin/AllAppoinments'
import AddDoctors from '../pages/admin/AddDoctors'
import DoctorsList from '../pages/admin/DoctorsList'
import DashboardLayout from '../pages/admin/layout/DashboardLayout'

function DashboardRoutes() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<DashboardLayout/>}>

        <Route index element={<Dashboard/>}/>
        <Route path='all-appoinments' element={<AllAppoinments/>}/>
        <Route path='add-doctors' element={<AddDoctors/>}/>
        <Route path='doctor-list' element={<DoctorsList/>}/>

        </Route>
      </Routes>
      </Router>

    </div>
  )
}

export default DashboardRoutes
