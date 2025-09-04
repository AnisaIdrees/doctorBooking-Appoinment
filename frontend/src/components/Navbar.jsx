import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { images } from '../assets/assets.js'

function Navbar() {
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(false)
    return (
        <>
            <div className='flex items-center justify-between px-8 text-sm py-4 mb-5 border-b border-b-gray-400'>
                <h1 className='text-xl font-bold'>doctors</h1>
                <ul className='hidden md:flex items-start gap-5 font-medium'>
                    <NavLink>
                        <li className='py-1'>Home</li >
                        <hr className='border-none outline-none h-0.5 bg-primmary w-3/5 m-auto' />
                    </NavLink>
                    <NavLink>
                        <li className='py-1'>Appoinments</li>
                        <hr className='border-none outline-none h-0.5 bg-primmary w-3/5 m-auto' />
                    </NavLink>
                    <NavLink>
                        <li className='py-1'>About</li>
                        <hr className='border-none outline-none h-0.5 bg-primmary w-3/5 m-auto' />
                    </NavLink>
                    <NavLink>
                        <li className='py-1'>Contact</li>
                        <hr className='border-none outline-none h-0.5 bg-primmary w-3/5 m-auto' />
                    </NavLink>
                </ul>
                <div className=' flex items-center gap-4 '>
                    {
                        token
                            ? <div className='flex items-center cursor-pointer group relative'>
                                <img className='w-9 rounded-full' src={images.profileImg} alt="profile" />
                                <img className='w-[25px]' src={images.dropdown} alt="dropdown" />
                                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                        <p className='hover:text-black cursor-pointer'>My profile</p>
                                        <p className='hover:text-black cursor-pointer'>My Appoinments</p>
                                        <p className='hover:text-black cursor-pointer'>Logout</p>
                                    </div>
                                </div>
                            </div>
                            : <button onClick={() => navigate('/login')} className='bg-gradient-to-r from-indigo-500 to-indigo-800  text-white text-[16px] px-5 py-3 rounded-full font-light hidden md:block cursor-pointer'>Create account</button>

                    }
                </div>
            </div>
        </>
    )
}

export default Navbar