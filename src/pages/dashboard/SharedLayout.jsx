import { Outlet, Link, NavLink } from "react-router-dom"
import { BigSidebar, Profile } from "../../components"
import { HiPlus, HiUser, HiCollection, HiViewGrid } from "react-icons/hi"
import links from "../../utils/links"

const SharedLayout = () => {
  return (
    <>
      <main className="flex ">
        <BigSidebar />
        <div className=" w-full lg:mx-5 xl:mx-16 ">
          <Profile />
          <Outlet />
        </div>
        <div className="fixed bottom-0 bg-white border-t lg:hidden w-full py-4 ">
          <ul className="flex px-4 justify-around items-center  ">
            {links.map((link) => {
              const {id, icon, path} = link
              return <NavLink key={id} to={path} className={({isActive}) => {
                return isActive ? 'text-primary bg-gray-200/80 px-2 py-2 rounded-full ' : 'text-gray-500 active:scale-90 px-2 py-2 rounded-full '
              }}  > {icon} </NavLink>
            })}            
          </ul>
        </div>
      </main>
    </>
  )
}

export default SharedLayout
