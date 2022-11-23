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
      </section>
    </>
  )
}

export default Overview
