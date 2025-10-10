import React, { useContext } from 'react'
import Login from './Login'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from './context/AdminContext';

function App() {

  const { token } = useContext(AdminContext)

  return token ? (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
        toastClassName="custom-toast"
      />
    </div>
  ) : (
    <>
      < div >
        <Login />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          pauseOnHover
          draggable
          theme="light"
          toastClassName="custom-toast"
        />
      </div >
    </>
  )
}

export default App
