import React from 'react'
import { useNavigate } from 'react-router'
import { useAuthContext } from '../context/AuthContext'
import Navbar from '../components/Navbar'

function Home() {
  const { user } = useAuthContext()
  const navigate = useNavigate()

  return (
    <>

      <div className='h-screen w-full'>
        <Navbar />
        <h1 className='text-5xl flex flex-col items-center justify-center'>Home</h1>



        {user ? <p>Welcome {user.email}</p> : <button onClick={() => navigate('/login')} className=' mt-5 p-3 px-8 rounded-4xl bg-blue-600 hover:bg-blue-500 transition-all duration-75 cursor-pointer'>
          login

        </button>}

      </div>
    </>

  )
}

export default Home