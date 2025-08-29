import React from 'react'
import { getToken, getUser } from '../utils/auth'
import { Navigate } from 'react-router-dom';


function ProtectedRoutes({ children, role }) {
    const token = getToken();
    const user = getUser();

    const isLoggedIn = token && user
    console.log("Token:", token);
    console.log("User:", user);
    console.log("Type of user:", typeof user);
    console.log("isLoggedIn:", isLoggedIn);
    // const hasRequiredRole = role ? user?.role === role : true

    if (!isLoggedIn) return <Navigate to='/login' replace />
    // if (!hasRequiredRole) return <Navigate to='/' replace />
    

    return children;
}

export default ProtectedRoutes