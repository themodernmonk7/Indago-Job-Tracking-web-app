import links from "../utils/links"
import {NavLink} from 'react-router-dom'
const SidebarNavLink = () => {
  return (
    <>
    {links.map((link) => {
        const {id, path, text,  icon, } = link
        return <NavLink key={id} to={path} end className={({ isActive }) => {
            return isActive
              ? "flex items-center w-full capitalize text-lg px-4 py-2 space-x-6 bg-gray-100 rounded-xl font-medium transition-all duration-200 ease-out text-primary "
              : "flex items-center w-full capitalize text-lg px-4 py-2 space-x-6 text-gray-500 hover:bg-gray-100 rounded-xl font-medium transition-all duration-300 ease-out "
          }} >
            <span> {icon}</span>
            <span>{text} </span>
        </NavLink>
    })}
    </>
  )
}

export default SidebarNavLink