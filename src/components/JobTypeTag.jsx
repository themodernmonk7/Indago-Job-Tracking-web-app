const JobTypeTag = ({ jobType }) => {
  return (
    <div>
      <span
        className={`capitalize tracking-wider border rounded-full px-2 py-1  font-medium text-xs ${
          jobType === "full-time" && " text-pink-500 border-pink-500 "
        } ${jobType === "part-time" && " text-blue-500 border-blue-500 "} ${
          jobType === "internship" && " text-purple-500 border-purple-500  "
        } ${jobType === "remote" && " text-fuchsia-500 border-fuchsia-500 "} `}
      >
        {" "}
        {jobType}{" "}
      </span>
    </div>
  )
}

export default JobTypeTag
