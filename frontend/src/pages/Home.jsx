import React from 'react'
import { useNavigate } from 'react-router'
import { useAuthContext } from '../context/AuthContext'
import HeroSection from '../components/HeroSection'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDr from '../components/TopDr'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

function Home() {
  const { user } = useAuthContext()

  return (
    <>

      <div >
        <HeroSection />
        <SpecialityMenu />
        <TopDr />
        <Banner />
      </div>
    </>

  )
}

export default Home