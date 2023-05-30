import { NavLink } from "react-router-dom"
import links from "../utils/links"

const MobileNavLink = () => {
  return (
    <div className="fixed bottom-0 z-50 w-full border-t bg-white py-2 lg:hidden ">
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
                  ? " flex flex-col items-center justify-center text-[10px] uppercase  text-primary  "
                  : "  flex flex-col items-center justify-center text-[10px] uppercase  text-gray-500  "
              }}
            >
              <span>{icon}</span>
              <span className=" mt-2 ">{text}</span>
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}

export default MobileNavLink