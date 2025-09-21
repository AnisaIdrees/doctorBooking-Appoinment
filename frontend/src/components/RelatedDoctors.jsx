import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'

function RelatedDoctors({ speciality, docId }) {
    const { doctors } = useContext(AppContext)
    const [relDocs, setRelDocs] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality.trim().toLowerCase() === speciality.trim().toLowerCase() 
            && doc._id !== docId)
            setRelDocs(doctorsData)
            console.log('filtered data', doctorsData);

        }
    }, [doctors, speciality, docId])

    return (
        <div className='flex flex-col items-center mb-20 gap-4 text-gray-900 md:mx-10 py-1'>
            <h1 className='text-3xl font-medium'>Related Doctors</h1>
            <p className='text-sm text-center sm:w-1/3 px-4 sm:px-3 md:px-0 lg:px-0'>Lorem ipsum, dolor sit amet consectetur adipisicing ebhdhe hje.
            </p>
            <div className='w-full flex  flex-wrap justify-center items-center gap-4  pt-5 gap-y-6 px-3 sm:px-0'>
                {relDocs.slice(0, 5).map((doctor, index) => (
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
                {
                    console.log(doctors.map(d => d.speciality))

                }
            </div>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className="bg-gradient-to-r from-indigo-500 to-indigo-800 text-white text-[16px] px-12 mt-10 py-3 rounded-full font-light cursor-pointer">more
            </motion.button>
        </div>
    )
}

export default RelatedDoctors