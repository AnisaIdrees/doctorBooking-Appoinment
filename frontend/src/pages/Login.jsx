import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { icons } from '../assets/assets'
import axios from 'axios'
import { setToken, setUser } from '../utils/auth'
import EmailVerify from './EmailVerify'

function Login() {

  const navigate = useNavigate()
  const [state, setState] = useState('signUp')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
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
    if (state === "signUp" && formData.name.trim().length < 3) {
      setError("Name must be at least 3 characters long");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Enter a valid email address");
      return false;
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      setError(
        "Password must be at least 8 characters, include 1 uppercase letter and 1 number"
      );
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      if (validateForm()) {
        if (state === 'signUp') {
          const { data } = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/auth/signUp`,
            formData
          );

          if (data.success) {
            console.log('Sign up successfully:', data.message);
            console.log('Sign up data:', data);
            console.log("Token:", data.token);

            setToken(data.token);
            setUser(data.user);

            // Reset form data
            setFormData({
              name: "",
              email: "",
              contact: "",
              password: ""
            });

            //for email verify
            const { data: data2 } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/send-verify-otp`, {}, {
              headers: { Authorization: `Bearer ${data.token}` }
            }
            )
            alert("OTP sent to your email. Please verify.");
            console.log(data2.message);

            navigate('/email-verify')
          }
        }
        else {
          await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, formData)
          console.log("Login successfully:", data);
          setFormData({
            name: "",
            email: "",
            contact: "",
            password: ""
          });
          navigate("/");
        }

      }
    } catch (error) {
      console.log('Sign up error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='flex justify-center items-center min-h-screen px-4 sm:px-6 md:px-12 bg-gray-100'>
        <div className='w-full rounded-lg shadow-lg p-4 sm:p-6 md:p-10 sm:w-98 text-sm'>
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

            <div className='flex items-center mt-5 mb-2 gap-3 px-5 py-2.5 rounded-full bg-amber-50'>
              <div
                onClick={() => setShowPassword(!showPassword)}
                className='cursor-pointer position-relative transition-all'>{showPassword ? <icons.showPswdIcon /> : <icons.hidePswdIcon />}</div>
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

            <button
              disabled={loading}
              className={`mt-3 rounded-full w-full py-2.5 font-medium text-white 
                bg-gradient-to-r from-indigo-500 to-indigo-800 
                ${loading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}`}
            >
              {loading
                ? (state === "signUp" ? "Signing up..." : "Logging in...")
                : (state === "signUp" ? "Sign up" : "Login")}
            </button>
          </form>
          {state === 'signUp' ? (
            <p className='text-gray-600 text-center mb-3 mt-4 text-xs'>Already have an account? {" "}
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