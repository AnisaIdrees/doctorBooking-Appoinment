import React, { useState } from "react";
import { createContext } from "react";

export const AdminContext = createContext()

const AdminContextProvider = ({ children }) => {
const [aToken , setAToken] = useState('')
    const value = {

    }

    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider