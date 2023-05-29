import React from "react"
import { Navbar, Logo } from "../components"
import { Link } from "react-router-dom"
import mockup1 from "../assets/mockup1.png"
const Landing = () => {
  return (
    <>
      <Navbar />
      <section className=" lg:px-4">
        <div className="mx-auto grid max-w-screen-xl py-8 px-4 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0 ">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl font-bold leading-none md:text-5xl xl:text-6xl">
              Job tracking tool for software engineers
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl">
              Track your job search progress with Indago - Never miss an update
              on your job application status.
            </p>
            <Link
              to="/register"
              className="mr-3 inline-flex items-center justify-center rounded-md bg-secondary-700 py-3 px-5 text-center text-base font-medium text-white hover:bg-secondary-800"
            >
              Get started
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="hidden lg:col-span-5 lg:mt-0 lg:flex   ">
            {/* <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            /> */}

            <img src={mockup1} width="300" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Landing