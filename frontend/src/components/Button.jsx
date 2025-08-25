import React from 'react'
import { useState } from "react";


function Button({ text, onClick }) {
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        try {
            setLoading(true);
            await onClick(); // parent se function ayega
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <button
                onClick={handleClick}
                disabled={loading}
                className={`mt-3 rounded-full w-full py-2.5 font-medium text-white 
                bg-gradient-to-r from-indigo-500 to-indigo-800 
                ${loading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}`}
            >
                {loading ? `${text}...` : text}
            </button>
        </>
    )
}

export default Button