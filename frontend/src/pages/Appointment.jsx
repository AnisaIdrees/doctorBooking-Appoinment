import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'
import RelatedDoctors from '../components/RelatedDoctors'

function Appointment() {

  const { docId } = useParams()
  const { doctors, currencySymbol } = useContext(AppContext)
  const [docInfo, setDocInfo] = useState(null)
  const [doctorslots, setDoctorSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const daysOfWeeks = ['SUN', 'MON', 'TUES', 'WED', 'THURS', 'FRI', 'SAT ']

  const fetchDoctorInfo = () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)

  }

  const getAvailableSlots = () => {
    setDoctorSlots([])

    // getting current date
    let today = new Date()

    for (let i = 0; i < 7; i++) {
      // getting date with index 
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      // setting end time of the date with index
      let endtime = new Date()
      endtime.setDate(today.getDate() + i)
      endtime.setHours(21, 0, 0, 0)

      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      }
      else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while (currentDate < endtime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true, })

        //add slot to array 
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime
        })

        // increment  current time by 30  mins
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }
      setDoctorSlots(prev => ([...prev, timeSlots]))

    }
  }

  useEffect(() => {
    fetchDoctorInfo()
  }, [doctors, docId])

  useEffect(() => {
    getAvailableSlots()
  }, [docInfo])

  useEffect(() => {
    console.log(doctorslots);

  }, [doctorslots])

  return docInfo && (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6 pt-20"
    >
      {/* Doctor Card */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white shadow rounded p-6">
        <img
          src={docInfo.image}
          alt="Doctor"
          className="w-36 h-36 md:w-44 md:h-44 object-cover rounded-full shadow-lg border-4 border-blue-100"
        />
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{docInfo.name}</h1>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
            <span className="text-gray-600 text-sm">Available</span>
          </div>
          <p className="text-lg text-gray-700">{docInfo.degree} - {docInfo.speciality}</p>
          <span className="px-4 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium w-fit mx-auto md:mx-0">
            {docInfo.experience}
          </span>
        </div>
      </div>

      {/* About Doctor */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="bg-white shadow-md rounded-2xl p-6"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-3">About</h2>
        <p className="text-gray-600 leading-relaxed mb-4">{docInfo.about}</p>
        <p className="text-gray-800 font-medium">
          Appointment fee: <span className="text-blue-600 font-semibold">{currencySymbol}{docInfo.fees}</span>
        </p>
      </motion.div>

      {/* Booking Slots */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-white shadow-md rounded-2xl p-6"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Available Slots</h2>

        {doctorslots.length > 0 ? (
          <>
            {/* Days Selector */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-3">
              {doctorslots.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSlotIndex(index)}
                  className={`flex flex-col items-center justify-center py-3 px-0 rounded-xl 
                    transition-all duration-300 text-sm font-medium
                    ${slotIndex === index
                      ? "bg-gradient-to-r from-indigo-500 to-indigo-800 text-white shadow-md scale-105"
                      : "border border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  <p>{item[0] && daysOfWeeks[item[0].dateTime.getDay()]}</p>
                  <p className="text-lg font-semibold">{item[0] && item[0].dateTime.getDate()}</p>
                </button>
              ))}
            </div>

            {/* Time Slots */}
            <div className="w-full overflow-x-auto whitespace-nowrap mt-4">
              <div className="flex gap-3">
                {doctorslots[slotIndex].map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSlotTime(item.time)}
                    className={`min-w-[120px] px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                      ${slotTime === item.time
                        ? "bg-gradient-to-r from-indigo-500 to-indigo-800 text-white shadow-md scale-105"
                        : "border border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                  >
                    {item.time}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <p className="text-gray-500 italic">No slots available</p>
        )}
      </motion.div>

      {/* Sticky Booking Button */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-md p-4 md:relative md:shadow-none md:p-0">
        <button className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-800 text-white rounded-full font-semibold hover:bg-blue-700 transition">
          Book Appointment
        </button>
      </div>

      {/* listing  related doctors */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
    </motion.div>
  )
}

export default Appointment