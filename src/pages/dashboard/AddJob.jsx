import React from "react"
import { FormRow } from "../../components"

const AddJob = () => {
  return (
    <>
      <section className=" my-10 mb-28 px-5 md:px-8  space-y-10   ">
        <h4 className="text-3xl">Add Job</h4>
        <form className="  xl:w-2/3 space-y-6 ">
          <div className="flex flex-col md:flex-row  items-center justify-between md:space-x-28 space-y-6 md:space-y-0 ">
            {/* First name */}
            <div className=" input_container ">
              <label
                htmlFor=""
                className=" label_style "
              >
                Position
              </label>
              <input
                type="text"
                placeholder="your first name"
                className="input_style"
              />
            </div>
            {/* Last name */}
            <div className="input_container ">
              <label
                htmlFor=""
                className="label_style"
              >
                Company
              </label>
              <input
                type="text"
                placeholder=" your last name"
                className="input_style"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between md:space-x-28 space-y-6 md:space-y-0">
            {/* Job Location */}
            <div className="input_container ">
              <label
                htmlFor=""
                className="label_style"
              >
                Job Location
              </label>
              <input
                type="email"
                placeholder="youremail@gmai.com"
                className=" input_style"
              />
            </div>
            {/* Job Type */}
            <div className="input_container ">
              <label
                htmlFor=""
                className="label_style"
              >
                Job Type
              </label>
              <select
                name=""
                id=""
                className="input_style capitalize "
              >
                <option value="full-time">full-time</option>
                <option value="part-time">part-time</option>
                <option value="internship">internship</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between md:space-x-28 space-y-6 md:space-y-0 ">
            {/* Status */}
            <div className="input_container ">
              <label
                htmlFor=" "
                className="label_style"
              >
                Status
              </label>
              <select
                name=""
                id=""
                className="input_style capitalize "
              >
                <option value="interview">interview</option>
                <option value="declined">declined</option>
                <option value="pending">pending</option>
              </select>
            </div>
            {/* Company Logo */}
            <div className="input_container ">
              <label
                htmlFor=" "
                className="label_style"
              >
                Company Logo
              </label>
              <input
                type="file"
                accept=".jpeg, .jpg, .png"
                placeholder="Choose file..."
                className="input_style bg-white file:mr-4  file:px-4
                 file:border-0 file:bg-white
                file:text-sm file:font-semibold file:text-primary  text-gray-400 w-full "
              />
            </div>
          </div>

          <div className="input_container ">
            <label htmlFor="" className="text-gray-500">
              About Job
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              maxLength={50}
              placeholder="Brief description about your job..."
              className="input_style resize-none "
            ></textarea>
          </div>
          <div className=" space-x-6 flex md:justify-end  ">
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
