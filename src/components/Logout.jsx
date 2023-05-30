import React from "react"
import { HiOutlineLogout } from "react-icons/hi"
import { useDispatch } from "react-redux"
import { clearStore } from "../features/user/userSlice"

const Logout = () => {
  const dispatch = useDispatch()

  return (
    <div className="  mb-10 w-[185px] rounded-md bg-red-100/60 hover:bg-red-200/70 ">
      <button
        className="text-gray500 flex w-full items-center justify-center space-x-2  px-4 py-2 capitalize text-red-400  "
        onClick={() => dispatch(clearStore("Logout Successful..."))}
      >
        <span>
          {" "}
          <HiOutlineLogout className=" h-6 w-6 " />
        </span>
        <span> logout </span>
      </button>
    </div>
  )
}

export default Logout
