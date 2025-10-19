import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
// import { doctors } from '../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const [doctors, setDoctors] = useState([])
    const currencySymbol = '$'
    const backenUrl = import.meta.env.VITE_BACKEND_URL

    const value = {
        doctors,
        currencySymbol,
        backenUrl,
    }

    const getAllDoctors = async () => {

        try {

            const { data } = await axios.get(`${backenUrl}/api/doctor/list`)
            if (data.success) {
                setDoctors(data.doctors)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error.message)
        }

    }

    useEffect(() => {
        getAllDoctors()
    }, [])

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider