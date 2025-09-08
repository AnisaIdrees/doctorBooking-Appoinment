import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routers.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import AppContextProvider from './context/AppContext.jsx'


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <AppContextProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </AppContextProvider>
  </StrictMode>,
)
