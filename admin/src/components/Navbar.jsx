import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { AdminContext } from '../context/AdminContext.jsx'
import { removeToken } from '../../../frontend/src/utils/auth'
import { toast } from 'react-toastify'

function Navbar() {
    const { token, setToken } = useContext(AdminContext)

    const handleLogOut = () => {
        try {
            token && setToken('')
            removeToken()
            toast.success('Logout Successfully')

        } catch (error) {
            toast.error(error.message)
        }

    }

    return (
        <>
            <nav className="w-full flex justify-between items-center px-4 sm:px-6 py-4 shadow bg-white text-gray-800 sticky top-0 z-50">


                <div className="flex items-center gap-2 sm:gap-3">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
                        <span className="text-indigo-600">Admin</span> Panel
                    </h1>
                </div>


                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLogOut}
                    className="px-4 sm:px-5 py-2 rounded-full font-medium text-white transition-all duration-300 bg-gradient-to-r from-indigo-500 to-indigo-800 hover:shadow-lg"
                >
                    Logout
                </motion.button>
            </nav>
        </>
    )
}

export default Navbar
