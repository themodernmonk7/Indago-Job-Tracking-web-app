import React from "react"
import data from "../data"
// import { HiEllipsisVertical, HiTrash } from "react-icons/hi2"
import { HiDotsVertical, HiTrash } from "react-icons/hi"

const JobCard = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 my-10 mx-4 md:mx-8 mb-28 ">
      {data.map((item) => {
        const { id, company, position, status, jobType, jobLocation, image } =
          item
        return (
          <article
            key={id}
            className= "  bg-gray-100/80 hover:bg-white px-4 xl:px-8 py-4 xl:py-8 rounded-xl hover:shadow-md space-y-4 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-300 shadow-md md:shadow-none  "
          >
            <div className="flex items-start justify-between ">
              <div className="flex justify-center  space-x-4 items-start">
                {/* Logo */}
                  <img
                    src={image}
                    alt=""
                    className=" xl:w-14 xl:h-14 w-10 h-10 object-contain border shadow-inner  object-center rounded-full md:bg-white "
                  />
                {/* Company and Position */}
                <div className=" space-y-2 w-full">
                  <div className="">
                    <h4 className="xl:text-xl text-lg font-medium text-gray-700">
                      {position}
                    </h4>
                    <p className=" text-sm xl:text-lg font-medium text-gray-700">
                      {company}, {jobLocation}
                    </p>

                  </div>
                  <div className="flex items-center space-x-10 ">
                    <p
                      className={`capitalize tracking-wider  font-medium px-2 text-xs py-1 rounded-full ${
                        jobType === "Full-time" &&
                        "bg-pink-400/50 text-pink-500"
                      } ${
                        jobType === "Part-time" &&
                        "bg-blue-500/40 text-blue-500"
                      } ${
                        jobType === "Internship" &&
                        "bg-purple-400/40 text-purple-500"
                      } ${
                        jobType === "Remote" &&
                        "bg-fuchsia-400/40 text-fuchsia-500"
                      } `}
                    >
                      {" "}
                      {jobType}{" "}
                    </p>
                    <span className="text-[10px] text-gray-500 font-medium">
                      22 Oct 2022
                    </span>
                  </div>
                </div>
              </div>
              <p
                className={`uppercase text-[10px] md:text-xs tracking-widest font-medium  px-2 py-1 rounded-full  ${
                  status === "Declined" && "bg-red-300/70 text-red-700"
                } ${
                  status === "Interview" && "bg-green-300/70 text-green-700"
                } ${
                  status === "Pending" && "bg-yellow-300/70 text-yellow-700"
                } `}
              >
                {status}
              </p>
            </div>

            {/* Job Description */}
            <div className="">
              <p className="text-gray-600 hidden md:grid ">
                I applied in this company because my skill set matched the
                criteria and I am confident enough to crack the interview.
              </p>
            </div>

            <button className=" ml-auto block items-center hover:text-gray-500 transition-all  ">
              <HiDotsVertical className="w-5 h-5 " />
            </button>
          </article>
        )
      })}
    </section>
  )
}

export default JobCard
