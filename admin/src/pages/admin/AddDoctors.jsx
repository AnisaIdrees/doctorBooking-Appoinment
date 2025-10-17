import React, { useContext, useState } from 'react'
import { images } from '../../assets/assets'
import { motion } from 'framer-motion'
import { AdminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify'
import axios from 'axios'


function AddDoctors() {

  const { backendUrl, token } = useContext(AdminContext)

  const [loading, setLoading] = useState(false);
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [experience, setExperience] = useState('1 Year');
  const [about, setABout] = useState('');
  const [fees, setFees] = useState('');
  const [speciality, setSpeciality] = useState('General Physician');
  const [degree, setDegree] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');


  const onSubmitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {

      if (!docImg) {
        toast.error('Image Not Selected')
        setLoading(false);
        return;
      }

      const formData = new FormData()

      formData.append('image', docImg);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('experience', experience);
      formData.append('fees', Number(fees));
      formData.append('speciality', speciality);
      formData.append('degree', degree);
      formData.append('about', about);
      formData.append('address', JSON.stringify({ line1: address1, line2: address2 }));

      // formData.forEach((value, key) => {
      //   console.log(`${key} >>> ${value}`);

      // })

      const { data } = await axios.post(`${backendUrl}/api/admin/add-doctor  `, formData, { headers: { token } })

      if (data.success) {
        toast.success(data.message)
        setDocImg(false)
        setName('')
        setEmail('')
        setPassword('')
        setExperience('')
        setDegree('')
        setFees('')
        setSpeciality('')
        setABout('')
        setAddress1('')
        setAddress2('')
      }
      else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <>
      <h1 className='text-2xl mb-3 font-bold text-gray-600 pb-4 py-4'>Add Doctors</h1>

      <form onSubmit={onSubmitHandler}>

        {/* add doctor main container */}
        <div className='bg-white min-h-screen w-full rounded border border-gray-200 shadow px-8 py-8'>



          <div className='flex  items-center gap-4 mb-8 text-gray-500'>
            <label htmlFor="doc-img">
              <img className='w-18 h-18 bg-gray-100 rounded-full cursor-pointer' src={docImg ? URL.createObjectURL(docImg) : images.profileImg} alt="" />
            </label>
            <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id='doc-img' hidden />
            <p>Upload doctor <br /> picture</p>
          </div>


          <div className=' grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-700'>

            <div className='flex flex-col gap-5'>
              <p>Doctor name</p>
              <input onChange={(e) => setName(e.target.value)} value={name} className='border rounded px-3 py-2 border-gray-400 focus:ring-2 focus:outline-none focus:ring-indigo-300' type="text" placeholder='Name' required />
            </div>

            <div className='flex flex-col gap-5'>
              <p>Doctor email</p>
              <input onChange={(e) => setEmail(e.target.value)} value={email} className='border rounded px-3 py-2 border-gray-400 focus:ring-2 focus:outline-none focus:ring-indigo-300' type="email" placeholder='Email' required />
            </div>

            <div className='flex flex-col gap-5'>
              <p>Doctor password</p>
              <input onChange={(e) => setPassword(e.target.value)} value={password} className='border rounded px-3 py-2 border-gray-400 focus:ring-2 focus:outline-none focus:ring-indigo-300' type="password" placeholder='password' required />
            </div>

            <div className='flex flex-col gap-5'>
              <p>Experience</p>
              <select onChange={(e) => setExperience(e.target.value)} value={experience} className='border rounded px-3 py-2 border-gray-400 focus:ring-2 focus:outline-none focus:ring-indigo-300' id="experience">
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
                <option value="8 Year">8 Year</option>
                <option value="9 Year">9 Year</option>
                <option value="10 Year">10 Year</option>
              </select>
            </div>

            <div className='flex flex-col gap-5'>
              <p>Fees</p>
              <input onChange={(e) => setFees(e.target.value)} value={fees} className='border rounded px-3 py-2 border-gray-400 focus:ring-2 focus:outline-none focus:ring-indigo-300' type="number" placeholder='Fees' required />
            </div>

            <div className='flex flex-col gap-5'>
              <p>Speciality</p>
              <select onChange={(e) => setSpeciality(e.target.value)} value={speciality} className='border rounded px-3 py-2 border-gray-400 focus:ring-2 focus:outline-none focus:ring-indigo-300' name="" id="speciality">
                <option value="General Physician">General Physician</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Cardiologist">Cardiologist</option>
              </select>
            </div>

            <div className='flex flex-col gap-5'>
              <p>Education</p>
              <input onChange={(e) => setDegree(e.target.value)} value={degree} className='border rounded px-3 py-2 border-gray-400 focus:ring-2 focus:outline-none focus:ring-indigo-300' type="text" placeholder='Education' required />
            </div>

            <div className='flex flex-col gap-5'>
              <p>Address</p>
              <input onChange={(e) => setAddress1(e.target.value)} value={address1} className='border rounded px-3 py-2 border-gray-400 focus:ring-2 focus:outline-none focus:ring-indigo-300' type="text" placeholder='address 1' required />
              <input onChange={(e) => setAddress2(e.target.value)} value={address2} className='border rounded px-3 py-2 border-gray-400 focus:ring-2 focus:outline-none focus:ring-indigo-300' type="text" placeholder='address 2' required />
            </div>

          </div>


          <div className='mt-6 flex flex-col gap-5'>
            <p>About doctor</p>
            <textarea onChange={(e) => setABout(e.target.value)} value={about} className='border rounded px-3 py-2 border-gray-400 focus:ring-2 focus:outline-none focus:ring-indigo-300' placeholder='Write about doctor' rows={5} required />
          </div>

          <motion.button
            type='submit'
            whileHover={!loading ? { scale: 1.05 } : {}}
            whileTap={!loading ? { scale: 0.95 } : {}}
            disabled={loading}
            className={`mt-6 rounded-full px-10 py-3 font-medium text-white flex justify-center items-center gap-2
                                      ${loading
                ? "bg-gradient-to-r from-indigo-400 to-indigo-600 cursor-not-allowed"
                : "bg-gradient-to-r from-indigo-500 to-indigo-800 hover:shadow-lg"
              } transition-all duration-300`}
          >
            {loading ? (
              <>
                {/* Spinner */}
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>

              </>
            ) : (
              <>Add doctor</>
            )}
          </motion.button>
        </div>
      </form>
    </>

  )
}

export default AddDoctors
