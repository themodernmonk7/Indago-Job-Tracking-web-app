import { Outlet} from "react-router-dom"
import { Sidebar, ProfileBanner, MobileNavLink } from "../../components"
import { Suspense } from "react"

const SharedLayout = () => {
  return (
    <>
      <main className=" flex  bg-gray-100  ">
        <Sidebar />
        <div className=" w-full ">
          <ProfileBanner />
          <Suspense fallback={<p> Loading... </p>}>
            <Outlet />
          </Suspense>
        </div>
        <MobileNavLink />
      </main>
    </>
  )
}

export default SharedLayout
