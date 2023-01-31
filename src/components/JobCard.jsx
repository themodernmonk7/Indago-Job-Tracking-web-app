import { HiOutlineTrash, HiOutlinePencilAlt } from "react-icons/hi"
import { GoLocation } from "react-icons/go"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { deleteJob, setEditJob } from "../features/job/jobSlice"
import { JobTag, JobTypeTag, JobButton } from "../components"
import moment from "moment/moment"
import defaultImage from "../assets/defaultLogo.png"

 
const JobCard = ({
  _id,
  company,
  image,
  jobLocation,
  jobType,
  position,
  status,
  jobDescription,
  createdAt,
}) => {
  const dispatch = useDispatch()
  const jobCreationDate = moment(createdAt).format("MMM Do YY")
  return (
    <article className="relative min-h-full w-full space-y-4 rounded-xl border bg-white px-6  py-6  md:px-10 lg:max-w-sm   ">
      {/* Job Status */}
      <JobTag status={status} />

      {/* Company Logo */}
      <div className="flex items-center justify-between">
        <img
          src={image || defaultImage}
          alt={`${company} Logo`}
          className="h-12 w-12 rounded-full border object-contain object-center shadow-inner  md:bg-white xl:h-14 xl:w-14"
        />
        <span className="text-sm text-gray-400 "> {jobCreationDate} </span>
      </div>

      {/* Position */}
      <div className=" flex h-16 items-center ">
        <h4 className="text-xl  font-semibold capitalize "> {position} </h4>
      </div>

      {/* JOb Type Tag */}
      <JobTypeTag jobType={jobType} />

      {/* Company Name and Job location */}
      <div className=" max-w-2xl space-y-2  ">
        <h4 className="text-md flex items-center font-medium capitalize text-secondary-600   ">
          {" "}
          <span>
            {" "}
            <GoLocation className="mr-2 h-4 w-4 " />{" "}
          </span>
          {company}, {jobLocation}
        </h4>

        {/* Job Description */}
        <p className="text-md text-gray-400">
          {jobDescription === ""
            ? "Add Job description here for more clarity..."
            : jobDescription}
        </p>
      </div>
      {/* Edit and Delete button */}
      {/* <JobButton/> */}
      <div className="flex justify-between pt-5 ">
        <Link
          to="/add-job"
          className=" rounded-full px-2 py-2 text-gray-500 transition-all  duration-300  ease-in-out hover:bg-gray-100 hover:text-blue-500   "
          onClick={() =>
            dispatch(
              setEditJob({
                editJobId: _id,
                position,
                company,
                jobLocation,
                jobType,
                status,
                jobDescription,
                image,
              })
            )
          }
        >
          <HiOutlinePencilAlt className="h-5 w-5" />
        </Link>
        <button
          className="  rounded-full px-2 py-2 text-gray-500 transition-all  duration-300  ease-in-out hover:bg-gray-100 hover:text-red-500  "
          onClick={() => dispatch(deleteJob(_id))}
        >
          <HiOutlineTrash className="h-5 w-5 " />
        </button>
      </div>
    </article>
  )
}

export default JobCard
