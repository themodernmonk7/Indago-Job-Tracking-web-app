const StatItem = ({ title, icon, count, color, bcg }) => {
  return (
    <article className=" rounded-2xl bg-gradient-to-tr from-blue-600 via-blue-700 to-blue-800/90 text-white shadow-xl shadow-blue-500/40 ">
      <div className=" flex flex-row items-center justify-center space-x-6 py-4 px-5 ">
        <p className="  rounded-lg outline-dashed outline-2  outline-offset-4 outline-blue-500 transition-all duration-300 ease-in hover:scale-110  ">
          {icon}
        </p>
        <p className="w-1/2 font-medium capitalize text-gray-300 xl:text-xl  ">
          {" "}
          {title}
        </p>
        <p className="text-5xl font-bold opacity-30 xl:text-7xl "> {count} </p>
      </div>
    </article>
  )
}

export default StatItem
