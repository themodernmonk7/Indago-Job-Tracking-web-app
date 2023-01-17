import { useMemo } from "react"
import { useState } from "react"
import { FiSearch } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { handleChange, clearFilters } from "../features/allJobs/allJobsSlice"

const SearchBarFilter = () => {
  const [localSearch, setLocalSearch] = useState("")
  const { searchJobStatus, searchJobType } = useSelector(
    (store) => store.allJobs
  )
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job)
  const jobStatusOptionsValue = ["all", ...statusOptions]
  const jobTypeOptionsValue = ["all", ...jobTypeOptions]
  const dispatch = useDispatch()

  const handleSearch = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }))
  }

  // Setup debounce
  const debounce = () => {
    let timeoutID
    return (e) => {
      setLocalSearch(e.target.value)
      clearTimeout()
      timeoutID = setTimeout(() => {
        dispatch(handleChange({ name: e.target.name, value: e.target.value }))
      }, 2000)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLocalSearch("")
    dispatch(clearFilters())
  }

  const optimizedDebounced = useMemo(() => debounce(), [])

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="  bg-white py-4 gap-10 md:grid md:grid-cols-4  mt-10 shadow-md rounded-2xl md:mx-8 px-5 lg:px-8 lg:mx-5 xl:mx-16 mx-4 space-y-2 md:space-y-0 "
      >
        {/* Search */}
        <div className="relative flex items-center md:border-r-2 border-b md:border-b-0 ">
          <FiSearch className="pointer-events-none absolute h-6 w-6 text-gray-600" />{" "}
          <input
            type="text"
            name="search"
            value={localSearch}
            className="   focus:outline-none border-none w-full px-4 pl-10 transition ease-in duration-200 text-black placeholder:text-gray-600 focus:ring-0 "
            placeholder="Front-end developer"
            onChange={optimizedDebounced}
          />
        </div>
        {/* Job Status */}
        <div className=" lg:grid md:border-r-2 md:w-full border-b md:border-b-0 ">
          <select
            name="searchJobStatus"
            value={searchJobStatus}
            id="jobStatus"
            className=" placeholder:font-light  focus:outline-none border-none w-full px4 transition ease-in duration-200 text-gray-600 focus:ring-0 capitalize  "
            onChange={handleSearch}
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
        <div className=" lg:grid md:border-r-2 md:w-full ">
          <select
            name="searchJobType"
            value={searchJobType}
            id="jobType"
            className=" placeholder:font-light  focus:outline-none border-none w-full  transition ease-in duration-200 text-gray-600 focus:ring-0 capitalize  "
            onChange={handleSearch}
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
        {/* Clear button */}
        <div className="flex justify-center md:justify-end items-center ">
          <button className="bg-gray-100 md:px-4 px-6 py-2  rounded-md active:scale-90 font-medium   ">
            Clear filters
          </button>
        </div>
      </form>
    </>
  )
}

export default SearchBarFilter
