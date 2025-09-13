import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { AppContext } from '../context/AppContext'
import { time } from 'framer-motion'

function Appointment() {

  const { docId } = useParams()
  const { doctors, currencySymbol } = useContext(AppContext)
  const [docInfo, setDocInfo] = useState(null)
  const [doctorslots, setDoctorSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

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
        let formattedTime = currentDate.toLocaleDateString([], { hours: '2-digit', minute: '2-digit' })

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

  }, [])

  return docInfo && (
    <div>
      {/* Doctor Details */}
      <div>
        <div>
          <img src={docInfo.image} alt="Dr" />
        </div>
      </div>

      {/* Doctor info : name , degree , experience .... */}
      <div className=''>
        <p>
          {docInfo.name}
        </p>
          <p className='w-5 h-5 rounded-full bg-green-500'>.</p>

        <div>
          <p>{docInfo.degree} - {docInfo.speciality}</p>
          <button>{docInfo.experience}</button>
        </div>
      </div>

      {/* Doctor about */}
      <div>
        <p>About ! icon</p>
        <p>{docInfo.about}</p>
      </div>
      <p>Appoinment fee : <span>{currencySymbol}{docInfo.fees}</span></p>
    </div>
  )
}

export default Appointment