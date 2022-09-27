import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-[#102a39] ">
      <div className="container mx-auto py-6 text-white flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-primary text-2xl">Indago</h1>
        <form>
          <input
            type="text"
            className="py-2 px-4 rounded-lg placeholder:text-sm bg-slate-700"
            placeholder="Job title here"
          />
        </form>

        <div className="flex flex-row justify-center items-center space-x-24">
          {/* Menu items */}
          <ul className="flex space-x-8 tracking-wide text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Service</li>
            <li>Feature</li>
          </ul>
          {/* Sign in / Join buttons */}
          <div className="space-x-4 text-xs  ">
            <button className="font-medium">Sign In</button>
            <button className="text-[#102a39] font-semibold  bg-white px-6 py-4 rounded-lg ">
              Join
            </button>
            <button className="bg-[#f53465] px-6 py-4 font-normal rounded-lg">
              Add job
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar