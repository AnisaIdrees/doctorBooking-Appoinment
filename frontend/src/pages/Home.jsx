import React from 'react'
import { useNavigate } from 'react-router'

function Home() {
const navigate= useNavigate()

  return (
    <div className='h-screen flex flex-col items-center justify-center w-full bg-gray-200'>
      <h1 className='text-5xl flex flex-col items-center justify-center'>Home</h1>
      <button onClick={()=>navigate('/login')} className=' mt-5 p-3 px-8 rounded-4xl bg-blue-600 hover:bg-blue-500 transition-all duration-75 cursor-pointer'>Login</button>
    </div>
  )
}

export default Home