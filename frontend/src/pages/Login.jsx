import React, { useState } from 'react'
import { icons } from '../assets/assets'

function Login() {
  const [state, setState] = useState('signUp')
  const [showPassword, setShowPassword] = useState(false)


  return (
    <>
      <div className='flex justify-center items-center min-h-screen px-6 sm:px-0 bg-gray-100'>

        <div className='w-full rounded-lg shadow-lg p-10 sm:w-96 text-sm'>
          <h2 className='text-3xl font-semibold text-center mb-3'>
            {state === 'signUp' ? 'Create Account' : 'Login'}
          </h2>
          <p className='text-center text-sm'>
            {state === 'signUp' ? 'Create your account' : 'login your account!'}
          </p>

          <form>
            {state === 'signUp' && (
              <div className='flex items-center mt-4 mb-4 gap-3 px-5 py-2.5 rounded-full bg-amber-50'>
                <div>{<icons.userIcon />}</div>
                <input
                  className='outline-none bg-transparent'
                  type="text"
                  placeholder='full name'
                  required />
              </div>
            )}


            <div className='flex items-center mt-4 mb-4 gap-3 px-5 py-2.5 rounded-full bg-amber-50'>
              <div>{<icons.emailIcon />}</div>
              <input
                className='outline-none bg-transparent'
                type="email"
                placeholder='john@gmail.com'
                required />
            </div>

            <div className='flex items-center mt-4 mb-2 gap-3 px-5 py-2.5 rounded-full bg-amber-50'>
              <div
                onClick={() => setShowPassword(!showPassword)}
                className='cursor-pointer position-relative'>{showPassword ? <icons.showPswdIcon /> : <icons.hidePswdIcon />}</div>
              <input
                className='outline-none bg-transparent'
                type={showPassword ? 'text' : 'password'}
                placeholder='password'
                required />

            </div>
            <p className=' mx-2 mb-2 text-indigo-500 cursor-pointer'>Forgot password?</p>
            <button className=' cursor-pointer mt-3 rounded-full w-full py-2.5  bg-gradient-to-r from-indigo-500 to-indigo-800 text-white font-medium'>{state === 'signUp' ? 'Sign up' : 'Login'}</button>
          </form>


          {state === 'signUp' ? (
            <p className='text-gray-600 text-center mt-4 text-xs'>Already have an account? {" "}
              <span onClick={() => setState('Login')} className='text-blue-500 cursor-pointer hover:underline'> login here</span>
            </p>
          ) : (
            <p className='text-gray-600 text-center mt-4 text-xs'>Already have an account? {" "}
              <span onClick={() => setState('signUp')} className='text-blue-500 cursor-pointer hover:underline'> Sign up </span>
            </p>
          )}
        </div>
      </div>
    </>
  )
}

export default Login