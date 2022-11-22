import { NavLink } from "react-router-dom"
import links from "../utils/links"
import { HiOutlineLogout } from "react-icons/hi"
import IndagoLogo from "./Logo"
const BigSidebar = () => {
  return (
    <>
      <section className="w-1/3 xl:w-1/4 lg:flex flex-col h-screen sticky top-0 hidden ">
        <div className=" flex flex-col justify-between px-12 h-full bg-white ">
          <div>
            {/* Logo title */}
            <div className=" flex justify-center items-center space-x-2 py-[22px] mt-10 ">
              <IndagoLogo height={10}  />
            </div>
            {/* Menu items */}
            <div className=" mt-12 capitalize flex flex-col justify-center items-center space-y-10 ">
              {links.map((link) => {
                const { text, path, id, icon } = link
                return (
                  <NavLink
                    to={path}
                    key={id}
                    className={({ isActive }) => {
                      return isActive
                        ? "flex items-center w-full capitalize text-lg px-4 py-2 space-x-6 bg-gray-100 rounded-xl font-medium transition-all duration-200 ease-out text-primary "
                        : "flex items-center w-full capitalize text-lg px-4 py-2 space-x-6 text-gray-500 hover:bg-gray-100 rounded-xl font-medium transition-all duration-300 ease-out "
                    }}
                  >
                    <span> {icon}</span>
                    <span>{text} </span>
                  </NavLink>
                )
              })}
            </div>
          </div>

          <div className="  mb-10 w-[185px] hover:bg-red-200/70 bg-red-100/60 rounded-xl ">
            <button className="flex justify-center items-center w-full px-4 py-2  space-x-2 capitalize text-gray500 text-red-400/60  ">
              <span>
                {" "}
                <HiOutlineLogout className=" w-6 h-6 " />
              </span>
              <span> logout </span>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default BigSidebar
