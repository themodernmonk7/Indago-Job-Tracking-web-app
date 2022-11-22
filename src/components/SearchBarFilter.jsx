import React from "react"
import { FiSearch } from "react-icons/fi"
import { BsFilter } from "react-icons/bs"

const SearchBarFilter = () => {
  return (
    <>
      <form className="hidden bg-white py-4 gap-10 md:grid grid-cols-4 lg:grid-cols-4 md:place-items-center mt-10 shadow-md rounded-2xl md:mx-8 lg:mx-0 px-5 lg:px-8  ">
        {/* Search */}
        <div className="relative flex items-center border-r-2 ">
          <FiSearch className="pointer-events-none absolute h-6 w-6 text-gray-600" />{" "}
          <input
            type="text"
            className="   focus:outline-none border-none w-full px-4 pl-10 transition ease-in duration-200 text-black placeholder:text-gray-600 placeholder:font-medium focus:ring-0 "
            placeholder="Front-end developer"
          />
        </div>
        {/* Job Status */}
        <div className=" lg:grid border-r-2 w-full ">
          <select
            name=""
            id=""
            className=" placeholder:font-light  focus:outline-none border-none w-full px4 transition ease-in duration-200 text-gray-600 font-medium focus:ring-0 "
          >
            <option value="" className="">
              Job Status
            </option>
            <option value="interview">interview</option>
            <option value="declined">declined</option>
            <option value="pending">pending</option>
          </select>
        </div>

        {/* Job type */}
        <div className=" lg:grid border-r-2 w-full ">
          <select
            name=""
            id=""
            className=" placeholder:font-light  focus:outline-none border-none w-full  transition ease-in duration-200 text-gray-600 font-medium focus:ring-0 "
          >
            <option value="">Job Type</option>
            <option value="all">all</option>
            <option value="full-time">full-time</option>
            <option value="part-time">part-time</option>
            <option value="internship">internship</option>
          </select>
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-gray-100 md:px-4 px-6 py-2 font-medium rounded-md active:scale-90   ">
            Clear filters
          </button>
        </div>
      </form>
    </>
  )
}

export default SearchBarFilter
