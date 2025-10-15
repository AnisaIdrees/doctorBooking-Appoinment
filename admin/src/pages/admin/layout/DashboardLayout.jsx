import React, { useState } from 'react'
import Sidebar from '../../../components/Sidebar'
import Topbar from '../../../components/Topbar'
import Dashboard from '../Dashboard'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
    const [isOpen, setIsOpen] = useState(false)
    const toggelSideBar = () => setIsOpen(!isOpen)

    return (
        <>
            <div className='min-h-screen flex bg-gray-100 '>
                <Sidebar isOpen={isOpen} toggelSideBar={toggelSideBar} />

                <div className='flex-1 flex flex-col min-h-screen transition-all duration-300'>
                    <Topbar toggleSidebar={toggelSideBar} />

                    <main className="flex-1 p-6 bg-white shadow-inner">
                        <Outlet />
                    </main>
                </div>

            </div>
        </>
    )
}

export default DashboardLayout
