import { Outlet} from "react-router-dom"
import { Sidebar, ProfileBanner, MobileNavLink } from "../../components"

const SharedLayout = () => {
  return (
    <>
      <main className="flex bg-gray-100 ">
        <Sidebar />
        <div className=" w-full ">
          <ProfileBanner />
          <Outlet />
        </div>
        <MobileNavLink />
      </main>
    </>
  )
}

export default SharedLayout
