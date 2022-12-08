import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { JobCard, PaginationButton } from "../components"
import { getAllJobs } from "../features/allJobs/allJobsSlice"
const JobContainer = () => {
  const { isLoading, jobs, total_jobs, num_of_pages, page } = useSelector(
    (store) => store.allJobs
  )
  const dispatch = useDispatch()

  // dispatch the getAllJobs action when component is rendering
  useEffect(() => {
    dispatch(getAllJobs())
  }, [page])

  if (isLoading) {
    return <h3> Loading... </h3>
  }

  if (jobs.length === 0) {
    return <h3 className=" text-center text-3xl my-10  ">No Jobs to display</h3>
  }

  return (
    <>
      {/* Total jobs and sort function */}
      <section className=" my-10 flex justify-between items-center ">
        <div className="">
          <h3>
            {" "}
            {total_jobs} Job{jobs.length > 1 && "s"} found
          </h3>
        </div>
        <div className="">
          <span>Sort by</span>
          <select
            name=""
            id=""
            className=" py-0 px-10 border-none bg-gray-100 capitalize "
          >
            <option value="latest">latest</option>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
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
