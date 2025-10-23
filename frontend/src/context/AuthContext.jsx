import React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { getToken, setToken, removeToken } from "../utils/auth"
import { toast } from 'react-toastify'
import { useNavigate } from "react-router"


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [token, setTokenState] = useState(getToken() || '');


    const loadUser = async () => {
        const token = getToken()
        if (token) {
            setTokenState(token)
        }
        setLoading(false)
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
        <AuthContext.Provider value={{ token, login, handleLogOut }}>
            {children}
        </AuthContext.Provider>
    )

}
export const useAuthContext = () => useContext(AuthContext)

