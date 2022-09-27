import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
        {/* Logo */}
        <h1 className='text-primary text-2xl'>Indago</h1>
        {/* Menu items */}
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Service</li>
            <li>Feature</li>
        </ul>
        {/* Sign in / Join buttons */}
        <div className="">
            <button className="">Sign In</button>
            <button className="">Join</button>
            <button className="">Add Job</button>
        </div>
    </nav>
  )
}

export default Navbar