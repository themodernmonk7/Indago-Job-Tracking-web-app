const JobTypeTag = ({ jobType }) => {
  return (
    <div>
      <span
        className={`rounded-full border px-2 py-1 text-xs font-medium  capitalize tracking-wider ${
          jobType === "full-time" && " border-pink-500 text-pink-500 "
        } ${jobType === "part-time" && " border-blue-500 text-blue-500 "} ${
          jobType === "internship" && " border-purple-500 text-purple-500  "
        } ${jobType === "remote" && " border-fuchsia-500 text-fuchsia-500 "} `}
      >
        {" "}
        {jobType}{" "}
      </span>
    </div>
  )
}

export default JobTypeTag
