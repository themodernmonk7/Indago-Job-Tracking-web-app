import { Link } from "react-router-dom"
import AddJobImage from "../assets/AddJobs.svg"

const NoJobsMessage = () => {
  return (
    <section className=" my-10 flex  flex-col items-center justify-center xl:my-24  ">
      <img
        src={AddJobImage}
        alt="graph"
        className=" h-44 w-44 md:h-52 md:w-52 xl:h-60 xl:w-60 "
      />
      <h3 className=" mt-5 text-center text-xl font-light text-gray-500   ">
        No Jobs to display.
      </h3>
      <Link
        to="/add-job"
        className=" mt-4 mb-20 rounded-md border border-gray-300 bg-primary px-4 py-3 text-xs font-medium text-white outline-2 outline-primary hover:outline active:outline md:mt-10 md:px-5 md:text-base "
      >
        {" "}
        + Add a Job
      </Link>
    </section>
  )
}

export default NoJobsMessage
