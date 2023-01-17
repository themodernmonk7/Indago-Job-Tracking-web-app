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
      <section className="flex px-4 md:px-8 py-4 sticky top-0 bg-white z-10  ">
        <div className=" flex items-center justify-between  space-x-6 w-full">
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
              <UserImage className={"w-12 h-12 md:w-14 md:h-14"} />
            </button>
            <div
              className={
                showLogoutButton
                  ? " absolute visible md:right-10   "
                  : " hidden "
              }
            >
              <button
                type="button"
                onClick={toggleLogout}
                className=" bg-red-200 px-2 py-2 rounded-full  "
              >
                <HiOutlineLogout className="w-6 h-6 text-red-700 " />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProfileBanner
