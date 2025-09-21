import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AppContext } from '../context/AppContext'
import { motion, AnimatePresence } from 'framer-motion'

function Doctors() {
  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const { doctors } = useContext(AppContext)
  const navigate = useNavigate()
  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }
    else {
      setFilterDoc(doctors)
    }
  }
  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])


  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row gap-8 p-6 max-w-7xl mx-auto"
    >
      {/* Sidebar Filters */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full md:w-1/5 bg-white shadow-md rounded-xl p-4 h-fit"
      >
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Filter by Speciality
        </h2>
        <div className="flex md:flex-col flex-row md:gap-4 gap-2 flex-wrap">
          {[
            "General Physician",
            "Neurologist",
            "Gynecologist",
            "Dermatologist",
            "Cardiologist",
          ].map((spec, idx) => (
            <motion.p
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={idx}
              onClick={() =>
                speciality === spec ? navigate("/doctors") : navigate(`/doctors/${spec}`)
              }
              className={`cursor-pointer px-4 py-3 rounded text-sm md:text-base transition 
                ${speciality === spec
                  ? "bg-indigo-2 00 text-gray-700 shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-50"
                }`}
            >
              {spec}
            </motion.p>
          ))}
        </div>
      </motion.div>

      {/* Doctors List */}
      <div className="flex-1">
        <AnimatePresence mode="wait">
          {filterDoc.length > 0 ? (
            <motion.div
              key="doctors-list"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filterDoc.map((doctor, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  layout
                  onClick={() => navigate(`/appoinment/${doctor._id}`)}
                  className="border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg hover:-translate-y-2 transition duration-300"
                >
                  <img
                    className="w-full h-60 object-cover bg-blue-50"
                    src={doctor.image}
                    alt=""
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-sm text-green-600 mb-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <p>Available</p>
                    </div>
                    <p className="text-gray-900 font-medium text-lg">
                      {doctor.name}
                    </p>
                    <p className="text-gray-600 text-sm">{doctor.speciality}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.h2
              key="no-doctors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center text-gray-500 font-semibold mt-10 text-[19px] sm:text-2xl"
            >
              {speciality} Doctors are not Available
            </motion.h2>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default Doctors