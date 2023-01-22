import { Logo, SidebarNavLink } from "../components"
import { Logout } from "../components"
const Sidebar = () => {
  return (
    <>
      <aside className="sticky top-0 hidden h-screen w-1/3 flex-col lg:flex xl:w-1/4 ">
        <div className=" flex h-full flex-col justify-between bg-white px-12 ">
          <div>
            {/* Logo title */}
            <div className=" mt-4 flex items-center justify-center space-x-2 ">
              <Logo className="h-8" />
              <h3 className="text-3xl font-bold">Indago</h3>
            </div>
            {/* Menu items */}
            <div className=" mt-28 flex flex-col items-center justify-center space-y-10 capitalize ">
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
