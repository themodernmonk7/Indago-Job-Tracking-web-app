const JobTag = ({ status }) => {
  return (
    <span
      className={`absolute top-4 right-6 flex  items-center justify-center rounded-full px-2 py-1 text-[10px] font-medium uppercase tracking-widest md:right-10   ${
        status === "declined" && "bg-red-300/70 text-red-700"
      } ${status === "interview" && "bg-green-300/70 text-green-700"} ${
        status === "pending" && "bg-yellow-300/70 text-yellow-700"
      } `}
    >
      {" "}
      {status}{" "}
    </span>
  )
}

export default JobTag
