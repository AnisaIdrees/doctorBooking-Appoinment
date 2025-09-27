import React from 'react'
import HeaderBanner from '../components/HeaderBanner'
import {motion} from 'framer-motion'


export default function Contact() {
  return (
    <div>

      <HeaderBanner heading1={'Contact'} paragraph={'Lorem ipsum dolor, sit amet consectetur'}
        bgImg={'https://thumbs.dreamstime.com/b/doctor-table-contact-us-icons-virtual-screen-96409322.jpg'}
      />
      <section class="px-6 py-12 bg-gray-50">

        <h1 class="text-3xl font-bold text-center sm:text-left px-0 sm:px-23 text-gray-800 mb-10">
          Get in Touch
        </h1>


        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          <form class="bg-white p-8 rounded-xl shadow-md space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              class="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              class="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              class="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-indigo-600 to-indigo-800 text-white text-[16px] px-5 py-3 rounded-full font-light cursor-pointer"
            >
              Send
            </motion.button>
          </form>


          <div class="rounded-xl overflow-hidden shadow-md">
            <iframe
              class="w-full h-[400px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.045569370212!2d67.0011!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUxJzM4LjUiTiA2N8KwMDAnMDMuOSJF!5e0!3m2!1sen!2s!4v1679398597853!5m2!1sen!2s"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  )
}
