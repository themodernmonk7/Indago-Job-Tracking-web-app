import React from "react"
import { FiSearch } from "react-icons/fi"
import { BsFilter } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"

const SearchBarFilter = () => {
  const { search, searchJobStatus, searchJobType } = useSelector(
    (store) => store.allJobs
  )
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job)
  const jobStatusOptionsValue = ["all", ...statusOptions]
  const jobTypeOptionsValue = ["all", ...jobTypeOptions]

  const handleChange = (e) => {}

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="hidden bg-white py-4 gap-10 md:grid grid-cols-4 lg:grid-cols-4 md:place-items-center mt-10 shadow-md rounded-2xl md:mx-8 lg:mx-0 px-5 lg:px-8  "
      >
        {/* Search */}
        <div className="relative flex items-center border-r-2 ">
          <FiSearch className="pointer-events-none absolute h-6 w-6 text-gray-600" />{" "}
          <input
            type="text"
            name="search"
            value={search}
            className="   focus:outline-none border-none w-full px-4 pl-10 transition ease-in duration-200 text-black placeholder:text-gray-600 placeholder:font-medium focus:ring-0 "
            placeholder="Front-end developer"
            onChange={handleChange}
          />
        </div>
        {/* Job Status */}
        <div className=" lg:grid border-r-2 w-full ">
          <select
            name="jobStatus"
            value={searchJobStatus}
            id="jobStatus"
            className=" placeholder:font-light  focus:outline-none border-none w-full px4 transition ease-in duration-200 text-gray-600 font-medium focus:ring-0 capitalize "
            onChange={handleChange}
          >
            {jobStatusOptionsValue.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {" "}
                  {item}{" "}
                </option>
              )
            })}
          </select>
        </div>

        {/* Job type */}
        <div className=" lg:grid border-r-2 w-full ">
          <select
            name="jobType"
            value={searchJobType}
            id="jobType"
            className=" placeholder:font-light  focus:outline-none border-none w-full  transition ease-in duration-200 text-gray-600 font-medium focus:ring-0 capitalize  "
            onChange={handleChange}
          >
            {jobTypeOptionsValue.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {" "}
                  {item}{" "}
                </option>
              )
            })}
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
