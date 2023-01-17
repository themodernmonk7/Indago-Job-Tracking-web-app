import React from "react"
import { HiOutlineLogout } from "react-icons/hi"
import { useDispatch } from "react-redux"
import { clearStore } from "../features/user/userSlice"

const Logout = () => {
  const dispatch = useDispatch()

  return (
    <div className="  mb-10 w-[185px] hover:bg-red-200/70 bg-red-100/60 rounded-xl ">
      <button
        className="flex justify-center items-center w-full px-4 py-2  space-x-2 capitalize text-gray500 text-red-400/60  "
        onClick={() => dispatch(clearStore("Logout Successful..."))}
      >
        <span>
          {" "}
          <HiOutlineLogout className=" w-6 h-6 " />
        </span>
        <span> logout </span>
      </button>
    </div>
  )
}

export default Logout
