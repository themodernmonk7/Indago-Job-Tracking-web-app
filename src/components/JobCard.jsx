import React from "react"
import data from "../data"
// import { HiEllipsisVertical, HiTrash } from "react-icons/hi2"
import { HiDotsVertical, HiOutlineTrash } from "react-icons/hi"
import { AiOutlineEdit } from "react-icons/ai"

const JobCard = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10 my-10 mb-28 place-items-center ">
      {/* <div className=" flex justify-between ">
        <p>75 Jobs found</p>
        <p>Sort by latest</p>
      </div> */}
      {data.map((item) => {
        const { id, company, position, status, jobType, jobLocation, image } =
          item
        return (
          <article
            key={id}
            className="bg-white px-6 md:px-10 py-8 rounded-xl space-y-6 border max-w-xs lg:max-w-sm "
          >
            <div className="flex justify-between items-center">
              <img
                src={image}
                alt=""
                className="xl:w-14 xl:h-14 w-10 h-10 object-contain border shadow-inner  object-center rounded-full md:bg-white"
              />
              <span className="text-gray-400 text-sm font-medium ">
                {" "}
                7 July{" "}
              </span>
            </div>
            <div className="flex justify-between items-center h-16 ">
              <h4 className="text-xl font-semibold w-3/5 "> {position} </h4>
              <span
                className={`uppercase text-[10px] tracking-widest font-medium  px-2 py-1 rounded-full flex justify-center items-center  ${
                  status === "Declined" && "bg-red-300/70 text-red-700"
                } ${
                  status === "Interview" && "bg-green-300/70 text-green-700"
                } ${
                  status === "Pending" && "bg-yellow-300/70 text-yellow-700"
                } `}
              >
                {" "}
                {status}{" "}
              </span>
            </div>
            <div className="">
              <span
                className={`capitalize tracking-wider border rounded-full px-2 py-1  font-medium text-xs ${
                  jobType === "Full-time" && " text-pink-500 border-pink-500 "
                } ${
                  jobType === "Part-time" && " text-blue-500 border-blue-500 "
                } ${
                  jobType === "Internship" &&
                  " text-purple-500 border-purple-500  "
                } ${
                  jobType === "Remote" &&
                  " text-fuchsia-500 border-fuchsia-500 "
                } `}
              >
                {" "}
                {jobType}{" "}
              </span>
            </div>
            <div className=" space-y-2 ">
              <h4 className="text-md font-medium capitalize">
                {" "}
                {company}, {jobLocation}
              </h4>
              <p className="text-md text-gray-400">
                {/* Add fading away text effect */}I applied in this company
                because my skill.{" "}
                <button className="text-blue-500 text-sm ">..read more</button>
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
