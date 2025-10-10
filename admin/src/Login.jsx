import React, { useContext, useState } from 'react'
import { icons } from './assets/assets.js'
import { motion } from 'framer-motion'
import { AdminContext } from './context/AdminContext.jsx'
import axios from 'axios';

function Login() {

    const [state, setState] = useState('Admin')
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const { setToken, backendUrl } = useContext(AdminContext)

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        try {


            if (state === "Admin") {
                const { data } = await axios.post(backendUrl + '/api/admin/login' , {email, password})

                if (data.success) {
                    setToken(data.token)
                    console.log(data.token);

                    
                }
            }

            else {

            }

        } catch (error) {

        }
    }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center  p-0 sm:p-3 md:p-7 lg:p-7">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white shadow-2xl rounded-2xl w-full max-w-md px-8 py-10"
                >
                    {/* Heading */}
                    <div className="text-center text-3xl font-bold text-indigo-700 mb-8">
                        <span className="text-gray-800">{state}</span> Login
                    </div>

                    <form onSubmit={onSubmitHandler}>
                        {/* Email Field */}
                        <div className="flex items-center  mt-4 mb-4 gap-3 px-5 py-2.5 rounded-full bg-gray-100 border border-transparent focus-within:border-indigo-500 transition-all duration-300">
                            <div className="text-gray-500 text-xl">
                                <icons.emailIcon />
                            </div>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                name="email"
                                className="outline-none     flex-1 text-gray-700 placeholder-gray-400"
                                type="email"
                                placeholder="john@gmail.com"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="flex items-center mt-5 mb-2 gap-3 px-5 py-2.5 rounded-full bg-gray-100 border border-transparent focus-within:border-indigo-500 transition-all duration-300">
                            <div
                                onClick={() => setShowPassword(!showPassword)}
                                className="cursor-pointer text-gray-500 text-xl"
                            >
                                {showPassword ? <icons.showPswdIcon /> : <icons.hidePswdIcon />}
                            </div>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                name="password"
                                className="outline-none bg-transparent flex-1 text-gray-700 placeholder-gray-400"
                                type={showPassword ? "text" : "password"}
                                placeholder="password"
                                required
                            />
                        </div>

                        {/* Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-6 rounded-full w-full py-2.5 font-medium text-white 
                       bg-gradient-to-r from-indigo-500 to-indigo-800 
                       hover:shadow-lg transition-all duration-300"
                        >
                            {state} Login
                        </motion.button>

                        {/* Role Switch */}
                        <p className="text-center text-sm mt-5 text-gray-600">
                            {state === "Admin" ? (
                                <>
                                    Want to login as Doctor?{" "}
                                    <span
                                        onClick={() => setState("Doctor")}
                                        className="text-indigo-600 font-semibold cursor-pointer hover:underline"
                                    >
                                        Click here
                                    </span>
                                </>
                            ) : (
                                <>
                                    Want to login as Admin?{" "}
                                    <span
                                        onClick={() => setState("Admin")}
                                        className="text-indigo-600 font-semibold cursor-pointer hover:underline"
                                    >
                                        Click here
                                    </span>
                                </>
                            )}
                        </p>
                    </form>
                </motion.div>
            </div>
        </>
    )
}

export default Login
