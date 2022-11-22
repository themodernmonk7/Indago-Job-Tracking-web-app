import React from "react"
import mainImage from "../assets/main.png"
import girlImage from "../assets/girlLogin2.jpg"
import UserImage from "../assets/user.png"
import Logo from "../assets/Logo.png"
const Register = () => {
  return (
    <>
      <section className=" container mx-auto h-screen  flex  flex-col-reverse md:flex-row ">
        {/* Right */}
        <article className=" hidden bg-primary md:w-1/2 rounded-2xl p-10 space-y-10 my-16 lg:flex flex-col justify-between relative overflow-hidden shadow-2xl ">
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
          <div className=" bg-indigo-700 rounded-xl flex flex-col justify-between p-4 py10 space-y-12  ">
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
        <article className=" md:my-16  w-full flex flex-col items-center justify-between space-y-12   ">
          <div className=" flex flex-col items-center space-y-4 ">
            <img
              src={Logo}
              alt=""
              className=" w-24 h-16 object-cover mix-blend-multiply "
            />
            <h4 className="text-4xl font-medium">Hello Again!</h4>
          </div>
          <form className=" md:w-2/3  lg:w-1/2 w-full px-4 md:px-0 ">
            <div className=" space-y-6 ">
              <div className="flex flex-col space-y-2 ">
                <label htmlFor="" className=" label_style ">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="enter your name"
                  className="input_style py-4"
                />
              </div>

              <div className="flex flex-col space-y-2 ">
                <label htmlFor="" className=" label_style ">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="youremail@gmail.com"
                  className="input_style py-4 "
                />
              </div>

              <div className="flex flex-col space-y-2 ">
                <label htmlFor="" className=" label_style ">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="*********"
                  className="input_style py-4 "
                />
              </div>
            </div>

            <button className=" bg-primary hover:bg-blue-900/90 text-white tracking-wider px-10 py-4 rounded-xl focus:outline-none focus:bg-blue-800/90 w-full mt-20 transition-all duration-300 ease-in shadow ">
              Create Account
            </button>
          </form>
          <p className=" text-lg ">
            Already a member?{" "}
            <button className="text-blue-700 font-medium ">Login In</button>
          </p>
        </article>
      </section>
    </>
  )
}

export default Register


