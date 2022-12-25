import { Link } from "react-router-dom"
import { Logo } from "../components"

const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center py-4 ">
      <div className=" py-4 flex items-center space-x-2 ">
        <Logo className="h-10" />
        <h2 className="text-3xl text-center font-semibold ">indago</h2>
      </div>
      <div className=" space-x-12 text-lg ">
        <Link>Find Jobs</Link>
        <Link>Sign In</Link>
        <Link
          to="/register"
          className="bg-gray-100 px-4 py-2 rounded-md text-primary font-medium "
        >
          {" "}
          Register{" "}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
