import { list } from "postcss"
import React from "react"
import { FcPlanner, FcDisclaimer, FcBriefcase } from "react-icons/fc"
const lists = [
  {
    id: 1,
    status_name: "Pending Applications",
    amount: 24,
    icon: <FcBriefcase className="w-8 h-8" />,
  },
  {
    id: 2,
    status_name: "Interviews Schedules",
    amount: 28,
    icon: <FcPlanner className="w-8 h-8" />,
  },
  {
    id: 3,
    status_name: "Jobs Declined",
    amount: 18,
    icon: <FcDisclaimer className="w-8 h-8" />,
  },
]

const Overview = () => {
  return (
    <>
      <section className=" grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 xl:gap-20 my-10 mb-28 px-5 lg:px-0 ">
        {lists.map((item) => {
          const { id, status_name, amount, icon } = item
          return (
            <article
              key={id}
              className=" bg-gradient-to-tr from-blue-600 via-blue-700 to-blue-800/90 text-white rounded-3xl xl:h-60 p-10 md:p-5 lg:p-8 space-y-10 flex flex-col justify-center shadow-xl shadow-blue-500/40  "
            >
              <div className=" flex items-center space-x-6 ">
                <p className="  outline-dashed outline-blue-500 hover:scale-110  outline-2 outline-offset-4 rounded-lg px-2 py-1 transition-all duration-300 ease-in  ">
                  {icon}
                </p>
                <p className="xl:text-xl font-medium text-gray-300 ">
                  {" "}
                  {status_name}
                </p>
              </div>
              <p className="font-bold text-5xl xl:text-7xl opacity-30 ">
                {" "}
                {amount}{" "}
                <span className="text-lg font-normal text-green-500 ">
                  {" "}
                  +4.5%{" "}
                </span>{" "}
              </p>
            </article>
          )
        })}
        {/* <article className=" flex gap-10   ">
          {lists.map((item) => {
            const { id, status_name, amount } = item
            return (
              <div
                key={id}
                className=" w-full  space-y-2 flex flex-col justify-center items-center rounded-3xl border py-4 px-6 "
              >
                <div className="flex xl:flex-col justify-center items-center w-full space-x-4 xl:space-y-2  ">
                  <span className=" px-2 py-2 bg-yellow-400/40 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm4.125 3a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm-3.873 8.703a4.126 4.126 0 017.746 0 .75.75 0 01-.351.92 7.47 7.47 0 01-3.522.877 7.47 7.47 0 01-3.522-.877.75.75 0 01-.351-.92zM15 8.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15zM14.25 12a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <p className=" text-sm "> {status_name} </p>
                  <p className="text-3xl font-semibold"> {amount} </p>
                </div>
              </div>
            )
          })}
        </article> */}
      </section>
    </>
  )
}

export default Overview
