import React from "react"
import { Navbar, Logo } from "../components"
import PhoneMockup from "../assets/rightimg.png"
import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <>
      <Navbar />
      <section className="flex container mx-auto justify-between my-28 items-center px-44 ">
        {/* Right */}
        <div className=" flex flex-col justify-between ">
          <div className=" space-y-8 ">
            {/* max-w-[24.2rem] */}
            <h1 className="text-6xl font-[600] max-w-[24.2rem]  ">
              Make the best move to choose your new job
            </h1>
            <p className=" w-3/5 text-lg ">
              Indago will help and recommend a place to work that fits your
              criteria. Fast, Safe and reliable.
            </p>
          </div>
          <Link
            to="/register"
            className="bg-primary text-white block mr-auto px-12 py-3 rounded-lg text-xl my-10 "
          >
            {" "}
            Start{" "}
          </Link>
        </div>
        {/* Left */}
        <div className=" border rounded-xl shadow-md ">
          <img src={PhoneMockup} alt="" className=" w-96 h-96 object-cover " />
        </div>
      </section>
      {/* Bottom  */}
      <section className=" container mx-auto flex justify-between items-center py-6   my-10">
        <div className=" w-1/2 space-y-6  ">
          {/* Logo */}
          <div className=" flex items-center space-x-3 ">
            <Logo className=" h-6" />
            <h3 className="text-lg font-medium">Indago.</h3>
          </div>
          <h3 className="text-4xl w-1/2 font-semibold ">
            Take your chance to work in a place that matters to you
          </h3>
        </div>
        <div className=" space-x-10 ">
          <button className="bg-gradient-to-tr from-blue-600 via-blue-700 to-blue-700/90 px-6 rounded-md py-2 text-white ">
            Register
          </button>
          <button className="text-sm text-blue-700 font-medium ">
            Sing In Now
          </button>
        </div>
      </section>
      {/* Footer */}
      <footer className="">footer</footer>
    </>
  )
} 

export default Landing
