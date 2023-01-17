import { Link } from "react-router-dom"
import { Logo } from "../components"

const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center my-4 py-2 px-4 ">
      <div className=" flex items-center space-x-2 ">
        <Logo className="h-8 " />
        <h2 className="text-3xl text-center font-semibold ">indago</h2>
      </div>
      <div className=" md:space-x-8 hidden md:flex  ">
        <Link
          to="/register"
          className=" font-medium rounded-md hover:bg-gray-100 px-4 py-3 "
        >
          Log in
        </Link>
        <Link
          to="/register"
          className=" bg-secondary-700 px-4 py-3 rounded-md text-white text-xs md:text-sm font-medium hover:bg-secondary-800 "
        >
          {" "}
          Get Started{" "}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
