import { Link } from "react-router-dom"
import AddJobImage from "../assets/AddJobs.svg"

const NoJobsMessage = () => {
  return (
    <section className=" my-28  flex flex-col justify-center items-center  ">
      <img src={AddJobImage} alt="" className=" w-44 h-44  md:w-72 md:h-72" />
      <h3 className=" text-center text-3xl my-10  ">No Jobs to display</h3>
      <Link
        to="/add-job"
        className=" px-6 md:px-10 py-2 rounded-xl active:outline outline-2 outline-primary hover:outline border border-gray-300 font-medium bg-primary text-white "
      >
        {" "}
        + Add a Job
      </Link>
    </section>
  )
}

export default NoJobsMessage
