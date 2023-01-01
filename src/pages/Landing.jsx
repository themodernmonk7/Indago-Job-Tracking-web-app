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
      <section className=" container mx-auto ">
        <div className="">
          {/* Logo */}
          <Logo className=" h-10" />
          <h3>Take your chance to work in a place that matters to you</h3>
        </div>
        <div className="">
          <button className="">Register</button>
          <button className="">Sing In Now</button>
        </div>
      </section>
      {/* Footer */}
      <footer className="">footer</footer>
    </>
  )
} 

export default Landing
