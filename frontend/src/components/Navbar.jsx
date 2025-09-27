import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { images } from '../assets/assets.js'
import { motion } from "framer-motion";
import { useRef } from 'react';

function Navbar() {
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)
    const [open, setOpen] = useState(false)
    const menuRef = useRef(null);

    useEffect(() => {
        function closeDropdown(e) {
            // agar click dropdown ke bahar hai to close
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", closeDropdown);
        return () => document.removeEventListener("mousedown", closeDropdown);
    }, []);

    console.log(open);

    const navItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.15, duration: 0.4, ease: "easeOut" },
        }),
    };

    // hr line animation
    const hrVariants = {
        hidden: { width: 0, opacity: 0 },
        visible: {
            width: "60%",
            opacity: 1,
            transition: { duration: 0.5, ease: "easeInOut" },
        },
    };

    // Sidebar animation
    const sidebarVariants = {
        hidden: { x: "-100%" },
        visible: { x: 0, transition: { type: "spring", stiffness: 100 } },
        exit: { x: "-100%", transition: { duration: 0.8 } },
    };

    return (
        <>
            {/* Top Navbar */}
            <div className="flex items-center justify-between px-4 md:px-6 lg:px-10 text-sm py-4 mb-1 shadow-sm">
                <img onClick={() => navigate('/')} className='h-8 sm:h-7 md:h-9 lg:h-9 w-auto object-contain  py-0' src={images.NavbarLogo} alt="" />

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
                        <div className="flex items-center cursor-pointer group relative">
                            <img
                                onClick={() => setOpen(!open)}
                                className="w-9 rounded-full"
                                src={images.profileImg}
                                alt="profile"
                            />
                            <img
                                onClick={() => setOpen(!open)}
                                className="w-[25px]"
                                src={images.dropdown}
                                alt="dropdown"
                            />
                            {/* <div
                                onClick={() => setOpen(!open)}
                                className={`absolute top-0 right-0 pt-14 px-2 text-base font-medium text-gray-600 z-20 hidden 
                            ${open ? 'block' : 'hidden'}
                          md:group-hover:block`}>
                                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                                    <p
                                        onClick={() => navigate("my-profile")}
                                        className="hover:text-black cursor-pointer"
                                    >
                                        My profile
                                    </p>
                                    <p
                                        onClick={() => navigate("/My-Appoinments")}
                                        className="hover:text-black cursor-pointer"
                                    >
                                        My Appoinments
                                    </p>
                                    <p className="hover:text-black cursor-pointer">Logout</p>
                                </div>
                            </div> */}
                            <div

                                className={`absolute top-0 right-0 pt-14 px-2 text-base font-medium text-gray-600 z-20 
    ${open ? 'block' : 'hidden'} md:group-hover:block`}
                            >
                                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                                    <p onClick={() => navigate("my-profile")} className="hover:text-black cursor-pointer">My profile</p>
                                    <p onClick={() => navigate("/My-Appoinments")} className="hover:text-black cursor-pointer">My Appoinments</p>
                                    <p className="hover:text-black cursor-pointer">Logout</p>
                                </div>
                            </div>

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


                    {/* Hamburger / Close Toggle (Mobile Only) */}
                    <div className=" px-0 md:hidden">
                        {!showMenu ? (
                            // Hamburger Button
                            <button
                                className="flex flex-col gap-1 -rotate-180"
                                onClick={() => setShowMenu(true)}
                            >
                                <span className="w-6 h-0.5 bg-black"></span>
                                <span className="w-5 h-0.5 bg-black"></span>
                                <span className="w-4 h-0.5 bg-black"></span>
                            </button>
                        ) : (
                            // Close Button
                            <button
                                className="text-[20px] font-light text-black hover:text-gray-800 transition"
                                onClick={() => setShowMenu(false)}
                            >
                                ✖
                            </button>
                        )}
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
                    className="fixed top-0 left-0 h-screen w-3/4 bg-white/90  backdrop-blur-sm transition-opacity duration-300 shadow-2xl z-50 md:hidden flex flex-col "
                >
                    {/* Topbar (Logo + Close Button) */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-400">
                        <img
                            className="h-7 w-auto object-contain"
                            src={images.NavbarLogo}
                            alt="logo"
                        />
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
                                <NavLink to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
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

                    {/* Register Button (Bottom) */}
                    <div className="px-6 pb-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate("/login")}
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