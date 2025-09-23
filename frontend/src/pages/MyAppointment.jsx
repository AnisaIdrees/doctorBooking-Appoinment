import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import HeaderBanner from "../components/HeaderBanner";

function MyAppointment() {
  const { doctors } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderBanner />

      {/* Appointment Cards */}
      <div className="max-w-4xl flex justify-around items-center mx-auto flex-wrap px-2 p-6 md:p-10 space-y-8">
        {doctors.slice(0, 3).map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="bg-white px-4 md:px-0 rounded shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col md:flex-row"
          >
            {/* Doctor Image */}
            <img
              src={item?.image}
              alt={item?.speciality}
              className="w-full md:w-56 h-56 md:h-auto object-cover py-4 md:py-0 "
            />

            {/* Appointment Info */}
            <div className="flex-1 p-6 space-y-4">
              <p className="text-xl font-semibold text-gray-800">
                {item.speciality}
              </p>

              <div className="flex items-start text-sm text-gray-600">
                <FaMapMarkerAlt className="text-indigo-600 mt-1 mr-2" />
                <div>
                  <p>{item.address.line1}</p>
                  <p>{item.address.line2}</p>
                </div>
              </div>

              <div className="flex items-center text-sm text-gray-600">
                <FaCalendarAlt className="text-indigo-600 mr-2" />
                <span>25 July 2025</span>
              </div>

              <div className="flex items-center text-sm text-gray-600">
                <FaClock className="text-indigo-600 mr-2" />
                <span>08:30 PM</span>
              </div>
            </div>

            {/* Actions */}
            <div className="p-6 flex flex-col gap-4 md:w-52 border-t md:border-t-0 md:border-l border-gray-200">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-indigo-600 to-indigo-800  text-[16px] px-5  cursor-pointer text-white font-semibold py-2 rounded-full transition">
                Pay Online
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 rounded-full transition">
                Cancel
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default MyAppointment;
