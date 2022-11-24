import { Link } from "react-router-dom"
import IndagoLogo from "./Logo"

const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center py-4 ">
      <div className=" py-4 flex items-center space-x-2 ">
        <IndagoLogo height={10} />
      </div>
      <div className=" space-x-12 text-lg ">
        <Link>Find Jobs</Link>
        <Link>Sign In</Link>
        <Link className="bg-gray-100 px-4 py-2 rounded-md text-primary font-medium ">
          {" "}
          Register{" "}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
