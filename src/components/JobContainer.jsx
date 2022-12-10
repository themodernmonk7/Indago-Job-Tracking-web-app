import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { JobCard, Loading, PaginationButton } from "../components"
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
    return <Loading />
  }

  if (jobs.length === 0) {
    return <h3 className=" text-center text-3xl my-10  ">No Jobs to display</h3>
  }

  return (
    <>
      {/* Total jobs and sort function */}
      <section className=" my-10 flex justify-between items-center ">
        <h3 className="text-sm px-6 md:px-10 lg:px-0 font-medium ">
          {" "}
          {total_jobs} Job{jobs.length > 1 && "s"} found
        </h3>
        <div>
          <span className="text-sm text-gray-500 lowercase ">Sort by </span>
          <select
            name="sort"
            id="sort"
            onChange={handleSort}
            value={sort}
            className=" py-0 border-none font-medium bg-gray-100 capitalize focus:ring-0  "
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
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10 my-10 place-items-center px-5 lg:px-0 ">
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
