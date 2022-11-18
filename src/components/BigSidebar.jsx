import { Link } from "react-router-dom"
import { HiPlus, HiUser, HiCollection, HiViewGrid } from "react-icons/hi"
const BigSidebar = () => {
  return (
    <>
      <section className="w-1/3 xl:w-1/5 hidden md:flex flex-col h-screen bg-gray-100/50 ">
        {/* Logo title */}
        <div className=" py-6 font-bold flex justify-center items-center">
          <h2 className="text-4xl text-center">Indago</h2>
        </div>
        {/* Menu items */}
        <div className=" mt-5 space-y-4 font-semibold capitalize flex flex-col justify-center ">
          <Link
            to="/"
            className="flex justify-center items-center rounded-r-xl py-5 w-3/4"
          >
            <span className=" bg-blue-10 mr-4 ">
              <HiViewGrid className="w-6 h-6" />
            </span>
            <span className=""> Dashboard</span>
          </Link>

          <Link
            to="/all-jobs"
            href="#"
            className="flex justify-center items-center text-black hover:bg-[#f53465] rounded-r-xl hover:text-white py-5 w-3/4"
          >
            <span className="mr-4 grid place-items-center">
              <HiCollection className="w-6 h-6" />
            </span>
            <span className="">All Jobs</span>
          </Link>

          <Link
            to="/add-job"
            className="flex justify-center items-center text-black hover:bg-[#f53465] rounded-r-xl hover:text-white py-5 w-3/4"
          >
            <span>
              <HiPlus className="w-6 h-6" />
            </span>
            Add Job
          </Link>

          <Link
            to="/profile"
            href="#"
            className="flex justify-center items-center text-black hover:bg-[#f53465] rounded-r-xl hover:text-white py-5 w-3/4"
          >
            <span>
              <HiUser className="w-6 h-6" />
            </span>
            Profile
          </Link>
        </div>
      </section>
    </>
  )
}

export default BigSidebar
