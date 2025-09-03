import React from 'react'
import { useNavigate } from 'react-router'
import { useAuthContext } from '../context/AuthContext'
import Navbar from '../components/Navbar'

function Home() {
  const { user } = useAuthContext()
  const navigate = useNavigate()

  return (
    <>

      <div className='h-screen max-w-full'>
        <Navbar />
     

      </div>
    </>

  )
}

export default Home