import { NavLink } from "react-router-dom"
import links from "../utils/links"
import Logo from "../assets/Logo.png"
import { HiOutlineLogout } from "react-icons/hi"

const BigSidebar = () => {
  return (
    <>
      <section className="w-1/3 xl:w-1/5 lg:flex flex-col h-screen sticky top-0 hidden ">
        <div className=" flex flex-col justify-between items-center h-full bg-white ">
          <div>
            {/* Logo title */}
            <div className=" font-semibold flex justify-center items-center space-x-2 py-[22px] mt-10 ">
              <img
                src={Logo}
                alt=""
                className=" w-126 h-8 object-cover mix-blend-multiply "
              />
              <h2 className="text-3xl text-center">indago</h2>
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
                        ? "flex   items-center w-full capitalize text-lg px-4 py-2 space-x-6 bg-gray-100 rounded-xl font-medium "
                        : "flex items-center w-full capitalize text-lg px-4 py-2 space-x-6 text-gray-500 hover:bg-gray-100 rounded-xl font-medium  "
                    }}
                  >
                    <span> {icon}</span>
                    <span>{text} </span>
                  </NavLink>
                )
              })}
            </div>
          </div>

          <div className="  mb-10 w-[185px] hover:bg-gray-100 rounded-xl ">
            <button className="flex items-center w-full px-4 py-2 font-medium space-x-6 capitalize text-gray-500  ">
              <span className="">
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
