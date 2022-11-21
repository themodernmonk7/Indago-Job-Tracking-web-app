import React from "react"
import { FormRow } from "../../components"

const AddJob = () => {
  return (
    <>
      <section className=" my-10 px-8 space-y-10 ">
        <h4 className="text-3xl">Add Job</h4>
        <form className=" w-2/3 space-y-6 ">
          <div className="flex items-center justify-between space-x-28 ">
            {/* First name */}
            <div className=" flex flex-col space-y-2 w-full ">
              <label
                htmlFor=""
                className="text-gray-500 after:content-['*'] after:ml-1 after:text-red-500"
              >
                Position
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
              <label
                htmlFor=""
                className="text-gray-500 after:content-['*'] after:ml-1 after:text-red-500"
              >
                Company
              </label>
              <input
                type="text"
                placeholder=" your last name"
                className="py-3  rounded-xl border-none ring-1 ring-gray-300 focus:ring-2 focus:ring-primary placeholder:text-gray-300 placeholder:text-sm shadow"
              />
            </div>
          </div>

          <div className="flex items-center justify-between space-x-28">
            {/* Job Location */}
            <div className="flex flex-col space-y-2 w-full ">
              <label
                htmlFor=""
                className="text-gray-500 after:content-['*'] after:ml-1 after:text-red-500"
              >
                Job Location
              </label>
              <input
                type="email"
                placeholder="youremail@gmai.com"
                className=" py-3  rounded-xl border-none ring-1 ring-gray-300 focus:ring-2 focus:ring-primary placeholder:text-gray-300 placeholder:text-sm shadow"
              />
            </div>
            {/* Job Type */}
            <div className="flex flex-col space-y-2 w-full ">
              <label
                htmlFor=""
                className="text-gray-500 after:content-['*'] after:ml-1 after:text-red-500"
              >
                Job Type
              </label>
              <select
                name=""
                id=""
                className=" py-3  rounded-xl border-none ring-1 ring-gray-300 focus:ring-2 focus:ring-primary placeholder:text-gray-300 placeholder:text-sm shadow capitalize "
              >
                <option value="full-time">full-time</option>
                <option value="part-time">part-time</option>
                <option value="internship">internship</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between space-x-28">
            {/* Status */}
            <div className="flex flex-col space-y-2 w-full ">
              <label
                htmlFor=" "
                className="text-gray-500 after:content-['*'] after:ml-1 after:text-red-500"
              >
                Status
              </label>
              <select
                name=""
                id=""
                className=" py-3  rounded-xl border-none ring-1 ring-gray-300 focus:ring-2 focus:ring-primary placeholder:text-gray-300 placeholder:text-sm shadow capitalize "
              >
                <option value="interview">interview</option>
                <option value="declined">declined</option>
                <option value="pending">pending</option>
              </select>
            </div>
            {/* Company Logo */}
            <div className="flex flex-col space-y-2 w-full ">
              <label
                htmlFor=" "
                className="text-gray-500 after:content-['*'] after:ml-1 after:text-red-500"
              >
                Company Logo
              </label>
              <input
                type="file"
                accept=".jpeg, .jpg, .png"
                placeholder="Choose file..."
                className="py-3  rounded-xl border-none bg-white ring-1 ring-gray-300 focus:ring-2 file:focus:ring-primary placeholder:text-gray-300 placeholder:text-sm shadow text-gray-300 file:mr-4  file:px-4
                 file:border-0 file:bg-white
                file:text-sm file:font-semibold file:text-primary lowercase "
              />
              {/* py-3  rounded-xl border-none ring-1 ring-gray-300 focus:ring-2 focus:ring-primary placeholder:text-gray-300 placeholder:text-sm shadow */}
            </div>
          </div>

          <div className="flex flex-col space-y-2 ">
            <label htmlFor="" className="text-gray-500">
              About job
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Brief description of your job..."
              className=" py-3  rounded-xl border-none ring-1 ring-gray-300 focus:ring-2 focus:ring-primary placeholder:text-gray-300 placeholder:text-sm resize-none shadow "
            ></textarea>
          </div>
          <div className=" space-x-6 flex justify-end  ">
            <button className=" px-10 py-2 rounded-xl active:outline outline-2 outline-primary hover:outline border border-gray-300 font-medium bg-primary text-white ">
              + Add
            </button>
            <button className="bg-white px-10 py-2 rounded-xl active:outline outline-2 outline-primary hover:outline border border-gray-300 font-medium">
              Clear
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default AddJob
