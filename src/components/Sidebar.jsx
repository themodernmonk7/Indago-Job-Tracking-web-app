import { Logo, SidebarNavLink } from "../components"
import { Logout } from "../components"
const Sidebar = () => {
  return (
    <>
      <aside className="w-1/3 xl:w-1/4 lg:flex flex-col h-screen sticky top-0 hidden ">
        <div className=" flex flex-col justify-between px-12 h-full bg-white ">
          <div>
            {/* Logo title */}
            <div className=" flex justify-center items-center space-x-2 mt-7 ">
              <Logo className="h-8" />
              <h3 className="text-3xl font-bold">Indago</h3>
            </div>
            {/* Menu items */}
            <div className=" mt-28 capitalize flex flex-col justify-center items-center space-y-10 ">
              <SidebarNavLink />
            </div>
          </div>

          {/* Logout button */}
          <Logout />
        </div>
      </aside>
    </>
  )
}

export default Sidebar
