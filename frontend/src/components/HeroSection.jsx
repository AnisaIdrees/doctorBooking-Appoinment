import React from 'react'
import { motion } from 'framer-motion'
import { images } from '../assets/assets'
function HeroSection() {
    return (
        <>
            <section className="bg-linear-to-r from-indigo-700 via-blue-400 to-cyan-600 text-white min-h-screen flex items-center py-0 px-6 md:px-12 lg:px-20">
                <div className="grid md:grid-cols-2 gap-12 items-center w-full">

                    {/* Left Side Text */}
                    <motion.div
                        initial={{ x: -80, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-6 text-center md:text-left"
                    >
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                           Booking Appoinment With Trusted Doctor 
                        </h1>
                        <p className="text-gray-300 text-lg ">
                            We craft clean, modern, and fully responsive websites that look
                            amazing on every device and help your business grow online.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-indigo-500 to-indigo-800 text-white px-6 py-3 rounded-full font-medium text-lg shadow-lg hover:shadow-indigo-800/50 transition"
                        >
                            Get Started
                        </motion.button>
                    </motion.div>

                    {/* Right Side Image */}
                    <motion.div
                        initial={{ x: 80, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex justify-center md:justify-end"
                    >
                        <img
                            src={images.profileImg}
                            alt="Hero"
                            className="w-[85%] md:w-[75%] lg:w-[70%] drop-shadow-2xl"
                        />
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default HeroSection