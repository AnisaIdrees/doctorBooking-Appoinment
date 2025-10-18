import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { icons, images } from '../../assets/assets'

const DoctorsList = () => {

    const { token, getAllDoctors, doctors } = useContext(AdminContext);
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value);

    }
    const filteredDoctors = doctors.filter(Doctor => {
        return Doctor.name.toLowerCase().includes(search.toLowerCase())
    })

    useEffect(() => {
        if (token) {
            getAllDoctors()
        }
    }, [token])

    return (

        <>
            <h1 className='text-2xl mb-3 font-bold text-gray-600 pb-4 py-4'>Doctors List</h1>
            <div className='flex  relative items-center'>
                <input onChange={handleSearch} type="search" placeholder='search doctors...' className='border border-indigo-200 px-4 py-2 rounded-full  w-full focus:outline-none focus:ring-2 focus:ring-indigo-300' />
                <div className='absolute right-5 text-xl text-gray-700'>{<icons.searchDoctors />}</div>
            </div>

            <div className='w-full flex items-center justify-center sm:justify-center md:justify-start flex-wrap gap-5 pt-5 gap-y-6'>
                {/* card box */}

                {filteredDoctors.length > 0 ? (
                    filteredDoctors.map((item, index) => (
                        <div
                            className='mt-5 w-full max-w-64 sm:max-w-56 rounded-xl border border-indigo-200 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-indigo-300 bg-white'
                            key={index}
                        >
                            {/* Image Container */}
                            <div className='relative bg-indigo-50 group-hover:bg-indigo-100 transition-colors duration-300'>
                                <img
                                    className='w-full h-48 sm:h-52 object-cover'
                                    src={item.image}
                                    alt={`${item.name} - ${item.speciality}`}
                                />
                            </div>

                            {/* Content Container */}
                            <div className='p-4 space-y-2'>
                                {/* Name */}
                                <h3 className='font-semibold text-lg text-gray-800 truncate'>
                                    {item.name}
                                </h3>

                                {/* Speciality */}
                                <p className='text-zinc-600 text-sm font-medium'>
                                    {item.speciality}
                                </p>

                                {/* Availability */}
                                <div className='flex items-center space-x-2'>
                                    <div className='relative flex items-center'>
                                        <input
                                            type="checkbox"
                                            checked={item.available}
                                            readOnly
                                            className='h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
                                        />
                                    </div>
                                    <span className={`text-sm font-medium ${item.available ? 'text-green-600' : 'text-red-600'}`}>
                                        {item.available ? 'Available' : 'Unavailable'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='text-zinc-600 '>Not Found</p>
                )

                }

            </div>

        </>




    )
}

export default DoctorsList
