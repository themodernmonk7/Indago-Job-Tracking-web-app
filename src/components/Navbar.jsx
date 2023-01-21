import { Link } from "react-router-dom"
import { Logo } from "../components"

const Navbar = () => {
  return (
    <nav className="container mx-auto my-4 flex items-center justify-between py-2 px-4 ">
      <div className=" flex items-center space-x-2 ">
        <Logo className="h-8 " />
        <h2 className="text-center text-3xl font-bold ">indago</h2>
      </div>
      <div className=" hidden md:flex md:space-x-8  ">
        <Link
          to="/register"
          className=" rounded-md px-4 py-3 font-medium hover:bg-gray-100 "
        >
          Log in
        </Link>
        <Link
          to="/register"
          className=" rounded-md bg-secondary-700 px-4 py-3 text-xs font-medium text-white hover:bg-secondary-800 md:text-sm "
        >
          {" "}
          Get Started{" "}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
