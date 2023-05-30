import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  JobCard,
  Loading,
  NoJobsMessage,
  PaginationButton,
} from "../components"
import { getAllJobs, handleChange } from "../features/allJobs/allJobsSlice"

const JobContainer = () => {
  // Read data data from the allJobs store
  const {
    isLoading,
    jobs,
    total_jobs,
    num_of_pages,
    page,
    search,
    searchJobStatus,
    searchJobType,
    sort,
    sortOptions,
  } = useSelector((store) => store.allJobs)

  // Dispatch actions
  const dispatch = useDispatch()

  // dispatch the getAllJobs action when component is rendering
  useEffect(() => {
    dispatch(getAllJobs())
  }, [page, search, searchJobStatus, searchJobType, sort])

  const handleSort = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }))
  }

  if (isLoading) {
    return <Loading className="h-full" />
  }

  if (jobs.length === 0) {
    return <NoJobsMessage />
  }

  return (
    <>
      {/* Total jobs and sort function */}
      <section className=" my-10  flex items-center justify-between lg:mx-5 xl:mx-16 ">
        <h3 className="px-6 text-sm font-medium md:px-10 lg:px-0 ">
          {" "}
          {total_jobs} Job{jobs.length > 1 && "s"} found
        </h3>
        <div>
          <span className="text-sm lowercase text-gray-500 ">Sort by </span>
          <select
            name="sort"
            id="sort"
            onChange={handleSort}
            value={sort}
            className=" border-none bg-gray-100 py-0 font-medium capitalize focus:ring-0  "
          >
            {sortOptions.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              )
            })}
          </select>
        </div>
      </section>

      {/* Job card */}
      <section
        className={`${
          num_of_pages > 1 ? "mb-20 md:mb-20" : "mb-36 lg:mb-20 "
        } grid grid-cols-1 gap-5 px-5 md:grid-cols-2 lg:mx-5 lg:grid-cols-2  lg:px-0 xl:mx-16 xl:grid-cols-3`}
      >
        {jobs.map((job) => {
          return <JobCard key={job._id} {...job} />
        })}
      </section>
      {/* Pagination */}
      {num_of_pages > 1 && <PaginationButton />}
    </>
  ) 
}

export default JobContainer
