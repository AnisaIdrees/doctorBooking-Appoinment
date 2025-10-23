import React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { getToken, setToken } from "../utils/auth"
// import { setUser as User } from "../utils/auth"
// import { fetchUserFromServer } from "../services/auth/"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    // const [user, setUser] = useState(null);
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

    return (
        <AuthContext.Provider value={{ token ,login}}>
            {children}
        </AuthContext.Provider>
    )

}
export const useAuthContext = () => useContext(AuthContext)

