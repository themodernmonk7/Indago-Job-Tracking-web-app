import { NavLink } from "react-router-dom"
import links from "../utils/links"

const MobileNavLink = () => {
  return (
    <div className="fixed bottom-0 w-full border-t bg-white py-4 lg:hidden ">
      <div className="flex items-center justify-around px-4  ">
        {links.map((link) => {
          const { id, icon, path, text } = link
          return (
            <NavLink
              aria-label={text}
              key={id}
              to={path}
              end
              className={({ isActive }) => {
                return isActive
                  ? "rounded-full bg-gray-200/80 px-2 py-2 text-primary "
                  : "rounded-full px-2 py-2 text-gray-500 active:scale-90 "
              }}
            >
              {" "}
              {icon}{" "}
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}

export default MobileNavLink