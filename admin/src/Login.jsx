import React, { useState } from 'react'
import { icons } from './assets/assets.js'

function Login() {

    const [state, setState] = useState('Admin')
    const [showPassword, setShowPassword] = useState(false)

    return (
        <>
            <div>
                <form>
                    <div><span>{state}</span>Admin</div>
                    <div>
                        <div className='flex items-center mt-4 mb-4 gap-3 px-5 py-2.5 rounded-full bg-gray-50'>
                            <div>{<icons.emailIcon />}</div>
                            <input
                                name='email'
                                className='outline-none bg-transparent'
                                type="email"
                                placeholder='john@gmail.com'
                                required />
                        </div>
                        <div className='flex items-center mt-5 mb-2 gap-3 px-5 py-2.5 rounded-full bg-gray-50'>
                            <div
                                onClick={() => setShowPassword(!showPassword)}
                                className='cursor-pointer position-relative transition-all'>{showPassword ? <icons.showPswdIcon /> : <icons.hidePswdIcon />}</div>
                            <input
                                name='password'
                                className='outline-none bg-transparent'
                                type={showPassword ? 'text' : 'password'}
                                placeholder='password'
                                required />
                        </div>
                        <button>
                            {
                                state === 'Admin'
                                    ? <p>Doctor Login <span onClick={() => setState('Doctor')}>Click here</span></p>
                                    : <p>Admin Login <span onClick={() => setState('Admin')}>Click here</span></p>
                            }
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
