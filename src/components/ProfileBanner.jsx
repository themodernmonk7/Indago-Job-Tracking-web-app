import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearStore } from "../features/user/userSlice"
import UserImage from "./UserImage"
import { HiOutlineLogout } from "react-icons/hi"

const ProfileBanner = () => {
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const [showLogoutButton, setShowLogoutButton] = useState(false)

  const toggleLogout = () => {
    dispatch(clearStore("Logout successful!"))
  }
  return (
    <>
      <section className="sticky top-0 z-10 flex bg-white px-4 py-1 md:px-8  ">
        <div className=" flex w-full items-center  justify-between space-x-6">
          <h4 className="md:text-2xl">
            {" "}
            Welcome back,{" "}
            <span className="font-medium"> {`${user.name}!`}</span>{" "}
          </h4>
          <div>
            <button
              type="button"
              onClick={() => setShowLogoutButton(!showLogoutButton)}
            >
              <UserImage className={"h-12 w-12 md:h-14 md:w-14"} />
            </button>
            <div
              className={
                showLogoutButton
                  ? " visible absolute md:right-10   "
                  : " hidden "
              }
            >
              <button
                type="button"
                onClick={toggleLogout}
                className=" rounded-full bg-red-200 px-2 py-2  "
              >
                <HiOutlineLogout className="h-6 w-6 text-red-700 " />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProfileBanner
