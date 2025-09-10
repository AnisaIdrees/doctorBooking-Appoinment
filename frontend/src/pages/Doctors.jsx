import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AppContext } from '../context/AppContext'


function Doctors() {
  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const { doctors } = useContext(AppContext)
  const navigate = useNavigate()
  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }
    else {
      setFilterDoc(doctors)
    }
  }
  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div>
      <div>
          <p onClick={() => speciality === ''? navigate('/all-doctors') : navigate('/all-doctors') }>All Doctors</p>
        <p>Neuorologist</p>
        <p>Gynecologist</p>
        <p>Dermotologist</p>
        <p>Cardiologist</p>
      </div>

      <div>
        {filterDoc.map((doctor, index) => (
          <div onClick={() => navigate(`/appoinment/${doctor._id}`)} className='border-blue-200 border rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all  duration-500' key={index}>
            <img className='bg-blue-50 w-full h-[260px]' src={doctor.image} alt="" />
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
              </div>
              <p className='text-gray-900 font-medium  text-lg'>{doctor.name}</p>
              <p className='text-gray-600 text-sm'>{doctor.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Doctors