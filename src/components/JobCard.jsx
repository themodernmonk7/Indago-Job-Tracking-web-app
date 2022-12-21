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
    <article className="bg-white px-6 md:px-10 py-6 rounded-xl space-y-4 border max-w-xs lg:max-w-sm relative min-h-full    ">
      {/* Job Status */}
      <JobTag status={status} />

      {/* Company Logo */}
      <div className="flex justify-between items-center">
        <img
          src={image || defaultImage}
          alt={`${company} Logo`}
          className="xl:w-14 xl:h-14 w-12 h-12 object-contain border shadow-inner  object-center rounded-full md:bg-white"
        />
        <span className="text-gray-400 text-sm "> {jobCreationDate} </span>
      </div>

      {/* Position */}
      <div className=" flex items-center h-16 ">
        <h4 className="text-xl  font-semibold capitalize "> {position} </h4>
      </div>

      {/* JOb Type Tag */}
      <JobTypeTag jobType={jobType} />

      {/* Company Name and Job location */}
      <div className=" space-y-2 max-w-2xl  ">
        <h4 className="text-md font-medium capitalize flex items-center ">
          {" "}
          <span>
            {" "}
            {/* <HiLocationMarker className="w-5 h-5" />{" "} */}
            <GoLocation className="w-4 h-4 mr-2 " />{" "}
          </span>
          {company}, {jobLocation}
        </h4>

        {/* Job Description */}
        <p className="text-md text-gray-400">
          I applied in this company because my skill.
          {/* {jobDescription === ""
            ? "Add Job description here for more clarity..."
            : jobDescription} */}
          {/* <button className="text-blue-500 text-sm ">..read more</button> */}
        </p>
      </div>
      {/* Edit and Delete button */}
      {/* <JobButton/> */}
      <div className="flex justify-between pt-5 ">
        <Link
          to="/add-job"
          className=" hover:text-blue-500 text-gray-500 transition-all  "
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
          <HiOutlinePencilAlt className="w-5 h-5" />
        </Link>
        <button
          className="  hover:text-red-400 text-gray-500 transition-all"
          onClick={() => dispatch(deleteJob(_id))}
        >
          <HiOutlineTrash className="w-5 h-5 " />
        </button>
      </div>
    </article>
  )
}

export default JobCard
