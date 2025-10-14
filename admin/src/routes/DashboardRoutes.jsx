import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Dashboard from '../pages/admin/Dashboard'
import AllAppoinments from '../pages/admin/AllAppoinments'
import AddDoctors from '../pages/admin/AddDoctors'
import DoctorsList from '../pages/admin/DoctorsList'

function DashboardRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<></>}/>
        <Route path='/admin-dashboard' element={Dashboard}/>
        <Route path='/all-appoinments' element={AllAppoinments}/>
        <Route path='/add-doctors' element={AddDoctors}/>
        <Route path='/doctor-list' element={DoctorsList}/>
      </Routes>
    </div>
  )
}

export default DashboardRoutes
