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
        className="  mx-4 mt-10 gap-10 space-y-2 rounded-md  bg-white py-3 px-5 shadow-md md:mx-8 md:grid md:grid-cols-4 md:space-y-0 lg:mx-5 lg:px-8 xl:mx-16  "
      >
        {/* Search */}
        <div className="relative flex items-center border-b md:border-r-2 md:border-b-0  ">
          <FiSearch className="pointer-events-none absolute h-6 w-6 text-gray-400" />{" "}
          <input
            type="text"
            name="search"
            value={localSearch}
            className="   w-full border-none px-4 pl-10 text-black transition duration-200 ease-in placeholder:font-light placeholder:text-gray-400 focus:outline-none focus:ring-0 "
            placeholder="Search by job title..."
            onChange={optimizedDebounced}
          />
        </div>
        {/* Job Status */}
        <div className=" border-b md:w-full md:border-r-2 md:border-b-0 lg:grid ">
          <select
            name="searchJobStatus"
            value={searchJobStatus}
            id="jobStatus"
            className=" px4  w-full border-none capitalize text-gray-600 transition duration-200 ease-in placeholder:font-light focus:outline-none focus:ring-0  "
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
        <div className=" md:w-full md:border-r-2 lg:grid ">
          <select
            name="searchJobType"
            value={searchJobType}
            id="jobType"
            className=" w-full  border-none capitalize text-gray-600  transition duration-200 ease-in placeholder:font-light focus:outline-none focus:ring-0  "
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
        <div className="flex items-center justify-center md:justify-end ">
          <button className="rounded-md bg-gray-100 px-6 py-2  text-sm font-medium active:scale-90 md:px-4 xl:text-base ">
            Clear filters
          </button>
        </div>
      </form>
    </>
  )
}

export default SearchBarFilter
