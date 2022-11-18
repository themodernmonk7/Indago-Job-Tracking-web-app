import React from "react"
import userImage from "../assets/user.png"

const ProfileFormRow = () => {
  return (
    <>
      <section className=" my-10 flex flex-col justify-center items-center ">
        <div className="xl:w-1/2 xl:border-2 rounded-xl xl:shadow-xl px-4 md:px-8 py-6">
          <form>
            <div className="flex items-center space-x-4">
              <img
                src={userImage}
                alt=""
                className="object-cover object-center w-20 h-20 md:w-24 md:h-24 border rounded-full"
              />
              <label className=" bg-primary text-white px-4 text-sm md:text-base py-2 font-medium hover:bg-primary/80 rounded-md ">
                Upload new picture
              </label>
              <button className="bg-gray-100 px-4 py-2 rounded-md font-medium hover:bg-gray-200/80 text-sm md:text-base ">
                Delete
              </button>
            </div>
          </form>
          {/* Form select */}
          <form className=" space-y-8 mt-10">
            <div className="space-y-2">
              <label htmlFor="" className=" font-medium text-gray-700   ">
                Name
              </label>
              <input
                type="text"
                className="rounded-md border-2 border-gray-200 placeholder:text-sm focus:outline-none focus:border-[#f53465]/30 focus:ring-[#f53465]/10 focus:ring-4 hover:ring-[#f53465]/10 hover:ring-4 w-full py-3 px-4 hover:border-gray-300 transition ease-in hover:-border-translate-y-1 hover:border-scale-110 duration-200"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="" className=" font-medium text-gray-700   ">
                Last Name
              </label>
              <input
                type="text"
                className="rounded-md border-2 border-gray-200 placeholder:text-sm focus:outline-none focus:border-[#f53465]/30 focus:ring-[#f53465]/10 focus:ring-4 hover:ring-[#f53465]/10 hover:ring-4 w-full py-3 px-4 hover:border-gray-300 transition ease-in hover:-border-translate-y-1 hover:border-scale-110 duration-200"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="" className=" font-medium text-gray-700   ">
                Email
              </label>
              <input
                type="email"
                className="rounded-md border-2 border-gray-200 placeholder:text-sm focus:outline-none focus:border-[#f53465]/30 focus:ring-[#f53465]/10 focus:ring-4 hover:ring-[#f53465]/10 hover:ring-4 w-full py-3 px-4 hover:border-gray-300 transition ease-in hover:-border-translate-y-1 hover:border-scale-110 duration-200"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="" className=" font-medium text-gray-700   ">
                Location
              </label>
              <input
                type="text"
                className="rounded-md border-2 border-gray-200 placeholder:text-sm focus:outline-none focus:border-[#f53465]/30 focus:ring-[#f53465]/10 focus:ring-4 hover:ring-[#f53465]/10 hover:ring-4 w-full py-3 px-4 hover:border-gray-300 transition ease-in hover:-border-translate-y-1 hover:border-scale-110 duration-200"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="" className=" font-medium text-gray-700 ">
                Bio
              </label>
              <textarea
                name=""
                id=""
                cols="200"
                rows="3"
                className="resize-none rounded-md border-2 border-gray-200 placeholder:text-sm focus:outline-none focus:border-[#f53465]/30 focus:ring-[#f53465]/10 focus:ring-4 hover:ring-[#f53465]/10 hover:ring-4 w-full py-3 px-4 hover:border-gray-300 transition ease-in hover:-border-translate-y-1 hover:border-scale-110 duration-200"
              ></textarea>
              <span className="text-sm text-gray-400">
                Brief description for your profile.
              </span>
            </div>
          </form>
          <button className=" ml-auto block mt-5 bg-primary text-white px-4 py-2 font-medium hover:bg-primary/80 rounded-md ">
            Save Profile
          </button>
        </div>
      </section>
    </>
  )
}

export default ProfileFormRow
