import React from 'react'
import { Link } from 'react-router-dom'



function Footer() {
    return (
        <>

            <footer className="bg-gray-50 text-gray-700 py-10 mt-10">
                <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                    {/* Logo + About */}
                    <div>
                        <img src="/NavLogo.png" alt="Doccure Logo" className="w-32 mb-4" />
                        <p className="text-sm leading-relaxed">
                            Doccure is your trusted healthcare partner. Book appointments with top
                            doctors, access medical advice, and manage your health records — all in one place.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
                            <li><Link to="/doctors" className="hover:text-blue-600">Our Doctors</Link></li>
                            <li><Link to="/appointment" className="hover:text-blue-600">Book Appointment</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Get in Touch */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                        <ul className="space-y-2 text-sm">
                            <li>📍 Karachi, Pakistan</li>
                            <li>📞 +92 300 1234567</li>
                            <li>✉️ support@doccure.com</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-blue-600 hover:text-blue-800">
                                <i className="fab fa-facebook fa-lg"></i>
                            </a>
                            <a href="#" className="text-blue-400 hover:text-blue-600">
                                <i className="fab fa-twitter fa-lg"></i>
                            </a>
                            <a href="#" className="text-pink-600 hover:text-pink-800">
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                            <a href="#" className="text-blue-700 hover:text-blue-900">
                                <i className="fab fa-linkedin fa-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Line */}
                <div className="mt-10 border-t border-gray-300 pt-4 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Doccure. All rights reserved. Developed by anisaidrees
                </div>
            </footer>
        </>
    )
}

export default Footer