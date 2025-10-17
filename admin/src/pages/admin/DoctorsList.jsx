import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorsList = () => {

    const { token, getAllDoctors, doctors } = useContext(AdminContext)

    useEffect(() => {
        if (token) {
            getAllDoctors()
        }
    }, [token])

    return (
        <div>
            DoctorsList
        </div>
    )
}

export default DoctorsList
