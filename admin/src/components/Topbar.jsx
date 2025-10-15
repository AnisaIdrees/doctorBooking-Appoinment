import React from 'react'

const Topbar = ({ toggleSidebar }) => {
  return (
    <header className="bg-white border border-gray-100 shadow p-4 flex justify-between items-center sticky top-0 z-40">
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="md:hidden bg-[#f70ff7] text-white px-3 py-2 rounded-lg"
        >
          ☰
        </button>
        <h1 className="text-2xl font-semibold text-[#050514] tracking-tight">Welcome, Aneesa 👋</h1>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="hidden sm:block border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#f70ff7]"
        />
        <img
          src="https://i.pravatar.cc/40"
          alt="user-avatar"
          className="w-10 h-10 rounded-full border border-[#f70ff7]"
        />
      </div>
    </header>
  );
};
export default Topbar
