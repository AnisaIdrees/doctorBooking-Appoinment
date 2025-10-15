import React, { useContext } from 'react'
import { icons } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { AdminContext } from '../context/AdminContext'
import { removeToken } from '../utils/auth'
import { toast } from 'react-toastify'

const Sidebar = ({ isOpen, toggelSideBar }) => {

    const { token, setToken } = useContext(AdminContext)

    const handleLogOut = () => {
        try {
            token && setToken('');
            removeToken()
            toast.success('Logout Successfully')
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <aside className={`${isOpen ? 'translate-x-0' : '-translate-x-full'
            } w-64 h-screen bg-white border border-gray-100 shadow md:translate-x-0 md:static top-0 left-0`}>
            <div>

                <div className='px-3 flex justify-between items-center mb-10 mt-5'>
                    <h1 className='text-2xl font-bold px-4 py-2 md:px-5 '>Admin <span className='text-indigo-600'>Panel</span></h1>
                    <button
                        className='md:hidden text-2xl font-bold hover:text-[#2c1fdd]'
                        onClick={toggelSideBar}>
                        {<icons.closeBtn />}
                    </button>
                </div>

                <nav className="flex-1">
                    <ul className="space-y-3">
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) => `flex items-center gap-3  px-4 py-2 md:px-5 cursor-pointer ${isActive ? 'border-r-4 border-blue-700 bg-gray-200' : ''}`}
                            >
                                <icons.dashboard className="text-xl" />
                                <span>Dashboard</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/add-doctor"
                                className={({ isActive }) => `flex items-center gap-3  px-4 py-2 md:px-5 cursor-pointer ${isActive ? 'border-r-4 border-blue-700 bg-gray-200' : ''}`}

                            >
                                <icons.addDoctor className="text-xl" />
                                <span>Add Doctor</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/appointments"
                                className={({ isActive }) => `flex items-center gap-3  px-4 py-2 md:px-5 cursor-pointer ${isActive ? 'border-r-4 border-blue-700 bg-gray-200' : ''}`}

                            >
                                <icons.appoinments className="text-xl" />
                                <span>All Appointments</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/doctors-list"
                                className={({ isActive }) => `flex items-center gap-3  px-4 py-2 md:px-5 cursor-pointer ${isActive ? 'border-r-4 border-blue-700 bg-gray-200' : ''}`}

                            >
                                <icons.doctorList className="text-xl" />
                                <span>Doctors List</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                {/* Logout Button */}
                <div
                    onClick={handleLogOut}
                    className="flex items-center gap-3 mt-6 px-4 py-2 md:px-5 rounded-lg cursor-pointer hover:bg-indigo-500 transition-all duration-200"
                >
                    <icons.logout className="text-xl" />
                    <span>Logout</span>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
