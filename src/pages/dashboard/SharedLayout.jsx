import { Outlet, Link } from "react-router-dom"
import { BigSidebar, Profile } from "../../components"
import { HiPlus, HiUser, HiCollection, HiViewGrid } from "react-icons/hi"
const SharedLayout = () => {
  return (
    <>
      <main className="flex">
        <BigSidebar />
        <div className="w-full">
          <Profile />
          <Outlet />
        </div>
        <div className="fixed bottom-0 bg-slate-800 text-white border-t md:hidden w-full py-4 ">
          <ul className="flex px-4 justify-around">
            <Link to="/">
              {" "}
              <HiViewGrid className="w-8 h-8 " />{" "}
            </Link>
            <Link to="all-jobs">
              {" "}
              <HiCollection className="w-8 h-8 " />{" "}
            </Link>
            <Link to="add-job">
              {" "}
              <HiPlus className="w-8 h-8 " />{" "}
            </Link>
            <Link to="profile">
              {" "}
              <HiUser className="w-8 h-8 " />{" "}
            </Link>
          </ul>
        </div>
      </main>
    </>
  )
}

export default SharedLayout
