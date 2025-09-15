import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'

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
        let formattedTime = currentDate.toLocaleTimeString([], { hours: '2-digit', minute: '2-digit' })

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
    // <div>
    //   {/* Doctor Details */}
    //   <div>
    //     <div>
    //       <img src={docInfo.image} alt="Dr" />
    //     </div>
    //   </div>

    //   {/* Doctor info : name , degree , experience .... */}
    //   <div className=''>
    //     <p>
    //       {docInfo.name}
    //     </p>
    //     <p className='w-5 h-5 rounded-full bg-green-500'>.</p>

    //     <div>
    //       <p>{docInfo.degree} - {docInfo.speciality}</p>
    //       <button>{docInfo.experience}</button>
    //     </div>
    //   </div>

    //   {/* Doctor about */}
    //   <div>
    //     <p>About ! icon</p>
    //     <p>{docInfo.about}</p>
    //     <p>Appoinment fee : <span>{currencySymbol}{docInfo.fees}</span></p>
    //   </div>

    //   {/* BOOKING SLOTS */}
    //   <div>
    //     <p>Booking Slots</p>
    //     <div>
    //       {doctorslots.length && doctorslots.map((item, index) => (
    //         <div key={index} className={`${slotIndex === index ? 'bg-blue-600 text-white' : 'border border-gray'}`}>
    //           <p>{item[0] && daysOfWeeks[item[0].dateTime.getDay()]}</p>
    //           <p>{item[0] && item[0].dateTime.getDate()}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    // <motion.div
    //   initial={{ opacity: 0, y: 40 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.6, ease: "easeOut" }}
    //   className="max-w-4xl mx-auto p-4 md:p-6 flex flex-col gap-6"
    // >
    //   {/* Top Section */}
    //   <div className="flex flex-col md:flex-row items-center gap-6 bg-white shadow-md rounded-2xl p-6">

    //     {/* Doctor Image */}
    //     <div className="flex-shrink-0">
    //       <img
    //         src={docInfo.image}
    //         alt="Dr"
    //         className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full shadow-md"
    //       />
    //     </div>

    //     {/* Doctor Info */}
    //     <div className="flex flex-col gap-2 text-center md:text-left">
    //       <p className="text-2xl font-semibold">{docInfo.name}</p>
    //       <div className="flex items-center justify-center md:justify-start gap-2">
    //         <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
    //         <span className="text-gray-600">Available</span>
    //       </div>
    //       <p className="text-gray-700">{docInfo.degree} - {docInfo.speciality}</p>
    //       <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-sm font-medium w-fit mx-auto md:mx-0">
    //         {docInfo.experience}
    //       </button>
    //     </div>
    //   </div>

    //   {/* About Doctor */}
    //   <motion.div
    //     initial={{ opacity: 0, y: 30 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ delay: 0.2, duration: 0.6 }}
    //     className="bg-white shadow-md rounded-2xl p-6"
    //   >
    //     <p className="text-lg font-semibold mb-2">About</p>
    //     <p className="text-gray-600 mb-3">{docInfo.about}</p>
    //     <p className="text-gray-800 font-medium">
    //       Appointment fee: <span className="text-blue-600">{currencySymbol}{docInfo.fees}</span>
    //     </p>
    //   </motion.div>

    //   {/* Booking Slots */}
    //   <motion.div
    //     initial={{ opacity: 0, y: 30 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ delay: 0.4, duration: 0.6 }}
    //     className="bg-white shadow-md rounded-2xl p-6"
    //   >
    //     <p className="text-lg font-semibold mb-4">Booking Slots</p>
    //     <div className="flex gap-3 overflow-x-auto pb-2">
    //       {doctorslots.length > 0 ? doctorslots.map((item, index) => (
    //         <button
    //           key={index}
    //           onClick={() => setSlotIndex(index)}
    //           className={`flex flex-col items-center px-4 py-3 rounded-xl min-w-[80px] 
    //             transition-all duration-300 
    //             ${slotIndex === index 
    //               ? "bg-blue-600 text-white shadow-md scale-105" 
    //               : "border border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-100"}`}
    //         >
    //           <p className="font-medium">{item[0] && daysOfWeeks[item[0].dateTime.getDay()]}</p>
    //           <p>{item[0] && item[0].dateTime.getDate()}</p>
    //         </button>
    //       )) : (
    //         <p className="text-gray-500">No slots available</p>
    //       )}
    //     </div>
    //   </motion.div>
    // </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6"
    >
      {/* Doctor Top Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white shadow-lg rounded-2xl p-6">

        {/* Doctor Image */}
        <div className="flex-shrink-0">
          <img
            src={docInfo.image}
            alt="Doctor"
            className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full shadow-md border-4 border-blue-100"
          />
        </div>

        {/* Doctor Info */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">{docInfo.name}</h1>

          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
            <span className="text-gray-600 text-sm">Available</span>
          </div>

          <p className="text-lg text-gray-700 font-medium">
            {docInfo.degree} - {docInfo.speciality}
          </p>

          <button className="px-4 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium w-fit mx-auto md:mx-0">
            {docInfo.experience}
          </button>
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
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {doctorslots.map((item, index) => (
              <button
                key={index}
                onClick={() => setSlotIndex(index)}
                className={`flex flex-col items-center justify-center py-3 rounded-xl 
                  transition-all duration-300 text-sm font-medium
                  ${slotIndex === index
                    ? "bg-blue-600 text-white shadow-md scale-105"
                    : "border border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
              >
                <p>{item[0] && daysOfWeeks[item[0].dateTime.getDay()]}</p>
                <p className="text-lg font-semibold">{item[0] && item[0].dateTime.getDate()}</p>
              </button>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic">No slots available</p>
        )}
      </motion.div>

      {/* Sticky Booking Button for Mobile */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-md p-4 md:relative md:shadow-none md:p-0">
        <button className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
          Book Appointment
        </button>
      </div>
    </motion.div>
  )
}

export default Appointment