import React from "react"
import { ProfileFormRow } from "../../components"
import userImage from "../../assets/user.png"

const Profile = () => {
  return (
    <>
      <section className=" my-10 space-y-10 px-8 ">
        <h4 className="text-3xl "> Account Settings </h4>
        <div className=" space-x-10 text-lg  ">
          <button className="bg-white px-8 py-2 rounded-xl active:outline outline-2 outline-primary hover:outline">
            My details
          </button>
          <button className="bg-white px-8 py-2 rounded-xl active:outline outline-2 outline-primary hover:outline">
            Profile
          </button>
          <button className="bg-white px-8 py-2 rounded-xl active:outline outline-2 outline-primary hover:outline">
            Password
          </button>
          <button className="bg-white px-8 py-2 rounded-xl active:outline outline-2 outline-primary hover:outline">
            API
          </button>
        </div>
        <div className=" space-y-2 ">
          <h4 className="text-2xl">Profile</h4>
          <p className=" text-gray-500">
            Update your phone and personal details here.
          </p>
        </div>
        <div className="flex items-center space-x-10">
          <img
            src={userImage}
            alt=""
            className="w-24 h-24 object-cover rounded-full border "
          />
          <div className=" space-x-6 ">
            <button className="bg-white px-12 py-2 rounded-xl active:outline outline-2 outline-primary hover:outline border border-gray-300 font-medium">
              Change
            </button>
            <button className="bg-white px-12 py-2 rounded-xl active:outline outline-2 outline-primary hover:outline border border-gray-300 font-medium">
              Remove
            </button>
          </div>
        </div>

        {/* Form */}
        <form className=" w-2/3 space-y-6 ">
          <div className="flex items-center justify-between space-x-28 ">
            {/* First name */}
            <div className=" flex flex-col space-y-2 w-full ">
              <label
                htmlFor=""
                className="text-gray-500 after:content-['*'] after:ml-1 after:text-red-500  "
              >
                First name
              </label>
              <input
                type="text"
                placeholder="your first name"
                className=" py-3  rounded-xl border-none ring-1 ring-gray-300 focus:ring-2 focus:ring-primary placeholder:text-gray-300 placeholder:text-sm shadow "
              />
              {/* rounded-xl border-2 border-gray-200 placeholder:text-sm focus:outline-none focus:ring-primary focus:ring-1 hover:ring-primary hover:ring-1 py-4 placeholder:text-gray-300 transition-all duration-200 ease-in-out delay-100 text-lg */}
            </div>
            {/* Last name */}
            <div className="flex flex-col space-y-2 w-full ">
              <label htmlFor="" className="text-gray-500">
                Last name
              </label>
              <input
                type="text"
                placeholder=" your last name"
                className="py-3  rounded-xl border-none ring-1 ring-gray-300 focus:ring-2 focus:ring-primary placeholder:text-gray-300 placeholder:text-sm shadow"
              />
            </div>
          </div>

          <div className="flex items-center justify-between space-x-28">
            {/* Email */}
            <div className="flex flex-col space-y-2 w-full ">
              <label
                htmlFor=""
                className="text-gray-500 after:content-['*'] after:ml-1 after:text-red-500"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="youremail@gmai.com"
                className=" py-3  rounded-xl border-none ring-1 ring-gray-300 focus:ring-2 focus:ring-primary placeholder:text-gray-300 placeholder:text-sm shadow"
              />
            </div>
            {/* Location */}
            <div className="flex flex-col space-y-2 w-full ">
              <label htmlFor=" " className="text-gray-500">
                Location
              </label>
              <input
                type="text"
                placeholder="my city"
                className=" py-3  rounded-xl border-none ring-1 ring-gray-300 focus:ring-2 focus:ring-primary placeholder:text-gray-300 placeholder:text-sm shadow"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2 ">
            <label htmlFor="" className="text-gray-500 ">
              Bio
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Brief description for your profile..."
              className=" py-3  rounded-xl border-none ring-1 ring-gray-300 focus:ring-2 focus:ring-primary placeholder:text-gray-300 placeholder:text-sm resize-none shadow "
            ></textarea>
          </div>
          <div className=" space-x-6 flex justify-end  ">
            <button className=" px-10 py-2 rounded-xl active:outline outline-2 outline-primary hover:outline border border-gray-300 font-medium bg-primary text-white ">
              Save
            </button>
            <button className="bg-white px-10 py-2 rounded-xl active:outline outline-2 outline-primary hover:outline border border-gray-300 font-medium">
              Cancel
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Profile
