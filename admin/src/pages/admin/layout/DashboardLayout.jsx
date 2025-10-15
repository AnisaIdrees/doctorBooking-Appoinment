import React from 'react'
import Sidebar from '../../../components/Sidebar'
import Topbar from '../../../components/Topbar'
import Dashboard from '../Dashboard'

function DashboardLayout() {
    return (
        <>
            <div className='min-h-screen bg-gray-100  flex'>
                <Sidebar />

                <div className='flex-1 flex flex-col'>
                    <Topbar />
                    <Dashboard />
                </div>

            </div>
        </>
    )
}

export default DashboardLayout
