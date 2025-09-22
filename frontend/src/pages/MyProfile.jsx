// // import React, { useState } from 'react'
// // import { images } from '../assets/assets'

// // function MyProfile() {

// //   const [userData, setUserData] = useState({
// //     name: "Aneesa Idrees",
// //     image: images.appoinmentDr,
// //     email: "anisaidrees191@gmail.com",
// //     phone: "+9230102369501",
// //     address: {
// //       line1: "jkerg jkrgw jeyw olv g li2eyhkb",
// //       line2: "ekme ukehvh ukeg ue m",
// //     },
// //     gender: 'female',
// //     dob: "2008-01-04"
// //   })
// //   const [isEdit, setIsEdit] = useState(true);

// //   return (
// //     <div>

// //       <img src={images.profileImg} alt="" />

// //       {
// //         isEdit
// //           ?
// //           <input type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
// //           : <p>{userData.name}</p>
// //       }
// //       <hr />
// //       <p className='text-2xl font-semibold'>Contact Information</p>
// //       <div>
// //         <p>Email Id :</p>
// //         <p>{userData.email}</p>
// //         <p>Phone no:</p>
// //         {
// //           isEdit
// //             ?
// //             <input type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
// //             : <p>{userData.phone}</p>
// //         }
// //         <p>Address:</p>
// //         {
// //           isEdit
// //             ?
// //             <p>
// //               <input type="text" onChange={e => setUserData(prev => ({ ...prev.address, line1: e.target.value }))} />
// //               <input type="text" onChange={e => setUserData(prev => ({ ...prev.address, line2: e.target.value }))} />
// //             </p>
// //             : <p>
// //               {userData.address.line1}
// //               <br />
// //               {userData.address.line2}
// //             </p>
// //         }
// //       </div>
// //       <div>
// //         <p className='text-2xl font-semibold'>Basic Information</p>
// //         <div>
// //           <p>Gener</p>
// //           {
// //             isEdit
// //               ?
// //               <select value={userData.gender} onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))}>
// //                 <option value="male">Male</option>
// //                 <option value="female">Female</option>
// //               </select>
// //               : <p>{userData.gender}</p>

// //           }
// //           <p>Birthday:</p>
// //           {
// //             isEdit
// //               ? <input type="date" value={userData.dob} onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))} />
// //               :
// //               <p>{userData.dob}</p>
// //           }
// //         </div>
// //       </div>
// //       <div>
// //         {
// //           isEdit
// //             ? <button onClick={()=>setIsEdit(false)}>Save Information</button>
// //             : <button onClick={()=>setIsEdit(true)}>Edit</button>

// //         }
// //       </div>
// //     </div>
// //   )
// // }

// // export default MyProfile


// import React, { useState } from "react";
// import { images } from "../assets/assets";

// function MyProfile() {
//   const [userData, setUserData] = useState({
//     name: "Aneesa Idrees",
//     image: images.appoinmentDr,
//     email: "anisaidrees191@gmail.com",
//     phone: "+9230102369501",
//     address: {
//       line1: "jkerg jkrgw jeyw olv g li2eyhkb",
//       line2: "ekme ukehvh ukeg ue m",
//     },
//     gender: "female",
//     dob: "2008-01-04",
//   });
//   const [isEdit, setIsEdit] = useState(false);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imgUrl = URL.createObjectURL(file);
//       setUserData((prev) => ({ ...prev, image: imgUrl }));
//     }
//   };

//   return (
//     <div className="flex flex-col items-center w-full max-w-3xl mx-auto p-4 sm:p-8">
//       {/* Profile Image Section */}
//       <div className="relative">
//         <img
//           src={userData.image}
//           alt="profile"
//           className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-indigo-500 shadow-md"
//         />
//         {isEdit && (
//           <>
//             <label
//               htmlFor="profileImg"
//               className="absolute bottom-2 right-2 bg-indigo-600 text-white p-2 rounded-full cursor-pointer shadow hover:bg-indigo-700 transition"
//             >
//               ✎
//             </label>
//             <input
//               id="profileImg"
//               type="file"
//               accept="image/*"
//               className="hidden"
//               onChange={handleImageChange}
//             />
//           </>
//         )}
//       </div>

