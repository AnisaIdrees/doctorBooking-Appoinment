import React, { useState } from 'react'
import { icons } from '../assets/assets'

function Login() {
  const [state, setState] = useState('signUp')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    console.log(e.target.value);

  }

//form validation
const validateForm = () => {
    if (state === "signUp" && name.trim().length < 3) {
      setError("Name must be at least 3 characters long");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Enter a valid email address");
      return false;
    }
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      setError("Password must be 6+ chars, 1 uppercase, 1 number, 1 special symbol");
      return false;
    }
    setError(""); // clear error
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(`${state} Successful ✅`);
      // 👇 yahan backend API call ya Firebase Auth karni hogi
    }
  };

  return (
    <>
      <div className='flex justify-center items-center min-h-screen px-6 sm:px-0 bg-gray-100'>

        <div className='w-full rounded-lg shadow-lg p-10 px-3 sm:w-98 text-sm'>
          <h2 className='text-3xl font-semibold text-center mb-3'>
            {state === 'signUp' ? 'Create Account' : 'Login'}
          </h2>
          <p className='text-center text-sm'>
            {state === 'signUp' ? 'Create your account' : 'login your account!'}
          </p>

          <form onSubmit={handleSubmit}>
            {state === 'signUp' && (
              <div className='flex items-center mt-4 mb-4 gap-3 px-5 py-2.5 rounded-full bg-amber-50'>
                <div>{<icons.userIcon />}</div>
                <input
                  onChange={handleChange}
                  value={formData.name}
                  name='name'
                  className='outline-none bg-transparent text-black'
                  type="text"
                  placeholder='full name'
                  required />
              </div>
            )}


            <div className='flex items-center mt-4 mb-4 gap-3 px-5 py-2.5 rounded-full bg-amber-50'>
              <div>{<icons.emailIcon />}</div>
              <input
                onChange={handleChange}
                value={formData.email}
                name='email'
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
                onChange={handleChange}
                value={formData.password}
                name='password'
                className='outline-none bg-transparent'
                type={showPassword ? 'text' : 'password'}
                placeholder='password'
                required />
            </div>

            {error && <p className="text-red-500 text-xs mb-2 pb-3 px-4">{error}</p>}

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