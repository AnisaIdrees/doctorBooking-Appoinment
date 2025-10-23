import React, { useState, useEffect, useRef, useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { images } from '../assets/assets.js'
import { motion } from "framer-motion";
import { toast } from 'react-toastify';
import { removeToken } from '../utils/auth.js';
import { useAuthContext } from '../context/AuthContext.jsx';

function Navbar() {
    const { token } = useAuthContext()
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    // const [token, setToken] = useState('')
    const [open, setOpen] = useState(false)
    const menuRef = useRef(null);

    // useEffect(() => {
    //     const saveToken = getToken()
    //     if (saveToken) {
    //         setToken(saveToken)
    //     }

    // }, [])

    const handleLogOut = () => {

        try {

            token
            removeToken()
            toast.success('Logout Successfully')
            navigate('/')

        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        function closeDropdown(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", closeDropdown);
        return () => document.removeEventListener("mousedown", closeDropdown);
    }, []);

    const navItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.15, duration: 0.4, ease: "easeOut" },
        }),
    };

    const hrVariants = {
        hidden: { width: 0, opacity: 0 },
        visible: { width: "60%", opacity: 1, transition: { duration: 0.5 } },
    };

    const sidebarVariants = {
        hidden: { x: "-100%" },
        visible: { x: 0, transition: { type: "spring", stiffness: 100 } },
        exit: { x: "-100%", transition: { duration: 0.8 } },
    };

    return (
        <>
            {/* Fixed Top Navbar */}
            <div className="fixed top-0  left-0 w-full bg-white z-50 shadow-sm flex items-center justify-between mb-6  px-4 md:px-6 lg:px-10 text-sm py-4">
                {/* Logo */}
                <img
                    onClick={() => navigate('/')}
                    className='h-8 sm:h-7 md:h-9 lg:h-9 w-auto object-contain cursor-pointer'
                    src={images.NavbarLogo}
                    alt="logo"
                />

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-start gap-5 font-medium">
                    {["Home", "Doctors", "About", "Contact"].map((item, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={navItemVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col items-center"
                        >
                            <NavLink to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                                <li className="py-1 text-[15px]">{item}</li>
                            </NavLink>
                            <motion.hr
                                variants={hrVariants}
                                initial="hidden"
                                animate="visible"
                                className="border-none outline-none h-0.5 bg-indigo-500 rounded"
                            />
                        </motion.div>
                    ))}
                </ul>

                {/* Profile / Login */}
                <div className="flex items-center gap-4">
                    {token ? (
                        <div ref={menuRef} className="flex items-center cursor-pointer relative">
                            <img
                                onClick={() => setOpen((prev) => !prev)}
                                className="w-9 rounded-full"
                                src={images.profileImg}
                                alt="profile"
                            />
                            <img
                                onClick={() => setOpen((prev) => !prev)}
                                className="w-[25px]"
                                src={images.dropdown}
                                alt="dropdown"
                            />
                            {open && (
                                <div className="absolute top-0 right-0 pt-14 px-2 text-base font-medium text-gray-600 z-20">
                                    <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                                        <p onClick={() => { navigate("my-profile"); setOpen(false); }} className="hover:text-black cursor-pointer">My Profile</p>
                                        <p onClick={() => { navigate("/My-Appoinments"); setOpen(false); }} className="hover:text-black cursor-pointer">My Appointments</p>
                                        <p onClick={handleLogOut} className="hover:text-black cursor-pointer">Logout</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate("/login")}
                            className="bg-gradient-to-r from-indigo-500 to-indigo-800 text-white text-[16px] px-5 py-3 rounded-full font-light hidden md:block cursor-pointer"
                        >
                            Register
                        </motion.button>
                    )}



                    {/* Hamburger */}
                    <div className="md:hidden">
                        <button
                            className="flex flex-col gap-1"
                            onClick={() => setShowMenu(true)}
                        >
                            <span className="w-6 h-0.5 bg-black"></span>
                            <span className="w-5 h-0.5 bg-black"></span>
                            <span className="w-4 h-0.5 bg-black"></span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Sidebar (Mobile Only) */}
            {showMenu && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={sidebarVariants}
                    className="fixed top-0 left-0 h-screen w-3/4 bg-white/95 backdrop-blur-sm shadow-2xl z-50 md:hidden flex flex-col"
                >
                    {/* Topbar with Close Icon */}
                    <div className="flex items-center justify-between px-4 py-4 border-b border-gray-400">
                        <img
                            className="h-7 w-auto object-contain"
                            src={images.NavbarLogo}
                            alt="logo"
                        />
                        <button
                            className="text-[22px] font-semibold text-gray-700 hover:text-gray-800 transition"
                            onClick={() => setShowMenu(false)}
                        >
                            X
                        </button>
                    </div>

                    {/* Sidebar Nav Items */}
                    <ul className="flex flex-col items-start gap-6 mt-8 px-6 text-[14px] font-medium flex-grow">
                        {["Home", "Doctors", "About", "Contact"].map((item, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={navItemVariants}
                                initial="hidden"
                                animate="visible"
                                className="flex flex-col"
                            >
                                <NavLink
                                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                    onClick={() => setShowMenu(false)}
                                >
                                    <li className="cursor-pointer hover:text-indigo-600">{item}</li>
                                </NavLink>
                                <motion.hr
                                    variants={hrVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="border-none outline-none h-0.5 bg-indigo-500 rounded"
                                />
                            </motion.div>
                        ))}
                    </ul>

                    {/* Register Button */}
                    <div className="px-6 pb-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => { navigate("/login"); setShowMenu(false); }}
                            className="w-full bg-gradient-to-r from-indigo-600 to-indigo-800 text-white text-[16px] px-5 py-3 rounded-full font-light cursor-pointer"
                        >
                            Register
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </>
    )
}

export default Navbar