//       {/* Name */}
//       <div className="mt-4 w-full text-center">
//         {isEdit ? (
//           <input
//             type="text"
//             value={userData.name}
//             onChange={(e) =>
//               setUserData((prev) => ({ ...prev, name: e.target.value }))
//             }
//             className="text-2xl sm:text-3xl font-semibold text-center border-b border-gray-300 focus:outline-none focus:border-indigo-500 px-2 py-1"
//           />
//         ) : (
//           <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
//             {userData.name}
//           </h1>
//         )}
//       </div>

//       {/* Contact Info */}
//       <section className="mt-8 w-full bg-white shadow-md rounded-xl p-4 sm:p-6">
//         <h2 className="text-xl font-semibold text-indigo-700 mb-4">
//           Contact Information
//         </h2>
//         <div className="grid sm:grid-cols-2 gap-4">
//           <div>
//             <p className="font-medium text-gray-600">Email</p>
//             <p className="text-gray-800 break-all">{userData.email}</p>
//           </div>

//           <div>
//             <p className="font-medium text-gray-600">Phone</p>
//             {isEdit ? (
//               <input
//                 type="text"
//                 value={userData.phone}
//                 onChange={(e) =>
//                   setUserData((prev) => ({ ...prev, phone: e.target.value }))
//                 }
//                 className="w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 px-1 py-1"
//               />
//             ) : (
//               <p className="text-gray-800">{userData.phone}</p>
//             )}
//           </div>
//         </div>

//         {/* Address */}
//         <div className="mt-4">
//           <p className="font-medium text-gray-600">Address</p>
//           {isEdit ? (
//             <div className="flex flex-col gap-2">
//               <input
//                 type="text"
//                 value={userData.address.line1}
//                 onChange={(e) =>
//                   setUserData((prev) => ({
//                     ...prev,
//                     address: { ...prev.address, line1: e.target.value },
//                   }))
//                 }
//                 className="border-b border-gray-300 focus:outline-none focus:border-indigo-500 px-1 py-1"
//               />
//               <input
//                 type="text"
//                 value={userData.address.line2}
//                 onChange={(e) =>
//                   setUserData((prev) => ({
//                     ...prev,
//                     address: { ...prev.address, line2: e.target.value },
//                   }))
//                 }
//                 className="border-b border-gray-300 focus:outline-none focus:border-indigo-500 px-1 py-1"
//               />
//             </div>
//           ) : (
//             <p className="text-gray-800">
//               {userData.address.line1}
//               <br />
//               {userData.address.line2}
//             </p>
//           )}
//         </div>
//       </section>

//       {/* Basic Info */}
//       <section className="mt-6 w-full bg-white shadow-md rounded-xl p-4 sm:p-6">
//         <h2 className="text-xl font-semibold text-indigo-700 mb-4">
//           Basic Information
//         </h2>
//         <div className="grid sm:grid-cols-2 gap-4">
//           <div>
//             <p className="font-medium text-gray-600">Gender</p>
//             {isEdit ? (
//               <select
//                 value={userData.gender}
//                 onChange={(e) =>
//                   setUserData((prev) => ({ ...prev, gender: e.target.value }))
//                 }
//                 className="w-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-indigo-500"
//               >
//                 <option value="female">Female</option>
//                 <option value="male">Male</option>
//               </select>
//             ) : (
//               <p className="text-gray-800 capitalize">{userData.gender}</p>
//             )}
//           </div>

