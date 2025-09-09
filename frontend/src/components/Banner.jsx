import React from 'react'
import { useNavigate } from 'react-router'
import { images } from '../assets/assets'


function Banner() {
    const navigate = useNavigate()
    return (
        <div className='flex bg-blue-400 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
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
                    className="mt-7 bg-gradient-to-r from-indigo-500 to-indigo-800 text-white text-[16px] px-5 py-3 rounded-full font-light  cursor-pointer"
                >
                    Create Account
                </button>
            </div>

            {/*------------- right side ---------------*/}
            <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
                <img className='w-full absolute bottom-0 right-0 max-w-md' src={images.appoinmentDr} alt="" />
            </div>
        </div>

        // <div className="relative flex flex-col items-center md:items-start justify-center bg-blue-400 rounded-2xl px-6 sm:px-10 md:px-14 lg:px-16 py-10 md:py-14 lg:py-16 my-10 md:mx-10 shadow-lg overflow-hidden">

        //     {/* background image only on md+ screens */}
        //     <div className="hidden md:block absolute right-0 bottom-0 md:w-1/2 lg:w-[380px] opacity-80">
        //         <img
        //             className="w-full max-w-sm object-contain"
        //             src={images.appoinmentDr}
        //             alt="Doctor"
        //         />
        //     </div>

        //     {/*------------- text content ---------------*/}
        //     <div className="relative z-10 text-center md:text-left max-w-xl">
        //         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-snug">
        //             Book Appointment
        //         </h2>
        //         <p className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl text-white font-light">
        //             With 100+ Trusted Doctors
        //         </p>
        //         <button
        //             onClick={() => navigate("/login")}
        //             className="mt-6 bg-gradient-to-r from-indigo-500 to-indigo-800 hover:from-indigo-600 hover:to-indigo-900 transition-all duration-300 text-white text-[16px] px-6 py-3 rounded-full font-medium"
        //         >
        //             Create Account
        //         </button>
        //     </div>
        // </div>

    )
}

export default Banner