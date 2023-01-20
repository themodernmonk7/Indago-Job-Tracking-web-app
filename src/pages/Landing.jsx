import React from "react"
import { Navbar, Logo } from "../components"
import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <>
      <Navbar />
      <section className=" lg:px-4">
        <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
          <div className="place-self-center mr-auto lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl font-bold leading-none md:text-5xl xl:text-6xl">
              Job tracking tool for software engineers
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              Track your job search progress with Indago - Never miss an update
              on your job application status.
            </p>
            <Link
              to="/register"
              className="inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-secondary-700 hover:bg-secondary-800"
            >
              Get started
              <svg
                className="ml-2 -mr-1 w-5 h-5"
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
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
        </div>
      </section>
      {/* <section className="bg-gray-100/50">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900">
              Start your free trial today
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg">
              Try Indago Platform for 30 days. No credit card required.
            </p>
            <Link
              to="/register"
              className="text-white bg-secondary-700 hover:bg-secondary-800 focus:ring-4 focus:ring-secondary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            >
              Free trial for 30 days
            </Link>
          </div>
        </div>
      </section> */}
    </>
  )
}

export default Landing