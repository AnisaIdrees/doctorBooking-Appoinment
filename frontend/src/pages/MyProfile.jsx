import React, { useState, useRef } from "react";
import { FaCamera, FaEdit, FaSave } from "react-icons/fa";


 function MyProfile() {
  const [userData, setUserData] = useState({
    name: "Aneesa Idrees",
    image: "https://i.pravatar.cc/300?img=5",
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
  const fileInputRef = useRef(null);

  // Open file picker
  const openFilePicker = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  // Read file and set preview + state
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImg(reader.result);
      setUserData((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  // Generic field updater for nested address
  const updateAddress = (field, value) => {
    setUserData((prev) => ({
      ...prev,
      address: { ...prev.address, [field]: value },
    }));
  };

  // Save handler (here just toggles edit off; integrate with API if needed)
  const handleSave = () => {
    // TODO: persist userData to server if required
    setIsEdit(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 py-5">
      <div className="w-full max-w-5xl bg-white rounded shadow overflow-hidden">
        <div className="p-6 sm:p-8">
          {/* Top row: avatar + name & small actions */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative">
              <img
                src={previewImg}
                alt={`${userData.name} avatar`}
                className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-indigo-100 shadow-md"
              />

              {/* Camera overlay like WhatsApp — shown only in edit mode */}
              {isEdit && (
                <button
                  type="button"
                  onClick={openFilePicker}
                  aria-label="Change profile photo"
                  className="absolute right-0 bottom-0 -mb-1 -mr-1 bg-white p-1 rounded-full shadow-sm hover:scale-105 transition transform"
                >
                  <div className="bg-gradient-to-r from-indigo-500 to-indigo-800 text-white p-2 rounded-full">
                    <FaCamera />
                  </div>
                </button>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>

            <div className="flex-1 w-full text-center sm:text-left">
              {isEdit ? (
                <input
                  aria-label="Full name"
                  type="text"
                  value={userData.name}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="w-full text-2xl sm:text-3xl font-semibold text-gray-800 border-b border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 px-1 py-1"
                />
              ) : (
                <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
                  {userData.name}
                </h1>
              )}

              <p className="text-sm text-gray-500 mt-1">{userData.email}</p>

              {/* Buttons */}
              <div className="mt-4 flex items-center justify-center sm:justify-start gap-3">
                {isEdit ? (
                  <>
                    <button
                      onClick={handleSave}
                      className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-indigo-800 text-white px-4 py-2 rounded-full shadow hover:opacity-95 transition"
                    >
                      <FaSave />
                      <span>Save</span>
                    </button>
                    <button
                      onClick={() => setIsEdit(false)}
                      className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsEdit(true)}
                    className="flex items-center gap-2 bg-white border border-indigo-200 text-indigo-700 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition"
                  >
                    <FaEdit />
                    <span>Edit Profile</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="mt-8 grid grid-cols-1 gap-6">
            {/* Contact Card */}
            <div className="bg-white rounded-lg border border-gray-100 p-4 sm:p-6 shadow-sm">
              <h2 className="text-lg font-medium text-gray-800 mb-3">Contact</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-800 font-medium break-all">
                    {userData.email}
                  </p>
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
                      className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    />
                  ) : (
                    <p className="text-gray-800 font-medium">{userData.phone}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <p className="text-sm text-gray-500">Address</p>
                  {isEdit ? (
                    <div className="flex flex-col gap-2 mt-2">
                      <input
                        type="text"
                        value={userData.address.line1}
                        onChange={(e) => updateAddress("line1", e.target.value)}
                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                        placeholder="Address line 1"
                      />
                      <input
                        type="text"
                        value={userData.address.line2}
                        onChange={(e) => updateAddress("line2", e.target.value)}
                        className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                        placeholder="Address line 2"
                      />
                    </div>
                  ) : (
                    <div className="mt-2 text-gray-800">
                      <p className="font-medium">{userData.address.line1}</p>
                      <p className="text-sm text-gray-600">{userData.address.line2}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Basic info card */}
            <div className="bg-white rounded-lg border border-gray-100 p-4 sm:p-6 shadow-sm">
              <h2 className="text-lg font-medium text-gray-800 mb-3">Basic Info</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Gender</p>
                  {isEdit ? (
                    <select
                      value={userData.gender}
                      onChange={(e) =>
                        setUserData((prev) => ({ ...prev, gender: e.target.value }))
                      }
                      className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    >
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                      <option value="other">Other</option>
                    </select>
                  ) : (
                    <p className="font-medium capitalize">{userData.gender}</p>
                  )}
                </div>

                <div>
                  <p className="text-sm text-gray-500">Date of Birth</p>
                  {isEdit ? (
                    <input
                      type="date"
                      value={userData.dob}
                      onChange={(e) =>
                        setUserData((prev) => ({ ...prev, dob: e.target.value }))
                      }
                      className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    />
                  ) : (
                    <p className="font-medium">{userData.dob}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Footer small actions - responsive */}
          <div className="mt-6 flex justify-end gap-3">
            {isEdit ? (
              <button
                onClick={handleSave}
                className="bg-gradient-to-r from-indigo-500 to-indigo-800 text-white px-5 py-2 rounded-full shadow hover:opacity-95 transition flex items-center gap-2"
              >
                <FaSave /> Save
              </button>
            ) : (
              <button
                onClick={() => setIsEdit(true)}
                className="bg-white border border-indigo-200 text-indigo-700 px-5 py-2 rounded-full shadow flex items-center gap-2 hover:shadow-md transition"
              >
                <FaEdit /> Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );


}

export default MyProfile