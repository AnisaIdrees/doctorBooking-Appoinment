import React from 'react'
import HeaderBanner from '../components/HeaderBanner'


function AboutSection() {
  return (
    <>
      <div>
        <HeaderBanner heading1={'About'}
          bgImg={`https://cdn.dribbble.com/userupload/42271036/file/original-7343ade4c74b7b04f341cd0ddce462c5.gif`}
          paragraph={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, praesentium.'} />
      </div>

      {/* new section*/}
      <div className="bg-gray-100">
        
        <section className="text-center py-14 px-6">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-800">
           What We Do ?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A smart platform to book doctor appointments quickly and securely.
          </p>
        </section>

 
        <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 md:px-12 py-10">
          {/* Left Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-semibold text-gray-800">
              Easy Appointment Booking
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Book appointments with top doctors anytime, anywhere.
              Check availability, schedule visits, and receive instant
              confirmations in just a few clicks.
            </p>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2">
            <img
              src="https://5.imimg.com/data5/OS/XQ/GLADMIN-9357084/online-doctor-consultation.jpg"
              alt="Appointment Booking"
              className="rounded-3xl shadow-lg w-full object-cover"
            />
          </div>
        </section>

        <section className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10 px-6 md:px-12 py-10">
          {/* Left text*/}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-semibold text-gray-800">
              Trusted Healthcare Access
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Connect with verified healthcare professionals for secure and
              reliable consultations. Your health and privacy are our top
              priority with safe record-keeping and instant updates.
            </p>
          </div>

          {/* Right image */}

          <div className="md:w-1/2">
            <img
              src="https://www.sixsigmahospital.com/wp-content/uploads/2024/02/young-male-psysician-with-patient-measuring-blood-pressure-3-scaled.webp"
              alt="Healthcare Support"
              className="rounded-3xl shadow-lg w-full object-cover"
            />
          </div>
        </section>
      </div>
    </>
  )
}

export default AboutSection