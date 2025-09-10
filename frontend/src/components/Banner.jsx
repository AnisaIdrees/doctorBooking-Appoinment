import React from 'react'
import { useNavigate } from 'react-router'
import { images } from '../assets/assets'


function Banner() {
    const navigate = useNavigate()
    return (
        <div className='flex mt-9 sm:mt-3 md:mt-10 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-15'>
            {/*------------- left side ---------------*/}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-14 lg:pl-5 '>
                <div className='text-xl sm:text-2xl md:text-3xl lg:text-lg font-semibold text-white'>
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
                        Book Appointment
                    </p>
                    <p className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white/90">
                        With 100+ Trusted Doctors
                    </p>

                </div>
                <button
                    onClick={() => navigate("/login")}
                    className="mt-7 bg-white text-indigo-800  border-indigo-800 border-2 px-5 py-3 rounded-full font-light cursor-pointer hover:bg-indigo-50 transition"
                >
                    Create Account
                </button>

            </div>

            {/*------------- right side ---------------*/}
            <div className='hidden md:block md:w-1/5 lg:w-[520px] relative'>
                <img className='w-full absolute bottom-0 right-0 max-w-md pb-[-5]' src={images.appoinmentDr} alt="" />
            </div>
        </div>
    )
}

export default Banner