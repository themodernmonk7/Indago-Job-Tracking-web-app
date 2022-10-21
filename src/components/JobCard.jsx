import React from "react"
import data from "../data"
import { HiEllipsisVertical, HiTrash } from "react-icons/hi2"

const JobCard = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-10 mx-4 md:mx-8 ">
      {data.map((item) => {
        const { id, company, position, status, jobType, jobLocation, image } =
          item
        return (
          <article
            key={id}
            className="bg-gray-100/60 hover:bg-white px-8 py-8 rounded-xl hover:shadow-md space-y-4 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-300 border-2  "
          >
            <div className="flex items-start justify-between ">
              <div className="flex justify-center space-x-6 items-start">
                {/* Logo */}
                <div className="w-16 h-16">
                  <img
                    src={image}
                    alt=""
                    className=" w-full h-full object-cover object-center bg-white rounded-full "
                  />
                </div>
                {/* Company and Position */}
                <div className=" space-y-2">
                  <div className="">
                    <p className="text-lg font-medium text-gray-700">
                      {company}
                    </p>
                    <h4 className="text-xl font-medium text-gray-700">
                      {position}
                    </h4>
                  </div>
                  <div className="flex items-center space-x-10">
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
                    <span className="text-xs text-gray-500 font-medium">
                      2 days ago
                    </span>
                  </div>
                </div>
              </div>
              <p
                className={`uppercase text-xs tracking-widest font-medium  px-2 py-1 rounded-full  ${
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
              <p className="text-gray-600 ">
                I applied in this company because my skill set matched the
                criteria and I am confident enough to crack the interview.
              </p>
            </div>

            <button className=" ml-auto block items-center hover:text-gray-500 transition-all  ">
              <HiEllipsisVertical className="w-6 h-6 " />
            </button>
          </article>
        )
      })}
    </section>
  )
}

export default JobCard
