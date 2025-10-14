import React, { useContext, useState } from 'react'
import { icons } from '../assets/assets.js';
import { motion } from 'framer-motion'
import { AdminContext } from '../context/AdminContext.jsx';
import axios from 'axios';
import { setAToken } from '../utils/auth.js';
import { toast } from 'react-toastify';

function Login() {

    const [state, setState] = useState('Admin')
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const { setToken, backendUrl } = useContext(AdminContext)

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {


            if (state === "Admin") {
                const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })

                if (data.success) {
                    console.log('admin login');
                    setToken(data.token)
                    setAToken(data.token)
                    console.log(data.token);
                    toast.success(data.message)

                }
                setEmail('');
                setPassword('')
            }

            else {
                toast.error(data.message)

            }

        } catch (error) {
            toast.error(error.message)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center  p-0 sm:p-3 md:p-7 lg:p-7">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full rounded-lg shadow-lg p-4 sm:p-6 md:p-10 sm:w-98 text-sm"
                >
                    {/* Heading */}
                    <div className="text-center text-3xl font-bold text-indigo-700 mb-8">
                        <span className="text-gray-800">{state}</span> Login
                    </div>

                    <form onSubmit={onSubmitHandler}>
                        {/* Email Field */}
                        <div className="flex items-center  mt-4 mb-4 gap-3 px-5 py-2.5 rounded-full bg-gray-100 border border-transparent focus-within:border-indigo-500 transition-all duration-300">
                            <div className="text-gray-800 text-[20px]">
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
                                className="cursor-pointer text-gray-800 text-[20px]"
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


                        <motion.button
                            whileHover={!loading ? { scale: 1.05 } : {}}
                            whileTap={!loading ? { scale: 0.95 } : {}}
                            disabled={loading}
                            className={`mt-6 rounded-full w-full py-2.5 font-medium text-white flex justify-center items-center gap-2
                            ${loading
                                    ? "bg-gradient-to-r from-indigo-400 to-indigo-600 cursor-not-allowed"
                                    : "bg-gradient-to-r from-indigo-500 to-indigo-800 hover:shadow-lg"
                                } transition-all duration-300`}
                        >
                            {loading ? (
                                <>
                                    {/* Spinner */}
                                    <svg
                                        className="animate-spin h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                        ></path>
                                    </svg>
                                    Logging in...
                                </>
                            ) : (
                                `${state} Login`
                            )}
                        </motion.button>

                        {/* Role Switch */}
                        <p className="text-center text-sm mt-5  pt-2 pb-5 text-gray-600">
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