//           <div>
//             <p className="font-medium text-gray-600">Date of Birth</p>
//             {isEdit ? (
//               <input
//                 type="date"
//                 value={userData.dob}
//                 onChange={(e) =>
//                   setUserData((prev) => ({ ...prev, dob: e.target.value }))
//                 }
//                 className="w-full border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-indigo-500"
//               />
//             ) : (
//               <p className="text-gray-800">{userData.dob}</p>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Edit / Save Button */}
//       <button
//         onClick={() => setIsEdit(!isEdit)}
//         className="mt-6 bg-indigo-600 text-white px-8 py-2 rounded-full font-medium shadow hover:bg-indigo-700 transition"
//       >
//         {isEdit ? "Save Information" : "Edit Profile"}
//       </button>
//     </div>
//   );
// }

// export default MyProfile;


import React, { useState } from "react";
import { FaEdit, FaSave, FaCamera } from "react-icons/fa"; // React Icons

function MyProfile() {
  const [userData, setUserData] = useState({
    name: "Aneesa Idrees",
    image: "https://i.pravatar.cc/300?img=5", // dummy profile image
    email: "anisaidrees191@gmail.com",
    phone: "+9230102369501",
    address: {
      line1: "House no 123, Block A",
      line2: "Karachi, Pakistan",
    },
    gender: "female",
    dob: "2008-01-04",
  });

  const [isEdit, setIsEdit] = useState(false);
  const [previewImg, setPreviewImg] = useState(userData.image);

  // 📸 Profile Image Change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImg(reader.result);
        setUserData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen p-4">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-lg p-6 sm:p-10">
        {/* Profile Photo */}
        <div className="relative flex flex-col items-center">
          <img
            src={previewImg}
            alt="Profile"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-purple-400 shadow-md"
          />
          {isEdit && (
            <label className="absolute bottom-0 right-24 sm:right-28 bg-purple-600 hover:bg-purple-700 p-3 rounded-full cursor-pointer shadow-lg">
              <FaCamera className="text-white text-lg" />
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          )}
        </div>

        {/* Name */}
        <div className="mt-6 text-center">
          {isEdit ? (
            <input
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="text-2xl font-semibold text-center border-b border-purple-400 focus:outline-none"
            />
          ) : (
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-700">
              {userData.name}
            </h2>
          )}
          <p className="text-gray-500 mt-1">User Profile</p>
        </div>

        {/* Contact Info */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">
            Contact Information
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{userData.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              {isEdit ? (
                <input
                  type="text"
                  value={userData.phone}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  className="border rounded-md px-3 py-2 w-full"
                />
              ) : (
                <p className="font-medium">{userData.phone}</p>
              )}
            </div>
            <div className="sm:col-span-2">
              <p className="text-sm text-gray-500">Address</p>
              {isEdit ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Line 1"
                    value={userData.address.line1}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line1: e.target.value },
                      }))
                    }
                    className="border rounded-md px-3 py-2 w-full"
                  />
                  <input
                    type="text"
                    placeholder="Line 2"
                    value={userData.address.line2}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line2: e.target.value },
                      }))
                    }
                    className="border rounded-md px-3 py-2 w-full"
                  />
                </div>
              ) : (
                <p className="font-medium">
                  {userData.address.line1}
                  <br />
                  {userData.address.line2}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Basic Info */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">
            Basic Information
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500">Gender</p>
              {isEdit ? (
                <select
                  value={userData.gender}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, gender: e.target.value }))
                  }
                  className="border rounded-md px-3 py-2 w-full"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              ) : (
                <p className="font-medium capitalize">{userData.gender}</p>
              )}
            </div>
            <div>
              <p className="text-sm text-gray-500">Birthday</p>
              {isEdit ? (
                <input
                  type="date"
                  value={userData.dob}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, dob: e.target.value }))
                  }
                  className="border rounded-md px-3 py-2 w-full"
                />
              ) : (
                <p className="font-medium">{userData.dob}</p>
              )}
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="mt-10 flex justify-center">
          {isEdit ? (
            <button
              onClick={() => setIsEdit(false)}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full shadow-md transition"
            >
              <FaSave /> Save
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full shadow-md transition"
            >
              <FaEdit /> Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
