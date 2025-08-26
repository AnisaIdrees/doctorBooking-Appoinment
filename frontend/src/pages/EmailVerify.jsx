import React from "react";
import { useState } from "react";
import axios from "axios";
import { getToken } from "../utils/auth";
import Button from "../components/Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export default function EmailVerify() {
  const [otp, setOtp] = useState(Array(5).fill("")); // 5 digit OTP
  const [message, setMessage] = useState("");
  const navigate = useNavigate()
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

      if (res.data.success) {
        setMessage(res.data.message || "OTP Verified ✅");
        toast.success(res.data.message)

        setTimeout(() => {
          navigate('/')
        }, 5000)
      }
      else {
        toast.error(res.data.message)
      }

    } catch (err) {
      setMessage(err.response?.data?.message || "Verification failed ❌");
      toast.error(err.response?.data?.message || "Verification failed ❌")
    }
  };

  return (
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

        <Button text='Verify OTP' onClick={handleSubmit} />

        {/* Response Message */}
        {message && (
          <p className="mt-4 text-sm text-gray-700 text-center">{message}</p>
        )}
      </div>
    </div>

  );
}

