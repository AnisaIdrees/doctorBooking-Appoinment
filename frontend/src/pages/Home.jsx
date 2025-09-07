import React from 'react'
import { useNavigate } from 'react-router'
import { useAuthContext } from '../context/AuthContext'
import HeroSection from '../components/HeroSection'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDr from '../components/TopDr'

function Home() {
  const { user } = useAuthContext()
  const navigate = useNavigate()

  return (
    <>

      <div className='h-screen max-w-full px-0 sm:px-3'>
        <HeroSection />
        <SpecialityMenu/>
        <TopDr/>
      </div>
    </>

  )
}

export default Home