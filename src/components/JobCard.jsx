import { HiOutlineTrash, HiOutlinePencilAlt } from "react-icons/hi"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { deleteJob, setEditJob } from "../features/job/jobSlice"

const JobCard = ({
  _id,
  company,
  image,
  jobLocation,
  jobType,
  position,
  status,
}) => {
  const dispatch = useDispatch()
  return (
    <article className="bg-white px-6 md:px-10 py-8 rounded-xl space-y-6 border max-w-xs lg:max-w-sm ">
      <div className="flex justify-between items-center">
        <h3 className="bg-blue-200 px-3 rounded-full py-1">
          {company.charAt(0)}
        </h3>
        {/* <img
          src={image}
          // alt={`${company} Logo`}
          className="xl:w-14 xl:h-14 w-10 h-10 object-contain border shadow-inner  object-center rounded-full md:bg-white"
        /> */}
        <span className="text-gray-400 text-sm font-medium "> 7 July </span>
      </div>
      <div className="flex justify-between items-center h-16 ">
        <h4 className="text-xl font-semibold w-3/5 capitalize ">
          {" "}
          {position}{" "}
        </h4>
        <span
          className={`uppercase text-[10px] tracking-widest font-medium  px-2 py-1 rounded-full flex justify-center items-center  ${
            status === "declined" && "bg-red-300/70 text-red-700"
          } ${status === "interview" && "bg-green-300/70 text-green-700"} ${
            status === "pending" && "bg-yellow-300/70 text-yellow-700"
          } `}
        >
          {" "}
          {status}{" "}
        </span>
      </div>
      <div>
        <span
          className={`capitalize tracking-wider border rounded-full px-2 py-1  font-medium text-xs ${
            jobType === "full-time" && " text-pink-500 border-pink-500 "
          } ${jobType === "part-time" && " text-blue-500 border-blue-500 "} ${
            jobType === "internship" && " text-purple-500 border-purple-500  "
          } ${
            jobType === "remote" && " text-fuchsia-500 border-fuchsia-500 "
          } `}
        >
          {" "}
          {jobType}{" "}
        </span>
      </div>
      <div className=" space-y-2 ">
        <h4 className="text-md font-medium capitalize">
          {" "}
          {company}, {jobLocation}
        </h4>
        <p className="text-md text-gray-400">
          {/* Add fading away text effect */}I applied in this company because
          my skill.{" "}
          <button className="text-blue-500 text-sm ">..read more</button>
        </p>
      </div>
      <div className="flex justify-between">
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
