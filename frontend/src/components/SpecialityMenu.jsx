import React from 'react'
import { SpecialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

function SpecialityMenu() {
    return (
        <>
            <div id='speciality' className='flex flex-col items-center justify-center text-gray-800 gap-4 py-16'>
                <h1 className='text-3xl font-medium'>Find by Speciality</h1>
                <p className='text-sm text-center sm:w-1/3 px-4 sm:px-3 md:px-0 lg:px-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quo id aut sequi
                    ratione facilis .</p>
                <div className='flex sm:justify-center items-center gap-4 pt-12 w-full overflow-scroll px-2'>
                    {SpecialityData.map((item, index) => (
                        <Link onClick={(() => scrollTo(0, 0))} className='flex flex-col items-center text-sm cursor-pointer flex-shrink-0  hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors/${item.speciality}`}>
                            <div className='w-18 sm:w-26 bg-blue-200 rounded-full'><img className='w-16 sm:w-24 mb-2' src={item.image} alt="" /></div>
                            <p className='text-center'>{item.speciality}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SpecialityMenu