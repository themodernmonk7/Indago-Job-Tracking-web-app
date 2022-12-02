import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { FormRow, FormRowSelect } from "../components"
import {
  handleChangeFunction,
  clearValues,
  createJob,
} from "../features/job/jobSlice"

const AddJobForm = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    aboutJob,
  } = useSelector((store) => store.job)
  const dispatch = useDispatch()
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(handleChangeFunction({ name, value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!position || !company || !jobLocation) {
      toast.error("Please fill out all fields")
      return
    }

    // dispatch action
    dispatch(
      createJob({ position, company, jobLocation, jobType, status, aboutJob })
    )
  }

  return (
    <>
      <form className="  xl:w-2/3 space-y-6 " onSubmit={handleSubmit}>
        <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-x-28 gap-y-8   ">
          {/* Position */}
          <FormRow
            type="text"
            name="position"
            placeholder="your first name"
            value={position}
            handleChange={handleChange}
          />
          {/* Company */}
          <FormRow
            type="text"
            name="company"
            placeholder="your company name"
            value={company}
            handleChange={handleChange}
          />
          {/* Job location */}
          <FormRow
            type="text"
            name="jobLocation"
            labelText="Job Location"
            placeholder="My city"
            value={jobLocation}
            handleChange={handleChange}
          />
          {/* Job type */}
          <FormRowSelect
            name="jobType"
            labelText="job type"
            value={jobType}
            options={jobTypeOptions}
            handleChange={handleChange}
          />
          {/* Job status */}
          <FormRowSelect
            name="status"
            value={status}
            options={statusOptions}
            handleChange={handleChange}
          />
          {/* Company logo */}
          <FormRow
            type="file"
            name="companyLogo"
            labelText="Company Logo"
            className=" bg-white file:mr-4  file:px-4
            file:border-0 file:bg-white
            file:text-sm file:font-semibold file:text-primary  text-gray-300 "
          />
          {/* About job textarea */}
          <div className=" md:col-span-2 ">
            <FormRow
              type="text"
              name="aboutJob"
              labelText="About Job"
              placeholder="Brief description about your job..."
              textArea={true}
              value={aboutJob}
              handleChange={handleChange}
            />
          </div>
        </div>
        <div className=" flex justify-end space-x-4 ">
          <button
            type="submit"
            className=" w-44 py-2 rounded-xl active:outline outline-2 outline-primary hover:outline border border-gray-300 font-medium bg-primary text-white capitalize disabled:cursor-not-allowed "
            disabled={isLoading}
          >
            {isLoading ? "Adding Job..." : "+ Add Job"}
          </button>
          <button
            type="button"
            className="bg-white px-10 py-2 rounded-xl active:outline outline-2 outline-primary hover:outline border border-gray-300 font-medium capitalize"
            onClick={() => dispatch(clearValues())}
          >
            clear
          </button>
        </div>
      </form>
    </>
  )
}

export default AddJobForm
