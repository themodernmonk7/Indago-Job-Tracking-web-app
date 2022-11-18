import React from "react"
import userImage from "../assets/user.png"
import { HiCheckBadge, HiCog6Tooth } from "react-icons/hi2"
import { IoLogOut } from "react-icons/io5"
const Profile = () => {
  return (
    <>
      <section className="flex justify-between px-4 md:px-8 py-4 xl:py-6">
        <div className=" flex items-center space-x-6">
          <div className="border w-14 h-14 md:w-24 md:h-24  rounded-full relative">
            <img
              src={userImage}
              alt=""
              className="object-cover object-center w-full h-full  bg-center rounded-full"
            />
            <span>
              {" "}
              <HiCheckBadge className="w-5 h-5 xl:w-6 xl:h-6 absolute -right-1  xl:right-0 -bottom-1 xl:bottom-1 text-green-600" />{" "}
            </span>
          </div>
          <div className=" w-2/3 lg:space-y-2 text-gray-800">
            <h3 className="md:text-2xl text-base font-semibold">
              Samantha William
            </h3>
            <p className="md:text-sm text-xs  text-gray-500 xl:font-medium">
              {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, dolores? */}
              Quality Assurance
            </p>
          </div>
        </div>
        <div className=" flex justify-start lg:hidden items-center">
          <IoLogOut className="w-6 h-6 " />
        </div>
        <div className=" md:flex flex-col justify-between hidden ">
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
