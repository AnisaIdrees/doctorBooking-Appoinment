import React, { useState } from "react";
import { createContext } from "react";
import { getToken } from "../utils/auth";

export const AdminContext = createContext()

const AdminContextProvider = ({ children }) => {

    const [token, setToken] = useState(getToken ? getToken : '')

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const value = {
        token,
        setToken,
        backendUrl,
    }

    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider