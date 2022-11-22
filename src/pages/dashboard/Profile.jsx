import React from "react"
import { ProfileFormRow } from "../../components"
import userImage from "../../assets/user.png"

const Profile = () => {
  return (
    <>
      <section className=" my-10 mb-28 space-y-10 px-5 md:px-8 ">
        <h4 className="text-3xl "> Account Settings </h4>
        <div className=" space-x-10 text-lg hidden md:block  ">
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
        {/* Profile */}
        <div className=" space-y-2 ">
          <h4 className="text-2xl">Profile</h4>
          <p className=" text-gray-500">
            Update your phone and personal details here.
          </p>
        </div>
        {/* Profile Picture change */}
        <div className="flex items-center md:space-x-10 space-x-6 ">
          <img
            src={userImage}
            alt=""
            className=" w-20 h-20 lg:w-24 lg:h-24 object-cover rounded-full border "
          />
          <div className=" md:space-x-6 space-x-2 flex md:flex-row ">
            <button className="bg-primary text-white px-4 md:px-12 py-2 rounded-xl active:outline outline-2 outline-primary hover:outline border border-gray-300 md:font-medium text-xs md:text-base">
              Change
            </button>
            <button className="bg-white px-4 md:px-12 py-2 rounded-xl active:outline outline-2 outline-primary hover:outline border border-gray-300 md:font-medium text-xs md:text-base">
              Remove
            </button>
          </div>
        </div>

        {/* Form */}
        <form className=" xl:w-2/3 space-y-6 ">
          <div className="flex flex-col md:flex-row items-center justify-between md:space-x-28 space-y-6 md:space-y-0 ">
            {/* First name */}
            <div className=" input_container ">
              <label
                htmlFor=""
                className="label_style  "
              >
                First name
              </label>
              <input
                type="text"
                placeholder="your first name"
                className=" input_style "
              />
              {/* rounded-xl border-2 border-gray-200 placeholder:text-sm focus:outline-none focus:ring-primary focus:ring-1 hover:ring-primary hover:ring-1 py-4 placeholder:text-gray-300 transition-all duration-200 ease-in-out delay-100 text-lg */}
            </div>
            {/* Last name */}
            <div className="input_container ">
              <label htmlFor="" className="label_style">
                Last name
              </label>
              <input
                type="text"
                placeholder=" your last name"
                className="input_style"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between md:space-x-28 space-y-6 md:space-y-0">
            {/* Email */}
            <div className="input_container ">
              <label
                htmlFor=""
                className="label_style"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="youremail@gmai.com"
                className=" input_style"
              />
            </div>
            {/* Location */}
            <div className="input_container ">
              <label htmlFor=" " className=" label_style after:content-none ">
                Location
              </label>
              <input
                type="text"
                placeholder="my city"
                className=" input_style"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-2 ">
            <label htmlFor="" className=" label_style after:content-none  ">
              Bio
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Brief description for your profile..."
              className=" input_style resize-none "
            ></textarea>
          </div>
          <div className=" space-x-6 flex md:justify-end  ">
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
