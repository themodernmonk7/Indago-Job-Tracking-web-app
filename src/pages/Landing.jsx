import React from "react"
import { Navbar } from "../components"
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
            <h1 className="text-6xl font-medium max-w-[24.2rem] ">
              Make the best move to choose your new job
            </h1>
            <p className=" w-3/5 text-lg ">
              Indago will help and recommend a place to work that fits your
              criteria. Fast, Safe and reliable.
            </p>
          </div>
          <Link className="bg-blue-500 text-white block mr-auto px-12 py-3 rounded-lg text-xl my-10 ">
            {" "}
            Start{" "}
          </Link>
        </div>
        {/* Left */}
        <div className=" border rounded-xl shadow-md ">
          <img src={PhoneMockup} alt="" className=" w-96 h-96 object-cover " />
        </div>
      </section>
    </>
  )
} 

export default Landing
