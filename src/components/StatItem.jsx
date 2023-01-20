const StatItem = ({ title, icon, count, color, bcg }) => {
  return (
    <article className=" bg-gradient-to-tr from-blue-600 via-blue-700 to-blue-800/90 shadow-xl shadow-blue-500/40 text-white rounded-2xl ">
      <div className=" flex flex-row justify-center items-center space-x-6 py-4 px-5 ">
        <p className="  outline-dashed outline-blue-500 hover:scale-110  outline-2 outline-offset-4 rounded-lg transition-all duration-300 ease-in  ">
          {icon}
        </p>
        <p className="xl:text-xl font-medium text-gray-300 capitalize w-1/2  ">
          {" "}
          {title}
        </p>
        <p className="font-bold text-5xl xl:text-7xl opacity-30 "> {count} </p>
      </div>
    </article>
  )
}

export default StatItem
