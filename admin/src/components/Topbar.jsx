import React from 'react'
import { icons} from '../assets/assets';
import { images } from '../assets/assets';

import Noty from './Noty';
import { Link } from 'react-router-dom';

const Topbar = ({ toggleSidebar }) => {
  return (
    <header className="bg-white border border-gray-100 shadow p-4 flex justify-between items-center sticky top-0 z-40">
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="md:hidden text-gray-900 text-2xl font  rounded-lg"
        >
          ☰
        </button>
        <h1 className="text-xl font-semibold px-2 text-[#050514] tracking-tight hidden sm:hidden md:block">Welcome, Aneesa 👋</h1>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="hidden sm:block border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />

        <Link to='/add-doctor' className='hover:translate-y-0.5 transition ease-in duration-150 w-8 h-8 rounded-full text-gray-600 bg-gray-100 flex justify-center items-center'>
          {<icons.addDoctor  className='w-6 h-6'/>}</Link>

        <Noty count={1} />


        <img
          src={images.profileImg}
          alt="user-avatar"
          className="w-8 h-8 object-fill rounded-full border border-indigo-600"
        />
      </div>
    </header>
  );
};
export default Topbar
