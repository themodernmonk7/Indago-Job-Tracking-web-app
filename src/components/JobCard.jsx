import {
  HiOutlineTrash,
  HiOutlinePencilAlt,
  HiOutlineBriefcase,
  HiOutlineLocationMarker,
  HiOutlineDotsVertical,
} from "react-icons/hi"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { deleteJob, setEditJob } from "../features/job/jobSlice"
import { JobTag } from "../components"
import moment from "moment/moment"
import defaultImage from "../assets/defaultLogo.png"
import { useRef, useState } from "react"

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
  const [menuDropdown, setMenuDropdown] = useState(false)
  const dropdownRef = useRef(null)
  const dispatch = useDispatch()
  const jobCreationDate = moment(createdAt).format("MMM Do YY")

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setMenuDropdown(false)
    }
  }

  const handleButtonClick = () => {
    setMenuDropdown(!menuDropdown)
  }
  // Attach click event listener to the document
  document.addEventListener("mousedown", handleClickOutside)

  return (
    <article className="relative min-h-full w-full rounded-md border bg-white p-5 pb-10  lg:max-w-sm  ">
      {/* Company Logo */}
      <div className="flex items-start justify-start space-x-5  ">
        <img
          width={200}
          height={100}
          src={image || defaultImage}
          alt={`${company} Logo`}
          className="h-10 w-10 rounded-full border object-contain object-center shadow-inner  md:bg-white xl:h-12 xl:w-12  "
        />
        {/* Job info */}
        <div className=" w-full space-y-1 ">
          <div className=" flex items-center justify-between ">
            {/* company */}
            <p className=" font-light capitalize text-gray-400 ">{company}</p>
            <JobTag status={status} />
          </div>
          {/* Job position */}
          <p className=" font-semibold capitalize ">{position}</p>
          <div className=" flex justify-between text-sm font-light capitalize text-gray-600 ">
            {/* Job location */}
            <p className=" flex items-center justify-center ">
              {" "}
              <HiOutlineLocationMarker className=" mr-1 " /> {jobLocation}
            </p>
            {/* Job type */}
            <p className=" flex items-center justify-center ">
              {" "}
              <HiOutlineBriefcase className=" mr-1 " /> {jobType}{" "}
            </p>
          </div>
        </div>
      </div>
      {/* Edit and Delete button */}
      <div className=" absolute right-5 bottom-3  ">
        <div ref={dropdownRef} className=" relative flex justify-end ">
          <span className="text-xs text-gray-500 "> {jobCreationDate} </span>
          <button
            aria-label="Job Options"
            type="button"
            onClick={handleButtonClick}
          >
            <HiOutlineDotsVertical />
          </button>
          {menuDropdown && (
            <div className=" absolute bottom-0 top-6 z-10  text-gray-700">
              <div className=" flex flex-col space-y-1 rounded-md border bg-white p-2 text-sm shadow-md ">
                {/* Edit link */}
                <Link
                  aria-label="Edit Job"
                  to="/add-job"
                  className=" flex items-center space-x-2 hover:text-blue-600  "
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
                  <span>
                    <HiOutlinePencilAlt />
                  </span>
                  <span>Edit </span>
                </Link>
                {/* Delete button */}
                <button
                  type="button"
                  aria-label="Delete Job"
                  className="  flex items-center space-x-2 hover:text-red-600  "
                  onClick={() => dispatch(deleteJob(_id))}
                >
                  <span>
                    <HiOutlineTrash />
                  </span>
                  <span>Delete</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default JobCard
