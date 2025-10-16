import React, { useState } from 'react'
import Sidebar from '../../../components/Sidebar'
import Topbar from '../../../components/Topbar'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
    const [isOpen, setIsOpen] = useState(false)
    const toggelSideBar = () => setIsOpen(!isOpen)

    return (
        <>
            <div className="h-screen bg-gray-100">
                {/*  Fixed Sidebar */}
                <Sidebar isOpen={isOpen} toggelSideBar={toggelSideBar} />

                {/* Main Content */}
                <div className="md:ml-64 flex flex-col h-screen">

                    {/*  Fixed Topbar */}
                    <div className="fixed top-0 left-0 md:left-64 right-0 z-40 bg-white shadow">
                        <Topbar toggleSidebar={toggelSideBar} />
                    </div>

                    {/*  Scrollable Main Area (below topbar) */}
                    <main className="flex-1 overflow-y-auto mt-[64px] p-3 px-4 md:px-13 bg-gray-100">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout
