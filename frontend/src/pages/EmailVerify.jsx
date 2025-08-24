import React from "react";
import { useState } from "react";
import axios from "axios";
import { getToken } from "../utils/auth";

export default function EmailVerify() {
  const [otp, setOtp] = useState(Array(5).fill("")); // 5 digit OTP
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // auto move to next input
      if (value && index < 4) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  // Handle backspace navigation
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  // Submit OTP to backend
  const handleSubmit = async () => {
    try {
      const enteredOtp = otp.join(""); // combine 5 digits

      if (enteredOtp.length !== 5) {
        return setMessage("Please enter all 5 digits.");
      }
      const token = getToken();
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/verify-account`, {
        otp: enteredOtp
      },
        { headers: { Authorization: `Bearer ${token}` } });

      setMessage(res.data.message || "OTP Verified ✅");
    } catch (err) {
      setMessage(err.response?.data?.message || "Verification failed ❌");
    }
  };

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    //   {/* Logo */}
    //   <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100 mb-4">
    //     <img
    //       src="verificationLogo.png"
    //       alt="logo"
    //       className="w-14 h-14 rounded-full object-cover"
    //     />
    //   </div>

    //   {/* Heading */}
    //   <h2 className="text-xl font-bold mb-2">Email Verification</h2>
    //   <p className="text-gray-600 mb-4">Enter the 5 digit OTP sent to your email</p>

    //   {/* OTP Input Boxes */}
    //   <div className="flex space-x-3 mb-6">
    //     {otp.map((digit, index) => (
    //       <input
    //         key={index}
    //         id={`otp-${index}`}
    //         type="text"
    //         value={digit}
    //         maxLength={1}
    //         onChange={(e) => handleChange(e.target.value, index)}
    //         onKeyDown={(e) => handleKeyDown(e, index)}
    //         className="w-12 h-12 text-center text-lg border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
    //       />
    //     ))}
    //   </div>

    //   {/* Submit Button */}
    //   <button
    //     onClick={handleSubmit}
    //     className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
    //   >
    //     Verify OTP
    //   </button>

    //   {/* Response Message */}
    //   {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
    // </div>

<div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('bgImage.jpg')" }}>
  {/* Semi-transparent overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Verification Box */}
  <div className="relative bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-md animate-fadeIn scale-95 transition-all duration-300 verification_box">
    
    {/* Logo */}
    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-200 shadow-md mx-auto mb-6">
      <img
        src="verificationLogo.png"
        alt="logo"
        className="w-16 h-16 rounded-full object-cover"
      />
    </div>

    {/* Heading */}
    <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
      Email Verification
    </h2>
    <p className="text-gray-600 text-sm mb-6 text-center max-w-xs mx-auto">
      Enter the <span className="font-semibold text-indigo-600">5 digit OTP</span> sent to your email
    </p>

    {/* OTP Input Boxes */}
    <div className="flex justify-center space-x-3 mb-6">
      {otp.map((digit, index) => (
        <input
          key={index}
          id={`otp-${index}`}
          type="text"
          value={digit}
          maxLength={1}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-12 h-12 sm:w-14 sm:h-14 text-center text-xl font-medium border border-gray-300 rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm bg-white"
        />
      ))}
    </div>

    {/* Submit Button */}
    <button
      onClick={handleSubmit}
      className="w-full px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md 
      hover:bg-indigo-700 hover:scale-[1.02] transition-all duration-200 ease-in-out"
    >
      Verify OTP
    </button>

    {/* Response Message */}
    {message && (
      <p className="mt-4 text-sm text-gray-700 text-center">{message}</p>
    )}
  </div>
</div>

  );
}

