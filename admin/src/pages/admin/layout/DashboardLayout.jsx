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
            <div className='h-screen  flex bg-gray-100 '>

                <div className='h-screen  overflow-hidden '><Sidebar isOpen={isOpen} toggelSideBar={toggelSideBar} /></div>

                <div className='flex-1 flex flex-col min-h-screen transition-all duration-300'>
                    <Topbar toggleSidebar={toggelSideBar} />

                    <main className="flex-1 py-4 sm:py-7 px-4 sm:px-7 md:px-10 bg-gray-100 shadow-inner">
                        <Outlet />
                    </main>
                </div>

            </div>
        </>
    )
}

export default DashboardLayout
