import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { JobCard } from "../components"
import { getAllJobs } from "../features/allJobs/allJobsSlice"

const JobContainer = () => {
  const { isLoading, jobs, total_jobs } = useSelector((store) => store.allJobs)
  const dispatch = useDispatch()

  // dispatch the getAllJobs action when component is rendering
  useEffect(() => {
    dispatch(getAllJobs())
  }, [])

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
          <h3>75 Jobs found</h3>
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
      <JobCard />
      {/* Pagination */}
    </>
  )
}

export default JobContainer
