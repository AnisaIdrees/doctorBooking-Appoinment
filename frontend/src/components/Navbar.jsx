import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className='flex items-center justify-between px-8 text-sm py-4 mb-5 border-b-gray-400'>
                <h1>doctors</h1>
                <ul className='hidden md:flex items-start gap-5 font-medium'>
                    <NavLink>
                        <li className='py-1'>Home</li >
                        <hr className='border-none outline-none h-0.5 bg-primmary w-3/5 m-auto'/>
                    </NavLink>
                    <NavLink>
                        <li className='py-1'>Appoinments</li>
                        <hr className='border-none outline-none h-0.5 bg-primmary w-3/5 m-auto' />
                    </NavLink>
                    <NavLink>
                        <li className='py-1'>About</li>
                        <hr className='border-none outline-none h-0.5 bg-primmary w-3/5 m-auto'/>
                    </NavLink>
                    <NavLink>
                        <li className='py-1'>Contact</li>
                        <hr className='border-none outline-none h-0.5 bg-primmary w-3/5 m-auto'/>
                    </NavLink>
                </ul>
                <div><button>Create account</button></div>
            </div>
        </>
    )
}

export default Navbar