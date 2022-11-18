import React from "react"
import mainImage from "../assets/main.png"
import girlImage from "../assets/girlLogin2.jpg"

const Register = () => {
  return (
    <section className="flex flex-row justify-center h-screen">
      {/* Left */}
      <section className=" w-1/3 hidden bg-[#ff898b] md:flex flex-col justify-center items-center">
        <header className=" w-3/4 space-y-4 text-pink-800 ">
          <h4 className="text-3xl">Indago</h4>
          <h1 className="text-2xl xl:text-4xl font-black">
            Dicover the world's top Designers & Creatives
          </h1>
        </header>
        <div className=" h-2/3 w-full">
          <img
            src={girlImage}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>
      {/* Right */}
      <div className=" w-full flex flex-col items-center  mt-28 md:mt-0   md:justify-center">
        <div className=" xl:w-1/3 md:w-1/2  w-full  px-6 md:px-0  space-y-8">
          <h1 className="text-center text-4xl">Indago</h1>
          <h2 className="text-left text-3xl font-medium tracking-widest">
            Create an account
          </h2>
          <form className=" space-y-6">
            <div className="flex flex-col space-y-2">
              <label htmlFor="" className="">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="rounded-md border border-gray-100 hover:bg-white focus:bg-white  bg-gray-100 placeholder:text-sm focus:outline-none focus:border-[#f53465]/30 focus:ring-[#f53465]/10 focus:ring-4 hover:ring-[#f53465]/10 hover:ring-4 hover:border"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-md border border-gray-100 hover:bg-white focus:bg-white  bg-gray-100 placeholder:text-sm focus:outline-none focus:border-[#f53465]/30 focus:ring-[#f53465]/10 focus:ring-4 hover:ring-[#f53465]/10 hover:ring-4 hover:border"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="6+ characters"
                className="rounded-md border border-gray-100 hover:bg-white focus:bg-white  bg-gray-100 placeholder:text-sm focus:outline-none focus:border-[#f53465]/30 focus:ring-[#f53465]/10 focus:ring-4 hover:ring-[#f53465]/10 hover:ring-4 hover:border font-semibold placeholder:font-normal"
              />
            </div>
          </form>
          <button className="mr-auto bg-[#f53465] hover:bg-[#f53465]/80 text-white tracking-wider px-10 py-2 rounded-md focus:outline-none focus:bg-[#f53465]/60">
            Create Account
          </button>
          <p className="text-center text-sm">
            Already a member?{" "}
            <button className="text-blue-600">Login In</button>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Register
