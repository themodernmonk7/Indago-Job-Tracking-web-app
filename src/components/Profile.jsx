import React from "react"
import userImage from "../assets/user.png"
import { HiCheckBadge } from "react-icons/hi2"
const Profile = () => {
  return (
    <>
      <section className="flex justify-between px-8 py-6">
        <div className=" flex space-x-6">
          <div className="border w-24 h-24  rounded-full relative">
            <img
              src={userImage}
              alt=""
              className="object-cover object-center w-full h-full  bg-center rounded-full"
            />
            <span>
              {" "}
              <HiCheckBadge className="w-6 h-6 absolute  right-0 bottom-1 text-green-600" />{" "}
            </span>
          </div>
          <div className=" w-2/3 space-y-2 text-gray-800">
            <h3 className="text-2xl font-semibold">Samantha William</h3>
            <p className="text-sm text-gray-500 font-medium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, dolores?
            </p>
          </div>
        </div>
        <div className=" flex flex-col justify-between">
          <button className="bg-[#f53465]  text-white px-6 py-1 ml-auto rounded-full text-sm font-medium">
            Edit Profile
          </button>
          <div className="flex space-x-6 text-xs ">
            <p className="flex flex-col ">
              <span className="font-semibold">1,098</span>
              Posts
            </p>
            <p className="flex flex-col">
              <span className="font-semibold">1,098</span>
              Followers
            </p>
            <p className="flex flex-col">
              <span className="font-semibold">1,098</span>
              Following
            </p>
          </div>
        </div>
      </section>
      <hr />
    </>
  )
}

export default Profile
