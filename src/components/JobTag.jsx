const JobTag = ({ status }) => {
  return (
    <span
      className={`uppercase text-[10px] tracking-widest font-medium  px-2 py-1 rounded-full flex justify-center items-center absolute top-4 right-6 md:right-10   ${
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
