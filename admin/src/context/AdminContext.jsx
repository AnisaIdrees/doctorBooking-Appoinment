import React, { useState } from "react";
import { createContext } from "react";
import { getToken } from "../utils/auth";
import axios from 'axios'
import { toast } from 'react-toastify'

export const AdminContext = createContext()

const AdminContextProvider = ({ children }) => {

    const [token, setToken] = useState(getToken() ? getToken() : '')
    const [doctors, setDoctors] = useState([]);

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const getAllDoctors = async () => {

        try {
            const { data } = await axios.get(`${backendUrl}/api/admin/all-doctors`, { headers: { token } })

            if (data.success) {
                setDoctors(data.doctors)
                console.log(data.doctors);

            }
            else {
                toast.error(error.message)
            }
        } catch (error) {
            toast.error(error.message)
            console.log("TOKEN SENT:", token);

        }

    }

    const changeAvailablity = async (docId) => {

        try {

            const { data } = await axios.post(`${backendUrl}/api/admin/change-availablity`,
                { docId }, { headers: { token } })
            if (data.success) {

                toast.success(data.message)
                getAllDoctors()
                console.log(data.message);
            }
            else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }

    }

    const value = {
        token,
        setToken,
        backendUrl,
        doctors,
        getAllDoctors,
        changeAvailablity,
    }

    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider