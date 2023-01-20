import { Link } from "react-router-dom"
import AddJobImage from "../assets/AddJobs.svg"

const NoJobsMessage = () => {
  return (
    <section className=" xl:my-24 my-10  flex flex-col justify-center items-center  ">
      <img
        src={AddJobImage}
        alt=""
        className=" w-44 h-44 md:w-52 md:h-52 xl:w-60 xl:h-60 "
      />
      <h3 className=" text-center text-gray-500 text-xl mt-5 font-light   ">
        No Jobs to display.
      </h3>
      <Link
        to="/add-job"
        className=" px-4 md:px-5 py-3 rounded-xl active:outline outline-2 outline-primary hover:outline border border-gray-300 font-medium text-xs md:text-base mt-4 md:mt-10 bg-primary text-white mb-20 "
      >
        {" "}
        + Add a Job
      </Link>
    </section>
  )
}

export default NoJobsMessage
