import React from 'react'
import { motion } from 'framer-motion'
import { images } from '../assets/assets'
function HeroSection() {
    return (
        <>
            <section
                className="relative bg-cover bg-center bg-no-repeat text-white min-h-screen flex items-center px-6 md:px-12 lg:px-20"
                style={{ backgroundImage: `url(${images.heroBanner})` }}
            >
                {/* Overlay for dark effect */}
                <div className="absolute inset-0 bg-black/40 sm:bg-black/20 md:bg-black/10  lg:bg-black/20 "></div>

                {/* Content */}
                <div className="relative grid md:grid-cols-2 gap-12 items-center w-full py-20 sm:py-5 md:py-0">
                    {/* Left Side Text */}
                    <motion.div
                        initial={{ x: -80, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="space-y-6 text-center md:text-left"
                    >
                        <h1 className="text-left text-shadow-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mt-0 sm:mt-6 md:mt-10">
                            Booking<span className='bg-gradient-to-r from-indigo-700 to-indigo-900 bg-clip-text text-transparent'>  Appointment</span>{" "} With Trusted Doctor
                        </h1>
                        <p className="text-gray-100 text-lg text-left">
                            We craft clean, modern, and fully responsive websites that look
                            amazing on every device and help your business grow online.
                        </p>
                        <a href="speciality"><motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-indigo-500 to-indigo-900 text-white px-6 py-3 rounded-full font-medium text-lg shadow-lg hover:shadow-indigo-800/50 transition"
                        >
                            Get Started
                        </motion.button></a>
                    </motion.div>

                    {/* Right Side Image */}

                    <motion.div
                        initial={{ x: 80, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative flex justify-center md:justify-end"
                    >
                        {/* Gradient Blob Background */}
                        <div className="absolute -top-0 -right-6 w-[250px] h-[250px] mt-5
                        sm:w-[300px] sm:h-[300px] md:w-[200px] md:h-[200px] 
                        lg:w-[500px] lg:h-[500px]
                        bg-gradient-to-tr from-indigo-700 via-indigo-800 to-indigo-800 
                        rounded-[60%] blur-4xl opacity-90 animate-pulse">
                        </div>

                        {/* Glass Shine Layer */}
                        <div className="absolute top-20 right-8 w-[190px] h-[190px] 
                        sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] 
                       bg-white/10 backdrop-blur-lg border border-white/20
                        rounded-full shadow-xl">
                        </div>

                        {/* Doctor Image */}
                        <img
                            src={images.doctor}
                            alt="Hero"
                            className="relative z-10 
                        w-[80%] sm:w-[85%] md:w-[90%] lg:w-[75%] xl:w-[70%] 
                        h-auto max-h-[500px] sm:max-h-[600px] lg:max-h-[700px] 
                        drop-shadow-2xl rounded-3xl object-contain"
                        />
                    </motion.div>

                </div>
            </section>
        </>

    )
}

export default HeroSection