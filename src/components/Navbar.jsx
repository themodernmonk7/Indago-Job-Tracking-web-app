import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import IndagoLogo from './Logo'

const Navbar = () => {
  return (
    <nav className='container mx-auto flex justify-between items-center py-4 ' >
      <div className=" py-4 flex items-center space-x-2 ">
        <IndagoLogo height={10} />
      </div>
      <div className=" space-x-12 text-lg ">
        <Link>Find Jobs</Link>
        <Link>Sign In</Link>
        <Link className='bg-blue-200 px-4 py-2 rounded-md text-blue-500 font-medium ' > Register </Link>
      </div>
    </nav>
    
  )
}

export default Navbar

// <nav className="bg-[#102a39] ">
    //   <div className="container mx-auto py-6 text-white flex justify-between items-center">
    //     {/* Logo */}
    //     <h1 className="text-primary text-2xl">Indago</h1>
    //     <form>
    //       <input
    //         type="text"
    //         className="py-2 px-4 rounded-lg placeholder:text-sm bg-slate-700"
    //         placeholder="Job title here"
    //       />
    //     </form>

    //     <div className="flex flex-row justify-center items-center space-x-24">
    //       {/* Menu items */}
    //       <ul className="flex space-x-8 tracking-wide text-sm">
    //         <li>Home</li>
    //         <li>About Us</li>
    //         <li>Service</li>
    //         <li>Feature</li>
    //       </ul>
    //       {/* Sign in / Join buttons */}
    //       <div className="space-x-4 text-xs  ">
    //         <button className="font-medium">Sign In</button>
    //         <button className="text-[#102a39] font-semibold  bg-white px-6 py-4 rounded-lg ">
    //           Join
    //         </button>
    //         <button className="bg-[#f53465] px-6 py-4 font-normal rounded-lg">
    //           Add job
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </nav>