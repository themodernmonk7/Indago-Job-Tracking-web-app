import React from "react"
import userImage from "../assets/user.png"
const Profile = () => {
  return (
    <>
      <section className="flex px-4 md:px-8 py-4 sticky top-0 bg-white z-10 lg:rounded-2xl lg:my-10 border-b backdrop-blur-sm shadow-md ">
        <div className=" flex items-center justify-between  space-x-6 w-full">
          <h4 className="md:text-2xl">
            {" "}
            Welcome back, <span className="font-medium">Sarah!</span>{" "}
          </h4>
          <div className=" w-10 h-10 md:w-12 md:h-12  rounded-full">
            <img
              src={userImage}
              alt=""
              className="object-cover object-center w-full h-full  bg-center rounded-full"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Profile
