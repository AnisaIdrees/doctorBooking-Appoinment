import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Login from '../pages/Login'
import Home from '../pages/Home'
import EmailVerify from '../pages/EmailVerify'
import ResetPassword from '../pages/ResetPassword'
import ProtectedRoutes from '../components/ProtectedRoutes'

const router = createBrowserRouter([

    {
        path: '/',
        element: <App />,
        children: [

            { path: '/', element: <Home /> },
            { path: '/login', element: <Login /> },


            {
                path: '/email-verify', element: (

                    <ProtectedRoutes>
                        <EmailVerify />
                    </ProtectedRoutes>
                )
            },
            // { path: '/email-verify', element: <EmailVerify /> },

            { path: '/reset-password', element: <ResetPassword /> },


        ]
    }

])

export default router