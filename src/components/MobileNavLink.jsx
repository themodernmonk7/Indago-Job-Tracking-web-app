import { NavLink } from "react-router-dom"
import links from "../utils/links"

const MobileNavLink = () => {
  return (
    <div className="fixed bottom-0 bg-white border-t lg:hidden w-full py-4 ">
      <ul className="flex px-4 justify-around items-center  ">
        {links.map((link) => {
          const { id, icon, path } = link
          return (
            <NavLink
              key={id}
              to={path}
              end
              className={({ isActive }) => {
                return isActive
                  ? "text-primary bg-gray-200/80 px-2 py-2 rounded-full "
                  : "text-gray-500 active:scale-90 px-2 py-2 rounded-full "
              }}
            >
              {" "}
              {icon}{" "}
            </NavLink>
          )
        })}
      </ul>
    </div>
  )
}

export default MobileNavLink