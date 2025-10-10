import React from 'react'

const Button = () => {

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className={`mt-3 rounded-full w-full py-2.5 font-medium text-white 
                bg-gradient-to-r from-indigo-500 to-indigo-800 
                ${loading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}`}
        >
            {loading
                ? (state === "signUp" ? "Signing up..." : "Logging in...")
                : (state === "signUp" ? "Sign up" : "Login")}
        </motion.button>
    )
}

export default Button
