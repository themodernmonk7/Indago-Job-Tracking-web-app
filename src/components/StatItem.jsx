const StatItem = ({ title, icon, count, color, bcg }) => {
  return (
    <article className=" bg-gradient-to-tr from-blue-600 via-blue-700 to-blue-800/90 text-white rounded-3xl xl:h-60 p-10 md:p-5 lg:p-8 space-y-10 flex flex-col justify-center shadow-xl shadow-blue-500/40  ">
      <div className=" flex items-center space-x-6 ">
        <p className="  outline-dashed outline-blue-500 hover:scale-110  outline-2 outline-offset-4 rounded-lg px-2 py-1 transition-all duration-300 ease-in  ">
          {icon}
        </p>
        <p className="xl:text-xl font-medium text-gray-300 capitalize  ">
          {" "}
          {title}
        </p>
      </div>
      <p className="font-bold text-5xl xl:text-7xl opacity-30 ">
        {" "}
        {count}{" "}
        <span className="text-lg font-normal text-green-500 "> +4.5% </span>{" "}
      </p>
    </article>
  )
}

export default StatItem
