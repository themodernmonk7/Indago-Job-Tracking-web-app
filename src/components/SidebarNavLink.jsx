import links from "../utils/links"
import {NavLink} from 'react-router-dom'
const SidebarNavLink = () => {
  return (
    <>
      {links.map((link) => {
        const { id, path, text, icon } = link
        return (
          <NavLink
            key={id}
            to={path}
            end
            className={({ isActive }) => {
              return isActive
                ? "flex w-full items-center space-x-6 rounded-md bg-gray-100 px-4 py-2 text-lg font-medium capitalize text-primary transition-all duration-200 ease-out "
                : "flex w-full items-center space-x-6 rounded-md px-4 py-2 text-lg font-medium capitalize text-gray-500 transition-all duration-300 ease-out hover:bg-gray-100 "
            }}
          >
            <span> {icon}</span>
            <span>{text} </span>
          </NavLink>
        )
      })}
    </>
  )
}

export default SidebarNavLink