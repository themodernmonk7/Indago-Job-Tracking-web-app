import { Outlet} from "react-router-dom"
import {
  Sidebar,
  ProfileBanner,
  MobileNavLink,
  Loading,
} from "../../components"
import { Suspense } from "react"
import InstallPrompt from "../../utils/InstallPrompt"

const SharedLayout = () => {
  return (
    <>
      <InstallPrompt />
      <main className=" flex  bg-gray-100  ">
        <Sidebar />
        <div className=" w-full ">
          <ProfileBanner />
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </div>
        <MobileNavLink />
      </main>
    </>
  )
}

export default SharedLayout
