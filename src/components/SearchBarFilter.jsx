import React from "react"
import { FiSearch } from "react-icons/fi"
import { BsFilter } from "react-icons/bs"

const SearchBarFilter = () => {
  return (
    <>
      <form className=" px-4 lg:px-8 lg:py-8 py-0 gap-10 grid grid-cols-1 lg:grid-cols-4 mt-10 lg:border lg:rounded-xl lg:mx-8 lg:shadow-md ">
        {/* Search */}
        <div className="relative flex items-center  text-gray-500">
          <FiSearch className="pointer-events-none absolute ml-5 h-6 w-6 text-gray-600" />{" "}
          <input
            type="text"
            className="rounded-full border border-gray-300 hover:bg-white focus:bg-white  placeholder:font-normal  focus:outline-none focus:border-[#f53465]/30 focus:ring-[#f53465]/10 focus:ring-4 hover:ring-[#f53465]/10 hover:ring-4 hover:border w-full py-3 px-4 pl-14 hover:border-gray-300 transition ease-in hover:-border-translate-y-1 hover:border-scale-110 duration-200 text-black placeholder:text-gray-400 font-medium "
            placeholder="UI/UX Engineer"
          />
        </div>
        {/* Filter button */}
        <div className="border block ml-auto rounded-md lg:hidden ">
          <a
            href=""
            className=" space-x-2 flex justify-center items-center px-2 py-1"
          >
            <BsFilter className="w-5 h-5" />
            <span>Filter</span>
          </a>
        </div>
        {/* Job Status */}
        <div className="hidden lg:grid">
          <select
            name=""
            id=""
            className=" rounded-md border border-gray-100 hover:bg-white focus:bg-white  bg-gray-100 placeholder:text-sm focus:outline-none focus:border-[#f53465]/30 focus:ring-[#f53465]/10 focus:ring-4 hover:ring-[#f53465]/10 hover:ring-4 hover:border capitalize text-gray-400 w-full py-4 hover:border-gray-300 transition ease-in hover:-border-translate-y-1 hover:border-scale-110 duration-200 "
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
        <div className="hidden lg:grid">
          <select
            name=""
            id=""
            className=" rounded-md border border-gray-100 hover:bg-white focus:bg-white  bg-gray-100 placeholder:text-sm focus:outline-none focus:border-[#f53465]/30 focus:ring-[#f53465]/10 focus:ring-4 hover:ring-[#f53465]/10 hover:ring-4 hover:border capitalize text-gray-400 w-full py-4 hover:border-gray-300 transition ease-in hover:-border-translate-y-1 hover:border-scale-110 duration-200"
          >
            <option value="">Job Type</option>
            <option value="all">all</option>
            <option value="full-time">full-time</option>
            <option value="part-time">part-time</option>
            <option value="internship">internship</option>
          </select>
        </div>

        {/* Sort */}
        <div className="hidden lg:grid">
          <select
            name=""
            id=""
            className="rounded-md border border-gray-100 hover:bg-white focus:bg-white  bg-gray-100 placeholder:text-sm focus:outline-none focus:border-[#f53465]/30 focus:ring-[#f53465]/10 focus:ring-4 hover:ring-[#f53465]/10 hover:ring-4 hover:border capitalize text-gray-400 w-full py-4 hover:border-gray-300 transition ease-in hover:-border-translate-y-1 hover:border-scale-110 duration-200"
          >
            <option value="">Sort</option>
            <option value="latest">latest</option>
            <option value="oldest">oldest</option>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
          </select>
        </div>
      </form>
    </>
  )
}

export default SearchBarFilter
