import React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { getToken, setToken, removeToken } from "../utils/auth"
import { toast } from 'react-toastify'
import axios from "axios"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [token, setTokenState] = useState(getToken() || '');
    const [userData, setUserData] = useState(false);
    const [image , setImage] = useState(false);

    const loadUser = async () => {

        try {

            const token = getToken()
            if (token) {
                setTokenState(token)
            }

            const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/auth/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (data.success) {
                setUserData(data.userData)
            } else {
                toast.error(data.message)
            }
            setLoading(false)

        } catch (error) {
            toast.error(error.message)
        }

    }


    useEffect(() => {
        loadUser()
    }, [])


    const login = (tokenValue) => {
        setToken(tokenValue)
        setTokenState(tokenValue)
    }

    const handleLogOut = () => {

        try {


            removeToken()
            setTokenState('')
            toast.success('Logout Successfully')


        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <AuthContext.Provider value={{ token, login, handleLogOut, loadUser, userData, setUserData }}>
            {children}
        </AuthContext.Provider>
    )

}
export const useAuthContext = () => useContext(AuthContext)

