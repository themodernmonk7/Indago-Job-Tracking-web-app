import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearStore } from "../features/user/userSlice"
import UserImage from "./UserImage"
import { HiOutlineLogout } from "react-icons/hi"

const ProfileBanner = () => {
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const [showLogoutButton, setShowLogoutButton] = useState(false)

  const showLogoutButtonRef = useRef(null)
  const handleClickOutside = (e) => {
    if (
      showLogoutButtonRef.current &&
      !showLogoutButtonRef.current.contains(e.target)
    )
      setShowLogoutButton(false)
  }
  const toggleLogout = () => {
    dispatch(clearStore("Logout successful!"))
  }
  document.addEventListener("mousedown", handleClickOutside)
  return (
    <>
      <section className="sticky top-0 z-20 flex border-b bg-white px-4 py-1 md:px-8  ">
        <div className=" flex w-full items-center  justify-between space-x-6 ">
          <h4 className="md:text-2xl">
            {" "}
            Welcome back,{" "}
            <span className="font-medium"> {`${user.name}!`}</span>{" "}
          </h4>
          <div className=" relative " ref={showLogoutButtonRef}>
            <button
              className=" rounded-full border "
              type="button"
              onClick={() => setShowLogoutButton(!showLogoutButton)}
            >
              <UserImage className={"h-12 w-12 md:h-14 md:w-14"} />
            </button>
            {showLogoutButton && (
              <div className=" absolute right-5 space-y-1 rounded-md border bg-white px-5 py-2 text-sm text-gray-700 shadow-md">
                <button
                  type="button"
                  onClick={toggleLogout}
                  className=" flex items-center justify-center capitalize  "
                >
                  <HiOutlineLogout className=" mr-2 h-5 w-5 " /> Signout
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProfileBanner
