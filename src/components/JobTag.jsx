const JobTag = ({ status }) => {
  return (
    <span
      className={` flex  items-center justify-center rounded-md px-2 py-1 text-[10px] font-medium uppercase tracking-widest md:right-10   ${
        status === "declined" && "bg-red-300/20 text-red-600"
      } ${status === "interview" && "bg-green-300/20 text-green-600"} ${
        status === "pending" && "bg-yellow-300/20 text-yellow-600"
      } `}
    >
      {" "}
      {status}{" "}
    </span>
  )
}

export default JobTag
