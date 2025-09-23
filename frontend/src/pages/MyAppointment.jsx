
// import React, { useContext } from "react";
// import { AppContext } from "../context/AppContext";
// import { motion } from "framer-motion";
// import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";

// function MyAppointment() {
//   const { doctors } = useContext(AppContext);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 md:p-10">
//       <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//         My Appointments
//       </h2>

//       <div className="max-w-4xl mx-auto space-y-6">
//         {doctors.slice(0, 3).map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2, duration: 0.5 }}
//             className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-col md:flex-row"
//           >
//             {/* Doctor Image */}
//             <img
//               src={item?.image}
//               alt={item?.speciality}
//               className="md:w-48 w-full h-48 object-cover"
//             />

//             {/* Appointment Info */}
//             <div className="flex-1 p-6 space-y-3">
//               <p className="text-xl font-semibold text-gray-800">
//                 {item.speciality}
//               </p>

//               <div className="flex items-start text-sm text-gray-600">
//                 <FaMapMarkerAlt className="text-blue-500 mt-1 mr-2" />
//                 <div>
//                   <p>{item.address.line1}</p>
//                   <p>{item.address.line2}</p>
//                 </div>
//               </div>

//               <div className="flex items-center text-sm text-gray-600">
//                 <FaCalendarAlt className="text-blue-500 mr-2" />
//                 <span>25 July 2025</span>
//               </div>

//               <div className="flex items-center text-sm text-gray-600">
//                 <FaClock className="text-blue-500 mr-2" />
//                 <span>08:30 PM</span>
//               </div>
//             </div>

//             {/* Actions */}
//             <div className="p-6 flex flex-col gap-3 md:w-48">
//               <button className="bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition">
//                 Pay Online
//               </button>
//               <button className="bg-gray-200 text-gray-700 font-semibold py-2 rounded-lg hover:bg-gray-300 transition">
//                 Cancel
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MyAppointment;
 
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import HeaderBanner from "../components/HeaderBanner";

function MyAppointment() {
  const { doctors } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderBanner/>

      {/* Appointment Cards */}
      <div className="max-w-5xl mx-auto p-6 md:p-10 space-y-8">
        {doctors.slice(0, 3).map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col md:flex-row"
          >
            {/* Doctor Image */}
            <img
              src={item?.image}
              alt={item?.speciality}
              className="w-full md:w-56 h-56 md:h-auto object-cover"
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
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition">
                Pay Online
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 rounded-lg transition">
                Cancel
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default MyAppointment;
