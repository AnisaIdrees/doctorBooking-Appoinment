import React from 'react'
import { useNavigate } from 'react-router'
import { images } from '../assets/assets'


function Banner() {
    const navigate = useNavigate()
    return (
        <div className='flex bg-blue-400 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
            {/*------------- left side ---------------*/}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-14 lg:pl-5 '>
                <div>
                    <p>Book Appoinment</p>
                    <p>With 100+ Trusted Doctors</p>
                </div>
                <button
                    onClick={() => navigate("/login")}
                    className="bg-gradient-to-r from-indigo-500 to-indigo-800 text-white text-[16px] px-5 py-3 rounded-full font-light hidden md:block cursor-pointer"
                >
                    Create Account
                </button>
            </div>

            {/*------------- right side ---------------*/}
            <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
                <img className='w-full absolute bottom-0 right-0 max-w-md' src={images.doctor} alt="" />
            </div>
        </div>
    )
}

export default Banner