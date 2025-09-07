import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Login from '../pages/Login'
import Home from '../pages/Home'
import EmailVerify from '../pages/EmailVerify'
import ResetPassword from '../pages/ResetPassword'
import ProtectedRoutes from '../components/ProtectedRoutes'
import About from '../pages/About'
import Contact from '../pages/Contact'
import MyAppoinment from '../pages/MyAppointment'
import Doctors from '../pages/Doctors'
import MyProfile from '../pages/MyProfile'
import Appointment from '../pages/Appointment'


const router = createBrowserRouter([

    {
        path: '/',
        element: <App />,
        children: [

            { path: '/', element: <Home /> },
            { path: '/login', element: <Login /> },



            { path: '/email-verify', element: <EmailVerify /> },
            { path: '/reset-password', element: <ResetPassword /> },
            { path: '/about', element: <About /> },
            { path: '/contact', element: <Contact /> },
            { path: '/all doctors', element: <Doctors /> },
            { path: '/doctors/:speciality', element: <Doctors /> },
            { path: '/my-profile', element: <MyProfile /> },
            { path: '/My-Appoinments', element: <MyAppoinment /> },
            { path: '/appoinment/:docId', element: <Appointment /> },


        ]
    }

])

export default router