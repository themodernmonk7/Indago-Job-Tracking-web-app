import React from "react"
import mainImage from "../assets/main.png"
import girlImage from "../assets/girlLogin2.jpg"
import UserImage from "../assets/user.png"
import Logo from "../assets/Logo.png"
const Register = () => {
  return (
    <>
      <section className=" container mx-auto h-screen  flex ">
        {/* Right */}
        <article className=" bg-blue-700 w-1/2 rounded-2xl p-10 space-y-10 my-16 flex flex-col justify-between relative overflow-hidden shadow-2xl ">
          <h1 className="text-2xl text-white uppercase font-bold tracking-wider ">
            Indago.
          </h1>
          <div className=" space-y-6 ">
            <h3 className="text-5xl text-white font-medium leading-[4rem] ">
              Start your journey with us.
            </h3>
            <h4 className=" text-xl text-gray-300 ">
              Discover the world's best community of freelancers and business
              owners.{" "}
            </h4>
          </div>
          <div className=" bg-blue-800/70 rounded-xl flex flex-col justify-between p-4 py10 space-y-12  ">
            <p className="text-gray-300">
              Simply unbelievable! I am really satisfied with my projects and
              business. This is Absolutely wonderful!
            </p>
            <div className="flex items-center space-x-6 ">
              <img
                src={UserImage}
                alt=""
                className="w-14 h-14 object-cover rounded-lg"
              />
              <div className=" space-y2 ">
                <h4 className="text-white text-lg "> Sara Williams </h4>
                <p className="text-gray-400">Freelancer</p>
              </div>
            </div>
          </div>
          <div className="absolute -top-12 -right-10  bg-blue-900 w-28 h-28 rounded-full opacity-40 "></div>
        </article>
        {/* Left */}
        <article className=" my-16 bg-red200 w-full flex flex-col items-center justify-between space-y-12  ">
          <div className=" flex flex-col items-center space-y-4 ">
            <img
              src={Logo}
              alt=""
              className=" w-24 h-16 object-cover mix-blend-multiply "
            />
            <h4 className="text-4xl font-medium">Hello Again!</h4>
          </div>
          <form className=" w-1/2 ">
            <div className=" space-y-6 ">
              <div className="flex flex-col space-y-2 ">
                <label htmlFor="" className=" text-gray-400 text-lg ">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="enter your name"
                  className="rounded-xl border-2 border-gray-200 placeholder:text-sm focus:outline-none focus:ring-blue-700/70 focus:ring-2 hover:ring-blue-700/90 hover:ring-2 py-4 placeholder:text-gray-300 transition-all duration-200 ease-in-out delay-100 text-lg "
                />
              </div>

              <div className="flex flex-col space-y-2 ">
                <label htmlFor="" className=" text-gray-400 text-lg ">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="youremail@gmail.com"
                  className="rounded-xl border-2 border-gray-200 placeholder:text-sm focus:outline-none focus:ring-blue-700/70 focus:ring-2 hover:ring-blue-700/90 hover:ring-2 py-4 placeholder:text-gray-300 transition-all duration-200 ease-in-out delay-100 text-lg "
                />
              </div>

              <div className="flex flex-col space-y-2 ">
                <label htmlFor="" className=" text-gray-400 text-lg ">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="*********"
                  className="rounded-xl border-2 border-gray-200 placeholder:text-sm focus:outline-none focus:ring-blue-700/70 focus:ring-2 hover:ring-blue-700/90 hover:ring-2 py-4 placeholder:text-gray-300 transition-all duration-200 ease-in-out delay-100 text-lg"
                />
              </div>
            </div>

            <button className=" bg-blue-700 hover:bg-blue-900/90 text-white tracking-wider px-10 py-4 rounded-xl focus:outline-none focus:bg-blue-800/90 w-full mt-20 transition-all duration-300 ease-linear delay200 ">
              Create Account
            </button>
          </form>
          <p className=" text-lg">
            Already a member?{" "}
            <button className="text-blue-700 font-medium ">Login In</button>
          </p>
        </article>
      </section>
    </>
  )
}

export default Register


