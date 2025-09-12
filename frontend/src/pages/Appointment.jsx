import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { AppContext } from '../context/AppContext'

function Appointment() {

  const { docId } = useParams()
  const { doctors, currencySymbol } = useContext(AppContext)
  const [docInfo, setDocInfo] = useState(null)

  const fetchDoctorInfo = () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo);

  }
  useEffect(() => {
    fetchDoctorInfo()
  }, [doctors, docId])

  return docInfo && (
    <div>
      {/* Doctor Details */}
      <div>
        <div>
          <img src={docInfo.image} alt="Dr" />
        </div>
      </div>
    </div>
  )
}

export default Appointment